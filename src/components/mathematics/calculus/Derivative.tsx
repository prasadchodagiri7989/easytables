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

export const Derivative = () => {
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
            <BreadcrumbPage>Derivative</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="derivative-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="derivative-header text-center text-2xl font-bold mb-4">
          Derivative
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is a Derivative?</h3>
          <p>
            In calculus, the <strong>derivative</strong> measures how a function changes as its input changes. It tells us the <strong>rate of change</strong> or the <strong>slope</strong> of the function at any given point.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Notation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>f′(x) — Lagrange notation</li>
            <li>dy/dx — Leibniz notation</li>
            <li>D[f(x)] — Operator notation</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Definition</h3>
          <p>
            The derivative of a function <strong>f(x)</strong> at a point <strong>x</strong> is defined as:
          </p>
          <pre className="my-4 overflow-auto">
            f′(x) = lim(h → 0) [f(x + h) - f(x)] / h
          </pre>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Derivatives</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>d/dx [xⁿ] = nxⁿ⁻¹</li>
            <li>d/dx [sin(x)] = cos(x)</li>
            <li>d/dx [cos(x)] = -sin(x)</li>
            <li>d/dx [eˣ] = eˣ</li>
            <li>d/dx [ln(x)] = 1/x</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Geometric Meaning</h3>
          <p>
            The derivative at a point on a curve represents the slope of the tangent line at that point.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Applications</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Finding slopes and rates of change</li>
            <li>Determining maxima and minima of functions</li>
            <li>Solving physics problems involving velocity and acceleration</li>
            <li>Modeling change in economics and biology</li>
          </ul>
        </Card>
      </div>
    </>
  );
};
