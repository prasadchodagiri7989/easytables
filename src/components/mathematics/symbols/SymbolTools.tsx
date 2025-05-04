import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const symbolTopics = [
  { label: "Math Symbols", path: "/symbols/math" },
  { label: "Algebra Symbols", path: "/symbols/algebra" },
  { label: "Geometry Symbols", path: "/symbols/geometry" },
  { label: "Statistical Symbols", path: "/symbols/statistics" },
  { label: "Logic Symbols", path: "/symbols/logic" },
  { label: "Set Theory Symbols", path: "/symbols/set-theory" },
  { label: "Calculus & Analysis Symbols", path: "/symbols/calculus-analysis" },
  { label: "Number Symbols", path: "/symbols/numbers" },
  { label: "Greek Alphabet Symbols", path: "/symbols/greek" },
  { label: "Roman Numerals", path: "/symbols/roman-numerals" }
];

export default function MathSymbolsTools() {
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
        <Link to="/mathematics/symbols">symbols Tool</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
  </BreadcrumbList>
</Breadcrumb>
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Math Symbols</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {symbolTopics.map((item, i) => (
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
