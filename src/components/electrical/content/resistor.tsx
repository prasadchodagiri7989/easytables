import React from "react";

export default function ResistorChart() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">What is a Resistor</h1>
      <p>
        A resistor is an electrical component that reduces the electric current.
        The resistor's ability to reduce the current is called <strong>resistance</strong>
        and is measured in units of ohms (symbol: Ω). Think of it like a thin pipe
        that limits water flow.
      </p>

      <h2 className="text-2xl font-semibold">Ohm's Law</h2>
      <ul className="list-disc pl-5">
        <li>I = V / R</li>
        <li>P = I × V</li>
        <li>P = I² × R</li>
        <li>P = V² / R</li>
      </ul>

      <h2 className="text-2xl font-semibold">Resistors in Parallel</h2>
      <p>1 / RTotal = 1 / R1 + 1 / R2 + 1 / R3 + ...</p>

      <h2 className="text-2xl font-semibold">Resistors in Series</h2>
      <p>RTotal = R1 + R2 + R3 + ...</p>

      <h2 className="text-2xl font-semibold">Dimensions and Material Affects</h2>
      <p>
        R = ρ × (l / A) where ρ is resistivity, l is length, and A is cross-sectional area.
      </p>

      <h2 className="text-2xl font-semibold">Resistor Symbols</h2>
      <ul className="list-disc pl-5">
        <li>Resistor (IEEE/IEC)</li>
        <li>Potentiometer</li>
        <li>Variable Resistor / Rheostat</li>
        <li>Trimmer, Thermistor, Photoresistor (LDR)</li>
      </ul>

      <h2 className="text-2xl font-semibold">Resistor Color Code</h2>
      <p>4 bands: (10 × digit1 + digit2) × multiplier</p>
      <p>5/6 bands: (100 × digit1 + 10 × digit2 + digit3) × multiplier</p>

      <h2 className="text-2xl font-semibold">Resistor Types</h2>
      <ul className="list-disc pl-5">
        <li>Variable resistor</li>
        <li>Potentiometer</li>
        <li>Photo-resistor</li>
        <li>Power resistor</li>
        <li>Surface mount (SMT/SMD)</li>
        <li>Resistor network</li>
        <li>Carbon, Chip, Metal-oxide, Ceramic resistors</li>
      </ul>

      <h2 className="text-2xl font-semibold">Pull-up & Pull-down Resistors</h2>
      <p>
        <strong>Pull-up</strong>: Connected to high voltage (e.g., +5V) to default a line to '1'.
      </p>
      <p>
        <strong>Pull-down</strong>: Connected to ground (0V) to default a line to '0'.
      </p>

      <h2 className="text-xl font-medium">See also</h2>
      <ul className="list-disc pl-5">
        <li>Electrical Resistance</li>
        <li>Resistor Symbols</li>
        <li>Ohm</li>
        <li>Ohm's Law</li>
        <li>Capacitor</li>
        <li>Inductor</li>
      </ul>
    </div>
  );
}
