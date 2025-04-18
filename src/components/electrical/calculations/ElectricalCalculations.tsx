import { Link } from "react-router-dom";

const calculations = [
  "1 amps to watts",
  "1 watt to amps",
  "2 amps to watt",
  "3 amps to watt",
  "10 amps to watt",
  "15 amps to watt",
  "100 amps to watt",
  "100 watts to amps",
  "500 watts to amps",
  "600 watts to amps",
  "800 watts to amps",
  "1000 watts to amps",
  "1200 watts to amps",
  "2000 watts to amps",
  "Ah to mAh",
  "Amps to kVA",
  "Amps to mA",
  "Amps to kW",
  "Amps to ohms",
  "Amps to VA",
  "Amps to volts",
  "Amps to watts",
  "dB converter",
  "eV to volts",
  "Joules to kW",
  "Joules to volts",
  "Joules to watts",
  "kW to amps",
  "kJ to kW",
  "kJ to watts",
  "kVA to amps",
  "kW to kVA",
  "kW to joules",
  "kVA to kW",
  "kVA to VA",
  "kVA to watts",
  "kW to kJ",
  "kW to kWh",
  "kW to VA",
  "kW to volts",
  "kW to Wh",
  "kWh to kW",
  "kWh to watts",
  "Lumens to watts",
  "Lumens to lux",
  "Lux to lumens",
  "mA to amps",
  "mAh to Ah",
  "mAh to Wh",
  "Ohms to amps",
  "Ohms to volts",
  "VA to amps",
  "VA to watts",
  "VA to kVA",
  "VA to kW",
  "Volts to amps",
  "Volts to joules",
  "Volts to kW",
  "Volts to ohms",
  "Volts to eV",
  "Volts to watts",
  "Watts to amps",
  "Watts to joules",
  "Watts to volts",
  "Watts to VA",
  "Watts to kVA",
  "Watts to kWh",
  "Watts to kJ",
  "Watts to lumens",
  "Watts to Wh",
  "Wh to kW",
  "Wh to mAh",
  "Wh to watts"
];

const slugify = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ElectricalCalculations() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Electrical Calculations</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {calculations.map((item, i) => (
          <Link
            key={i}
            to={`/calculations/${slugify(item)}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)} calculation
          </Link>
        ))}
      </div>
    </div>
  );
}
