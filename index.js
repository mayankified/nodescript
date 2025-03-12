const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const csvFilePath = path.join(__dirname, "hahhaha.csv");

const BATCH_SIZE = 100; // Adjust based on system performance
const CONCURRENCY_LIMIT = 18; // Number of concurrent insertBatch calls

async function importBusinesses() {
  let totalInserted = 0;
  let tasks = []; // Array to hold in-flight batch insert promises
  let batch = [];

  try {
    const stream = fs.createReadStream(csvFilePath).pipe(csv());
    for await (const row of stream) {
      const imageUrls = [row["Image 1"], row["Image 2"], row["Image 3"]].filter(Boolean);

      batch.push({
        businessName: row["businessName"],
        phoneNumber: row["phoneNumber"],
        address: row["address"],
        city: row["city"],
        state: row["state"],
        zipcode: row["zipcode"],
        country: row["country"],
        streetaddress:row["streetaddress"],
        longitude: parseFloat(row["longitude"]) || 0.0,
        latitude: parseFloat(row["latitude"]) || 0.0,
        websiteUrl: row["websiteUrl"] || null,
        imageUrls: imageUrls.length > 0 ? imageUrls : [],
        category: row["category"] || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      if (batch.length === BATCH_SIZE) {
        // Start a new batch insertion without awaiting immediately
        tasks.push(insertBatch(batch));
        batch = []; // Reset the batch array

        // If we've hit our concurrency limit, wait for the current batch of tasks to complete
        if (tasks.length >= CONCURRENCY_LIMIT) {
          const results = await Promise.all(tasks);
          totalInserted += results.reduce((sum, count) => sum + count, 0);
          tasks = [];
        }
      }
    }
    
    // Handle any remaining rows
    if (batch.length > 0) {
      tasks.push(insertBatch(batch));
    }
    
    if (tasks.length > 0) {
      const results = await Promise.all(tasks);
      totalInserted += results.reduce((sum, count) => sum + count, 0);
    }
    
    console.log(`🎉 Import completed! Total Inserted: ${totalInserted}`);
  } catch (error) {
    console.error("❌ Error processing CSV:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Optimized Batch Insert Function
async function insertBatch(batch) {
  try {
    const result = await prisma.business.createMany({
      data: batch,
      skipDuplicates: true,
    });
    console.log(`✅ Inserted ${result.count} businesses`);
    return result.count;
  } catch (error) {
    console.error("❌ Error inserting batch:", error.message);
    return 0;
  }
}

// Run the script
importBusinesses();
