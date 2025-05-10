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

export const NumeralSystemsGuide = () => {
  const systems = [
    {
      name: "Binary (Base-2)",
      description:
        "Binary uses only two digits: 0 and 1. Each digit is a power of 2.",
      example: "1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀",
    },
    {
      name: "Octal (Base-8)",
      description:
        "Octal uses digits from 0 to 7. Each digit is a power of 8.",
      example: "17₈ = 1×8¹ + 7×8⁰ = 8 + 7 = 15₁₀",
    },
    {
      name: "Decimal (Base-10)",
      description:
        "Decimal is the standard numeral system using digits from 0 to 9. Each digit is a power of 10.",
      example: "345 = 3×10² + 4×10¹ + 5×10⁰ = 300 + 40 + 5",
    },
    {
      name: "Hexadecimal (Base-16)",
      description:
        "Hexadecimal uses digits 0–9 and letters A–F (where A = 10 to F = 15). Each digit is a power of 16.",
      example: "1F₁₆ = 1×16¹ + 15×16⁰ = 16 + 15 = 31₁₀",
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
                <Link to="/mathematics/numbers">Numbers</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Numeral System Table</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

      <div className="numeral-systems-container bg-white/40 dark:bg-transparent">
        <h2 className="numeral-systems-header text-center text-2xl font-bold mb-4">
          Numeral Systems Guide
        </h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            {systems.map((system, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg">{system.name}</h3>
                <p className="text-md mt-1">{system.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <strong>Example:</strong> {system.example}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <GuidanceSection title="Understanding Numeral Systems">
          <p>
            Numeral systems are methods for expressing numbers using consistent
            symbols and bases. Different systems are used in computing,
            mathematics, and digital electronics.
          </p>

          <h4 className="font-medium mt-3 mb-1">Quick Tips</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Binary is used in digital circuits and computer logic.</li>
            <li>Octal and hexadecimal simplify binary representation.</li>
            <li>Decimal is used in everyday arithmetic.</li>
            <li>
              You can convert between systems by breaking down numbers using
              their base powers.
            </li>
          </ul>

          <div className="extra-content mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Exploring Number Tools and Their Applications</h2>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">1. Multiplication Table</h3>
              <p>
                The multiplication table is one of the fundamental tools used in mathematics to help students learn and practice multiplication. It consists of a grid where each cell represents the product of the numbers from the top row and the leftmost column.
              </p>
              <p>
                The multiplication table is not just a simple learning tool but also provides insights into the properties of numbers. For example, it can help you recognize patterns like the commutative property (a × b = b × a) and the distributive property of multiplication over addition.
              </p>
              <p>
                Learning multiplication tables is an essential skill that forms the foundation for more complex mathematical operations like division, fractions, and algebra.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">2. Addition Table</h3>
              <p>
                The addition table, similar to the multiplication table, helps in visualizing the sums of two numbers. It allows users to quickly find the result of adding any two integers within a defined range. This tool is particularly useful for children and students learning basic arithmetic operations.
              </p>
              <p>
                Addition tables can also aid in solving problems involving mental arithmetic and serve as a foundation for more advanced mathematical concepts such as algebraic expressions and polynomials.
              </p>
              <p>
                The addition table is used not just in basic math education but also in higher-level topics where summing multiple variables is required.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">3. Exponent Rules</h3>
              <p>
                Exponentiation is a key concept in mathematics, and understanding the rules for working with exponents is essential for solving algebraic problems. Exponent rules govern the behavior of powers and exponents in mathematical expressions. 
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Product of powers rule:</strong> a^m × a^n = a^(m+n).</li>
                <li><strong>Quotient of powers rule:</strong> a^m ÷ a^n = a^(m-n).</li>
                <li><strong>Power of a power rule:</strong> (a^m)^n = a^(m×n).</li>
                <li><strong>Zero exponent rule:</strong> a^0 = 1 (for a ≠ 0).</li>
              </ul>
              <p>
                Exponent rules are used extensively in areas such as polynomial expansion, scientific notation, and in functions involving exponential growth or decay.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">4. Numeral Systems</h3>
              <p>
                Numeral systems are the written symbols used to represent numbers. The most common numeral systems include the decimal system (base 10), binary system (base 2), hexadecimal system (base 16), and more. Each system uses a different set of symbols and rules for representing values.
              </p>
              <p>
                <strong>Binary:</strong> The binary numeral system is the foundation of digital computing. It uses only two digits, 0 and 1, to represent numbers. Each bit (binary digit) represents an increasing power of 2.
              </p>
              <p>
                <strong>Hexadecimal:</strong> The hexadecimal system is commonly used in computing and digital electronics. It uses 16 digits, represented by 0-9 and A-F, to express values that are more compact and readable than binary.
              </p>
              <p>
                Understanding different numeral systems is essential for various fields such as computer science, cryptography, and number theory.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">5. Percentage (%)</h3>
              <p>
                Percentages are a way to express numbers as a fraction of 100. Understanding how to work with percentages is vital for various real-world applications, including finance, statistics, and daily life. 
              </p>
              <p>
                The basic formula for calculating a percentage is:
              </p>
              <p className="bg-gray-200 p-3 rounded-md">
                Percentage = (Part / Whole) × 100
              </p>
              <p>
                Percentages are commonly used in calculating discounts, tax rates, interest rates, and data analysis (such as determining the percentage of a population that possesses a certain attribute).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">6. Per-mille (‰)</h3>
              <p>
                Per-mille, symbolized by "‰", refers to "per thousand" and is used to represent values in terms of thousandths. This is similar to the percentage, but instead of being out of 100, it is out of 1000.
              </p>
              <p>
                A common example of per-mille is the measurement of blood alcohol content (BAC), which is often expressed in per-mille.
              </p>
              <p>
                The conversion from percentage to per-mille is straightforward: to convert a percentage to per-mille, simply multiply by 10 (since 1% = 10‰).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">7. Parts-per Million (ppm)</h3>
              <p>
                Parts-per million (ppm) is another unit of measurement used to express very small quantities, often in the context of chemical concentrations or pollution levels.
              </p>
              <p>
                In ppm, one part is one unit in one million. This is useful when measuring very dilute concentrations of substances in water, air, or soil.
              </p>
              <p>
                Converting between ppm and other units such as percentage or per-mille requires simple mathematical calculations, and ppm is commonly used in environmental science, chemistry, and industrial processes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">8. Zero Number (0)</h3>
              <p>
                The number zero (0) is one of the most fundamental numbers in mathematics. It represents the absence of a quantity and serves as the additive identity in arithmetic. Zero plays a central role in operations like addition and subtraction and is critical in defining concepts such as negative numbers and the number line.
              </p>
              <p>
                In other fields such as computer science and digital electronics, zero is used to represent the "off" state, and is an integral part of binary systems, logic circuits, and algorithms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">9. Prime Number</h3>
              <p>
                A prime number is a number greater than 1 that has no divisors other than 1 and itself. Primes are the building blocks of the number system because every positive integer can be factored into prime numbers, a concept known as prime factorization.
              </p>
              <p>
                Some examples of prime numbers include 2, 3, 5, 7, 11, and 13. The number 2 is the only even prime number, while all other prime numbers are odd.
              </p>
              <p>
                Prime numbers have important applications in fields like cryptography, number theory, and computer algorithms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">10. e Constant</h3>
              <p>
                The number e (approximately 2.718) is an irrational constant that is the base of natural logarithms. It arises naturally in a variety of mathematical contexts, particularly in calculus, where it describes exponential growth and decay.
              </p>
              <p>
                e is also fundamental to fields like finance (compound interest), physics (radioactive decay), and probability theory (normal distribution).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mt-4 mb-2">11. Fibonacci Numbers</h3>
              <p>
                Fibonacci numbers appear in many areas of mathematics and nature. They are defined by the recurrence relation F(n) = F(n-1) + F(n-2), starting with 0 and 1.
              </p>
              <p>
                These numbers can be seen in the growth patterns of plants, the arrangement of petals in flowers, and even in the spiral shapes of galaxies.
              </p>
              <p>
                The Fibonacci sequence is not only an important mathematical concept but also has significant applications in art, architecture, and computer algorithms.
              </p>
            </section>
          </div>

        </GuidanceSection>
      </div>
    </>
  );
};
