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

export const MathSymbols = () => {
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
            <BreadcrumbPage>Math Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="math-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="math-symbols-header text-center text-2xl font-bold mb-4">
          Math Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Mathematical Symbols?</h3>
          <p>
            <strong>Mathematical symbols</strong> are signs used to represent numbers, operations, relations, and functions in mathematical expressions. 
            They provide a universal language for mathematical communication.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Math Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>+</strong> : Addition</li>
            <li><strong>−</strong> : Subtraction</li>
            <li><strong>×</strong> or <strong>*</strong> : Multiplication</li>
            <li><strong>÷</strong> or <strong>/</strong> : Division</li>
            <li><strong>=</strong> : Equal to</li>
            <li><strong>≠</strong> : Not equal to</li>
            <li><strong>&lt;</strong> : Less than</li>
            <li><strong>&gt;</strong> : Greater than</li>
            <li><strong>≤</strong> : Less than or equal to</li>
            <li><strong>≥</strong> : Greater than or equal to</li>
            <li><strong>√</strong> : Square root</li>
            <li><strong>π</strong> : Pi (≈ 3.14159)</li>
            <li><strong>∞</strong> : Infinity</li>
            <li><strong>∑</strong> : Summation</li>
            <li><strong>∫</strong> : Integral</li>
            <li><strong>Δ</strong> : Change or difference</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why Are They Important?</h3>
          <p>
            Math symbols are essential for writing equations and formulas clearly and concisely. They make complex ideas easier to understand and solve across all fields of mathematics and science.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Tips</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Familiarize yourself with commonly used symbols in your area of study.</li>
            <li>Use proper spacing and formatting for clarity.</li>
            <li>Refer to symbol charts or guides when needed.</li>
          </ul>
        </Card>
      </div>
    </>
  );
};
