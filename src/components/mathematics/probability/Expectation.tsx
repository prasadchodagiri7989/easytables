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

export const Expectation = () => {
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
            <BreadcrumbPage>Expected Value</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="expectation-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="expectation-explanation-header text-center text-2xl font-bold mb-4">
          Expectation (Expected Value)
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Expected Value?</h3>
          <p>
            The <strong>expected value</strong> (or <em>mathematical expectation</em>) of a random variable is a measure of the center of its distribution — essentially, it's the long-term average outcome if an experiment is repeated many times.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Expected Value Formula</h3>
          <p>For a discrete random variable:</p>
          <pre className="my-4">
            E(X) = Σ [xᵢ × P(xᵢ)]
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>xᵢ</strong>: Each possible value of the random variable</li>
              <li><strong>P(xᵢ)</strong>: The probability of that value occurring</li>
              <li><strong>Σ</strong>: Summation across all possible values</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            Suppose you roll a fair six-sided die. The expected value of the outcome is:
          </p>
          <pre className="my-4">
            E(X) = (1×1/6) + (2×1/6) + (3×1/6) + (4×1/6) + (5×1/6) + (6×1/6) = 3.5
          </pre>
          <p>
            Although you can never roll a 3.5, over many rolls, the average will approach 3.5.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Applications</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Economics and finance (e.g., expected return on investment)</li>
            <li>Gambling and games of chance</li>
            <li>Insurance and risk assessment</li>
            <li>Statistical decision-making</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Important Notes</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Expected value doesn’t guarantee an outcome in a single trial.</li>
            <li>It assumes the process is repeated many times.</li>
            <li>It can be used for both discrete and continuous variables.</li>
          </ul>
        </Card>
      </div>
    </>
  );
};
