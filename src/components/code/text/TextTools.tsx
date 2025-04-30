import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";



const textTools = [
  { label: "Alt Codes", path: "/text/alt-codes" },
  { label: "ASCII Table", path: "/text/ascii-table" },
  { label: "Unicode Page", path: "/text/unicode-page" },
];

export default function TextTools() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
        
      <h1 className="text-3xl font-bold mb-6 text-center">Text Tools</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {textTools.map((item, i) => (
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
