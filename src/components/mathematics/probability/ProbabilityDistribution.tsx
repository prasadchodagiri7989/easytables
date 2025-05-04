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

export const ProbabilityDistribution = () => {
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
            <BreadcrumbPage>Probability Distribution</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="probability-distribution-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="probability-distribution-header text-center text-2xl font-bold mb-4">
          Probability Distribution
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is a Probability Distribution?</h3>
          <p>
            A <strong>probability distribution</strong> describes how the probabilities are distributed over the values of a random variable. It shows the likelihood of each possible outcome.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Types of Probability Distributions</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Discrete Probability Distribution</strong>: Used when the variable can take on only specific values (e.g., number of heads in coin tosses).</li>
            <li><strong>Continuous Probability Distribution</strong>: Used when the variable can take any value in a range (e.g., height, weight).</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Key Properties</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>The sum of all probabilities is 1.</li>
            <li>Each probability value is between 0 and 1.</li>
            <li>The distribution can be represented as a table, graph, or formula.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Examples</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Binomial Distribution</strong>: Number of successes in fixed trials.</li>
            <li><strong>Normal Distribution</strong>: Bell-shaped curve, common in natural data.</li>
            <li><strong>Poisson Distribution</strong>: Counts of events in a fixed interval.</li>
            <li><strong>Uniform Distribution</strong>: All outcomes are equally likely.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Example (Discrete)</h3>
          <p>
            Tossing a fair coin twice. Let X be the number of heads:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>P(X = 0) = 1/4</li>
            <li>P(X = 1) = 2/4</li>
            <li>P(X = 2) = 1/4</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why It Matters</h3>
          <p>
            Probability distributions are foundational in statistics. They help in modeling real-world scenarios, calculating expectations, and conducting hypothesis testing.
          </p>
        </Card>
      </div>
    </>
  );
};
