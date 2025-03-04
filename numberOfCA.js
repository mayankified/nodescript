const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function countAndListBusinessesInCA() {
  try {
    // Count the number of businesses in California
    const count = await prisma.business.count({
      where: { state: "California" },
    });
    console.log(`Number of businesses in CA: ${count}`);

    // List any 5 businesses in California
    const businesses = await prisma.business.findMany({
      where: { state: "California" },
      take: 5, // Retrieves 5 records
    });

    console.log("Listing 5 businesses in California:");
    businesses.forEach((business, index) => {
      console.log(`${index + 1}. ${business.businessName} - ${business.address}, ${business.city}`);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

countAndListBusinessesInCA();
