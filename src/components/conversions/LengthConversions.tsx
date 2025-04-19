import { Link } from "react-router-dom";

const calculations = [
  "cm to feet conversion",
  "cm to feet+inches",
  "cm to inches conversion",
  "cm to mm conversion",
  "Feet+inches to cm",
  "Feet+inches to meters",
  "Feet+inches to mm",
  "Feet to cm conversion",
  "Feet to mm conversion",
  "Feet to inches conversion",
  "Feet to meters conversion",
  "Height converter",
  "Inches to cm conversion",
  "Inches to feet conversion",
  "Inches to meters conversion",
  "Inches to mm conversion",
  "km to miles conversion",
  "Meters to feet conversion",
  "Meters to feet+inches",
  "Meters to inches conversion",
  "Miles to km conversion",
  "mm to cm conversion",
  "mm to feet conversion",
  "mm to feet+inches",
  "mm to inches conversion"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function LengthConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Length Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {calculations.map((item, i) => (
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
