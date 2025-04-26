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

export const Convolution = () => {
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
            <BreadcrumbPage>Convolution</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="convolution-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="convolution-header text-center text-2xl font-bold mb-4">
          Convolution
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What is Convolution?</h3>
          <p>
            <strong>Convolution</strong> is a mathematical operation that combines two functions to produce a third function. 
            It expresses how the shape of one function is modified by the other.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Definition</h3>
          <p>
            The convolution of two continuous-time functions <strong>f(t)</strong> and <strong>g(t)</strong> is defined as:
          </p>
          <pre className="my-4 overflow-auto">
            (f * g)(t) = ∫₀^t f(τ)g(t - τ) dτ
          </pre>
          <p>
            For discrete signals, it's given by:
          </p>
          <pre className="my-4 overflow-auto">
            (f * g)[n] = Σₖ f[k]·g[n - k]
          </pre>

          <h3 className="text-lg font-medium mt-6 mb-2">Applications</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Signal processing (filters, smoothing, etc.)</li>
            <li>Image processing (blurring, edge detection)</li>
            <li>System analysis (input-output relationships)</li>
            <li>Probability (convolution of probability distributions)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Properties of Convolution</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Commutative:</strong> f * g = g * f</li>
            <li><strong>Associative:</strong> f * (g * h) = (f * g) * h</li>
            <li><strong>Distributive:</strong> f * (g + h) = f * g + f * h</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Connection to Laplace Transform</h3>
          <p>
            Convolution in time domain corresponds to multiplication in Laplace or frequency domain:
          </p>
          <pre className="my-2 overflow-auto">
            L&#123;f * g&#125; = L&#123;f&#125; · L&#123;g&#125;
          </pre>
        </Card>
      </div>
    </>
  );
};
