import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const WattInfo = () => {
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
                      <Link to="/electrical/units">Electrical Units</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Watt</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Watt (W)</h1>

      <section>
        <h2 className="text-2xl font-semibold">Watt Definition</h2>
        <p>
          Watt is the unit of power (symbol: W). The watt unit is named after James Watt, the inventor of the steam engine. One watt is defined as the energy consumption rate of one joule per second:
        </p>
        <p className="font-mono">1W = 1J / 1s</p>
        <p>
          One watt is also defined as the current flow of one ampere with a voltage of one volt:
        </p>
        <p className="font-mono">1W = 1V × 1A</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Watt Conversion</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Symbol</th>
              <th className="border px-3 py-2">Conversion</th>
              <th className="border px-3 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Picowatt</td>
              <td className="border px-3 py-2">pW</td>
              <td className="border px-3 py-2">1pW = 10⁻¹² W</td>
              <td className="border px-3 py-2">P = 10 pW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Nanowatt</td>
              <td className="border px-3 py-2">nW</td>
              <td className="border px-3 py-2">1nW = 10⁻⁹ W</td>
              <td className="border px-3 py-2">P = 10 nW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Microwatt</td>
              <td className="border px-3 py-2">μW</td>
              <td className="border px-3 py-2">1μW = 10⁻⁶ W</td>
              <td className="border px-3 py-2">P = 10 μW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Milliwatt</td>
              <td className="border px-3 py-2">mW</td>
              <td className="border px-3 py-2">1mW = 10⁻³ W</td>
              <td className="border px-3 py-2">P = 10 mW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Watt</td>
              <td className="border px-3 py-2">W</td>
              <td className="border px-3 py-2">-</td>
              <td className="border px-3 py-2">P = 10 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Kilowatt</td>
              <td className="border px-3 py-2">kW</td>
              <td className="border px-3 py-2">1kW = 10³ W</td>
              <td className="border px-3 py-2">P = 2 kW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Megawatt</td>
              <td className="border px-3 py-2">MW</td>
              <td className="border px-3 py-2">1MW = 10⁶ W</td>
              <td className="border px-3 py-2">P = 5 MW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Gigawatt</td>
              <td className="border px-3 py-2">GW</td>
              <td className="border px-3 py-2">1GW = 10⁹ W</td>
              <td className="border px-3 py-2">P = 5 GW</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert Watts</h2>
        <ul className="space-y-4">
          <li><strong>To Kilowatts:</strong> P(kW) = P(W) / 1000</li>
          <li><strong>To Milliwatts:</strong> P(mW) = P(W) ⋅ 1000</li>
          <li><strong>To dBm:</strong> P(dBm) = 10 ⋅ log₁₀( P(mW) / 1mW)</li>
          <li><strong>To Amps:</strong> I(A) = P(W) / V(V)</li>
          <li><strong>To Volts:</strong> V(V) = P(W) / I(A)</li>
          <li><strong>To Ohms:</strong> R(Ω) = P(W) / I(A)² or R(Ω) = V(V)² / P(W)</li>
          <li><strong>To BTU/hr:</strong> P(BTU/hr) = 3.412142 ⋅ P(W)</li>
          <li><strong>To Joules:</strong> E(J) = P(W) ⋅ t(s)</li>
          <li><strong>To Horsepower:</strong> P(HP) = P(W) / 746</li>
          <li><strong>To kVA:</strong> P(W) = 1000 ⋅ S(kVA) ⋅ PF</li>
          <li><strong>To VA:</strong> P(W) = S(VA) ⋅ PF</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Power Consumption of Some Electrical Components</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Electric Component</th>
              <th className="border px-3 py-2">Typical Power Consumption (W)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">LCD TV</td>
              <td className="border px-3 py-2">30..300 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">LCD Monitor</td>
              <td className="border px-3 py-2">30..45 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">PC Desktop Computer</td>
              <td className="border px-3 py-2">300..400 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Laptop Computer</td>
              <td className="border px-3 py-2">40..60 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Refrigerator</td>
              <td className="border px-3 py-2">150..300 W (when active)</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Light Bulb</td>
              <td className="border px-3 py-2">25..100 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Fluorescent Light</td>
              <td className="border px-3 py-2">15..60 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Halogen Light</td>
              <td className="border px-3 py-2">30..80 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Speaker</td>
              <td className="border px-3 py-2">10..300 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Microwave</td>
              <td className="border px-3 py-2">100..1000 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Air Conditioner</td>
              <td className="border px-3 py-2">1..2 kW</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    </>
  );
};

export default WattInfo;
