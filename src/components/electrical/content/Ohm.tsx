import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


export default function OhmLaw() {
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
                      <Link to="/electrical/units">Electrical units</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Ohm</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
      </Breadcrumb>
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Ohm (Ω)</h1>

      <p>
        Ohm (symbol: Ω) is the electrical unit of resistance. The Ohm unit was named after George Simon Ohm.
      </p>

      <p>
        The Ohm unit is defined by the relationship: 1Ω = 1V / 1A = 1J ⋅ 1s / 1C².
      </p>

      <h2 className="text-2xl font-semibold mt-6">Table of Resistance Values of Ohm</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Symbol</th>
            <th className="border px-4 py-2">Conversion</th>
            <th className="border px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">milli-ohm</td>
            <td className="border px-4 py-2">mΩ</td>
            <td className="border px-4 py-2">1mΩ = 10⁻³Ω</td>
            <td className="border px-4 py-2">R₀ = 10mΩ</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">ohm</td>
            <td className="border px-4 py-2">Ω</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">R₁ = 10Ω</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">kilo-ohm</td>
            <td className="border px-4 py-2">kΩ</td>
            <td className="border px-4 py-2">1kΩ = 10³Ω</td>
            <td className="border px-4 py-2">R₂ = 2kΩ</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">mega-ohm</td>
            <td className="border px-4 py-2">MΩ</td>
            <td className="border px-4 py-2">1MΩ = 10⁶Ω</td>
            <td className="border px-4 py-2">R₃ = 5MΩ</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6">Ohmmeter</h2>
      <p>An Ohmmeter is a measurement device that measures resistance.</p>

      <h2 className="text-2xl font-semibold mt-6">See Also</h2>
      <ul className="list-disc list-inside">
        <li>Electrical resistance</li>
        <li>Resistor</li>
        <li>Ohm's law</li>
        <li>Electrical units</li>
        <li>Volt</li>
        <li>Ampere (amps)</li>
        <li>Watt</li>
      </ul>
    </div>
    <h2 className="text-2xl font-semibold mt-6">Understanding Ohm's Law</h2>
      <p>
        Ohm’s Law is one of the fundamental principles in electrical engineering and electronics. It states that the current through a conductor between two points is directly proportional to the voltage across the two points, provided the temperature remains constant. This relationship is expressed as:
      </p>
      <p className="font-mono">V = I × R</p>
      <p>
        Where:
        <br />
        <strong>V</strong> = Voltage (Volts, V)
        <br />
        <strong>I</strong> = Current (Amperes, A)
        <br />
        <strong>R</strong> = Resistance (Ohms, Ω)
      </p>
      <p>
        Using this formula, any one of the three variables can be calculated if the other two are known. This makes Ohm’s Law a vital tool in circuit analysis and design.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Practical Application of Ohm's Law</h2>
      <p>
        Ohm’s Law is used in nearly every field involving electricity. It helps electricians determine how much current a device will draw, engineers design circuits with the correct resistor values, and technicians troubleshoot faulty components.
      </p>
      <p>
        For example, suppose you have a 12V battery and want to power an LED that operates at 2V and 20mA. You need a resistor to drop the remaining 10V. Using Ohm’s Law:
      </p>
      <p className="font-mono">R = V / I = 10V / 0.02A = 500Ω</p>
      <p>
        So, you would use a 500-ohm resistor in series with the LED.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Resistive Materials</h2>
      <p>
        Resistance in materials arises due to the collision of electrons with atoms as electric current flows. Conductors like copper and silver have very low resistance, while insulators such as rubber or glass have extremely high resistance. The resistance of a material depends on its length (L), cross-sectional area (A), and resistivity (ρ), which is a property of the material itself:
      </p>
      <p className="font-mono">R = ρ × (L / A)</p>
      <p>
        This formula is particularly useful when designing custom resistors or understanding the resistance of wires in long-distance power transmission.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Temperature Dependence of Resistance</h2>
      <p>
        Resistance is also affected by temperature. For most conductors, resistance increases with temperature due to increased atomic vibrations that impede electron flow. In contrast, semiconductors and some insulators may show decreased resistance as temperature rises. This property is leveraged in devices like thermistors and temperature sensors.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Color Coding of Resistors</h2>
      <p>
        Resistors are often color-coded to indicate their resistance values and tolerances. These colored bands represent numbers based on a standard code. For example, a resistor with the bands brown-black-red-gold has a value of:
      </p>
      <p className="font-mono">
        1 (brown), 0 (black), ×100 (red) = 1000Ω ±5% (gold)
      </p>
      <p>
        Learning to read resistor color codes is a key skill for electronics students and professionals.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Series and Parallel Resistance</h2>
      <p>
        When multiple resistors are connected in a circuit, their total resistance depends on how they are arranged.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Series:</strong> Resistances add together:
          <br />
          <span className="font-mono">R_total = R₁ + R₂ + R₃ + ...</span>
        </li>
        <li>
          <strong>Parallel:</strong> The inverse of total resistance is the sum of the inverses:
          <br />
          <span className="font-mono">1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</span>
        </li>
      </ul>
      <p>
        These principles are essential for controlling current flow and voltage drops in circuits.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Resistors in Electronics</h2>
      <p>
        Resistors are among the most common components in electronic circuits. They serve many purposes:
      </p>
      <ul className="list-disc list-inside">
        <li>Limiting current to protect LEDs and ICs</li>
        <li>Voltage division using voltage divider circuits</li>
        <li>Biasing active devices like transistors</li>
        <li>Filtering in combination with capacitors and inductors</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Digital Multimeters and Resistance</h2>
      <p>
        Digital multimeters (DMMs) measure resistance easily. When set to resistance mode (Ω), they send a small current through the component and measure the voltage drop. This reading allows for easy identification of resistor values and checking of wire continuity.
      </p>

      <h2 className="text-2xl font-semibold mt-6">High-Resistance and Low-Resistance Applications</h2>
      <p>
        In electronics, both extremely low and extremely high resistances have their uses. Low-resistance elements, such as shunt resistors, are used to measure high currents accurately. High-resistance components are used in voltage dividers for signal conditioning, or in the input stages of amplifiers to prevent loading effects.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Unit Prefixes and Engineering Notation</h2>
      <p>
        Resistance values span a wide range and are often expressed using prefixes:
      </p>
      <ul className="list-disc list-inside">
        <li>1 mΩ (milli-ohm) = 0.001 Ω</li>
        <li>1 kΩ (kilo-ohm) = 1,000 Ω</li>
        <li>1 MΩ (mega-ohm) = 1,000,000 Ω</li>
      </ul>
      <p>
        Engineering notation helps keep these values readable and standardized, especially in circuit diagrams and datasheets.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Non-Ohmic Devices</h2>
      <p>
        While Ohm’s Law applies to many electrical components, there are exceptions. Components that do not have a constant resistance, or whose voltage-current relationship is nonlinear, are considered non-ohmic devices.
      </p>
      <ul className="list-disc list-inside">
        <li><strong>Diodes:</strong> Allow current in one direction only. Their V-I curve is exponential rather than linear.</li>
        <li><strong>Transistors:</strong> Act as switches or amplifiers and do not follow Ohm’s Law in a straightforward manner.</li>
        <li><strong>Filament bulbs:</strong> Increase resistance as the filament heats up, changing the current flow.</li>
      </ul>
      <p>
        In circuits involving these components, Ohm’s Law can only be used in small segments or with approximations.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Power Dissipation in Resistors</h2>
      <p>
        When current flows through a resistor, electrical energy is converted to heat. The amount of power (in watts) a resistor dissipates can be calculated using Ohm’s Law-derived formulas:
      </p>
      <ul className="list-disc list-inside">
        <li><span className="font-mono">P = V × I</span></li>
        <li><span className="font-mono">P = I² × R</span></li>
        <li><span className="font-mono">P = V² / R</span></li>
      </ul>
      <p>
        Choosing the right power rating is essential to prevent resistor failure. Common power ratings include 1/8W, 1/4W, 1/2W, 1W, and higher for industrial use.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Tolerance and Accuracy</h2>
      <p>
        Resistors come with a tolerance rating, which indicates how much the actual resistance can vary from the labeled value. This is expressed as a percentage, such as ±1% or ±5%.
      </p>
      <p>
        For example, a 100Ω resistor with ±5% tolerance can have an actual resistance between 95Ω and 105Ω.
      </p>
      <p>
        Precision resistors with tighter tolerances are used in circuits where accuracy is critical, such as analog signal processing and instrumentation.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Measuring Resistance in Practice</h2>
      <p>
        To measure resistance accurately using a digital multimeter:
      </p>
      <ul className="list-decimal list-inside">
        <li>Turn off power to the circuit.</li>
        <li>Isolate the resistor if possible to avoid parallel paths.</li>
        <li>Connect the meter probes across the resistor terminals.</li>
        <li>Read the value on the display.</li>
      </ul>
      <p>
        It's essential to ensure the resistor is not in a powered or active circuit, as voltage could damage the meter or produce inaccurate results.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Ohm's Law Triangle</h2>
      <p>
        The Ohm's Law triangle is a visual tool used to remember the relationship between voltage (V), current (I), and resistance (R). It works like this:
      </p>
      <ul className="list-disc list-inside">
        <li>Cover the variable you want to calculate.</li>
        <li>The remaining two variables form the equation.</li>
      </ul>
      <p>
        For example:
        <br />
        <span className="font-mono">V</span> is at the top, <span className="font-mono">I</span> and <span className="font-mono">R</span> at the bottom.
        <br />
        - To find V: <span className="font-mono">V = I × R</span>
        <br />
        - To find I: <span className="font-mono">I = V / R</span>
        <br />
        - To find R: <span className="font-mono">R = V / I</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6">Applications of Resistance in Circuits</h2>
      <p>
        Resistance plays a critical role in regulating current flow and voltage levels across devices. Some key applications include:
      </p>
      <ul className="list-disc list-inside">
        <li><strong>Voltage dividers:</strong> Used to produce reference voltages.</li>
        <li><strong>Current limiters:</strong> Protect LEDs and ICs from overcurrent.</li>
        <li><strong>Biasing circuits:</strong> Set the operating point of transistors.</li>
        <li><strong>Sensor interfaces:</strong> Thermistors and LDRs change resistance with temperature or light.</li>
        <li><strong>Pull-up and pull-down resistors:</strong> Set known logic states in microcontroller inputs.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Variable Resistors</h2>
      <p>
        Variable resistors, also called potentiometers or rheostats, allow the resistance to be adjusted manually. These components are often used to:
      </p>
      <ul className="list-disc list-inside">
        <li>Control volume on audio equipment</li>
        <li>Adjust brightness in lamps</li>
        <li>Calibrate sensors</li>
      </ul>
      <p>
        A potentiometer has three terminals and can act as a voltage divider. A rheostat usually has two terminals and is used to control current.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Resistor Networks and Arrays</h2>
      <p>
        In compact designs, resistor networks or arrays may be used. These are single packages containing multiple resistors with either isolated or common terminals. They're useful in:
      </p>
      <ul className="list-disc list-inside">
        <li>Digital electronics (e.g., pull-up resistor banks)</li>
        <li>Analog filtering networks</li>
        <li>Reducing PCB space and soldering time</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Historical Note on Ohm</h2>
      <p>
        The unit "Ohm" is named after German physicist Georg Simon Ohm, who formulated Ohm’s Law in 1827. His groundbreaking work established the quantitative relationship between voltage, current, and resistance, laying the foundation for modern electrical theory.
      </p>
      <p>
        Although initially met with skepticism, his law was later universally accepted and forms a core part of physics and electrical engineering education.
      </p>

      <h2 className="text-2xl font-semibold mt-6">SI System and Standardization</h2>
      <p>
        The Ohm is part of the International System of Units (SI). It is a derived unit, based on the base units:
      </p>
      <p className="font-mono">1 Ω = 1 V / 1 A = (kg⋅m²)/(s³⋅A²)</p>
      <p>
        This standardization allows engineers and scientists across the world to communicate and collaborate with consistency and accuracy.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Safety Considerations</h2>
      <p>
        When working with resistors and applying Ohm's Law in real-world circuits, it's important to ensure components are not overloaded. Excessive current can cause overheating, melting, or even fire in extreme cases.
      </p>
      <ul className="list-disc list-inside">
        <li>Use resistors with appropriate power ratings.</li>
        <li>Check the expected current and voltage before connecting power.</li>
        <li>Use fuses or current-limiting devices for protection.</li>
      </ul>


    </>
  );
}
