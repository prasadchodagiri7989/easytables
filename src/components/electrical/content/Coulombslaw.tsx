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
              className="p-2 border rounded dark:text-black"
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
    <section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Nature of Electric Force</h2>
  <p>
    The force described by Coulomb’s law can be either attractive or repulsive depending on the signs of the charges:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Attractive</strong> when the charges are opposite (e.g., +q and -q)</li>
    <li><strong>Repulsive</strong> when the charges are the same (e.g., +q and +q, or -q and -q)</li>
  </ul>
  <p>
    This force acts along the line connecting the two charges and obeys Newton’s third law — both charges experience forces of equal magnitude but in opposite directions.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Unit Consistency in Calculations</h2>
  <p>
    When using Coulomb’s Law, it is important to use SI units:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Charge (q): Coulombs (C)</li>
    <li>Distance (r): Meters (m)</li>
    <li>Force (F): Newtons (N)</li>
    <li>Coulomb’s constant (k): 8.988 × 10⁹ N·m²/C²</li>
  </ul>
  <p>
    If distance is given in centimeters or millimeters, convert it to meters before performing the calculation.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Importance in Physics and Electronics</h2>
  <p>
    Coulomb’s Law forms the basis for understanding how charged particles interact. It underpins many concepts in electrostatics, electric fields, and forces in atomic-scale systems:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Electrostatic forces in atoms and molecules</li>
    <li>Forces in capacitor plates and circuit boards</li>
    <li>Design of sensors, antennas, and shielding systems</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Electric Field Concept</h2>
  <p>
    Coulomb’s Law is closely related to the concept of the electric field (E). The electric field due to a point charge q at a distance r is given by:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    E = k × q / r²
  </pre>
  <p>
    Here, E is in volts per meter (V/m), and it represents the force experienced by a unit positive charge placed at a distance r.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Limitations of Coulomb’s Law</h2>
  <p>
    While Coulomb’s Law is widely applicable, there are some limitations:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Only valid for stationary (static) point charges</li>
    <li>Less accurate in a medium other than vacuum unless permittivity is adjusted</li>
    <li>Does not account for magnetic effects or motion of charges</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Real-Life Applications</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Electrostatic air filters use charged plates to capture particles</li>
    <li>Inkjet printers use Coulomb force to direct ink droplets</li>
    <li>Touchscreens sense charge variation on contact</li>
    <li>In particle accelerators, electric forces guide and accelerate charged particles</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Fun Fact</h2>
  <p>
    Coulomb's law was published by Charles-Augustin de Coulomb in 1785 using a torsion balance. His experiments laid the foundation for classical electrostatics, much like Newton’s law did for gravity.
  </p>
</section>
<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Vector Form of Coulomb's Law</h2>
  <p>
    Coulomb’s law in vector form expresses not just the magnitude of the force, but also its direction. The vector form is:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    <strong>F⃗ = (k × q₁ × q₂ / r²) × r̂</strong>
  </pre>
  <p>
    Where <code>r̂</code> is the unit vector pointing from one charge to the other. The direction of the force is along the line connecting the two charges.
  </p>
</section>
<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Graphical Representation</h2>
  <p>
    If you plot force (F) vs. distance (r), you'll observe an inverse square curve — meaning, as distance increases, force decreases rapidly:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>When r doubles, F becomes 1/4th</li>
    <li>When r triples, F becomes 1/9th</li>
  </ul>
  <p>
    This behavior is similar to gravitational forces and helps explain why nearby charged objects experience stronger interactions.
  </p>
</section>
<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Graphical Representation</h2>
  <p>
    If you plot force (F) vs. distance (r), you'll observe an inverse square curve — meaning, as distance increases, force decreases rapidly:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>When r doubles, F becomes 1/4th</li>
    <li>When r triples, F becomes 1/9th</li>
  </ul>
  <p>
    This behavior is similar to gravitational forces and helps explain why nearby charged objects experience stronger interactions.
  </p>
</section>
<section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Coulomb’s Law vs Gravitational Law</h2>
  <p>
    Both Coulomb’s law and Newton’s law of gravitation describe inverse-square forces. However:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Coulomb’s Law:</strong> Acts between electric charges</li>
    <li><strong>Gravitational Law:</strong> Acts between masses</li>
    <li><strong>Electrostatic force:</strong> Can be attractive or repulsive</li>
    <li><strong>Gravitational force:</strong> Is always attractive</li>
  </ul>
  <p>
    Mathematically, they are similar, but Coulomb’s force is much stronger in magnitude at atomic and molecular scales.
  </p>
</section>
<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Key Points About Coulomb's Law</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Coulomb's Law describes the electrostatic interaction between two stationary, electrically charged particles.</li>
    <li>The force is attractive if the charges are of opposite signs, and repulsive if the charges are of the same sign.</li>
    <li>The magnitude of the force is directly proportional to the product of the two charges.</li>
    <li>The magnitude is inversely proportional to the square of the distance between the charges.</li>
    <li>It applies best to point charges or spherical charges where charge distribution is uniform.</li>
  </ul>
</section>

<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Applications of Coulomb's Law</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Calculating electric forces in electric fields and circuits.</li>
    <li>Modeling atomic structures and forces between protons and electrons.</li>
    <li>Designing capacitors and understanding dielectric effects.</li>
    <li>Exploring interactions in ionized gases and plasmas.</li>
  </ul>
</section>

<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Coulomb's Constant (k)</h2>
  <p>
    Coulomb's constant, often written as <strong>k</strong> or <strong>k<sub>e</sub></strong>, is a proportionality constant in electrostatics.
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black mt-2">k = 8.988 × 10⁹ N·m²/C²</pre>
  <p className="mt-2">
    It's derived from the permittivity of free space:
    <br />
    <code>k = 1 / (4π × ε₀)</code>, where ε₀ ≈ 8.854 × 10⁻¹² C²/N·m²
  </p>
</section>
<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Vector Form of Coulomb’s Law</h2>
  <p>
    Coulomb's Law can also be expressed in vector form to show the direction of the force:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black mt-2">
    <code>
      <strong>
        𝐅⃗ = k × (q₁ × q₂) / |𝐫⃗|² × 𝐫̂
      </strong>
    </code>
  </pre>
  <p className="mt-2">
    Where:
    <ul className="list-disc pl-6 mt-1">
      <li>𝐅⃗ is the electrostatic force vector</li>
      <li>𝐫̂ is the unit vector from charge q₁ to q₂</li>
      <li>|𝐫⃗| is the magnitude of the displacement vector between the charges</li>
    </ul>
  </p>
</section>

<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Limitations of Coulomb’s Law</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Valid only for point charges or spherical distributions.</li>
    <li>Applicable only when charges are stationary (electrostatics).</li>
    <li>Does not account for magnetic forces or relativistic effects.</li>
    <li>Assumes vacuum or medium with known permittivity (ε).</li>
  </ul>
</section>

<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Historical Background</h2>
  <p>
    Coulomb's Law is named after <strong>Charles-Augustin de Coulomb</strong>, who published it in 1785.
    He used a torsion balance to measure the force between charges, laying the foundation for electrostatics.
  </p>
  <p className="mt-2">
    His work parallels Newton’s law of gravitation, but for electric forces instead of gravitational.
  </p>
</section>

<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Coulomb’s Law in Different Mediums</h2>
  <p>
    The force also depends on the medium between the charges. In a medium with relative permittivity ε<sub>r</sub>:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black mt-2">
    F = (1 / (4π × ε₀ × ε<sub>r</sub>)) × (q₁ × q₂) / r²
  </pre>
  <p className="mt-2">
    In general, the force is weaker in materials with higher permittivity (e.g., water).
  </p>
</section>

<section className="mt-8">
  <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>The electrostatic force is 10³⁶ times stronger than gravity.</li>
    <li>Coulomb’s Law is foundational to Maxwell’s equations in electromagnetism.</li>
    <li>Modern simulations in molecular chemistry still rely on Coulombic calculations.</li>
  </ul>
</section>

    </>
  );
};

export default CoulombsLaw;
