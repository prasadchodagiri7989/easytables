import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const VoltsToEVConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default 1V
  const [electronVolts, setElectronVolts] = useState<number | string>('—');

  // Function to calculate electronvolts
  const calculateEV = (volts: number): number => {
    return volts / (1.60218 * Math.pow(10, -19)); // Formula to convert Volts to eV
  };

  const handleConvert = () => {
    const result = calculateEV(volts);
    setElectronVolts(result);
  };

  const examples = [
    { volts: 1, expectedResult: 6.242 * Math.pow(10, 18), description: '1 Volt' },
    { volts: 5, expectedResult: 3.121 * Math.pow(10, 19), description: '5 Volts' },
    { volts: 0.1, expectedResult: 6.242 * Math.pow(10, 17), description: '0.1 Volt' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
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
              <Link to="/physics-conversions">Physics Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Volts to Electronvolts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Electronvolts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage in volts (V) to energy in electronvolts (eV) using a simple formula.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{electronVolts} eV</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Voltage: {example.volts} V</p>
                    <p>Converted Energy: {example.expectedResult} eV</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E<sub>eV</sub> = V / (1.60218 × 10<sup>-19</sup>)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>E<sub>eV</sub></strong>: Energy in electronvolts (eV)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts to electronvolts is based on the formula:
                <br />
                - Energy (eV) is equal to voltage (V) divided by the constant \( 1.60218 \times 10^{-19} \).
                <br />
                - This conversion is essential in particle physics and semiconductor studies to express small amounts of energy.
              </p>
            </div>
          </div>
          <div>
    <h2 className="font-semibold text-base mt-6 mb-2">What is an Electronvolt (eV)?</h2>
    <p>
      An electronvolt (eV) is a unit of energy commonly used in the fields of atomic and particle physics. It represents the amount of kinetic energy gained or lost by an electron when it is accelerated through an electric potential difference of one volt. This unit is particularly useful for dealing with very small energies, such as those found in atomic and subatomic processes.
    </p>
    <p>
      The electronvolt is often used to describe energies in the range of atomic interactions, where traditional units like joules become less practical due to their large scale. One electronvolt is equivalent to \( 1.60218 \times 10^{-19} \) joules.
    </p>
  </div>

  {/* Practical Use Cases */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Practical Applications of eV</h2>
    <p>Electronvolts play a crucial role in several scientific fields. Some practical applications include:</p>
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Particle Accelerators:</strong> Particle accelerators, such as those used in high-energy physics research (e.g., the Large Hadron Collider), often use electronvolts to describe the energy of particles being accelerated to high speeds.
      </li>
      <li>
        <strong>Semiconductors:</strong> In electronics, especially in semiconductors, the energy of electrons and holes (charge carriers) is typically measured in electronvolts to describe properties like band gaps and conductivity.
      </li>
      <li>
        <strong>Quantum Mechanics:</strong> In quantum mechanics, the energy levels of electrons in atoms and molecules are usually expressed in electronvolts. This unit makes it easier to understand phenomena like electron transitions, which emit or absorb energy.
      </li>
      <li>
        <strong>Photon Energy:</strong> The energy of photons (light particles) is also often described in electronvolts, especially in areas like optical physics and spectroscopy.
      </li>
    </ul>
  </div>

  {/* Advanced Formula Explanation */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Advanced Formula Explanation</h2>
    <p>
      The basic formula to convert volts to electronvolts is derived from the definition of an electronvolt. However, in more advanced scenarios, this formula can be expanded or adapted based on additional factors. For example:
    </p>
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Energy in Non-Ideal Conditions:</strong> In real-world applications, factors such as resistance, capacitance, and environmental conditions can affect the energy conversion. For example, in a capacitor, the energy stored depends on the capacitance and voltage:
        <br />
        <strong>E = ½ × C × V²</strong>
      </li>
      <li>
        <strong>Energy of a Single Electron in a Field:</strong> In some advanced systems, the energy conversion might involve a field of electrons, where the energy of each electron is modified by external factors such as magnetic fields or temperature. This is seen in applications like thermionic emission or the photoelectric effect.
      </li>
    </ul>
  </div>

  {/* Energy Conversion in Different Units */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Conversion in Other Units</h2>
    <p>While electronvolts are most commonly used in atomic and subatomic physics, it is often necessary to convert to other units, such as joules (J), calories (cal), or kilojoules (kJ). Here's a look at some conversions:</p>
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Electronvolts to Joules:</strong> As mentioned, the conversion between electronvolts and joules is as follows:
        <br />
        <strong>1 eV = 1.60218 × 10⁻¹⁹ J</strong>
        <p>Electronvolts are typically used in atomic-scale energies, whereas joules are the SI unit for energy in macroscopic systems.</p>
      </li>
      <li>
        <strong>Electronvolts to Kilojoules:</strong> Since kilojoules represent much larger amounts of energy, we can convert electronvolts to kilojoules:
        <br />
        <strong>1 eV = 1.60218 × 10⁻²² kJ</strong>
      </li>
      <li>
        <strong>Electronvolts to Calories:</strong> Caloric energy is often used to measure energy in food. The conversion is as follows:
        <br />
        <strong>1 eV = 3.8 × 10⁻²² cal</strong>
      </li>
    </ul>
  </div>

  {/* FAQs */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQs)</h2>
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Why are electronvolts used instead of joules in particle physics?</strong>
        <p>Electronvolts are more practical for describing energies at the atomic and subatomic scales. They provide a more manageable numerical value for small energies, as opposed to joules, which would be cumbersome at these scales.</p>
      </li>

      <li>
        <strong>Can I convert electronvolts to volts?</strong>
        <p>Yes, you can convert energy in electronvolts to voltage using the formula \(V = E \times (1.60218 \times 10^{-19})\), where \(E\) is the energy in electronvolts. However, keep in mind that voltage is a potential difference, not a direct energy value.</p>
      </li>

      <li>
        <strong>What are some real-world examples of electronvolts in action?</strong>
        <p>Electronvolts are used in various technologies such as the design of semiconductors (e.g., transistors and diodes), detectors in particle physics, and materials science to study electron interactions.</p>
      </li>
    </ul>
  </div>

  {/* Conclusion */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
    <p>
      The conversion from volts to electronvolts is an essential calculation in fields like physics, materials science, and electronics. By understanding this conversion, you can gain insights into the energy of particles, electronic devices, and many other scientific phenomena. With the formula provided, this tool can help you easily convert volts to electronvolts and apply this knowledge to a variety of contexts.
    </p>
  </div>
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">What are Volts?</h2>
    <p>
      Voltage, measured in volts (V), is the difference in electric potential between two points in a circuit. It is what "pushes" electric charge through a conductor, like a wire. Voltage is crucial for driving current through electrical components, such as resistors, capacitors, and transistors.
    </p>
    <p>
      One volt is defined as the amount of potential energy needed to move one coulomb of charge through a potential difference of one joule. The relationship between voltage, current, and resistance is governed by Ohm's Law, which states that:
      <br />
      <strong>V = I × R</strong>
      <br />
      Where:
      <ul className="ml-4 list-disc list-inside">
        <li><strong>V</strong>: Voltage in volts (V)</li>
        <li><strong>I</strong>: Current in amperes (A)</li>
        <li><strong>R</strong>: Resistance in ohms (Ω)</li>
      </ul>
    </p>
  </div>

  {/* The Relation Between Electronvolts and Energy */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Electronvolts and Energy</h2>
    <p>
      The energy of a particle or system is often measured in electronvolts (eV) in atomic physics. An electronvolt represents the energy gained or lost when an electron moves through a potential difference of one volt. In this sense, electronvolts directly measure the energy associated with the motion of electrons.
    </p>
    <p>
      The conversion from volts to electronvolts helps quantify the energy of electrons in a system, such as in the case of an electric field, a particle accelerator, or when analyzing the behavior of electrons in atomic and molecular systems.
    </p>
  </div>

  {/* Understanding Potential Difference in Context */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">What is Potential Difference?</h2>
    <p>
      The term "potential difference" refers to the difference in electric potential between two points in a circuit or field. This difference determines the amount of energy available to move charged particles. The higher the voltage, the more energy is transferred to electrons, allowing them to move more easily through the circuit or material.
    </p>
    <p>
      In terms of particle physics, the potential difference across an electric field is often the driving force behind the acceleration of charged particles, which are then studied to better understand atomic and subatomic phenomena.
    </p>
  </div>

  {/* Electronvolt Conversion in Different Contexts */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Electronvolt Conversion in Different Contexts</h2>
    <p>
      The unit of electronvolts is useful in various contexts, and the exact method of conversion may vary depending on the application. Here are a few contexts in which the conversion from volts to electronvolts becomes crucial:
    </p>
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Semiconductor Physics:</strong> The energy required to free an electron from an atom in a material (called the band gap) is often measured in electronvolts. This value helps in determining the properties of semiconductors used in electronic devices like diodes, transistors, and solar cells.
      </li>
      <li>
        <strong>Particle Accelerators:</strong> In particle accelerators, charged particles are accelerated through a potential difference. The energy of these accelerated particles is often expressed in electronvolts, making it easier to calculate and analyze the results of high-energy collisions in experimental setups.
      </li>
      <li>
        <strong>Photoelectric Effect:</strong> In the photoelectric effect, electrons are emitted from a material when it absorbs light. The energy of the emitted electrons is described in terms of electronvolts, which is useful for determining the work function of materials.
      </li>
    </ul>
  </div>

  {/* Energy in Atomic Transitions */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Electronvolts in Atomic Transitions</h2>
    <p>
      In atomic physics, the energy levels of electrons in atoms or ions are quantized. The difference in energy between two levels is often expressed in electronvolts. For example, when an electron jumps from one energy level to another within an atom, it either absorbs or emits a photon with energy in the range of electronvolts.
    </p>
    <p>
      The spectral lines emitted or absorbed during these transitions correspond to specific energy values and are crucial for understanding atomic structure and chemical behavior. This concept is key in applications such as spectroscopy and fluorescence microscopy.
    </p>
  </div>

  {/* Energy Loss and Gain in Electrical Components */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Loss and Gain in Electrical Components</h2>
    <p>
      Energy loss and gain are important considerations in electrical systems. The amount of energy lost or gained by an electron moving through a material can be calculated by converting the applied voltage to electronvolts. Here's how energy can be gained or lost:
    </p>
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Resistors:</strong> When electrons flow through a resistor, energy is dissipated as heat due to resistance. The power dissipated is given by <strong>P = V² / R</strong>, where <strong>P</strong> is the power, <strong>V</strong> is the voltage, and <strong>R</strong> is the resistance.
      </li>
      <li>
        <strong>Capacitors:</strong> Capacitors store energy in the form of an electric field. The energy stored is calculated as <strong>E = ½ × C × V²</strong>, where <strong>E</strong> is the energy, <strong>C</strong> is the capacitance, and <strong>V</strong> is the voltage across the capacitor.
      </li>
      <li>
        <strong>Inductors:</strong> Inductors store energy in a magnetic field. The energy stored in an inductor is given by <strong>E = ½ × L × I²</strong>, where <strong>L</strong> is the inductance and <strong>I</strong> is the current through the inductor.
      </li>
    </ul>
  </div>

  {/* More Conversion Examples */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">More Examples of Volts to Electronvolts Conversion</h2>
    <p>Here are additional examples to help understand the conversion:</p>
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>10 Volts:</strong> A 10V potential difference would correspond to an energy of approximately <strong>6.242 × 10<sup>19</sup> eV</strong>.
      </li>
      <li>
        <strong>50 Volts:</strong> A 50V potential difference would correspond to an energy of approximately <strong>3.121 × 10<sup>20</sup> eV</strong>.
      </li>
      <li>
        <strong>0.01 Volts:</strong> A very small voltage of 0.01V corresponds to an energy of approximately <strong>6.242 × 10<sup>16</sup> eV</strong>.
      </li>
    </ul>
  </div>

  {/* Conclusion (Extended) */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conclusion (Extended)</h2>
    <p>
      The ability to convert volts to electronvolts is invaluable in many scientific and engineering fields. From understanding atomic transitions in quantum mechanics to analyzing high-energy particles in accelerators, electronvolts provide a practical and manageable unit for describing microscopic energies.
    </p>
    <p>
      Whether you're working in semiconductor physics, quantum mechanics, or electrical engineering, knowing how to convert voltage to electronvolts helps bridge the gap between macroscopic electrical circuits and the atomic-scale interactions that govern them.
    </p>
    <p>
      Use this converter as a tool to explore the vast world of energy at the atomic and subatomic levels, and gain a deeper understanding of how energy behaves in various systems.
    </p>
  </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToEVConverter;
