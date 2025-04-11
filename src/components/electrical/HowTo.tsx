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

const howToItems = [
  { name: "How to Save Electricity", path: "/howto/save-electricity" },
  { name: "How to Save Energy", path: "/howto/save-energy" },
];

const HowTo = () => {
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
            <BreadcrumbPage>How To Guides</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-4">How To Guides</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {howToItems.map((item) => (
          <Card key={item.path}>
            <CardContent className="p-4">
              <Link
                to={item.path}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {item.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowTo;
