import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MahToWhConverter: React.FC = () => {
  const [mAh, setMah] = useState<number>(0);  // Input in milliampere-hours (mAh)
  const [voltage, setVoltage] = useState<number>(0);  // Input voltage in volts (V)
  const [wh, setWh] = useState<number | string>('');  // Output in watt-hours (Wh)

  // Conversion function to convert mAh to Wh
  const convertToWh = (mAh: number, voltage: number): number => {
    return (mAh * voltage) / 1000;  // Formula: Wh = (mAh * V) / 1000
  };

  const handleConvert = () => {
    const result = convertToWh(mAh, voltage);
    setWh(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      mAh: 5000,
      voltage: 5,
      expectedResult: 25,
      description: 'Example: 5000 mAh at 5V to Wh',
    },
    {
      mAh: 1500,
      voltage: 3.7,
      expectedResult: 5.55,
      description: 'Example: 1500 mAh at 3.7V to Wh',
    },
    {
      mAh: 2000,
      voltage: 12,
      expectedResult: 24,
      description: 'Example: 2000 mAh at 12V to Wh',
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
            <BreadcrumbPage>mAh to Wh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>mAh to Wh Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert milliampere-hours (mAh) and voltage (V) to watt-hours (Wh).</p>

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

            <div>
              <strong>Converted Capacity:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{wh} Wh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>mAh: {example.mAh} mAh, Voltage: {example.voltage} V</p>
                    <p>Converted Capacity: {example.expectedResult} Wh</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Wh = (mAh × V) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Wh</strong>: Capacity in watt-hours (Wh)</li>
                <li><strong>mAh</strong>: Capacity in milliampere-hours (mAh)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert milliampere-hours (mAh) to watt-hours (Wh), multiply the mAh value by the voltage (V) and divide by 1000.
                <br />
                For example, if you have 5000 mAh at 5V, the result is 25 Wh, because (5000 × 5) / 1000 = 25 Wh.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the capacity in watt-hours if a battery has 3000 mAh at 3.7V?
                <br />
                Using the formula: Wh = (mAh × V) / 1000, we get Wh = (3000 × 3.7) / 1000 = 11.1 Wh.
              </p>
            </div>
          </div>

          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why Convert mAh to Wh?</h2>
  <p>
    When dealing with batteries, especially for applications involving multiple components or large systems, knowing the total energy in watt-hours (Wh) is more practical than just current capacity in milliampere-hours (mAh). While mAh tells you how long a battery will last at a given current, Wh includes voltage and gives a better picture of the actual energy available.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Use Cases</h2>
  <p>
    In portable electronics such as power banks, laptops, and electric scooters, manufacturers often state both mAh and Wh. Regulatory agencies like those governing air travel also use Wh to determine battery limits. For instance, most airlines limit carry-on batteries to under 100 Wh. Thus, knowing how to convert mAh to Wh is essential when packing high-capacity devices.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Energy Planning in Solar & IoT Systems</h2>
  <p>
    In energy management scenarios such as solar power or Internet of Things (IoT) devices, battery energy needs are calculated in Wh. For example, a sensor consuming 0.5 watts for 10 hours will require at least 5 Wh of battery energy. Using mAh alone would be insufficient unless voltage is considered. This converter provides clarity when sizing batteries.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Different Voltages, Different Outcomes</h2>
  <p>
    A key point to remember is that two batteries with the same mAh but different voltages will have different energy capacities. For example:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>3000 mAh @ 3.7V → 11.1 Wh</li>
    <li>3000 mAh @ 7.4V → 22.2 Wh</li>
  </ul>
  <p>
    This is why comparing batteries solely on mAh can be misleading — Wh gives a much clearer picture.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Battery Design & System Integration</h2>
  <p>
    For engineers designing battery systems, Wh calculations ensure proper sizing. For example, if you’re building a mobile robot that consumes 20W, and you want it to run for 5 hours, you’ll need at least:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Required Energy = 20 W × 5 h = 100 Wh
  </p>
  <p>
    If using a 12V battery system, you'd need at least:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Ah = Wh / V = 100 / 12 ≈ 8.33 Ah → 8333 mAh
  </p>
  <p>
    These conversions are crucial to building reliable systems that don’t over-discharge or underpower.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">International Shipping & Airline Safety</h2>
  <p>
    Aviation authorities like IATA or FAA limit batteries by their Wh ratings for safety. Batteries under 100 Wh can be carried on flights without special approval, while those between 100 and 160 Wh often need additional permissions.
  </p>
  <p>
    For instance:
    <br />
    A 13000 mAh battery at 3.7V = (13000 × 3.7) / 1000 = 48.1 Wh — safe for flights.
    <br />
    A 20000 mAh battery at 11.1V = (20000 × 11.1) / 1000 = 222 Wh — not allowed in cabin.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Device Ratings</h2>
  <table className="table-auto w-full border-collapse border">
    <thead>
      <tr>
        <th className="border p-2">Device</th>
        <th className="border p-2">Battery (mAh)</th>
        <th className="border p-2">Voltage (V)</th>
        <th className="border p-2">Energy (Wh)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">Smartphone</td><td className="border p-2">4000</td><td className="border p-2">3.85</td><td className="border p-2">15.4</td></tr>
      <tr><td className="border p-2">Laptop</td><td className="border p-2">7000</td><td className="border p-2">11.1</td><td className="border p-2">77.7</td></tr>
      <tr><td className="border p-2">Drone</td><td className="border p-2">6000</td><td className="border p-2">14.8</td><td className="border p-2">88.8</td></tr>
      <tr><td className="border p-2">Power Tool</td><td className="border p-2">2500</td><td className="border p-2">18</td><td className="border p-2">45</td></tr>
    </tbody>
  </table>

  <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding mAh and Wh in Battery Systems</h2>
  <p>
    When it comes to understanding battery specifications, two of the most commonly encountered units are milliampere-hours (mAh) and watt-hours (Wh). Both offer valuable insights, but they represent different aspects of battery performance. 
    <br />
    - mAh tells you the total charge capacity of a battery.
    <br />
    - Wh indicates the amount of energy the battery can deliver over time.
  </p>
  <p className="mt-2">
    For users comparing battery packs, designing backup systems, or evaluating runtime for electronic devices, understanding the relationship between mAh and Wh is essential. This converter bridges that gap by making it simple to translate one unit into the other using the battery's voltage.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Use Cases: Why This Conversion Matters</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Power banks:</strong> Most power banks are rated in mAh, but airlines and regulatory bodies often restrict based on Wh. This tool helps ensure compliance when traveling.</li>
    <li><strong>Laptop batteries:</strong> Battery specs for laptops usually mention Wh. To compare with other devices or spare batteries, converting from mAh is useful.</li>
    <li><strong>Solar storage:</strong> Designing a solar backup system requires accurate energy estimates. Converting from mAh to Wh ensures correct energy planning.</li>
    <li><strong>EV batteries:</strong> Electric vehicle cells are often built from small modules rated in mAh. Understanding their Wh capacity helps calculate range.</li>
    <li><strong>RC hobbies and drones:</strong> Drones and RC vehicles use LiPo batteries that show mAh. Knowing Wh helps users understand runtime and safety limitations.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Extended Formula and Voltage Considerations</h2>
  <p>
    The formula to convert is simple:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Wh = (mAh × V) / 1000
  </p>
  <p>
    But voltage plays a critical role in how much actual energy a battery stores. Two batteries may have the same mAh rating, but the one with the higher voltage stores more total energy.
    <br />
    <br />
    For example:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>3000 mAh at 3.7V = 11.1 Wh</li>
    <li>3000 mAh at 5V = 15 Wh</li>
  </ul>
  <p className="mt-2">
    The difference is substantial and impacts how long the battery can power a device.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Battery Energy Planning</h2>
  <p>
    Suppose you are designing an off-grid system that needs to power a 10W light bulb for 6 hours. That’s a total energy requirement of:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Energy = 10 × 6 = 60 Wh
  </p>
  <p>
    If you have a battery rated at 6000 mAh and 3.7V:
    <br />
    Wh = (6000 × 3.7) / 1000 = 22.2 Wh
  </p>
  <p>
    So you would need approximately three such batteries to meet your energy needs.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">mAh vs Wh Comparison Table</h2>
  <table className="table-auto w-full border-collapse border">
    <thead>
      <tr>
        <th className="border p-2">mAh</th>
        <th className="border p-2">Voltage (V)</th>
        <th className="border p-2">Wh</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">1000</td><td className="border p-2">3.7</td><td className="border p-2">3.7</td></tr>
      <tr><td className="border p-2">2000</td><td className="border p-2">3.7</td><td className="border p-2">7.4</td></tr>
      <tr><td className="border p-2">5000</td><td className="border p-2">5</td><td className="border p-2">25</td></tr>
      <tr><td className="border p-2">10000</td><td className="border p-2">3.7</td><td className="border p-2">37</td></tr>
      <tr><td className="border p-2">20000</td><td className="border p-2">5</td><td className="border p-2">100</td></tr>
    </tbody>
  </table>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Energy Storage in Different Battery Types</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>AA alkaline battery:</strong> ~2000 mAh at 1.5V = 3 Wh</li>
    <li><strong>Laptop battery:</strong> ~4400 mAh at 11.1V = ~48.84 Wh</li>
    <li><strong>Smartphone battery:</strong> ~3000 mAh at 3.8V = ~11.4 Wh</li>
    <li><strong>Power bank:</strong> 10000 mAh at 3.7V = 37 Wh (effective output may vary due to conversion losses)</li>
  </ul>
  <p className="mt-2">
    Note: For USB output, internal voltage (3.7V) is converted to 5V, and some energy is lost in that process.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">FAQs: mAh to Wh Conversion</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Is mAh a measure of energy?</strong> No. mAh measures electric charge. Wh is used to represent actual energy delivered.</li>
    <li><strong>Can I convert mAh to Wh without voltage?</strong> No. You must know the voltage to convert between the two.</li>
    <li><strong>Why is this conversion important?</strong> It helps you determine how long a battery will power a device or how many batteries you need to meet an energy goal.</li>
    <li><strong>Does higher mAh always mean longer battery life?</strong> Not necessarily. It depends on the voltage and the power requirements of the device being used.</li>
  </ul>
</div>
<div className="use-case-section">
  <h2>Real-World Use Case Scenarios</h2>
  <p>
    Let’s consider real-world applications where mAh to Wh conversion is vital:
  </p>
  <ul>
    <li><strong>Smartphones:</strong> Suppose a smartphone battery is rated at 4000 mAh and 3.85 V. Its Wh rating is <code>(4000 × 3.85) / 1000 = 15.4 Wh</code>. This gives consumers an idea of how long their phone might last under typical use.</li>
    <li><strong>Power Banks:</strong> A 20000 mAh power bank with 3.7 V has a total energy of 74 Wh. Knowing this can help estimate how many times it can charge your devices.</li>
    <li><strong>Laptops:</strong> Battery replacements often mention Wh instead of mAh. A 5000 mAh, 11.1 V laptop battery has approximately 55.5 Wh capacity.</li>
    <li><strong>Electric Vehicles:</strong> Though they use Ah instead of mAh, the same principle applies. Converting battery specs into Wh helps standardize the energy content across all EVs.</li>
  </ul>
</div>

<div className="technical-insights-section">
  <h2>Technical Insights into mAh and Wh</h2>
  <p>
    Understanding the technical distinction is important in both engineering and everyday use. While mAh denotes the capacity to deliver a certain current over time, it does not represent the actual stored energy unless voltage is considered.
  </p>
  <p>
    Wh incorporates voltage and gives an energy measure. For this reason, manufacturers often quote battery life in Wh, especially in devices like drones, laptops, and backup battery systems. In engineering documentation, you'll often see:
  </p>
  <code>Energy (Wh) = Capacity (Ah) × Voltage (V)</code>
  <p>
    Therefore, even if two batteries have the same mAh rating, the one with a higher voltage stores more energy.
  </p>
</div>

<div className="historical-context-section">
  <h2>Historical Context of Battery Ratings</h2>
  <p>
    Battery technology has evolved significantly since the 1800s. Early batteries like the Voltaic pile didn’t standardize units such as mAh or Wh. As portable electronics emerged in the 20th century, manufacturers needed a reliable way to measure energy storage. mAh became common in consumer electronics, while Wh became standard in industrial applications.
  </p>
  <p>
    Over time, Wh became favored for comparing different chemistries like NiMH, Li-ion, and LiFePO4, as it reflects true energy output regardless of nominal voltage differences.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
  <p>
    Converting mAh to Wh is a simple but vital step for anyone working with batteries, from electronics enthusiasts to energy system designers. By using the formula <strong>Wh = (mAh × V) / 1000</strong>, you unlock a deeper understanding of energy capacity, making it easier to plan, compare, and optimize your battery-powered devices or systems.
    <br />
    Whether you're buying a new power bank, comparing EV battery specs, or designing a solar-powered solution, this converter helps you make smart, data-driven decisions.
  </p>
</div>

</div>

        

        </CardContent>
      </Card>
    </div>
  );
};

export default MahToWhConverter;
