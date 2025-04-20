import { Link } from "react-router-dom";

const conversions = [
  { label: "Grams to Kilograms", path: "/convertor/mass?from=g&to=kg" },
  { label: "Grams to Ounces", path: "/convertor/mass?from=g&to=oz" },
  { label: "Grams to Pounds", path: "/convertor/mass?from=g&to=lb" },
  { label: "Kilograms to Grams", path: "/convertor/mass?from=kg&to=g" },
  { label: "Kilograms to Pounds", path: "/convertor/mass?from=kg&to=lb" },
  { label: "Ounces to Grams", path: "/convertor/mass?from=oz&to=g" },
  { label: "Ounces to Pounds", path: "/convertor/mass?from=oz&to=lb" },
  { label: "Pounds to Grams", path: "/convertor/mass?from=lb&to=g" },
  { label: "Pounds to Kilograms", path: "/convertor/mass?from=lb&to=kg" },
  { label: "Pounds to Ounces", path: "/convertor/mass?from=lb&to=oz" }
];

export default function WeightConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Weight Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {conversions.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.label} Conversion
          </Link>
        ))}
      </div>
    </div>
  );
}
