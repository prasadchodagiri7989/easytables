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

export const LogarithmGuide = () => {
  const rules = [
    {
      name: "Definition of Logarithm",
      rule: "A logarithm is the inverse operation to exponentiation. It tells you what power you need to raise a base number to obtain a certain value.",
      example: "log₁₀(100) = 2, because 10² = 100.",
    },
    {
      name: "Logarithmic Function Formula",
      rule: "The general formula for a logarithm is logₐ(x) = y, which means a^y = x.",
      example: "log₂(8) = 3, because 2³ = 8.",
    },
    {
      name: "Common Logarithm (Base 10)",
      rule: "The common logarithm is the logarithm with base 10. It is often written as log(x), which is equivalent to log₁₀(x).",
      example: "log(1000) = 3, because 10³ = 1000.",
    },
    {
      name: "Natural Logarithm (Base e)",
      rule: "The natural logarithm is the logarithm with base e, where e is approximately 2.71828. It is written as ln(x).",
      example: "ln(e) = 1, because e¹ = e.",
    },
    {
      name: "Properties of Logarithms",
      rule: "Logarithms have several important properties, such as the product rule, quotient rule, and power rule, which simplify logarithmic expressions.",
      example: "logₐ(xy) = logₐ(x) + logₐ(y).",
    },
    {
      name: "Change of Base Formula",
      rule: "The change of base formula allows you to compute logarithms in any base using logₐ(x) = log_b(x) / log_b(a).",
      example: "log₆(36) = log(36) / log(6).",
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
            <BreadcrumbPage>Logarithms</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="logarithm-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="logarithm-guide-header text-center text-2xl font-bold mb-4">
          Logarithm Guide
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

        <GuidanceSection title="Understanding Logarithms">
          <p>
            Logarithms are the inverse operations of exponentiation and are a fundamental concept in mathematics. They simplify complex equations and are widely used in many fields, including algebra, calculus, and computer science.
          </p>

          <h4 className="font-medium mt-3 mb-1">Key Facts about Logarithms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Logarithms help to find the exponent needed to reach a particular value when using a specific base.</li>
            <li>Common logarithms have a base of 10, while natural logarithms use the base e.</li>
            <li>The properties of logarithms, like the product and quotient rules, are essential for simplifying expressions and solving equations.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
