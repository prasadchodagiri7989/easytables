import React from "react";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GuidanceSection } from "@/components/GuidanceSection";

import { Link } from "react-router-dom"; // Or use next/link for Next.js

export const LogarithmGuide = () => {
  const rules = [
    {
      name: "Definition of Logarithm",
      rule: "A logarithm is the inverse operation to exponentiation. It tells you what power you need to raise a base number to obtain a certain value.",
      example: "log₁₀(100) = 2, because 10² = 100.",
    },
    {
      name: "Logarithmic Function Formula",
      rule: "The general formula for a logarithm is logₐ(x) = y, which means a^y = x.",
      example: "log₂(8) = 3, because 2³ = 8.",
    },
    {
      name: "Common Logarithm (Base 10)",
      rule: "The common logarithm is the logarithm with base 10. It is often written as log(x), which is equivalent to log₁₀(x).",
      example: "log(1000) = 3, because 10³ = 1000.",
    },
    {
      name: "Natural Logarithm (Base e)",
      rule: "The natural logarithm is the logarithm with base e, where e is approximately 2.71828. It is written as ln(x).",
      example: "ln(e) = 1, because e¹ = e.",
    },
    {
      name: "Properties of Logarithms",
      rule: "Logarithms have several important properties, such as the product rule, quotient rule, and power rule, which simplify logarithmic expressions.",
      example: "logₐ(xy) = logₐ(x) + logₐ(y).",
    },
    {
      name: "Change of Base Formula",
      rule: "The change of base formula allows you to compute logarithms in any base using logₐ(x) = log_b(x) / log_b(a).",
      example: "log₆(36) = log(36) / log(6).",
    },
  ];

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
            <BreadcrumbPage>Logarithms</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="logarithm-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="logarithm-guide-header text-center text-2xl font-bold mb-4">
          Logarithm Guide
        </h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg">{rule.name}</h3>
                <p className="text-md mt-1"><strong>Rule:</strong> {rule.rule}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <strong>Example:</strong> {rule.example}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <GuidanceSection title="Detailed Exploration of Logarithms">
          <p className="mb-4">
            Logarithms, by definition, answer the question: “To what exponent must the base be raised, in order to produce a given number?” This powerful idea has applications ranging from mathematics and physics to engineering, finance, and information theory.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Why Are Logarithms Useful?</h4>
          <p>
            Logarithms are especially useful for solving equations where the unknown appears as the exponent of some number. They convert multiplicative relationships into additive ones, which simplifies both theoretical analysis and practical calculations. This makes them incredibly helpful when dealing with exponential growth or decay, such as in compound interest, population dynamics, radioactive decay, and sound intensity.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Types of Logarithms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Common Logarithms (log):</strong> These are logarithms with base 10 and are widely used in scientific notation and engineering.
            </li>
            <li>
              <strong>Natural Logarithms (ln):</strong> These use the base e (approximately 2.71828) and are crucial in calculus, particularly in integration and differential equations.
            </li>
            <li>
              <strong>Binary Logarithms (log₂):</strong> These are used in computer science and digital systems to calculate complexities and data structures.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Important Properties of Logarithms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Product Rule:</strong> logₐ(xy) = logₐ(x) + logₐ(y)</li>
            <li><strong>Quotient Rule:</strong> logₐ(x/y) = logₐ(x) - logₐ(y)</li>
            <li><strong>Power Rule:</strong> logₐ(xⁿ) = n * logₐ(x)</li>
            <li><strong>Change of Base Rule:</strong> logₐ(x) = log_b(x) / log_b(a)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Applications of Logarithms in Real Life</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Engineering:</strong> Used in measuring sound intensity (decibels), signal processing, and pH levels in chemistry.
            </li>
            <li>
              <strong>Finance:</strong> Useful in calculating compound interest, logarithmic depreciation, and option pricing models.
            </li>
            <li>
              <strong>Computer Science:</strong> Binary logarithms determine algorithmic complexity (e.g., O(log n)), tree structures, and storage.
            </li>
            <li>
              <strong>Science:</strong> Logarithms appear in laws like the Richter scale for earthquakes and half-life calculations in radioactive decay.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Common Mistakes When Using Logarithms</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Forgetting the base: log(x) typically means base 10 unless otherwise specified.</li>
            <li>Incorrect use of properties: e.g., log(x + y) ≠ log(x) + log(y)</li>
            <li>Assuming log(x²) = (log x)² — which is incorrect. Use the power rule instead.</li>
            <li>Misinterpreting log(0) or log of a negative number — these are undefined in the real number system.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Example Problems</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Problem 1:</strong> Solve log₅(125) = ? <br />
              <strong>Solution:</strong> Since 5³ = 125, log₅(125) = 3.
            </li>
            <li>
              <strong>Problem 2:</strong> If log(x) = 2, what is x?<br />
              <strong>Solution:</strong> This implies 10² = x → x = 100.
            </li>
            <li>
              <strong>Problem 3:</strong> Simplify log₂(32) - log₂(4)<br />
              <strong>Solution:</strong> log₂(32/4) = log₂(8) = 3
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Logarithmic Scales in the Real World</h4>
          <p>
            Many real-world phenomena span a wide range of values, making linear representation impractical. Logarithmic scales help compress these large ranges. Examples include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Richter Scale:</strong> Measures earthquake magnitude, where each step represents a tenfold increase.</li>
            <li><strong>Decibel Scale:</strong> Measures sound intensity logarithmically.</li>
            <li><strong>pH Scale:</strong> Measures hydrogen ion concentration logarithmically in chemistry.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Exponential vs. Logarithmic Growth</h4>
          <p>
            Exponential growth increases rapidly, doubling at each step, such as in viral spread or compound interest. Logarithmic growth, on the other hand, increases slowly and is often used to measure time needed for exponential events to reach certain thresholds.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Graph of Logarithmic Functions</h4>
          <p>
            The graph of y = logₐ(x) passes through (1,0), approaches negative infinity as x approaches 0 from the right, and increases slowly. The function is undefined for x ≤ 0. Asymptotic behavior and domain limitations are key in understanding its behavior.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Inverse Relationship with Exponentials</h4>
          <p>
            Every logarithmic function is the inverse of an exponential function. If y = a^x, then x = logₐ(y). This inversion helps in solving equations where the unknown is an exponent and explains the reciprocal nature of their graphs (symmetric about y = x).
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Conclusion</h4>
          <p>
            Logarithms are a core component of modern mathematics and science. Whether you're simplifying equations, analyzing algorithms, or studying natural phenomena, understanding logarithms unlocks a deeper appreciation of the underlying principles. Mastering them empowers you to handle exponential relationships with clarity and confidence.
          </p>
          <h4 className="text-lg font-semibold mt-4 mb-2">Historical Development of Logarithms</h4>
<p className="mb-4">
  The concept of logarithms was introduced in the early 17th century by John Napier, a Scottish mathematician. His invention was primarily aimed at simplifying complex arithmetic operations such as multiplication and division, which were particularly tedious at the time. Napier's logarithms were not exactly like the ones we use today, but they laid the groundwork for what would later become a standard mathematical tool. Henry Briggs later collaborated with Napier and helped refine the logarithmic tables using base 10, making them more widely usable. This development significantly improved computational accuracy and speed in navigation, astronomy, and engineering.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">The Role of Logarithmic Tables Before Calculators</h4>
<p className="mb-4">
  Before the advent of calculators and digital computers, logarithmic tables were crucial tools for performing multiplication, division, exponentiation, and root extraction. Engineers, scientists, and navigators relied heavily on these tables. By converting multiplicative problems into additive ones via logarithms, they could solve complex equations using simple addition and subtraction. The slide rule, a mechanical analog computer, also operated based on the principles of logarithms and remained in use for centuries until electronic calculators became prevalent in the late 20th century.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Understanding the Domain and Range of Logarithmic Functions</h4>
<p className="mb-4">
  One critical aspect of logarithmic functions is their domain and range. For a function f(x) = logₐ(x), the domain is (0, ∞), meaning that you can only take the logarithm of positive real numbers. This is because no real exponent will yield a negative number or zero when raised from a positive base. The range, however, is all real numbers (-∞, ∞), as logarithmic values can extend infinitely in both directions depending on the input value. For instance, as x approaches 0 from the right, logₐ(x) approaches negative infinity.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Using Logarithms to Solve Exponential Equations</h4>
<p className="mb-4">
  One of the primary reasons logarithms are taught in algebra is because they are indispensable for solving exponential equations. Suppose you encounter an equation like 2^x = 16. You could recognize that 2⁴ = 16, but what if the equation were 2^x = 20? In this case, logarithms come to the rescue. Taking the logarithm on both sides allows us to extract the exponent: log₂(2^x) = log₂(20), which simplifies to x = log₂(20). This can further be calculated using the change of base formula: x = log(20) / log(2).
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Scientific Notation and Logarithmic Functions</h4>
<p className="mb-4">
  Logarithmic functions work exceptionally well with scientific notation, which expresses numbers as a product of a coefficient and a power of ten (e.g., 3.2 × 10⁵). Since common logarithms have a base of 10, calculating the log of a number in scientific notation becomes easier. For example, log(3.2 × 10⁵) = log(3.2) + log(10⁵) = log(3.2) + 5. This makes logarithmic calculations particularly useful in fields like chemistry and physics, where scientific notation is frequently used.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">The Natural Logarithm and the Constant e</h4>
<p className="mb-4">
  The natural logarithm, denoted as ln(x), is a logarithm with base e. The constant e is approximately 2.71828 and has numerous mathematical properties that make it extremely useful in calculus and higher mathematics. The function ln(x) is the inverse of the exponential function e^x. Natural logarithms frequently appear in problems involving growth and decay, such as population dynamics, radioactive decay, and Newton's Law of Cooling. Furthermore, they are essential in solving differential equations and are foundational in mathematical modeling.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Logarithmic Differentiation</h4>
<p className="mb-4">
  In calculus, logarithmic differentiation is a powerful technique used to differentiate complex functions involving products, quotients, or variable exponents. By taking the natural logarithm of both sides of an equation, one can simplify the expression before applying differentiation. For example, consider the function y = x^x. Taking ln on both sides gives ln(y) = x * ln(x), and then differentiating both sides using implicit differentiation simplifies the process. This method is widely used in calculus to tackle challenging derivatives.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Logarithmic Integration</h4>
<p className="mb-4">
  Logarithms are also central to integration. The integral of 1/x with respect to x is ln|x| + C, where C is the constant of integration. This relationship is foundational and appears in many real-world problems involving rates of change. Additionally, logarithmic substitution is used when solving integrals involving rational functions, helping to simplify the integration process by transforming the variables.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Growth Models and Logarithmic Interpretation</h4>
<p className="mb-4">
  Many natural systems exhibit exponential growth or decay. For instance, bacterial populations can double every hour under ideal conditions, representing exponential growth. On the flip side, radioactive materials decay over time in an exponential fashion. Logarithms allow us to reverse-engineer these processes by providing a way to solve for time, rates, or original quantities. For example, the formula for radioactive decay, N(t) = N₀e^(-λt), can be solved for t using logarithms.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Understanding Logarithmic Regression</h4>
<p className="mb-4">
  Logarithmic regression is a type of curve fitting used in statistics to model relationships where the rate of change decreases over time. This is common in economic models, biological systems, and learning curves. For instance, the performance improvement of a new employee over time may follow a logarithmic trend, where gains are rapid initially and then taper off. Software like Excel or statistical packages can fit logarithmic models to data to help in forecasting and trend analysis.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Logarithms in Information Theory</h4>
<p className="mb-4">
  In information theory, logarithms are used to calculate entropy and the amount of information in a message. The concept of "bit" — the basic unit of information — is defined using the binary logarithm. For example, if you have 8 possible messages, it would take log₂(8) = 3 bits to encode any one of them uniquely. Shannon’s Entropy formula uses logarithms to measure the uncertainty or disorder in a system, making it a cornerstone of data compression and cryptography.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Limitations of Logarithmic Functions</h4>
<p className="mb-4">
  Although powerful, logarithmic functions have limitations. For instance, they are undefined for zero and negative numbers within the realm of real numbers. This means that any model or equation using logarithms must ensure input values remain positive. Additionally, logarithmic models are not suitable for phenomena that don’t exhibit diminishing returns or slowing growth. Choosing between linear, exponential, and logarithmic models is essential depending on the nature of the data.
</p>

<h4 className="text-lg font-semibold mt-4 mb-2">Conclusion and Further Learning</h4>
<p className="mb-4">
  Logarithms are more than just a mathematical abstraction — they are practical tools that simplify complex problems across disciplines. From historical use in manual calculations to modern applications in computing and science, logarithms offer a gateway to understanding and managing exponential relationships. Students and professionals alike benefit from mastering their rules, applications, and behaviors. For deeper study, one may explore logarithmic identities, properties of e, advanced integration techniques, and real-world modeling using logarithmic functions in software like MATLAB, Python, or R.
</p>
<h4 className="text-lg font-semibold mt-4 mb-2">Historical Development of Logarithms</h4>
  <p>
    The concept of logarithms was first introduced by John Napier in the early 17th century as a tool to simplify complex calculations. Before the advent of calculators and computers, logarithms transformed multiplication and division into simple addition and subtraction. Napier’s work laid the foundation for modern computational mathematics and was further refined by Henry Briggs, who introduced base-10 logarithms (common logarithms). The invention of logarithmic tables became revolutionary for astronomers, engineers, and navigators.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Logarithmic Identities and Tricks</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li><strong>logₐ(a) = 1</strong> — because a¹ = a</li>
    <li><strong>logₐ(1) = 0</strong> — because any number raised to the power of 0 is 1</li>
    <li><strong>logₐ(x) + logₐ(y) = logₐ(xy)</strong> — simplifies multiplication</li>
    <li><strong>logₐ(x) - logₐ(y) = logₐ(x/y)</strong> — simplifies division</li>
    <li><strong>n * logₐ(x) = logₐ(xⁿ)</strong> — useful for handling exponents</li>
  </ul>

  <h4 className="text-lg font-semibold mt-4 mb-2">Changing the Base of a Logarithm</h4>
  <p>
    Sometimes, you may encounter a logarithm with a base that your calculator cannot handle. To work around this, use the change of base formula:
    </p>
  <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4">
    logₐ(b) = log_c(b) / log_c(a)
  </p>
  <p>
    This allows you to compute logarithms in any base using common (log) or natural (ln) logs supported by most calculators.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Solving Equations Using Logarithms</h4>
  <p>
    Many equations contain exponential expressions. By applying logarithms to both sides, we can isolate variables found in exponents. For instance:
  </p>
  <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4">
    Solve: 2^x = 16 → log₂(2^x) = log₂(16) → x = log₂(16) = 4
  </p>
  <p>
    Similarly, for equations like e^x = 20, take the natural log (ln) of both sides to solve:
  </p>
  <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4">
    ln(e^x) = ln(20) → x = ln(20) ≈ 2.9957
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Practical Tips for Using Logarithms</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Always remember the base you're working with. If none is specified, base 10 is assumed.</li>
    <li>Double-check for negative or zero values inside logarithms—log(x) is undefined for x ≤ 0.</li>
    <li>Use logarithmic identities to simplify complex algebraic expressions.</li>
    <li>For approximation, log(2) ≈ 0.3010 and log(3) ≈ 0.4771 are handy to memorize.</li>
  </ul>

  <h4 className="text-lg font-semibold mt-4 mb-2">Logarithmic Differentiation</h4>
  <p>
    In calculus, logarithmic differentiation is an effective technique to differentiate complicated functions, especially those involving products, quotients, or powers. For example:
  </p>
  <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4">
    y = x^x → ln(y) = ln(x^x) = x*ln(x) → Use implicit differentiation.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Natural Logarithms in Calculus</h4>
  <p>
    Natural logarithms (base e) are central in calculus. The derivative of ln(x) is 1/x, and it plays a key role in solving integrals involving rational functions. For example:
  </p>
  <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4">
    ∫(1/x) dx = ln|x| + C
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Understanding Logarithmic Graphs</h4>
  <p>
    Logarithmic graphs help visualize slow-growing functions. The graph of y = logₐ(x) increases gradually and has a vertical asymptote at x = 0. The base determines how steep the curve is:
  </p>
  <ul className="list-disc pl-5 space-y-1">
    <li>If a &gt; 1, the function increases.</li>
    <li>If 0 &lt; a &lt; 1, the function decreases.</li>
  </ul>
  <p>
    The domain is (0, ∞) and the range is (-∞, ∞).
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Real-World Case Study: pH in Chemistry</h4>
  <p>
    The pH of a solution is defined as the negative logarithm of the hydrogen ion concentration:
  </p>
  <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4">
    pH = -log₁₀[H⁺]
  </p>
  <p>
    This scale is logarithmic, meaning a solution with a pH of 3 is ten times more acidic than one with a pH of 4. Such compression helps chemists quickly assess acidity or basicity in substances.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Real-World Case Study: The Richter Scale</h4>
  <p>
    Earthquake magnitudes are measured logarithmically. A quake of magnitude 6 is ten times more intense than one of magnitude 5:
  </p>
  <p>
    M = log₁₀(I/I₀), where I is the measured intensity, and I₀ is a reference.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Logarithms and Algorithm Complexity</h4>
  <p>
    In computer science, logarithmic time complexity is considered efficient. Binary search, for example, has a time complexity of O(log n). This means that with each step, the problem size is halved, leading to fast and scalable performance. Data structures like binary trees and heaps also leverage logarithmic properties for efficiency.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Using Logarithms in Financial Modeling</h4>
  <p>
    Logarithms help in understanding exponential growth in compound interest. The formula:
  </p>
  <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4">
    A = P * e^(rt)
  </p>
  <p>
    can be inverted using logarithms to solve for time or rate. This is vital in predicting investment growth, calculating loan durations, or understanding inflation models.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Inverse Function Interpretation</h4>
  <p>
    Since logarithms and exponentials are inverse functions, their graphs are mirror images along the line y = x. This inverse relationship makes logarithms a powerful tool for "undoing" exponentials and is foundational in algebra and calculus.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-2">Conclusion</h4>
  <p>
    Logarithms form a bridge between arithmetic and algebra, linearity and exponentiality, simplicity and power. Their presence in everything from engineering equations to social media growth predictions makes them an indispensable part of the modern mathematical toolbox. By understanding both the theory and application of logarithms, learners can unlock new problem-solving strategies and analytical approaches.
  </p>

        </GuidanceSection>

      </div>
    </>
  );
};
