import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const probabilityStatsTools = [
  { label: "Basic Probability", path: "/probability/basic" },
  { label: "Expectation", path: "/probability/expectation" },
  { label: "Variance", path: "/probability/variance" },
  { label: "Standard Deviation", path: "/probability/standard-deviation" },
  { label: "Probability Distribution", path: "/probability/distribution" },
  { label: "Normal Distribution", path: "/probability/normal-distribution" }
];

export default function ProbabilityStatisticsTools() {
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
                    <Link to="/mathematics/probability">probability Tool</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
  </BreadcrumbList>
</Breadcrumb>
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Probability & Statistics Tools</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {probabilityStatsTools.map((item, i) => (
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
