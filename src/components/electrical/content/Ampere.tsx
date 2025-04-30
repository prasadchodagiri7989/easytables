import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const AmpereInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6 bg-white/40 dark:bg-transparent">
      <h1 className="text-3xl font-bold text-center">Ampere - Unit of Electrical Current</h1>

      <section>
        <h2 className="text-2xl font-semibold">Definition</h2>
        <p>
          Ampere or amp (<strong>symbol: A</strong>) is the unit of electrical current.
          The Ampere unit is named after <strong>Andre-Marie Ampere</strong>, from France.
        </p>
        <p>
          One Ampere is defined as the current that flows with electric charge of one Coulomb per second:
          <strong> 1 A = 1 C/s</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Amperemeter</h2>
        <p>
          Ampere meter or ammeter is an electrical instrument used to measure electrical current in amperes. It is connected in <strong>series</strong> to the load, with near-zero resistance, so it does not affect the circuit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Table of Ampere Unit Prefixes</h2>
        <table className="table-auto w-full border mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Symbol</th>
              <th className="border px-4 py-2">Conversion</th>
              <th className="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Microampere</td>
              <td className="border px-4 py-2">μA</td>
              <td className="border px-4 py-2">1μA = 10⁻⁶A</td>
              <td className="border px-4 py-2">I = 50μA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Milliampere</td>
              <td className="border px-4 py-2">mA</td>
              <td className="border px-4 py-2">1mA = 10⁻³A</td>
              <td className="border px-4 py-2">I = 3mA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ampere</td>
              <td className="border px-4 py-2">A</td>
              <td className="border px-4 py-2">-</td>
              <td className="border px-4 py-2">I = 10A</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Kiloampere</td>
              <td className="border px-4 py-2">kA</td>
              <td className="border px-4 py-2">1kA = 10³A</td>
              <td className="border px-4 py-2">I = 2kA</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Conversions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>I(μA) = I(A) / 1,000,000</li>
          <li>I(mA) = I(A) / 1,000</li>
          <li>I(kA) = I(A) × 1,000</li>
          <li>P(W) = I(A) × V(V)</li>
          <li>V(V) = P(W) / I(A)</li>
          <li>V(V) = I(A) × R(Ω)</li>
          <li>R(Ω) = V(V) / I(A)</li>
          <li>P(kW) = I(A) × V(V) / 1,000</li>
          <li>S(kVA) = IRMS(A) × VRMS(V) / 1,000</li>
          <li>Q(C) = I(A) × t(s)</li>
        </ul>
      </section>
    </div>
  );
};

export default AmpereInfo;