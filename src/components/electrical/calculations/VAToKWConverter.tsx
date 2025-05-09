import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const VAToKWConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor
  const [powerKW, setPowerKW] = useState<number | string>("—"); // Conversion result in kW

  // Function to calculate power in kW
  const calculatePowerKW = (apparentPower: number, powerFactor: number): number => {
    return (apparentPower * powerFactor) / 1000; // Formula to convert VA to kW
  };

  const handleConvert = () => {
    const result = calculatePowerKW(apparentPower, powerFactor);
    setPowerKW(result);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Breadcrumb Navigation */}
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
              <Link to="/electrical-conversions">Electrical Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>VA to kW Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>VA to Kilowatts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert apparent power in volt-amperes (VA) to real power in kilowatts (kW) using the power factor.</p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in VA:</label>
              <input
                type="number"
                value={apparentPower}
                onChange={(e) => setApparentPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
                placeholder="Enter apparent power in VA"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
                placeholder="Enter power factor (0 to 1)"
                step="0.01"
                min="0"
                max="1"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {/* Conversion Result */}
            <div>
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{powerKW} kW</p>
            </div>

            {/* Formula */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P<sub>kW</sub> = (S<sub>VA</sub> × PF) / 1000</strong>
                <br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>S<sub>VA</sub></strong>: Apparent power in VA</li>
                <li><strong>PF</strong>: Power factor (between 0 and 1)</li>
                <li><strong>P<sub>kW</sub></strong>: Real power in kW</li>
              </ul>
            </div>

            {/* Practical Examples */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* For an apparent power of 1000 <code>VA</code> and a power factor of 0.8:
                  <p className="bg-gray-100 p-2 dark:text-black">P<sub>kW</sub> = (1000 <code>VA</code> × 0.8) / 1000 = 0.8 <code>kW</code></p>
                </li>
                <li>
                  *Example 2:* For an apparent power of 5000 <code>VA</code> and a power factor of 0.9:
                  <p className="bg-gray-100 p-2 dark:text-black">P<sub>kW</sub> = (5000 <code>VA</code> × 0.9) / 1000 = 4.5 <code>kW</code></p>
                </li>
                <li>
                  *Example 3:* For an apparent power of 2500 <code>VA</code> and a power factor of 0.6:
                  <p className="bg-gray-100 p-2 dark:text-black">P<sub>kW</sub> = (2500 <code>VA</code> × 0.6) / 1000 = 1.5 <code>kW</code></p>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white mt-10">

  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Apparent vs. Real Power</h2>
  <p>
    In electrical engineering, <strong>apparent power (VA)</strong> is the total power flowing in a circuit, while <strong>real power (kW)</strong> is the usable power consumed by a load. The power factor represents how efficiently that power is being used. A power factor of 1 means 100% efficiency—every bit of VA is being converted into real power. Lower values indicate inefficiencies, often due to reactive loads like motors or transformers.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Why Power Factor Matters</h2>
  <p>
    The power factor (PF) is essential for understanding the quality of power usage. It helps businesses and engineers reduce losses, improve energy efficiency, and avoid utility penalties. Converting VA to kW using PF gives a clearer picture of how much energy is truly being consumed.
  </p>

  <ul className="list-disc list-inside ml-4">
    <li><strong>PF = 1</strong> — Purely resistive loads (ideal)</li>
    <li><strong>PF &lt; 1</strong> — Includes inductive or capacitive elements (real-world systems)</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Conversion Chart</h2>
  <table className="table-auto w-full border-collapse border">
    <thead>
      <tr>
        <th className="border px-2 py-1">Apparent Power (VA)</th>
        <th className="border px-2 py-1">Power Factor</th>
        <th className="border px-2 py-1">Real Power (kW)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-2 py-1">1000</td><td className="border px-2 py-1">0.7</td><td className="border px-2 py-1">0.7</td></tr>
      <tr><td className="border px-2 py-1">2000</td><td className="border px-2 py-1">0.8</td><td className="border px-2 py-1">1.6</td></tr>
      <tr><td className="border px-2 py-1">5000</td><td className="border px-2 py-1">0.9</td><td className="border px-2 py-1">4.5</td></tr>
      <tr><td className="border px-2 py-1">7500</td><td className="border px-2 py-1">0.85</td><td className="border px-2 py-1">6.375</td></tr>
    </tbody>
  </table>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Applications for VA to kW Conversion</h2>
  <ul className="list-disc ml-4">
    <li><strong>Data Centers:</strong> UPS and server loads are typically specified in VA. Knowing the actual kW helps with cooling and utility planning.</li>
    <li><strong>Generators:</strong> Generator sizing requires kW knowledge to ensure proper backup support under real-world conditions.</li>
    <li><strong>Commercial Buildings:</strong> Power usage effectiveness (PUE) depends on knowing real power consumption, not just apparent power.</li>
    <li><strong>Industrial Loads:</strong> Large machines and motors with low PF need PF correction strategies to optimize efficiency.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQ)</h2>
  <ul className="list-disc ml-4">
    <li><strong>Can power factor be more than 1?</strong> No, it's always ≤ 1. A PF of 1 indicates perfect power usage.</li>
    <li><strong>Is kW always less than VA?</strong> Yes. Since PF ≤ 1, kW = VA × PF will always be ≤ VA.</li>
    <li><strong>What’s a typical power factor?</strong> For industrial loads, it’s usually between 0.7 and 0.95 depending on the type of equipment used.</li>
  </ul>
  <div className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white mt-10">

<h2 className="font-semibold text-base mt-6 mb-2">Use Case: Energy Billing and Cost Planning</h2>
<p>
  Many energy providers charge based on real power usage, not apparent power. While VA indicates the total power capacity, only the kilowatts (kW) consumed determine the actual bill. Understanding how to convert VA to kW allows facility managers to forecast utility costs more accurately.
</p>
<p>
  For example, if your equipment totals 10,000 VA with a power factor of 0.85, the real power is:
</p>
<p className="bg-gray-100 p-3 rounded font-mono dark:text-black">
  (10,000 × 0.85) / 1000 = 8.5 kW
</p>

<h2 className="font-semibold text-base mt-6 mb-2">Industrial Applications: Motors and Transformers</h2>
<p>
  Motors, transformers, and large inductive loads operate with power factors typically ranging from 0.7 to 0.95. A VA to kW conversion helps engineers calculate true energy usage and identify areas for power factor correction (PFC).
</p>
<ul className="list-disc ml-4">
  <li><strong>Without correction:</strong> Higher VA leads to oversized infrastructure and energy loss.</li>
  <li><strong>With correction:</strong> Efficient operation and reduced operational costs.</li>
</ul>

<h2 className="font-semibold text-base mt-6 mb-2">Power Factor Correction (PFC)</h2>
<p>
  Improving power factor is a common practice to reduce losses in electrical systems. Using capacitors or synchronous condensers, facilities can increase their PF closer to 1, thereby reducing VA demand for the same kW load.
</p>
<p>
  This converter is a first step in assessing how much real power is being used and whether your VA ratings are aligned with efficiency goals.
</p>

<h2 className="font-semibold text-base mt-6 mb-2">Quick Reference Table</h2>
<table className="table-auto w-full border-collapse border">
  <thead>
    <tr>
      <th className="border px-2 py-1">VA</th>
      <th className="border px-2 py-1">Power Factor</th>
      <th className="border px-2 py-1">kW</th>
    </tr>
  </thead>
  <tbody>
    <tr><td className="border px-2 py-1">1000</td><td className="border px-2 py-1">0.8</td><td className="border px-2 py-1">0.8</td></tr>
    <tr><td className="border px-2 py-1">3000</td><td className="border px-2 py-1">0.9</td><td className="border px-2 py-1">2.7</td></tr>
    <tr><td className="border px-2 py-1">5000</td><td className="border px-2 py-1">0.95</td><td className="border px-2 py-1">4.75</td></tr>
    <tr><td className="border px-2 py-1">7500</td><td className="border px-2 py-1">0.7</td><td className="border px-2 py-1">5.25</td></tr>
  </tbody>
</table>

<h2 className="font-semibold text-base mt-6 mb-2">Educational Tip</h2>
<p>
  Did you know that many appliances list their rating in VA? However, what really impacts your electricity bill is the kW drawn over time. This is why understanding and converting these units is fundamental for both students and professionals in the field of electrical engineering.
</p>

<h2 className="font-semibold text-base mt-6 mb-2">Conversion Insight</h2>
<p>
  The formula <code>P<sub>kW</sub> = VA × PF ÷ 1000</code> not only helps in sizing generators or UPS systems but also enables accurate comparisons between rated capacity and actual energy use in various types of power equipment.
</p>

</div>
<div className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white mt-10">

  <h2 className="font-semibold text-base mt-6 mb-2">Why Power Factor Matters in Conversions</h2>
  <p>
    The power factor (PF) plays a critical role in electrical system design and billing. A power factor closer to 1 indicates efficient use of electrical power. Conversely, a lower PF means more current is needed to deliver the same real power, increasing heat, losses, and infrastructure requirements.
  </p>
  <p>
    By converting VA to kW with the correct PF, you gain insights into how efficiently your system is operating. Improving PF can reduce your demand charges and allow for downsizing cables, transformers, and switchgear.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Applications in Commercial Installations</h2>
  <p>
    In commercial buildings such as shopping malls, hotels, and hospitals, understanding the difference between VA and kW is essential for:
  </p>
  <ul className="list-disc ml-4">
    <li>Determining generator size during power outages</li>
    <li>Correctly sizing inverters and UPS systems</li>
    <li>Designing backup systems to handle critical real power loads</li>
    <li>Reducing penalties for poor power factor imposed by utilities</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Tip: VA vs. kW on Equipment Labels</h2>
  <p>
    You’ll often notice that some equipment (especially transformers, UPS units, or generators) lists their capacity in VA or kVA, while others (like heaters, motors, or lights) show kW. This tool bridges that gap and helps ensure that you're comparing and calculating on the same basis.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Engineering Example</h2>
  <p>
    Suppose you're installing a 12,000 VA UPS system with a power factor of 0.9. To understand how much actual usable power it can deliver:
  </p>
  <p className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    Real Power = (12,000 × 0.9) ÷ 1000 = 10.8 kW
  </p>
  <p>
    This tells you that even though the UPS is rated at 12 kVA, it can only support up to 10.8 kW of real load.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Educational Use in Technical Training</h2>
  <p>
    Electrical engineering instructors use this conversion to teach students the difference between theoretical and practical power capacity. By showing how PF impacts real-world system design, students better understand efficiency, cost, and performance.
  </p>
  <p>
    This calculator helps reinforce these concepts visually and interactively.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Troubleshooting Power Overloads</h2>
  <p>
    If breakers trip or equipment fails unexpectedly, you might be overestimating available power by looking only at VA ratings. Always convert to kW using this formula to ensure the load matches your system’s capacity:
  </p>
  <p className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    kW = (VA × PF) ÷ 1000
  </p>
  <p>
    This practice prevents expensive downtimes and system failures in critical facilities.
  </p>

</div>
<div className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white mt-10">

  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Real vs. Apparent Power</h2>
  <p>
    In electrical systems, it's important to distinguish between different types of power:
  </p>
  <ul className="list-disc ml-4">
    <li>
      <strong>Real Power (kW):</strong> This is the actual power that performs work, such as lighting a bulb, running a motor, or powering a computer.
    </li>
    <li>
      <strong>Apparent Power (VA):</strong> This is the total power supplied to the circuit — a combination of real and reactive power.
    </li>
    <li>
      <strong>Reactive Power (kVAR):</strong> This is the power used to maintain electric and magnetic fields in inductive or capacitive equipment. It doesn’t perform work but is essential for system stability.
    </li>
  </ul>

  <p>
    These values are related by the power triangle, and the power factor represents the ratio:
  </p>
  <p className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    Power Factor (PF) = Real Power (kW) ÷ Apparent Power (kVA)
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Why You Should Convert VA to kW</h2>
  <p>
    Devices like UPS units, generators, and transformers are often rated in VA or kVA, but your actual load demands are in kW. If you fail to account for the power factor, you might:
  </p>
  <ul className="list-disc ml-4">
    <li>Overload circuits or backup systems unintentionally</li>
    <li>Receive inflated energy bills due to poor efficiency</li>
    <li>Cause electrical components to heat up or degrade faster</li>
  </ul>

  <p>
    Converting VA to kW helps ensure your equipment is sized correctly for the load it actually supports.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Industry Example – Data Centers</h2>
  <p>
    In a data center, suppose you have a server rack drawing 8000 VA with a power factor of 0.85. Using the formula:
  </p>
  <p className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    kW = (8000 × 0.85) ÷ 1000 = 6.8 kW
  </p>
  <p>
    If your generator only supplies 6 kW, it will not be sufficient even though the VA rating appears within range.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Design Tip: Leave Room for Power Factor Variation</h2>
  <p>
    Power factor is not always constant. It varies depending on device type, load condition, and age of equipment. Always design systems with a safety margin by considering a slightly lower PF in your calculation (e.g., 0.85 instead of 0.9).
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Helpful Tools for Power Engineers</h2>
  <p>
    For advanced design work, you may also want to integrate this calculator into a system with:
  </p>
  <ul className="list-disc ml-4">
    <li>Load profile analysis</li>
    <li>Energy efficiency reporting</li>
    <li>Real-time monitoring of PF in industrial panels</li>
  </ul>
  <p>
    This ensures you not only convert but also optimize your energy use.
  </p>

</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
  <p>
    Converting VA to kW is a crucial step in understanding how much real power is being consumed by your devices and systems. While VA (volt-amperes) represents the total supplied power, only a portion of that—determined by the power factor—is used for actual work (kW). This calculator helps you make accurate decisions for load sizing, power system design, equipment efficiency, and energy cost management. Whether you're planning a residential setup, commercial facility, or industrial installation, this conversion provides the clarity needed for reliable and efficient power usage.
  </p>
</div>



</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default VAToKWConverter;
