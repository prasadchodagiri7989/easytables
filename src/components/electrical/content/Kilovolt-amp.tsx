import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const KvaInfo = () => {
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
                                                          <BreadcrumbPage>Kilovolt-ampere</BreadcrumbPage>
                                                        </BreadcrumbItem>
                                                      </BreadcrumbList>
                                                  </Breadcrumb>
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Kilovolt-ampere (kVA)</h1>

      <section>
        <h2 className="text-2xl font-semibold">kVA Definition</h2>
        <p>kVA or kilo-volt-ampere is a unit of apparent power, used to measure electrical power.</p>
        <p>
          1 kilo-volt-ampere is equal to 1000 volt-amperes:<br/>
          <span className="font-mono">1 kVA = 1000 VA</span>
        </p>
        <p>
          1 kilo-volt-ampere is also equal to 1000 times 1 volt times 1 ampere:<br/>
          <span className="font-mono">1 kVA = 1000 × 1V × 1A</span>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kVA to Volt-Amps Calculation</h2>
        <p className="font-mono">S(VA) = 1000 × S(kVA)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kVA to kW Calculation</h2>
        <p>The real power P in kilowatts (kW) is equal to the apparent power S in kilovolt-amps (kVA) times the power factor PF:</p>
        <p className="font-mono">P(kW) = S(kVA) × PF</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kVA to Watts Calculation</h2>
        <p>The real power P in watts (W) is equal to 1000 times the apparent power S in kilovolt-amps (kVA), times the power factor PF:</p>
        <p className="font-mono">P(W) = 1000 × S(kVA) × PF</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">kVA to Amps Calculation</h2>
        <h3 className="text-xl font-semibold mt-2">Single Phase</h3>
        <p className="font-mono">I(A) = 1000 × S(kVA) / V(V)</p>

        <h3 className="text-xl font-semibold mt-4">3 Phase - Line to Line Voltage</h3>
        <p className="font-mono">I(A) = 1000 × S(kVA) / (√3 × VL-L(V))</p>

        <h3 className="text-xl font-semibold mt-4">3 Phase - Line to Neutral Voltage</h3>
        <p className="font-mono">I(A) = 1000 × S(kVA) / (3 × VL-N(V))</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">See Also</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Electric power</li>
          <li>Watt (W)</li>
          <li>Decibel-milliwatt (dBm)</li>
          <li>Kilowatt-hour (kWh)</li>
          <li>kVA to VA calculator</li>
          <li>kVA to kW calculator</li>
          <li>kVA to watts calculator</li>
          <li>kVA to amps calculator</li>
          <li>Electrical units</li>
          <li>Logarithm</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default KvaInfo;
