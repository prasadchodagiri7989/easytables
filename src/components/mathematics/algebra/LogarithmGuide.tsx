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
                            <BreadcrumbLink asChild>
                              <Link to="/mathematics/algebra">Algebra Tool</Link>
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

        <GuidanceSection title="Detailed Exploration of Logarithms">
          <p className="mb-4">
            Logarithms, by definition, answer the question: “To what exponent must the base be raised, in order to produce a given number?” This powerful idea has applications ranging from mathematics and physics to engineering, finance, and information theory.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Why Are Logarithms Useful?</h4>
          <p>
            Logarithms are especially useful for solving equations where the unknown appears as the exponent of some number. They convert multiplicative relationships into additive ones, which simplifies both theoretical analysis and practical calculations. This makes them incredibly helpful when dealing with exponential growth or decay, such as in compound interest, population dynamics, radioactive decay, and sound intensity.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Types of Logarithms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Common Logarithms (log):</strong> These are logarithms with base 10 and are widely used in scientific notation and engineering.
            </li>
            <li>
              <strong>Natural Logarithms (ln):</strong> These use the base e (approximately 2.71828) and are crucial in calculus, particularly in integration and differential equations.
            </li>
            <li>
              <strong>Binary Logarithms (log₂):</strong> These are used in computer science and digital systems to calculate complexities and data structures.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Important Properties of Logarithms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Product Rule:</strong> logₐ(xy) = logₐ(x) + logₐ(y)</li>
            <li><strong>Quotient Rule:</strong> logₐ(x/y) = logₐ(x) - logₐ(y)</li>
            <li><strong>Power Rule:</strong> logₐ(xⁿ) = n * logₐ(x)</li>
            <li><strong>Change of Base Rule:</strong> logₐ(x) = log_b(x) / log_b(a)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Applications of Logarithms in Real Life</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Engineering:</strong> Used in measuring sound intensity (decibels), signal processing, and pH levels in chemistry.
            </li>
            <li>
              <strong>Finance:</strong> Useful in calculating compound interest, logarithmic depreciation, and option pricing models.
            </li>
            <li>
              <strong>Computer Science:</strong> Binary logarithms determine algorithmic complexity (e.g., O(log n)), tree structures, and storage.
            </li>
            <li>
              <strong>Science:</strong> Logarithms appear in laws like the Richter scale for earthquakes and half-life calculations in radioactive decay.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Common Mistakes When Using Logarithms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting the base: log(x) typically means base 10 unless otherwise specified.</li>
            <li>Incorrect use of properties: e.g., log(x + y) ≠ log(x) + log(y)</li>
            <li>Assuming log(x²) = (log x)² — which is incorrect. Use the power rule instead.</li>
            <li>Misinterpreting log(0) or log of a negative number — these are undefined in the real number system.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Example Problems</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Problem 1:</strong> Solve log₅(125) = ? <br />
              <strong>Solution:</strong> Since 5³ = 125, log₅(125) = 3.
            </li>
            <li>
              <strong>Problem 2:</strong> If log(x) = 2, what is x?<br />
              <strong>Solution:</strong> This implies 10² = x → x = 100.
            </li>
            <li>
              <strong>Problem 3:</strong> Simplify log₂(32) - log₂(4)<br />
              <strong>Solution:</strong> log₂(32/4) = log₂(8) = 3
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Logarithmic Scales in the Real World</h4>
          <p>
            Many real-world phenomena span a wide range of values, making linear representation impractical. Logarithmic scales help compress these large ranges. Examples include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Richter Scale:</strong> Measures earthquake magnitude, where each step represents a tenfold increase.</li>
            <li><strong>Decibel Scale:</strong> Measures sound intensity logarithmically.</li>
            <li><strong>pH Scale:</strong> Measures hydrogen ion concentration logarithmically in chemistry.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Exponential vs. Logarithmic Growth</h4>
          <p>
            Exponential growth increases rapidly, doubling at each step, such as in viral spread or compound interest. Logarithmic growth, on the other hand, increases slowly and is often used to measure time needed for exponential events to reach certain thresholds.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Graph of Logarithmic Functions</h4>
          <p>
            The graph of y = logₐ(x) passes through (1,0), approaches negative infinity as x approaches 0 from the right, and increases slowly. The function is undefined for x ≤ 0. Asymptotic behavior and domain limitations are key in understanding its behavior.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Inverse Relationship with Exponentials</h4>
          <p>
            Every logarithmic function is the inverse of an exponential function. If y = a^x, then x = logₐ(y). This inversion helps in solving equations where the unknown is an exponent and explains the reciprocal nature of their graphs (symmetric about y = x).
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Conclusion</h4>
          <p>
            Logarithms are a core component of modern mathematics and science. Whether you're simplifying equations, analyzing algorithms, or studying natural phenomena, understanding logarithms unlocks a deeper appreciation of the underlying principles. Mastering them empowers you to handle exponential relationships with clarity and confidence.
          </p>
        </GuidanceSection>

      </div>
    </>
  );
};
