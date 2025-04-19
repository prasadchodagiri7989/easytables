import { Link } from "react-router-dom";

const colorConversions = [
  "CMYK to RGB conversion",
  "Hex to RGB conversion",
  "HSL to RGB conversion",
  "HSV to RGB conversion",
  "RGB to CMYK conversion",
  "RGB to hex conversion",
  "RGB to HSL conversion",
  "RGB to HSV conversion",
  "How to convert RGB to hex",
  "How to convert hex to RGB"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ColorConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Color Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {colorConversions.map((item, i) => (
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
