import React from "react";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GuidanceSection } from "@/components/GuidanceSection";

import { Link } from "react-router-dom"; // Or use next/link for Next.js

export const PercentageGuide = () => {
  const rules = [
    {
      name: "Finding a Percentage of a Number",
      rule: "(Percentage ÷ 100) × Total",
      example: "25% of 200 = (25 ÷ 100) × 200 = 50",
    },
    {
      name: "Percentage Increase",
      rule: "((New - Original) ÷ Original) × 100%",
      example: "From 80 to 100 → ((100 - 80) ÷ 80) × 100 = 25%",
    },
    {
      name: "Percentage Decrease",
      rule: "((Original - New) ÷ Original) × 100%",
      example: "From 120 to 90 → ((120 - 90) ÷ 120) × 100 = 25%",
    },
    {
      name: "Convert Fraction to Percentage",
      rule: "(Fraction × 100)%",
      example: "3/4 = (3 ÷ 4) × 100 = 75%",
    },
    {
      name: "Convert Decimal to Percentage",
      rule: "Decimal × 100%",
      example: "0.6 × 100 = 60%",
    },
    {
      name: "Convert Percentage to Decimal",
      rule: "Percentage ÷ 100",
      example: "75% ÷ 100 = 0.75",
    },
  ];

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Percentage Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="percentage-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="percentage-guide-header text-center text-2xl font-bold mb-4">
          Percentage Rules Guide
        </h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg">{rule.name}</h3>
                <p className="text-md mt-1"><strong>Rule:</strong> {rule.rule}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <strong>Example:</strong> {rule.example}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <GuidanceSection title="Understanding Percentage Rules">
          <p>
            Percentages are a way to express parts of a whole as a fraction of 100.
            They are useful in many real-world situations like discounts, interest,
            and comparisons.
          </p>

          <h4 className="font-medium mt-3 mb-1">Tips to Remember</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>"Percent" literally means "per hundred."</li>
            <li>Always convert percentages to decimals or fractions before calculations when needed.</li>
            <li>Use percentage change formulas carefully to distinguish increase from decrease.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};

