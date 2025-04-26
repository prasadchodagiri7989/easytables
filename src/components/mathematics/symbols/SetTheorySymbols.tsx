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

export const SetTheorySymbols = () => {
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
            <BreadcrumbPage>Set Theory Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="set-theory-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="set-theory-symbols-header text-center text-2xl font-bold mb-4">
          Set Theory Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Set Theory Symbols?</h3>
          <p>
            <strong>Set theory symbols</strong> are used to represent operations, relations, and elements in sets. Set theory forms the foundation for much of modern mathematics and is used to define the behavior of sets, subsets, and the relationships between different sets.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Set Theory Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>∈</strong>: Element of a set (e.g., x ∈ A means x is an element of set A)</li>
            <li><strong>∉</strong>: Not an element of a set (e.g., x ∉ A means x is not an element of set A)</li>
            <li><strong>⊆</strong>: Subset (e.g., A ⊆ B means A is a subset of B)</li>
            <li><strong>⊂</strong>: Proper subset (e.g., A ⊂ B means A is a proper subset of B, meaning A is a subset of B but not equal to B)</li>
            <li><strong>⊇</strong>: Superset (e.g., A ⊇ B means A is a superset of B)</li>
            <li><strong>⊃</strong>: Proper superset (e.g., A ⊃ B means A is a proper superset of B)</li>
            <li><strong>∪</strong>: Union of sets (e.g., A ∪ B represents all elements that are in either set A or set B)</li>
            <li><strong>∩</strong>: Intersection of sets (e.g., A ∩ B represents all elements that are in both set A and set B)</li>
            <li><strong>∅</strong>: Empty set (set with no elements)</li>
            <li><strong>ℕ</strong>: Set of natural numbers (e.g., ℕ = 0, 1, 2, 3, ...)</li>
            <li><strong>ℤ</strong>: Set of integers (e.g., ℤ = ..., -3, -2, -1, 0, 1, 2, 3, ...)</li>
            <li><strong>ℝ</strong>: Set of real numbers</li>
            <li><strong>ℚ</strong>: Set of rational numbers (fractions of integers)</li>
            <li><strong>ℂ</strong>: Set of complex numbers</li>
            <li><strong>∪</strong>: Union (combining the elements of two sets)</li>
            <li><strong>∩</strong>: Intersection (common elements between two sets)</li>
            <li><strong>−</strong>: Set difference (elements in one set but not the other)</li>
            <li><strong>×</strong>: Cartesian product (e.g., A × B represents the set of ordered pairs formed by combining each element of A with each element of B)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>A ∪ B</strong> – The union of sets A and B (all elements from both A and B)</li>
            <li><strong>A ∩ B</strong> – The intersection of sets A and B (elements common to both A and B)</li>
            <li><strong>A ⊆ B</strong> – Set A is a subset of set B (every element of A is also in B)</li>
            <li><strong>ℕ = 0, 1, 2, 3, ...</strong> – The set of natural numbers, starting from 0 and increasing</li>
            <li><strong>ℝ = x | x ∈ ℝ</strong> – The set of all real numbers</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Set theory symbols are fundamental in defining the relationships between elements and sets. They are used in all areas of mathematics to discuss and reason about collections of objects, making them essential for formal proofs, logic, and problem-solving.
          </p>
        </Card>
      </div>
    </>
  );
};
