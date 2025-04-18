import { Link } from "react-router-dom";

const calculators = [
  "Amps to kW calculator",
  "Amps to kVA calculator",
  "Amps to VA calculator",
  "Amps to volts calculator",
  "Amps to watts calculator",
  "Electricity bill calculator",
  "Energy consumption calculator",
  "Energy cost calculator",
  "eV to volts calculator",
  "Joules to watts calculator",
  "Joules to volts calculator",
  "kVA to amps calculator",
  "kVA to watts calculator",
  "kVA to kW calculator",
  "kVA to VA calculator",
  "kW to amps calculator",
  "kW to volts calculator",
  "kW to kWh calculator",
  "kW to VA calculator",
  "kW to kVA calculator",
  "kWh to kW calculator",
  "kWh to watts calculator",
  "mAh to Wh calculator",
  "Ohms Law calculator",
  "Power calculator",
  "Power factor calculator",
  "VA to amps calculator",
  "VA to watts calculator",
  "VA to kW calculator",
  "VA to kVA calculator",
  "Voltage divider calculator",
  "Voltage drop calculator",
  "Volts to amps calculator",
  "Volts to watts calculator",
  "Volts to kW calculator",
  "Volts to joules calculator",
  "Volts to eV calculator",
  "Watts-volts-amps-ohms calculator",
  "Watts to amps calculator",
  "Watts to joules calculator",
  "Watts to kWh calculator",
  "Watts to volts calculator",
  "Watts to VA calculator",
  "Watts to kVA calculator",
  "Wh to mAh calculator",
  "Wire gauge calculator"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ElectricalCalculators() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Electrical Calculators</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {calculators.map((item, i) => (
          <Link
            key={i}
            to={`/electrical-calculators/${slugify(item)}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
