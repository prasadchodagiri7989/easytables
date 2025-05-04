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

export const LaplaceTransformExplanation = () => {
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
                    <Link to="/mathematics/calculus">calculus Tool</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Laplace Transform</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="laplace-transform-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="laplace-transform-header text-center text-2xl font-bold mb-4">
          Laplace Transform
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is the Laplace Transform?</h3>
          <p>
            The <strong>Laplace Transform</strong> is an integral transform used to convert a time-domain function
            into a complex frequency-domain function. It simplifies the process of solving differential equations.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Definition</h3>
          <p>
            The Laplace Transform of a function <strong>f(t)</strong> is defined as:
          </p>
          <pre className="my-4 overflow-auto" aria-label="Laplace formula">
            L&#123;f(t)&#125; = ∫₀^∞ e<sup>-st</sup> f(t) dt
          </pre>
          <p>
            where <strong>s</strong> is a complex number and <strong>t ≥ 0</strong>.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Laplace Transforms</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>L&#123;1&#125; = 1/s</li>
            <li>L&#123;t&#125; = 1/s²</li>
            <li>L&#123;e<sup>at</sup>&#125; = 1/(s - a)</li>
            <li>L&#123;sin(at)&#125; = a / (s² + a²)</li>
            <li>L&#123;cos(at)&#125; = s / (s² + a²)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Uses</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Simplifying linear differential equations</li>
            <li>Solving control system problems</li>
            <li>Modeling electrical circuits</li>
            <li>Transforming initial value problems</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Inverse Laplace Transform</h3>
          <p>
            The inverse Laplace transform is used to convert a function back from the frequency domain to the time domain.
          </p>
        </Card>
      </div>
    </>
  );
};
