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

export const StandardDeviation = () => {
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
            <BreadcrumbPage>Standard Deviation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="standard-deviation-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="standard-deviation-explanation-header text-center text-2xl font-bold mb-4">
          Standard Deviation
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Standard Deviation?</h3>
          <p>
            <strong>Standard deviation</strong> is a measure of how spread out the values in a dataset are around the mean. It's the square root of the variance and gives a more interpretable measure of variability in the same unit as the data.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Formula</h3>
          <p>
            For a discrete random variable:
          </p>
          <pre className="my-4">
            σ = √Var(X) = √[Σ (xᵢ - μ)² × P(xᵢ)]
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>σ</strong>: Standard deviation</li>
              <li><strong>μ</strong>: Mean (expected value)</li>
              <li><strong>xᵢ</strong>: Each value of the variable</li>
              <li><strong>P(xᵢ)</strong>: Probability of xᵢ</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            Suppose a dataset has values 2, 4, 4, 4, 5, 5, 7, 9:
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Mean (μ) = 5</li>
            <li>Variance = [(2−5)² + (4−5)² × 3 + (5−5)² × 2 + (7−5)² + (9−5)²] / 8 = 4</li>
            <li>Standard Deviation = √4 = 2</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Interpretation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>A lower standard deviation indicates values are close to the mean.</li>
            <li>A higher standard deviation shows greater spread in the data.</li>
            <li>It’s useful in finance, science, and many statistical analyses.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Key Points</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard deviation is always non-negative.</li>
            <li>It’s more interpretable than variance since it has the same unit as the data.</li>
          </ul>
        </Card>
      </div>
    </>
  );
};


