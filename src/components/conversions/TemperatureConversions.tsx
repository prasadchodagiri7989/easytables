import { Link } from "react-router-dom";

const temperatureConversions = [
  "Fahrenheit to Celsius",
  "Fahrenheit to Kelvin",
  "Fahrenheit to Rankine",
  "Celsius to Fahrenheit",
  "Celsius to Kelvin",
  "Celsius to Rankine",
  "Kelvin to Fahrenheit",
  "Kelvin to Celsius",
  "Kelvin to Rankine",
  "Rankine to Fahrenheit",
  "Rankine to Celsius",
  "Rankine to Kelvin",
  "Celsius to Kelvin calculation",
  "Celsius to Fahrenheit calculation",
  "Fahrenheit to Celsius calculation",
  "Fahrenheit to Kelvin calculation",
  "Kelvin to Celsius calculation",
  "Kelvin to Fahrenheit calculation",
  "0 degrees Fahrenheit to Celsius",
  "10 degrees Fahrenheit to Celsius",
  "20 degrees Fahrenheit to Celsius",
  "30 degrees Fahrenheit to Celsius",
  "0 degrees Celsius to Fahrenheit",
  "10 degrees Celsius to Fahrenheit",
  "20 degrees Celsius to Fahrenheit",
  "30 degrees Celsius to Fahrenheit",
  "100 degrees Celsius to Fahrenheit"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function TemperatureConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Temperature Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {temperatureConversions.map((item, i) => (
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
