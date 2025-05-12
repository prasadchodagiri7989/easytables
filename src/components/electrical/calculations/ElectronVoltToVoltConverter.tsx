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

const ElectronVoltToVoltConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [charge, setCharge] = useState<number>(0);
  const [voltage, setVoltage] = useState<number | string>('—');
  const [method, setMethod] = useState<string>('elementaryCharge');

  const elementaryCharge = 1.602e-19;

  const convertToVoltageWithElementaryCharge = (energy: number, charge: number) => {
    return energy / charge;
  };

  const convertToVoltageWithCoulombs = (energy: number, charge: number) => {
    return (elementaryCharge * energy) / charge;
  };

  const handleConvert = () => {
    if (charge === 0) {
      setVoltage("Charge cannot be zero");
      return;
    }
    let result = 0;
    if (method === 'elementaryCharge') {
      result = convertToVoltageWithElementaryCharge(energy, charge);
    } else {
      result = convertToVoltageWithCoulombs(energy, charge);
    }
    setVoltage(result.toExponential(5));
  };

  const examples = [
    {
      energy: 800,
      charge: 40,
      method: 'elementaryCharge',
      expectedResult: 20,
      description: 'Using 800 eV energy and 40 elementary charges',
    },
    {
      energy: 800,
      charge: 2,
      method: 'coulombs',
      expectedResult: 6.408e-17,
      description: 'Using 800 eV energy and 2 Coulombs of charge',
    },
    {
      energy: 1000,
      charge: 10,
      method: 'elementaryCharge',
      expectedResult: 100,
      description: 'Using 1000 eV energy and 10 elementary charges',
    },
    {
      energy: 1500,
      charge: 1,
      method: 'coulombs',
      expectedResult: 2.403e-16,
      description: 'Using 1500 eV energy and 1 Coulomb of charge',
    },
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
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Electron-Volt to Volt Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Electron-Volt to Volt Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            This tool converts energy in electron-volts (eV) into volts (V) using either the elementary charge or actual charge in coulombs.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy (eV):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Charge:</label>
              <input
                type="number"
                value={charge}
                onChange={(e) => setCharge(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Method:</label>
              <select
                onChange={(e) => setMethod(e.target.value)}
                value={method}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="elementaryCharge">Using Elementary Charge (e)</option>
                <option value="coulombs">Using Coulombs (C)</option>
              </select>
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{voltage} V</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} eV, Charge: {example.charge} C</p>
                    <p>Expected Voltage: {example.expectedResult} V</p>
                    <p>Method: {example.method === 'elementaryCharge' ? 'Elementary Charge' : 'Coulombs'}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formulae:</h2>
              <p>
                <strong>1. Using Elementary Charge (e):</strong><br />
                V = eV / e<br />
                Where e = 1.602 × 10⁻¹⁹ C
              </p>
              <p className="mt-2">
                <strong>2. Using Coulombs (C):</strong><br />
                V = (1.602 × 10⁻¹⁹ × eV) / C
              </p>
            </div>
          </div>
          {/* Extra Content Section: About eV to V Conversion */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Electron Volts (eV) to Volts (V)</h2>
            <p>
              The **electron volt (eV)** is a unit of energy commonly used in atomic, nuclear, and particle physics. It represents the amount of energy gained or lost by an electron moving through an electric potential difference of 1 volt (V). Understanding the relationship between eV and V is essential for describing the energy levels of particles and devices, especially in fields like semiconductor technology and electronics.
            </p>

            <h3 className="font-semibold text-base mt-4 mb-2">What is an Electron Volt (eV)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **eV (Electron Volt)**: A unit of energy equal to **1.602 × 10⁻¹⁹ joules (J)**. It is ideal for describing energy in atomic and particle-level phenomena.
              </li>
              <li>
                It is particularly useful in physics because it represents the energy an electron gains or loses when moving through a potential difference of 1 volt.
              </li>
              <li>
                **Formula**: 1 eV = 1.602 × 10⁻¹⁹ joules (J).
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">What is a Volt (V)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **V (Volt)**: A unit of electric potential difference, indicating how much energy a charged particle gains or loses when moving between two points.
              </li>
              <li>
                **Formula**: 1 V = 1 joule per coulomb (J/C). It is used to measure the potential difference in electrical circuits and devices.
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">Relationship Between eV and V</h3>
            <p>
              While **eV** is a unit of energy and **V** is a unit of electric potential, they are connected through the charge of an electron. Specifically, 1 eV is defined as the energy gained by an electron when it moves through a potential difference of 1 volt.
            </p>
            <p>
              This relationship can be expressed as:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Energy (eV) = Charge (C) × Voltage (V)**
              </li>
              <li>
                For a single electron, the charge is **1.602 × 10⁻¹⁹ C**, so the energy gained when moving through a potential difference of 1 volt is **1 eV**.
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">Converting eV to V</h3>
            <p>
              To convert from eV to V, we use the relationship between energy and voltage. Since **1 eV is the energy gained by an electron moving through a potential difference of 1 V**, the conversion is relatively straightforward.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Formula**: eV = Charge (C) × Voltage (V)
              </li>
              <li>
                For a single electron, the energy in eV is numerically equal to the voltage in V.
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">Practical Examples of eV to V Conversion</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Example 1**: If an electron moves through a potential difference of **5 volts**, it gains an energy of **5 eV**.
              </li>
              <li>
                **Example 2**: To overcome a potential barrier requiring **10 eV** of energy, the voltage required is **10 V** for a single electron.
              </li>
              <li>
                **Example 3**: In a semiconductor, if the energy gap between conduction and valence bands is **1.1 eV**, this is equivalent to a potential difference of **1.1 V** for a single electron.
              </li>
            </ul>
          </div>
          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Electron Volts (eV) to Volts (V)</h2>
  <p>
    The **electron volt (eV)** is a unit of energy commonly used in atomic, nuclear, and particle physics. It represents the amount of energy gained or lost by an electron moving through an electric potential difference of 1 volt (V). Understanding the relationship between eV and V is essential for describing the energy levels of particles and devices, especially in fields like semiconductor technology and electronics.
  </p>

  <h3 className="font-semibold text-base mt-4 mb-2">What is an Electron Volt (eV)?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **eV (Electron Volt)**: A unit of energy equal to **1.602 × 10⁻¹⁹ joules (J)**. It is ideal for describing energy in atomic and particle-level phenomena.
    </li>
    <li>
      It is particularly useful in physics because it represents the energy an electron gains or loses when moving through a potential difference of 1 volt.
    </li>
    <li>
      **Formula**: 1 eV = 1.602 × 10⁻¹⁹ joules (J).
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Volt (V)?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **V (Volt)**: A unit of electric potential difference, indicating how much energy a charged particle gains or loses when moving between two points.
    </li>
    <li>
      **Formula**: 1 V = 1 joule per coulomb (J/C). It is used to measure the potential difference in electrical circuits and devices.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Relationship Between eV and V</h3>
  <p>
    While **eV** is a unit of energy and **V** is a unit of electric potential, they are connected through the charge of an electron. Specifically, 1 eV is defined as the energy gained by an electron when it moves through a potential difference of 1 volt.
  </p>
  <p>
    This relationship can be expressed as:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Energy (eV) = Charge (C) × Voltage (V)**
    </li>
    <li>
      For a single electron, the charge is **1.602 × 10⁻¹⁹ C**, so the energy gained when moving through a potential difference of 1 volt is **1 eV**.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Converting eV to V</h3>
  <p>
    To convert from eV to V, we use the relationship between energy and voltage. Since **1 eV is the energy gained by an electron moving through a potential difference of 1 V**, the conversion is relatively straightforward.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Formula**: eV = Charge (C) × Voltage (V)
    </li>
    <li>
      For a single electron, the energy in eV is numerically equal to the voltage in V.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Practical Examples of eV to V Conversion</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Example 1**: If an electron moves through a potential difference of **5 volts**, it gains an energy of **5 eV**.
    </li>
    <li>
      **Example 2**: To overcome a potential barrier requiring **10 eV** of energy, the voltage required is **10 V** for a single electron.
    </li>
    <li>
      **Example 3**: In a semiconductor, if the energy gap between conduction and valence bands is **1.1 eV**, this is equivalent to a potential difference of **1.1 V** for a single electron.
    </li>
  </ul>
  <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Further Applications of eV and V in Technology</h2>
  <p>
    The understanding of **electron volts (eV)** and **volts (V)** extends far beyond theoretical physics. Their practical applications are essential in various fields, particularly in technologies like semiconductors, materials science, and particle accelerators. Let's explore how these units play a crucial role in these advanced technological areas.
  </p>

  <h3 className="font-semibold text-base mt-4 mb-2">1. Semiconductors and Electronics</h3>
  <p>
    In electronics, **eV** is frequently used to describe the energy levels of electrons in semiconductors. The concept of electron volts is fundamental when designing and understanding components like diodes, transistors, and integrated circuits.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Energy Bands**: The energy levels of electrons in a material are divided into two bands— the valence band and the conduction band. The energy gap between these two bands, known as the **bandgap**, is typically measured in eV.
    </li>
    <li>
      For example, the **bandgap of silicon** is approximately **1.1 eV**, meaning that electrons in silicon need at least **1.1 eV** of energy to jump from the valence band to the conduction band and become free to conduct electricity.
    </li>
    <li>
      This is why the concept of eV is so crucial when determining the behavior of semiconductors, particularly in the design of electronic devices like transistors, solar cells, and light-emitting diodes (LEDs).
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">2. Particle Accelerators</h3>
  <p>
    Particle accelerators, such as those used in physics experiments or medical treatments, rely heavily on the concepts of eV and V. Particle accelerators use high voltages to accelerate charged particles (like protons and electrons) to very high speeds.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      In these devices, particles are often accelerated across potential differences of millions of volts (MV), and their energy is measured in electron volts (eV), typically in the mega (MeV), giga (GeV), or tera (TeV) ranges.
    </li>
    <li>
      For example, in the **Large Hadron Collider (LHC)**, particles are accelerated to energies of up to **7 TeV** (7 trillion electron volts), allowing scientists to study particle interactions at an unprecedented level.
    </li>
    <li>
      The relationship between eV and V becomes essential when determining the energy imparted to particles in these accelerators, which directly influences the outcome of experiments involving high-energy collisions.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">3. Solar Cells and Photovoltaics</h3>
  <p>
    The performance of solar cells and photovoltaic materials is also linked to the concept of eV. When light strikes a solar cell, it excites electrons, enabling them to jump from the valence band to the conduction band, thus generating electrical current.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      The energy required for an electron to move into the conduction band, known as the **bandgap energy**, is measured in eV. The bandgap energy varies depending on the material used for the solar cell.
    </li>
    <li>
      For example, the **bandgap of silicon** is about **1.1 eV**, while for **gallium arsenide** it is about **1.4 eV**. These energy differences directly affect the efficiency of the solar cells in converting sunlight into electricity.
    </li>
    <li>
      Understanding eV helps researchers develop new materials and improve solar cell efficiency, which is essential for advancing renewable energy technologies.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">4. X-ray and Medical Imaging</h3>
  <p>
    **X-rays** are widely used in medical imaging, and the energy of X-ray photons is typically measured in eV. The voltage applied across the X-ray tube determines the energy of the emitted X-rays, which is crucial for their ability to penetrate different materials in the body.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      The energy of X-rays used in medical imaging typically ranges from **20 keV to 150 keV** (kiloelectron volts), with higher energy X-rays being able to penetrate more tissue.
    </li>
    <li>
      In the **X-ray tube**, a high voltage (usually between **20 kV and 150 kV**) is applied to accelerate electrons toward a target material, and when the electrons collide with the target, they produce X-rays with energy corresponding to the applied voltage.
    </li>
    <li>
      Understanding this relationship between eV and V is crucial for optimizing the X-ray imaging process, ensuring the proper energy levels for clear imaging without unnecessary exposure to radiation.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">5. Quantum Computing</h3>
  <p>
    The emerging field of **quantum computing** also uses eV and V in its fundamental operations. Quantum bits, or qubits, are used in quantum computers, and their energy states are often described in terms of electron volts.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      The **energy levels** of a qubit are crucial for quantum operations like superposition and entanglement, which are foundational to quantum computing.
    </li>
    <li>
      In superconducting qubits, the energy difference between two states is typically on the order of **1 to 10 GHz**, corresponding to a few **eV**. This makes understanding energy transitions in terms of eV vital for building and operating quantum computers.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Conclusion</h3>
  <p>
    The application of electron volts (eV) and volts (V) goes far beyond basic energy measurements in physics. Their importance spans across advanced technologies in **electronics**, **materials science**, **medical imaging**, **solar energy**, **particle physics**, and **quantum computing**. Whether you are designing the next generation of semiconductors, studying the fundamental particles in the universe, or working on groundbreaking medical technologies, a deep understanding of these units and their interrelation is essential.
  </p>
  <p>
    As we continue to push the boundaries of science and technology, the role of **eV** and **V** will only grow more prominent in shaping innovations and discoveries. Understanding how to apply these units in practical scenarios will continue to be crucial for engineers, scientists, and researchers in diverse fields.
  </p>
</div>

</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ElectronVoltToVoltConverter;
