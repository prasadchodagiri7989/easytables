import { Link } from "react-router-dom";

const conversions = [
  { label: "cm to feet conversion", path: "/convertor/length?from=cm&to=ft" },
  { label: "cm to inches conversion", path: "/convertor/length?from=cm&to=in" },
  { label: "cm to mm conversion", path: "/convertor/length?from=cm&to=mm" },
  { label: "Feet to cm conversion", path: "/convertor/length?from=ft&to=cm" },
  { label: "Feet to mm conversion", path: "/convertor/length?from=ft&to=mm" },
  { label: "Feet to inches conversion", path: "/convertor/length?from=ft&to=in" },
  { label: "Feet to meters conversion", path: "/convertor/length?from=ft&to=m" },
  { label: "Inches to cm conversion", path: "/convertor/length?from=in&to=cm" },
  { label: "Inches to feet conversion", path: "/convertor/length?from=in&to=ft" },
  { label: "Inches to meters conversion", path: "/convertor/length?from=in&to=m" },
  { label: "Inches to mm conversion", path: "/convertor/length?from=in&to=mm" },
  { label: "km to miles conversion", path: "/convertor/length?from=km&to=mi" },
  { label: "Meters to feet conversion", path: "/convertor/length?from=m&to=ft" },
  { label: "Meters to inches conversion", path: "/convertor/length?from=m&to=in" },
  { label: "Miles to km conversion", path: "/convertor/length?from=mi&to=km" },
  { label: "mm to cm conversion", path: "/convertor/length?from=mm&to=cm" },
  { label: "mm to feet conversion", path: "/convertor/length?from=mm&to=ft" },
  { label: "mm to inches conversion", path: "/convertor/length?from=mm&to=in" }
];

export default function LengthConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Length Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {conversions.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
