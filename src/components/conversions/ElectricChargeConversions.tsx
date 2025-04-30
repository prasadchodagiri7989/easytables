import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const electricChargeConversions = [
  "Coulombs to pC conversion",
  "Coulombs to nC conversion",
  "Coulombs to μC conversion",
  "Coulombs to mC conversion",
  "Coulombs to electron charge conversion",
  "Coulombs to Ah conversion",
  "pC to coulombs conversion",
  "nC to coulombs conversion",
  "μC to coulombs conversion",
  "mC to coulombs conversion",
  "Electron charge to coulombs conversion",
  "Ah to coulombs conversion"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ElectricChargeConversions() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Electric Charge Conversions</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {electricChargeConversions.map((item, i) => (
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
