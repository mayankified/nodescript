// const { PrismaClient } = require("@prisma/client");
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

// Import the categories constant file (e.g., categories.js)
import pLimit from "p-limit";

// Set the maximum number of concurrent operations to 20
const CONCURRENCY_LIMIT = 20;
const categories = [
   
    {
        category: "Insurance",
        tags:"Indian insurance, Health insurance, Life insurance, Vehicle insurance, Home insurance, Travel insurance, Business insurance, Auto insurance, Term insurance, Premium plans, Insurance policy, Medical insurance, Personal accident insurance, Insurance claim, Family insurance, Group insurance, Motor insurance, Insurance broker, Insurance agent, Critical illness insurance, Retirement plan, Insurance consultation, Investment-linked insurance, Pension plan, Risk management, Insurance coverage, Liability insurance, Comprehensive insurance, Home protection insurance, Property insurance, Insurance renewal, Policyholder services, Insurance quote, Accident cover, Insurance document, Claim settlement, Insurance premium, Term plan, Universal life insurance, Whole life insurance, Endowment plan, Insurance terms, Health plan, Insurance advisor, Fraud prevention, Mobile insurance, Insurance verification, Claims assistance, Financial planning, Corporate insurance, Policy customization, Child insurance plan, Insurance investment, Insurance network, Policy benefits, Insurance eligibility, Insurance portfolio, insurance",
      }, 
    
    ]

async function updateBusinessesWithTags() {
  console.log("Starting updateBusinessesWithTags process...");

  try {
    // Loop over each category object from the imported file
    for (const { category, tags: tagString } of categories) {
      // Split the tag string into an array of individual tag names
      const tags = tagString
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      console.log(`Processing category: "${category}"`);
      console.log(`Parsed tags for category "${category}":`, tags);

      // Retrieve all businesses that match the current category and are in California,
      // including the existing tags on each business.
      console.log(`Fetching businesses for category "${category}" in California...`);
      const businesses = await prisma.business.findMany({
        where: {
            businessName:"Ten Kingz Insurance Services",
          category,
        },
        include: {
          Tag: true
        }
      });
      console.log(`Found ${businesses.length} businesses with category "${category}" in California`);

      // Create a concurrency limiter that ensures at most CONCURRENCY_LIMIT tasks run concurrently
      const limit = pLimit(CONCURRENCY_LIMIT);
      let processedCount = 0;

      // Map each business to an update task using the limiter
      const updatePromises = businesses.map(business =>
        limit(async () => {
          // Get the list of tag names already associated with this business
          const existingTags = business.Tag.map(tag => tag.name);
          // Compute missing tags that need to be added
          const missingTags = tags.filter(tag => !existingTags.includes(tag));
            console.log(missingTags)
          // If there are missing tags, update the business
          if (missingTags.length !== 0) {
            await prisma.business.update({
              where: { id: business.id },
              data: {
                Tag: {
                  connectOrCreate: missingTags.map(tag => ({
                    where: { name: tag },
                    create: { name: tag }
                  }))
                }
              }
            });
          }
          
          processedCount++;
          // Log counter every 10 processed businesses or when complete
          if (processedCount % 10 === 0 || processedCount === businesses.length) {
            console.log(`Processed ${processedCount} of ${businesses.length} businesses for category "${category}"`);
          }
        })
      );

      // Wait for all update operations in this category to finish
      await Promise.allSettled(updatePromises);
      console.log(`Completed updating businesses for category "${category}" in California`);
    }

    console.log("All eligible businesses have been updated with their respective tags.");
  } catch (error) {
    console.error("Error updating businesses:", error);
  } finally {
    console.log("Disconnecting from Prisma...");
    await prisma.$disconnect();
    console.log("Disconnected from Prisma.");
  }
}

// Run the script
updateBusinessesWithTags();

