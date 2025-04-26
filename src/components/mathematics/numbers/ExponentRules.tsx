import React from "react";
import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Link } from "react-router-dom"; // Or use next/link if you're in Next.js

export const ExponentRules = () => {
  const rules = [
    {
      name: "Product of Powers",
      rule: "a^m × a^n = a^(m+n)",
      example: "2^3 × 2^4 = 2^(3+4) = 2^7 = 128",
    },
    {
      name: "Quotient of Powers",
      rule: "a^m ÷ a^n = a^(m−n)",
      example: "5^6 ÷ 5^2 = 5^(6−2) = 5^4 = 625",
    },
    {
      name: "Power of a Power",
      rule: "(a^m)^n = a^(m×n)",
      example: "(3^2)^3 = 3^(2×3) = 3^6 = 729",
    },
    {
      name: "Power of a Product",
      rule: "(ab)^m = a^m × b^m",
      example: "(2×4)^3 = 2^3 × 4^3 = 8 × 64 = 512",
    },
    {
      name: "Power of a Quotient",
      rule: "(a/b)^m = a^m ÷ b^m",
      example: "(6/3)^2 = 6^2 ÷ 3^2 = 36 ÷ 9 = 4",
    },
    {
      name: "Zero Exponent",
      rule: "a^0 = 1 (a ≠ 0)",
      example: "7^0 = 1",
    },
    {
      name: "Negative Exponent",
      rule: "a^(-n) = 1/a^n",
      example: "2^(-3) = 1/2^3 = 1/8",
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
            <BreadcrumbPage>Exponent Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="exponent-rules-container bg-white/40 dark:bg-transparent">
        <h2 className="exponent-rules-header text-center text-2xl font-bold mb-4">
          Exponent Rules Guide
        </h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg">{rule.name}</h3>
                <p className="text-md mt-1"><strong>Rule:</strong> {rule.rule}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1"><strong>Example:</strong> {rule.example}</p>
              </div>
            ))}
          </div>
        </Card>

        <GuidanceSection title="Understanding Exponent Rules">
          <p>
            Exponent rules help simplify expressions involving powers. These rules are foundational in algebra and are used to perform operations on exponential terms.
          </p>

          <h4 className="font-medium mt-3 mb-1">Key Tips</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Only combine powers with the same base using multiplication or division.</li>
            <li>Apply the exponent to all terms in a product or quotient when raising to a power.</li>
            <li>A zero exponent always results in 1, unless the base is 0 (which is undefined).</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
