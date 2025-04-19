import { Link } from "react-router-dom";

const calculations = [
  "Grams to Kilograms",
  "Grams to Ounces",
  "Grams to Pounds",
  "Kilograms to Grams",
  "Kilograms to Pounds",
  "Ounces to Grams",
  "Ounces to Pounds",
  "Pounds to Grams",
  "Pounds to Kilograms",
  "Pounds to Ounces"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function WeightConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Weight Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {calculations.map((item, i) => (
          <Link
            key={i}
            to={`/conversions/${slugify(item)}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item} Conversion
          </Link>
        ))}
      </div>
    </div>
  );
}
