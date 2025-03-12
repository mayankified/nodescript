const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function deleteBusinessesAboveID() {
  try {
    // Step 1: Get all business IDs above 7798
    const businessesToDelete = await prisma.business.findMany({
      where: { id: { gt: 7798 } },
      select: { id: true },
    });

    const businessIds = businessesToDelete.map((b) => b.id);

    if (businessIds.length === 0) {
      console.log("✅ No businesses found with ID > 7798.");
      return;
    }

    console.log(`🔍 Found ${businessIds.length} businesses with ID > 7798.`);

    // Step 2: Delete related ViewInteractions
    await prisma.viewInteraction.deleteMany({
      where: { businessId: { in: businessIds } },
    });
    console.log("🗑️ Deleted related ViewInteraction records.");

    // Step 3: Delete related Reviews
    await prisma.review.deleteMany({
      where: { businessId: { in: businessIds } },
    });
    console.log("🗑️ Deleted related Review records.");

    // Step 4: Delete related Reports
    await prisma.report.deleteMany({
      where: { businessId: { in: businessIds } },
    });
    console.log("🗑️ Deleted related Report records.");

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
    console.log("🔗 Removed favorites association.");

    // Step 6: Delete Businesses
    const deleteResult = await prisma.business.deleteMany({
      where: { id: { in: businessIds } },
    });

    console.log(`✅ Successfully deleted ${deleteResult.count} businesses with ID > 7798.`);

  } catch (error) {
    console.error("❌ Error deleting businesses:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
deleteBusinessesAboveID();
