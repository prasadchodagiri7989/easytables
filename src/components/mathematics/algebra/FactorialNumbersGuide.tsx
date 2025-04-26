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

export const FactorialNumbersGuide = () => {
  const rules = [
    {
      name: "Definition of Factorial",
      rule: "The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n.",
      example: "5! = 5 × 4 × 3 × 2 × 1 = 120",
    },
    {
      name: "Factorial of 0",
      rule: "By definition, 0! is equal to 1.",
      example: "0! = 1",
    },
    {
      name: "Factorial Formula",
      rule: "Factorial of n can be expressed as: n! = n × (n - 1) × (n - 2) × ... × 1.",
      example: "3! = 3 × 2 × 1 = 6",
    },
    {
      name: "Factorial Growth",
      rule: "Factorial grows very fast as n increases. It is used in combinatorics, probability, and in the calculation of permutations and combinations.",
      example: "6! = 6 × 5 × 4 × 3 × 2 × 1 = 720",
    },
    {
      name: "Factorial in Permutations",
      rule: "The factorial function is used in permutations to calculate the number of ways to arrange a set of objects. The number of permutations of n objects is n!.",
      example: "The number of permutations of 4 objects is 4! = 4 × 3 × 2 × 1 = 24.",
    },
    {
      name: "Factorial in Combinations",
      rule: "Factorial is also used in combinations to calculate the number of ways to choose k items from a set of n items. The formula for combinations is n! / (k!(n-k)!).",
      example: "The number of ways to choose 2 items from 4 is 4! / (2! × 2!) = 6.",
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
            <BreadcrumbPage>Factorial Numbers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="factorial-numbers-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="factorial-numbers-guide-header text-center text-2xl font-bold mb-4">
          Factorial Numbers Guide
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

        <GuidanceSection title="Understanding Factorial Numbers">
          <p>
            Factorial numbers are fundamental in mathematics, particularly in combinatorics and probability theory. They represent the number of ways to arrange or choose items from a set. Factorials grow extremely fast and are used to calculate permutations and combinations.
          </p>

          <h4 className="font-medium mt-3 mb-1">Key Facts about Factorial Numbers</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Factorial grows very quickly, and for large values of n, it can become a very large number.</li>
            <li>0! = 1 by definition, and this special case is important in many mathematical formulas.</li>
            <li>Factorial is used to calculate permutations and combinations in probability theory.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
