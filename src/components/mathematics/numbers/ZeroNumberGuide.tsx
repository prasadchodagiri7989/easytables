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

export const ZeroNumberGuide = () => {
  const rules = [
    {
      name: "Zero in Addition",
      rule: "Any number plus zero equals the number itself.",
      example: "5 + 0 = 5",
    },
    {
      name: "Zero in Subtraction",
      rule: "Any number minus zero equals the number itself.",
      example: "8 - 0 = 8",
    },
    {
      name: "Zero in Multiplication",
      rule: "Any number multiplied by zero equals zero.",
      example: "7 × 0 = 0",
    },
    {
      name: "Zero in Division",
      rule: "Dividing zero by any non-zero number equals zero. Division by zero is undefined.",
      example: "0 ÷ 6 = 0, but 6 ÷ 0 is undefined",
    },
    {
      name: "Zero as a Placeholder",
      rule: "Zero serves as a placeholder in positional number systems.",
      example: "In the number 205, zero holds the tens place.",
    },
    {
      name: "Zero as an Identity Element",
      rule: "Zero is the identity element for addition, meaning any number added to zero stays the same.",
      example: "0 is the identity element for addition: a + 0 = a",
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
            <BreadcrumbPage>Zero Number Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="zero-number-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="zero-number-guide-header text-center text-2xl font-bold mb-4">
          Zero Number Rules Guide
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

        <GuidanceSection title="Understanding Zero Number">
          <p>
            Zero is a unique and fundamental number in mathematics. It plays a critical role in operations, equations, and number systems. Whether it's adding, subtracting, multiplying, or dividing, zero interacts with numbers in specific ways.
          </p>

          <h4 className="font-medium mt-3 mb-1">Key Concepts of Zero</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Zero is the only number that is neither positive nor negative.</li>
            <li>Zero is essential in place value systems, like the decimal system.</li>
            <li>Zero in multiplication or division helps define important algebraic identities.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
