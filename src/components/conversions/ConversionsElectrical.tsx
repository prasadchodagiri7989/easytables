import React, { useState } from 'react';

interface Calculator {
  label: string;
  inputs: { name: string; label: string; type?: string }[];
  calculate: (values: Record<string, number>) => string;
}

const calculators: Calculator[] = [
  {
    label: "Amps to kW",
    inputs: [
      { name: 'amps', label: 'Current (A)' },
      { name: 'volts', label: 'Voltage (V)' },
      { name: 'pf', label: 'Power Factor (0-1)' },
    ],
    calculate: ({ amps, volts, pf }) => `${((amps * volts * pf) / 1000).toFixed(3)} kW`,
  },
  {
    label: "Amps to kVA",
    inputs: [
      { name: 'amps', label: 'Current (A)' },
      { name: 'volts', label: 'Voltage (V)' },
    ],
    calculate: ({ amps, volts }) => `${((amps * volts) / 1000).toFixed(3)} kVA`,
  },
  {
    label: "Amps to VA",
    inputs: [
      { name: 'amps', label: 'Current (A)' },
      { name: 'volts', label: 'Voltage (V)' },
    ],
    calculate: ({ amps, volts }) => `${(amps * volts).toFixed(2)} VA`,
  },
  {
    label: "Amps to Volts",
    inputs: [
      { name: 'watts', label: 'Power (W)' },
      { name: 'amps', label: 'Current (A)' },
    ],
    calculate: ({ watts, amps }) => `${(watts / amps).toFixed(2)} V`,
  },
  {
    label: "Amps to Watts",
    inputs: [
      { name: 'amps', label: 'Current (A)' },
      { name: 'volts', label: 'Voltage (V)' },
    ],
    calculate: ({ amps, volts }) => `${(amps * volts).toFixed(2)} W`,
  },
  // Add more calculators as needed
];

export default function CalculatorTool() {
  const [selected, setSelected] = useState<Calculator>(calculators[0]);
  const [values, setValues] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleCalculate = () => {
    try {
      setResult(selected.calculate(values));
    } catch {
      setResult('Invalid input.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-xl space-y-4">
      <h1 className="text-xl font-semibold">Electrical Calculators</h1>
      <select
        className="w-full p-2 border rounded"
        onChange={(e) => {
          const newCalc = calculators.find((c) => c.label === e.target.value);
          if (newCalc) {
            setSelected(newCalc);
            setValues({});
            setResult('');
          }
        }}
        value={selected.label}
      >
        {calculators.map((calc) => (
          <option key={calc.label} value={calc.label}>
            {calc.label}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selected.inputs.map((input) => (
          <input
            key={input.name}
            type="number"
            step="any"
            name={input.name}
            placeholder={input.label}
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        ))}
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-2 text-lg font-medium text-green-700">
          Result: {result}
        </div>
      )}
    </div>
  );
}
