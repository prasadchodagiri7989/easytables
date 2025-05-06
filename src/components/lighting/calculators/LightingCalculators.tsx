import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const calculators = [
  "Candela to lumens calculator",
  "Candela to lux calculator",
  "Footcandles to lux calculator",
  "Lumens to candela calculator",
  "Lumens to lux calculator",
  "Lumens to millicandela calculator",
  "Lumens to watts calculator",
  "Lux to candela calculator",
  "Lux to footcandles calculator",
  "Lux to lumens calculator",
  "Lux to watts calculator",
  "Millicandela to lumens calculator",
  "Watts to lumens calculator",
  "Watts to lux calculator"
];

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function LightingCalculators() {
    const location = useLocation();
    const showBreadcrumb = location.pathname.includes("/lighting-calculators");
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {showBreadcrumb && (
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lighting Calculators</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )}


      <h1 className="text-3xl font-bold mb-6 text-center">Lighting Calculators</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {calculators.map((item, i) => (
          <Link
            key={i}
            to={`/lighting-calculators/${slugify(item)}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
