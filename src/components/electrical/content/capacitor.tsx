import React from "react";

const CapacitorChart = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">Capacitor</h1>

      <section>
        <h2 className="text-2xl font-semibold">What is Capacitor</h2>
        <p>
          A capacitor is an electronic component that stores electric charge. It
          consists of two close conductors (usually plates) separated by a
          dielectric material. One plate accumulates positive charge and the
          other negative charge when connected to a power source.
        </p>
        <p>
          Capacitance is the amount of electric charge stored per volt and is
          measured in Farads (F).
        </p>
        <p>
          Capacitors block direct current (DC) but allow alternating current
          (AC) to pass.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitance</h2>
        <p>
          <strong>Formula:</strong> C = Q / V<br />
          C: Capacitance (F), Q: Charge (C), V: Voltage (V)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitance of Plate Capacitor</h2>
        <p>
          <strong>Formula:</strong> C = ε × (A / d)<br />
          ε: Permittivity (F/m), A: Area of plates (m²), d: Distance between
          plates (m)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitors in Series</h2>
        <p>
          <strong>Formula:</strong> 1/C<sub>Total</sub> = 1/C₁ + 1/C₂ + 1/C₃ + ...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitors in Parallel</h2>
        <p>
          <strong>Formula:</strong> C<sub>Total</sub> = C₁ + C₂ + C₃ + ...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitor's Current</h2>
        <p>
          i<sub>c</sub>(t) = C × dv<sub>c</sub>(t)/dt
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitor's Voltage</h2>
        <p>
          v<sub>c</sub>(t) = v<sub>c</sub>(0) + (1/C) × ∫ i<sub>c</sub>(τ) dτ
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Energy Stored in Capacitor</h2>
        <p>
          <strong>Formula:</strong> E = ½ × C × V²
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">AC Circuit of Capacitor</h2>
        <p>
          <strong>Angular frequency:</strong> ω = 2πf<br />
          <strong>Reactance:</strong> X<sub>C</sub> = -1 / (ωC)<br />
          <strong>Impedance:</strong> Z<sub>C</sub> = -j / (ωC)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitor Types</h2>
        <ul className="list-disc list-inside">
          <li>Variable Capacitor</li>
          <li>Electrolytic Capacitor</li>
          <li>Spherical Capacitor</li>
          <li>Power Capacitor</li>
          <li>Ceramic Capacitor</li>
          <li>Tantalum Capacitor</li>
          <li>Mica Capacitor</li>
          <li>Paper Capacitor</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Capacitor Symbols</h2>
        <ul className="list-disc list-inside">
          <li>|| — Capacitor</li>
          <li>|(| — Polarized Capacitor</li>
          <li>||<sub>↔</sub> — Variable Capacitor</li>
        </ul>
      </section>
    </div>
  );
};

export default CapacitorChart;