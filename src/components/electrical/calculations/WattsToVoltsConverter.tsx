import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToVoltsConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000);
  const [current, setCurrent] = useState<number>(5);
  const [volts, setVolts] = useState<number | string>('—');

  const calculateVolts = (watts: number, current: number) => {
    if (current === 0) return 'Invalid (divide by zero)';
    return (watts / current).toFixed(2);
  };

  const handleConvert = () => {
    const result = calculateVolts(watts, current);
    setVolts(result);
  };

  const examples = [
    { watts: 1000, current: 5, expectedResult: 200, description: '1000W with 5A' },
    { watts: 2000, current: 4, expectedResult: 500, description: '2000W with 4A' },
    { watts: 500, current: 2, expectedResult: 250, description: '500W with 2A' },
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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watts to Volts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Volts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Use this tool to convert power in watts (W) to electrical voltage in volts (V),
            using the formula <strong>V = P / I</strong> where P is power in watts and I is current in amperes.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current in Amperes (A):</label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
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
              <strong>Converted Voltage:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{volts} V</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Watts: {example.watts} W, Current: {example.current} A</p>
                    <p>Converted Voltage: {example.expectedResult} V</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Voltage (V) = Power (W) ÷ Current (A)</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>V</strong>: Voltage in volts</li>
                <li><strong>W</strong>: Power in watts</li>
                <li><strong>A</strong>: Current in amperes</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                Electrical power and current are related through voltage, which can be thought of as the "pressure"
                pushing electrical current through a conductor. This tool helps calculate the voltage required to deliver
                a given power at a specific current. It's particularly useful in electrical engineering, battery design,
                solar systems, and appliance load estimations.
              </p>
              <p>
                For instance, if you're designing a 1000-watt appliance and it draws 5 amperes, the voltage required is:
              </p>
              <p><strong>1000 ÷ 5 = 200 volts</strong>.</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Real-World Use Cases:</h2>
              <table className="table-auto w-full border-collapse border text-sm">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">Appliance</th>
                    <th className="border p-2 text-left">Power (W)</th>
                    <th className="border p-2 text-left">Current (A)</th>
                    <th className="border p-2 text-left">Voltage (V)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2">Microwave Oven</td><td className="border p-2">1200</td><td className="border p-2">10</td><td className="border p-2">120</td></tr>
                  <tr><td className="border p-2">Hair Dryer</td><td className="border p-2">1800</td><td className="border p-2">15</td><td className="border p-2">120</td></tr>
                  <tr><td className="border p-2">Electric Kettle</td><td className="border p-2">1500</td><td className="border p-2">6.25</td><td className="border p-2">240</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">FAQs:</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong>Can I use this tool for DC and AC power?</strong> – Yes, as long as the watt and ampere values are consistent. For AC power, consider using RMS values.</li>
                <li><strong>What happens if current is zero?</strong> – Division by zero is not valid. The voltage is undefined in such a case.</li>
                <li><strong>Is this valid for three-phase systems?</strong> – No, this formula is for single-phase systems. Three-phase systems require a different formula: <code>V = P / (√3 × I × PF)</code>.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Further Reading:</h2>
              <p>
                To learn more about electrical units, consider reviewing Ohm’s Law, the relationship between voltage,
                current, and resistance, and how power is distributed across electrical circuits. Understanding these fundamentals
                can help you design safe and efficient systems, whether you're working on home wiring, solar panel setups, or
                battery storage units.
              </p>
            </div>
          </div>
          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why Convert Watts to Volts?</h2>
  <p>
    Voltage plays a crucial role in determining how electrical power is delivered. When designing or troubleshooting electrical systems, understanding how voltage interacts with power and current helps ensure devices operate safely and efficiently. 
    For instance, if you have a known power requirement and available current capacity, calculating the voltage ensures that the circuit can handle the load without overheating or causing damage.
  </p>
  <p>
    This is especially important in automotive electronics, renewable energy systems (like solar panels and inverters), and power supply design, where knowing the exact voltage is essential for component compatibility.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Common Conversion Scenarios:</h2>
  <table className="table-auto w-full border-collapse border text-sm">
    <thead>
      <tr>
        <th className="border p-2 text-left">Scenario</th>
        <th className="border p-2 text-left">Watts</th>
        <th className="border p-2 text-left">Current (A)</th>
        <th className="border p-2 text-left">Voltage</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">Laptop Charger</td><td className="border p-2">65</td><td className="border p-2">3.25</td><td className="border p-2">20V</td></tr>
      <tr><td className="border p-2">LED Bulb</td><td className="border p-2">10</td><td className="border p-2">0.08</td><td className="border p-2">120V</td></tr>
      <tr><td className="border p-2">Power Tool</td><td className="border p-2">1500</td><td className="border p-2">6.25</td><td className="border p-2">240V</td></tr>
    </tbody>
  </table>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">More FAQs:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>What is the difference between power and voltage?</strong> Power (W) is the rate of energy consumption or generation, while voltage (V) is the potential difference that drives current through a circuit.</li>
    <li><strong>Does higher voltage mean more power?</strong> Not necessarily. Power depends on both voltage and current. Higher voltage with low current may result in the same power as lower voltage with higher current.</li>
    <li><strong>Can I use this for battery-operated devices?</strong> Yes, as long as you know the wattage the device draws and the current output of the battery, you can calculate the required voltage.</li>
    <li><strong>How accurate is this calculation?</strong> It is mathematically accurate but assumes ideal conditions (no losses or inefficiencies). Real-world circuits may experience resistance or heat loss.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Tips for Accurate Use:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li>Ensure all values are in correct units (Watts and Amperes) before conversion.</li>
    <li>Use RMS values for current when dealing with AC circuits.</li>
    <li>If using three-phase systems, use <code>V = P / (√3 × I × PF)</code> instead.</li>
    <li>Always round results appropriately, especially for engineering or commercial specs.</li>
  </ul>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Practical Applications:</h2>
  <p>
    Understanding the relationship between watts, volts, and amperes is essential for various real-world applications. Whether you're an engineer designing a power system or a hobbyist tinkering with electronics, these conversions help you determine the correct components for your system.
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Electric Vehicles (EVs):</strong> EV chargers need to deliver a specific amount of power at the right voltage and current to charge efficiently. This conversion helps determine the correct voltage for charging stations.</li>
    <li><strong>Solar Power Systems:</strong> In solar power setups, knowing the voltage and power helps design efficient inverter systems that convert DC to AC and ensure compatibility with the grid or batteries.</li>
    <li><strong>Home Appliances:</strong> Most home appliances specify their wattage requirements, and knowing the voltage helps match the appliance with the correct power supply.</li>
    <li><strong>Renewable Energy Devices:</strong> Wind turbines, hydroelectric systems, and other renewable devices often require voltage calculations to deliver power effectively to the grid or batteries.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Voltage, Current, and Resistance Relationship:</h2>
  <p>
    In addition to watts, voltage, and amperes, the concept of electrical resistance is also vital. The relationship between voltage (V), current (I), and resistance (R) is governed by Ohm's Law:
  </p>
  <p className="font-mono text-lg">
    <strong>V = I × R</strong>
  </p>
  <p>
    This formula shows that voltage is equal to the current flowing through a resistor multiplied by the resistance itself. Understanding this relationship is crucial for designing circuits and ensuring that components are not overloaded or damaged due to excessive voltage or current.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Concept of Efficiency:</h2>
  <p>
    Efficiency plays a significant role in electrical power systems. Power losses due to resistance or inefficiencies in conversion can impact the effectiveness of your system. The efficiency of a system is typically calculated as:
  </p>
  <p className="font-mono text-lg">
    <strong>Efficiency (%) = (Useful Power Output / Total Power Input) × 100</strong>
  </p>
  <p>
    For example, if a motor consumes 100 watts of electrical power but only delivers 85 watts of mechanical power, the efficiency of the motor would be 85%.
  </p>
  <p>
    This calculation is important when choosing components for systems like power supplies, batteries, and transformers. Ensuring high efficiency can reduce energy consumption, save costs, and prolong the life of your devices.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">How to Measure Voltage, Current, and Power:</h2>
  <p>
    To perform the conversion and verify the results, it's essential to measure voltage, current, and power accurately. Here’s a quick overview of tools and techniques for measurement:
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Multimeter:</strong> A multimeter is a versatile tool that can measure voltage, current, and resistance. Set the meter to the appropriate mode (voltage or current) and connect it to your circuit to take measurements.</li>
    <li><strong>Clamp Meter:</strong> For measuring current, a clamp meter can be used. It clamps around a conductor to measure the current flowing without making direct contact with the wires.</li>
    <li><strong>Power Meter:</strong> A power meter measures the power consumption of electrical devices. It can give you an accurate reading of the device’s power usage in watts, which can then be used for voltage and current calculations.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Energy Conservation Tips:</h2>
  <p>
    Understanding power consumption and how to calculate the necessary voltage for devices can help with energy conservation. Here are some tips for reducing energy consumption in both personal and commercial setups:
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Upgrade to Energy-Efficient Appliances:</strong> Modern appliances consume less power for the same output. For example, LED lighting uses less power than incandescent bulbs for the same brightness.</li>
    <li><strong>Use Power Strips:</strong> Unplugging devices when not in use can help save energy. Power strips make it easy to disconnect multiple devices at once.</li>
    <li><strong>Optimize Heating and Cooling:</strong> Efficient HVAC systems use less power. Ensuring that your system is well-maintained and properly insulated will help reduce the power required to heat or cool your home.</li>
    <li><strong>Solar Panels:</strong> Installing solar panels can provide a renewable source of energy, reducing reliance on grid power and potentially lowering your energy bills.</li>
  </ul>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Power Factor:</h2>
  <p>
    The power factor is an essential concept when working with alternating current (AC) systems. In an AC circuit, the power factor measures the efficiency with which the electrical power is being converted into useful work. A power factor of 1 indicates that all the supplied power is being used efficiently, while a lower power factor means some of the power is wasted. The formula for power factor is:
  </p>
  <p className="font-mono text-lg">
    <strong>Power Factor (PF) = Real Power (W) / Apparent Power (VA)</strong>
  </p>
  <p>
    The real power (W) is the actual usable power that performs the work, while the apparent power (VA) is the combination of both real power and reactive power (power lost in the circuit). A poor power factor leads to higher energy costs and increased demand on the power grid. To improve power factor, power factor correction devices like capacitors or inductors are often used in industrial and commercial setups.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Types of Electrical Circuits:</h2>
  <p>
    Electrical systems can vary widely depending on how they are configured. Understanding the types of circuits is vital for understanding power, current, and voltage calculations. There are two primary types of electrical circuits:
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Series Circuits:</strong> In a series circuit, components are connected end-to-end, and the same current flows through all components. The total voltage across the circuit is the sum of the voltages across the individual components. In this case, the current is the same, but voltage is divided among the components.</li>
    <li><strong>Parallel Circuits:</strong> In a parallel circuit, components are connected in such a way that the current can flow through more than one path. The total voltage across the circuit remains the same as the voltage across each component, but the current is divided among the components.</li>
  </ul>
  <p>
    Understanding these configurations is crucial when calculating power, as different circuit types affect the behavior of voltage and current.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Converting from Volts, Current, and Resistance to Power:</h2>
  <p>
    In electrical systems, we may also want to calculate power based on voltage, current, and resistance. Using Ohm’s Law and the formulas for power, we can calculate power in watts using different parameters:
  </p>
  <p className="font-mono text-lg">
    <strong>Power (P) = V × I</strong> — Power is the product of voltage (V) and current (I).
  </p>
  <p className="font-mono text-lg">
    <strong>Power (P) = I² × R</strong> — Power can also be calculated using current (I) and resistance (R).
  </p>
  <p className="font-mono text-lg">
    <strong>Power (P) = V² / R</strong> — Alternatively, power can be determined using voltage (V) and resistance (R).
  </p>
  <p>
    These formulas are fundamental for calculating power in different scenarios and understanding how voltage, current, and resistance affect the performance of electrical systems.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">High vs Low Voltage Systems:</h2>
  <p>
    Electrical systems can operate at either high or low voltage levels, and understanding the differences is important for safety, efficiency, and the selection of equipment. Here’s a comparison:
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>High Voltage Systems:</strong> These systems are typically used in long-distance power transmission to reduce energy losses. By increasing the voltage, the current can be reduced, which minimizes the power loss due to resistance in the transmission wires. High voltage is commonly used in industrial settings and power stations.</li>
    <li><strong>Low Voltage Systems:</strong> Low voltage systems are used in homes, offices, and small appliances. Lower voltage systems are safer and more energy-efficient for devices that don’t require large amounts of power. For example, 120V or 240V electrical outlets in homes are typical low voltage systems.</li>
  </ul>
  <p>
    While high voltage is more efficient for transmitting power over long distances, low voltage systems are better for most consumer devices due to their simplicity and safety.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Important Safety Tips for Working with Electricity:</h2>
  <p>
    When dealing with electrical systems, safety should always be a top priority. Here are some important safety tips to keep in mind when working with electrical circuits and power systems:
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Turn off power:</strong> Always ensure that the power is turned off before working with any electrical devices or circuits. This prevents accidental shocks.</li>
    <li><strong>Use insulated tools:</strong> Use tools with insulated handles to protect yourself from electric shock while working with live circuits.</li>
    <li><strong>Check for proper grounding:</strong> Ensure that all equipment is properly grounded to avoid dangerous electric shocks or fires.</li>
    <li><strong>Work in dry conditions:</strong> Never work with electricity in wet or damp conditions. Water is a conductor and increases the risk of electrical shock.</li>
    <li><strong>Use a circuit breaker:</strong> Install a circuit breaker or fuse in the system to prevent overloading, which can lead to fire hazards.</li>
  </ul>
  <p>
    By following these safety guidelines, you can reduce the risks associated with working with electrical systems.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToVoltsConverter;
