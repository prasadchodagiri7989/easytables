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

export const PerMilleGuide = () => {
  const rules = [
    {
      name: "Understanding Per-mille",
      rule: "Per-mille (‰) means per thousand.",
      example: "25‰ = 25 per 1000 = 0.025",
    },
    {
      name: "Convert Per-mille to Decimal",
      rule: "Value ÷ 1000",
      example: "150‰ = 150 ÷ 1000 = 0.15",
    },
    {
      name: "Convert Decimal to Per-mille",
      rule: "Decimal × 1000",
      example: "0.25 × 1000 = 250‰",
    },
    {
      name: "Convert Per-mille to Percentage",
      rule: "Per-mille ÷ 10",
      example: "80‰ = 80 ÷ 10 = 8%",
    },
    {
      name: "Finding Per-mille of a Number",
      rule: "(Per-mille ÷ 1000) × Total",
      example: "20‰ of 500 = (20 ÷ 1000) × 500 = 10",
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
            <BreadcrumbPage>Per-mille Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="per-mille-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="per-mille-guide-header text-center text-2xl font-bold mb-4">
          Per-mille Rules Guide
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

        <GuidanceSection title="Understanding Per-mille">
          <p>
            The per-mille symbol (‰) represents parts per thousand, commonly used
            in statistics, blood alcohol content (BAC), and other precision-based
            calculations.
          </p>

          <h4 className="font-medium mt-3 mb-1">Helpful Tips</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>1‰ = 0.1%</li>
            <li>Per-mille is useful when percentages are too small to represent precision.</li>
            <li>Always divide or multiply by 1000 for conversions involving per-mille.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
