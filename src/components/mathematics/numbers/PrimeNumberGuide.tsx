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

export const PrimeNumberGuide = () => {
  const rules = [
    {
      name: "Definition of Prime Number",
      rule: "A prime number is a whole number greater than 1 that has no positive divisors other than 1 and itself.",
      example: "2, 3, 5, 7, 11 are prime numbers.",
    },
    {
      name: "Prime Number Check",
      rule: "To check if a number is prime, divide it by integers greater than 1 and less than itself. If it has no divisors other than 1 and itself, it's prime.",
      example: "7 is prime because it has no divisors other than 1 and 7.",
    },
    {
      name: "Even Prime Number",
      rule: "The only even prime number is 2 because it can only be divided by 1 and 2.",
      example: "2 is prime.",
    },
    {
      name: "Prime Numbers Greater than 2",
      rule: "All prime numbers greater than 2 are odd because any even number greater than 2 is divisible by 2.",
      example: "3, 5, 7, 11 are odd primes.",
    },
    {
      name: "Prime Factorization",
      rule: "Prime factorization is breaking a number down into its prime factors. Every number greater than 1 has a unique prime factorization.",
      example: "12 = 2 × 2 × 3 (prime factors are 2 and 3).",
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
            <BreadcrumbPage>Prime Number Rules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="prime-number-guide-container bg-white/40 dark:bg-transparent">
        <h2 className="prime-number-guide-header text-center text-2xl font-bold mb-4">
          Prime Number Rules Guide
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

        <GuidanceSection title="Understanding Prime Numbers">
          <p>
            Prime numbers are fundamental to mathematics. They are building blocks of other numbers, especially in number theory and cryptography. A prime number cannot be formed by multiplying two smaller natural numbers, and it has exactly two factors: 1 and itself.
          </p>

          <h4 className="font-medium mt-3 mb-1">Important Notes on Prime Numbers</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>The smallest prime number is 2, which is the only even prime number.</li>
            <li>Prime numbers are crucial in many mathematical areas like cryptography and number theory.</li>
            <li>Every number greater than 1 is either a prime or a composite number (a non-prime number with more than two divisors).</li>
          </ul>
        </GuidanceSection>
        <GuidanceSection title="Properties of Prime Numbers">
          <p>
            Prime numbers are the cornerstone of number theory, one of the most important branches of mathematics. They have unique properties that make them essential in many areas of mathematics, especially in the fields of cryptography, computer science, and algebra.
          </p>
          <h4 className="font-medium mt-3 mb-1">Properties of Prime Numbers</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prime numbers are indivisible, meaning they cannot be evenly divided by any number other than 1 and themselves.</li>
            <li>The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, and so on. As the numbers grow larger, primes become less frequent, but they continue infinitely.</li>
            <li>Every integer greater than 1 is either a prime or can be factored into primes. This is known as the Fundamental Theorem of Arithmetic.</li>
            <li>Prime numbers are key to understanding the divisibility rules in mathematics. For instance, understanding the prime factorization of a number allows you to quickly determine its divisibility by other numbers.</li>
            <li>The number 1 is not considered a prime because it only has one divisor (itself), and prime numbers must have exactly two distinct divisors: 1 and the number itself.</li>
          </ul>
        </GuidanceSection>

        <GuidanceSection title="Applications of Prime Numbers in Cryptography">
          <p>
            Prime numbers play a crucial role in the field of cryptography, which is the study of secure communication techniques. Many modern cryptographic algorithms rely on the difficulty of factoring large numbers into their prime factors.
          </p>
          <h4 className="font-medium mt-3 mb-1">Prime Numbers in Public Key Cryptography</h4>
          <p>
            One of the most famous cryptographic systems that use prime numbers is RSA (Rivest–Shamir–Adleman), a widely used public-key encryption algorithm. The security of RSA is based on the fact that it is extremely difficult to factorize the product of two large prime numbers. 
            RSA encryption works by selecting two large prime numbers, multiplying them together to create a semi-prime number, and then using this semi-prime for encryption and decryption processes. 
            The computational difficulty of factoring such large numbers ensures that the system is secure.
          </p>
          <p>
            The use of prime numbers in RSA and other encryption algorithms is a prime example of how number theory directly impacts modern security systems and communication technologies.
          </p>
        </GuidanceSection>

        <GuidanceSection title="Prime Numbers and Their Role in Number Theory">
          <p>
            Number theory, also known as the "queen of mathematics," focuses on the properties and relationships of numbers, especially integers. Prime numbers are fundamental objects in number theory, and many of the most famous results in mathematics concern primes.
          </p>
          <h4 className="font-medium mt-3 mb-1">Prime Numbers and the Sieve of Eratosthenes</h4>
          <p>
            The Sieve of Eratosthenes is an ancient algorithm used to find all prime numbers up to a given limit. It is a simple and efficient method for finding small primes and is an essential tool in the study of primes. 
            The sieve works by iteratively marking the multiples of each prime number, starting with 2, as non-prime. The remaining unmarked numbers are primes.
          </p>
          <h4 className="font-medium mt-3 mb-1">The Goldbach Conjecture</h4>
          <p>
            One of the most famous unsolved problems in number theory is the Goldbach Conjecture. It states that every even integer greater than 2 can be written as the sum of two prime numbers. 
            Despite extensive computational evidence supporting this conjecture, it has yet to be proven or disproven.
          </p>
          <h4 className="font-medium mt-3 mb-1">Prime Numbers in Modular Arithmetic</h4>
          <p>
            Modular arithmetic is a system of arithmetic for integers where numbers "wrap around" after reaching a certain value, the modulus. Prime numbers are crucial in modular arithmetic, particularly in fields such as cryptography, where they help ensure the security and efficiency of modular operations.
          </p>
        </GuidanceSection>

        <GuidanceSection title="Prime Number Theorems and Patterns">
          <p>
            Prime numbers exhibit a variety of interesting patterns and theorems. These patterns are part of what makes primes so fascinating to mathematicians. Over the centuries, many of the most important mathematical results have revolved around prime numbers and their distribution.
          </p>
          <h4 className="font-medium mt-3 mb-1">The Prime Number Theorem</h4>
          <p>
            The Prime Number Theorem describes the asymptotic distribution of prime numbers. It gives an approximation of how many primes there are less than a given number, n. 
            The theorem states that the number of primes less than n is approximately equal to n / ln(n), where ln(n) is the natural logarithm of n.
          </p>
          <p>
            This result is a fundamental achievement in the field of analytic number theory and is related to the Riemann Hypothesis, one of the most famous unsolved problems in mathematics.
          </p>
          <h4 className="font-medium mt-3 mb-1">Twin Primes</h4>
          <p>
            Twin primes are pairs of primes that differ by exactly two, such as (3, 5), (11, 13), and (17, 19). The Twin Prime Conjecture posits that there are infinitely many twin primes, but this conjecture has not been proven. 
            The study of twin primes has led to a variety of deep results in number theory and is an active area of research.
          </p>
        </GuidanceSection>

        <GuidanceSection title="Finding Prime Numbers">
          <p>
            There are several algorithms and methods for finding prime numbers. Some are simple and efficient, while others are more complex and designed for larger sets of numbers.
          </p>
          <h4 className="font-medium mt-3 mb-1">Trial Division</h4>
          <p>
            Trial division is the simplest method for checking whether a number is prime. It involves dividing the number by integers greater than 1 and less than the number itself. If no divisions result in an integer, the number is prime.
          </p>
          <h4 className="font-medium mt-3 mb-1">Primality Tests</h4>
          <p>
            For large numbers, trial division becomes inefficient. More advanced primality tests, such as the Miller-Rabin test and the AKS primality test, are used to determine whether a number is prime. These tests are crucial in fields such as cryptography, where large primes are needed.
          </p>
        </GuidanceSection>

        <GuidanceSection title="Famous Prime Numbers and Sequences">
          <p>
            In addition to the individual prime numbers, several interesting sequences and sets of primes have emerged in mathematical history.
          </p>
          <h4 className="font-medium mt-3 mb-1">Mersenne Primes</h4>
          <p>
            Mersenne primes are prime numbers of the form 2^n - 1, where n is a positive integer. Some Mersenne primes are among the largest known primes. The search for Mersenne primes continues to this day, with new records being set periodically.
          </p>
          <h4 className="font-medium mt-3 mb-1">Fermat Primes</h4>
          <p>
            Fermat primes are primes of the form 2^(2^n) + 1. While only a few Fermat primes are known, the study of these numbers has led to important discoveries in number theory and algebra.
          </p>
        </GuidanceSection>

        <GuidanceSection title="Conclusion">
          <p>
            Prime numbers are a central concept in mathematics with profound implications for fields such as number theory, cryptography, and computer science. Their properties and patterns continue to fascinate mathematicians, and prime numbers remain a source of deep research and exploration.
          </p>
          <p>
            Understanding prime numbers and their applications opens the door to a greater appreciation of mathematics and its role in the modern world. From secure online communication to understanding the very nature of numbers, prime numbers are as relevant as ever.
          </p>
        </GuidanceSection>

      </div>
    </>
  );
};
