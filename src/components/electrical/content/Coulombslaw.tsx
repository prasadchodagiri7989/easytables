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
          {/* Extra Educational Content */}
<div>
  <h2 className="font-semibold text-lg">Derivation of Coulomb’s Law</h2>
  <p>
    Coulomb’s law was derived experimentally by Charles-Augustin de Coulomb in 1785 using a torsion balance.
    He measured the twist caused by electrostatic forces between charged spheres and deduced that the force
    is proportional to the product of the charges and inversely proportional to the square of the distance.
  </p>
  <p>
    Mathematically, this is represented as: 
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">F ∝ (q1 × q2) / r²</pre>
  <p>
    Introducing the proportionality constant <strong>k</strong> gives the final equation:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">F = k × (q1 × q2) / r²</pre>
  <p>
    The constant <strong>k</strong> depends on the medium and is equal to <code>1 / (4πε₀)</code> in vacuum,
    where <code>ε₀ = 8.854 × 10⁻¹² C²/N·m²</code> is the permittivity of free space.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Assumptions in Coulomb’s Law</h2>
  <ul className="list-disc list-inside ml-4">
    <li>The charges are point-like or spherically symmetric.</li>
    <li>The medium between charges is uniform (commonly air or vacuum).</li>
    <li>The charges are stationary (static electric field).</li>
    <li>No other forces (magnetic, gravitational) are affecting the interaction.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-lg">Limitations of Coulomb’s Law</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Not valid for moving charges or in the presence of magnetic fields.</li>
    <li>Fails at quantum scales and for extended charged bodies.</li>
    <li>Does not account for medium permittivity changes unless modified.</li>
    <li>Breaks down near very strong electric fields due to polarization effects.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-lg">Visualization and Intuition</h2>
  <p>
    Imagine charges as spheres that exert forces on each other along the line connecting them.
    Positive-positive and negative-negative pairs repel, while positive-negative pairs attract.
    The closer the charges are, the stronger the interaction.
  </p>
  <p>
    For visualization tools, field line diagrams and vector maps help to understand force directions
    and magnitudes. Arrows get longer as charges get closer or stronger.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Coulomb’s Law in Different Mediums</h2>
  <p>
    In any medium other than vacuum, the effective force changes based on the medium's permittivity:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    F = (1 / (4πε)) × (q1 × q2 / r²)
  </pre>
  <p>
    Where <strong>ε</strong> is the permittivity of the medium. In water, which has high permittivity,
    electrostatic forces are significantly reduced.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Real-World Applications</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Designing electronic circuits and components like capacitors.</li>
    <li>Predicting interactions in chemical bonding and atomic models.</li>
    <li>Electrostatic painting and powder coating processes.</li>
    <li>Particle behavior in accelerators and plasma physics.</li>
    <li>Electrostatic discharge protection in sensitive electronics.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-lg">Common Problems Involving Coulomb’s Law</h2>
  <ol className="list-decimal list-inside ml-4">
    <li>Finding net force on a charge due to multiple other charges using vector addition.</li>
    <li>Calculating equilibrium positions of charges.</li>
    <li>Determining magnitude and direction of force in coordinate systems.</li>
    <li>Combining Coulomb’s Law with Newton’s Second Law to predict motion.</li>
  </ol>
</div>

<div>
  <h2 className="font-semibold text-lg">Tips for Solving Coulomb’s Law Questions</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Always convert microcoulombs or nanocoulombs to coulombs.</li>
    <li>Draw force diagrams and use symmetry wherever possible.</li>
    <li>Use vector resolution for forces not on a straight line.</li>
    <li>Check units consistently; N (Newtons) is the standard unit of force.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-lg">Frequently Asked Questions</h2>
  <p><strong>Q: Can Coulomb’s Law be used in liquids or gases?</strong><br />
  A: Yes, but the permittivity of the medium must be taken into account. For instance, water has a high permittivity, reducing force considerably.</p>

  <p><strong>Q: How does temperature affect electrostatic force?</strong><br />
  A: Indirectly. Temperature affects molecular motion and medium properties, which can change effective permittivity and hence influence the force.</p>

  <p><strong>Q: What if more than two charges are present?</strong><br />
  A: Use the principle of superposition: calculate the force from each pair and add the vectors to get the net force.</p>

  <p><strong>Q: Can we apply Coulomb’s Law in 3D problems?</strong><br />
  A: Yes. Use 3D vector coordinates and apply vector addition for net force calculations.</p>
</div>
<div>
  <h2 className="font-semibold text-lg">Historical Background</h2>
  <p>
    Charles-Augustin de Coulomb was a French physicist who formulated the fundamental law of electrostatics in 1785. 
    Using a torsion balance—an apparatus with a horizontal bar suspended from a wire—he was able to measure tiny electrostatic forces. 
    His meticulous experiments demonstrated that the magnitude of the electrostatic force between two point charges is proportional 
    to the product of the charges and inversely proportional to the square of the distance separating them. Coulomb’s work laid the 
    foundation for electrostatics and influenced later development in electromagnetism by scientists like Gauss, Maxwell, and Faraday.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Unit Analysis</h2>
  <p>
    In SI units, Coulomb’s law uses:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>q1, q2</strong> – Charge in Coulombs (C)</li>
    <li><strong>r</strong> – Distance in meters (m)</li>
    <li><strong>F</strong> – Force in Newtons (N)</li>
  </ul>
  <p>
    Since <code>F = k × q1 × q2 / r²</code>, the units of k must be:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">[k] = N·m²/C²</pre>
  <p>
    This confirms that the electrostatic constant k = 8.988 × 10⁹ N·m²/C² keeps the equation dimensionally consistent.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Dimensional Formula</h2>
  <p>
    Dimensional analysis provides a deeper understanding of the physical nature of the constants involved. 
    The force F has the dimensional formula:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">[F] = M¹L¹T⁻²</pre>
  <p>
    The electrostatic constant k has the dimensional formula:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">[k] = M¹L³T⁻⁴I⁻²</pre>
  <p>
    Where I denotes electric current dimension.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Mathematical Modeling</h2>
  <p>
    Coulomb's Law can be used to model systems with multiple charges. If more than two charges are present, the total force on a particular charge is the vector sum of individual forces from all other charges:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    F⃗_total = Σ F⃗_i = Σ (k × q × qᵢ / rᵢ²) r̂ᵢ
  </pre>
  <p>
    This allows the law to be extended to complex simulations involving charge distributions and molecular interactions.
  </p>
</div>
{/* Extended Educational Content Part 2 */}
<div>
  <h2 className="font-semibold text-lg">Historical Background</h2>
  <p>
    The origin of Coulomb’s Law dates back to the late 18th century, when French physicist Charles-Augustin de Coulomb conducted a series of experiments using a torsion balance.
    His meticulous measurements demonstrated how electrostatic force varies with the amount of charge and the distance between them.
    This discovery laid the foundation for electrostatics and contributed to the development of classical electromagnetism.
  </p>
  <p>
    Coulomb published his results in 1785 in a series of memoirs presented to the French Academy of Sciences.
    Though earlier scientists like Joseph Priestley hinted at similar ideas, it was Coulomb’s methodical approach that formalized the law mathematically.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Mathematical Symmetry in Coulomb’s Law</h2>
  <p>
    Coulomb’s Law is symmetric in the sense that the force exerted by charge q₁ on q₂ is equal in magnitude and opposite in direction to the force exerted by q₂ on q₁.
    This is consistent with Newton’s Third Law of Motion.
  </p>
  <p>
    The mathematical symmetry of the inverse square law is also seen in other physical laws, such as Newton's law of universal gravitation and the intensity of light.
    These laws illustrate the geometrical principle that a quantity emanating from a point source spreads out over a surface area proportional to r².
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Dimensional Analysis</h2>
  <p>
    Coulomb’s Law can be verified dimensionally. The dimensional formula of force (F) is [M L T⁻²].
    The expression <code>(k × q₁ × q₂) / r²</code> should have the same dimension.
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    [F] = [M L T⁻²]  
    [q] = [I T], so [q₁ × q₂] = [I² T²]  
    [k] = N·m²/C² = [M L³ T⁻⁴ I⁻²]  
    {"=>"} (k × q₁ × q₂) = [M L³ T⁻⁴ I⁻²] × [I² T²] = [M L³ T⁻²]  
    Divide by r²: [M L³ T⁻²] / [L²] = [M L T⁻²] ✔️
  </pre>
</div>

<div>
  <h2 className="font-semibold text-lg">Experimental Verification</h2>
  <p>
    Coulomb used a torsion balance to measure the electrostatic force. Two charged spheres were placed near each other and suspended from a thin wire.
    The force between them caused the wire to twist. The angle of twist was proportional to the torque, which in turn gave the force.
    Repeating the experiment with varying distances and charges verified the inverse-square nature of the force.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Medium Permittivity and Relative Permittivity</h2>
  <p>
    When charges are placed in a medium other than vacuum, the force is reduced depending on the permittivity (ε) of that medium.
    The ratio ε₀/ε is called the relative permittivity (or dielectric constant, k<sub>r</sub>) of the medium.
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    F = (1 / (4πε)) × (q₁ × q₂ / r²) = F₀ / k<sub>r</sub>
  </pre>
  <p>
    Materials like rubber, plastic, and water have high relative permittivity, making them good insulators that reduce the effect of electrostatic forces.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Coulomb’s Law in Vector Form (Detailed)</h2>
  <p>
    To compute the force in a coordinate system, use the vector form of the law:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    F⃗ = (k × q₁ × q₂ / r²) × r̂  
    where r̂ = (r⃗) / |r⃗|
  </pre>
  <p>
    If q₁ is at position A (x₁, y₁, z₁) and q₂ at B (x₂, y₂, z₂), then:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    r⃗ = r₂ - r₁ = (x₂ - x₁)î + (y₂ - y₁)ĵ + (z₂ - z₁)k̂  
    |r⃗| = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]
  </pre>
  <p>
    Plugging these into the formula gives the direction and magnitude of force.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Common Misconceptions</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Thinking force is always attractive — it's repulsive for like charges.</li>
    <li>Assuming it applies to charges in motion — it is valid only for static charges.</li>
    <li>Believing the force depends on mass — it depends solely on charge and distance.</li>
    <li>Ignoring medium effects — permittivity significantly alters force magnitude.</li>
    <li>Overlooking the vector nature of force — direction matters, especially in 2D or 3D problems.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-lg">Energy in Electrostatics</h2>
  <p>
    The work done in bringing two charges from infinity to a finite separation is stored as electrostatic potential energy:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    U = k × (q₁ × q₂) / r
  </pre>
  <p>
    This energy is positive for like charges (repulsive work done) and negative for unlike charges (work released due to attraction).
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Applications in Chemistry</h2>
  <p>
    Coulomb’s Law explains the stability of atoms and molecules. The attractive force between negatively charged electrons and positively charged protons
    is central to atomic structure. It also helps predict molecular shapes, bond strengths, ionization energy, and electronegativity trends.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Electric Potential from a Point Charge</h2>
  <p>
    The potential (V) at a distance r from a point charge q is given by:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black">
    V = k × q / r
  </pre>
  <p>
    Electric potential is a scalar quantity and is especially useful in solving problems involving multiple charges using potential superposition.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Simulations and Visual Tools</h2>
  <p>
    Simulations of electric fields and forces using platforms like PhET Interactive Simulations (University of Colorado Boulder)
    help students visualize vector forces, field lines, and the superposition principle.
  </p>
  <p>
    You can plot force magnitude vs. distance or charge to explore the inverse-square nature and nonlinear behavior.
  </p>
</div>

<div>
  <h2 className="font-semibold text-lg">Further Reading and Resources</h2>
  <ul className="list-disc list-inside ml-4">
    <li>"Fundamentals of Physics" by Halliday, Resnick & Walker – Electrostatics chapters</li>
    <li>MIT OpenCourseWare – Physics I: Classical Mechanics</li>
    <li>HyperPhysics – Coulomb’s Law and Electric Field Modules</li>
    <li>Khan Academy – Electrostatics Course</li>
    <li>IEEE Xplore – Research papers on electrostatics and sensor applications</li>
  </ul>
</div>

        </CardContent>
      </Card>
    </>
  );
};

export default CoulombsLaw;
