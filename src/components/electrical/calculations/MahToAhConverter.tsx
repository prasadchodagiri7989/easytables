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

const MahToAhConverter: React.FC = () => {
  const [mAh, setMah] = useState<number>(0);  // Input in milliampere-hours (mAh)
  const [ah, setAh] = useState<number | string>('');  // Output in ampere-hours (Ah)

  // Conversion function to convert mAh to Ah
  const convertToAh = (mAh: number): number => {
    return mAh / 1000;  // 1 Ah = 1000 mAh
  };

  const handleConvert = () => {
    const result = convertToAh(mAh);
    setAh(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      mAh: 5000,
      expectedResult: 5,
      description: 'Example: 5000 mAh to Ah',
    },
    {
      mAh: 1500,
      expectedResult: 1.5,
      description: 'Example: 1500 mAh to Ah',
    },
    {
      mAh: 1000,
      expectedResult: 1,
      description: 'Example: 1000 mAh to Ah',
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
              <Link to="/battery-conversions">Battery Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>mAh to Ah Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>mAh to Ah Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert milliampere-hours (mAh) to ampere-hours (Ah) for battery capacity.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Capacity in mAh:</label>
              <input
                type="number"
                value={mAh}
                onChange={(e) => setMah(Number(e.target.value))}
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
              <strong>Converted Capacity (Ah):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{ah} Ah</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>mAh: {example.mAh} mAh</p>
                    <p>Converted Capacity: {example.expectedResult} Ah</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Ah = mAh / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Ah</strong>: Capacity in ampere-hours (Ah)</li>
                <li><strong>mAh</strong>: Capacity in milliampere-hours (mAh)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert milliampere-hours (mAh) to ampere-hours (Ah), divide the value in mAh by 1000.
                <br />
                For example, 5000 mAh = 5 Ah, since 5000 ÷ 1000 = 5.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the capacity in ampere-hours if a battery has 3000 mAh?
                <br />
                Using the formula: Ah = mAh / 1000, we get Ah = 3000 / 1000 = 3 Ah.
              </p>
            </div>
          </div>

          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why Convert mAh to Ah?</h2>
  <p>
    Milliampere-hours (mAh) and ampere-hours (Ah) are both units that describe a battery’s electrical capacity. The mAh unit is typically used for smaller batteries, such as those in smartphones, wireless earbuds, and power banks, while Ah is more common in automotive, solar, and industrial battery systems.
  </p>
  <p>
    Converting between these units is essential when comparing or calculating total battery backup times, charging needs, or total energy storage in systems where different standards are used. For example, a 12V car battery might be rated in Ah, while the 5V backup bank for your mobile phone will likely use mAh. 
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Battery Capacity</h2>
  <p>
    Battery capacity refers to the total amount of charge a battery can hold. This value directly affects how long a device can run before needing a recharge. The formula to convert is simple:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Ah = mAh / 1000
  </p>
  <p>
    For instance, if a battery is rated at 2500 mAh, then:
    <br />
    2500 / 1000 = 2.5 Ah
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Use Cases</h2>
  <p>
    Let's explore where this conversion applies in everyday scenarios:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Power Banks:</strong> Most portable power banks are rated in mAh. Converting this to Ah gives a clearer idea of total energy available for charging multiple devices.</li>
    <li><strong>Electric Vehicles:</strong> Car battery specs often mention Ah. When comparing with auxiliary devices or chargers rated in mAh, conversion is necessary.</li>
    <li><strong>Solar Storage:</strong> Solar systems use deep-cycle batteries that store energy measured in Ah. Understanding how this relates to small components or devices in mAh helps in system design.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Important Notes When Converting</h2>
  <p>
    - The conversion from mAh to Ah is purely mathematical and does not involve voltage or energy (watt-hours).
    <br />
    - However, energy stored can be calculated using: <strong>Wh = Ah × V</strong>
    <br />
    - If you want to know how long a device can run, you’ll need its power consumption and voltage too.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Battery Runtime Estimation</h2>
  <p>
    To estimate how long a battery will last, you can use this formula:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Runtime (hours) = Capacity (Ah) / Load Current (A)
  </p>
  <p>
    Example: A 2000 mAh battery powering a device that consumes 0.5 A:
    <br />
    Ah = 2000 / 1000 = 2 Ah
    <br />
    Runtime = 2 / 0.5 = 4 hours
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">mAh to Ah Chart</h2>
  <table className="table-auto w-full border-collapse border">
    <thead>
      <tr>
        <th className="border p-2 text-left">mAh</th>
        <th className="border p-2 text-left">Ah</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">500 mAh</td><td className="border p-2">0.5 Ah</td></tr>
      <tr><td className="border p-2">1000 mAh</td><td className="border p-2">1 Ah</td></tr>
      <tr><td className="border p-2">1500 mAh</td><td className="border p-2">1.5 Ah</td></tr>
      <tr><td className="border p-2">2000 mAh</td><td className="border p-2">2 Ah</td></tr>
      <tr><td className="border p-2">5000 mAh</td><td className="border p-2">5 Ah</td></tr>
      <tr><td className="border p-2">10000 mAh</td><td className="border p-2">10 Ah</td></tr>
    </tbody>
  </table>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Q: Is a higher mAh always better?</strong><br />
      A: Not necessarily. Higher mAh means longer runtime but may also mean slower charging or larger physical size.
    </li>
    <li><strong>Q: Do voltage and mAh matter together?</strong><br />
      A: Yes, to calculate watt-hours (energy), both are needed: Wh = (mAh ÷ 1000) × V.
    </li>
    <li><strong>Q: Can I replace a 1500 mAh battery with a 3000 mAh one?</strong><br />
      A: Generally yes, as long as voltage and size are compatible.
    </li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
  <p>
    Converting from mAh to Ah simplifies understanding of battery specs across different scales of devices — from tiny electronics to industrial-grade energy systems. This converter makes it effortless to interpret battery labels and plan usage, ensuring compatibility, efficiency, and reliability across all applications.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Deep Dive into Battery Capacity Units</h2>
  <p>
    When discussing battery capacity, two of the most common terms are milliampere-hours (mAh) and ampere-hours (Ah). These values represent how much electric charge a battery can deliver over time. The larger the number, the longer the battery can power a device. However, these units are often used interchangeably without proper conversion, leading to confusion, especially in industries like electronics, electric vehicles, and renewable energy systems.
  </p>
  <p>
    Understanding how to convert between these two units is essential. The conversion is straightforward: 1 Ah = 1000 mAh. This means if a battery is rated at 3000 mAh, it actually holds 3 Ah. The reverse is also true — a 2.5 Ah battery is equivalent to 2500 mAh.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Application in Different Industries</h2>
  <p>
    In the consumer electronics industry, manufacturers often use mAh because it allows for more detailed capacity specifications. A smartphone battery might be rated at 4200 mAh instead of just 4.2 Ah. This granular unit gives users and engineers a better sense of runtime and energy requirements.
  </p>
  <p>
    In contrast, large-scale systems like solar energy storage or uninterruptible power supplies (UPS) use Ah ratings. For example, a solar battery bank may be listed as 200 Ah, which provides a simple representation when dealing with higher energy capacities.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Energy Capacity vs. Power</h2>
  <p>
    It's important to distinguish between current capacity (Ah or mAh) and energy capacity (Wh or kWh). While Ah gives you an idea of how much current the battery can supply over time, energy capacity also takes voltage into account:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Energy (Wh) = Capacity (Ah) × Voltage (V)
  </p>
  <p>
    For instance, a 12V battery with a 5 Ah capacity stores:
    <br />
    12 × 5 = 60 Wh
  </p>
  <p>
    This means the battery can theoretically deliver 60 watts for one hour or 30 watts for two hours.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Importance of Conversion in System Design</h2>
  <p>
    In designing energy systems — whether for remote sensors or RV setups — converting mAh to Ah (or vice versa) is vital. Imagine you're configuring a backup system and the manufacturer lists the battery pack in mAh, but your power budget spreadsheet uses Ah. A simple mistake in interpreting these values could result in underpowered systems or blown circuits.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Consider Discharge Rates</h2>
  <p>
    Knowing a battery’s Ah rating helps assess how long it can power a load. However, actual performance depends on the discharge rate or C-rate. This measures how fast the battery discharges in relation to its capacity:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Discharge Current (A) = Capacity (Ah) × C-rate
  </p>
  <p>
    For a 2 Ah battery with a 1C discharge rate, the battery provides 2A for one hour. A 2C rate would mean 4A for 30 minutes.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Charging Efficiency and mAh</h2>
  <p>
    When charging a battery, the charger’s output is often measured in mAh or Ah as well. To fully recharge a 2000 mAh battery, you need at least that many mAh from the charger — though in practice, you'll need more due to energy loss and conversion inefficiencies.
  </p>
  <p>
    For example, a 2000 mAh battery being charged at 500 mA would take roughly:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Time (h) = Capacity (mAh) / Charging Current (mA) = 2000 / 500 = 4 hours
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Choosing the Right Battery Capacity</h2>
  <p>
    Battery selection often hinges on capacity. For low-drain devices like clocks, small mAh batteries suffice. For power tools or drones, high-Ah batteries are essential. Here’s a general guide:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Small IoT sensors: 100–300 mAh</li>
    <li>Smartphones: 2500–5000 mAh</li>
    <li>Laptops: 4000–9000 mAh (4–9 Ah)</li>
    <li>Electric bikes: 10–30 Ah</li>
    <li>Powerwalls/home storage: 100+ Ah</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
  <p>
    Understanding how to convert mAh to Ah isn’t just a mathematical necessity — it’s a practical tool for system design, device troubleshooting, and battery comparison. Whether you're a hobbyist working with drones or a solar technician sizing storage banks, this simple conversion empowers more accurate decisions.
  </p>
</div>
{/* Advanced Use Cases */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Use Cases</h2>
  <p>
    While the mAh to Ah conversion is straightforward, applying it effectively across different scenarios requires deeper understanding. Here are some contexts where accurate conversions are critical:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Remote Monitoring Systems:</strong> IoT devices in remote areas often run on battery packs. Estimating battery life in Ah ensures longer operational cycles before replacement or recharging.</li>
    <li><strong>Medical Devices:</strong> From hearing aids to portable oxygen concentrators, understanding power supply in Ah ensures compliance with operational standards.</li>
    <li><strong>Camping & Outdoor Gear:</strong> Devices like lanterns, GPS trackers, and solar-powered battery packs need precise energy management in terms of Ah.</li>
    <li><strong>Industrial Automation:</strong> Backup systems and sensors must be sized accurately for both safety and efficiency.</li>
  </ul>
</div>

{/* How Voltage Influences Battery Capacity Perception */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Voltage and Its Influence</h2>
  <p>
    It's important to note that while mAh measures charge, voltage affects how much usable energy that charge delivers. Two batteries rated at 5000 mAh might store vastly different energy if their voltages differ:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black font-mono">
    Energy (Wh) = (mAh ÷ 1000) × V
  </pre>
  <p>
    For example:
    <br />
    Battery A: 5000 mAh @ 3.7V → 18.5 Wh<br />
    Battery B: 5000 mAh @ 7.4V → 37 Wh
  </p>
  <p>
    Even though both are rated at 5000 mAh, Battery B stores twice the energy.
  </p>
</div>

{/* Converting Ah Back to mAh */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Reverse Conversion: Ah to mAh</h2>
  <p>
    Just as you convert mAh to Ah by dividing by 1000, you can reverse the process by multiplying:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black font-mono">
    mAh = Ah × 1000
  </pre>
  <p>
    This is useful when battery specifications are provided in Ah but your application or datasheet expects mAh.
  </p>
</div>

{/* How Battery Degradation Affects Ah */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Battery Degradation Over Time</h2>
  <p>
    A battery rated at 2000 mAh when new may only deliver 1500 mAh after 2–3 years of regular use. Environmental factors, charge/discharge cycles, and storage temperature all affect its effective Ah.
  </p>
  <p>
    Manufacturers often list expected cycle life, such as “500 full charge cycles.” After that, expect reduced capacity:
  </p>
  <pre className="bg-gray-100 p-3 rounded dark:text-black font-mono">
    Effective Ah = Rated Ah × (1 − degradation%)
  </pre>
  <p>
    Monitoring and replacing aging batteries ensures safety and performance.
  </p>
</div>

{/* Comparison Table: mAh vs Ah by Application */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Comparison by Application</h2>
  <table className="table-auto w-full border-collapse border text-sm">
    <thead>
      <tr>
        <th className="border p-2">Application</th>
        <th className="border p-2">Typical mAh</th>
        <th className="border p-2">Ah Equivalent</th>
        <th className="border p-2">Voltage</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">Smartwatch</td><td className="border p-2">300 mAh</td><td className="border p-2">0.3 Ah</td><td className="border p-2">3.7V</td></tr>
      <tr><td className="border p-2">Smartphone</td><td className="border p-2">4000 mAh</td><td className="border p-2">4 Ah</td><td className="border p-2">3.8V</td></tr>
      <tr><td className="border p-2">Laptop Battery</td><td className="border p-2">7000 mAh</td><td className="border p-2">7 Ah</td><td className="border p-2">11.1V</td></tr>
      <tr><td className="border p-2">E-Bike Battery</td><td className="border p-2">15000 mAh</td><td className="border p-2">15 Ah</td><td className="border p-2">36V</td></tr>
      <tr><td className="border p-2">Home Inverter</td><td className="border p-2">100000 mAh</td><td className="border p-2">100 Ah</td><td className="border p-2">12V</td></tr>
    </tbody>
  </table>
</div>

{/* Best Practices for Battery Usage */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Battery Usage Best Practices</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Always match battery Ah with the load current to avoid overheating or undervoltage.</li>
    <li>Avoid deep discharge cycles unless supported by battery chemistry (e.g., LiFePO4).</li>
    <li>Charge batteries at the recommended current (usually C/2 or C/3 rate).</li>
    <li>Store batteries in a cool, dry place at ~50% charge for long-term shelf life.</li>
    <li>Periodically test Ah capacity using specialized tools or smart chargers.</li>
  </ul>
</div>

{/* Safety Warnings When Dealing with High Ah */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Safety Considerations</h2>
  <p>
    Larger batteries (e.g., {">"}10 Ah) carry significant electrical energy and pose risks of fire, explosion, or electric shock if mishandled.
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Never short-circuit terminals.</li>
    <li>Use appropriate circuit protection like fuses or BMS (Battery Management Systems).</li>
    <li>Always follow manufacturer charging/discharging limits.</li>
    <li>Do not mix batteries of different Ah ratings in series or parallel without balance circuits.</li>
  </ul>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default MahToAhConverter;
