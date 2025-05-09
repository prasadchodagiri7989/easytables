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

const OhmsToAmpsConverter: React.FC = () => {
  const [voltage, setVoltage] = useState<number>(230);  // Voltage in volts (V)
  const [resistance, setResistance] = useState<number>(10);  // Resistance in ohms (Ω)
  const [current, setCurrent] = useState<number | string>('—');  // Current in amps (A)

  const convertToAmps = (voltage: number, resistance: number) => {
    return voltage / resistance;  // I(A) = V(V) / R(Ω)
  };

  const handleConvert = () => {
    const result = convertToAmps(voltage, resistance);
    setCurrent(result);
  };

  const examples = [
    { voltage: 230, resistance: 10, expectedResult: 23, description: '230 V with resistance of 10 Ω' },
    { voltage: 120, resistance: 60, expectedResult: 2, description: '120 V with resistance of 60 Ω' },
    { voltage: 480, resistance: 240, expectedResult: 2, description: '480 V with resistance of 240 Ω' },
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
              <Link to="/electrical-conversions">Electrical Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ohms to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Ohms to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage in volts (V) and resistance in ohms (Ω) to current in amps (A).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Resistance in Ohms (Ω):</label>
              <input
                type="number"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{current} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Voltage: {example.voltage} V, Resistance: {example.resistance} Ω</p>
                    <p>Converted Current: {example.expectedResult} A</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>I = V / R</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I</strong>: Current in amps (A)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>R</strong>: Resistance in ohms (Ω)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from voltage (V) and resistance (Ω) to current (A) is based on the formula:
                <br />
                - Current (I) is equal to voltage (V) divided by resistance (R).
                <br />
                - This conversion helps us calculate how much current flows through a resistor given the voltage across it.
              </p>
            </div>
          </div>
          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Ohm’s Law in Practical Scenarios:</h2>
  <p>
    Ohm’s Law is a foundational principle in electrical engineering that relates voltage (V), current (I), and resistance (R). In real-world applications, this law helps determine how devices operate safely and efficiently. 
    Whether you're designing a simple LED circuit or analyzing a high-voltage transmission line, understanding this relationship ensures appropriate current flow and avoids overheating or failure.
  </p>

  <p className="mt-4">
    For example, if you're working with a 12V battery and a resistor of 6 ohms, you can calculate the current using the formula I = V / R:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    I = 12 / 6 = 2 A
  </p>
  <p>
    This tells you that 2 amps will flow through the resistor. If the resistor is not rated for that current, it might overheat and get damaged. Hence, calculating current from voltage and resistance is essential for safety and circuit design.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Applications Across Industries:</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Electronics:</strong> Ensuring components like resistors, transistors, and microcontrollers receive correct current.</li>
    <li><strong>Automotive:</strong> Designing headlight or dashboard circuits to avoid blown fuses or excessive current draw.</li>
    <li><strong>Home Appliances:</strong> Verifying if a power supply delivers appropriate current based on internal resistance.</li>
    <li><strong>Telecommunications:</strong> Managing current flow in long copper wire installations to minimize power loss.</li>
    <li><strong>Educational Labs:</strong> Teaching students fundamental relationships between voltage, current, and resistance.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Unit Breakdown:</h2>
  <p>
    Here's how each unit relates:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Volt (V):</strong> Measures electrical potential or “pressure” that pushes current through a circuit.</li>
    <li><strong>Ohm (Ω):</strong> Measures resistance or how much a material resists the flow of electric current.</li>
    <li><strong>Ampere (A):</strong> Measures current, i.e., the rate of flow of electric charge through a conductor.</li>
  </ul>

  <p className="mt-4">
    The combination of these units defines the behavior of electrical circuits. Using this converter, you can rapidly determine current given known voltage and resistance values—ideal for debugging, optimization, and safe implementation.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Why Current Matters:</h2>
  <p>
    Excessive current can damage sensitive components or pose fire hazards. Undersized wiring in relation to expected current can overheat. For this reason, knowing how much current is expected is essential when selecting fuses, wire gauges, and component tolerances.
  </p>

  <p className="mt-4">
    Example: An LED light rated for 20mA may be destroyed if connected directly to a 9V battery without a limiting resistor. By applying Ohm’s Law and calculating the correct resistor value, you protect the component and prolong its life.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Concepts: Power Dissipation</h2>
  <p>
    Once you know the current, you can also calculate power (P) using:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    P = V × I
  </p>
  <p>
    This gives the total power consumed or dissipated by a device or resistor. For example:
    <br />
    - A 12V circuit drawing 2A will dissipate: 12 × 2 = 24 watts
    <br />
    Understanding power is crucial when selecting components that can handle the generated heat.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Troubleshooting with Ohm’s Law:</h2>
  <p>
    Ohm’s Law isn’t just for design—it’s also a powerful diagnostic tool. For example:
    <br />
    - If your circuit is not powering up and you measure a high resistance where low resistance is expected, that may indicate a broken wire or cold solder joint.
    <br />
    - Conversely, if resistance is very low and current is higher than expected, that might be a short circuit or failed component.
  </p>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Practical Applications:</h2>
  <p>
    Understanding how to convert ohms to amps is essential in many practical scenarios, especially in electronics and electrical engineering.
    Whether you're troubleshooting a circuit, sizing resistors, or designing a power supply, this conversion allows you to determine the amount of
    current that flows through a component. For example, knowing that a 230V source and a 10Ω resistor result in a current of 23A helps verify 
    that the system operates within safe parameters.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Ohm's Law Background:</h2>
  <p>
    Ohm’s Law, named after German physicist Georg Simon Ohm, describes the fundamental relationship between voltage (V), current (I), and 
    resistance (R). It’s expressed as I = V / R. This law assumes ideal conditions, such as constant temperature and linear resistors, 
    making it a foundational principle in DC circuit analysis.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Safety Considerations:</h2>
  <p>
    High current values can be dangerous and cause overheating or damage. Always ensure that your wires and components are rated for the 
    expected current. Use a fuse or circuit breaker to protect your setup, and always test circuits in a controlled environment before 
    deployment.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Usage Tips:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>In AC circuits, you may also need to consider impedance (Z) instead of pure resistance (R).</li>
    <li>Use multimeters to verify real-time current in experimental setups.</li>
    <li>Always double-check unit consistency (e.g., volts in V, resistance in ohms).</li>
  </ul>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Examples of Ohms to Amps Conversion:</h2>
  <p>
    Let's explore some everyday scenarios where converting ohms to amps is essential:
  </p>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Home Appliances:</strong> Suppose a heater is rated at 230V and has a resistance of 46 ohms. The current draw would be 5A, which helps determine the appropriate fuse and wiring thickness.</li>
    <li><strong>Automotive Systems:</strong> In a 12V car battery circuit with 6 ohms resistance (e.g., headlights), the current would be 2A. This helps with battery life estimation and wire sizing.</li>
    <li><strong>DIY Electronics:</strong> A 9V battery connected to a 330Ω resistor for an LED yields a current of approximately 27mA — ideal for small components without causing damage.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Resistance and Its Role:</h2>
  <p>
    Resistance is a measure of how much a component opposes the flow of electric current. Materials like copper have low resistance and 
    allow current to flow easily, while insulators like rubber have very high resistance. By adjusting resistance, engineers can control current 
    and energy usage in a circuit.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Factors That Affect Current Flow:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Temperature:</strong> Resistance increases with heat, which may lower current over time unless compensated.</li>
    <li><strong>Material Type:</strong> Different materials conduct electricity better. For instance, silver is more conductive than copper.</li>
    <li><strong>Component Tolerance:</strong> Real-world resistors may vary slightly from their rated value, affecting current precision.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why Current Matters:</h2>
  <p>
    Measuring current correctly is critical to ensuring that electronic devices function safely and efficiently. Too much current can burn out 
    LEDs or damage integrated circuits, while too little may result in underperformance. This converter helps estimate current before 
    powering your design.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Helpful Conversion Tip:</h2>
  <p>
    Always use consistent units when calculating. If resistance is in ohms and voltage in volts, the result will naturally be in amps. If you're 
    working with millivolts or kilohms, convert them first to base units (V and Ω).
  </p>

</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Deep Dive into Ohm’s Law:</h2>
  <p>
    Ohm’s Law is one of the most fundamental principles in electronics and electrical engineering. It shows how voltage, current, and resistance relate to one another. This formula:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    I = V / R
  </p>
  <p>
    helps engineers and hobbyists design circuits, select appropriate components, and diagnose faults. It's universally applicable in direct current (DC) circuits and commonly used in AC circuits as well.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Using a Multimeter to Measure Resistance and Voltage:</h2>
  <p>
    To use this converter accurately, you may need to measure voltage and resistance directly:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>To measure voltage (V):</strong> Set your multimeter to DC or AC voltage mode and place the probes across the terminals of the power source or component.</li>
    <li><strong>To measure resistance (Ω):</strong> Disconnect power, switch your multimeter to resistance mode (Ω), and place the probes across the resistor.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Safety Tips When Working with Current:</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Always measure current with the circuit powered off first and use calculated values to verify safety.</li>
    <li>Never connect a multimeter in voltage mode across a live circuit to measure current — this could damage the meter.</li>
    <li>Double-check connections, especially when working with mains voltage (120V/230V), to avoid electric shock.</li>
    <li>Use fuses and circuit breakers where possible to prevent overcurrent situations.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Integrating with IoT or Arduino Projects:</h2>
  <p>
    Ohms-to-amps conversions are essential for building and programming smart systems. For example:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Arduino LEDs:</strong> To avoid burning out LEDs, use a resistor (typically 220Ω–330Ω) with a 5V source to limit current to ~15–20mA.</li>
    <li><strong>Battery Management Systems (BMS):</strong> Calculate current draw from sensors or motors using Ohm’s Law to size components properly.</li>
    <li><strong>ESP32 or Raspberry Pi projects:</strong> When powering actuators, calculate the expected current to avoid overloading GPIO pins.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Troubleshooting Common Issues:</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>High resistance = low current:</strong> If your device isn’t working, check for unintended resistance — loose wires, corroded connectors, or poor solder joints.</li>
    <li><strong>Low resistance = high current:</strong> Risk of overheating or damaging parts. Double-check resistors and wire gauges.</li>
    <li><strong>Unexpected current readings:</strong> Ensure your voltage source is stable and not being pulled down by other loads.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Current Ratings and Wire Sizing:</h2>
  <p>
    After calculating current, you should verify that your wiring and components can safely handle it. For example:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>18 AWG wire</strong>: typically supports up to 10 amps (short distance)</li>
    <li><strong>14 AWG wire</strong>: suitable for up to 15 amps (household circuits)</li>
    <li><strong>10 AWG wire</strong>: supports up to 30 amps (air conditioners or electric dryers)</li>
  </ul>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    The Ohms to Amps Converter is more than just a calculator—it’s a foundational tool in understanding how electricity behaves in a circuit. Whether you're building DIY electronics, designing large-scale industrial systems, or simply learning the basics, this converter helps you apply theory to practical use.
    <br />
    Bookmark and use it regularly for smart, safe, and efficient circuit planning.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default OhmsToAmpsConverter;
