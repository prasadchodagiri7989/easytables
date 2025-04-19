import { Link } from "react-router-dom";

const energyConversions = [
  "Joules to kJ conversion",
  "Joules to BTU conversion",
  "Joules to Calories conversion",
  "Joules to kcal conversion",
  "Joules to kWh conversion",
  "Joules to eV conversion",
  "kJ to Joules conversion",
  "kJ to BTU conversion",
  "kJ to calories conversion",
  "kJ to kcal conversion",
  "BTU to kJ conversion",
  "BTU to Joules conversion",
  "BTU to kWh conversion",
  "kWh to BTU conversion",
  "kWh to Joules conversion",
  "Calories to Joules conversion",
  "Calories to kJ conversion",
  "Calories to kcal conversion",
  "kcal to calories conversion",
  "kcal to joules conversion",
  "kcal to kJ conversion",
  "eV to joules conversion",
  "eV to keV conversion",
  "eV to MeV conversion",
  "eV to GeV conversion",
  "keV to eV conversion",
  "MeV to eV conversion",
  "GeV to eV conversion",
  "How to convert kWh to BTU",
  "How to convert BTU to kWh",
  "How to convert calories to joules",
  "How to convert calories to kcal",
  "How to convert joules to calories",
  "How to convert joules to kJ",
  "How to convert kcal to calories",
  "How to convert kJ to joules",
  "How many calories are in 1 kcal",
  "How many kcal are in 1 calorie",
  "How to convert 1 kJ to joules",
  "How to convert 2 kJ to joules",
  "How to convert 5 kJ to joules",
  "What is kcal"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function EnergyConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Energy Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {energyConversions.map((item, i) => (
          <Link
            key={i}
            to={`/conversions/${slugify(item)}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
