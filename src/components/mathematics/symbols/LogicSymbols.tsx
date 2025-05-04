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

export const LogicSymbols = () => {
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
            <BreadcrumbPage>Logic Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="logic-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="logic-symbols-header text-center text-2xl font-bold mb-4">
          Logic Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Logic Symbols?</h3>
          <p>
            <strong>Logic symbols</strong> are used in formal logic to represent logical operations, relationships, and statements. These symbols are essential in constructing logical arguments and proofs, and they help define logical structures and operations.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Logic Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>∧</strong>: Logical AND (conjunction)</li>
            <li><strong>∨</strong>: Logical OR (disjunction)</li>
            <li><strong>¬</strong>: Negation (NOT)</li>
            <li><strong>→</strong>: Logical implication (if... then)</li>
            <li><strong>↔</strong>: Logical equivalence (if and only if)</li>
            <li><strong>⊥</strong>: Contradiction (false)</li>
            <li><strong>⊤</strong>: Tautology (true)</li>
            <li><strong>∀</strong>: Universal quantifier (for all)</li>
            <li><strong>∃</strong>: Existential quantifier (there exists)</li>
            <li><strong>⇒</strong>: Strong implication</li>
            <li><strong>≡</strong>: Logical equivalence (equivalent statements)</li>
            <li><strong>≠</strong>: Not equal</li>
            <li><strong>∈</strong>: Element of a set</li>
            <li><strong>∉</strong>: Not an element of a set</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>P ∧ Q</strong> – The conjunction (AND) of statements P and Q (both must be true)</li>
            <li><strong>P ∨ Q</strong> – The disjunction (OR) of statements P and Q (at least one must be true)</li>
            <li><strong>¬P</strong> – The negation (NOT) of statement P (P is false)</li>
            <li><strong>P → Q</strong> – The implication (if P then Q), which means if P is true, Q must also be true</li>
            <li><strong>∀x ∈ S, P(x)</strong> – For all x in set S, the statement P(x) holds</li>
            <li><strong>P ↔ Q</strong> – Logical equivalence, meaning P and Q are either both true or both false</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Logic symbols are the foundation of formal reasoning and proof systems. They allow the expression of logical relationships and the construction of valid arguments in mathematics, philosophy, computer science, and more. Understanding these symbols is essential for working with formal logical systems and reasoning.
          </p>
        </Card>
      </div>
    </>
  );
};
