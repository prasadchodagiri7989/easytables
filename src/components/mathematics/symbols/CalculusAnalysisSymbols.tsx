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

export const CalculusAnalysisSymbols = () => {
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
        <Link to="/mathematics/symbols">symbols Tool</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Calculus & Analysis Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculus-analysis-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="calculus-analysis-symbols-header text-center text-2xl font-bold mb-4">
          Calculus & Analysis Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Calculus & Analysis Symbols?</h3>
          <p>
            <strong>Calculus & analysis symbols</strong> are used to represent various operations and concepts in calculus, a branch of mathematics that studies change, motion, and limits. These symbols play a vital role in differentiation, integration, limits, and series.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Calculus & Analysis Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>∫</strong>: Integral (used to represent integration, the sum of a function's values over an interval)</li>
            <li><strong>∑</strong>: Summation (used to denote the sum of a series or a sequence of terms)</li>
            <li><strong>lim</strong>: Limit (used to describe the behavior of a function as it approaches a particular value)</li>
            <li><strong>∂</strong>: Partial derivative (used in multivariable calculus to denote a derivative with respect to one variable while holding others constant)</li>
            <li><strong>∞</strong>: Infinity (indicates an unbounded quantity, often used in limits or integrals)</li>
            <li><strong>Δ</strong>: Change (represents a change in a quantity, often used in the context of finite differences)</li>
            <li><strong>∇</strong>: Nabla (used in vector calculus to denote gradient, divergence, and curl)</li>
            <li><strong>∮</strong>: Contour integral (used for integration over a closed curve in the complex plane)</li>
            <li><strong>∩</strong>: Intersection (used in set theory and analysis to denote the intersection of sets)</li>
            <li><strong>∪</strong>: Union (used in set theory and analysis to denote the union of sets)</li>
            <li><strong>ℝ</strong>: Set of real numbers (used to represent the real number system)</li>
            <li><strong>ℂ</strong>: Set of complex numbers (used to represent the complex number system)</li>
            <li><strong>ℕ</strong>: Set of natural numbers (used to represent the natural number system)</li>
            <li><strong>σ</strong>: Standard deviation (used to represent the standard deviation in statistics)</li>
            <li><strong>∞</strong>: Infinity (used in limits, integrals, and series to denote an unbounded quantity)</li>
            <li><strong>f'(x)</strong>: Derivative (used to represent the rate of change of a function)</li>
            <li><strong>f''(x)</strong>: Second derivative (used to represent the rate of change of the rate of change)</li>
            <li><strong>f(x) dx</strong>: Differential element in integration (used in the integral to denote a small change in x)</li>
            <li><strong>∫ from a to b</strong>: Definite integral (used to calculate the area under a curve between two limits)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>∫ f(x) dx</strong> – Represents the integral of the function f(x) with respect to x</li>
            <li><strong>lim x→a f(x)</strong> – Represents the limit of f(x) as x approaches a</li>
            <li><strong>∑ i=1 to n a_i</strong> – Represents the sum of the sequence a_i from i=1 to n</li>
            <li><strong>∂/∂x f(x, y)</strong> – Represents the partial derivative of f(x, y) with respect to x</li>
            <li><strong>∇f(x, y, z)</strong> – Represents the gradient of the function f(x, y, z)</li>
            <li><strong>∮ C f(z) dz</strong> – Represents a contour integral over a closed curve C in the complex plane</li>
            <li><strong>f'(x) = lim (f(x+h) - f(x)) / h</strong> – The derivative of a function f(x) at point x</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Calculus and analysis symbols are fundamental in expressing key operations and concepts in calculus. These symbols allow mathematicians to write expressions concisely, analyze the behavior of functions, and solve complex problems involving change, limits, and approximations. They are essential in fields such as physics, engineering, economics, and computer science.
          </p>
        </Card>
      </div>
    </>
  );
};
