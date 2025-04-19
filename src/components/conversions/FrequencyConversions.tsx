import { Link } from "react-router-dom";

const frequencyConversions = [
  "Hz to kHz conversion",
  "Hz to MHz conversion",
  "Hz to GHz conversion",
  "Hz to THz conversion",
  "Hz to rad/s conversion",
  "kHz to Hz conversion",
  "kHz to MHz conversion",
  "kHz to GHz conversion",
  "MHz to Hz conversion",
  "MHz to kHz conversion",
  "MHz to GHz conversion",
  "GHz to Hz conversion",
  "GHz to kHz conversion",
  "GHz to MHz conversion",
  "THz to Hz conversion",
  "Rad/s to Hz conversion",
  "1 kHz to Hz",
  "1 MHz to Hz",
  "1 MHz to kHz",
  "100 MHz to Hz",
  "1 GHz to Hz",
  "1 GHz to MHz"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function FrequencyConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequency Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {frequencyConversions.map((item, i) => (
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
