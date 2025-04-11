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

const PowerEfficiency = () => {
  return (
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Power Efficiency</h1>

      <Section title="What is Power Efficiency?">
        Power efficiency is the ratio of output power to input power, expressed as a percentage.
        <Equation>η = 100% × (P<sub>out</sub> / P<sub>in</sub>)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>η</strong>: Efficiency in percent (%)</li>
          <li><strong>P<sub>in</sub></strong>: Input power in watts (W)</li>
          <li><strong>P<sub>out</sub></strong>: Output power in watts (W)</li>
        </ul>
      </Section>

      <Section title="Example: Power Efficiency of a Motor">
        <p>An electric motor has an input power of 50 W, operates for 60 seconds, and does 2970 J of work.</p>
        <ul className="list-disc list-inside my-2">
          <li><strong>P<sub>in</sub></strong> = 50 W</li>
          <li><strong>E</strong> = 2970 J</li>
          <li><strong>t</strong> = 60 s</li>
        </ul>
        <Equation>P<sub>out</sub> = E / t = 2970 J / 60 s = 49.5 W</Equation>
        <Equation>η = 100% × (49.5 W / 50 W) = 99%</Equation>
      </Section>

      <Section title="Energy Efficiency">
        Energy efficiency is the ratio of output energy to input energy, expressed as a percentage.
        <Equation>η = 100% × (E<sub>out</sub> / E<sub>in</sub>)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>η</strong>: Efficiency in percent (%)</li>
          <li><strong>E<sub>in</sub></strong>: Input energy in joules (J)</li>
          <li><strong>E<sub>out</sub></strong>: Output energy in joules (J)</li>
        </ul>
      </Section>

      <Section title="Example: Energy Efficiency of a Light Bulb">
        <p>A light bulb has an input power of 50 W, operates for 60 seconds, and produces 2400 J of heat.</p>
        <ul className="list-disc list-inside my-2">
          <li><strong>P<sub>in</sub></strong> = 50 W</li>
          <li><strong>E<sub>heat</sub></strong> = 2400 J</li>
          <li><strong>t</strong> = 60 s</li>
        </ul>
        <Equation>E<sub>in</sub> = P<sub>in</sub> × t = 50 W × 60 s = 3000 J</Equation>
        <Equation>E<sub>out</sub> = E<sub>in</sub> - E<sub>heat</sub> = 3000 J - 2400 J = 600 J</Equation>
        <Equation>η = 100% × (600 J / 3000 J) = 20%</Equation>
      </Section>
    </div>
  );
};

export default PowerEfficiency;
