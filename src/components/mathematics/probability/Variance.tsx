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

export const Variance = () => {
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
                    <Link to="/mathematics/probability">probability Tool</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Variance</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="variance-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="variance-explanation-header text-center text-2xl font-bold mb-4">
          Variance
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Variance?</h3>
          <p>
            <strong>Variance</strong> is a statistical measure that describes how much the values of a random variable differ from the expected value (mean). It shows the spread or dispersion of a dataset.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Variance Formula (Discrete)</h3>
          <p>The formula for the variance of a discrete random variable is:</p>
          <pre className="my-4">
            Var(X) = Σ [(xᵢ - μ)² × P(xᵢ)]
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>xᵢ</strong>: Each value of the random variable</li>
              <li><strong>μ</strong>: The expected value (mean) of the random variable</li>
              <li><strong>P(xᵢ)</strong>: Probability of xᵢ occurring</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Alternate Formula</h3>
          <p>
            You can also compute variance using:
          </p>
          <pre className="my-4">
            Var(X) = E(X²) - [E(X)]²
          </pre>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            Suppose a fair 3-sided die has outcomes 1, 2, 3:
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>E(X) = (1 + 2 + 3) / 3 = 2</li>
            <li>E(X²) = (1² + 2² + 3²) / 3 = (1 + 4 + 9) / 3 = 14 / 3 ≈ 4.67</li>
            <li>Var(X) = E(X²) - [E(X)]² = 4.67 - 4 = 0.67</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Interpretation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Higher variance means data points are more spread out from the mean.</li>
            <li>Lower variance indicates values are close to the mean.</li>
            <li>Variance is always non-negative.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Note</h3>
          <p>
            The *square root* of the variance is called the *standard deviation*, which gives dispersion in the same unit as the original data.
          </p>
        </Card>
      </div>
    </>
  );
};
