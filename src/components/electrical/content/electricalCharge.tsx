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

const ElectricCharge = () => {
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
                                                        <Link to="/electrical/basic-terms">Basic Electrical terms</Link>
                                                      </BreadcrumbLink>
                                                    </BreadcrumbItem>
                                                    <BreadcrumbSeparator />
                                                    <BreadcrumbItem>
                                                      <BreadcrumbPage>Electrical charge</BreadcrumbPage>
                                                    </BreadcrumbItem>
                                                  </BreadcrumbList>
                                              </Breadcrumb>
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electric Charge</h1>

      <Section title="What is Electric Charge?">
        Electric charge generates an electric field and influences other charges via electric force.
        This force is mutual and acts equally in opposite directions.
      </Section>

      <Section title="Types of Electric Charge">
        <ul className="list-disc list-inside">
          <li>
            <strong>Positive charge (+)</strong>: More protons than electrons (Np &gt; Ne). Attracts negative charges and repels positive ones.
          </li>
          <li>
            <strong>Negative charge (-)</strong>: More electrons than protons (Ne &gt; Np). Attracts positive charges and repels negative ones.
          </li>
        </ul>
      </Section>

      <Section title="Electric Force Direction">
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-400 dark:border-white w-full text-sm">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="border px-2 py-1">q1/q2 charges</th>
                <th className="border px-2 py-1">Force on q1</th>
                <th className="border px-2 py-1">Force on q2</th>
                <th className="border px-2 py-1">Interaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">- / -</td>
                <td className="border px-2 py-1">←⊝</td>
                <td className="border px-2 py-1">⊝→</td>
                <td className="border px-2 py-1">Repulsion</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">+ / +</td>
                <td className="border px-2 py-1">←⊕</td>
                <td className="border px-2 py-1">⊕→</td>
                <td className="border px-2 py-1">Repulsion</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">- / +</td>
                <td className="border px-2 py-1">⊝→</td>
                <td className="border px-2 py-1">←⊕</td>
                <td className="border px-2 py-1">Attraction</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">+ / -</td>
                <td className="border px-2 py-1">⊕→</td>
                <td className="border px-2 py-1">←⊝</td>
                <td className="border px-2 py-1">Attraction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Charge of Elementary Particles">
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-400 dark:border-white w-full text-sm">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="border px-2 py-1">Particle</th>
                <th className="border px-2 py-1">Charge (C)</th>
                <th className="border px-2 py-1">Charge (e)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Electron</td>
                <td className="border px-2 py-1">-1.602 × 10⁻¹⁹ C</td>
                <td className="border px-2 py-1">-e</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Proton</td>
                <td className="border px-2 py-1">1.602 × 10⁻¹⁹ C</td>
                <td className="border px-2 py-1">+e</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Neutron</td>
                <td className="border px-2 py-1">0 C</td>
                <td className="border px-2 py-1">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Coulomb Unit">
        Electric charge is measured in <strong>coulombs (C)</strong>.<br />
        One coulomb equals the charge of approximately 6.242 × 10¹⁸ electrons:
        <Equation>1 C = 6.242 × 10¹⁸ e</Equation>
      </Section>

      <Section title="Electric Charge Calculation">
        For a constant current:
        <Equation>Q = I × t</Equation>
        <ul className="list-disc list-inside">
          <li><strong>Q</strong>: Electric charge (C)</li>
          <li><strong>I</strong>: Current (A)</li>
          <li><strong>t</strong>: Time (s)</li>
        </ul>
        For a time-varying current:
        <Equation>Q(t) = ∫₀ᵗ i(τ) dτ</Equation>
        <ul className="list-disc list-inside">
          <li><strong>i(t)</strong>: Instantaneous current (A)</li>
          <li><strong>t</strong>: Time interval (s)</li>
        </ul>
      </Section>
      <Section title="Electric Field and Electric Potential">
  <p>
    An <strong>electric field</strong> is a region around a charged particle where other charged particles experience a force. The strength and direction of this field are defined by the charge that creates it.
  </p>
  <p>
    The <strong>electric potential</strong> at a point in space is the amount of electric potential energy per unit charge at that point. It is defined as the work done in moving a unit positive charge from infinity to that point.
  </p>
  <Equation>
    E = k × (q / r²)
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>E</strong>: Electric field strength (N/C)</li>
    <li><strong>k</strong>: Coulomb's constant (8.99 × 10⁹ N·m²/C²)</li>
    <li><strong>q</strong>: Charge creating the electric field (C)</li>
    <li><strong>r</strong>: Distance from the charge (m)</li>
  </ul>
  <p>
    Electric potential is related to electric field through the equation:
  </p>
  <Equation>
    V = k × (q / r)
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>V</strong>: Electric potential (V)</li>
    <li><strong>r</strong>: Distance from the charge (m)</li>
  </ul>
</Section>
<Section title="Electric Dipole">
  <p>
    An <strong>electric dipole</strong> consists of two equal and opposite charges separated by a small distance. The dipole moment (p) is a measure of the strength and direction of the dipole.
  </p>
  <Equation>
    p = q × d
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>p</strong>: Dipole moment (C·m)</li>
    <li><strong>q</strong>: Magnitude of the charge (C)</li>
    <li><strong>d</strong>: Separation distance between the charges (m)</li>
  </ul>
  <p>
    The electric field due to an electric dipole at a point on its axis is given by:
  </p>
  <Equation>
    E = (1 / 4πε₀) × (2p / r³)
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>p</strong>: Dipole moment (C·m)</li>
    <li><strong>r</strong>: Distance from the dipole (m)</li>
    <li><strong>ε₀</strong>: Permittivity of free space (8.85 × 10⁻¹² C²/N·m²)</li>
  </ul>
</Section>
<Section title="Conductors and Insulators">
  <p>
    Materials can be classified into conductors and insulators based on their ability to allow the flow of electric charge.
  </p>
  <ul className="list-disc list-inside">
    <li>
      <strong>Conductors</strong>: Materials like metals (e.g., copper, aluminum) that allow free movement of electric charge due to their loose electrons.
    </li>
    <li>
      <strong>Insulators</strong>: Materials like rubber, glass, and plastic that do not allow free movement of electric charge, preventing the flow of electricity.
    </li>
  </ul>
  <p>
    Semiconductors, such as silicon, have properties between those of conductors and insulators. Their conductivity can be controlled by factors such as temperature and doping.
  </p>
</Section>
<Section title="Ohm’s Law">
  <p>
    Ohm's Law relates the voltage (V), current (I), and resistance (R) in a circuit. It is fundamental to understanding the behavior of electric circuits.
  </p>
  <Equation>
    V = I × R
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>V</strong>: Voltage (V)</li>
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>R</strong>: Resistance (Ω)</li>
  </ul>
  <p>
    Ohm’s Law also implies that for a constant resistance, the current is directly proportional to the voltage. This law holds true for most conductive materials at a constant temperature.
  </p>
</Section>
<Section title="Electric Potential Energy">
  <p>
    Electric potential energy is the energy stored in a system of charged particles due to their positions in an electric field. The potential energy between two point charges is given by:
  </p>
  <Equation>
    U = k × (q₁ × q₂) / r
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>U</strong>: Electric potential energy (J)</li>
    <li><strong>k</strong>: Coulomb's constant (8.99 × 10⁹ N·m²/C²)</li>
    <li><strong>q₁, q₂</strong>: Magnitudes of the charges (C)</li>
    <li><strong>r</strong>: Distance between the charges (m)</li>
  </ul>
  <p>
    The electric potential energy can be positive or negative depending on the nature of the interaction between the charges: positive for like charges (repulsion) and negative for opposite charges (attraction).
  </p>
</Section>
<Section title="Capacitors and Electric Charge">
  <p>
    A <strong>capacitor</strong> is an electronic component that stores electric charge and energy in an electric field. Capacitors are widely used in electronic circuits to smooth voltage fluctuations, filter signals, and store energy.
  </p>
  <p>
    The charge (Q) stored in a capacitor is related to its capacitance (C) and the voltage (V) across it by the equation:
  </p>
  <Equation>
    Q = C × V
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>C</strong>: Capacitance (F, farads)</li>
    <li><strong>V</strong>: Voltage across the capacitor (V)</li>
    <li><strong>Q</strong>: Charge stored in the capacitor (C)</li>
  </ul>
  <p>
    The capacitance of a capacitor is determined by the surface area of the plates, the distance between them, and the material (dielectric) placed between the plates.
  </p>
</Section>
<Section title="Electric Charge in Chemical Reactions">
  <p>
    Electric charge plays an essential role in chemical reactions, particularly in redox (reduction-oxidation) reactions. In these reactions, electrons are transferred between molecules or atoms, which results in changes in the oxidation states of elements.
  </p>
  <p>
    For example, during electrolysis, electric current is passed through a liquid (usually an electrolyte), causing ions in the solution to migrate and undergo oxidation and reduction at the electrodes.
  </p>
</Section>
<Section title="Applications of Electric Charge">
  <p>
    Electric charge plays a significant role in many applications, such as in the functioning of electrical circuits, batteries, electrostatic fields, and electronic devices.
  </p>
  <ul className="list-disc list-inside">
    <li>
      <strong>Batteries</strong>: Batteries store electrical charge and release it as current to power devices. The chemical reactions inside the battery involve the transfer of electrons.
    </li>
    <li>
      <strong>Electrostatics</strong>: Electric charge is essential in electrostatic forces, which are responsible for phenomena such as lightning, static cling, and the operation of devices like photocopiers.
    </li>
    <li>
      <strong>Capacitors</strong>: Capacitors store and release electric charge in electronic circuits. They are used to smooth out voltage fluctuations in power supplies and filter signals.
    </li>
    <li>
      <strong>Electromagnetic Devices</strong>: Devices like motors, transformers, and generators work by manipulating the interaction of electric charge and magnetic fields.
    </li>
  </ul>
</Section>

<Section title="Charge Conservation">
  <p>
    The law of conservation of charge states that the total electric charge in an isolated system remains constant. This means that charge can neither be created nor destroyed, but only transferred between objects or particles.
  </p>
  <p>
    For example, when a positively charged object touches a negatively charged one, some of the charge from the negative object will move to the positive object, but the total charge of the system remains the same.
  </p>
  <Equation>
    ΣQ = constant
  </Equation>
  <p>
    Where <strong>ΣQ</strong> represents the sum of all the charges in the system. The law of charge conservation is a fundamental principle in electromagnetism.
  </p>
</Section>

<Section title="Measuring Electric Charge">
  <p>
    Electric charge is typically measured using instruments like an <strong>electrometer</strong> or <strong>charge amplifier</strong>. These devices measure the amount of electric charge in a system based on the electric field or voltage.
  </p>
  <p>
    The <strong>coulombmeter</strong> is a specialized device that directly measures the quantity of electric charge in coulombs. These are useful in laboratory settings, particularly in physics experiments.
  </p>
</Section>

<Section title="Relativity and Electric Charge">
  <p>
    In Einstein’s theory of relativity, the electric charge is invariant under transformations between inertial frames of reference. This means that the charge on a particle does not change when observed from different inertial frames.
  </p>
  <p>
    The relativistic effects of electric charge become significant when particles move at speeds close to the speed of light, leading to relativistic mass increase and time dilation, which affects the behavior of the charges in electromagnetic fields.
  </p>
  <Equation>
    E² = (pc)² + (mc²)²
  </Equation>
  <p>
    Where <strong>E</strong> is the total energy, <strong>p</strong> is the momentum, <strong>m</strong> is the rest mass, and <strong>c</strong> is the speed of light.
  </p>
</Section>

<Section title="Superconductivity and Electric Charge">
  <p>
    Superconductivity is a phenomenon where certain materials, at very low temperatures, exhibit zero electrical resistance. This means that electric charge can flow without any energy loss due to resistance, making it a promising technology for applications like high-efficiency power transmission and magnetic levitation.
  </p>
  <p>
    In a superconductor, electric charge moves in pairs of electrons, called Cooper pairs, which behave as bosons and can move through the material without scattering, thus experiencing no resistance.
  </p>
  <Equation>
    J = σE
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>J</strong>: Current density (A/m²)</li>
    <li><strong>σ</strong>: Conductivity of the material (S/m)</li>
    <li><strong>E</strong>: Electric field (V/m)</li>
  </ul>
</Section>

<Section title="Electrochemistry and Electric Charge">
  <p>
    Electrochemistry studies the relationship between electrical energy and chemical reactions. It involves processes like electrolysis, where electric charge is used to drive chemical reactions, and galvanic cells, where chemical reactions produce electric current.
  </p>
  <p>
    A common example is the operation of a battery, where chemical reactions occur at the electrodes to release or absorb electrons, generating a flow of electric charge.
  </p>
  <Equation>
    E = -ΔG / nF
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>E</strong>: Electromotive force (V)</li>
    <li><strong>ΔG</strong>: Change in Gibbs free energy (J)</li>
    <li><strong>n</strong>: Number of moles of electrons</li>
    <li><strong>F</strong>: Faraday’s constant (96485 C/mol)</li>
  </ul>
</Section>

<Section title="Electric Charge and Magnetism">
  <p>
    Electric charge is closely related to magnetism, as moving electric charges (currents) generate magnetic fields. This is described by Ampère’s Law and is the basis for electromagnetism.
  </p>
  <p>
    When electric charge moves through a conductor, such as a wire, it generates a magnetic field around the wire, which can be used in devices like motors and transformers.
  </p>
  <Equation>
    B = μ₀ × (I / 2πr)
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>B</strong>: Magnetic field strength (T)</li>
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>r</strong>: Radial distance from the wire (m)</li>
    <li><strong>μ₀</strong>: Permeability of free space (4π × 10⁻⁷ T·m/A)</li>
  </ul>
</Section>
<Section title="Electric Charge in Electric Circuits">
  <p>
    Electric charge is central to understanding how electric circuits function. In a closed loop, the movement of charge carriers (usually electrons) creates electric current, which powers devices such as lights, motors, and other electronic components.
  </p>
  <p>
    The behavior of electric charge in a circuit is governed by various principles, including Ohm's Law, Kirchhoff's Laws, and the concept of power dissipation in resistors. A basic understanding of charge flow is essential for troubleshooting circuits and designing effective electrical systems.
  </p>
</Section>

<Section title="Role of Electric Charge in Magnetism">
  <p>
    Electric charge is also fundamental to the phenomenon of magnetism. When an electric charge moves, it generates a magnetic field. This relationship is described by Ampère's Law and is the basis for electromagnetism, which links electricity and magnetism in a unified theory.
  </p>
  <p>
    In addition, electric charges in motion can create forces on other charges, as described by the Lorentz force. This principle is exploited in devices like electromagnets and electric motors, where current-carrying conductors interact with magnetic fields.
  </p>
  <Equation>
    F = q × (E + v × B)
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>F</strong>: Force on the charge (N)</li>
    <li><strong>q</strong>: Charge (C)</li>
    <li><strong>E</strong>: Electric field (N/C)</li>
    <li><strong>v</strong>: Velocity of the charge (m/s)</li>
    <li><strong>B</strong>: Magnetic field (T)</li>
  </ul>
</Section>

<Section title="Electric Charge and Energy Storage">
  <p>
    In many applications, electric charge is stored for later use. The most common example is a battery, which stores charge chemically and releases it as electrical energy when connected to a circuit. Capacitors, as mentioned earlier, also store charge in an electric field and can discharge quickly to provide power to devices.
  </p>
  <p>
    The energy stored in a capacitor is given by:
  </p>
  <Equation>
    U = ½ × C × V²
  </Equation>
  <ul className="list-disc list-inside">
    <li><strong>U</strong>: Energy stored in the capacitor (J)</li>
    <li><strong>C</strong>: Capacitance (F)</li>
    <li><strong>V</strong>: Voltage across the capacitor (V)</li>
  </ul>
  <p>
    This equation highlights that a higher voltage and capacitance result in more stored energy. Capacitors are essential in filtering applications and providing temporary power in circuits.
  </p>
</Section>

<Section title="Electric Charge in Semiconductor Devices">
  <p>
    In semiconductor materials, electric charge plays a crucial role in the functioning of devices such as diodes, transistors, and integrated circuits. Semiconductors like silicon allow for the controlled flow of charge carriers (electrons and holes) through a material when external voltages are applied.
  </p>
  <p>
    The properties of semiconductor materials can be modified through processes like doping, where impurities are introduced to alter the charge carrier concentration. This control is fundamental to the operation of modern electronics, including computers, mobile devices, and other high-tech equipment.
  </p>
</Section>

<Section title="Applications of Electric Charge in Industry">
  <p>
    Electric charge has widespread applications in various industries. From power generation to communications, understanding charge flow is crucial for designing efficient systems. Below are some key applications:
  </p>
  <ul className="list-disc list-inside">
    <li>
      <strong>Power Generation</strong>: Electric charges are manipulated in generators to produce electrical power for homes and industries.
    </li>
    <li>
      <strong>Electronics</strong>: Transistors and diodes control the flow of electric charge, enabling the functionality of modern electronic devices.
    </li>
    <li>
      <strong>Electroplating</strong>: Electric charge is used to deposit metal layers onto objects through an electrolytic process.
    </li>
    <li>
      <strong>Communication</strong>: Electric charge plays a vital role in signal transmission, as seen in radio waves, fiber optics, and wireless technologies.
    </li>
  </ul>
</Section>

<Section title="Safety Precautions with Electric Charge">
  <p>
    Handling electric charge and electrical systems requires safety precautions to avoid harm. Electric charge can cause burns, electrical shock, or even fatal injuries if not handled properly. Below are some important safety tips:
  </p>
  <ul className="list-disc list-inside">
    <li>
      Always turn off power sources before working on electrical systems.
    </li>
    <li>
      Use insulated tools and wear protective gear (e.g., rubber gloves) when dealing with electrical circuits.
    </li>
    <li>
      Ensure circuits are grounded to prevent accidental electric shock.
    </li>
    <li>
      Be aware of the dangers of static electricity, which can damage sensitive electronic components.
    </li>
  </ul>
</Section>

<Section title="Historical Development of Electric Charge Concept">
  <p>
    The concept of electric charge has evolved over centuries, with contributions from many scientists. Early discoveries by Benjamin Franklin and Charles-Augustin de Coulomb laid the groundwork for understanding electric force and charge interactions.
  </p>
  <p>
    Coulomb's Law, formulated by Charles Coulomb in 1785, was a pivotal development, quantifying the force between two charges. Later, the discovery of the electron by J.J. Thomson in 1897 expanded the understanding of charge at the atomic level, leading to the development of modern theories in electromagnetism.
  </p>
</Section>


    </div>
    </>
  );
};

export default ElectricCharge;
