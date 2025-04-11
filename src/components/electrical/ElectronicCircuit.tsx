import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const laws = [
    { name: "Ohm's Law", path: "/electrical/circuit-laws/ohm" },
    { name: "Voltage Divider Rule", path: "/electrical/circuit-laws/voltage-divider" },
    { name: "Kirchhoff's Laws (KVL / KCL)", path: "/electrical/circuit-laws/kirchhoff" },
    { name: "Coulomb's Law", path: "/electrical/circuit-laws/coulomb" },
  ];
  

const ElectronicCircuit = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Electronic Circuit Laws</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-4">Electronic Circuit Laws</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {laws.map((law) => (
          <Card key={law.path}>
            <CardContent className="p-4">
              <Link
                to={law.path}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {law.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ElectronicCircuit;
