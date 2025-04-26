import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const NumberSymbols = () => {
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
            <BreadcrumbPage>Number Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="number-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="number-symbols-header text-center text-2xl font-bold mb-4">
          Number Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Number Symbols?</h3>
          <p>
            <strong>Number symbols</strong> are the various notations used to represent different types of numbers, from basic integers to complex numbers and beyond. These symbols help express and manipulate numbers in various mathematical contexts.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Number Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>ℕ</strong>: Natural numbers (e.g., ℕ = 0, 1, 2, 3, ...)</li>
            <li><strong>ℤ</strong>: Integers (e.g., ℤ = ..., -3, -2, -1, 0, 1, 2, 3, ...)</li>
            <li><strong>ℚ</strong>: Rational numbers (fractions of integers, e.g., ℚ = 1/2, 3/4, 5, ...)</li>
            <li><strong>ℝ</strong>: Real numbers (e.g., ℝ = x | x is a real number)</li>
            <li><strong>ℂ</strong>: Complex numbers (e.g., ℂ = a + bi | a, b ∈ ℝ, i = √-1)</li>
            <li><strong>∞</strong>: Infinity (represents an unbounded quantity)</li>
            <li><strong>√</strong>: Square root (e.g., √4 = 2)</li>
            <li><strong>∅</strong>: Empty set (set with no elements, also related to the concept of "null" in some contexts)</li>
            <li><strong>π</strong>: Pi (approximately 3.14159, represents the ratio of a circle's circumference to its diameter)</li>
            <li><strong>e</strong>: Euler's number (approximately 2.71828, the base of the natural logarithm)</li>
            <li><strong>φ</strong>: Golden ratio (approximately 1.61803, a number that appears in various patterns in mathematics, art, and nature)</li>
            <li><strong>∞</strong>: Infinity (used in calculus, limits, and set theory to represent unbounded quantities)</li>
            <li><strong>! (Factorial)</strong>: Factorial (e.g., 5! = 5 × 4 × 3 × 2 × 1 = 120)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>ℕ = 0, 1, 2, 3, ...</strong> – The set of natural numbers</li>
            <li><strong>ℤ = ..., -3, -2, -1, 0, 1, 2, 3, ...</strong> – The set of integers, including negative numbers, zero, and positive numbers</li>
            <li><strong>ℚ = 1/2, 3/4, 5, ...</strong> – The set of rational numbers, which are numbers that can be expressed as fractions</li>
            <li><strong>ℝ = x | x ∈ ℝ</strong> – The set of real numbers</li>
            <li><strong>π ≈ 3.14159</strong> – Pi, the ratio of a circle's circumference to its diameter</li>
            <li><strong>e ≈ 2.71828</strong> – Euler's number, the base of the natural logarithm</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Number symbols are essential for understanding and working with different types of numbers in mathematics. They provide a standardized way to represent and manipulate numbers in various fields, including algebra, calculus, and number theory. Without these symbols, mathematical expressions and operations would be difficult to understand and communicate.
          </p>
        </Card>
      </div>
    </>
  );
};
