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

export const LogarithmRules = () => {
  const rules = [
    {
      name: "Product Rule",
      rule: "logₐ(xy) = logₐ(x) + logₐ(y)",
      example: "logₐ(4 × 5) = logₐ(4) + logₐ(5)",
    },
    {
      name: "Quotient Rule",
      rule: "logₐ(x / y) = logₐ(x) - logₐ(y)",
      example: "logₐ(6 / 3) = logₐ(6) - logₐ(3)",
    },
    {
      name: "Power Rule",
      rule: "logₐ(xᵇ) = b × logₐ(x)",
      example: "logₐ(4²) = 2 × logₐ(4)",
    },
    {
      name: "Change of Base Formula",
      rule: "logₐ(x) = log_b(x) / log_b(a)",
      example: "log₆(36) = log(36) / log(6)",
    },
    {
      name: "Logarithm of 1",
      rule: "logₐ(1) = 0",
      example: "logₐ(1) = 0, for any base a ≠ 1",
    },
    {
      name: "Logarithm of Base",
      rule: "logₐ(a) = 1",
      example: "logₐ(a) = 1, for any base a > 0",
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
                              <Link to="/mathematics/algebra">Algebra Tool</Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Logarithm Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="logarithm-rules-container bg-white/40 dark:bg-transparent">
        <h2 className="logarithm-rules-header text-center text-2xl font-bold mb-4">
          Logarithm Rules
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

        <GuidanceSection title="Understanding Logarithmic Rules">
          <p>
            Logarithmic rules simplify complex expressions by providing shortcuts for multiplying, dividing, and taking powers of logarithms.
          </p>

          <h4 className="font-medium mt-3 mb-1">Key Logarithmic Rules</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Product Rule: logₐ(xy) = logₐ(x) + logₐ(y)</li>
            <li>Quotient Rule: logₐ(x / y) = logₐ(x) - logₐ(y)</li>
            <li>Power Rule: logₐ(xᵇ) = b × logₐ(x)</li>
            <li>Change of Base Formula: logₐ(x) = log_b(x) / log_b(a)</li>
            <li>logₐ(1) = 0, logₐ(a) = 1</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
