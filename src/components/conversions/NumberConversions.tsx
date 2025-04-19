import { Link } from "react-router-dom";

const numberConversions = [
  "ASCII to binary converter",
  "ASCII to hex converter",
  "Base converter",
  "Binary converter",
  "Binary to ASCII converter",
  "Binary to decimal converter",
  "Binary to hex converter",
  "Binary to string converter",
  "Date to roman numerals converter",
  "Decimal to fraction converter",
  "Decimal to percent converter",
  "Decimal to binary converter",
  "Decimal to octal converter",
  "Decimal to hex converter",
  "Degrees to degrees,minutes,seconds converter",
  "Degrees,minutes, seconds to degrees converter",
  "Degrees to radians converter",
  "Fraction to decimal converter",
  "Fraction to percent converter",
  "Hex/decimal/octal/binary converter",
  "Hex to ASCII converter",
  "Hex to binary conversion",
  "Hex to decimal conversion",
  "Octal to decimal conversion",
  "Percent to decimal converter",
  "Percent to fraction conversion",
  "Percent to ppm conversion",
  "ppm to percent conversion",
  "ppm to ppb conversion",
  "ppm to ppt conversion",
  "ppb to ppm conversion",
  "ppt to ppm conversion",
  "ppm converter",
  "Radians to degrees converter",
  "Roman numerals converter",
  "Scientific notation converter",
  "String to binary converter",
  "How to convert binary to decimal",
  "How to convert binary to hex",
  "How to convert decimal to binary",
  "How to convert decimal to hex",
  "How to convert hex to binary",
  "How to convert hex to decimal",
  "How to convert number to roman numerals",
  "How to convert roman numerals to number",
  "How to convert percent to ppm",
  "How to convert ppm to percent"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function NumberConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Number Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {numberConversions.map((item, i) => (
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
