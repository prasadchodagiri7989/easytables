import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const ResistorChart = () => {
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
                                      <Link to="/electrical/components">Electrical components</Link>
                                    </BreadcrumbLink>
                                  </BreadcrumbItem>
                                  <BreadcrumbSeparator />
                                  <BreadcrumbItem>
                                    <BreadcrumbPage>Resistor </BreadcrumbPage>
                                  </BreadcrumbItem>
                                </BreadcrumbList>
                              </Breadcrumb>
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">What is a Resistor?</h1>
      <p className="mb-4">
        A <strong>resistor</strong> is an electrical component that reduces electric current. This ability is called <strong>resistance</strong> and is measured in <strong>ohms (Ω)</strong>.
      </p>
      <p className="mb-6">
        In water flow analogy, a resistor is like a thin pipe restricting water flow.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Ohm's Law</h2>
      <p className="mb-2">
        The current through a resistor is defined by:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">I = V / R</pre>
      <p className="mb-2">Power formulas:</p>
      <pre className="bg-gray-100 p-3 rounded mb-2 dark:text-black">P = I × V</pre>
      <pre className="bg-gray-100 p-3 rounded mb-2 dark:text-black">P = I² × R</pre>
      <pre className="bg-gray-100 p-3 rounded mb-6 dark:text-black">P = V² / R</pre>

      <h2 className="text-2xl font-semibold mb-2">Resistors in Parallel</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        1 / R<sub>total</sub> = 1 / R₁ + 1 / R₂ + ...
      </pre>
      <p className="mb-6">Total resistance decreases when added in parallel.</p>

      <h2 className="text-2xl font-semibold mb-2">Resistors in Series</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        R<sub>total</sub> = R₁ + R₂ + R₃ + ...
      </pre>
      <p className="mb-6">Total resistance increases when added in series.</p>

      <h2 className="text-2xl font-semibold mb-2">Material and Dimension Effects</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        R = ρ × (l / A)
      </pre>
      <p className="mb-6">Where ρ is resistivity, l is length, and A is cross-sectional area.</p>

      <h2 className="text-2xl font-semibold mb-2">Resistor Color Code</h2>
      <p className="mb-2">4-band: R = (10×digit₁ + digit₂) × multiplier</p>
      <p className="mb-2">5/6-band: R = (100×digit₁ + 10×digit₂ + digit₃) × multiplier</p>

      <h2 className="text-2xl font-semibold mb-2">Types of Resistors</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Variable Resistor (2 terminals)</li>
        <li>Potentiometer (3 terminals)</li>
        <li>Photoresistor (light sensitive)</li>
        <li>Power Resistor (high power)</li>
        <li>SMT/SMD Resistor (surface mount)</li>
        <li>Resistor Network</li>
        <li>Carbon, Chip, Metal-oxide, Ceramic Resistors</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Special Resistor Uses</h2>
      <h3 className="text-xl font-medium mt-4 mb-1">Pull-up Resistor</h3>
      <p className="mb-4">
        Connected to high voltage (+5V or +12V). Sets digital pin to logical '1' when disconnected.
      </p>

      <h3 className="text-xl font-medium mb-1">Pull-down Resistor</h3>
      <p>
        Connected to ground (0V). Sets digital pin to logical '0' when disconnected.
      </p>
    </div>
    </>
  );
};

export default ResistorChart;
