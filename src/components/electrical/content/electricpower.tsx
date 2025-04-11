import React from "react";

const Equation = ({ children }) => (
  <div className="my-2 px-4 py-2 bg-gray-100 dark:bg-transparent border rounded text-sm font-mono">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <div className="my-6">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <div className="text-base text-gray-800 dark:text-white">{children}</div>
  </div>
);

const ElectricPower = () => {
  return (
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electric Power</h1>

      <Section title="Definition">
        Electric power (<strong>P</strong>) is the rate of energy consumption over time:
        <Equation>P = E / t</Equation>
        <ul className="list-disc list-inside">
          <li><strong>P</strong>: Electric power in watts (W)</li>
          <li><strong>E</strong>: Energy in joules (J)</li>
          <li><strong>t</strong>: Time in seconds (s)</li>
        </ul>
      </Section>

      <Section title="Example">
        <p>Find the electric power of a circuit that consumes 120 joules in 20 seconds:</p>
        <Equation>E = 120J, t = 20s</Equation>
        <Equation>P = E / t = 120J / 20s = 6W</Equation>
      </Section>

      <Section title="Electric Power Calculation">
        Electric power can also be calculated using voltage, current, or resistance:
        <Equation>P = V × I</Equation>
        <Equation>P = I² × R</Equation>
        <Equation>P = V² / R</Equation>
        <ul className="list-disc list-inside">
          <li><strong>V</strong>: Voltage (V)</li>
          <li><strong>I</strong>: Current (A)</li>
          <li><strong>R</strong>: Resistance (Ω)</li>
        </ul>
      </Section>

      <Section title="Power in AC Circuits">
        For single-phase AC:
        <Equation>P = Vrms × Irms × cos(φ)</Equation>
        <br />
        For three-phase AC:
        <ul className="list-disc list-inside">
          <li>Using line-to-line voltage:
            <Equation>P₃φ = √3 × VL-L × IL × cos(φ)</Equation>
          </li>
          <li>Using line-to-neutral voltage:
            <Equation>P₃φ = 3 × VL-0 × IL × cos(φ)</Equation>
          </li>
        </ul>
      </Section>

      <Section title="Real Power (P)">
        Real power is the actual power consumed to do work:
        <Equation>P = Vrms × Irms × cos(φ)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>P</strong>: Real power (W)</li>
          <li><strong>Vrms</strong>: RMS voltage (V)</li>
          <li><strong>Irms</strong>: RMS current (A)</li>
          <li><strong>φ</strong>: Phase angle between voltage and current</li>
        </ul>
      </Section>

      <Section title="Reactive Power (Q)">
        Reactive power is the unused energy in the circuit:
        <Equation>Q = Vrms × Irms × sin(φ)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>Q</strong>: Reactive power (VAR)</li>
          <li><strong>Vrms</strong>: RMS voltage (V)</li>
          <li><strong>Irms</strong>: RMS current (A)</li>
          <li><strong>φ</strong>: Phase angle between voltage and current</li>
        </ul>
      </Section>

      <Section title="Apparent Power (S)">
        Apparent power is the total power supplied to the circuit:
        <Equation>S = Vrms × Irms</Equation>
        <ul className="list-disc list-inside">
          <li><strong>S</strong>: Apparent power (VA)</li>
          <li><strong>Vrms</strong>: RMS voltage (V)</li>
          <li><strong>Irms</strong>: RMS current (A)</li>
        </ul>
      </Section>

      <Section title="Relationship Between P, Q, and S">
        The relation between real, reactive, and apparent power is:
        <Equation>P² + Q² = S²</Equation>
        <ul className="list-disc list-inside">
          <li><strong>P</strong>: Real power (W)</li>
          <li><strong>Q</strong>: Reactive power (VAR)</li>
          <li><strong>S</strong>: Apparent power (VA)</li>
        </ul>
      </Section>
    </div>
  );
};

export default ElectricPower;
