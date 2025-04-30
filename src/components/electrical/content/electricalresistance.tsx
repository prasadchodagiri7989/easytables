import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const Equation = ({ children }) => (
  <div className="my-2 px-4 py-2 bg-gray-100 dark:bg-transparent border rounded text-sm font-mono">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <div className="my-6">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <div className="text-base text-gray-800 dark:text-white">{children}</div>
  </div>
);

const ElectricalResistance = () => {
  return (
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electrical Resistance</h1>

      <Section title="Definition">
        Resistance is an electrical quantity that measures how the device or material reduces the electric current flow through it.
        <br />
        It is measured in ohms (Ω).
        <br />
        Using a water pipe analogy: a thinner pipe creates more resistance, reducing water flow.
      </Section>

      <Section title="Resistance Calculation">
        The resistance of a conductor is calculated as:
        <Equation>R = ρ × (l / A)</Equation>
        R - resistance (Ω)<br />
        ρ - resistivity (Ω·m)<br />
        l - length of the conductor (m)<br />
        A - cross-sectional area (m²)
        <br /><br />
        Water pipe analogy:
        <ul className="list-disc list-inside">
          <li>Longer pipe → more resistance</li>
          <li>Wider pipe → less resistance</li>
        </ul>
      </Section>

      <Section title="Resistance with Ohm's Law">
        <Equation>R = V / I</Equation>
        R - resistance (Ω)<br />
        V - voltage (V)<br />
        I - current (A)
      </Section>

      <Section title="Temperature Effects">
        Resistance increases with temperature:
        <Equation>R₂ = R₁ × (1 + α(T₂ - T₁))</Equation>
        R₂ - resistance at temperature T₂ (Ω)<br />
        R₁ - resistance at temperature T₁ (Ω)<br />
        α - temperature coefficient
      </Section>

      <Section title="Resistors in Series">
        Total resistance is the sum of individual resistors:
        <Equation>Rₜ = R₁ + R₂ + R₃ + ...</Equation>
      </Section>

      <Section title="Resistors in Parallel">
        Total resistance for resistors in parallel:
        <Equation>1 / Rₜ = 1 / R₁ + 1 / R₂ + 1 / R₃ + ...</Equation>
      </Section>

      <Section title="Measuring Resistance">
        Resistance is measured with an <strong>ohmmeter</strong>.
        <ul className="list-disc list-inside">
          <li>Ensure power is OFF in the circuit before measuring</li>
          <li>Connect the ohmmeter to both ends of the component</li>
        </ul>
      </Section>

      <Section title="Superconductivity">
        Superconductivity is a phenomenon where resistance drops to zero at temperatures near absolute zero (0 K).
      </Section>
    </div>
  );
};

export default ElectricalResistance;