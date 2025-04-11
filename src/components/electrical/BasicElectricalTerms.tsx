import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const terms = [
  { name: "Electrical Voltage", path: "/voltage" },
  { name: "Electrical Current", path: "/current" },
  { name: "Electrical Resistance", path: "/resistance" },
  { name: "Electric Power", path: "/power" },
  { name: "Electric Charge", path: "/charge" },
  { name: "Power Efficiency", path: "/efficiency" },
  { name: "Power Factor", path: "/factor" },
];

const BasicElectricalTerms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      

      <h1 className="text-3xl font-bold my-6">Basic Electrical Terms</h1>

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
