import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const DbmilliInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Decibel-milliwatt (dBm)</h1>

      <section>
        <h2 className="text-2xl font-semibold">dBm Definition</h2>
        <p>
          dBm or decibel-milliwatt is an electrical power unit in decibels (dB), referenced to 1 milliwatt (mW).
        </p>
        <p>
          P(dBm) = 10 × log₁₀(P(mW) / 1mW)
        </p>
        <p>
          P(mW) = 1mW × 10^(P(dBm) / 10)
        </p>
        <p>
          1mW = 0dBm &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 1W = 30dBm
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Conversion Examples</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>mW to dBm:</strong> P(dBm) = 10 × log₁₀(P(mW))</li>
          <li><strong>dBm to mW:</strong> P(mW) = 10^(P(dBm)/10)</li>
          <li><strong>W to dBm:</strong> P(dBm) = 10 × log₁₀(P(W)) + 30</li>
          <li><strong>dBm to W:</strong> P(W) = 10^((P(dBm) - 30)/10)</li>
          <li><strong>dBW to dBm:</strong> P(dBm) = P(dBW) + 30</li>
          <li><strong>dBm to dBW:</strong> P(dBW) = P(dBm) - 30</li>
        </ul>
        <p><strong>Note:</strong> dB is relative, dBm is absolute, hence conversion is not direct between them.</p>
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
  );
};

export default DbmilliInfo;