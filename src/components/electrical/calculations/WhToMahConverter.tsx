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

// Define the calculateMah function before using it
const calculateMah = (wh: number, voltage: number) => {
  return (wh * 1000) / voltage;
};

const WhToMahConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(10); // Default 10 Wh
  const [voltage, setVoltage] = useState<number>(3.7); // Default 3.7V (common for Li-ion batteries)
  const [mah, setMah] = useState<number>(calculateMah(wh, voltage)); // Now this works as calculateMah is defined before use

  const handleConvert = () => {
    setMah(calculateMah(wh, voltage));
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
            <BreadcrumbPage>Wh to mAh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Wh to mAh Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert energy in watt-hours (Wh) to electric charge in milliamp-hours (mAh) for battery capacities.</p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Watt-hours (Wh):</label>
              <input
                type="number"
                value={wh}
                onChange={(e) => setWh(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage (V):</label>
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

            {/* Result Display */}
            <div>
              <strong>Converted Capacity:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{mah.toFixed(2)} mAh</p>
            </div>

            {/* Formula */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>mAh = (Wh × 1000) ÷ V</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>mAh</strong>: Electric charge in milliamp-hours</li>
                <li><strong>Wh</strong>: Energy in watt-hours</li>
                <li><strong>V</strong>: Voltage in volts</li>
              </ul>
            </div>

            {/* Explanation */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert watt-hours (Wh) to milliamp-hours (mAh), multiply the watt-hours by 1000 and divide by the voltage (V). This helps in understanding the battery's charge capacity in mAh based on the energy in Wh and voltage.
              </p>
            </div>

            {/* Practical Examples */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  5 Wh battery at 3.7V → <strong>{calculateMah(5, 3.7).toFixed(2)} mAh</strong>
                </li>
                <li>
                  10 Wh battery at 7.4V → <strong>{calculateMah(10, 7.4).toFixed(2)} mAh</strong>
                </li>
                <li>
                  15 Wh battery at 11.1V → <strong>{calculateMah(15, 11.1).toFixed(2)} mAh</strong>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>

        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert energy in watt-hours (Wh) to electric charge in milliamp-hours (mAh) for battery capacities.
            This is particularly useful in electronics and electrical engineering, where understanding battery performance
            and matching power requirements with energy storage capacity is crucial. Knowing how to convert Wh to mAh helps
            when working with portable electronic devices, solar power systems, or even electric vehicles.
          </p>

          {/* Input Fields */}
          {/* ... [same as before] */}

          {/* Result Display */}
          {/* ... [same as before] */}

          {/* Formula */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
            <p>
              <strong>mAh = (Wh × 1000) ÷ V</strong><br />
              Where:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><strong>mAh</strong>: Electric charge in milliamp-hours</li>
              <li><strong>Wh</strong>: Energy in watt-hours</li>
              <li><strong>V</strong>: Voltage in volts</li>
            </ul>
            <p className="mt-2">
              The factor of 1000 arises because 1 Ah (amp-hour) = 1000 mAh. So, converting watt-hours to amp-hours and
              then multiplying by 1000 gives the result in milliamp-hours.
            </p>
          </div>

          {/* Explanation */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
            <p>
              Watt-hours (Wh) and milliamp-hours (mAh) both measure energy but in slightly different contexts. Wh is
              typically used for larger energy storage devices, such as power banks, batteries for laptops, or home energy systems,
              while mAh is common in smaller devices like smartphones, tablets, or cameras. The formula lets us understand how
              much charge (in mAh) is available from a battery that holds a certain number of watt-hours at a specific voltage.
            </p>
            <p className="mt-2">
              This conversion is essential because most small batteries are rated in mAh, while power supplies or energy generation
              systems (like solar panels) are often described in terms of Wh. To calculate how long a device can run or how long a
              battery might last, both values must be compatible. For example, if you know a device uses 1000 mAh at 3.7 volts,
              that corresponds to 3.7 Wh of energy.
            </p>
          </div>

          {/* Practical Examples */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                5 Wh battery at 3.7V → <strong>{calculateMah(5, 3.7).toFixed(2)} mAh</strong>
              </li>
              <li>
                10 Wh battery at 7.4V → <strong>{calculateMah(10, 7.4).toFixed(2)} mAh</strong>
              </li>
              <li>
                15 Wh battery at 11.1V → <strong>{calculateMah(15, 11.1).toFixed(2)} mAh</strong>
              </li>
              <li>
                20 Wh battery at 5V (common USB power bank voltage) → <strong>{calculateMah(20, 5).toFixed(2)} mAh</strong>
              </li>
              <li>
                50 Wh battery at 12V (laptop battery) → <strong>{calculateMah(50, 12).toFixed(2)} mAh</strong>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Use Cases:</h2>
            <p>
              Converting Wh to mAh is essential in many real-world applications, especially when comparing batteries or estimating
              runtime:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>
                <strong>Smartphones:</strong> Most smartphone batteries are labeled in mAh. A phone battery rated at 3000 mAh at 3.7V
                is equivalent to 11.1 Wh.
              </li>
              <li>
                <strong>Power banks:</strong> Energy storage is often stated in Wh for regulatory or packaging reasons. Users can use
                this tool to convert it to mAh and estimate how many phone charges are possible.
              </li>
              <li>
                <strong>RC Drones:</strong> Drone battery specs often list both Wh and mAh. Understanding the relationship helps
                enthusiasts match battery capacities with motor requirements.
              </li>
              <li>
                <strong>Solar systems:</strong> Off-grid solar setups might store energy in Wh, while DC appliances draw current
                in mAh or Ah. Proper conversion is vital for system design.
              </li>
              <li>
                <strong>Laptops and tablets:</strong> Device power ratings may show watt-hours while battery replacements list
                capacity in mAh.
              </li>
            </ul>
          </div>

          {/* Notes and Tips */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Helpful Tips:</h2>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>
                Ensure the voltage used in the formula is accurate and matches the battery's nominal voltage.
              </li>
              <li>
                When comparing batteries, use either Wh or mAh consistently based on the voltage context.
              </li>
              <li>
                Remember that actual battery capacity may vary depending on temperature, age, and discharge rate.
              </li>
              <li>
                Most lithium-ion cells are rated at 3.6V to 3.7V; using the right value is critical for accurate conversions.
              </li>
            </ul>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Summary:</h2>
            <p>
              This Wh to mAh converter is a practical tool for engineers, hobbyists, and consumers who need to understand and
              compare battery capacities. With just two inputs—watt-hours and voltage—you can get a clear picture of the
              electric charge stored in a battery. This knowledge helps with buying decisions, designing electronics, or
              optimizing energy usage. Whether you’re working with a solar-powered IoT project, evaluating electric vehicle
              range, or planning a mobile charging solution, understanding Wh and mAh conversions is essential.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Reversing the Calculation: mAh to Wh</h2>
            <p>
              If you want to convert in the opposite direction (from mAh to Wh), the formula becomes:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>Wh = (mAh × V) ÷ 1000</code>
            </pre>
            <p>
              This is useful when evaluating the energy required to charge a battery or when estimating energy delivery from
              a power source to a device.
            </p>
          </div>

          {/* Accuracy Considerations */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Factors Affecting Conversion Accuracy</h2>
            <p>
              Real-world battery performance often varies slightly from theoretical calculations due to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li><strong>Voltage drop:</strong> As batteries discharge, their voltage can drop, affecting energy output.</li>
              <li><strong>Discharge rate (C-rate):</strong> Fast discharge may reduce usable capacity.</li>
              <li><strong>Temperature:</strong> High or low temperatures can impact battery efficiency and lifespan.</li>
              <li><strong>Battery age:</strong> Older batteries may have reduced capacity compared to their rated value.</li>
            </ul>
          </div>

          {/* Common Battery Voltages Reference */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Common Battery Voltages</h2>
            <p>Here are typical voltages for popular battery types:</p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li><strong>Li-ion (single cell):</strong> 3.6V – 3.7V</li>
              <li><strong>Li-ion (3S configuration):</strong> 11.1V</li>
              <li><strong>Lead-acid (car battery):</strong> 12V</li>
              <li><strong>NiMH/NiCd (AA type):</strong> 1.2V</li>
              <li><strong>9V block battery:</strong> 9V</li>
            </ul>
          </div>

          {/* Example Project Applications */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Applications in Real Projects</h2>
            <p>
              The Wh to mAh conversion is widely applicable in:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li><strong>IoT Projects:</strong> Sizing batteries for sensors or ESP32 boards based on energy usage.</li>
              <li><strong>Wearable Electronics:</strong> Determining how long a smartwatch or fitness band can run.</li>
              <li><strong>Electric Bikes:</strong> Calculating range based on battery watt-hour ratings and motor power.</li>
              <li><strong>RC Cars:</strong> Matching battery pack capacity to motor draw and expected runtime.</li>
              <li><strong>Camping Equipment:</strong> Powering LED lanterns, fans, or small USB appliances.</li>
            </ul>
          </div>

          {/* Educational Use */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Educational Use for STEM Learning</h2>
            <p>
              This conversion concept is frequently taught in electrical engineering, physics, and robotics courses.
              It teaches:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Basic electric formulas involving energy and charge</li>
              <li>Unit conversions using SI prefixes (milli, kilo, etc.)</li>
              <li>Voltage-current-power relationships (Ohm’s Law and Power Law)</li>
              <li>Battery sizing, selection, and performance estimation</li>
            </ul>
          </div>

          {/* Design Safety Tips */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Design Safety Tips</h2>
            <p>
              When designing or using battery-powered systems, always observe these precautions:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Always match voltage and capacity ratings correctly to avoid damage</li>
              <li>Use fuses or overcurrent protection circuits</li>
              <li>Ensure adequate ventilation in high-discharge devices</li>
              <li>Never overcharge lithium-ion batteries without a proper battery management system (BMS)</li>
              <li>Use certified chargers that match the battery specifications</li>
            </ul>
          </div>

          {/* Glossary of Terms */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Glossary</h2>
            <dl className="ml-4">
              <dt className="font-medium">Wh (Watt-hour)</dt>
              <dd className="mb-2">A measure of electrical energy equivalent to one watt of power consumed for one hour.</dd>

              <dt className="font-medium">mAh (Milliamp-hour)</dt>
              <dd className="mb-2">A unit that measures electric charge, representing the capacity of a battery to supply 1 milliamp for 1 hour.</dd>

              <dt className="font-medium">Voltage (V)</dt>
              <dd className="mb-2">The electrical potential difference, or the "pressure" that drives electric current through a circuit.</dd>
            </dl>
          </div>

          {/* Developer Tools */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">For Developers and Engineers</h2>
            <p>
              If you're building apps, tools, or systems that rely on energy computations, here's how this converter helps:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Used in hardware testing UIs or dashboards for IoT devices</li>
              <li>Embedded into battery selection interfaces in configuration apps</li>
              <li>Incorporated into calculators for e-commerce platforms selling battery packs</li>
              <li>Helpful for firmware developers tuning power profiles on microcontrollers</li>
            </ul>
          </div>

          {/* Additional Use Case */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Use in Solar-Powered Applications</h2>
            <p>
              In solar energy systems, storage batteries are often rated in Wh, while devices run on mAh specifications. This converter
              allows system designers to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Match panel output to storage battery requirements</li>
              <li>Estimate how many times a 2000 mAh phone can be charged from a 40 Wh solar power bank</li>
              <li>Balance daytime generation with night-time device usage</li>
            </ul>
          </div>

          {/* Final Insight */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Final Insight</h2>
            <p>
              With growing demand for portable energy—from wearables to electric mobility—understanding and calculating conversions
              like Wh to mAh is more important than ever. Whether you're a student, engineer, DIYer, or just a tech-savvy consumer,
              this knowledge empowers you to make smarter decisions.
            </p>
          </div>
          <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Effect of Voltage Variations</h2>
    <p>
      Different devices and batteries operate at varying voltages. Even slight changes in voltage can significantly impact mAh calculations.
      For example, a 10 Wh battery at 3.7V gives ~2702 mAh, but at 5V it’s only 2000 mAh. Always use the exact voltage for your device or battery.
    </p>
    <p>
      Devices with voltage regulators may stabilize output, but input-side voltage still affects energy calculations and how long the system can run.
    </p>
  </div>

  {/* Battery Chemistry Overview */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Battery Chemistry and Voltage</h2>
    <p>
      Different battery chemistries come with distinct voltage ranges and charging behaviors. Here’s a quick reference:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li><strong>Lithium-Ion:</strong> 3.6V to 3.7V nominal, full charge up to 4.2V</li>
      <li><strong>Lithium-Polymer:</strong> Similar to Li-Ion but more flexible packaging</li>
      <li><strong>Nickel-Cadmium (NiCd):</strong> 1.2V nominal</li>
      <li><strong>Nickel-Metal Hydride (NiMH):</strong> 1.2V nominal</li>
      <li><strong>Lead-Acid:</strong> 2V per cell, 6V or 12V common formats</li>
    </ul>
  </div>

  {/* Comparing Batteries by Wh and mAh */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Comparing Batteries</h2>
    <p>
      When choosing between two batteries:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>If voltage is the same, higher mAh = longer runtime</li>
      <li>If mAh is the same, higher voltage = more energy (Wh)</li>
      <li>Use the Wh-to-mAh formula to normalize comparisons</li>
    </ul>
    <p>
      Example: A 5000 mAh battery at 3.7V has 18.5 Wh. A 3000 mAh battery at 7.4V has 22.2 Wh and will deliver more energy.
    </p>
  </div>

  {/* Runtime Estimation */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Estimating Runtime from Wh or mAh</h2>
    <p>
      You can estimate how long a device will run using:
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm">
      <code>Runtime (hours) = mAh ÷ device current (mA)</code>
    </pre>
    <p>
      If your battery is 2000 mAh and your device uses 400 mA:
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm">
      <code>Runtime = 2000 ÷ 400 = 5 hours</code>
    </pre>
  </div>

  {/* How Battery Labels Can Be Misleading */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Understanding Battery Labeling</h2>
    <p>
      Battery manufacturers may list Wh, mAh, or both—sometimes based on marketing or regulatory reasons.
      Always double-check:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>If only mAh is shown, look for voltage to compute Wh</li>
      <li>Check if capacity is at nominal or max voltage</li>
      <li>See if rated under specific discharge conditions (C-rate)</li>
    </ul>
  </div>

  {/* Visualizing the Difference */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Visualizing Energy Capacity</h2>
    <p>
      Think of a battery as a water tank:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li><strong>Wh</strong> = how much water the tank holds</li>
      <li><strong>Voltage</strong> = the height of the tank (pressure)</li>
      <li><strong>mAh</strong> = flow capacity under specific voltage</li>
    </ul>
    <p>
      Changing the tank’s height (voltage) affects how fast the water (electricity) flows out and how long it lasts.
    </p>
  </div>

  {/* Advanced Example with Chart */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Advanced Example</h2>
    <p>
      Below is a table showing different batteries and their converted mAh values at various voltages:
    </p>
    <table className="table-auto w-full text-left border-collapse mt-2 text-sm">
      <thead>
        <tr>
          <th className="border-b p-2">Battery</th>
          <th className="border-b p-2">Wh</th>
          <th className="border-b p-2">Voltage (V)</th>
          <th className="border-b p-2">Converted mAh</th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: "Smartphone", wh: 10, v: 3.7 },
          { name: "Laptop", wh: 56, v: 11.1 },
          { name: "Power Bank", wh: 20, v: 5 },
          { name: "Camera Battery", wh: 8, v: 7.2 },
          { name: "Portable Speaker", wh: 12, v: 3.7 }
        ].map((item) => (
          <tr key={item.name}>
            <td className="border-b p-2">{item.name}</td>
            <td className="border-b p-2">{item.wh} Wh</td>
            <td className="border-b p-2">{item.v} V</td>
            <td className="border-b p-2">{((item.wh * 1000) / item.v).toFixed(2)} mAh</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Tools That Use Wh/mAh Data */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Where This Data is Used</h2>
    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
      <li>Battery management systems (BMS)</li>
      <li>Electric vehicle dashboards</li>
      <li>IoT battery monitoring apps</li>
      <li>Online battery comparison tools</li>
      <li>Mobile OS battery stats (Android/iOS)</li>
    </ul>
  </div>

  {/* Developer API Idea */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Developer Tip: Create an API</h2>
    <p>
      If you're building an application or dashboard, you can create an API endpoint like:
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm">
      <code>
        POST /convert-wh-to-mah{"\n"}
        {"{"}
        "wh": 10, "voltage": 3.7{"}"}
      </code>
    </pre>
    <p>
      And return:
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm">
      <code>{"{ \"mah\": 2702.70 }"}</code>
    </pre>
  </div>
        </CardContent>

      </Card>
    </div>
  );
};

export default WhToMahConverter;
