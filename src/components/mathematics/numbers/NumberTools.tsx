import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const numberTools = [
  { label: "Multiplication Table", path: "/numbers/multiplication-table" },
  { label: "Addition Table", path: "/numbers/addition-table" },
  { label: "Exponents Rules", path: "/numbers/exponents-rules" },
  { label: "Numeral Systems", path: "/numbers/numeral-systems" },
  { label: "Percentage (%)", path: "/numbers/percentage" },
  { label: "Per-mille (‰)", path: "/numbers/per-mille" },
  { label: "Parts-per Million (ppm)", path: "/numbers/parts-per-million" },
  { label: "Zero Number (0)", path: "/numbers/zero" },
  { label: "Prime Number", path: "/numbers/prime-number" },
  { label: "e Constant", path: "/numbers/e-constant" },
  { label: "Fibonacci Numbers", path: "/numbers/fibonacci" }
];

export default function NumberTools() {
  return (
    <>
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                              <Link to="/mathematics/numbers">Numbers Tool</Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Number Tools & Tables</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {numberTools.map((item, i) => (
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
    </>
  );
}
