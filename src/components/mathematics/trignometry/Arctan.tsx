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

export const Arctan = () => {
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
            <BreadcrumbPage>Arctan (Inverse Tangent)</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="arctan-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="arctan-explanation-header text-center text-2xl font-bold mb-4">
          Arctan (Inverse Tangent)
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Arctan?</h3>
          <p>
            Arctan (also called the inverse tangent function) is used to determine the angle whose tangent value is a given number.
            The formula for Arctan is:
          </p>
          <pre className="my-4">
            θ = tan⁻¹(x)
          </pre>
          <p>
            Where:
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>θ</strong>: The angle (in radians or degrees).</li>
              <li><strong>x</strong>: The tangent value (can be any real number).</li>
            </ul>
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Domain and Range of Arctan</h3>
          <p>
            - *Domain*: The tangent value can be any real number, i.e., x ∈ ℝ.<br />
            - *Range*: The result of the Arctan function is an angle between -π/2 and π/2 radians (-90° to 90°), i.e., θ ∈ [-π/2, π/2].
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>
            If tan(θ) = 1, then θ = tan⁻¹(1) = 45° or π/4 radians.
          </p>
        </Card>
      </div>
    </>
  );
};
