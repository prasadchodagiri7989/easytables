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

const KVAToKWConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(0);
  const [powerFactor, setPowerFactor] = useState<number>(0);
  const [realPower, setRealPower] = useState<number | string>('—');

  const convertToKW = (apparentPower: number, powerFactor: number) => {
    return (apparentPower * powerFactor).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToKW(apparentPower, powerFactor);
    setRealPower(result);
  };

  const examples = [
    { apparentPower: 3, powerFactor: 0.8, expectedResult: 2.4, description: '3 kVA with PF 0.8' },
    { apparentPower: 5, powerFactor: 0.9, expectedResult: 4.5, description: '5 kVA with PF 0.9' },
    { apparentPower: 10, powerFactor: 0.85, expectedResult: 8.5, description: '10 kVA with PF 0.85' },
    { apparentPower: 2, powerFactor: 1, expectedResult: 2, description: '2 kVA with PF 1.0' },
    { apparentPower: 15, powerFactor: 0.95, expectedResult: 14.25, description: '15 kVA with PF 0.95' },
    { apparentPower: 7.5, powerFactor: 0.6, expectedResult: 4.5, description: '7.5 kVA with PF 0.6' },
    { apparentPower: 50, powerFactor: 0.92, expectedResult: 46, description: '50 kVA with PF 0.92' },

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
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>kVA to kW Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>kVA to kW Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert apparent power in kilovolt-amps (kVA) and power factor (PF) to real power in kilowatts (kW).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power (kVA):</label>
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
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{realPower} kW</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Apparent Power: {example.apparentPower} kVA, Power Factor: {example.powerFactor}</p>
                    <p>Expected Real Power: {example.expectedResult} kW</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P = kVA × PF</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Real power in kilowatts (kW)</li>
                <li><strong>kVA</strong>: Apparent power in kilovolt-amps</li>
                <li><strong>PF</strong>: Power factor (between 0 and 1)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                Real power (kW) is the usable power in an AC circuit, calculated from the apparent power (kVA) multiplied by the power factor (PF).
                <br />
                The power factor represents the efficiency of the energy conversion and varies between 0 (inefficient) and 1 (perfect efficiency).
              </p>
            </div>
          </div>
          <p className="mt-2">
  You can rearrange the formula to solve for Apparent Power or Power Factor:
</p>
<ul className="list-disc list-inside ml-4 mt-1">
  <li><strong>kVA = kW / PF</strong></li>
  <li><strong>PF = kW / kVA</strong></li>
</ul>
<p className="mt-2">
  This conversion is commonly used in electrical system design, energy management, and when specifying generator capacity.
  A higher power factor indicates efficient power usage, while a lower PF suggests wasted energy due to reactive components like motors and transformers.
</p>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">When to Use This Converter:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>To estimate actual power available from a generator or UPS system</li>
    <li>When planning electrical loads for energy efficiency</li>
    <li>During audits to analyze reactive power losses</li>
    <li>In panel sizing and industrial equipment planning</li>
  </ul>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions:</h2>
  <div className="space-y-3">
    <div>
      <strong>Q: Can I assume power factor is always 1?</strong>
      <p>No, many systems operate at 0.7–0.95 PF. Assuming PF = 1 can result in underestimating actual kVA requirements.</p>
    </div>
    <div>
      <strong>Q: What causes low power factor?</strong>
      <p>Inductive loads like motors, transformers, and fluorescent lights often reduce PF due to reactive energy consumption.</p>
    </div>
    <div>
      <strong>Q: What’s the difference between kW and kVA?</strong>
      <p>kW is real usable power. kVA is total power supplied, including both useful and reactive components.</p>
    </div>
  </div>
</div>
<p className="mt-2">
  You can rearrange the formula to solve for other values:
</p>
<ul className="list-disc list-inside ml-4 mt-1">
  <li><strong>kVA = kW / PF</strong></li>
  <li><strong>PF = kW / kVA</strong></li>
</ul>

<p className="mt-2">
  In practical applications, this calculation helps electrical engineers determine the usable power output from a generator or UPS.
  A low power factor leads to higher apparent power demands, which increases infrastructure costs and reduces overall efficiency.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">When to Use This Converter:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>To estimate real load power from an alternator or transformer</li>
    <li>In industrial planning to assess actual energy utilization</li>
    <li>To avoid overloading systems with poor power factor</li>
    <li>During energy audits and efficiency checks</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions:</h2>
  <div className="space-y-3">
    <div>
      <strong>Q: Is power factor always required?</strong>
      <p>Yes, without PF you cannot determine how much of the supplied power is actually usable as kW.</p>
    </div>
    <div>
      <strong>Q: What is a good power factor?</strong>
      <p>Anything above 0.9 is considered good. Utilities may charge penalties for PF below 0.85.</p>
    </div>
    <div>
      <strong>Q: Can kW be greater than kVA?</strong>
      <p>No. Real power (kW) is always equal to or less than apparent power (kVA).</p>
    </div>
  </div>
</div>

<p className="mt-4">
  The kVA to kW conversion is an essential calculation in electrical engineering, especially when it comes to understanding how much usable power is available in a system. Apparent power, measured in kilovolt-amperes (kVA), includes both the real power (kW) and the reactive power caused by the phase difference between current and voltage. However, real power, measured in kilowatts (kW), is what actually performs useful work. This calculator helps you easily convert kVA to kW by factoring in the power factor (PF), which indicates how efficiently the electrical power is being used.
</p>

<p className="mt-4">
  In real-world scenarios, knowing how to convert between these units helps businesses, engineers, and electricians design safer and more efficient electrical systems. For example, if you are operating an industrial facility with heavy machinery, the nameplate rating might be in kVA, but to calculate energy bills or determine required generator size, you need the real power in kW. This makes conversion critical for infrastructure planning, load management, and cost estimation.
</p>

<p className="mt-4">
  The power factor is a crucial component in this conversion. A power factor of 1 indicates a perfectly efficient system where all power is converted into useful work. However, in most practical settings, especially in systems with motors, transformers, or fluorescent lighting, the power factor is less than 1. A low power factor not only reduces system efficiency but can also attract penalties from utility providers. Therefore, optimizing your power factor helps reduce electricity bills, prevent overloading, and ensure better performance of electrical infrastructure.
</p>

<p className="mt-4">
  The formula to convert kVA to kW is straightforward:
</p>

<ul className="list-disc list-inside ml-4">
  <li><strong>kW = kVA × Power Factor</strong></li>
</ul>

<p className="mt-2">
  This means that if you know the apparent power and the power factor, you can instantly determine the actual power being used effectively. Conversely, if you're designing a system and know the desired kW load and expected power factor, you can use this formula in reverse to determine the required capacity of your generator or UPS.
</p>

<p className="mt-4">
  This tool is particularly useful for:
</p>

<ul className="list-disc list-inside ml-4">
  <li>Electrical engineers designing commercial or industrial power systems</li>
  <li>Facility managers looking to improve power efficiency</li>
  <li>Procurement teams specifying generators, UPS systems, or transformers</li>
  <li>Technicians conducting load analysis during energy audits</li>
</ul>

<p className="mt-4">
  A higher power factor means a system is using electricity more effectively. Modern industries invest in power factor correction devices such as capacitor banks to bring their PF closer to 1. This reduces unnecessary current flow, lowers energy losses, and decreases heat generation in cables and transformers. Some regions even mandate a minimum power factor for commercial installations.
</p>

<p className="mt-4">
  To get the best out of your energy systems, always aim to maintain your power factor above 0.9 and use tools like this converter to plan smartly. Whether you're working on a small generator installation or a large industrial plant, this conversion plays a vital role in ensuring that your infrastructure is both cost-effective and future-ready.
</p>


        </CardContent>
      </Card>
    </div>
  );
};

export default KVAToKWConverter;
