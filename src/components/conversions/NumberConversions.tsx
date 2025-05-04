import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

const numberConversions = [
  { label: "ASCII to Binary", from: "ascii", to: "binary" },
  { label: "ASCII to Hex", from: "ascii", to: "hex" },
  { label: "ASCII to Decimal", from: "ascii", to: "decimal" },
  { label: "Base64 to String", from: "base64", to: "string" },
  { label: "Binary to ASCII", from: "binary", to: "ascii" },
  { label: "Binary to Decimal", from: "binary", to: "decimal" },
  { label: "Binary to Hex", from: "binary", to: "hex" },
  { label: "Binary to Octal", from: "binary", to: "octal" },
  { label: "Binary to String", from: "binary", to: "string" },
  { label: "Decimal to Binary", from: "decimal", to: "binary" },
  { label: "Decimal to Hex", from: "decimal", to: "hex" },
  { label: "Decimal to Octal", from: "decimal", to: "octal" },
  { label: "Decimal to Fraction", from: "decimal", to: "fraction" },
  { label: "Decimal to Percent", from: "decimal", to: "percent" },
  { label: "Decimal to Roman", from: "decimal", to: "roman" },
  { label: "Decimal to Scientific", from: "decimal", to: "scientific" },
  { label: "Degrees to DMS (Deg:Min:Sec)", from: "deg", to: "dms" },
  { label: "Degrees to Radians", from: "deg", to: "rad" },
  { label: "Degrees, Minutes, Seconds to Degrees", from: "dms", to: "deg" },
  { label: "Fraction to Decimal", from: "fraction", to: "decimal" },
  { label: "Fraction to Percent", from: "fraction", to: "percent" },
  { label: "Hex to ASCII", from: "hex", to: "ascii" },
  { label: "Hex to Binary", from: "hex", to: "binary" },
  { label: "Hex to Decimal", from: "hex", to: "decimal" },
  { label: "Hex to Octal", from: "hex", to: "octal" },
  { label: "Octal to Binary", from: "octal", to: "binary" },
  { label: "Octal to Decimal", from: "octal", to: "decimal" },
  { label: "Octal to Hex", from: "octal", to: "hex" },
  { label: "Percent to Decimal", from: "percent", to: "decimal" },
  { label: "Percent to Fraction", from: "percent", to: "fraction" },
  { label: "Percent to PPM", from: "percent", to: "ppm" },
  { label: "PPM to Percent", from: "ppm", to: "percent" },
  { label: "PPM to PPB", from: "ppm", to: "ppb" },
  { label: "PPM to PPT", from: "ppm", to: "ppt" },
  { label: "PPB to PPM", from: "ppb", to: "ppm" },
  { label: "PPT to PPM", from: "ppt", to: "ppm" },
  { label: "Percent to PPM", from: "percent", to: "ppm" },
  { label: "Radians to Degrees", from: "rad", to: "deg" },
  { label: "Roman Numerals Converter", from: "roman", to: "decimal" },
  { label: "Scientific Notation Converter", from: "scientific", to: "decimal" },
  { label: "String to Binary", from: "string", to: "binary" },
  { label: "String to Base64", from: "string", to: "base64" },
  { label: "Base64 to String", from: "base64", to: "string" },
];

export default function NumberConversions() {
  const location = useLocation();
  const showBreadcrumb = location.pathname.includes("/conversions/number");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {showBreadcrumb && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Number Conversions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}

      <h1 className="text-3xl font-bold my-6 text-center">Number Conversions</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {numberConversions.map((item, i) => (
          <Link
            key={i}
            to={`/convertor/number?from=${item.from}&to=${item.to}`}
            className="block bg-white hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-200 dark:bg-transparent border"
          >
            {item.label} Converter
          </Link>
        ))}
      </div>
    </div>
  );
}
