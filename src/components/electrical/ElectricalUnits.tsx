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

const electricalUnits = [
    { name: "Ampere (A)", path: "/electrical/units/ampere" },
    { name: "dB-milliwatt (dBm)", path: "/electrical/units/dbm" },
    { name: "dB-watt (dBW)", path: "/electrical/units/dbw" },
    { name: "Decibel (dB)", path: "/electrical/units/decibel" },
    { name: "Farad (F)", path: "/electrical/units/farad" },
    { name: "Kilovolt-amp (kVA)", path: "/electrical/units/kva" },
    { name: "Kilowatt (kW)", path: "/electrical/units/kw" },
    { name: "Kilowatt-hour (kWh)", path: "/electrical/units/kwh" },
    { name: "Ohm (Ω)", path: "/electrical/units/ohm" },
    { name: "Volt (V)", path: "/electrical/units/volt" },
    { name: "Watt (W)", path: "/electrical/units/watt" },
  ];
  

const ElectricalUnits = () => {
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
            <BreadcrumbPage>Electrical Units</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-4">Electrical & Electronic Units</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {electricalUnits.map((unit) => (
          <Card key={unit.path}>
            <CardContent className="p-4">
              <Link
                to={unit.path}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {unit.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ElectricalUnits;
