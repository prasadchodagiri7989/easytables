import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const Equation = ({ children }) => (
  <div className="my-2 px-4 py-2 bg-gray-100 dark:bg-transparent border rounded text-sm font-mono overflow-x-auto">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <div className="my-6">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <div className="text-base text-gray-800 dark:text-white">{children}</div>
  </div>
);

const PowerFactor = () => {
  return (
    <div className="max-w-4xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Power Factor</h1>

      <Section title="Definition">
        Power factor (PF) is the ratio of real power to apparent power:
        <Equation>PF = P(W) / |S(VA)|</Equation>
        <ul className="list-disc list-inside mt-2">
          <li><strong>PF</strong>: Power factor</li>
          <li><strong>P</strong>: Real power in watts (W)</li>
          <li><strong>|S|</strong>: Apparent power in volt-amperes (VA)</li>
        </ul>
      </Section>

      <Section title="Power Factor and Phase Angle">
        For sinusoidal current, PF equals the absolute cosine of the phase angle:
        <Equation>PF = |cos φ|</Equation>
        Real power can be calculated from apparent power and PF:
        <Equation>P = |S| × PF = |S| × |cos φ|</Equation>
        In a purely resistive circuit:
        <Equation>PF = 1</Equation>
      </Section>

      <Section title="Reactive Power">
        Reactive power relates to apparent power and phase angle:
        <Equation>Q(VAR) = |S(VA)| × |sin φ|</Equation>
      </Section>

      <Section title="Power Factor Calculation Methods">
        <h3 className="text-lg font-semibold mt-4">Single Phase:</h3>
        <Equation>PF = (1000 × P(kW)) / (V(V) × I(A))</Equation>

        <h3 className="text-lg font-semibold mt-4">Three Phase (Line-to-Line):</h3>
        <Equation>PF = (1000 × P(kW)) / (√3 × V<sub>L-L</sub>(V) × I(A))</Equation>

        <h3 className="text-lg font-semibold mt-4">Three Phase (Line-to-Neutral):</h3>
        <Equation>PF = (1000 × P(kW)) / (3 × V<sub>L-N</sub>(V) × I(A))</Equation>
      </Section>

      <Section title="Power Factor Correction">
        Power factor correction improves PF close to 1 to reduce reactive power and power losses. This is commonly done by adding capacitors in circuits with inductive loads.
      </Section>

      <Section title="Correction Calculations">
        <Equation>|S| = V × I</Equation>
        <Equation>Q = √(|S|² - P²)</Equation>

        To calculate required capacitor for correction:
        <Equation>Q<sub>c</sub> = Q - Q<sub>corrected</sub></Equation>
        <Equation>
          Q<sub>c</sub> = V² / X<sub>c</sub> = 2πf × C × V²
        </Equation>

        Solve for capacitance:
        <Equation>
          C(F) = Q<sub>c</sub>(VAR) / (2π × f(Hz) × V²)
        </Equation>
      </Section>
    </div>
  );
};

export default PowerFactor;
