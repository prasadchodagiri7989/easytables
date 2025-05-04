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

export const FibonacciNumbersGuide = () => {
  const rules = [
    {
      name: "Definition of Fibonacci Numbers",
      rule: "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.",
      example: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34...",
    },
    {
      name: "Fibonacci Sequence Formula",
      rule: "Each number in the Fibonacci sequence can be defined by the recurrence relation: F(n) = F(n-1) + F(n-2), with F(0) = 0 and F(1) = 1.",
      example: "F(3) = F(2) + F(1) = 2 + 1 = 3",
    },
    {
      name: "Golden Ratio",
      rule: "The ratio of two consecutive Fibonacci numbers approaches the Golden Ratio (approximately 1.618) as the numbers get larger.",
      example: "F(5) / F(4) = 5 / 3 ≈ 1.618",
    },
    {
      name: "Applications in Nature",
      rule: "Fibonacci numbers appear frequently in nature, such as in the arrangement of leaves, flowers, and seeds.",
      example: "The number of petals in many flowers follows the Fibonacci sequence.",
    },
    {
      name: "Fibonacci in Art and Architecture",
      rule: "The Fibonacci sequence and the Golden Ratio are often used in art and architecture to create aesthetically pleasing proportions.",
      example: "The Parthenon in Athens and the pyramids of Egypt show examples of the Golden Ratio in their designs.",
    },
    {
      name: "Fibonacci in Computer Science",
      rule: "Fibonacci numbers are used in algorithms such as the Fibonacci search algorithm, and are often employed in dynamic programming and recursion problems.",
      example: "Fibonacci sequence is used to design algorithms that find the nth Fibonacci number.",
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
            <BreadcrumbPage>Fibonacci Numbers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="fibonacci-numbers-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="fibonacci-numbers-guide-header text-center text-2xl font-bold mb-4">
          Fibonacci Numbers Guide
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

        <GuidanceSection title="Understanding Fibonacci Numbers">
          <p>
            Fibonacci numbers are a fundamental concept in mathematics and are closely related to the Golden Ratio. They appear in many natural phenomena and have wide applications in art, architecture, and computer science.
          </p>

          <h4 className="font-medium mt-3 mb-1">Key Facts about Fibonacci Numbers</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>The Fibonacci sequence begins with 0 and 1, and each subsequent number is the sum of the two preceding ones.</li>
            <li>The Golden Ratio is closely related to the Fibonacci sequence, as the ratio of consecutive Fibonacci numbers approaches this constant.</li>
            <li>Fibonacci numbers can be observed in nature, such as in the arrangement of petals, pinecones, and galaxies.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
