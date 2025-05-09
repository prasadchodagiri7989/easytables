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

const VAToWattsConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor
  const [powerWatts, setPowerWatts] = useState<number | string>('—'); // Calculated power in watts

  // Function to calculate power in watts
  const calculatePowerWatts = (apparentPower: number, powerFactor: number): number => {
    return apparentPower * powerFactor; // Formula to convert VA to W
  };

  const handleConvert = () => {
    const result = calculatePowerWatts(apparentPower, powerFactor);
    setPowerWatts(result);
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
            <BreadcrumbPage>VA to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>VA to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert apparent power in volt-amperes (VA) and power factor to real power in watts (W).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in Volt-Amperes (VA):</label>
              <input
                type="number"
                value={apparentPower}
                onChange={(e) => setApparentPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                step="0.1"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
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
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{powerWatts} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P<sub>W</sub> = S<sub>VA</sub> × PF</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P<sub>W</sub></strong>: Real power in watts (W)</li>
                <li><strong>S<sub>VA</sub></strong>: Apparent power in volt-amperes (VA)</li>
                <li><strong>PF</strong>: Power factor (a value between 0 and 1)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from apparent power (VA) to real power (W) involves multiplying the apparent power by the power factor (PF), which accounts for the efficiency of the electrical system.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>1000 VA × 0.8 PF = 800 W</li>
                <li>5000 VA × 0.9 PF = 4500 W</li>
                <li>2500 VA × 0.6 PF = 1500 W</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Why Convert VA to Watts?</h2>
            <p>
              VA (volt-amperes) represents the apparent power consumed by an electrical device, whereas watts represent the actual real power used to perform work or generate heat, light, etc. In AC (alternating current) systems, the distinction arises because voltage and current may not always be perfectly in phase. The power factor (PF) quantifies this phase difference and affects how much usable power (watts) you get from the apparent power (VA).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Understanding Power Factor</h2>
            <p>
              The power factor is a dimensionless number between 0 and 1 that represents the efficiency with which the current is being converted into useful work. A power factor of 1 (also called "unity power factor") means all the power is being effectively converted into work. Lower values indicate inefficiencies due to inductive or capacitive loads such as motors, fluorescent lights, or transformers.
            </p>
            <p>
              Power factor is influenced by the type of load:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Resistive loads</strong> (e.g., heaters, incandescent bulbs) typically have a PF near 1.</li>
              <li><strong>Inductive loads</strong> (e.g., motors, pumps, HVAC units) often result in lower PFs (0.6–0.9).</li>
              <li><strong>Capacitive loads</strong> are less common but can cause leading power factors.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Common Use Cases for VA to W Conversion</h2>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Data centers:</strong> Servers and UPS systems are often rated in VA, but cooling systems and energy budgeting need to know the real wattage.</li>
              <li><strong>Electrical installations:</strong> When sizing circuit breakers or cabling, real power (watts) determines heat and safety limits.</li>
              <li><strong>Generator sizing:</strong> Knowing how much wattage you actually need helps in selecting a generator with an appropriate VA rating and PF.</li>
              <li><strong>Solar energy systems:</strong> VA ratings of inverters must align with the wattage requirements of the appliances to ensure efficiency and stability.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">How to Improve Power Factor</h2>
            <p>
              In commercial and industrial settings, improving power factor can reduce electrical costs and prevent penalties. Here are common strategies:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Install <strong>capacitor banks</strong> to offset inductive loads.</li>
              <li>Use <strong>power factor correction (PFC) devices</strong> or drives on motors.</li>
              <li>Upgrade to <strong>high-efficiency motors</strong> or LED lighting.</li>
              <li>Balance phase loads to improve efficiency and reduce losses.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Advanced Formula Considerations</h2>
            <p>
              In three-phase power systems, the formula for real power becomes:
            </p>
            <p className="bg-gray-100 p-2 rounded dark:text-black font-mono">
              P(W) = √3 × V × I × PF
            </p>
            <p>
              Where:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>V</strong> is the line-to-line voltage</li>
              <li><strong>I</strong> is the current in amperes</li>
              <li><strong>PF</strong> is the power factor</li>
            </ul>
            <p>
              This formula is crucial in industrial applications where motors and large three-phase systems are common. For single-phase systems, the formula remains:
            </p>
            <p className="bg-gray-100 p-2 rounded dark:text-black font-mono">
              P(W) = V × I × PF
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">FAQ: Frequently Asked Questions</h2>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li><strong>Is VA always higher than watts?</strong><br />Yes, unless the power factor is exactly 1. In typical real-world scenarios, VA &gt; W.</li>
              <li><strong>Can I ignore power factor for home appliances?</strong><br />For small devices, it may not matter much, but for large appliances like air conditioners or UPS systems, PF matters a lot.</li>
              <li><strong>What happens if PF is very low?</strong><br />A low power factor means more apparent power is needed to deliver the same watts, increasing strain on generators, wiring, and transformers.</li>
              <li><strong>Why do manufacturers list VA instead of watts?</strong><br />Because VA represents the total demand (real + reactive), which helps size the electrical infrastructure more conservatively.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
            <p>
              Converting VA to watts provides a realistic understanding of how much usable power a device can supply or consume. For efficient energy use and proper equipment selection, this conversion is essential—especially when dealing with backup power systems, generators, or heavy-duty industrial equipment.
            </p>
            <p>
              Always remember: the higher the power factor, the closer your real power (watts) will be to the apparent power (VA). Regularly monitoring and improving PF can lead to significant energy savings and increased operational reliability.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications of VA to Watts Conversion</h2>
            <p>
              In practical electrical engineering and power distribution, knowing how to convert volt-amperes (VA) to watts is essential. For instance, when engineers design electrical panels, size transformers, or configure UPS systems, they must calculate the real power that devices will consume. This ensures systems are neither underpowered nor oversized, which affects efficiency and cost.
            </p>
            <p>
              VA ratings are often used by manufacturers of power supplies, transformers, and inverters because VA measures total load without regard to power factor. However, in terms of billing, efficiency, and thermal design, wattage is what truly matters. A device rated at 2000 VA with a 0.7 PF only delivers 1400 watts of real power. Designing based on VA alone may overestimate the usable power.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Common Equipment Where VA and PF Are Relevant</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Uninterruptible Power Supplies (UPS):</strong> These are often rated in VA. Choosing one with a good PF (≥ 0.9) is crucial for ensuring it can support your critical equipment during power failures.</li>
              <li><strong>Power Generators:</strong> Generators are sized in kVA, but loads are calculated in kW. Misjudging PF can lead to overload or inefficiency.</li>
              <li><strong>Transformers:</strong> Transformers are rated in VA, but they must handle the wattage needs of all connected devices accounting for their PF.</li>
              <li><strong>Data Centers:</strong> Servers and networking equipment list VA ratings, but the heat and power requirements depend on watts.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">How Power Factor Affects Energy Costs</h2>
            <p>
              Many utilities charge penalties for low power factor, especially for commercial and industrial customers. A low PF means the utility has to deliver more current to provide the same amount of usable power, which causes greater losses in transmission lines and stresses on transformers and generators.
            </p>
            <p>
              By converting VA to watts and understanding how PF affects your system, businesses can:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Reduce utility bills</li>
              <li>Avoid power factor surcharges</li>
              <li>Improve electrical system performance</li>
              <li>Extend equipment lifespan due to lower current demand</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Practical Example with Step-by-Step Calculation</h2>
            <p>
              Let’s say you have a machine rated at 5000 VA with a power factor of 0.75. How many watts of real power does it consume?
            </p>
            <p className="bg-gray-100 dark:text-black p-3 rounded font-mono">
              Step 1: Identify known values<br/>
              S = 5000 VA<br/>
              PF = 0.75<br/><br/>
              Step 2: Apply the formula<br/>
              P = S × PF<br/>
              P = 5000 × 0.75 = 3750 W<br/><br/>
              Result: The machine consumes 3750 watts of real power.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Impact of Power Factor on Electrical Infrastructure</h2>
            <p>
              When power factor is low, the current drawn increases for the same wattage. Higher current leads to:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Greater losses due to I²R heating in conductors</li>
              <li>Increased voltage drops in circuits</li>
              <li>Need for larger conductors and protective devices</li>
              <li>Overloaded transformers and generators</li>
            </ul>
            <p>
              Maintaining a high power factor allows for more efficient and economical design of electrical systems.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Power Factor Correction Techniques</h2>
            <p>
              To correct a low power factor, engineers often introduce capacitive elements into the system. These help to balance out inductive reactance and shift the current back into phase with the voltage. Techniques include:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Installing capacitor banks</li>
              <li>Using synchronous condensers</li>
              <li>Employing variable speed drives (VSDs) on motors</li>
              <li>Power factor correction units integrated into lighting or HVAC systems</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">VA vs Watts vs kVA vs kW</h2>
            <p>
              It’s important to understand the relationship between these units:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>VA (volt-amperes):</strong> Apparent power in a circuit (includes real and reactive power)</li>
              <li><strong>Watts (W):</strong> Real power actually consumed or used to do work</li>
              <li><strong>kVA:</strong> 1 kVA = 1000 VA</li>
              <li><strong>kW:</strong> 1 kW = 1000 W</li>
            </ul>
            <p>
              The relation remains the same: <code>Watts = VA × Power Factor</code> and <code>kW = kVA × Power Factor</code>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Conversion Table: VA to Watts at Common PF</h2>
            <table className="w-full border text-sm text-left mt-4 dark:text-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">VA</th>
                  <th className="p-2 border">PF = 0.6</th>
                  <th className="p-2 border">PF = 0.8</th>
                  <th className="p-2 border">PF = 1.0</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border">500</td><td className="p-2 border">300 W</td><td className="p-2 border">400 W</td><td className="p-2 border">500 W</td></tr>
                <tr><td className="p-2 border">1000</td><td className="p-2 border">600 W</td><td className="p-2 border">800 W</td><td className="p-2 border">1000 W</td></tr>
                <tr><td className="p-2 border">2000</td><td className="p-2 border">1200 W</td><td className="p-2 border">1600 W</td><td className="p-2 border">2000 W</td></tr>
                <tr><td className="p-2 border">5000</td><td className="p-2 border">3000 W</td><td className="p-2 border">4000 W</td><td className="p-2 border">5000 W</td></tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Engineering Insight: Reactive Power</h2>
            <p>
              Reactive power (measured in VAR) is the component of apparent power that doesn’t do useful work but is necessary for maintaining voltage levels in the system. In AC systems, reactive power arises from inductance and capacitance. Although it doesn’t power equipment directly, without it, voltage would drop and current would surge.
            </p>
            <p>
              Reactive power management is critical in large-scale operations like factories, hospitals, and commercial buildings where load profiles vary constantly.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToWattsConverter;