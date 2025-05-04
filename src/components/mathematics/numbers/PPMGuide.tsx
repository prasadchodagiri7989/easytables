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

export const PPMGuide = () => {
  const rules = [
    {
      name: "Understanding Parts-Per Million (PPM)",
      rule: "PPM means parts per million, which is used to express very dilute concentrations of substances.",
      example: "1 PPM = 1 part of a substance per million parts of a solution.",
    },
    {
      name: "Convert PPM to Decimal",
      rule: "PPM ÷ 1,000,000",
      example: "100 PPM = 100 ÷ 1,000,000 = 0.0001",
    },
    {
      name: "Convert Decimal to PPM",
      rule: "Decimal × 1,000,000",
      example: "0.00025 × 1,000,000 = 250 PPM",
    },
    {
      name: "Convert PPM to Percentage",
      rule: "PPM ÷ 10,000",
      example: "500 PPM = 500 ÷ 10,000 = 5%",
    },
    {
      name: "Finding PPM of a Quantity",
      rule: "(Amount ÷ Total) × 1,000,000",
      example: "Find 200 PPM of 5000 liters → (200 ÷ 1,000,000) × 5000 = 0.001",
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
                        <BreadcrumbLink asChild>
                          <Link to="/mathematics/numbers">Numbers</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Parts-Per Million (PPM) Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ppm-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="ppm-guide-header text-center text-2xl font-bold mb-4">
          Parts-Per Million (PPM) Rules Guide
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

        <GuidanceSection title="Understanding Parts-Per Million (PPM)">
          <p>
            Parts-per million (PPM) is a measurement used to describe the concentration of one substance in a million parts of a solution. It is commonly used in environmental science, chemistry, and other fields that require precise measurements of small concentrations.
          </p>

          <h4 className="font-medium mt-3 mb-1">Tips for Working with PPM</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>PPM is often used for very small concentrations (like pollutants in water or air).</li>
            <li>1 PPM = 1 milligram per liter (mg/L) in water-based solutions.</li>
            <li>Use conversion formulas to easily switch between decimal, percentage, and PPM units.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
