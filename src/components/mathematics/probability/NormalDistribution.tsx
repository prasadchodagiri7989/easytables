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

export const NormalDistribution = () => {
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
            <BreadcrumbPage>Normal Distribution</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="normal-distribution-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="normal-distribution-header text-center text-2xl font-bold mb-4">
          Normal Distribution
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is a Normal Distribution?</h3>
          <p>
            The <strong>normal distribution</strong>, also known as the Gaussian distribution, is a continuous probability distribution that is symmetrical about the mean. Most of the data falls near the mean, with fewer occurrences as you move away from the center.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Characteristics</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bell-shaped curve.</li>
            <li>Mean = Median = Mode.</li>
            <li>Symmetrical around the mean.</li>
            <li>Total area under the curve is 1.</li>
            <li>Defined by two parameters: <strong>μ</strong> (mean) and <strong>σ</strong> (standard deviation).</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Probability Density Function (PDF)</h3>
          <pre className="my-4 overflow-auto">
            f(x) = (1 / (σ√(2π))) × e<sup>-(x - μ)² / (2σ²)</sup>
          </pre>

          <h3 className="text-lg font-medium mt-6 mb-2">The Empirical Rule (68-95-99.7 Rule)</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>68% of data lies within 1 standard deviation of the mean.</li>
            <li>95% within 2 standard deviations.</li>
            <li>99.7% within 3 standard deviations.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            Suppose student test scores are normally distributed with a mean of 70 and standard deviation of 10:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>About 68% of students score between 60 and 80.</li>
            <li>Only ~2.5% score below 50 or above 90.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why It's Important</h3>
          <p>
            The normal distribution is fundamental in statistics and is used in hypothesis testing, confidence intervals, and modeling natural phenomena like heights, IQ scores, and measurement errors.
          </p>
        </Card>
      </div>
    </>
  );
};
