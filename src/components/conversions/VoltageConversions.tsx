import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const conversions = [
  { label: "Volts to Millivolts", path: "/convertor/voltage?from=v&to=mv" },
  { label: "Volts to Kilovolts", path: "/convertor/voltage?from=v&to=kv" },
  { label: "Volts to Megavolts", path: "/convertor/voltage?from=v&to=Mv" },
  { label: "Millivolts to Volts", path: "/convertor/voltage?from=mv&to=v" },
  { label: "Kilovolts to Volts", path: "/convertor/voltage?from=kv&to=v" },
  { label: "Megavolts to Volts", path: "/convertor/voltage?from=Mv&to=v" }
];

export default function VoltageConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Voltage Conversions</h1>
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
