import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const VoltsToAmpsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [resistance, setResistance] = useState<number>(1); // Default resistance value
  const [currentAmps, setCurrentAmps] = useState<number | string>('—'); // Result placeholder

  // Function to calculate current in amperes
  const calculateCurrentAmps = (volts: number, resistance: number): number => {
    return volts / resistance; // Ohm's law: I = V / R
  };

  const handleConvert = () => {
    const result = calculateCurrentAmps(volts, resistance);
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
            <BreadcrumbPage>Volts to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage in volts (V) and resistance in ohms (Ω) to current in amperes (A) using Ohm's Law.</p>

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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{currentAmps} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* For a voltage of 1V and a resistance of 1Ω:
                  <p className="bg-gray-100 p-2 dark:text-black">I(A) = 1V / 1Ω = 1 A</p>
                </li>
                <li>
                  *Example 2:* For a voltage of 120V and a resistance of 12Ω:
                  <p className="bg-gray-100 p-2 dark:text-black">I(A) = 120V / 12Ω = 10 A</p>
                </li>
                <li>
                  *Example 3:* For a voltage of 240V and a resistance of 24Ω:
                  <p className="bg-gray-100 p-2 dark:text-black">I(A) = 240V / 24Ω = 10 A</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>I(A) = V / R</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I(A)</strong>: Current in amperes (A)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>R</strong>: Resistance in ohms (Ω)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts (V) and resistance (Ω) to current (A) is based on Ohm's Law:
                <br />
                - Current (I) is equal to voltage (V) divided by resistance (R).
                <br />
                - This formula helps us calculate how much current flows in a circuit given the voltage and resistance.
              </p>
            </div>
          </div>

          <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications:</h2>
              <p>
                Understanding the relationship between voltage, resistance, and current is essential in many electrical and electronic applications. Below are a few practical uses of this conversion:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li><strong>Household Circuits:</strong> When installing electrical devices at home, knowing the current can help determine the wire gauge and circuit breaker rating required.</li>
                <li><strong>Automotive Systems:</strong> Automotive technicians use Ohm's Law to troubleshoot issues in car batteries, fuses, and resistors by checking how much current flows through different systems.</li>
                <li><strong>Electronic Design:</strong> Engineers designing circuits need to calculate the appropriate current so that components do not burn out due to excess current.</li>
                <li><strong>Solar Power Systems:</strong> To determine how much current solar panels will produce under different voltage loads and resistance levels.</li>
                <li><strong>Educational Demonstrations:</strong> Ohm’s Law is one of the first concepts taught in basic physics and electronics classes, and calculators like this help reinforce learning.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Ohm’s Law Triangle:</h2>
              <p>
                A helpful way to remember the relationship between current, voltage, and resistance is by using the Ohm’s Law Triangle. 
                Imagine a triangle split into three parts:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>At the top is Voltage (V).</li>
                <li>At the bottom-left is Current (I).</li>
                <li>At the bottom-right is Resistance (R).</li>
              </ul>
              <p className="mt-2">
                To find one value, cover it up in the triangle. The remaining values show how to calculate it. For example:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>To find I: I = V / R</li>
                <li>To find V: V = I × R</li>
                <li>To find R: R = V / I</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Unit Definitions:</h2>
              <p>
                It’s important to understand the meaning of the units used in the formula:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li><strong>Volt (V):</strong> The unit of electric potential difference. 1 volt is the difference in electric potential that will move one ampere of current against one ohm of resistance.</li>
                <li><strong>Ohm (Ω):</strong> The unit of electrical resistance. One ohm means that one volt of potential difference will push one ampere of current through the circuit.</li>
                <li><strong>Ampere (A):</strong> The unit of electric current. One ampere is the flow of one coulomb of charge per second.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Tips to Avoid Mistakes:</h2>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>Always double-check your input units to make sure they’re consistent.</li>
                <li>Avoid dividing by zero — resistance must always be greater than 0.</li>
                <li>Use realistic values. For example, resistance is rarely in decimals unless you're working with precision electronics.</li>
                <li>Remember that extremely high current values might indicate a calculation error or incorrect values.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions:</h2>
              <ul className="space-y-4">
                <li>
                  <strong>Q: What happens if resistance is zero?</strong>
                  <p className="ml-4">A: Dividing by zero is undefined. In physical systems, zero resistance implies a short circuit, which may lead to dangerous levels of current.</p>
                </li>
                <li>
                  <strong>Q: Can this be used for AC circuits?</strong>
                  <p className="ml-4">A: This formula applies to DC circuits or the resistive part of AC circuits. AC circuits also involve reactance and impedance, which require more complex calculations.</p>
                </li>
                <li>
                  <strong>Q: Why is my current value extremely high?</strong>
                  <p className="ml-4">A: Check if your resistance value is too low. Low resistance leads to high current, which might not be practical or safe.</p>
                </li>
                <li>
                  <strong>Q: Is the voltage the same as battery voltage?</strong>
                  <p className="ml-4">A: Yes, in many practical applications voltage refers to the output of a battery or power source in volts.</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Advanced Use Cases:</h2>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li><strong>LED Circuit Design:</strong> Calculate the needed resistor value to achieve a safe current for LEDs using the formula rearranged as R = V / I.</li>
                <li><strong>Heating Elements:</strong> In devices like toasters or heaters, knowing the current helps ensure the heating coil gets the correct amount of energy.</li>
                <li><strong>Battery Drain Estimation:</strong> Knowing the current drawn helps estimate how long a battery will last based on its mAh rating.</li>
                <li><strong>Power Consumption Calculations:</strong> Once current is known, power (W) can be calculated using P = V × I for energy usage predictions.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Conversion Table:</h2>
              <p>
                Here’s a simple table of voltage and resistance values with their corresponding current:
              </p>
              <table className="w-full mt-2 text-left border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">Voltage (V)</th>
                    <th className="p-2 border">Resistance (Ω)</th>
                    <th className="p-2 border">Current (A)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">5</td>
                    <td className="p-2 border">1</td>
                    <td className="p-2 border">5.0</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">12</td>
                    <td className="p-2 border">4</td>
                    <td className="p-2 border">3.0</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">24</td>
                    <td className="p-2 border">8</td>
                    <td className="p-2 border">3.0</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">120</td>
                    <td className="p-2 border">60</td>
                    <td className="p-2 border">2.0</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">240</td>
                    <td className="p-2 border">120</td>
                    <td className="p-2 border">2.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Ohm’s Law in Practical Terms:</h2>
  <p>
    Ohm’s Law is a cornerstone principle in electrical engineering and electronics. It describes the relationship between voltage (V), current (I), and resistance (R). When you understand how these three elements interact, you can confidently design, troubleshoot, and work with electronic and electrical systems.
  </p>
  <p className="mt-2">
    Imagine you’re dealing with a water hose: the water pressure represents voltage, the water flow represents current, and the narrowness or width of the hose represents resistance. If you increase the pressure (voltage) and keep the resistance constant, more water (current) will flow. Likewise, if you increase the resistance by narrowing the hose, the flow decreases.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Common Use Cases of Volts to Amps Conversion:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>
      <strong>Power Supply Design:</strong> When designing power supplies, you need to ensure that the supplied voltage results in the desired current based on the connected load.
    </li>
    <li>
      <strong>Component Selection:</strong> Selecting appropriate resistors and ensuring components can handle the resulting current safely is vital to avoid overheating or failure.
    </li>
    <li>
      <strong>Electrical Troubleshooting:</strong> Technicians frequently calculate current to verify if a circuit is functioning correctly or if a component has failed.
    </li>
    <li>
      <strong>Battery-Powered Projects:</strong> Knowing how much current a load will draw helps estimate battery life and performance.
    </li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Safety Considerations:</h2>
  <p>
    Always remember that electrical current can be dangerous. Even small currents can be harmful under certain conditions. Before applying voltage to a circuit, make sure the resistance is known and appropriate. Using Ohm’s Law helps avoid drawing more current than a circuit can handle.
  </p>
  <p className="mt-2">
    Short circuits, where resistance drops to near zero, can result in dangerously high currents. For example, if you apply 120V to a circuit with 0.1 ohms resistance, the resulting current is:
  </p>
  <p className="bg-gray-100 p-2 dark:text-black font-mono">I = 120V / 0.1Ω = 1200 A</p>
  <p>This much current could cause severe damage or fire if not properly fused or protected.</p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Tip: Working with Non-Linear Loads:</h2>
  <p>
    Ohm’s Law works well for resistive (linear) loads like heaters and incandescent bulbs, where resistance doesn’t change much. However, for non-linear loads like LEDs or motors, the relationship may not remain proportional. For these cases, more advanced electrical models are used, but Ohm’s Law still provides a good approximation for simple estimation.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Current Ratings and Real-World Devices:</h2>
  <p>
    Most electronic devices list voltage and current ratings. A phone charger might say “Output: 5V 2A”. This tells you the charger provides 5 volts and can supply up to 2 amps of current. If your device needs 1 amp, that’s fine — the charger won’t force 2 amps into it. But if your device tries to draw more than 2 amps, the charger may overheat, shut off, or become damaged.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Unit Conversions and Related Terms:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Voltage (V):</strong> The potential difference, measured in volts (V).</li>
    <li><strong>Current (I):</strong> The flow of electric charge, measured in amperes (A).</li>
    <li><strong>Resistance (R):</strong> The opposition to current, measured in ohms (Ω).</li>
    <li><strong>Power (P):</strong> Often calculated using P = V × I, giving the power in watts (W).</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Troubleshooting Tips:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>If the calculated current seems too high, check for incorrect resistance values — especially if resistance is near zero.</li>
    <li>If resistance is extremely high, the current may be negligible, indicating an open circuit.</li>
    <li>Ensure that all units are correct — volts in V, resistance in ohms, and the result in amps.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">More Examples:</h2>
  <ul className="list-disc list-inside ml-4 space-y-3">
    <li>
      *Example 4:* A 12V power supply connected to a 6Ω load:
      <p className="bg-gray-100 p-2 dark:text-black font-mono">I = 12V / 6Ω = 2 A</p>
    </li>
    <li>
      *Example 5:* A 9V battery with a 3Ω resistor:
      <p className="bg-gray-100 p-2 dark:text-black font-mono">I = 9V / 3Ω = 3 A</p>
    </li>
    <li>
      *Example 6:* A 48V DC supply with a 24Ω load:
      <p className="bg-gray-100 p-2 dark:text-black font-mono">I = 48V / 24Ω = 2 A</p>
    </li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    Converting volts to amps using resistance is a fundamental and practical skill for anyone working with electronics or electricity. By mastering this conversion, you gain greater control over the design, analysis, and safety of electrical circuits.
  </p>
  <p className="mt-2">
    This tool provides a quick and easy way to apply Ohm’s Law without needing to manually do the math each time. Whether you’re a student, hobbyist, or professional, understanding how voltage and resistance affect current is an essential part of working with electric systems.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToAmpsConverter;
