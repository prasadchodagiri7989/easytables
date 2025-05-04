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

export const QuadraticEquationExplanation = () => {
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
                              <Link to="/mathematics/algebra">Algebra Tool</Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Quadratic Equation Explanation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="quadratic-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="quadratic-explanation-header text-center text-2xl font-bold mb-4">
          Quadratic Equation Explanation
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">Quadratic Equation Overview</h3>
          <p>A quadratic equation is a second-degree polynomial equation of the form:</p>
          <pre className="my-4">ax² + bx + c = 0</pre>

          <p>Where:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>a</strong>: The coefficient of x² (cannot be zero)</li>
            <li><strong>b</strong>: The coefficient of x</li>
            <li><strong>c</strong>: The constant term</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Discriminant</h3>
          <p>The discriminant of a quadratic equation is given by the formula:</p>
          <pre className="my-4">Δ = b² - 4ac</pre>

          <p>The discriminant helps determine the nature of the roots:</p>
          <ul className="list-decimal pl-5 space-y-2">
            <li>If Δ &gt; 0: The equation has two distinct real roots.</li>
            <li>If Δ = 0: The equation has exactly one real root (a repeated root).</li>
            <li>If Δ &lt; 0: The equation has two complex conjugate roots.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Solving the Equation</h3>
          <p>The general method for solving a quadratic equation is by using the <em>quadratic formula</em>:</p>
          <pre className="my-4">x = (-b ± √Δ) / 2a</pre>

          <p>Where:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>±</strong>: Indicates two possible solutions — one with a plus sign and one with a minus sign.</li>
            <li><strong>√Δ</strong>: The square root of the discriminant (Δ).</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Example</h3>
          <p>Let's consider an example equation: <em>x² - 5x + 6 = 0</em>.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>For this equation, a = 1, b = -5, and c = 6.</li>
            <li>The discriminant is Δ = (-5)² - 4(1)(6) = 25 - 24 = 1.</li>
            <li>Since Δ &gt; 0, we know there are two real and distinct roots.</li>
            <li>
              Using the quadratic formula: <br />
              x = (5 ± √1) / 2(1) <br />
              x = (5 ± 1) / 2 <br />
              So, the solutions are x₁ = 3 and x₂ = 2.
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
};
