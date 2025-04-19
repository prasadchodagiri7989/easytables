import { Link } from "react-router-dom";

const voltageConversions = [
  "Volts to microvolts (µV) conversion",
  "Volts to millivolts (mV) conversion",
  "Volts to kilovolts (kV) conversion",
  "Volts to megavolts (MV) conversion",
  "Volts to gigavolts (GV) conversion",
  "Microvolts (µV) to volts (V) conversion",
  "Millivolts (mV) to volts (V) conversion",
  "Kilovolts (kV) to volts (V) conversion",
  "Megavolts (MV) to volts (V) conversion",
  "Gigavolts (GV) to volts (V) conversion"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function VoltageConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Voltage Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {voltageConversions.map((item, i) => (
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
