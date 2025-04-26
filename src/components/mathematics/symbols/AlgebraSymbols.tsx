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

export const AlgebraSymbols = () => {
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
            <BreadcrumbPage>Algebra Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="algebra-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="algebra-symbols-header text-center text-2xl font-bold mb-4">
          Algebra Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Algebraic Symbols?</h3>
          <p>
            <strong>Algebraic symbols</strong> are used to represent variables, constants, operations, and relationships in algebraic expressions and equations.
            They help form equations and functions that describe mathematical patterns and relationships.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Algebra Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>x, y, z</strong>: Variables used to represent unknown values</li>
            <li><strong>a, b, c</strong>: Constants or coefficients</li>
            <li><strong>=</strong>: Equal sign, indicates two expressions are the same</li>
            <li><strong>≠</strong>: Not equal to</li>
            <li><strong>+</strong>, <strong>−</strong>, <strong>×</strong>, <strong>÷</strong>: Basic arithmetic operations</li>
            <li><strong>( )</strong>: Parentheses for grouping</li>
            <li><strong>^</strong>: Exponentiation (e.g., x² written as x^2)</li>
            <li><strong>√</strong>: Square root</li>
            <li><strong>&lt;</strong>, <strong>&gt;</strong>, <strong>≤</strong>, <strong>≥</strong>: Inequality symbols</li>
            <li><strong>±</strong>: Plus or minus symbol</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>3x + 5 = 20</strong> – Solve for x</li>
            <li><strong>(x + 2)(x - 2) = x² - 4</strong> – Binomial multiplication</li>
            <li><strong>x² + y² = r²</strong> – Equation of a circle</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Understanding algebra symbols is foundational for solving equations, simplifying expressions, and exploring relationships between variables.
          </p>
        </Card>
      </div>
    </>
  );
};
