import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const CoulombsLaw = () => {
  const [charges, setCharges] = useState({ q1: "", q2: "", r: "" });
  const [force, setForce] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharges({ ...charges, [name]: value });
  };

  const calculateForce = () => {
    const { q1, q2, r } = charges;
    const q1_val = parseFloat(q1);
    const q2_val = parseFloat(q2);
    const r_val = parseFloat(r);
    const k = 8.988 * Math.pow(10, 9);
    if (!isNaN(q1_val) && !isNaN(q2_val) && !isNaN(r_val)) {
      const force = (k * q1_val * q2_val) / Math.pow(r_val, 2);
      setForce(force.toFixed(2));
    }
  };

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
              <Link to="/electrical/laws">Electronic Circuit Laws</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Coulomb's Law</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="mx-auto max-w-[900px]">
        <CardHeader>
          <CardTitle>Coulomb's Law Fundamentals</CardTitle>
        </CardHeader>

        <CardContent className="text-gray-800 dark:text-white space-y-6 leading-relaxed text-sm">
          <div>
            <h1 className="text-2xl font-bold">What is Coulomb's Law?</h1>
            <p>
              Coulomb's Law describes the electrostatic force between two charged particles.
              The force is directly proportional to the product of their charges and inversely
              proportional to the square of the distance between them.
            </p>
            <pre className="bg-gray-100 p-3 rounded dark:text-black">F = k × (q1 × q2) / r²</pre>
            <p>Where k = 8.988 × 10⁹ N·m²/C²</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Example Calculation</h2>
            <p>
              For q1 = 2×10⁻⁵ C, q2 = 3×10⁻⁵ C, and r = 0.4 m:
              <br />F = 8.988 × 10⁹ × (2×10⁻⁵) × (3×10⁻⁵) / (0.4)² = 3.77 N
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Interactive Calculator</h2>
            <div className="space-y-3">
              <input
                type="number"
                name="q1"
                value={charges.q1}
                onChange={handleInputChange}
                placeholder="Charge q1 (C)"
                className="p-2 border rounded w-full dark:text-black"
              />
              <input
                type="number"
                name="q2"
                value={charges.q2}
                onChange={handleInputChange}
                placeholder="Charge q2 (C)"
                className="p-2 border rounded w-full dark:text-black"
              />
              <input
                type="number"
                name="r"
                value={charges.r}
                onChange={handleInputChange}
                placeholder="Distance r (m)"
                className="p-2 border rounded w-full dark:text-black"
              />
              <button
                onClick={calculateForce}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Calculate Force
              </button>
              {force !== null && (
                <div className="bg-gray-100 p-3 rounded dark:text-black">
                  <strong>Force = {force} N</strong>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Important Notes</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Force is attractive for opposite charges and repulsive for like charges.</li>
              <li>Always use SI units: C for charge, m for distance, N for force.</li>
              <li>Only valid for static point charges.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Applications</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Atomic models</li>
              <li>Capacitor field analysis</li>
              <li>Electrostatic shielding</li>
              <li>Sensor and actuator design</li>
              <li>Touchscreen and printer technologies</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Electric Field</h2>
            <p>The electric field due to charge q at distance r is:</p>
            <pre className="bg-gray-100 p-3 rounded dark:text-black">E = k × q / r²</pre>
            <p>Direction is away from +q and toward -q.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Vector Form</h2>
            <pre className="bg-gray-100 p-3 rounded dark:text-black">
              F⃗ = (k × q1 × q2 / r²) × r̂
            </pre>
            <p>r̂ is the unit vector along the line connecting q1 and q2.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Comparison with Gravity</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Both follow inverse square law</li>
              <li>Electrostatic force can be attractive or repulsive</li>
              <li>Gravitational force is always attractive</li>
              <li>Coulomb force is much stronger than gravity</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CoulombsLaw;
