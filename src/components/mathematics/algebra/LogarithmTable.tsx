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
import { Link } from "react-router-dom"; // Or use next/link for Next.js

export const LogarithmTable = () => {
  const base = 10; // You can change this base if needed (for example, use e for natural logarithms)
  const values = Array.from({ length: 10 }, (_, i) => i + 1); // Values from 1 to 10
  
  // Logarithm function to calculate base-10 logarithm
  const logBase10 = (num: number) => Math.log10(num);

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
            <BreadcrumbPage>Logarithm Table</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="logarithm-table-container bg-white/40 dark:bg-transparent">
        <h2 className="logarithm-table-header text-center text-2xl font-bold mb-4">
          Logarithm Table (Base {base})
        </h2>

        <Card className="p-6 glass-card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-center">Number</th>
                  <th className="px-6 py-3 text-center">Log₁₀(Number)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {values.map((value) => (
                  <tr key={value}>
                    <td className="px-6 py-4 text-center">{value}</td>
                    <td className="px-6 py-4 text-center">
                      {logBase10(value).toFixed(4)} {/* Rounding to 4 decimal places */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-2">Understanding Logarithm Tables</h3>
  <p className="mb-2">
    A logarithm table is a valuable mathematical tool used to find the logarithm (base 10) of numbers quickly, especially before calculators were common. The logarithm of a number is the exponent to which the base must be raised to get that number. For base 10, <code>log₁₀(1000) = 3</code> because <code>10³ = 1000</code>.
  </p>
  <p className="mb-2">
    In this table, we list values from 1 to 10 and compute their logarithms using base 10. These values are rounded to four decimal places, which is typical in scientific or engineering applications.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Use Cases</h4>
  <ul className="list-disc pl-6 space-y-1">
    <li>Used in scientific calculations to simplify multiplication and division into addition and subtraction.</li>
    <li>Helpful in understanding exponential growth (e.g., population, radioactive decay).</li>
    <li>Widely used in data science, electronics (decibels), and signal processing.</li>
  </ul>

  <h4 className="text-lg font-semibold mt-4 mb-1">Example Applications</h4>
  <p className="mb-2">
    Suppose you want to multiply two large numbers: 243 × 52. You can use the product rule of logarithms:
    <br />
    <code>log₁₀(243 × 52) = log₁₀(243) + log₁₀(52)</code>
    <br />
    Use the log table to find approximations, then add them and take the antilog.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Related Concepts</h4>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Antilogarithm</strong>: The inverse of a logarithm, useful for reversing the log process.</li>
    <li><strong>Natural Logarithm</strong>: Logarithm with base <code>e</code>, often written as <code>ln(x)</code>.</li>
    <li><strong>Scientific Notation</strong>: Works closely with logarithms to express very large or very small numbers.</li>
  </ul>
  <h3 className="text-xl font-semibold mt-6 mb-2">Historical Significance of Logarithm Tables</h3>
  <p className="mb-2">
    Before the advent of modern calculators and digital computers, logarithm tables were one of the most powerful tools available to scientists, engineers, and mathematicians. Introduced in the early 17th century by John Napier and later refined by Henry Briggs, these tables dramatically simplified complex arithmetic operations. By transforming multiplication and division into addition and subtraction through logarithmic properties, calculations became faster and less prone to human error.
  </p>
  <p className="mb-2">
    For example, rather than multiplying two large numbers directly, one would consult a logarithm table to find the logarithms of each number, add the results, and then use an antilog table to find the final product. This process saved enormous time and effort in fields like astronomy, navigation, and surveying.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Why Base 10?</h4>
  <p className="mb-2">
    The base-10 logarithm, or common logarithm, is widely used because our number system is decimal-based. This makes base-10 logs particularly intuitive for humans to interpret and apply. When you see <code>log₁₀(100) = 2</code>, it aligns perfectly with the decimal notion that 10 raised to the power of 2 is 100.
  </p>
  <p className="mb-2">
    While other logarithmic bases like natural logarithms (<code>ln</code>, base <code>e</code>) or binary logs (base 2) are essential in mathematics and computer science, base 10 remains dominant in many real-world applications like decibel measurement, pH calculations in chemistry, and orders of magnitude in scientific notation.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Reading a Logarithm Table</h4>
  <p className="mb-2">
    A typical base-10 logarithm table lists numbers and their corresponding logarithmic values up to several decimal places. Here’s how to use one:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Find the row for the first two significant digits of your number.</li>
    <li>Find the column for the third digit.</li>
    <li>Use interpolation for digits beyond that if needed.</li>
    <li>Combine the result with the characteristic (integer part of the log) depending on the magnitude of the number.</li>
  </ul>
  <p className="mb-2">
    For example, to find <code>log₁₀(54.3)</code>, you might approximate <code>log₁₀(54) ≈ 1.7324</code> and interpolate for the .3 to get a more precise value. Tables were often accompanied by instructions and interpolation methods for increased accuracy.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Understanding the Characteristic and Mantissa</h4>
  <p className="mb-2">
    Logarithms of numbers greater than 1 have both an integer and a decimal part. The integer part is called the <strong>characteristic</strong>, and the decimal part is the <strong>mantissa</strong>.
  </p>
  <p className="mb-2">
    For example, <code>log₁₀(500) ≈ 2.69897</code>. Here, 2 is the characteristic (because 10² = 100, and 500 is between 100 and 1000), and 0.69897 is the mantissa.
  </p>
  <p className="mb-2">
    The mantissa is often what’s found in a standard logarithm table, and users would combine it with the correct characteristic depending on the magnitude of the original number.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Extended Applications in Modern Science</h4>
  <p className="mb-2">
    Despite being replaced by digital tools, understanding logarithms and how logarithm tables work remains important. They appear in formulas across scientific disciplines:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>pH in Chemistry</strong>: pH = -log₁₀[H⁺], which measures the acidity of a solution.</li>
    <li><strong>Sound Intensity</strong>: Decibels use logarithmic scales to express sound pressure ratios.</li>
    <li><strong>Earthquakes</strong>: The Richter scale is logarithmic, where each step up represents 10× more amplitude.</li>
    <li><strong>Finance</strong>: Logarithmic returns are used in quantitative finance for modeling price movements.</li>
    <li><strong>Data Compression & Signal Processing</strong>: Logarithms help compress wide-ranging values into manageable scales.</li>
  </ul>

  <h4 className="text-lg font-semibold mt-4 mb-1">Computing Logs Without a Calculator</h4>
  <p className="mb-2">
    If you ever need to estimate logs manually, you can use simple rules and memorized values:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>log₁₀(10) = 1</code></li>
    <li><code>log₁₀(100) = 2</code></li>
    <li><code>log₁₀(2) ≈ 0.3010</code></li>
    <li><code>log₁₀(3) ≈ 0.4771</code></li>
    <li><code>log₁₀(5) ≈ 0.6990</code></li>
    <li><code>log₁₀(7) ≈ 0.8451</code></li>
  </ul>
  <p className="mb-2">
    Using these, you can approximate logs of larger numbers. For example:
    <br />
    <code>log₁₀(30) = log₁₀(3 × 10) = log₁₀(3) + log₁₀(10) ≈ 0.4771 + 1 = 1.4771</code>
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Digital Transition: From Tables to Calculators</h4>
  <p className="mb-2">
    With the advent of electronic calculators and computers, logarithm tables fell out of everyday use. However, they remain a crucial teaching tool because they promote conceptual understanding of logarithmic behavior and help bridge arithmetic to algebraic thinking.
  </p>
  <p className="mb-2">
    Students who understand how to use and interpret log tables develop a stronger foundation in logarithmic reasoning, which is useful in algebra, calculus, and beyond.
  </p>

  <h4 className="text-lg font-semibold mt-4 mb-1">Conclusion: Why Learn Log Tables Today?</h4>
  <p className="mb-2">
    Even though we rarely use printed log tables today, understanding their structure and function remains valuable. They teach you:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>How logarithmic relationships work.</li>
    <li>The power of mathematical transformation in simplifying computation.</li>
    <li>The historical context of scientific problem-solving.</li>
  </ul>
  <p className="mb-2">
    In an age dominated by automation, learning log tables can seem old-fashioned. But much like mental math, it's a skill that deepens number sense and mathematical confidence.
  </p>

  <p className="mt-4">
    For continued exploration, consider learning about logarithmic scales in graphing, exploring natural logs and Euler’s number <code>e</code>, or experimenting with logarithms in programming and data visualization.
  </p>

        </Card>
      </div>
    </>
  );
};
