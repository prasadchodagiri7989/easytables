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

  export const FactorialNumbersGuide = () => {
    const rules = [
      {
        name: "Definition of Factorial",
        rule: "The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n.",
        example: "5! = 5 × 4 × 3 × 2 × 1 = 120",
      },
      {
        name: "Factorial of 0",
        rule: "By definition, 0! is equal to 1.",
        example: "0! = 1",
      },
      {
        name: "Factorial Formula",
        rule: "Factorial of n can be expressed as: n! = n × (n - 1) × (n - 2) × ... × 1.",
        example: "3! = 3 × 2 × 1 = 6",
      },
      {
        name: "Factorial Growth",
        rule: "Factorial grows very fast as n increases. It is used in combinatorics, probability, and in the calculation of permutations and combinations.",
        example: "6! = 6 × 5 × 4 × 3 × 2 × 1 = 720",
      },
      {
        name: "Factorial in Permutations",
        rule: "The factorial function is used in permutations to calculate the number of ways to arrange a set of objects. The number of permutations of n objects is n!.",
        example: "The number of permutations of 4 objects is 4! = 4 × 3 × 2 × 1 = 24.",
      },
      {
        name: "Factorial in Combinations",
        rule: "Factorial is also used in combinations to calculate the number of ways to choose k items from a set of n items. The formula for combinations is n! / (k!(n-k)!).",
        example: "The number of ways to choose 2 items from 4 is 4! / (2! × 2!) = 6.",
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
              <BreadcrumbPage>Factorial Numbers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="factorial-numbers-guide-container bg-white/40 dark:bg-transparent">
          <h2 className="factorial-numbers-guide-header text-center text-2xl font-bold mb-4">
            Factorial Numbers Guide
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

          <GuidanceSection title="Understanding Factorial Numbers">
            <p>
              Factorial numbers are fundamental in mathematics, particularly in combinatorics and probability theory. They represent the number of ways to arrange or choose items from a set. Factorials grow extremely fast and are used to calculate permutations and combinations.
            </p>

            <h4 className="font-medium mt-3 mb-1">Key Facts about Factorial Numbers</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Factorial grows very quickly, and for large values of n, it can become a very large number.</li>
              <li>0! = 1 by definition, and this special case is important in many mathematical formulas.</li>
              <li>Factorial is used to calculate permutations and combinations in probability theory.</li>
            </ul>

            <h4 className="font-medium mt-4 mb-2">Applications of Factorials</h4>
          <p>
            Factorials are extensively used in various mathematical disciplines and real-world applications. In statistics, factorials are critical when calculating probabilities and expectations for different events. They help define the binomial distribution and are part of statistical formulas like variance and standard deviation when working with permutations and combinations.
          </p>

          <p className="mt-2">
            In computer science, factorials are often used in algorithms that deal with permutations or recursive computations. For example, algorithms that generate all possible arrangements of a dataset typically depend on factorial concepts to determine the total number of permutations. Additionally, factorial calculations are employed in solving problems related to dynamic programming and recursive trees.
          </p>

          <h4 className="font-medium mt-4 mb-2">Factorials in Combinatorics</h4>
          <p>
            Combinatorics is one of the primary fields where factorials are heavily utilized. When calculating the number of possible groupings or arrangements of a set of items, factorials help define permutations (ordered arrangements) and combinations (unordered selections). For example, choosing a committee of 3 people from a group of 10 involves computing combinations using factorials.
          </p>

          <p className="mt-2">
            Suppose you want to find out how many different ways you can arrange the letters in the word “BOOK”. Because the letter "O" appears twice, the number of unique arrangements is calculated as 4! / 2! = 12, instead of 24. This highlights how factorials are also used to account for repeated elements.
          </p>

          <h4 className="font-medium mt-4 mb-2">Factorials in Calculus and Analysis</h4>
          <p>
            In calculus, factorials appear in the expansion of functions using Taylor and Maclaurin series. These series represent functions as infinite sums of terms derived from derivatives. The general term of the Taylor series includes a factorial in the denominator, which ensures convergence and correct weighting of each term:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto mt-2 dark:bg-white">
            f(x) = f(0) + f&#39;(0)x/1! + f&#39;&#39;(0)x²/2! + f⁽³⁾(0)x³/3! + ...
          </pre>

          <h4 className="font-medium mt-4 mb-2">Factorials in Probability Theory</h4>
          <p>
            Probability theory often involves factorials when calculating the likelihood of events occurring in specific orders or combinations. For instance, the number of ways to arrange n distinct objects in a sequence is n!. This is useful in calculating event spaces in experiments and determining how likely certain sequences are.
          </p>

          <p className="mt-2">
            Factorials also appear in the formula for the binomial coefficient, which is essential for understanding binomial probability distributions. The formula for choosing k successes in n trials is:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto mt-2 dark:bg-white">
            C(n, k) = n! / (k! × (n - k)!)
          </pre>

          <h4 className="font-medium mt-4 mb-2">Recursive Nature of Factorials</h4>
          <p>
            One of the defining properties of factorials is that they are recursive by nature. The factorial of any number n greater than 0 is defined in terms of the factorial of (n - 1):
          </p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto mt-2 dark:bg-white">
            n! = n × (n - 1)!
          </pre>
          <p className="mt-2">
            This recursive definition makes factorials a natural example when teaching recursion in programming. For instance, the factorial of 4 is computed as 4 × 3 × 2 × 1, which is evaluated step-by-step in recursive calls.
          </p>

          <h4 className="font-medium mt-4 mb-2">Factorials and Big Numbers</h4>
          <p>
            One notable characteristic of factorial numbers is how quickly they grow. Even modestly sized values of n lead to extremely large results. For example, 10! equals 3,628,800, and 20! exceeds 2.43 × 10¹⁸. Due to this rapid growth, handling factorials computationally often requires special data structures or libraries capable of managing big integers.
          </p>

          <p className="mt-2">
            In practical computing environments, integer overflow can occur if you try to store large factorials in a standard integer variable. This is why libraries like Python’s <code>math.factorial()</code> or BigInt data types in JavaScript and Java are useful for handling such calculations.
          </p>

          <h4 className="font-medium mt-4 mb-2">Historical Context and Use</h4>
          <p>
            The concept of factorials has been studied since the 12th century, and its use was formalized in the 18th century by French mathematician Christian Kramp and later refined by other mathematicians like James Stirling. Stirling’s approximation is an important formula used to estimate the value of large factorials:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm overflow-x-auto mt-2 dark:bg-white">
            n! ≈ √(2πn) × (n/e)ⁿ
          </pre>

          <p className="mt-2">
            This approximation is especially useful in statistical mechanics, thermodynamics, and entropy calculations in physics, where extremely large numbers arise frequently.
          </p>

          <h4 className="font-medium mt-4 mb-2">Conclusion</h4>
          <p>
            Factorials are a foundational element in mathematics, computer science, and science. Their relevance ranges from basic counting problems to advanced topics like probability distributions, algorithm complexity, and mathematical analysis. Understanding factorials and their applications provides a strong base for exploring more advanced mathematical concepts.
          </p>

          <p className="mt-2">
            Whether you’re calculating permutations, designing algorithms, or studying statistical models, factorials play a vital role. Mastering them opens the door to deeper problem-solving and analytical thinking across disciplines.
          </p>

          
          </GuidanceSection>
        </div>
      </>
    );
  };
