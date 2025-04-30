import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const KwhInfo = () => {
  return (
    <>
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
                                                                <Link to="/electrical/units">Electrical units</Link>
                                                              </BreadcrumbLink>
                                                            </BreadcrumbItem>
                                                            <BreadcrumbSeparator />
                                                            <BreadcrumbItem>
                                                              <BreadcrumbPage>Kilowatt-hour</BreadcrumbPage>
                                                            </BreadcrumbItem>
                                                          </BreadcrumbList>
          </Breadcrumb>
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Kilowatt-hour (kWh)</h1>

      <section>
        <h2 className="text-2xl font-semibold">Kilowatt-hour Definition</h2>
        <p>kWh or kilowatt-hour is an energy unit (symbol kWh or kW⋅h).</p>
        <p>One kilowatt-hour is defined as the energy consumed by power consumption of 1kW during 1 hour:</p>
        <p className="font-mono">1 kWh = 1kW × 1h</p>
        <p>1 kilowatt-hour is equal to 3.6 × 10<sup>6</sup> joules:</p>
        <p className="font-mono">1 kWh = 3.6 × 10<sup>6</sup> J</p>
        <p>The energy E in kilowatt-hours (kWh) is equal to the power P in kilowatts (kW), times the time t in hours (h):</p>
        <p className="font-mono">E(kWh) = P(kW) × t(h)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Kilowatt-hour Example</h2>
        <p><strong>Example:</strong> What is the energy consumed when using 2kW for 3 hours?</p>
        <p className="font-mono">E(kWh) = 2kW × 3h = 6kWh</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kWh Conversion</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-mono">1 kWh = 1000 Wh = 0.001 MWh</span></li>
          <li><span className="font-mono">1 kWh = 3412.14 BTU = 3.41214 kBTU</span></li>
          <li><span className="font-mono">1 kWh = 3.6 × 10<sup>6</sup> J = 3600 kJ = 3.6 MJ = 0.0036 GJ</span></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kWh to BTU, Joule Conversion Table</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Kilowatt-hour (kWh)</th>
              <th className="border px-3 py-2">BTU</th>
              <th className="border px-3 py-2">Joule (J)</th>
            </tr>
          </thead>
          <tbody>
            {[
              [0.1, '341.21', '3.6 × 10⁵'],
              [1, '3412.14', '3.6 × 10⁶'],
              [10, '34121.42', '3.6 × 10⁷'],
              [100, '341214.16', '3.6 × 10⁸'],
              [1000, '3412141.63', '3.6 × 10⁹'],
              [10000, '34121416.33', '3.6 × 10¹⁰']
            ].map(([kwh, btu, joule]) => (
              <tr key={kwh}>
                <td className="border px-3 py-1 text-center">{kwh} kWh</td>
                <td className="border px-3 py-1 text-center">{btu} BTU</td>
                <td className="border px-3 py-1 text-center">{joule} J</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kWh Meter</h2>
        <p>A kWh meter is a device that measures the amount of electrical energy consumed in kilowatt-hours. It has a counter display to show the total kWh consumed over time.</p>
        <p>Energy consumption is calculated by taking the difference between current and previous readings over a time period.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Cost of Electricity Bill</h2>
        <p>The electricity cost is calculated by multiplying the energy consumed in kWh by the cost per kWh.</p>
        <p><strong>Example:</strong> For 900 kWh per month at $0.10 per kWh:</p>
        <p className="font-mono">900 kWh × $0.10 = $90</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How Many kWh Does a House Use?</h2>
        <p>Typical household energy usage ranges from:</p>
        <ul className="list-disc pl-6">
          <li>150 kWh to 1500 kWh per month</li>
          <li>5 kWh to 50 kWh per day</li>
        </ul>
        <p>Usage depends on factors like weather and the number of people living in the home.</p>
      </section>
    </div>
    </>
  );
};

export default KwhInfo;
