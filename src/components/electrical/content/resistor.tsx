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
    <h2 className="text-2xl font-semibold mb-2">Resistor Tolerance and Accuracy</h2>
      <p className="mb-4">
        Resistor tolerance indicates how much a resistor's actual resistance can vary from its nominal value, expressed as a percentage. For example, a 1kΩ resistor with ±5% tolerance could have an actual resistance between 950Ω and 1050Ω. Common tolerances include ±1%, ±5%, and ±10%. Precision applications may use 0.1% or even 0.01% tolerance resistors.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Power Rating of Resistors</h2>
      <p className="mb-4">
        Resistors dissipate power as heat. If the power (in watts) exceeds the rated power of the resistor, it can overheat, fail, or damage nearby components. Standard resistor power ratings include 1/8W, 1/4W, 1/2W, 1W, 2W, and higher. Always choose a resistor with a power rating safely above the expected dissipation.
      </p>
      <p className="mb-6">
        For example, a 1kΩ resistor with 10V across it will dissipate:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-6 dark:text-black">
        P = V² / R = 10² / 1000 = 0.1W
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Thermal Effects on Resistance</h2>
      <p className="mb-4">
        Most resistors have a temperature coefficient (TC), which measures how resistance changes with temperature. A positive TC means resistance increases with temperature. This effect is usually minor in general-purpose resistors but must be accounted for in precision circuits.
      </p>
      <p className="mb-6">
        Metal film resistors typically have a lower TC than carbon film resistors, making them more stable across temperature changes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Resistor Failure Modes</h2>
      <p className="mb-4">
        Common resistor failure modes include open circuits, where the resistor no longer conducts, and drift, where the resistance value gradually changes. Causes include overvoltage, overheating, mechanical stress, and aging. In high-reliability systems, resistors with better tolerance, temperature stability, and surge handling are preferred.
      </p>
      <p className="mb-6">
        Flameproof resistors are available for circuits where resistor failure could cause fire hazards. These are designed to contain and suppress ignition in case of catastrophic failure.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Resistors in Filters and Signal Processing</h2>
      <p className="mb-4">
        Resistors are essential in analog filter design. In low-pass and high-pass filters, they combine with capacitors (RC circuits) to determine cutoff frequency:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        f<sub>c</sub> = 1 / (2πRC)
      </pre>
      <p className="mb-6">
        In audio and signal processing, resistors also influence gain, impedance matching, and noise levels in amplifiers and mixers.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Voltage Divider Circuits</h2>
      <p className="mb-4">
        One of the most common uses of resistors is in voltage divider circuits. Two resistors in series can scale down a voltage:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        V<sub>out</sub> = V<sub>in</sub> × (R₂ / (R₁ + R₂))
      </pre>
      <p className="mb-6">
        Voltage dividers are useful for biasing transistors, interfacing with analog sensors, or converting logic levels between systems.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Surface Mount vs. Through-Hole Resistors</h2>
      <p className="mb-4">
        Surface Mount Technology (SMT) resistors are compact and ideal for automated assembly. Through-hole resistors are larger and better for prototyping or power applications. SMT resistors are labeled using a three- or four-digit code indicating resistance value, such as "472" for 4.7kΩ.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Resistor Networks and Arrays</h2>
      <p className="mb-4">
        Resistor networks package multiple resistors into a single component. They’re often used for pull-up/down arrays or digital bus termination. Common formats include SIP (single in-line package) and DIP (dual in-line package). Using a network simplifies PCB layout and improves matching between resistors.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Real-World Applications of Resistors</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Limiting current to LEDs to prevent overdrive</li>
        <li>Setting bias in transistor amplifier circuits</li>
        <li>Creating time delays in RC timers (e.g., 555 circuits)</li>
        <li>Balancing bridge circuits in sensors like strain gauges</li>
        <li>Voltage sensing for ADCs in microcontrollers</li>
        <li>Decoupling signal lines in logic circuits</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Choosing the Right Resistor</h2>
      <p className="mb-4">
        When selecting a resistor, consider the following:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Resistance value (ohms)</li>
        <li>Tolerance (accuracy)</li>
        <li>Power rating (watts)</li>
        <li>Material type (carbon, metal film, wire-wound)</li>
        <li>Physical size and package type</li>
        <li>Temperature coefficient and reliability grade</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
      <p className="mb-6">
        Though resistors are simple components, their impact on circuit behavior is profound. From controlling current to shaping signals, their role is foundational in both analog and digital electronics. Mastering their use is key to building reliable and efficient electronic systems.
      </p>
      

    </>
  );
};

export default ResistorChart;
