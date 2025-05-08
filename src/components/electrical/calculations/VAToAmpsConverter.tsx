import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; 
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VAToAmpsConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [voltage, setVoltage] = useState<number>(230); // Default voltage (V)
  const [currentAmps, setCurrentAmps] = useState<number | string>("—");

  // Function to calculate current in amps
  const calculateCurrentAmps = (apparentPower: number, voltage: number): number => {
    return apparentPower / voltage; // Formula to convert VA to Amps
  };

  const handleConvert = () => {
    const result = calculateCurrentAmps(apparentPower, voltage);
    setCurrentAmps(result);
  };

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
              <Link to="/electrical-conversions">Electrical Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>VA to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>VA to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert apparent power in volt-amperes (VA) and voltage in volts (V) to current in amps (A).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in VA:</label>
              <input
                type="number"
                value={apparentPower}
                onChange={(e) => setApparentPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage in V:</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
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
              <strong>Converted Current:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{currentAmps} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>I = S<sub>VA</sub> / V</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I</strong>: Current in amps (A)</li>
                <li><strong>S<sub>VA</sub></strong>: Apparent power in volt-amperes (VA)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert apparent power (VA) to current (A), simply divide the apparent power (S<sub>VA</sub>) by the voltage (V) using the formula:
                <br />
                <strong>I = S<sub>VA</sub> / V</strong>.
                <br />
                This will give the current (I) in amps.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Example 1:</strong> For an apparent power of 1000 VA and a voltage of 230 V:
                  <p className="bg-white p-2 dark:text-black">I = 1000 VA / 230 V = 4.35 A</p>
                </li>
                <li>
                  <strong>Example 2:</strong> For an apparent power of 5000 VA and a voltage of 120 V:
                  <p className="bg-white p-2 dark:text-black">I = 5000 VA / 120 V = 41.67 A</p>
                </li>
                <li>
                  <strong>Example 3:</strong> For an apparent power of 2500 VA and a voltage of 480 V:
                  <p className="bg-white p-2 dark:text-black">I = 2500 VA / 480 V = 5.21 A</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 space-y-6">
  <div>
    <h2 className="font-semibold text-base mb-2">Use Cases in Real-World Electrical Systems</h2>
    <p>
      Converting volt-amperes (VA) to amps is essential in many fields of electrical engineering and system design. Here's where it's commonly used:
    </p>
    <ul className="list-disc list-inside ml-4">
      <li><strong>UPS Systems:</strong> Sizing backup power systems accurately to support the expected current draw.</li>
      <li><strong>Generators:</strong> Ensuring that the generator provides adequate current for connected loads based on voltage supply.</li>
      <li><strong>Transformers:</strong> Calculating the load current to avoid overloading transformer windings.</li>
      <li><strong>Data Centers:</strong> Determining current load per server rack or power distribution unit (PDU).</li>
      <li><strong>Industrial Machines:</strong> Assessing motor and drive systems for proper wiring and safety ratings.</li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Single-Phase vs Three-Phase Conversions</h2>
    <p>
      The basic formula <code>I = VA / V</code> applies to single-phase systems. For **three-phase systems**, the formula is slightly different:
    </p>
    <p className="bg-gray-100 p-3 font-mono rounded dark:text-black">
      I = VA / (√3 × V)
    </p>
    <p>
      Where √3 ≈ 1.732. This accounts for the nature of current flow across three phases. Make sure you use the correct formula depending on your system type.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Common Voltages by Region</h2>
    <ul className="list-disc list-inside ml-4">
      <li><strong>North America:</strong> 120 V, 240 V, 208 V (typical household and commercial)</li>
      <li><strong>Europe/Asia:</strong> 220 V, 230 V, 400 V (common in industrial and domestic use)</li>
      <li><strong>India:</strong> 230 V single-phase, 415 V three-phase</li>
    </ul>
    <p className="mt-2">
      Choose the appropriate voltage to ensure accurate ampere calculation.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Power Factor Consideration (Optional)</h2>
    <p>
      In real-world AC systems, the <strong>Power Factor (PF)</strong> influences actual current. If you also want to account for it:
    </p>
    <p className="bg-gray-100 p-3 font-mono rounded dark:text-black">
      I = (VA × PF) / V
    </p>
    <p>
      Example: If apparent power is 1000 VA, voltage is 230 V, and PF is 0.85:<br />
      <strong>I = (1000 × 0.85) / 230 = 3.70 A</strong>
    </p>
    <p>
      This is especially useful for inductive loads like motors and transformers.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">FAQs</h2>
    <ul className="list-disc list-inside ml-4">
      <li><strong>What is VA?</strong> VA (volt-amperes) is the unit of apparent power, used primarily in AC systems.</li>
      <li><strong>Is VA the same as watts?</strong> No. VA includes both real and reactive power. Watts (W) measure only real power.</li>
      <li><strong>Can I use this for DC systems?</strong> Yes, VA and watts are the same in purely resistive DC circuits (PF = 1).</li>
      <li><strong>How do I size wires based on amps?</strong> Use NEC or IS wiring guidelines, which match wire gauges to current capacity.</li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Safety Tip</h2>
    <p>
      Always leave a margin of safety in current calculations. For example, if your current is calculated as 18 A, use wiring and breakers rated for 20–25 A to ensure reliability and fire safety.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Conclusion</h2>
    <p>
      Converting VA to amps gives you a quick understanding of how much electrical current is required by a device or system. This helps in selecting proper fuses, wires, breakers, and power supplies. Whether you're designing a home solar backup, wiring an industrial panel, or specifying a UPS, this tool ensures you stay accurate and safe.
    </p>
  </div>
</div>
<div className="mt-6 space-y-6">

  <div>
    <h2 className="font-semibold text-base mb-2">Why This Conversion Matters</h2>
    <p>
      Converting Volt-Amperes (VA) to Amps is crucial in designing and maintaining safe, efficient electrical systems. Engineers, electricians, and energy consultants regularly use this calculation to determine:
    </p>
    <ul className="list-disc list-inside ml-4">
      <li>Whether a circuit breaker can handle the current load</li>
      <li>What wire gauge is required to safely carry the current</li>
      <li>How many devices can be connected to a power source</li>
      <li>How to size an inverter, transformer, or generator properly</li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Using This Tool for Equipment Sizing</h2>
    <p>
      When buying electrical equipment, you'll often see specifications in VA. This tool helps convert those values to Amps, enabling accurate matching with your power supply and protective devices.
      For instance:
    </p>
    <p className="bg-gray-100 font-mono p-3 rounded dark:text-black">
      A device rated 2000 VA on a 230 V supply = 2000 / 230 = 8.7 A
    </p>
    <p>
      You now know you need at least a 10A breaker and wiring capable of carrying that current.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Understanding Load Types</h2>
    <p>
      Not all loads are created equal. Electrical loads can be:
    </p>
    <ul className="list-disc list-inside ml-4">
      <li><strong>Resistive</strong> — like heaters and incandescent bulbs (PF ≈ 1)</li>
      <li><strong>Inductive</strong> — like motors and fans (PF &lt 1)</li>
      <li><strong>Capacitive</strong> — like certain lighting ballasts or capacitors</li>
    </ul>
    <p>
      This tool assumes a unity power factor (ideal conditions). For inductive loads, adjust your calculation by multiplying VA × Power Factor to get real power (Watts).
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Designing for Efficiency</h2>
    <p>
      Oversized systems waste energy. Undersized systems can trip breakers, cause overheating, or reduce equipment lifespan. By converting VA to amps and cross-checking your electrical infrastructure, you ensure:
    </p>
    <ul className="list-disc list-inside ml-4">
      <li>Reduced electrical losses</li>
      <li>Extended component life</li>
      <li>Lower maintenance costs</li>
      <li>Improved operational safety</li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Voltage Drop Considerations</h2>
    <p>
      Once you calculate amps, check for voltage drop over long cable runs using Ohm’s law. Excessive drop can cause equipment malfunction and waste energy. Use higher voltage or larger gauge wires when needed.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">International Compatibility</h2>
    <p>
      In global projects, voltage standards vary. North America uses 120V/240V systems, while Europe, Asia, and Africa use 220V–240V. Knowing how to convert VA to amps under various voltages ensures seamless electrical planning across regions.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mb-2">Pro Tip: Allow Headroom</h2>
    <p>
      Always add a 20–25% safety buffer when calculating your current. This accounts for startup surges, future upgrades, and thermal limits of components.
    </p>
  </div>

</div>
<div className="mt-10 space-y-6 text-sm text-gray-700 dark:text-white leading-relaxed">

  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Volt-Amperes and Current</h2>
  <p>
    Volt-amperes (VA) represent the apparent power in an electrical circuit, especially in AC systems. While watts (W) measure real power, VA includes both real power and reactive power. This distinction is critical when sizing generators, UPS systems, or transformers, where current draw depends on VA, not just watts.
  </p>

  <p>
    Current, measured in amps (A), tells us the actual flow of electric charge. When you know the apparent power (VA) and voltage (V), dividing VA by voltage provides the current flowing through the system. This calculation is essential for determining wire sizes, circuit protection, and energy usage.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Use Cases of VA to Amps Conversion</h2>
  <ul className="list-disc ml-4">
    <li><strong>Data centers:</strong> VA ratings on power distribution units help estimate total current loads.</li>
    <li><strong>Home UPS systems:</strong> Battery-backed systems use VA ratings to define their output and input current draw.</li>
    <li><strong>Industrial equipment:</strong> Machines with motors, capacitors, and transformers often require VA-based current calculations.</li>
    <li><strong>Electrical panels:</strong> Ensuring a circuit breaker or wiring can handle current based on a known VA load.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Single Phase vs. Three Phase Considerations</h2>
  <p>
    The formula <code>I = VA / V</code> applies to single-phase systems. For three-phase systems, use:
  </p>
  <div className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    I = VA / (√3 × V)
  </div>
  <p>
    This accounts for the fact that power is distributed across three conductors in a three-phase system, reducing the current in each line.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Quick Reference Table</h2>
  <table className="table-auto w-full border-collapse border mt-2">
    <thead>
      <tr>
        <th className="border px-3 py-2">Apparent Power (VA)</th>
        <th className="border px-3 py-2">Voltage (V)</th>
        <th className="border px-3 py-2">Current (Amps)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-3 py-2">1000</td><td className="border px-3 py-2">230</td><td className="border px-3 py-2">4.35</td></tr>
      <tr><td className="border px-3 py-2">2000</td><td className="border px-3 py-2">120</td><td className="border px-3 py-2">16.67</td></tr>
      <tr><td className="border px-3 py-2">3000</td><td className="border px-3 py-2">480</td><td className="border px-3 py-2">6.25</td></tr>
    </tbody>
  </table>

  <h2 className="font-semibold text-base mt-6 mb-2">Real vs Apparent Power: Why It Matters</h2>
  <p>
    Real power (watts) is the actual energy consumed. Apparent power (VA) considers both useful power and reactive losses due to inductance or capacitance. In systems with low power factors, VA can be much higher than watts — leading to higher current. Always size your circuits and devices based on VA to avoid overheating and electrical inefficiency.
  </p>

</div>
<div className="mt-10 space-y-6 text-sm text-gray-700 dark:text-white leading-relaxed">

  <h2 className="font-semibold text-base mt-6 mb-2">VA vs. Watts: What’s the Difference?</h2>
  <p>
    It’s common to confuse volt-amperes (VA) with watts (W), but they are not always the same. VA represents **apparent power**, while watts represent **real power** consumed by a device. In purely resistive loads (like incandescent bulbs or heaters), VA and W may be equal. However, in inductive or capacitive loads (like motors, transformers, or AC units), VA is higher due to phase shift.
  </p>
  <p>
    Always check a device's **power factor (PF)** when comparing VA and watts. The lower the power factor, the greater the difference between the two — and the more current your system needs to supply for the same output.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">VA to Amps in AC vs. DC Circuits</h2>
  <p>
    The formula <code>I = VA / V</code> is applicable to **single-phase AC** or **DC** circuits. For **three-phase AC** systems, use:
  </p>
  <div className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    I = VA / (√3 × V)
  </div>
  <p>
    This version accounts for the power distribution across three conductors. Make sure to apply the correct formula depending on the type of electrical system you’re working with.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">When to Use VA Ratings</h2>
  <p>
    VA ratings are often used instead of watts for sizing:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>UPS and backup power systems</li>
    <li>Transformers and alternators</li>
    <li>Electric motors and HVAC units</li>
    <li>Generators and panelboards</li>
  </ul>
  <p>
    These systems deal with complex or reactive loads, where current draw doesn't align perfectly with voltage. Using VA ensures safe and appropriate sizing to avoid overloads.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Questions</h2>

  <h3 className="font-medium mt-4">Why is my equipment rated in VA instead of watts?</h3>
  <p>
    Manufacturers use VA ratings to reflect the **total electrical load**, including both real and reactive power. This ensures compatibility with circuits that handle varying power factors.
  </p>

  <h3 className="font-medium mt-4">What happens if I exceed the current calculated?</h3>
  <p>
    Exceeding the current can lead to overheating, equipment failure, or blown fuses. Always size your components with a margin above calculated current.
  </p>

  <h3 className="font-medium mt-4">Is higher voltage always better?</h3>
  <p>
    Higher voltage lowers current for the same power, reducing energy loss and allowing for thinner wires. However, it may require more insulation and safety measures.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Safety Note</h2>
  <p>
    Calculations using VA assume ideal conditions. Real-world factors like temperature, load surges, cable lengths, and poor power factor can affect current. Always consult an electrician or engineer when working on live circuits or selecting equipment for permanent installations.
  </p>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
  <p>
    Converting volt-amperes (VA) to amps (A) is essential when designing or analyzing electrical systems. Whether you're selecting a UPS, wiring a panel, or reviewing appliance specs, this conversion gives you critical insight into current flow. Use this calculator to quickly determine amps and ensure your installations are safe and efficient.
  </p>

</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default VAToAmpsConverter;
