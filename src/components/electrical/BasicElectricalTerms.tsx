import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // adjust path based on your project structure
import { Card, CardContent } from "@/components/ui/card";

const terms = [
  { name: "Electrical Voltage", path: "/electrical/content/voltage" },
  { name: "Electrical Current", path: "/electrical/content/current" },
  { name: "Electrical Resistance", path: "/electrical/content/resistance" },
  { name: "Electric Power", path: "/electrical/content/power" },
  { name: "Electric Charge", path: "/electrical/content/charge" },
  { name: "Power Efficiency", path: "/electrical/content/efficiency" },
  { name: "Power Factor", path: "/electrical/content/factor" },
];


const BasicElectricalTerms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Custom Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Basic Electrical Terms</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-4">Basic Electrical Terms</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {terms.map((term) => (
          <Card key={term.path}>
            <CardContent className="p-4">
              <Link
                to={term.path}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {term.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BasicElectricalTerms;
