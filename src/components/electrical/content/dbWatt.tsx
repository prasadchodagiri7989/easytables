import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const DbmInfo = () => {
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
                  <BreadcrumbPage>Decibel-milliwatt</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Decibel-milliwatt (dBm)</h1>

      <section>
        <h2 className="text-2xl font-semibold">dBm Definition</h2>
        <p>dBm or decibel-milliwatt is a unit of power in the decibel scale, referenced to 1 milliwatt (mW).</p>
        <p>
          The power in decibel-milliwatts (P(dBm)) is equal to 10 times base 10 logarithm of the power in milliwatts (P(mW)):
        </p>
        <p className="font-mono">P(dBm) = 10 × log₁₀(P(mW) / 1mW)</p>
        <p>
          The power in milliwatts (P(mW)) is equal to 10 raised by the power in decibel-milliwatts (P(dBm)) divided by 10:
        </p>
        <p className="font-mono">P(mW) = 1mW × 10^(P(dBm) / 10)</p>
        <p>
          1 milliwatt is equal to 0 dBm:<br/>
          <span className="font-mono">1mW = 0dBm</span><br/>
          1 watt is equal to 30 dBm:<br/>
          <span className="font-mono">1W = 1000mW = 30dBm</span>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">dBm to dBW, Watt, mW Conversion Calculator</h2>
        <p>Convert dBm to dBW, watt, and milliwatt.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>mW to dBm:</strong> <span className="font-mono">P(dBm) = 10 × log₁₀(P(mW))</span></li>
          <li><strong>dBm to mW:</strong> <span className="font-mono">P(mW) = 10^(P(dBm)/10)</span></li>
          <li><strong>W to dBm:</strong> <span className="font-mono">P(dBm) = 10 × log₁₀(P(W)) + 30</span></li>
          <li><strong>dBm to W:</strong> <span className="font-mono">P(W) = 10^((P(dBm) - 30)/10)</span></li>
          <li><strong>dBm to dBW:</strong> <span className="font-mono">P(dBW) = P(dBm) - 30</span></li>
          <li><strong>dBW to dBm:</strong> <span className="font-mono">P(dBm) = P(dBW) + 30</span></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert dBm to mW</h2>
        <p className="font-mono">P(mW) = 10^(P(dBm) / 10)</p>
        <p><strong>Example:</strong> What is the power in mW for 20 dBm?</p>
        <p className="font-mono">P(mW) = 10^(20 / 10) = 100 mW</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert mW to dBm</h2>
        <p className="font-mono">P(dBm) = 10 × log₁₀(P(mW))</p>
        <p><strong>Example:</strong> What is the power in dBm for 100 mW?</p>
        <p className="font-mono">P(dBm) = 10 × log₁₀(100) = 20 dBm</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert dBm to Watt</h2>
        <p className="font-mono">P(W) = 10^((P(dBm) - 30) / 10)</p>
        <p><strong>Example:</strong> What is the power in watts for 40 dBm?</p>
        <p className="font-mono">P(W) = 10^((40 - 30) / 10) = 10 W</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert Watt to dBm</h2>
        <p className="font-mono">P(dBm) = 10 × log₁₀(P(W)) + 30</p>
        <p><strong>Example:</strong> What is the power in dBm for 10 W?</p>
        <p className="font-mono">P(dBm) = 10 × log₁₀(10) + 30 = 40 dBm</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Conversion Table</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">dBm</th>
              <th className="border px-3 py-2">dBW</th>
              <th className="border px-3 py-2">Watt</th>
              <th className="border px-3 py-2">mW</th>
            </tr>
          </thead>
          <tbody>
            {[
              [-100, -130, '0.1 pW', '0.0000000001 mW'],
              [-90, -120, '1 pW', '0.000000001 mW'],
              [-80, -110, '10 pW', '0.00000001 mW'],
              [-70, -100, '100 pW', '0.0000001 mW'],
              [-60, -90, '1 nW', '0.000001 mW'],
              [-50, -80, '10 nW', '0.00001 mW'],
              [-40, -70, '100 nW', '0.0001 mW'],
              [-30, -60, '1 μW', '0.001 mW'],
              [-20, -50, '10 μW', '0.01 mW'],
              [-10, -40, '100 μW', '0.1 mW'],
              [-1, -31, '794 μW', '0.794 mW'],
              [0, -30, '1 mW', '1.000 mW'],
              [1, -29, '1.259 mW', '1.259 mW'],
              [10, -20, '10 mW', '10 mW'],
              [20, -10, '100 mW', '100 mW'],
              [30, 0, '1 W', '1000 mW'],
              [40, 10, '10 W', '10000 mW'],
              [50, 20, '100 W', '100000 mW'],
              [60, 30, '1 kW', '1000000 mW'],
              [70, 40, '10 kW', '10000000 mW'],
              [80, 50, '100 kW', '100000000 mW'],
              [90, 60, '1 MW', '1000000000 mW'],
              [100, 70, '10 MW', '10000000000 mW']
            ].map(([dbm, dbw, w, mw]) => (
              <tr key={dbm}>
                <td className="border px-3 py-1 text-center">{dbm} dBm</td>
                <td className="border px-3 py-1 text-center">{dbw} dBW</td>
                <td className="border px-3 py-1 text-center">{w}</td>
                <td className="border px-3 py-1 text-center">{mw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
    </>
  );
};

export default DbmInfo;
