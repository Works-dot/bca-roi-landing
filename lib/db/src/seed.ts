import { db } from "./index";
import { cmsContentTable, calculatorConstantsTable } from "./schema";
import { sql } from "drizzle-orm";

const cmsContent: { key: string; value: string }[] = [
  { key: "hero.headline", value: "AUTOMATION WITHOUT THE OPERATIONAL BURDEN" },
  { key: "hero.subheadline", value: "We deliver business process automation as a fully managed service." },
  { key: "hero.checklist.1", value: "No infrastructure to build or maintain" },
  { key: "hero.checklist.2", value: "No internal automation team needed" },
  { key: "hero.checklist.3", value: "Fast ROI with predictable costs" },
  { key: "hero.cta", value: "Calculate Your ROI" },

  { key: "service.label", value: "MANAGED INTELLIGENT AUTOMATION" },
  { key: "service.quote", value: "You run the business. We run the automation." },
  { key: "service.intro", value: "Managed Automation delivers business process automation as a fully managed service." },
  { key: "service.bullet.1", value: "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service." },
  { key: "service.bullet.2", value: "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients." },
  { key: "service.bullet.3", value: "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business." },

  { key: "pillars.title", value: "WHY ORGANIZATIONS CHOOSE MANAGED AUTOMATION" },
  { key: "pillars.1.title", value: "Lower Complexity" },
  { key: "pillars.1.description", value: "No platform to manage" },
  { key: "pillars.2.title", value: "Lower Risk" },
  { key: "pillars.2.description", value: "Start small, No commitment" },
  { key: "pillars.3.title", value: "Fast Time-to-Value" },
  { key: "pillars.3.description", value: "Live in weeks, not months" },
  { key: "pillars.4.title", value: "Predictable Cost" },
  { key: "pillars.4.description", value: "Transparent, scalable pricing" },

  { key: "calculator.title", value: "ESTIMATE YOUR AUTOMATION ROI" },

  { key: "example.title", value: "TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS" },
  { key: "example.manual.title", value: "Manual process" },
  { key: "example.manual.hours", value: "~2 hours/day" },
  { key: "example.manual.rate", value: "€40/hour" },
  { key: "example.manual.cost", value: "€16,800 annual cost" },
  { key: "example.automation.title", value: "Automation" },
  { key: "example.automation.setup", value: "€10,000 setup" },
  { key: "example.automation.service", value: "€5,000 annual service" },
  { key: "example.impact.title", value: "Business impact" },
  { key: "example.impact.savings", value: "~€12,000 savings" },
  { key: "example.impact.payback", value: "~10-month payback" },
  { key: "example.impact.roi", value: "~100% ROI" },
  { key: "example.footer", value: "Small processes. Big impact." },

  { key: "pricing.title", value: "AUTOMATION ENGAGEMENT MODEL" },
  { key: "pricing.starter.name", value: "Starter" },
  { key: "pricing.starter.description", value: "1 process" },
  { key: "pricing.starter.setup", value: "€10,000" },
  { key: "pricing.starter.annual", value: "€5,000" },
  { key: "pricing.growth.name", value: "Growth" },
  { key: "pricing.growth.description", value: "2–10 processes" },
  { key: "pricing.growth.setup", value: "€9,500" },
  { key: "pricing.growth.annual", value: "€4,500" },
  { key: "pricing.scale.name", value: "Scale" },
  { key: "pricing.scale.description", value: "10+ processes" },
  { key: "pricing.scale.setup", value: "€9,000" },
  { key: "pricing.scale.annual", value: "€4,000" },
  { key: "pricing.note", value: "* Setup fee depends on process complexity." },

  { key: "cta.headline", value: "START WITH ONE PROCESS" },
  { key: "cta.subheadline", value: "Validate ROI quickly and scale automation." },
  { key: "cta.button", value: "Request Detailed Assessment" },

  { key: "footer.brand", value: "BCA Solutions" },
  { key: "footer.copyright", value: "BCA Solutions. All rights reserved." },
];

const calculatorConstants: { key: string; value: unknown }[] = [
  {
    key: "pricing",
    value: {
      S: { setup: 5000, service: 3000 },
      M: { setup: 10000, service: 5000 },
      L: { setup: 17500, service: 7000 },
    },
  },
  { key: "automationRatio", value: 0.9 },
  { key: "workingHoursPerMonth", value: 144 },
];

async function seed() {
  console.log("Seeding CMS content...");
  for (const entry of cmsContent) {
    await db
      .insert(cmsContentTable)
      .values(entry)
      .onConflictDoUpdate({
        target: cmsContentTable.key,
        set: { value: entry.value, updatedAt: sql`now()` },
      });
  }
  console.log(`  Seeded ${cmsContent.length} content entries.`);

  console.log("Seeding calculator constants...");
  for (const entry of calculatorConstants) {
    await db
      .insert(calculatorConstantsTable)
      .values({ key: entry.key, value: entry.value })
      .onConflictDoUpdate({
        target: calculatorConstantsTable.key,
        set: { value: entry.value, updatedAt: sql`now()` },
      });
  }
  console.log(`  Seeded ${calculatorConstants.length} calculator constants.`);

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
