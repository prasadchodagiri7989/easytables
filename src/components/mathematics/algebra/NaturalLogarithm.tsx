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
import { Link } from "react-router-dom";
import { GuidanceSection } from "@/components/GuidanceSection";

export const NaturalLogarithm = () => {
  const lnRules = [
    {
      name: "Product Rule",
      rule: "ln(x ∙ y) = ln(x) + ln(y)",
      example: "ln(3 ∙ 7) = ln(3) + ln(7)",
    },
    {
      name: "Quotient Rule",
      rule: "ln(x / y) = ln(x) - ln(y)",
      example: "ln(3 / 7) = ln(3) - ln(7)",
    },
    {
      name: "Power Rule",
      rule: "ln(x^y) = y ∙ ln(x)",
      example: "ln(2^8) = 8 ∙ ln(2)",
    },
    {
      name: "Derivative",
      rule: "f(x) = ln(x) ⇒ f'(x) = 1 / x",
      example: "If f(x) = ln(x), then f'(x) = 1 / x",
    },
    {
      name: "Integral",
      rule: "∫ ln(x)dx = x ∙ (ln(x) - 1) + C",
      example: "Integral of ln(x) is x(ln(x) - 1) + C",
    },
    {
      name: "ln(1)",
      rule: "ln(1) = 0",
      example: "ln(1) is always 0",
    },
    {
      name: "ln(0)",
      rule: "ln(0) is undefined",
      example: "As x approaches 0, ln(x) → -∞",
    },
    {
      name: "ln(∞)",
      rule: "lim x→∞ ln(x) = ∞",
      example: "ln(x) increases without bound as x increases",
    },
    {
      name: "Euler's Identity",
      rule: "ln(-1) = iπ",
      example: "Complex logarithm result",
    },
  ];

  const lnTable = [
    { x: 0.0001, ln: -9.210340 },
    { x: 0.001, ln: -6.907755 },
    { x: 0.01, ln: -4.605170 },
    { x: 0.1, ln: -2.302585 },
    { x: 1, ln: 0 },
    { x: 2, ln: 0.693147 },
    { x: 2.7183, ln: 1 },
    { x: 10, ln: 2.302585 },
    { x: 100, ln: 4.605170 },
    { x: 1000, ln: 6.907755 },
    { x: 10000, ln: 9.210340 },
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
            <BreadcrumbPage>Natural Logarithm</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">Natural Logarithm - ln(x)</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {lnRules.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-md mt-1"><strong>Rule:</strong> {item.rule}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <strong>Example:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <GuidanceSection title="Understanding Natural Logarithm (ln)">
          <p>
            The natural logarithm is the logarithm to the base <code>e</code>, where <code>e ≈ 2.71828183</code>. It's the inverse of the exponential function.
          </p>

          <h4 className="font-medium mt-4 mb-2">Key Identity</h4>
          <p>
            If <code>e^y = x</code>, then <code>ln(x) = y</code>.
          </p>

          <h4 className="font-medium mt-4 mb-2">ln(x) Table (Sample Values)</h4>
          <table className="table-auto border mt-2">
            <thead>
              <tr>
                <th className="border px-2">x</th>
                <th className="border px-2">ln(x)</th>
              </tr>
            </thead>
            <tbody>
              {lnTable.map((entry, index) => (
                <tr key={index}>
                  <td className="border px-2 text-center">{entry.x}</td>
                  <td className="border px-2 text-center">{entry.ln}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GuidanceSection>
      </div>
    </>
  );
};
