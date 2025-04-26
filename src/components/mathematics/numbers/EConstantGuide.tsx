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

export const EConstantGuide = () => {
  const rules = [
    {
      name: "Definition of Euler's Number (e)",
      rule: "Euler's number, denoted by 'e', is an irrational constant approximately equal to 2.71828.",
      example: "e ≈ 2.71828",
    },
    {
      name: "Properties of e",
      rule: "e is the base of the natural logarithm and is used extensively in calculus, especially for functions that describe growth and decay.",
      example: "The derivative of e^x is e^x.",
    },
    {
      name: "Euler's Number in Exponentiation",
      rule: "The number e raised to any power is a key concept in exponential growth and decay, particularly in continuous growth processes.",
      example: "e^x represents continuous growth, such as in compound interest or population growth.",
    },
    {
      name: "Limit Definition of e",
      rule: "Euler's number can also be defined as the limit of (1 + 1/n)^n as n approaches infinity.",
      example: "lim(n→∞) (1 + 1/n)^n = e",
    },
    {
      name: "Use in Calculus",
      rule: "e is fundamental in calculus and often appears in the solutions of differential equations, particularly those describing exponential growth or decay.",
      example: "The function f(x) = e^x describes continuous growth where the rate of change is proportional to the current value.",
    },
    {
      name: "Natural Logarithm",
      rule: "The natural logarithm, ln(x), is the logarithm to the base e. It is the inverse operation of raising e to a power.",
      example: "ln(e) = 1",
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
            <BreadcrumbPage>Euler's Number (e) Constant</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="e-constant-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="e-constant-guide-header text-center text-2xl font-bold mb-4">
          Euler's Number (e) Constant Guide
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

        <GuidanceSection title="Understanding Euler's Number (e)">
          <p>
            Euler's number (e) is one of the most important constants in mathematics, particularly in the field of calculus. It is irrational and transcendental, meaning it cannot be expressed as a simple fraction or as the root of any non-zero polynomial equation with rational coefficients.
          </p>

          <h4 className="font-medium mt-3 mb-1">Key Concepts of Euler's Number (e)</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>e is crucial in the study of exponential growth and decay, appearing in applications like compound interest, population growth, and radioactive decay.</li>
            <li>e is the limit of (1 + 1/n)^n as n approaches infinity, which forms the basis of continuous compounding in finance.</li>
            <li>The natural logarithm (ln) uses e as its base and is the inverse of the exponential function.</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
