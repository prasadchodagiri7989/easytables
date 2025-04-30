import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const CoulombsLaw = () => {
  const [charges, setCharges] = useState({
    q1: "",
    q2: "",
    r: "",
  });
  const [force, setForce] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharges({
      ...charges,
      [name]: value,
    });
  };

  const calculateForce = () => {
    const { q1, q2, r } = charges;
    const q1_val = parseFloat(q1);
    const q2_val = parseFloat(q2);
    const r_val = parseFloat(r);

    // Coulomb's constant
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
              <BreadcrumbPage>Kirchhoff's Laws</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Coulomb's Law</h1>
      <p className="mb-6">
        Coulomb's law calculates the electric force between two point charges. The force depends on the magnitude of the charges and the distance between them.
      </p>

      <p className="mb-4">
        The formula for Coulomb's Law is:
      </p>
      <p className="italic">
        F = k × (q1 × q2) / r²
      </p>
      <p>
        Where:
        <br />
        F = Force between the charges (N) <br />
        k = Coulomb's constant (8.988 × 10⁹ N·m²/C²) <br />
        q1, q2 = Charges (C) <br />
        r = Distance between the charges (m)
      </p>

      <h3 className="text-lg font-semibold mb-2">Coulomb's Law Example</h3>
      <div className="mb-4">
        <p>
          Find the force between two electric charges of 2×10⁻⁵ C and 3×10⁻⁵ C with a distance of 40 cm between them:
        </p>
        <p className="font-semibold">
          Given:
          <br />
          q1 = 2×10⁻⁵ C, q2 = 3×10⁻⁵ C, r = 40 cm = 0.4 m
        </p>
        <p>
          Solution:
          <br />
          F = k × q1 × q2 / r²
          <br />
          F = 8.988 × 10⁹ × (2×10⁻⁵) × (3×10⁻⁵) / (0.4)²
          <br />
          F = 37.705 N
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-2">Coulomb's Law Calculator</h3>
      <div className="mb-4">
        <div className="flex gap-4">
          <div>
            <label>Enter Charge q1 (C):</label>
            <input
              type="number"
              name="q1"
              value={charges.q1}
              onChange={handleInputChange}
              placeholder="Enter charge q1 (C)"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter Charge q2 (C):</label>
            <input
              type="number"
              name="q2"
              value={charges.q2}
              onChange={handleInputChange}
              placeholder="Enter charge q2 (C)"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter Distance r (m):</label>
            <input
              type="number"
              name="r"
              value={charges.r}
              onChange={handleInputChange}
              placeholder="Enter distance r (m)"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={calculateForce}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate Force
        </button>

        {force !== null && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Result:</h3>
            <p>Force = {force} N</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default CoulombsLaw;
