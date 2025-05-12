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

export const MathSymbols = () => {
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
        <Link to="/mathematics/symbols">symbols Tool</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Math Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="math-symbols-explanation-container bg-white/40 dark:bg-transparent mx-auto max-w-[900px]">
        <h2 className="math-symbols-header text-center text-2xl font-bold mb-4">
          Math Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Mathematical Symbols?</h3>
          <p>
            <strong>Mathematical symbols</strong> are signs used to represent numbers, operations, relations, and functions in mathematical expressions. 
            They provide a universal language for mathematical communication.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Math Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>+</strong> : Addition</li>
            <li><strong>−</strong> : Subtraction</li>
            <li><strong>×</strong> or <strong>*</strong> : Multiplication</li>
            <li><strong>÷</strong> or <strong>/</strong> : Division</li>
            <li><strong>=</strong> : Equal to</li>
            <li><strong>≠</strong> : Not equal to</li>
            <li><strong>&lt;</strong> : Less than</li>
            <li><strong>&gt;</strong> : Greater than</li>
            <li><strong>≤</strong> : Less than or equal to</li>
            <li><strong>≥</strong> : Greater than or equal to</li>
            <li><strong>√</strong> : Square root</li>
            <li><strong>π</strong> : Pi (≈ 3.14159)</li>
            <li><strong>∞</strong> : Infinity</li>
            <li><strong>∑</strong> : Summation</li>
            <li><strong>∫</strong> : Integral</li>
            <li><strong>Δ</strong> : Change or difference</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why Are They Important?</h3>
          <p>
            Math symbols are essential for writing equations and formulas clearly and concisely. They make complex ideas easier to understand and solve across all fields of mathematics and science.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Tips</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Familiarize yourself with commonly used symbols in your area of study.</li>
            <li>Use proper spacing and formatting for clarity.</li>
            <li>Refer to symbol charts or guides when needed.</li>
          </ul>
          <h3 className="text-lg font-medium mb-2">Mathematical Notation in Calculus</h3>
  <p>
    In calculus, mathematical notation is essential for expressing complex operations involving limits, derivatives, and integrals. These notations allow mathematicians and scientists to communicate concisely and precisely about changes in functions and their behavior.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Common Calculus Symbols</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>∂</strong>: Partial derivative – This symbol is used in calculus to represent a derivative taken with respect to one variable, holding others constant. It's crucial in multivariable calculus and differential equations.</li>
    <li><strong>∫</strong>: Integral – The integral sign is used for integration, representing the accumulation or sum of quantities. It is central to areas such as finding areas under curves and solving differential equations.</li>
    <li><strong>∑</strong>: Summation – This symbol is used to represent the sum of a sequence or series of terms. It's an essential concept in mathematical analysis and applied mathematics.</li>
    <li><strong>lim</strong>: Limit – The limit symbol is used in calculus to describe the behavior of a function as it approaches a particular point. It is foundational to the concepts of continuity, derivatives, and integrals.</li>
    <li><strong>∞</strong>: Infinity – In calculus, infinity represents an unbounded quantity. It is commonly used in limits and integrals to represent infinitely large or small values.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Understanding Limits</h3>
  <p>
    A limit is a fundamental concept in calculus that describes the behavior of a function as its input approaches a certain value. The notation for limits is often written as <strong>lim<sub>x → a</sub> f(x) = L</strong>, meaning as <strong>x</strong> approaches <strong>a</strong>, the function <strong>f(x)</strong> approaches the value <strong>L</strong>.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Example:</strong> lim<sub>x → 3</sub> (x² - 9)/(x - 3) = 6. This is an example of evaluating a limit that initially results in an indeterminate form.</li>
    <li><strong>Example:</strong> lim<sub>x → ∞</sub> 1/x = 0. This shows the limit of a function as x approaches infinity.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Derivative Notation</h3>
  <p>
    The derivative symbol <strong>dy/dx</strong> represents the rate of change of a function with respect to the variable <strong>x</strong>. Derivatives are used in calculus to model rates of change, motion, and optimization problems. For example, the derivative of position with respect to time gives velocity.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Example:</strong> The derivative of <strong>f(x) = x²</strong> with respect to x is <strong>f'(x) = 2x</strong>.</li>
    <li><strong>Higher-Order Derivatives:</strong> In cases where we take derivatives multiple times, we use notation like <strong>f''(x)</strong> for the second derivative, which gives information about the concavity of the function.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Integral Notation</h3>
  <p>
    The integral sign <strong>∫</strong> is used to represent the operation of integration, which is the inverse of differentiation. It allows us to find quantities like areas under curves or accumulated change over time. The process of integration involves calculating the area under the curve of a function between two points.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Example:</strong> ∫<sub>0</sub><sup>1</sup> (x²) dx = 1/3. This represents the area under the curve <strong>y = x²</strong> from 0 to 1.</li>
    <li><strong>Indefinite Integrals:</strong> An indefinite integral represents the general form of the antiderivative of a function. It is written as ∫f(x) dx = F(x) + C, where <strong>C</strong> is the constant of integration.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">The Fundamental Theorem of Calculus</h3>
  <p>
    The Fundamental Theorem of Calculus connects the concept of differentiation with integration. It states that if a function is continuous over an interval, then its indefinite integral is the inverse of its derivative. In other words, integration and differentiation are "inverse operations."
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Example:</strong> If <strong>F'(x) = f(x)</strong>, then <strong>∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)</strong>.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Algebraic Symbols and Operations</h3>
  <p>
    Algebraic symbols and operations are used to express relationships between variables and constants in equations. These symbols help in solving algebraic equations and in manipulating expressions involving unknowns.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>+ (Addition):</strong> The addition symbol is used to combine two quantities. For example, 3 + 5 = 8.</li>
    <li><strong>− (Subtraction):</strong> The subtraction symbol is used to find the difference between two quantities. For example, 8 − 5 = 3.</li>
    <li><strong>× (Multiplication) or *:</strong> Multiplication is an operation where one quantity is scaled by another. For example, 3 × 4 = 12.</li>
    <li><strong>÷ (Division) or /:</strong> Division is used to split a quantity into smaller parts. For example, 12 ÷ 4 = 3.</li>
    <li><strong>= (Equality):</strong> The equality symbol shows that two expressions represent the same value. For example, x + 3 = 7.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Advanced Algebraic Symbols</h3>
  <p>
    In advanced algebra, more complex symbols are used to represent operations like exponentiation, roots, and logarithms. These symbols are crucial for working with exponential functions, logarithmic equations, and solving polynomial equations.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>x² (Exponentiation):</strong> The exponentiation symbol represents a number raised to a power. For example, 2² = 4.</li>
    <li><strong>√ (Square Root):</strong> The square root symbol is used to represent the inverse of squaring a number. For example, √16 = 4.</li>
    <li><strong>log (Logarithm):</strong> The logarithmic symbol is used to represent the inverse operation of exponentiation. For example, log<sub>10</sub> 100 = 2, because 10² = 100.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Conclusion: The Importance of Math Symbols</h3>
  <p>
    Mathematical symbols are the language through which mathematics is communicated. They allow complex ideas and operations to be conveyed efficiently, enabling mathematicians and scientists to work across different fields. Mastering these symbols is essential for anyone seeking to understand or work with mathematics at any level. They provide the tools needed to solve problems, prove theorems, and advance knowledge in the field.
  </p>
  <h3 className="text-lg font-medium mb-2">Geometrical Symbols</h3>
  <p>
    Geometrical symbols are used to represent shapes, angles, distances, and other properties in geometry. These symbols are fundamental for visualizing and solving problems related to space, size, and position.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Common Geometrical Symbols</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>∠</strong>: Angle – This symbol is used to denote an angle in geometry. It represents the space between two intersecting lines or planes.</li>
    <li><strong>⊥</strong>: Perpendicular – The perpendicular symbol represents two lines or segments that intersect at a right angle (90°).</li>
    <li><strong>∥</strong>: Parallel – This symbol indicates that two lines or segments are parallel, meaning they will never intersect.</li>
    <li><strong>Δ</strong>: Triangle – This symbol is used to represent a triangle. It is commonly used to describe the properties and relations of triangles.</li>
    <li><strong>⊂</strong>: Subset – In geometry, this symbol is used to represent a subset. It is commonly used when referring to the relationship between points, lines, or sets.</li>
    <li><strong>∪</strong>: Union – This symbol represents the union of sets, showing that elements from both sets are combined.</li>
    <li><strong>⊆</strong>: Subset or equal to – This symbol denotes that one set is a subset of another, or that the two sets are equal.</li>
    <li><strong>∞</strong>: Infinity – In geometric contexts, infinity can refer to a point at an infinite distance in a given direction, commonly used in geometry and perspective.</li>
    <li><strong>○</strong>: Circle – This symbol represents a circle, which is the set of all points equidistant from a given center point.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Understanding Triangles</h3>
  <p>
    Triangles are fundamental geometric shapes that have three sides and three angles. The study of triangles is a major part of geometry, and various symbols are used to represent properties and relationships between their sides and angles.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Right Triangle:</strong> A right triangle is a triangle in which one of the angles is exactly 90°.</li>
    <li><strong>Equilateral Triangle:</strong> An equilateral triangle has all three sides of equal length and all angles equal to 60°.</li>
    <li><strong>Isosceles Triangle:</strong> An isosceles triangle has two sides of equal length, and the angles opposite these sides are equal.</li>
    <li><strong>Scalene Triangle:</strong> A scalene triangle has all sides of different lengths, and all angles are of different measures.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">The Pythagorean Theorem</h3>
  <p>
    The Pythagorean theorem is one of the most famous results in geometry. It states that in a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Formula:</strong> a² + b² = c², where <strong>a</strong> and <strong>b</strong> are the lengths of the two legs of the triangle, and <strong>c</strong> is the length of the hypotenuse.</li>
    <li><strong>Example:</strong> In a right triangle with legs of lengths 3 and 4, the hypotenuse will have a length of 5 because 3² + 4² = 9 + 16 = 25, and √25 = 5.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Trigonometric Symbols</h3>
  <p>
    Trigonometry deals with the relationships between the angles and sides of triangles. Trigonometric functions are used extensively in mathematics, physics, engineering, and many other disciplines.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Key Trigonometric Functions</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>sin</strong>: Sine – The sine function represents the ratio of the opposite side to the hypotenuse in a right triangle.</li>
    <li><strong>cos</strong>: Cosine – The cosine function represents the ratio of the adjacent side to the hypotenuse in a right triangle.</li>
    <li><strong>tan</strong>: Tangent – The tangent function represents the ratio of the opposite side to the adjacent side in a right triangle.</li>
    <li><strong>sec</strong>: Secant – The secant function is the reciprocal of the cosine function.</li>
    <li><strong>csc</strong>: Cosecant – The cosecant function is the reciprocal of the sine function.</li>
    <li><strong>cot</strong>: Cotangent – The cotangent function is the reciprocal of the tangent function.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">The Unit Circle</h3>
  <p>
    The unit circle is a circle with a radius of 1, centered at the origin of the coordinate plane. It is used to define trigonometric functions for all angles, not just for right triangles.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Key angles:</strong> The unit circle helps visualize the sine, cosine, and tangent functions for angles like 0°, 30°, 45°, 60°, 90°, and so on.</li>
    <li><strong>Example:</strong> At 0° (or 0 radians), the coordinates on the unit circle are (1, 0), which means cos(0) = 1 and sin(0) = 0.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Exponentiation and Logarithms</h3>
  <p>
    Exponentiation and logarithms are powerful mathematical tools used to represent repeated multiplication and the inverse of exponentiation, respectively. These operations are used in algebra, calculus, and various other mathematical fields.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Exponentiation Notation</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>aⁿ</strong>: Exponentiation – This notation represents the base <strong>a</strong> raised to the power of <strong>n</strong>, which means multiplying <strong>a</strong> by itself <strong>n</strong> times.</li>
    <li><strong>Example:</strong> 2³ = 2 × 2 × 2 = 8.</li>
    <li><strong>Negative Exponents:</strong> An exponent with a negative value represents the reciprocal of the base raised to the absolute value of the exponent. For example, 2⁻³ = 1/2³ = 1/8.</li>
    <li><strong>Fractional Exponents:</strong> Fractional exponents represent roots. For example, 16^(1/2) = √16 = 4.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Logarithmic Notation</h3>
  <p>
    Logarithms are the inverse operations of exponentiation. A logarithm answers the question: "To what power must a given base be raised to produce a certain number?"
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>logₐ(b)</strong>: Logarithm – This notation represents the logarithm of <strong>b</strong> with base <strong>a</strong>, meaning the power to which <strong>a</strong> must be raised to get <strong>b</strong>.</li>
    <li><strong>Example:</strong> log₁₀(1000) = 3, because 10³ = 1000.</li>
    <li><strong>Natural Logarithms (ln):</strong> The natural logarithm is the logarithm with base <strong>e</strong>, where <strong>e</strong> is approximately 2.71828. It is commonly used in calculus and exponential growth models.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Conclusion: Mathematical Symbols in Practical Applications</h3>
  <p>
    Mathematical symbols are used not only in theoretical mathematics but also in real-world applications. Engineers, scientists, economists, and other professionals use these symbols to model, solve, and analyze complex problems. From simple arithmetic to advanced calculus, these symbols are the foundation of mathematical communication and problem-solving.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Example in Physics:</strong> In physics, the equation F = ma (Force = mass × acceleration) uses basic arithmetic symbols to describe the relationship between force, mass, and acceleration.</li>
    <li><strong>Example in Finance:</strong> The compound interest formula A = P(1 + r/n)^(nt) uses exponential and logarithmic notation to model the growth of an investment over time.</li>
  </ul>
        </Card>
      </div>
    </>
  );
};
