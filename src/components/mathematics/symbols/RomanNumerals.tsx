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

export const RomanNumerals = () => {
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
            <BreadcrumbPage>Roman Numerals</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="roman-numerals-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="roman-numerals-header text-center text-2xl font-bold mb-4">
          Roman Numerals
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Roman Numerals?</h3>
          <p>
            <strong>Roman numerals</strong> are a system of numerical notation that originated in ancient Rome and were used throughout the Roman Empire in various aspects of daily life. These numerals are still used today in certain contexts, such as in the numbering of book chapters, clock faces, and dates in certain events.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Roman Numeral Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>I</strong> – 1</li>
            <li><strong>V</strong> – 5</li>
            <li><strong>X</strong> – 10</li>
            <li><strong>L</strong> – 50</li>
            <li><strong>C</strong> – 100</li>
            <li><strong>D</strong> – 500</li>
            <li><strong>M</strong> – 1000</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Roman Numeral Rules</h3>
          <p>
            Roman numerals follow specific rules for combining these symbols to represent numbers:
          </p>
          <ul className="list-decimal pl-5 space-y-2">
            <li><strong>Repetition:</strong> Roman numerals are repeated to add values. For example, <strong>III</strong> represents 3 (1+1+1).</li>
            <li><strong>Subtraction:</strong> If a smaller numeral appears before a larger one, it is subtracted. For example, <strong>IV</strong> represents 4 (5-1), and <strong>IX</strong> represents 9 (10-1).</li>
            <li><strong>Addition:</strong> If a smaller numeral appears after a larger one, it is added. For example, <strong>VI</strong> represents 6 (5+1), and <strong>XI</strong> represents 11 (10+1).</li>
            <li><strong>Placement:</strong> The numeral for 5 (V) precedes a smaller numeral to subtract (IV for 4), and it follows a smaller numeral to add (VI for 6).</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>IV</strong> – 4 (5-1)</li>
            <li><strong>IX</strong> – 9 (10-1)</li>
            <li><strong>XL</strong> – 40 (50-10)</li>
            <li><strong>LXX</strong> – 70 (50+10+10)</li>
            <li><strong>CXX</strong> – 120 (100+10+10)</li>
            <li><strong>CC</strong> – 200 (100+100)</li>
            <li><strong>MDCCCLXXXVIII</strong> – 1888 (1000+500+100+100+100+10+10+10+5+1+1)</li>
            <li><strong>MMXXI</strong> – 2021 (1000+1000+10+10+1)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why Roman Numerals Matter</h3>
          <p>
            Roman numerals serve as an important part of historical and cultural heritage. While they are no longer used for most daily arithmetic, they are still seen in many contexts today. Understanding Roman numerals is essential for reading historical texts, understanding certain systems like clock faces, and even interpreting certain elements in modern times, like movie release years (e.g., MMXXI for 2021).
          </p>
        </Card>
      </div>
    </>
  );
};
