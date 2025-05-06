import { useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const trigonometryTools = [
  { label: "Arccos", path: "/trigonometry/arccos" },
  { label: "Arcsin", path: "/trigonometry/arcsin" },
  { label: "Arctan", path: "/trigonometry/arctan" }
];

export default function TrigonometryTools() {
  const location = useLocation();
  const showBreadcrumb = location.pathname.includes("/mathematics/trigonometry");

  return (
    <>
      {showBreadcrumb && (
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
                <Link to="/mathematics/trigonometry">Trigonometry Tool</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
      )}

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Trigonometry Tools</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {trigonometryTools.map((item, i) => (
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
