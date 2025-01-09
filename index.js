const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const filePath = './bus.csv'; // Replace with your CSV file path
const checkpointFile = './checkpoint.json'; // File to store resume checkpoint

// Function to read checkpoint
function readCheckpoint() {
  if (fs.existsSync(checkpointFile)) {
    const checkpointData = fs.readFileSync(checkpointFile);
    return JSON.parse(checkpointData).lastInsertedIndex || 0;
  }
  return 0;
}

// Function to write checkpoint
function writeCheckpoint(index) {
  fs.writeFileSync(checkpointFile, JSON.stringify({ lastInsertedIndex: index }));
}

async function importCsv() {
  const businesses = [];

  console.log(`Reading CSV file from: ${filePath}`);
  let lastInsertedIndex = readCheckpoint(); // Start from last checkpoint
  console.log(`Resuming from index: ${lastInsertedIndex}`);

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      const imageUrls = parseJsonString(row.imageUrls);
      const keywords = parseJsonString(row.keyword);

      businesses.push({
        businessName: row.businessName,
        phoneNumber: row.phoneNumber || null,
        streetaddress: row.streetaddress || null,
        city: row.city || null,
        state: row.state || null,
        zipcode: row.zipcode || null,
        country: row.country || null,
        address: row.address || null,
        longitude: parseFloat(row.longitude) || null,
        latitude: parseFloat(row.latitude) || null,
        imageUrls: imageUrls || [],
        websiteUrl: row.websiteUrl || null,
        category: row.category || null,
        keywords: keywords || [],
      });
    })
    .on('end', async () => {
      console.log(`\nCSV file successfully processed. Total businesses parsed: ${businesses.length}\n`);

      console.log('Importing data into the database...');
      for (let i = lastInsertedIndex; i < businesses.length; i++) {
        const business = businesses[i];
        try {
          await prisma.business.create({
            data: {
              businessName: business.businessName,
              phoneNumber: business.phoneNumber,
              streetaddress: business.streetaddress,
              city: business.city,
              state: business.state,
              zipcode: business.zipcode,
              country: business.country,
              address: business.address,
              longitude: business.longitude,
              latitude: business.latitude,
              imageUrls: business.imageUrls,
              websiteUrl: business.websiteUrl,
              category: business.category,
              reviews: {}, // No reviews initially
              keywords: {
                connectOrCreate: business.keywords.map((keyword) => ({
                  where: { name: keyword.trim() },
                  create: {
                    name: keyword.trim(),
                    slug: keyword.trim().toLowerCase().replace(/ /g, '-'),
                  },
                })),
              },
            },
          });
          console.log(`Added business: ${business.businessName}`);
          writeCheckpoint(i); // Save the checkpoint after successful insertion
        } catch (error) {
          console.error(`Error adding ${business.businessName} at index ${i}:`, error);
          console.log(`Pausing to resume after internet reconnection...`);
          await delay(5000); // Wait before retrying
          i--; // Retry the same index
        }
      }

      console.log('All businesses imported successfully!');
      fs.unlinkSync(checkpointFile); // Remove checkpoint after successful import
      await prisma.$disconnect();
    })
    .on('error', (error) => {
      console.error('Error reading CSV file:', error);
      prisma.$disconnect();
      process.exit(1);
    });
}

// Helper function to parse JSON-like fields from CSV
function parseJsonString(str) {
  if (!str || str.trim() === "") return []; // Handle empty fields
  try {
    const cleanedStr = str.trim().replace(/^{/, "[").replace(/}$/, "]").replace(/""/g, '"');
    return JSON.parse(cleanedStr);
  } catch (error) {
    console.warn(`Failed to parse JSON: "${str}". Returning empty array.`);
    return []; // Return empty array if parsing fails
  }
}

// Helper function to add delay (for reconnection attempts)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

importCsv().catch((error) => {
  console.error('Error importing CSV:', error);
  prisma.$disconnect();
  process.exit(1);
});
