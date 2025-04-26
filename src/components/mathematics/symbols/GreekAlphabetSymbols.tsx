
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

export const GreekAlphabetSymbols = () => {
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
            <BreadcrumbPage>Greek Alphabet Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="greek-alphabet-symbols-explanation-container bg-white/40 dark:bg-transparent">
        <h2 className="greek-alphabet-symbols-header text-center text-2xl font-bold mb-4">
          Greek Alphabet Symbols
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Greek Alphabet Symbols?</h3>
          <p>
            The <strong>Greek alphabet</strong> is widely used in mathematics, science, and engineering to represent variables, constants, and functions. Many symbols in this alphabet are used to represent key concepts in fields such as physics, geometry, and calculus.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Common Greek Alphabet Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>α (Alpha)</strong>: Commonly represents angles, coefficients, or the first term in sequences</li>
            <li><strong>β (Beta)</strong>: Often used to denote angles, coefficients, and the second term in sequences</li>
            <li><strong>γ (Gamma)</strong>: Used in physics for the gamma function, angles, and the Lorentz factor</li>
            <li><strong>δ (Delta)</strong>: Represents change or difference (e.g., Δx means a change in x)</li>
            <li><strong>ε (Epsilon)</strong>: Often used for small quantities in limits or errors</li>
            <li><strong>ζ (Zeta)</strong>: Used in various contexts in number theory and complex analysis</li>
            <li><strong>η (Eta)</strong>: Represents efficiency in physics and used in some probability distributions</li>
            <li><strong>θ (Theta)</strong>: Represents angles in geometry, trigonometry, and polar coordinates</li>
            <li><strong>ι (Iota)</strong>: Represents small quantities, especially in the context of limits</li>
            <li><strong>κ (Kappa)</strong>: Used for curvature in geometry and the Boltzmann constant in physics</li>
            <li><strong>λ (Lambda)</strong>: Commonly used for wavelength, eigenvalues, and decay constants</li>
            <li><strong>μ (Mu)</strong>: Represents the mean in statistics, the coefficient of friction, and the magnetic permeability</li>
            <li><strong>ν (Nu)</strong>: Used to represent frequency in physics and kinematic viscosity</li>
            <li><strong>ξ (Xi)</strong>: Used in some advanced mathematical contexts, like random variables in statistics</li>
            <li><strong>ο (Omicron)</strong>: Rarely used, but sometimes represents small quantities or constants</li>
            <li><strong>π (Pi)</strong>: Represents the ratio of a circle's circumference to its diameter, approximately 3.14159</li>
            <li><strong>ρ (Rho)</strong>: Represents density in physics, and correlation coefficients in statistics</li>
            <li><strong>σ (Sigma)</strong>: Represents summation in mathematics (Σ), standard deviation in statistics, and stress in physics</li>
            <li><strong>τ (Tau)</strong>: Used for time constants, torque in physics, and in various mathematical functions</li>
            <li><strong>υ (Upsilon)</strong>: Used in particle physics and certain advanced mathematical notations</li>
            <li><strong>φ (Phi)</strong>: Represents the golden ratio and is also used in electrical engineering and potential theory</li>
            <li><strong>χ (Chi)</strong>: Used in statistics (e.g., chi-squared distribution) and in physics for susceptibility</li>
            <li><strong>ψ (Psi)</strong>: Represents wavefunctions in quantum mechanics and streams in fluid dynamics</li>
            <li><strong>ω (Omega)</strong>: Represents angular velocity, frequency, and is used in set theory to denote a limit ordinal</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>π ≈ 3.14159</strong> – Pi, the ratio of a circle's circumference to its diameter</li>
            <li><strong>θ</strong> – Commonly used to represent angles in trigonometry (e.g., sin(θ), cos(θ))</li>
            <li><strong>λ</strong> – Represents wavelength in physics (e.g., λ = c/f, where c is the speed of light and f is the frequency)</li>
            <li><strong>μ</strong> – The mean in statistics (e.g., μ = (Σx) / n)</li>
            <li><strong>σ</strong> – The standard deviation in statistics, and summation in mathematics (e.g., Σx)</li>
            <li><strong>ω</strong> – Represents angular velocity (e.g., ω = Δθ / Δt)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why They Matter</h3>
          <p>
            Greek alphabet symbols are an essential part of mathematical notation. They allow for concise and efficient representation of variables, constants, and operations across a variety of fields, including mathematics, physics, engineering, and computer science.
          </p>
        </Card>
      </div>
    </>
  );
};
