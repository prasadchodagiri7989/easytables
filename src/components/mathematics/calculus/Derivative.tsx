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
                  <BreadcrumbLink asChild>
                    <Link to="/mathematics/calculus">calculus Tool</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Derivative</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="derivative-explanation-container bg-white/40 dark:bg-transparent mx-auto max-w-[900px]">
        <h2 className="derivative-header text-center text-2xl font-bold mb-4">
          Derivative
        </h2>

      <Card className="p-6 glass-card mt-6">
        <h3 className="text-lg font-medium mb-2">Limit Definition of Derivative</h3>
        <p>
          The derivative can also be interpreted as the limit of the average rate of change over an interval as the interval becomes infinitesimally small. This is formalized in the definition:
        </p>
        <pre className="my-4 overflow-auto">
          f′(x) = lim(h → 0) [f(x + h) - f(x)] / h
        </pre>
        <p>
          This definition highlights that the derivative at a point is the limit of the average rate of change as the interval approaches zero.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Basic Rules of Differentiation</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Sum Rule:</strong> d/dx [f(x) + g(x)] = f′(x) + g′(x)</li>
          <li><strong>Product Rule:</strong> d/dx [f(x)g(x)] = f′(x)g(x) + f(x)g′(x)</li>
          <li><strong>Quotient Rule:</strong> d/dx [f(x)/g(x)] = (f′(x)g(x) - f(x)g′(x)) / (g(x))²</li>
          <li><strong>Chain Rule:</strong> d/dx [f(g(x))] = f′(g(x)) · g′(x)</li>
        </ul>

        <h3 className="text-lg font-medium mt-6 mb-2">Higher-Order Derivatives</h3>
        <p>
          The first derivative represents the rate of change of a function. But you can also take the derivative of a derivative, which gives you the second derivative, and so on. These higher-order derivatives describe more complex behaviors of the function.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Second Derivative:</strong> f′′(x) = d²f/dx² — represents the acceleration or concavity of a function.</li>
          <li><strong>Third Derivative:</strong> f′′′(x) = d³f/dx³ — can describe jerk, or the rate of change of acceleration.</li>
        </ul>

        <h3 className="text-lg font-medium mt-6 mb-2">Example: Finding the Derivative of a Polynomial</h3>
        <p>
          Let’s consider the function f(x) = 3x² + 2x - 1. To find its derivative:
        </p>
        <pre className="my-4 overflow-auto">
          f′(x) = d/dx [3x² + 2x - 1] = 6x + 2
        </pre>
        <p>
          The derivative f′(x) = 6x + 2 tells us how the function changes at any given point x. For example, at x = 1:
        </p>
        <pre className="my-4 overflow-auto">
          f′(1) = 6(1) + 2 = 8
        </pre>
        <p>
          This means that the rate of change of the function at x = 1 is 8.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Real-World Applications</h3>
        <p>
          Derivatives have a wide range of applications in real-world scenarios, such as:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Physics:</strong> Describing motion, velocity, and acceleration of objects.</li>
          <li><strong>Economics:</strong> Finding marginal cost or revenue in business models.</li>
          <li><strong>Medicine:</strong> Modeling the rate of change of drug concentration in the bloodstream.</li>
          <li><strong>Engineering:</strong> Analyzing the stress and strain in materials under force.</li>
        </ul>

        <h3 className="text-lg font-medium mt-6 mb-2">Important Considerations</h3>
        <p>
          Not all functions are differentiable at every point. A function is differentiable if its derivative exists at a given point. For a function to be differentiable at a point, it must first be continuous at that point.
        </p>
        <p>
          Discontinuities, sharp corners, or vertical tangents can prevent a function from being differentiable at a specific point.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>The derivative measures how a function changes as its input changes.</li>
          <li>The derivative can be interpreted as the slope of the tangent line at a point on a function.</li>
          <li>Basic rules such as the sum rule, product rule, quotient rule, and chain rule are essential for computing derivatives.</li>
          <li>Higher-order derivatives describe more complex aspects of change, such as acceleration and jerk.</li>
          <li>Derivatives have vast applications in various fields like physics, economics, and engineering.</li>
        </ul>

        <h3 className="text-lg font-medium mb-2">The Fundamental Theorem of Calculus</h3>
  <p>
    One of the most important concepts in calculus is the Fundamental Theorem of Calculus, which links the concepts of differentiation and integration. This theorem is divided into two parts:
  </p>
  <ol className="list-decimal pl-5 space-y-2">
    <li>
      <strong>First Part:</strong> If a function is continuous on a closed interval [a, b], and if F(x) is the integral of the function f(x) from a to x, then the derivative of F(x) is f(x). In other words:
      <pre className="my-4 overflow-auto">
        d/dx ∫[a to x] f(t) dt = f(x)
      </pre>
      This part establishes that differentiation and integration are inverse operations.
    </li>
    <li>
      <strong>Second Part:</strong> If a function is continuous on a closed interval [a, b], then the integral of the function from a to b is equal to the difference in the values of an antiderivative of f(x) evaluated at the limits of integration:
      <pre className="my-4 overflow-auto">
        ∫[a to b] f(x) dx = F(b) - F(a)
      </pre>
      This part explains how the area under a curve can be calculated by finding an antiderivative.
    </li>
  </ol>

  <h3 className="text-lg font-medium mt-6 mb-2">Advanced Differentiation Techniques</h3>
  <p>
    Beyond the basic rules of differentiation, there are several advanced techniques that can be used to compute derivatives more efficiently. These techniques are especially useful when dealing with complex functions.
  </p>

  <h4 className="text-md font-medium mt-4 mb-2">Implicit Differentiation</h4>
  <p>
    Sometimes functions are given in a form that is difficult to differentiate explicitly. In such cases, implicit differentiation is a useful method. Implicit differentiation is applied when you have an equation that involves both x and y variables (i.e., an equation that defines y implicitly in terms of x).
  </p>
  <p>
    For example, consider the equation of a circle:
    <pre className="my-4 overflow-auto">
      x² + y² = r²
    </pre>
    To find dy/dx, we differentiate both sides of the equation with respect to x:
    <pre className="my-4 overflow-auto">
      2x + 2y(dy/dx) = 0
    </pre>
    Solving for dy/dx, we get:
    <pre className="my-4 overflow-auto">
      dy/dx = -x/y
    </pre>
  </p>

  <h4 className="text-md font-medium mt-4 mb-2">Logarithmic Differentiation</h4>
  <p>
    Another advanced technique is logarithmic differentiation, which is particularly helpful when differentiating functions that involve products, quotients, or powers of variables. The idea behind logarithmic differentiation is to take the natural logarithm of both sides of the equation, simplify the resulting expression, and then differentiate.
  </p>
  <p>
    For example, consider the function:
    <pre className="my-4 overflow-auto">
      y = xⁿ * eˣ
    </pre>
    Taking the natural logarithm of both sides:
    <pre className="my-4 overflow-auto">
      ln(y) = ln(xⁿ) + ln(eˣ)
    </pre>
    Simplifying:
    <pre className="my-4 overflow-auto">
      ln(y) = nln(x) + x
    </pre>
    Now, differentiating both sides:
    <pre className="my-4 overflow-auto">
      1/y (dy/dx) = n/x + 1
    </pre>
    Solving for dy/dx, we get:
    <pre className="my-4 overflow-auto">
      dy/dx = y(n/x + 1)
    </pre>
    Substituting y = xⁿ * eˣ back in:
    <pre className="my-4 overflow-auto">
      dy/dx = xⁿ * eˣ (n/x + 1)
    </pre>
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Differentiability and Continuity</h3>
  <p>
    While every differentiable function is continuous, not all continuous functions are differentiable. The distinction is subtle but important.
  </p>
  <p>
    A function is said to be differentiable at a point if its derivative exists at that point. For this to happen, the function must be continuous at the point. However, continuity alone does not guarantee differentiability. A function can be continuous at a point but not differentiable there.
  </p>
  <p>
    A classic example of a function that is continuous but not differentiable is the absolute value function, f(x) = |x|. The graph of this function has a sharp corner at x = 0, where the derivative does not exist.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Applications in Physics</h3>
  <p>
    Derivatives are extensively used in physics to describe motion, force, and energy. They are central to understanding how physical quantities change with respect to time or other variables.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>
      <strong>Velocity:</strong> The velocity of an object is the derivative of its position with respect to time. If s(t) represents the position of an object at time t, then its velocity is given by:
      <pre className="my-4 overflow-auto">
        v(t) = ds/dt
      </pre>
    </li>
    <li>
      <strong>Acceleration:</strong> The acceleration of an object is the derivative of its velocity with respect to time. If v(t) represents the velocity of an object at time t, then its acceleration is given by:
      <pre className="my-4 overflow-auto">
        a(t) = dv/dt
      </pre>
    </li>
    <li>
      <strong>Force:</strong> Newton's second law of motion states that force is the product of mass and acceleration. In mathematical terms:
      <pre className="my-4 overflow-auto">
        F = ma
      </pre>
      The acceleration can be computed using the derivative of the velocity, and force can be determined accordingly.
    </li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Applications in Economics</h3>
  <p>
    Derivatives play a crucial role in economics, particularly in the fields of optimization and marginal analysis. In economics, a function often represents a relationship between economic variables such as cost, revenue, and profit.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>
      <strong>Marginal Cost and Revenue:</strong> The marginal cost of producing one more unit of a good is the derivative of the total cost function with respect to the quantity produced. Similarly, the marginal revenue is the derivative of the total revenue function with respect to quantity.
    </li>
    <li>
      <strong>Profit Maximization:</strong> To maximize profit, one typically finds the derivative of the profit function with respect to the quantity produced and sets it equal to zero. The solution gives the optimal quantity that maximizes profit.
    </li>
  </ul>
  <h3 className="text-lg font-medium mb-4">Graphical Interpretation of Derivatives</h3>
  <p>
    One of the most intuitive ways to understand derivatives is through their geometric meaning. The derivative of a function at a point is the slope of the tangent line drawn at that point on the graph of the function. If the derivative is positive, the graph is rising; if negative, it’s falling. A derivative of zero means the function has a horizontal tangent—often indicating a local maximum or minimum.
  </p>
  <p>
    For example, if f(x) has a maximum at x = 2, then f′(2) = 0. To determine whether it’s a maximum or minimum, one often looks at the second derivative:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>If f″(x) &gt; 0, the curve is concave up (a local minimum).</li>
    <li>If f″(x) &lt; 0, the curve is concave down (a local maximum).</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Tangent Lines and Approximations</h3>
  <p>
    Derivatives enable linear approximations of functions. Near a point a, a function f(x) can be approximated by its tangent line:
  </p>
  <pre className="my-4 overflow-auto">
    f(x) ≈ f(a) + f′(a)(x - a)
  </pre>
  <p>
    This linear approximation is especially useful in physics, engineering, and numerical methods when functions are too complex for exact evaluation.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Critical Points and Optimization</h3>
  <p>
    Derivatives are essential tools for finding the maxima and minima of functions—a fundamental part of optimization. Critical points occur where f′(x) = 0 or f′(x) is undefined. To determine the nature of these points:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>Use the <strong>First Derivative Test</strong>: Analyze sign changes in f′(x).</li>
    <li>Use the <strong>Second Derivative Test</strong>: Evaluate f″(x) at the critical point.</li>
  </ul>
  <p>
    This method is widely applied in economics (profit maximization), physics (finding equilibrium), and engineering (minimizing material usage).
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Concavity and Inflection Points</h3>
  <p>
    The second derivative, f″(x), gives information about the <strong>concavity</strong> of the function:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>If f″(x) &gt; 0, the graph is concave upward.</li>
    <li>If f″(x) &lt; 0, the graph is concave downward.</li>
    <li>An <strong>inflection point</strong> occurs where concavity changes (i.e., f″(x) changes sign).</li>
  </ul>
  <p>
    Inflection points are important in modeling real-world phenomena like changes in acceleration or shifts in economic trends.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Mean Value Theorem (MVT)</h3>
  <p>
    The <strong>Mean Value Theorem</strong> states that for a function continuous on [a, b] and differentiable on (a, b), there exists at least one point c in (a, b) such that:
  </p>
  <pre className="my-4 overflow-auto">
    f′(c) = [f(b) - f(a)] / (b - a)
  </pre>
  <p>
    This means the instantaneous rate of change equals the average rate of change somewhere in the interval. It is widely used in physics to confirm that instantaneous velocity matches average velocity at some point.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Related Rates</h3>
  <p>
    Related rates problems involve two or more quantities that are changing with respect to time. By using the chain rule, you can relate their derivatives:
  </p>
  <p>
    For example, if x and y are related and changing over time:
  </p>
  <pre className="my-4 overflow-auto">
    dy/dt = (dy/dx)(dx/dt)
  </pre>
  <p>
    These problems are common in physics and engineering, such as calculating how fast a shadow grows or how fast water rises in a tank.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Curve Sketching with Derivatives</h3>
  <p>
    Derivatives help in sketching graphs by providing critical information:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>f′(x): Indicates intervals of increase/decrease.</li>
    <li>f″(x): Determines concavity and points of inflection.</li>
    <li>Critical points and asymptotes guide overall shape and behavior.</li>
  </ul>
  <p>
    This is a practical method used in design and simulation software to visualize mathematical models.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Parametric and Polar Curves</h3>
  <p>
    Derivatives extend to parametric and polar equations:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>For parametric functions x(t), y(t), the slope is dy/dx = (dy/dt) / (dx/dt)</li>
    <li>For polar curves r(θ), derivatives help find slopes and tangents using coordinate conversion.</li>
  </ul>
  <p>
    These techniques are used in computer graphics, kinematics, and robotics for precise motion modeling.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Taylor Series and Differentiation</h3>
  <p>
    Derivatives are at the heart of Taylor and Maclaurin series, which approximate functions as infinite polynomials:
  </p>
  <pre className="my-4 overflow-auto">
    f(x) ≈ f(a) + f′(a)(x − a) + f″(a)(x − a)²/2! + ...
  </pre>
  <p>
    These series are invaluable in numerical analysis, physics simulations, and differential equation solvers.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Differential Equations and Modeling</h3>
  <p>
    A differential equation involves derivatives of an unknown function. Derivatives are the building blocks for:
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li>First-order ODEs (dy/dx = ky)</li>
    <li>Second-order ODEs (used in motion, waves, and circuits)</li>
    <li>Partial differential equations (heat flow, electromagnetism)</li>
  </ul>
  <p>
    These equations are central to modeling systems that evolve over time or space.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Historical Context and Mathematicians</h3>
  <p>
    The concept of the derivative was formalized in the 17th century by <strong>Isaac Newton</strong> and <strong>Gottfried Wilhelm Leibniz</strong>. While Newton used it to describe motion and change in physics, Leibniz introduced the notation dy/dx, which is still used today.
  </p>
  <p>
    Over centuries, calculus has become a cornerstone of modern science, economics, data analysis, and machine learning.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Derivatives in Machine Learning</h3>
  <p>
    In machine learning, derivatives are crucial in optimization algorithms like gradient descent. By computing the derivative of the loss function with respect to model parameters, algorithms adjust weights to minimize prediction error. This is called backpropagation in neural networks.
  </p>
  <p>
    Understanding gradients (partial derivatives) enables effective training of AI models.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Conclusion</h3>
  <p>
    Derivatives are far more than abstract mathematical tools—they are essential for modeling change, making predictions, optimizing outcomes, and solving real-world problems. From the slope of a graph to the trajectory of a rocket, from economic forecasts to AI training, derivatives are embedded in the language of progress and precision.
  </p>


      </Card>

      </div>
    </>
  );
};
