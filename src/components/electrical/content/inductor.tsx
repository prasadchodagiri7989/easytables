import React from "react";

const InductorChart = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Inductor</h1>
      <p>Inductor is an electrical component that stores energy in magnetic field.</p>
      <p>The inductor is made of a coil of conducting wire. It is marked with the letter <strong>L</strong> in schematics.</p>
      <p>Inductance is measured in units of <strong>Henry (H)</strong>.</p>
      <p>Inductors reduce current in AC circuits and act as a short circuit in DC circuits.</p>

      <h2 className="text-2xl font-semibold mt-8">Inductor Symbols</h2>
      <ul className="list-disc list-inside">
        <li>Inductor</li>
        <li>Iron core inductor</li>
        <li>Variable inductor</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Inductors in Series</h2>
      <p><strong>L<sub>Total</sub> = L₁ + L₂ + L₃ + ...</strong></p>

      <h2 className="text-2xl font-semibold mt-8">Inductors in Parallel</h2>
      <p><strong>1 / L<sub>Total</sub> = 1 / L₁ + 1 / L₂ + 1 / L₃ + ...</strong></p>

      <h2 className="text-2xl font-semibold mt-8">Inductor's Voltage</h2>
      <p><strong>v<sub>L</sub>(t) = L × d(i<sub>L</sub>(t)) / dt</strong></p>

      <h2 className="text-2xl font-semibold mt-8">Inductor's Current</h2>
      <p><strong>i<sub>L</sub>(t) = i<sub>L</sub>(0) + (1 / L) × ∫<sub>0</sub><sup>t</sup> v<sub>L</sub>(τ) dτ</strong></p>

      <h2 className="text-2xl font-semibold mt-8">Energy Stored in Inductor</h2>
      <p><strong>E<sub>L</sub> = (1/2) × L × I²</strong></p>

      <h2 className="text-2xl font-semibold mt-8">AC Circuits</h2>
      <ul className="list-disc list-inside">
        <li><strong>Inductive Reactance (X<sub>L</sub>) = ωL</strong></li>
        <li><strong>Impedance (Z<sub>L</sub>)</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Cartesian form: <strong>Z<sub>L</sub> = jωL</strong></li>
            <li>Polar form: <strong>Z<sub>L</sub> = X<sub>L</sub>∠90º</strong></li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">See Also</h2>
      <ul className="list-disc list-inside">
        <li>Capacitor</li>
        <li>Resistor</li>
        <li>Electrical Symbols</li>
        <li>Electrical Units</li>
        <li>Ohm's Law</li>
      </ul>
    </div>
  );
};

export default InductorChart;
