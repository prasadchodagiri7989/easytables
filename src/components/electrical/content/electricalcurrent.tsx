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

const ElectricCurrent = () => {
  return (
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electric Current</h1>

      <Section title="Definition">
        Electrical current is the flow rate of electric charge in an electric field, usually in an electrical circuit.
        <br />
        <br />
        <strong>Water Pipe Analogy:</strong> Visualize electric current like water flowing through a pipe.
        <br />
        <br />
        The electrical current is measured in ampere (A).
      </Section>

      <Section title="Electric Current Calculation">
        Electrical current is measured by the rate of electric charge flow in an electrical circuit:
        <Equation>i(t) = dQ(t) / dt</Equation>
        <ul className="list-disc list-inside">
          <li><strong>i(t)</strong>: Momentary current at time t (A)</li>
          <li><strong>Q(t)</strong>: Electric charge (C)</li>
          <li><strong>t</strong>: Time (s)</li>
        </ul>
        <br />
        When the current is constant:
        <Equation>I = ΔQ / Δt</Equation>
        <ul className="list-disc list-inside">
          <li><strong>I</strong>: Constant current (A)</li>
          <li><strong>ΔQ</strong>: Charge flow in coulombs (C)</li>
          <li><strong>Δt</strong>: Time interval (s)</li>
        </ul>
        <br />
        <strong>Example:</strong>
        <br />
        5 C flows through a resistor for 10 s:
        <Equation>I = ΔQ / Δt = 5C / 10s = 0.5A</Equation>
      </Section>

      <Section title="Current Calculation with Ohm's Law">
        The current through a resistor is given by:
        <Equation>IR = VR / R</Equation>
        <ul className="list-disc list-inside">
          <li><strong>IR</strong>: Current (A)</li>
          <li><strong>VR</strong>: Voltage (V)</li>
          <li><strong>R</strong>: Resistance (Ω)</li>
        </ul>
      </Section>

      <Section title="Current Direction">
        <table className="table-auto border mt-2">
          <thead>
            <tr>
              <th className="border px-2 py-1">Current Type</th>
              <th className="border px-2 py-1">From</th>
              <th className="border px-2 py-1">To</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">Positive charges</td><td className="border px-2">+</td><td className="border px-2">-</td></tr>
            <tr><td className="border px-2 py-1">Negative charges</td><td className="border px-2">-</td><td className="border px-2">+</td></tr>
            <tr><td className="border px-2 py-1">Conventional direction</td><td className="border px-2">+</td><td className="border px-2">-</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="Current in Series Circuits">
        Current is equal through all resistors in series, similar to water flowing through a single pipe.
        <Equation>ITotal = I1 = I2 = I3 = ...</Equation>
        <ul className="list-disc list-inside">
          <li><strong>ITotal</strong>: Total current (A)</li>
          <li><strong>I1, I2, I3...</strong>: Currents through each resistor</li>
        </ul>
      </Section>

      <Section title="Current in Parallel Circuits">
        Current splits among parallel paths like water through parallel pipes.
        <Equation>ITotal = I1 + I2 + I3 + ...</Equation>
        <ul className="list-disc list-inside">
          <li><strong>ITotal</strong>: Total current (A)</li>
          <li><strong>I1, I2, I3...</strong>: Currents through each load</li>
        </ul>
      </Section>

      <Section title="Current Divider">
        Current division in parallel resistors:
        <Equation>RT = 1 / (1 / R2 + 1 / R3)</Equation>
        <Equation>I1 = IT × RT / (R1 + RT)</Equation>
      </Section>

      <Section title="Kirchhoff's Current Law (KCL)">
        A node is where multiple circuit elements meet. KCL states:
        <Equation>∑ Ik = 0</Equation>
        The algebraic sum of currents entering a node is zero.
      </Section>

      <Section title="Alternating Current (AC)">
        AC is produced by sinusoidal voltage sources.
        <Equation>IZ = VZ / Z</Equation>
        <ul className="list-disc list-inside">
          <li><strong>IZ</strong>: Current (A)</li>
          <li><strong>VZ</strong>: Voltage (V)</li>
          <li><strong>Z</strong>: Impedance (Ω)</li>
        </ul>
      </Section>

      <Section title="Angular Frequency">
        <Equation>ω = 2πf</Equation>
        <ul className="list-disc list-inside">
          <li><strong>ω</strong>: Angular frequency (rad/s)</li>
          <li><strong>f</strong>: Frequency (Hz)</li>
        </ul>
      </Section>

      <Section title="Momentary Current in AC">
        <Equation>i(t) = Ipeak × sin(ωt + θ)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>Ipeak</strong>: Peak current (A)</li>
          <li><strong>ω</strong>: Angular frequency (rad/s)</li>
          <li><strong>t</strong>: Time (s)</li>
          <li><strong>θ</strong>: Phase angle (rad)</li>
        </ul>
      </Section>

      <Section title="RMS & Peak-to-Peak Current">
        <Equation>Irms = Ipeak / √2 ≈ 0.707 × Ipeak</Equation>
        <Equation>Ip-p = 2 × Ipeak</Equation>
        RMS is the effective value; peak-to-peak is the full swing.
      </Section>

      <Section title="Current Measurement">
        Current is measured using an ammeter in series with the circuit.
        <ul className="list-disc list-inside">
          <li>The ammeter allows all current to flow through it.</li>
          <li>It has very low resistance to avoid affecting the measurement.</li>
        </ul>
      </Section>
    </div>
  );
};

export default ElectricCurrent;
