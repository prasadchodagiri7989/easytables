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
            <BreadcrumbPage>Numeral Systems</BreadcrumbPage>
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
        </GuidanceSection>
      </div>
    </>
  );
};
