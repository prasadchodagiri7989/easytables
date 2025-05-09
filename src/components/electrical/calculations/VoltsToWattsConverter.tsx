import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VoltsToWattsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(220); // Default 220V
  const [amps, setAmps] = useState<number>(5); // Default 5A
  const [watts, setWatts] = useState<number>(220 * 5); // Default watts

  const calculateWatts = (volts: number, amps: number) => {
    return volts * amps; // Conversion to Watts
  };

  const handleConvert = () => {
    setWatts(calculateWatts(volts, amps));
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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Volts to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage in volts (V) and current in amperes (A) to power in watts (W).</p>

          <div className="space-y-4">
            {/* Volts Input */}
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            {/* Amps Input */}
            <div>
              <label className="block font-medium mb-1">Current in Amps (A):</label>
              <input
                type="number"
                value={amps}
                onChange={(e) => setAmps(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {/* Output Result */}
            <div>
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{watts} W</p>
            </div>

            {/* Examples Section */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* For a device operating at 220V and drawing 5A:
                  <p className="bg-gray-100 p-2 dark:text-black">P = 220V × 5A = 1100W</p>
                </li>
                <li>
                  *Example 2:* For a device operating at 110V and drawing 3A:
                  <p className="bg-gray-100 p-2 dark:text-black">P = 110V × 3A = 330W</p>
                </li>
                <li>
                  *Example 3:* For a device operating at 12V and drawing 10A:
                  <p className="bg-gray-100 p-2 dark:text-black">P = 12V × 10A = 120W</p>
                </li>
              </ul>
            </div>

            {/* Formula Section */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P = V × I</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>I</strong>: Current in amperes (A)</li>
              </ul>
            </div>

            {/* Explanation Section */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts (V) and amperes (A) to watts (W) is based on the formula:
                <br />
                - Power (W) is equal to voltage (V) multiplied by current (I).
                <br />
                - This conversion helps us determine how much power a device is consuming based on its voltage and current.
              </p>
            </div>

            {/* Practical Notes */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Important Notes:</h2>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>The formula assumes that the power is purely real and does not account for reactive power in AC circuits.</li>
                <li>If you're working with an AC system, you may need to account for the power factor.</li>
                <li>Ensure that you use consistent units for voltage and current when calculating watts.</li>
              </ul>
            </div>
          </div>
          {/* Safety Tips Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Safety Tips:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>Always use a multimeter to verify voltage and current values before applying calculations.</li>
    <li>Do not attempt to measure current directly without proper safety equipment or supervision.</li>
    <li>Ensure wires, connectors, and fuses can handle the calculated power load to prevent overheating or fire.</li>
  </ul>
</div>

{/* Use Cases Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Home Appliances:</strong> Calculate the power of microwaves, toasters, or air conditioners based on their rated voltage and current.</li>
    <li><strong>Solar Systems:</strong> Determine how much power is generated by a solar panel given its voltage and current output.</li>
    <li><strong>Battery Design:</strong> Understand the load a battery can support by converting voltage and current into wattage.</li>
    <li><strong>DIY Electronics:</strong> Ensure proper power supply ratings when designing or troubleshooting Arduino/Raspberry Pi projects.</li>
  </ul>
</div>

{/* Frequently Asked Questions */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions:</h2>
  <ul className="space-y-4">
    <li>
      <strong>Q: Does this formula work for both AC and DC?</strong>
      <p className="text-sm">Yes, but for AC circuits, if you're calculating real power, you should multiply by the power factor: <code>P = V × I × PF</code>.</p>
    </li>
    <li>
      <strong>Q: What is the power factor?</strong>
      <p className="text-sm">It’s a number between 0 and 1 that accounts for phase difference between voltage and current in AC systems. Resistive loads like heaters have PF ≈ 1, while motors typically have PF &lt; 1.</p>
    </li>
    <li>
      <strong>Q: Can I use this for 3-phase systems?</strong>
      <p className="text-sm">Not directly. For 3-phase systems, the formula is <code>P = √3 × V × I × PF</code> for line-to-line voltage. You’ll need to adjust accordingly.</p>
    </li>
    <li>
      <strong>Q: What if the voltage or current fluctuates?</strong>
      <p className="text-sm">Use RMS (Root Mean Square) values to calculate average power in fluctuating systems. These values represent effective voltage and current.</p>
    </li>
  </ul>
</div>

{/* Closing Note */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts:</h2>
  <p className="text-sm">
    Accurately calculating power in watts is fundamental for energy efficiency, equipment protection, and proper electrical design. Whether you're a homeowner, student, or electrical engineer, understanding how voltage and current contribute to power is crucial for safe and effective energy use.
  </p>
</div>
{/* Historical Context Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Historical Background:</h2>
  <p className="text-sm">
    The concept of electric power was formalized in the 19th century by pioneers like James Watt and Georg Ohm. James Watt, after whom the unit "watt" is named, significantly contributed to the understanding of power in mechanical and electrical systems. The formula <strong>P = V × I</strong> is rooted in Ohm’s Law and has since become fundamental in both theoretical and practical electrical engineering.
  </p>
</div>

{/* Troubleshooting Common Mistakes */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Troubleshooting Common Mistakes:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Incorrect Units:</strong> Ensure voltage is in volts (V) and current in amperes (A). Avoid using mA or kV without converting.</li>
    <li><strong>Missing Power Factor:</strong> For AC circuits, failing to include the power factor can significantly skew results.</li>
    <li><strong>Fluctuating Inputs:</strong> If using unstable voltage/current sources, consider using averaged or RMS values.</li>
    <li><strong>Overloaded Circuit:</strong> If the power you calculate exceeds the capacity of the circuit, you may trip a breaker or cause overheating.</li>
  </ul>
</div>

{/* Energy Efficiency Insights */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Energy Efficiency Tips:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>Choose devices with higher efficiency ratings to reduce wattage requirements and power bills.</li>
    <li>Use LED lights instead of incandescent bulbs—they require less wattage for the same brightness.</li>
    <li>Unplug idle electronics to avoid phantom load that can still draw watts when turned off.</li>
    <li>Monitor your power usage with smart plugs or meters to identify and eliminate wasteful appliances.</li>
  </ul>
</div>

{/* Advanced Electrical Context */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Concepts:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Apparent Power (VA):</strong> In AC systems, power is sometimes expressed as volt-amperes (VA), which doesn’t factor in power factor.</li>
    <li><strong>Reactive Power (VAR):</strong> Some electrical systems include reactive components that store and release energy, measured in VAR (volt-ampere reactive).</li>
    <li><strong>Real Power (W):</strong> This is the power that does actual work, and what your utility meter records.</li>
  </ul>
</div>
{/* Use Cases Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Common Use Cases:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Home Appliances:</strong> Calculating the wattage of devices like microwaves, refrigerators, and washing machines for load planning.</li>
    <li><strong>DIY Electronics:</strong> Determining the power requirements for Arduino, Raspberry Pi, or other electronics projects.</li>
    <li><strong>Solar Systems:</strong> Assessing the energy consumption to size solar panels and inverters properly.</li>
    <li><strong>Automotive:</strong> Converting voltage and current in car electronics to understand battery usage.</li>
    <li><strong>Industrial Equipment:</strong> Measuring and optimizing machinery energy needs in factories and workshops.</li>
  </ul>
</div>

{/* Electrical Safety Tips */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Electrical Safety Tips:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>Always use insulated tools when working with electrical components.</li>
    <li>Turn off the power supply before measuring or modifying any live circuit.</li>
    <li>Use circuit breakers or fuses to protect equipment from overcurrent conditions.</li>
    <li>Don’t exceed rated wattage for extension cords, outlets, or appliances.</li>
    <li>If in doubt, consult a certified electrician before doing electrical work.</li>
  </ul>
</div>

{/* Mini FAQ Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQ):</h2>
  <ul className="space-y-4">
    <li>
      <strong>Q: Is this calculator for AC or DC circuits?</strong>
      <p className="ml-4">A: It works for both. However, for AC circuits, this assumes a power factor of 1 (ideal). For real-world accuracy, multiply the result by the power factor.</p>
    </li>
    <li>
      <strong>Q: What if I input zero for voltage or current?</strong>
      <p className="ml-4">A: If either is zero, the resulting power will be zero — indicating no power consumption.</p>
    </li>
    <li>
      <strong>Q: Can this be used for 3-phase power?</strong>
      <p className="ml-4">A: Not directly. Three-phase systems require a modified formula: P = √3 × V × I × PF.</p>
    </li>
    <li>
      <strong>Q: What does a higher wattage mean?</strong>
      <p className="ml-4">A: It indicates more power is being consumed, which can translate to more heat or higher electricity bills, depending on efficiency.</p>
    </li>
  </ul>
</div>
{/* Energy Cost Calculation Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Estimate Energy Costs:</h2>
  <p>
    Knowing the wattage of a device helps you estimate electricity costs. To do this:
  </p>
  <ul className="list-disc list-inside ml-4 mt-2">
    <li><strong>Step 1:</strong> Convert watts to kilowatts: <code className="bg-gray-100 px-1 py-0.5 rounded dark:text-black">kW = W ÷ 1000</code></li>
    <li><strong>Step 2:</strong> Multiply by usage time in hours to get kWh: <code className="bg-gray-100 px-1 py-0.5 rounded dark:text-black">kWh = kW × hours</code></li>
    <li><strong>Step 3:</strong> Multiply by your local electricity rate (e.g., $0.15 per kWh): <code className="bg-gray-100 px-1 py-0.5 rounded dark:text-black">Cost = kWh × Rate</code></li>
  </ul>
  <p className="mt-2">
    <strong>Example:</strong> A 1000W device running for 3 hours/day for 30 days:<br />
    1 kW × 3 h × 30 days = 90 kWh → 90 × $0.15 = <strong>$13.50/month</strong>
  </p>
</div>

{/* Real-World Scenarios */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Scenarios:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Computer Setup:</strong> A desktop running at 250W for 8 hours/day uses 2 kWh/day, which is 60 kWh/month.</li>
    <li><strong>Home Heater:</strong> A 1500W space heater used 4 hours/day can consume 180 kWh/month — a significant part of your bill.</li>
    <li><strong>LED Lighting:</strong> A 10W LED bulb used 5 hours/day for a month only consumes 1.5 kWh — very energy efficient!</li>
  </ul>
</div>

{/* Troubleshooting Tips */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Troubleshooting Common Issues:</h2>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Incorrect Input:</strong> Double-check that voltage and current values are correct and not accidentally swapped.</li>
    <li><strong>Decimal Issues:</strong> Some browsers may interpret commas (,) instead of periods (.) as invalid numbers.</li>
    <li><strong>No Output:</strong> Ensure both inputs are greater than 0 before hitting "Convert."</li>
    <li><strong>Unexpected Result:</strong> Confirm the device's specs and whether it's rated for AC or DC — this affects accuracy.</li>
  </ul>
</div>
{/* FAQ Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQs):</h2>
  <ul className="list-disc list-inside ml-4 space-y-3">
    <li>
      <strong>Q: Can I use this calculator for both AC and DC circuits?</strong><br />
      A: Yes, but for AC circuits, this tool assumes a power factor of 1. If the power factor is less than 1, multiply the result by the actual power factor.
    </li>
    <li>
      <strong>Q: What if I don't know the current (amps)?</strong><br />
      A: If you're missing current, you can use Ohm's Law to calculate it: <code>I = V ÷ R</code>, where R is resistance in ohms.
    </li>
    <li>
      <strong>Q: Is this tool suitable for industrial equipment?</strong><br />
      A: It provides a good estimate for most equipment, but for precise industrial needs, consult manufacturer specs or a certified electrician.
    </li>
    <li>
      <strong>Q: Why is my wattage calculation different from what's on the appliance label?</strong><br />
      A: Devices often list their maximum or typical usage. Fluctuations in voltage, current, and efficiency can affect real-time readings.
    </li>
  </ul>
</div>

{/* Glossary Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Glossary of Terms:</h2>
  <dl className="space-y-3 ml-2">
    <div>
      <dt className="font-bold">Voltage (V):</dt>
      <dd>The potential difference that drives electric current through a circuit.</dd>
    </div>
    <div>
      <dt className="font-bold">Current (A):</dt>
      <dd>The flow of electric charge in a circuit, measured in amperes (amps).</dd>
    </div>
    <div>
      <dt className="font-bold">Watt (W):</dt>
      <dd>The unit of power, representing the rate of energy transfer. One watt equals one joule per second.</dd>
    </div>
    <div>
      <dt className="font-bold">Power Factor:</dt>
      <dd>A number between 0 and 1 that represents how efficiently current is being converted into useful work. Relevant in AC circuits.</dd>
    </div>
    <div>
      <dt className="font-bold">Ohm (Ω):</dt>
      <dd>The unit of electrical resistance, used in Ohm’s Law to calculate current if voltage and resistance are known.</dd>
    </div>
  </dl>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToWattsConverter;
