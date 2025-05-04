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

export const PrimeNumberGuide = () => {
  const rules = [
    {
      name: "Definition of Prime Number",
      rule: "A prime number is a whole number greater than 1 that has no positive divisors other than 1 and itself.",
      example: "2, 3, 5, 7, 11 are prime numbers.",
    },
    {
      name: "Prime Number Check",
      rule: "To check if a number is prime, divide it by integers greater than 1 and less than itself. If it has no divisors other than 1 and itself, it's prime.",
      example: "7 is prime because it has no divisors other than 1 and 7.",
    },
    {
      name: "Even Prime Number",
      rule: "The only even prime number is 2 because it can only be divided by 1 and 2.",
      example: "2 is prime.",
    },
    {
      name: "Prime Numbers Greater than 2",
      rule: "All prime numbers greater than 2 are odd because any even number greater than 2 is divisible by 2.",
      example: "3, 5, 7, 11 are odd primes.",
    },
    {
      name: "Prime Factorization",
      rule: "Prime factorization is breaking a number down into its prime factors. Every number greater than 1 has a unique prime factorization.",
      example: "12 = 2 × 2 × 3 (prime factors are 2 and 3).",
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
            <BreadcrumbPage>Prime Number Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="prime-number-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="prime-number-guide-header text-center text-2xl font-bold mb-4">
          Prime Number Rules Guide
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

        <GuidanceSection title="Understanding Prime Numbers">
          <p>
            Prime numbers are fundamental to mathematics. They are building blocks of other numbers, especially in number theory and cryptography. A prime number cannot be formed by multiplying two smaller natural numbers, and it has exactly two factors: 1 and itself.
          </p>

          <h4 className="font-medium mt-3 mb-1">Important Notes on Prime Numbers</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>The smallest prime number is 2, which is the only even prime number.</li>
            <li>Prime numbers are crucial in many mathematical areas like cryptography and number theory.</li>
            <li>Every number greater than 1 is either a prime or a composite number (a non-prime number with more than two divisors).</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};
