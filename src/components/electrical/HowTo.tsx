import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

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

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Link to="/howto/save-electricity">
          <Button className="w-full md:w-auto">How to Save Electricity</Button>
        </Link>
        <Link to="/howto/save-energy">
          <Button className="w-full md:w-auto">How to Save Energy</Button>
        </Link>
      </div>
    </div>
  );
};

export default HowTo;
