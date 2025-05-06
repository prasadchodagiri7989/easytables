import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const calculusTools = [
  { label: "Derivative", path: "/calculus/derivative" },
  { label: "Laplace Transform", path: "/calculus/laplace-transform" },
  { label: "Convolution", path: "/calculus/convolution" }
];

export default function CalculusTools() {
  const location = useLocation();
  const showBreadcrumb = location.pathname.includes("/mathematics/calculus");

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
                <Link to="/mathematics/calculus">Calculus Tool</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
      )}

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Calculus & Analysis Tools</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {calculusTools.map((item, i) => (
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
