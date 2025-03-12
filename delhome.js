const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function deleteCaliforniaHomeServiceBusinesses() {
  try {
    // Step 1: Get all business IDs in California with category "Home service"
    const businesses = await prisma.business.findMany({
      where: {
        state: "California",
        category: "Home service",
      },
      select: { id: true },
    });

    const businessIds = businesses.map((b) => b.id);

    if (businessIds.length === 0) {
      console.log("No businesses found in California with 'Home service' category.");
      return;
    }

    console.log(`Found ${businessIds.length} businesses in California with 'Home service' category.`);

    // Step 2: Delete related ViewInteractions
    await prisma.viewInteraction.deleteMany({
      where: { businessId: { in: businessIds } },
    });
    console.log("Deleted related ViewInteraction records.");

    // Step 3: Delete related Reviews
    await prisma.review.deleteMany({
      where: { businessId: { in: businessIds } },
    });
    console.log("Deleted related Review records.");

    // Step 4: Delete related Reports
    await prisma.report.deleteMany({
      where: { businessId: { in: businessIds } },
    });
    console.log("Deleted related Report records.");

    // Step 5: Remove businesses from UserFavorites relation
    const usersWithFavorites = await prisma.user.findMany({
      where: {
        favorites: {
          some: { id: { in: businessIds } },
        },
      },
      select: { id: true },
    });

    for (const user of usersWithFavorites) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          favorites: {
            disconnect: businessIds.map((id) => ({ id })),
          },
        },
      });
    }
    console.log("Removed favorites association.");

    // Step 6: Delete Businesses
    const deleteResult = await prisma.business.deleteMany({
      where: { id: { in: businessIds } },
    });

    console.log(`Deleted ${deleteResult.count} businesses in California with 'Home service' category.`);

  } catch (error) {
    console.error("Error deleting businesses:", error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteCaliforniaHomeServiceBusinesses();
