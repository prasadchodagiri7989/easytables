import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const WattsToAmpsConverter: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const wattsQuery = searchParams.get("watts");

  const initialWatts = wattsQuery ? parseFloat(wattsQuery) : 1;

  const [voltage, setVoltage] = useState<number>(12); // Default voltage: 12V
  const [powerFactor, setPowerFactor] = useState<number>(1); // Default PF: 1 (pure resistive)
  const [watts, setWatts] = useState<number>(initialWatts); // Default wattage from query or 1W

  const calculateAmps = (watts: number, voltage: number, powerFactor: number) => {
    return watts / (powerFactor * voltage);
  };

  const amps = calculateAmps(watts, voltage, powerFactor);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
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
            <BreadcrumbPage>Watts to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert electric power in watts (W) to electric current in amps (A), considering voltage and power factor (for AC).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power (Watts):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage (Volts):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                step="0.01"
                min="0"
                max="1"
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div className="my-4">
              <button
                onClick={() => {}}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Convert
              </button>
            </div>

            <div>
              <strong>Converted Current (Amps):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{amps.toFixed(6)} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculations:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>For 120V DC: <strong>{calculateAmps(watts, 120, 1).toFixed(6)} A</strong></li>
                <li>For 120V AC (PF = 0.8): <strong>{calculateAmps(watts, 120, 0.8).toFixed(6)} A</strong></li>
                <li>For 230V AC (PF = 0.8): <strong>{calculateAmps(watts, 230, 0.8).toFixed(6)} A</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                For <strong>DC Power:</strong><br />
                <code>amps = watts ÷ volts</code><br />
                For <strong>AC Power:</strong><br />
                <code>amps = watts ÷ (PF × volts)</code>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert from watts to amps, divide the power in watts by the voltage for DC systems. For AC systems, divide by the product of the power factor and voltage.
              </p>
            </div>
          </div>
          <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Real-World Examples of Watts to Amps Conversion</h2>
    <p>
      To fully understand the significance of watts to amps conversion, let’s consider some practical, real-world examples. These will help clarify how this conversion is used in various devices and settings.
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>Home Appliances:</strong> When you have a device like a refrigerator or an air conditioner, the power consumption is usually given in watts. To determine the current (amps) being drawn by the appliance, use the converter.
        <br />
        For example, a refrigerator consuming 100 watts on a 120V supply will draw:
        <br />
        <strong>Amps = 100W ÷ 120V = 0.833 A</strong>
      </li>
      <li>
        <strong>Electric Cars:</strong> Electric cars use large battery packs to store energy. To calculate the current draw from a battery, we need to know the power consumption in watts and the battery voltage.
        <br />
        For instance, an electric car with a 3,000W power requirement on a 400V battery will use:
        <br />
        <strong>Amps = 3000W ÷ 400V = 7.5 A</strong>
      </li>
      <li>
        <strong>Power Tools:</strong> If you're using a power tool like a drill, saw, or grinder, it's important to know how much current is drawn to avoid overloading circuits. For example, a power tool rated at 600 watts on a 240V AC supply would draw:
        <br />
        <strong>Amps = 600W ÷ 240V = 2.5 A</strong>
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Understanding Power Factor (PF) in AC Systems</h2>
    <p>
      Power factor (PF) is a key concept when dealing with AC (alternating current) systems. The power factor represents the efficiency with which the current is being converted into useful work. It is a ratio between real power (watts) and apparent power (volt-amperes, VA). In a purely resistive load, PF is 1, meaning all the power is being used efficiently. However, in inductive or capacitive loads (like motors), PF is typically less than 1.
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>Perfect Power Factor (PF = 1):</strong> This occurs in purely resistive circuits (e.g., electric heaters or incandescent light bulbs). All the power supplied is used to do useful work.
      </li>
      <li>
        <strong>Low Power Factor (PF &lt 1):</strong> Motors and other inductive loads often have a power factor of 0.7 to 0.9. This means that more current is needed to deliver the same amount of real power.
        <br />
        For example, with a 100W load on a 120V AC supply and a power factor of 0.8, the current would be:
        <br />
        <strong>Amps = 100W ÷ (0.8 × 120V) = 1.042 A</strong>
      </li>
      <li>
        <strong>Improving Power Factor:</strong> To improve the power factor and reduce energy losses, devices like capacitors or power factor correction equipment are used.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Impact of Voltage on Amps Calculation</h2>
    <p>
      The voltage applied to a circuit has a direct impact on the amount of current drawn. The higher the voltage, the less current is required to deliver the same amount of power. This principle is crucial in electrical engineering, especially when dealing with long-distance power transmission.
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>High Voltage Transmission:</strong> Power is often transmitted over long distances at high voltages (e.g., 110kV or 220kV) to minimize energy losses. When the voltage is higher, the current decreases, reducing the power losses in the transmission lines.
      </li>
      <li>
        <strong>Low Voltage Appliances:</strong> Household appliances typically run on 120V or 240V, but more powerful systems like industrial machines may use much higher voltages to reduce the current draw. For example:
        <br />
        A 1000W industrial machine operating at 480V would draw:
        <br />
        <strong>Amps = 1000W ÷ 480V = 2.083 A</strong>
      </li>
      <li>
        <strong>AC vs. DC Systems:</strong> In DC systems, current and voltage are directly related by Ohm’s Law. However, in AC systems, you must consider the power factor, as it affects the efficiency of energy use.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Practical Tips for Using the Watts to Amps Converter</h2>
    <p>
      Here are some practical tips to make the most of this converter and understand your power usage:
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>Accurate Power Rating:</strong> Always use the accurate power rating of your device (in watts) from the manufacturer’s specifications. This ensures that your conversion is accurate.
      </li>
      <li>
        <strong>Use Correct Voltage:</strong> If you are working with DC systems, always input the correct voltage (e.g., 12V for car batteries). For AC systems, ensure that the voltage matches your local supply (120V or 240V, depending on your region).
      </li>
      <li>
        <strong>Consider Power Factor for AC:</strong> If you are converting power for an AC device, make sure you include the power factor. For resistive loads, the power factor is typically 1, but for inductive or capacitive loads, it will be less than 1.
      </li>
      <li>
        <strong>Use for Circuit Sizing:</strong> This conversion is useful for sizing circuits, ensuring that wires, fuses, and circuit breakers can handle the expected current without overheating or causing damage.
      </li>
      <li>
        <strong>Estimate Energy Consumption:</strong> By calculating amps, you can also estimate how much energy your device consumes over time. For example, a 1A current drawn for 24 hours would use:
        <br />
        <strong>Energy (Wh) = 1A × 120V × 24 hours = 2880Wh (2.88kWh)</strong>
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Common FAQs</h2>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>What is the difference between amps and watts?</strong><br />
        Watts measure the rate of energy consumption, while amps measure the amount of electrical current. Watts are calculated as volts times amps.
      </li>
      <li>
        <strong>Why do I need to know the power factor?</strong><br />
        The power factor helps determine how efficiently the electrical power is being used. For AC devices, a low power factor means you need more current to deliver the same amount of real power.
      </li>
      <li>
        <strong>Can I convert watts to amps without knowing the voltage?</strong><br />
        No, the voltage is a key factor in the conversion. For DC systems, you divide watts by the voltage. For AC systems, you also need the power factor in the calculation.
      </li>
      <li>
        <strong>Why is the current lower in high voltage systems?</strong><br />
        Higher voltage allows for the same amount of power to be delivered using less current, which reduces power losses and increases efficiency, especially over long distances.
      </li>
    </ul>
  </div>
  <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Practical Applications:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Home Appliances:</strong> Understand how many amps your microwave or air conditioner draws to ensure safe wiring.</li>
    <li><strong>Generator Sizing:</strong> Determine if your generator can handle your load by converting watts to amps.</li>
    <li><strong>Solar Systems:</strong> Properly size cables and inverters by calculating current draw from wattage ratings.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conversion Table (PF = 1):</h2>
  <div className="overflow-x-auto">
    <table className="table-auto border border-gray-300 w-full text-left text-sm">
      <thead>
        <tr className="bg-black-200">
          <th className="border px-3 py-2">Power (Watts)</th>
          <th className="border px-3 py-2">Voltage (Volts)</th>
          <th className="border px-3 py-2">Current (Amps)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-3 py-2">60W</td>
          <td className="border px-3 py-2">120V</td>
          <td className="border px-3 py-2">0.5 A</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">100W</td>
          <td className="border px-3 py-2">230V</td>
          <td className="border px-3 py-2">0.435 A</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">1000W</td>
          <td className="border px-3 py-2">120V</td>
          <td className="border px-3 py-2">8.33 A</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">1500W</td>
          <td className="border px-3 py-2">240V</td>
          <td className="border px-3 py-2">6.25 A</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">2000W</td>
          <td className="border px-3 py-2">230V</td>
          <td className="border px-3 py-2">8.7 A</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">FAQs:</h2>
  <div className="space-y-4">
    <div>
      <strong>Q: What is a power factor?</strong>
      <p>A: It’s the ratio of real power to apparent power. It shows how effectively electrical power is used. A PF of 1 means 100% efficiency.</p>
    </div>
    <div>
      <strong>Q: Why does voltage matter in the conversion?</strong>
      <p>A: For the same power, lower voltage means higher current. This is why high-power appliances require higher voltages to reduce current draw.</p>
    </div>
    <div>
      <strong>Q: What happens if I use a power factor of 0?</strong>
      <p>A: Mathematically, it causes division by zero. In real-world applications, PF should be greater than 0.</p>
    </div>
    <div>
      <strong>Q: What about 3-phase systems?</strong>
      <p>A: Use the formula: <code>amps = watts ÷ (√3 × volts × PF)</code> for balanced 3-phase AC loads.</p>
    </div>
  </div>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Safety Tips:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Use Proper Wire Gauges:</strong> Higher current requires thicker wires. Always consult a wire gauge chart to avoid overheating or fire hazards.</li>
    <li><strong>Include Safety Margins:</strong> Never run circuits at their maximum current rating. Allow at least 20% overhead.</li>
    <li><strong>Install Circuit Breakers:</strong> Ensure your current draw doesn’t exceed breaker ratings to prevent equipment damage or hazards.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Common Mistakes:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Ignoring Power Factor:</strong> Especially in AC circuits, not accounting for PF leads to incorrect current calculations.</li>
    <li><strong>Mixing AC and DC:</strong> The formula differs; make sure to use the correct one for your system type.</li>
    <li><strong>Using Nominal Voltage:</strong> Real-world voltage often varies. Use measured or rated values for precise calculations.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Technical Notes:</h2>
  <p className="text-sm">
    Current in a conductor generates heat. The formula <code>P = I² × R</code> means doubling the current increases heat fourfold. This makes accurate amp estimation crucial for safe design.
  </p>
  <p className="text-sm mt-2">
    Additionally, power factor in inductive loads like motors or transformers can significantly reduce current efficiency. This is why power factor correction is common in industrial systems.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Industry Applications:</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Electric Vehicle Charging:</strong> Calculate amps needed to charge EV batteries from given charger wattage.</li>
    <li><strong>Data Centers:</strong> Estimate current loads for racks and servers based on total power draw.</li>
    <li><strong>Industrial Machinery:</strong> Determine wire size and breaker ratings for motors and heavy equipment.</li>
  </ul>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToAmpsConverter;
