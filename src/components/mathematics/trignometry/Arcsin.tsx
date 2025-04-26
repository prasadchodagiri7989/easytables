import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use next/link for Next.js
import { Card } from "@/components/ui/card";

export const Arcsin = () => {
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
            <BreadcrumbPage>Arcsin (Inverse Sine)</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="arcsin-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="arcsin-explanation-header text-center text-2xl font-bold mb-4">
          Arcsin (Inverse Sine)
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Arcsin?</h3>
          <p>
            Arcsin (also called the inverse sine function) is used to determine the angle whose sine value is a given number.
            The formula for Arcsin is:
          </p>
          <pre className="my-4">
            θ = sin⁻¹(x)
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>θ</strong>: The angle (in radians or degrees).</li>
              <li><strong>x</strong>: The sine value (must be between -1 and 1).</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Domain and Range of Arcsin</h3>
          <p>
            - *Domain*: The sine value must lie between -1 and 1 (inclusive), i.e., x ∈ [-1, 1].<br />
            - *Range*: The result of the Arcsin function is an angle between -π/2 and π/2 radians (-90° to 90°), i.e., θ ∈ [-π/2, π/2].
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            If sin(θ) = 0.5, then θ = sin⁻¹(0.5) = 30° or π/6 radians.
          </p>
        </Card>
      </div>
    </>
  );
};
