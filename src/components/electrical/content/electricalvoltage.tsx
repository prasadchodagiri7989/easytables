import React from "react";

const countries = [
  { country: "Australia", voltage: "230V", frequency: "50Hz" },
  { country: "Brazil", voltage: "110V", frequency: "60Hz" },
  { country: "Canada", voltage: "120V", frequency: "60Hz" },
  { country: "China", voltage: "220V", frequency: "50Hz" },
  { country: "France", voltage: "230V", frequency: "50Hz" },
  { country: "Germany", voltage: "230V", frequency: "50Hz" },
  { country: "India", voltage: "230V", frequency: "50Hz" },
  { country: "Ireland", voltage: "230V", frequency: "50Hz" },
  { country: "Israel", voltage: "230V", frequency: "50Hz" },
  { country: "Italy", voltage: "230V", frequency: "50Hz" },
  { country: "Japan", voltage: "100V", frequency: "50/60Hz" },
  { country: "New Zealand", voltage: "230V", frequency: "50Hz" },
  { country: "Philippines", voltage: "220V", frequency: "60Hz" },
  { country: "Russia", voltage: "220V", frequency: "50Hz" },
  { country: "South Africa", voltage: "220V", frequency: "50Hz" },
  { country: "Thailand", voltage: "220V", frequency: "50Hz" },
  { country: "UK", voltage: "230V", frequency: "50Hz" },
  { country: "USA", voltage: "120V", frequency: "60Hz" }
];

const Equation = ({ children }) => (
  <div className="my-2 px-4 py-2 bg-gray-100 rounded text-sm font-mono dark:bg-transparent border">{children}</div>
);

const Section = ({ title, children }) => (
  <div className="my-6 ">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <div className="text-base text-gray-800 dark:text-white">{children}</div>
  </div>
);

const ElectricalVoltage = () => {
  return (
<div className="max-w-3xl mx-auto p-6  dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electrical Voltage</h1>

      <Section title="Definition">
        Electrical voltage is defined as electric potential difference between two points of an electric field.
        <br />
        Using water pipe analogy, voltage is like the height difference that makes water flow down.
        <Equation>V = φ₂ - φ₁</Equation>
        V is voltage between point 2 and 1 (in volts).<br />
        φ₂ and φ₁ are electric potentials at points 2 and 1 respectively.
      </Section>

      <Section title="Voltage Formula (Energy/Charge)">
        <Equation>V = E / Q</Equation>
        V - voltage (V) <br />
        E - energy in joules (J) <br />
        Q - electric charge in coulombs (C)
      </Section>

      <Section title="Voltage in Series">
        Total voltage = sum of voltages.
        <Equation>Vₜ = V₁ + V₂ + V₃ + ...</Equation>
      </Section>

      <Section title="Voltage in Parallel">
        Voltage across each parallel element is the same.
        <Equation>Vₜ = V₁ = V₂ = V₃ = ...</Equation>
      </Section>

      <Section title="Voltage Divider">
        <Equation>Vᵢ = Vₜ × (Rᵢ / (R₁ + R₂ + R₃ + ...))</Equation>
      </Section>

      <Section title="Kirchhoff's Voltage Law (KVL)">
        The sum of all voltage drops in a loop equals zero.
        <Equation>∑ Vₖ = 0</Equation>
      </Section>

      <Section title="DC Circuit (Ohm's Law)">
        <Equation>Vᴿ = Iᴿ × R</Equation>
        Vᴿ - voltage drop (V)<br />
        Iᴿ - current (A)<br />
        R - resistance (Ω)
      </Section>

      <Section title="AC Circuit (Ohm's Law)">
        <Equation>Vᶻ = Iᶻ × Z</Equation>
        Vᶻ - voltage drop (V)<br />
        Iᶻ - current (A)<br />
        Z - impedance (Ω)
      </Section>

      <Section title="Momentary Voltage">
        <Equation>v(t) = Vₘₐₓ × sin(ωt + θ)</Equation>
        v(t) - voltage at time t (V)<br />
        Vₘₐₓ - peak voltage (V)<br />
        ω - angular frequency (rad/s)<br />
        θ - phase (rad)
      </Section>

      <Section title="RMS (Effective) Voltage">
        <Equation>Vᵣₘₛ = Vₘₐₓ / √2 ≈ 0.707 × Vₘₐₓ</Equation>
      </Section>

      <Section title="Peak-to-Peak Voltage">
        <Equation>Vₚ₋ₚ = 2 × Vₘₐₓ</Equation>
      </Section>

      <Section title="Voltage Drop">
        Drop of electrical potential across a load.
      </Section>

      <Section title="Voltage Measurement">
        Measured using a **Voltmeter**, connected in **parallel** to the component. Voltmeters have high resistance.
      </Section>

      <Section title="Voltage by Country">
        Different countries use different standard AC voltages and frequencies.
        <table className="table-auto w-full mt-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-1 text-left dark:text-black">Country</th>
              <th className="px-2 py-1 text-left dark:text-black">Voltage</th>
              <th className="px-2 py-1 text-left dark:text-black">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(({ country, voltage, frequency }) => (
              <tr key={country} className="border-t border-gray-300">
                <td className="px-2 py-1">{country}</td>
                <td className="px-2 py-1">{voltage}</td>
                <td className="px-2 py-1">{frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  );
};

export default ElectricalVoltage;
