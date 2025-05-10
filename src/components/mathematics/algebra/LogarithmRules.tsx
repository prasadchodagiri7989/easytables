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
            Logarithmic rules simplify complex expressions by providing shortcuts for multiplying, dividing, and taking powers of logarithms. Understanding and applying these rules is essential in both basic and advanced mathematics, particularly in solving exponential and logarithmic equations efficiently.
          </p>

          <h4 className="font-medium mt-4 mb-2">Detailed Explanation of Each Rule</h4>

          <p><strong>1. Product Rule:</strong> This rule states that the logarithm of a product is equal to the sum of the logarithms of the individual factors. It is especially helpful when dealing with multiplication inside a logarithmic function. For example, when simplifying logₐ(12 × 3), you can break it down into logₐ(12) + logₐ(3), which makes computations more manageable when using logarithm tables or calculators.</p>

          <p><strong>2. Quotient Rule:</strong> This rule states that the logarithm of a quotient is equal to the difference of the logarithms. This is useful when dividing numbers inside a logarithm. For instance, logₐ(20 / 4) = logₐ(20) - logₐ(4). It plays a vital role in algebraic simplification and calculus derivatives involving logarithmic expressions.</p>

          <p><strong>3. Power Rule:</strong> According to this rule, the logarithm of a number raised to a power is equal to the exponent multiplied by the logarithm of the base. That is, logₐ(xᵇ) = b·logₐ(x). It’s highly valuable when working with exponential growth or decay models in science and engineering, allowing one to bring exponents out in front for easier manipulation.</p>

          <p><strong>4. Change of Base Formula:</strong> This formula allows the computation of logarithms with any base by converting them into a more convenient base, typically 10 or e. For example, log₅(25) = log(25)/log(5). This is crucial when using calculators that only support log (base 10) and ln (base e), making it a practical tool for computations in real-world problems.</p>

          <p><strong>5. Logarithm of 1:</strong> The logarithm of 1 in any base is always zero because any number raised to the power 0 is 1. That is, logₐ(1) = 0. This fact is frequently used to simplify expressions and evaluate limits in calculus.</p>

          <p><strong>6. Logarithm of the Base:</strong> The logarithm of a base with itself is always 1 because a¹ = a. This identity helps in understanding and proving other logarithmic properties.</p>

          <h4 className="font-medium mt-4 mb-2">Real-Life Applications of Logarithmic Rules</h4>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Sound Intensity:</strong> Decibels (dB), which measure sound intensity, use a logarithmic scale. Applying logarithmic rules allows engineers to compare relative loudness levels efficiently.</li>
            <li><strong>Richter Scale:</strong> Earthquake magnitude is calculated using a logarithmic scale. A magnitude 6 earthquake is 10 times more powerful than a magnitude 5, illustrating real-world use of the product rule.</li>
            <li><strong>pH Levels:</strong> The pH scale in chemistry is logarithmic, measuring the hydrogen ion concentration in solutions. Each unit represents a tenfold difference in acidity or alkalinity.</li>
            <li><strong>Data Storage:</strong> Logarithmic rules help optimize storage algorithms and compression in digital systems by reducing complex calculations to manageable forms.</li>
            <li><strong>Machine Learning:</strong> Loss functions like Cross-Entropy use logarithms, and understanding their properties can aid in interpreting model outputs and gradients.</li>
          </ul>

          <h4 className="font-medium mt-4 mb-2">Tips for Mastering Logarithmic Rules</h4>

          <ol className="list-decimal pl-5 space-y-2">
            <li>Practice rewriting exponential equations into logarithmic form and vice versa.</li>
            <li>Always ensure that the base of a logarithm is positive and not equal to 1.</li>
            <li>Familiarize yourself with natural logarithms (ln) and common logarithms (log) and know when to use each.</li>
            <li>Use the change of base formula to convert logs to a base your calculator can handle.</li>
            <li>Memorize the core rules and apply them in algebraic simplifications and solving equations.</li>
          </ol>

          <h4 className="font-medium mt-4 mb-2">Common Mistakes to Avoid</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Confusing multiplication with addition inside logarithms, e.g., thinking logₐ(x + y) = logₐ(x) + logₐ(y) — this is false.</li>
            <li>Using incorrect base transformations without applying the change of base formula.</li>
            <li>Misinterpreting logₐ(xᵇ) as logₐ(x)ᵇ, which is incorrect.</li>
          </ul>

          <h4 className="font-medium mt-4 mb-2">Practice Example</h4>
          <p>Let’s simplify the expression: log₃(27) + log₃(9)</p>
          <p>Using the product rule: log₃(27 × 9) = log₃(243)</p>
          <p>Since 3⁵ = 243, the result is 5.</p>

          <h4 className="font-medium mt-4 mb-2">Conclusion</h4>
          <p>
            Mastering logarithmic rules is not only vital for academic success in mathematics but also crucial for many practical applications in science, technology, and finance. By applying the product, quotient, and power rules, and understanding identities like logₐ(1) = 0 and logₐ(a) = 1, complex calculations can be dramatically simplified. With regular practice and real-world application, these concepts become intuitive and incredibly powerful tools in problem-solving.
          </p>
        </GuidanceSection>

      </div>
    </>
  );
};
