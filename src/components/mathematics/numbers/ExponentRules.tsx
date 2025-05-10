import React from "react";
import { Card } from "@/components/ui/card";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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
               <BreadcrumbLink asChild>
                 <Link to="/mathematics/numbers">Numbers</Link>
               </BreadcrumbLink>
             </BreadcrumbItem>
             <BreadcrumbSeparator />
             <BreadcrumbItem>
               <BreadcrumbPage>ExponentRules Table</BreadcrumbPage>
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

        <GuidanceSection title="In-Depth Exponent Rules Explanation">
          <p>
            Exponent rules are essential for simplifying and manipulating algebraic expressions that involve powers. These rules, also called exponent laws, apply to any real numbers or variables with exponents. Exponentiation is one of the key operations in mathematics, particularly in algebra, calculus, and beyond. Let's take a deeper dive into how these rules work and why they're important.
          </p>

          <h4 className="font-medium mt-3 mb-1">The Importance of Exponent Rules</h4>
          <p>
            In mathematics, exponents provide a shorthand way to represent repeated multiplication. For instance, \(2^3\) means multiplying 2 by itself three times: \(2 \times 2 \times 2 = 8\). However, when exponents are used in more complex expressions, simplifying them using the exponent rules allows us to reduce the expression into a more manageable form.
          </p>

          <h4 className="font-medium mt-3 mb-1">Detailed Breakdown of Each Rule</h4>

          <h5 className="font-semibold mt-2 mb-1">1. Product of Powers</h5>
          <p>
            The product of powers rule states that when multiplying powers with the same base, you add the exponents. This rule helps in simplifying expressions that involve multiplication of powers. The reason behind this is that the exponents indicate how many times the base is multiplied by itself. Therefore, multiplying two terms with the same base essentially adds the number of times the base is multiplied.
          </p>
          <p>
            <strong>Example:</strong> \(2^3 \times 2^4 = 2^{3+4} = 2^7 = 128\)
          </p>
          <p>
            In this example, \(2^3\) represents \(2 \times 2 \times 2\), and \(2^4\) represents \(2 \times 2 \times 2 \times 2\). When multiplied, the total number of 2s becomes \(2^7\), which equals 128.
          </p>

          <h5 className="font-semibold mt-2 mb-1">2. Quotient of Powers</h5>
          <p>
            The quotient of powers rule is similar to the product of powers rule, but it applies when dividing terms with the same base. The rule states that when dividing powers with the same base, subtract the exponents. This rule helps to simplify division problems with exponents and is based on the fact that division is essentially repeated subtraction.
          </p>
          <p>
            <strong>Example:</strong> \(5^6 ÷ 5^2 = 5^{6-2} = 5^4 = 625\)
          </p>
          <p>
            In this example, we subtract the exponents 6 and 2 to get \(5^4\), which simplifies the expression to 625.
          </p>

          <h5 className="font-semibold mt-2 mb-1">3. Power of a Power</h5>
          <p>
            The power of a power rule explains how to handle exponents when an exponent is raised to another exponent. The rule states that to raise a power to another power, multiply the exponents. This rule is crucial when dealing with nested powers, and it is widely used in simplifying expressions in algebra and calculus.
          </p>
          <p>
            <strong>Example:</strong> (3^2)^3 = 3^(2 * 3) = 3^6 = 729
          </p>
          <p>
            In this example, \((3^2)^3\) simplifies by multiplying the exponents 2 and 3 to get \(3^6\), which simplifies to 729.
          </p>

          <h5 className="font-semibold mt-2 mb-1">4. Power of a Product</h5>
          <p>
            The power of a product rule allows us to raise a product to a power. According to this rule, the exponent applies to both factors in the product. This rule is helpful when simplifying expressions that involve the multiplication of terms inside parentheses, making it easier to handle complex expressions.
          </p>
          <p>
            <strong>Example:</strong> \((2 \times 4)^3 = 2^3 \times 4^3 = 8 \times 64 = 512\)
          </p>
          <p>
            In this example, the exponent applies to both 2 and 4, so we raise each factor to the power of 3, simplifying the expression to \(8 \times 64 = 512\).
          </p>

          <h5 className="font-semibold mt-2 mb-1">5. Power of a Quotient</h5>
          <p>
            The power of a quotient rule explains how to handle exponents when a quotient (division) is raised to a power. This rule states that when a quotient is raised to a power, the exponent applies to both the numerator and the denominator separately. This rule is useful for simplifying expressions that involve fractions with exponents.
          </p>
          <p>
            <strong>Example:</strong> \((6/3)^2 = 6^2 ÷ 3^2 = 36 ÷ 9 = 4\)
          </p>
          <p>
            In this example, we first raise both 6 and 3 to the power of 2, simplifying the expression to \(36 ÷ 9 = 4\).
          </p>

          <h5 className="font-semibold mt-2 mb-1">6. Zero Exponent</h5>
          <p>
            The zero exponent rule states that any non-zero number raised to the power of zero is equal to 1. This rule applies to all non-zero real numbers, and it's a fundamental concept in algebra.
          </p>
          <p>
            <strong>Example:</strong> \(7^0 = 1\)
          </p>
          <p>
            In this example, any number (like 7) raised to the power of zero is equal to 1, which is why \(7^0 = 1\).
          </p>

          <h5 className="font-semibold mt-2 mb-1">7. Negative Exponent</h5>
          <p>
            The negative exponent rule explains how to handle negative exponents. The rule states that a number raised to a negative exponent is equal to the reciprocal of the same number raised to the positive exponent. This rule is very useful when dealing with inverse powers and simplifies expressions with negative exponents.
          </p>
          <p>
            <strong>Example:</strong> \(2^{-3} = 1/2^3 = 1/8\)
          </p>
          <p>
            In this example, \(2^{-3}\) is simplified by taking the reciprocal of \(2^3\), resulting in \(1/8\).
          </p>

          <h4 className="font-medium mt-3 mb-1">Real-Life Applications of Exponent Rules</h4>
          <p>
            Exponent rules are not just theoretical—they have practical applications in various fields, including physics, computer science, and economics. In physics, exponentiation is used in formulas for calculating energy, power, and radioactive decay. In computer science, exponential growth is used to describe algorithms with increasing time complexity. In economics, exponential functions model population growth, inflation, and interest rates.
          </p>

          <h4 className="font-medium mt-3 mb-1">Final Thoughts</h4>
          <p>
            Understanding and applying exponent rules are vital skills in mathematics. By mastering these rules, you can simplify complex expressions, solve equations more easily, and gain a deeper understanding of algebraic concepts. Whether you're solving basic math problems or tackling more advanced topics, these rules will help you streamline your work and boost your problem-solving abilities.
          </p>
        </GuidanceSection>

      </div>
    </>
  );
};
