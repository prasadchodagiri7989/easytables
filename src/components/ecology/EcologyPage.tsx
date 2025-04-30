import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const ecologyTools = [
  { label: "How to Reduce Carbon Footprint", path: "/eco/reduce-carbon-footprint" },
  { label: "How to Reduce Plastic Waste Pollution", path: "/eco/reduce-plastic-waste" },
  { label: "How to Save Fuel", path: "/eco/save-fuel" },
  { label: "How to Save Electricity", path: "/eco/save-electricity" },
  { label: "How to Save Energy", path: "/eco/save-energy" },
  { label: "Green Hosting Comparison", path: "/eco/green-hosting-comparison" },
  { label: "Plant Trees", path: "/eco/plant-trees" }
];

export default function EcologyTools() {
  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-center">Ecology & Sustainability</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {ecologyTools.map((item, i) => (
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