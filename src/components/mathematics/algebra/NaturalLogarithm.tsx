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
import { Link } from "react-router-dom";
import { GuidanceSection } from "@/components/GuidanceSection";

export const NaturalLogarithm = () => {
  const lnRules = [
    {
      name: "Product Rule",
      rule: "ln(x ∙ y) = ln(x) + ln(y)",
      example: "ln(3 ∙ 7) = ln(3) + ln(7)",
    },
    {
      name: "Quotient Rule",
      rule: "ln(x / y) = ln(x) - ln(y)",
      example: "ln(3 / 7) = ln(3) - ln(7)",
    },
    {
      name: "Power Rule",
      rule: "ln(x^y) = y ∙ ln(x)",
      example: "ln(2^8) = 8 ∙ ln(2)",
    },
    {
      name: "Derivative",
      rule: "f(x) = ln(x) ⇒ f'(x) = 1 / x",
      example: "If f(x) = ln(x), then f'(x) = 1 / x",
    },
    {
      name: "Integral",
      rule: "∫ ln(x)dx = x ∙ (ln(x) - 1) + C",
      example: "Integral of ln(x) is x(ln(x) - 1) + C",
    },
    {
      name: "ln(1)",
      rule: "ln(1) = 0",
      example: "ln(1) is always 0",
    },
    {
      name: "ln(0)",
      rule: "ln(0) is undefined",
      example: "As x approaches 0, ln(x) → -∞",
    },
    {
      name: "ln(∞)",
      rule: "lim x→∞ ln(x) = ∞",
      example: "ln(x) increases without bound as x increases",
    },
    {
      name: "Euler's Identity",
      rule: "ln(-1) = iπ",
      example: "Complex logarithm result",
    },
  ];

  const lnTable = [
    { x: 0.0001, ln: -9.210340 },
    { x: 0.001, ln: -6.907755 },
    { x: 0.01, ln: -4.605170 },
    { x: 0.1, ln: -2.302585 },
    { x: 1, ln: 0 },
    { x: 2, ln: 0.693147 },
    { x: 2.7183, ln: 1 },
    { x: 10, ln: 2.302585 },
    { x: 100, ln: 4.605170 },
    { x: 1000, ln: 6.907755 },
    { x: 10000, ln: 9.210340 },
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
            <BreadcrumbPage>Natural Logarithm</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-white/40 dark:bg-transparent">
        <h2 className="text-center text-2xl font-bold mb-4">Natural Logarithm - ln(x)</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {lnRules.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-md mt-1"><strong>Rule:</strong> {item.rule}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <strong>Example:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <GuidanceSection title="Understanding Natural Logarithm (ln)">
          <p>
            The natural logarithm is the logarithm to the base <code>e</code>, where <code>e ≈ 2.71828183</code>. It's the inverse of the exponential function.
          </p>

          <h4 className="font-medium mt-4 mb-2">Key Identity</h4>
          <p>
            If <code>e^y = x</code>, then <code>ln(x) = y</code>.
          </p>

          <h4 className="font-medium mt-4 mb-2">ln(x) Table (Sample Values)</h4>
          <table className="table-auto border mt-2">
            <thead>
              <tr>
                <th className="border px-2">x</th>
                <th className="border px-2">ln(x)</th>
              </tr>
            </thead>
            <tbody>
              {lnTable.map((entry, index) => (
                <tr key={index}>
                  <td className="border px-2 text-center">{entry.x}</td>
                  <td className="border px-2 text-center">{entry.ln}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
    The natural logarithm, denoted as <code>ln(x)</code>, is a logarithm to the base <code>e</code>, where <code>e ≈ 2.71828183</code>. It is one of the most important functions in mathematics, particularly in calculus and higher-level mathematics. The natural logarithm function is the inverse of the exponential function <code>e^x</code>, meaning that if <code>y = ln(x)</code>, then <code>e^y = x</code>.
  </p>

  <h4 className="font-medium mt-4 mb-2">What Is Euler’s Number (e)?</h4>
  <p>
    Euler’s number <code>e</code> is an irrational constant that arises naturally in many areas of mathematics, especially in problems involving growth and decay. It’s defined as the limit:
  </p>
  <p>
    <code>e = lim (n→∞) (1 + 1/n)^n</code>
  </p>
  <p>
    It plays a foundational role in natural logarithms, as <code>ln(x)</code> is the logarithm base <code>e</code>.
  </p>

  <h4 className="font-medium mt-4 mb-2">Key Identity</h4>
  <p>
    The defining identity for the natural logarithm is:
  </p>
  <p>
    <code>ln(x) = y</code> ⇔ <code>e^y = x</code>
  </p>

  <h4 className="font-medium mt-4 mb-2">Domain and Range</h4>
  <ul className="list-disc ml-6">
    <li><strong>Domain:</strong> x &gt; 0</li>
    <li><strong>Range:</strong> (-∞, ∞)</li>
  </ul>
  <p>
    The natural logarithm is only defined for positive real numbers. This means you cannot take the natural logarithm of zero or a negative number in the set of real numbers.
  </p>

  <h4 className="font-medium mt-4 mb-2">Important Properties</h4>
  <ul className="list-disc ml-6">
    <li><code>ln(1) = 0</code></li>
    <li><code>ln(e) = 1</code></li>
    <li><code>ln(xy) = ln(x) + ln(y)</code></li>
    <li><code>ln(x/y) = ln(x) - ln(y)</code></li>
    <li><code>ln(xⁿ) = n · ln(x)</code></li>
    <li><code>e^(ln(x)) = x</code> for x &gt; 0</li>
    <li><code>ln(e^x) = x</code></li>
  </ul>
  <p>
    These properties are frequently used to simplify logarithmic and exponential expressions.
  </p>

  <h4 className="font-medium mt-4 mb-2">Behavior and Graph of ln(x)</h4>
  <p>
    The graph of <code>ln(x)</code> is a smooth, continuous curve that increases slowly as x increases. As x approaches 0 from the right, <code>ln(x)</code> approaches negative infinity. There is a vertical asymptote at x = 0.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>ln(x) &lt; 0</strong> when 0 &lt; x &lt; 1</li>
    <li><strong>ln(x) = 0</strong> when x = 1</li>
    <li><strong>ln(x) &gt; 0</strong> when x &gt; 1</li>
  </ul>

  <h4 className="font-medium mt-4 mb-2">ln(x) Table (Sample Values)</h4>
  <table className="table-auto border mt-2 mb-4">
    <thead>
      <tr>
        <th className="border px-2">x</th>
        <th className="border px-2">ln(x)</th>
      </tr>
    </thead>
    <tbody>
      {lnTable.map((entry, index) => (
        <tr key={index}>
          <td className="border px-2 text-center">{entry.x}</td>
          <td className="border px-2 text-center">{entry.ln}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h4 className="font-medium mt-4 mb-2">Applications of Natural Logarithms</h4>
  <ul className="list-disc ml-6">
    <li><strong>Compound Interest:</strong> Used in continuous compounding calculations.</li>
    <li><strong>Radioactive Decay:</strong> ln appears when solving differential equations modeling decay.</li>
    <li><strong>Population Growth:</strong> Exponential growth models use ln to solve for time.</li>
    <li><strong>Physics and Chemistry:</strong> ln appears in formulas like the Nernst equation.</li>
    <li><strong>Entropy in Information Theory:</strong> Uses ln to measure uncertainty and information gain.</li>
  </ul>

  <h4 className="font-medium mt-4 mb-2">Solving Equations Involving ln(x)</h4>
  <p>
    To solve equations involving <code>ln(x)</code>, the main strategy is to exponentiate both sides using base <code>e</code>:
  </p>
  <p><code>ln(x) = a</code> ⇒ <code>x = e^a</code></p>

  <h4 className="font-medium mt-4 mb-2">Common Mistakes to Avoid</h4>
  <ul className="list-disc ml-6">
    <li><strong>Using ln on negative numbers:</strong> ln(x) is undefined for x ≤ 0.</li>
    <li><strong>Misapplying the product rule:</strong> ln(x + y) ≠ ln(x) + ln(y).</li>
    <li><strong>Forgetting logarithm rules:</strong> ln(x/y) is not ln(x) / ln(y).</li>
  </ul>

  <h4 className="font-medium mt-4 mb-2">Derivative and Integral of ln(x)</h4>
  <p>
    <strong>Derivative:</strong> <code>d/dx ln(x) = 1/x</code> for x &gt; 0
  </p>
  <p>
    <strong>Integral:</strong> <code>∫ln(x) dx = x ln(x) - x + C</code>
  </p>

  <h4 className="font-medium mt-4 mb-2">Change of Base Formula</h4>
  <p>
    Although <code>ln(x)</code> uses base <code>e</code>, it can be converted to other logarithmic bases using:
  </p>
  <p>
    <code>log<sub>b</sub>(x) = ln(x) / ln(b)</code>
  </p>

  <h4 className="font-medium mt-4 mb-2">Scientific and Engineering Contexts</h4>
  <p>
    In science and engineering, natural logarithms are essential in modeling real-world phenomena:
  </p>
  <ul className="list-disc ml-6">
    <li>In <strong>thermodynamics</strong>, ln is used in calculating entropy and Gibbs free energy.</li>
    <li>In <strong>biology</strong>, natural logarithms model bacterial growth and drug decay.</li>
    <li>In <strong>economics</strong>, ln is used to determine elasticities in demand models.</li>
    <li>In <strong>finance</strong>, ln is key in Black-Scholes models and logarithmic returns.</li>
  </ul>

  <h4 className="font-medium mt-4 mb-2">Useful Tips</h4>
  <ul className="list-disc ml-6">
    <li>Always check the domain before applying ln to a value.</li>
    <li>Use ln when dealing with continuous change or growth.</li>
    <li>Remember that the graph of ln(x) increases without bound but very slowly.</li>
  </ul>

  <h4 className="font-medium mt-4 mb-2">Conclusion</h4>
  <p>
    The natural logarithm <code>ln(x)</code> is a vital mathematical function that connects the exponential world with linear thinking. Its properties, applications, and identities make it a core part of mathematics, physics, and real-world modeling. Mastering ln allows students and professionals alike to handle problems involving continuous growth, decay, and many other dynamic systems.
  </p>
        </GuidanceSection>
      </div>
    </>
  );
};
