import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const AltCodes: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
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
              <Link to="/code/all">Code Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/linux/all">Linux Commands</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>ls Command</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>ALT Codes for Symbols & Characters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            ALT codes are keyboard shortcuts for typing special characters and symbols using the numeric keypad.
            Just hold down the <strong>ALT</strong> key and type the numeric code on your keyboard's numpad.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">How to Use</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hold down the <strong>ALT</strong> key</li>
              <li>Type the code using the numeric keypad (e.g., ALT + 0176 for °)</li>
              <li>Release the ALT key and the symbol will appear</li>
              <li>Works only with numpad (not top-row numbers)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Common ALT Codes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { code: "ALT + 0176", symbol: "°", name: "Degree" },
                { code: "ALT + 0153", symbol: "™", name: "Trademark" },
                { code: "ALT + 0169", symbol: "©", name: "Copyright" },
                { code: "ALT + 0174", symbol: "®", name: "Registered" },
                { code: "ALT + 3", symbol: "♥", name: "Heart" },
                { code: "ALT + 1", symbol: "☺", name: "Smiley" },
                { code: "ALT + 21", symbol: "§", name: "Section" },
                { code: "ALT + 0177", symbol: "±", name: "Plus-minus" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <code>{item.code} = {item.symbol}</code> ({item.name})
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Tips</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Make sure <strong>Num Lock</strong> is on</li>
              <li>Works only in Windows (not macOS)</li>
              <li>For laptops without a numpad, use <strong>Fn + NumPad overlay</strong></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Example Use</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>
                ALT + 0169 → © 2025 YourCompanyName{"\n"}
                ALT + 0176 → Temperature: 23° C{"\n"}
                ALT + 0153 → BrandName™
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AltCodes;
