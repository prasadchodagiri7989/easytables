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

export const Arccos = () => {
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
                    <Link to="/mathematics/trigonometry">trigonometry Tool</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Arccos (Inverse Cosine)</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="arccos-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="arccos-explanation-header text-center text-2xl font-bold mb-4">
          Arccos (Inverse Cosine)
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Arccos?</h3>
          <p>
            Arccos (also called the inverse cosine function) is used to determine the angle whose cosine value is a given number.
            The formula for Arccos is:
          </p>
          <pre className="my-4">
            θ = cos⁻¹(x)
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>θ</strong>: The angle (in radians or degrees).</li>
              <li><strong>x</strong>: The cosine value (must be between -1 and 1).</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Domain and Range of Arccos</h3>
          <p>
            - *Domain*: The cosine value must lie between -1 and 1 (inclusive), i.e., x ∈ [-1, 1].<br />
            - *Range*: The result of the Arccos function is an angle between 0 and π radians (0° to 180°), i.e., θ ∈ [0, π].
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            If cos(θ) = 0.5, then θ = cos⁻¹(0.5) = 60° or π/3 radians.
          </p>
        </Card>
      </div>
    </>
  );
};
