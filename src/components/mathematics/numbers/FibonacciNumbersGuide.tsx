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

export const FibonacciNumbersGuide = () => {
  const rules = [
    {
      name: "Definition of Fibonacci Numbers",
      rule: "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.",
      example: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34...",
    },
    {
      name: "Fibonacci Sequence Formula",
      rule: "Each number in the Fibonacci sequence can be defined by the recurrence relation: F(n) = F(n-1) + F(n-2), with F(0) = 0 and F(1) = 1.",
      example: "F(3) = F(2) + F(1) = 2 + 1 = 3",
    },
    {
      name: "Golden Ratio",
      rule: "The ratio of two consecutive Fibonacci numbers approaches the Golden Ratio (approximately 1.618) as the numbers get larger.",
      example: "F(5) / F(4) = 5 / 3 ≈ 1.618",
    },
    {
      name: "Applications in Nature",
      rule: "Fibonacci numbers appear frequently in nature, such as in the arrangement of leaves, flowers, and seeds.",
      example: "The number of petals in many flowers follows the Fibonacci sequence.",
    },
    {
      name: "Fibonacci in Art and Architecture",
      rule: "The Fibonacci sequence and the Golden Ratio are often used in art and architecture to create aesthetically pleasing proportions.",
      example: "The Parthenon in Athens and the pyramids of Egypt show examples of the Golden Ratio in their designs.",
    },
    {
      name: "Fibonacci in Computer Science",
      rule: "Fibonacci numbers are used in algorithms such as the Fibonacci search algorithm, and are often employed in dynamic programming and recursion problems.",
      example: "Fibonacci sequence is used to design algorithms that find the nth Fibonacci number.",
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
            <BreadcrumbPage>Fibonacci Numbers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="fibonacci-numbers-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="fibonacci-numbers-guide-header text-center text-2xl font-bold mb-4">
          Fibonacci Numbers Guide
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

        <GuidanceSection title="Detailed Explanation of Fibonacci Numbers">
          <p>
            The Fibonacci sequence is one of the most famous sequences in mathematics. It is formed by a simple recurrence relation: each term is the sum of the two preceding ones, with the sequence starting from 0 and 1. The mathematical notation of the Fibonacci sequence can be written as:
          </p>
          <p className="bg-gray-200 p-3 rounded-md">
            F(n) = F(n-1) + F(n-2) for n ≥ 2, with initial conditions F(0) = 0 and F(1) = 1.
          </p>

          <h4 className="font-medium mt-3 mb-1">The Fibonacci Sequence in Detail</h4>
          <p>
            The first few numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on. Each number is the sum of the two previous numbers. This sequence has a wide variety of applications in different fields like mathematics, biology, art, and architecture.
          </p>

          <h4 className="font-medium mt-3 mb-1">Golden Ratio and Its Connection to Fibonacci Numbers</h4>
          <p>
            As the Fibonacci sequence progresses, the ratio between consecutive terms approaches the Golden Ratio (approximately 1.618). This ratio, often denoted by the Greek letter φ (phi), is a special number that has been historically associated with beauty and harmony in art, nature, and architecture.
          </p>
          <p>
            In fact, the larger the Fibonacci numbers become, the closer the ratio between consecutive numbers gets to the Golden Ratio. The Fibonacci sequence is said to converge to this ratio as the index number increases, and this convergence becomes increasingly more accurate as the numbers grow.
          </p>

          <h4 className="font-medium mt-3 mb-1">Mathematical Properties of Fibonacci Numbers</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Fibonacci numbers grow exponentially, and the growth rate is governed by the Golden Ratio. The general formula for the nth Fibonacci number can be written as Binet’s formula:
              <p className="bg-gray-200 p-3 rounded-md">
                F(n) = (φ^n - (1-φ)^n) / √5
              </p>
            </li>
            <li>
              The Fibonacci sequence is related to the Lucas numbers, which are similar to Fibonacci numbers, but with initial values of 2 and 1. Both sequences follow the same recurrence relation.
            </li>
            <li>
              The Fibonacci sequence also has an interesting connection with prime numbers. For example, the Fibonacci sequence contains prime numbers, and certain Fibonacci numbers are themselves prime numbers.
            </li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Applications of Fibonacci Numbers in Nature</h4>
          <p>
            One of the most fascinating aspects of Fibonacci numbers is their appearance in nature. The sequence can be found in a variety of biological settings, such as the arrangement of leaves on a stem, the number of spirals in a sunflower, and the arrangement of scales in a pinecone. The reason behind these occurrences is often related to the optimal packing and growth patterns found in natural systems.
          </p>
          <p>
            Some specific examples of Fibonacci numbers in nature include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The number of petals in many flowers, such as lilies (3 petals), buttercups (5 petals), and daisies (34 or 55 petals, depending on the species), follows the Fibonacci sequence.</li>
            <li>In pinecones, the spirals in the arrangement of the scales are often in Fibonacci numbers, which helps in optimal packing of the scales.</li>
            <li>Spiral galaxies, such as the Milky Way, have spiral arms that follow the Fibonacci sequence, reflecting an efficient way to structure space.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Fibonacci Numbers in Art and Architecture</h4>
          <p>
            The Fibonacci sequence has been used for centuries in art and architecture to create visually appealing designs. The Golden Ratio, which is closely related to the Fibonacci sequence, is considered a key to aesthetic beauty and harmony. Many artists, architects, and designers have used the Golden Ratio in their works to create balanced and harmonious proportions.
          </p>
          <p>
            Some notable examples include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The Parthenon in Athens, a masterpiece of ancient Greek architecture, is thought to have been built using the Golden Ratio, which is closely related to the Fibonacci sequence.</li>
            <li>The pyramids of Egypt, particularly the Great Pyramid of Giza, are believed to have been designed with the Golden Ratio in mind.</li>
            <li>Renaissance artists, such as Leonardo da Vinci, incorporated the Fibonacci sequence and the Golden Ratio in their works. For example, Da Vinci’s famous painting "The Last Supper" is said to exhibit Golden Ratio proportions.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Fibonacci Numbers in Computer Science</h4>
          <p>
            Fibonacci numbers are also widely used in computer science, especially in algorithms and data structures. Some applications include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Recursive algorithms: The Fibonacci sequence is often used to demonstrate the concept of recursion in computer science. A simple recursive algorithm can be used to compute Fibonacci numbers, although it is not the most efficient method.</li>
            <li>Dynamic programming: Fibonacci numbers are often used in dynamic programming problems to find the nth Fibonacci number in an efficient manner by storing previously computed values (memoization).</li>
            <li>Fibonacci search: The Fibonacci search algorithm is an efficient way to search for an element in a sorted array by using Fibonacci numbers to determine the search range.</li>
            <li>Data structures: Fibonacci numbers are used in certain data structures, such as Fibonacci heaps, which are optimized for efficient operations in algorithms like Dijkstra’s shortest path algorithm.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Fibonacci Numbers and Their Extensions</h4>
          <p>
            The Fibonacci sequence can be extended into different forms and generalizations, leading to more interesting and complex mathematical objects:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Generalized Fibonacci sequences: These sequences are formed by altering the recurrence relation. For example, instead of adding the two previous terms, one could subtract them or multiply them to generate a new sequence.</li>
            <li>Tribonacci numbers: The Tribonacci sequence is similar to the Fibonacci sequence but instead of adding the previous two terms, each term is the sum of the three preceding ones. The sequence starts as 0, 0, 1, 1, 2, 4, 7, 13, and so on.</li>
            <li>Lucas numbers: The Lucas sequence is another variant of the Fibonacci sequence. It starts with 2 and 1 instead of 0 and 1 and follows the same recurrence relation. The Lucas numbers have similar properties to the Fibonacci numbers.</li>
          </ul>
        </GuidanceSection>

      </div>
    </>
  );
};
