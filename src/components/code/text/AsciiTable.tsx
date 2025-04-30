import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const AsciiTable: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
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
          <CardTitle>ASCII Table (American Standard Code for Information Interchange)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            ASCII is a character encoding standard for electronic communication, representing text in computers, telecommunications equipment, and other devices. Each character is assigned a number from 0 to 127.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Printable ASCII Characters</h2>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Decimal</th>
                    <th className="border px-4 py-2">Hex</th>
                    <th className="border px-4 py-2">Character</th>
                    <th className="border px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dec: 32, hex: "20", char: "Space", desc: "Space" },
                    { dec: 33, hex: "21", char: "!", desc: "Exclamation mark" },
                    { dec: 34, hex: "22", char: '"', desc: "Double quote" },
                    { dec: 35, hex: "23", char: "#", desc: "Number sign" },
                    { dec: 36, hex: "24", char: "$", desc: "Dollar sign" },
                    { dec: 37, hex: "25", char: "%", desc: "Percent" },
                    { dec: 38, hex: "26", char: "&", desc: "Ampersand" },
                    { dec: 39, hex: "27", char: "'", desc: "Single quote" },
                    { dec: 40, hex: "28", char: "(", desc: "Left parenthesis" },
                    { dec: 41, hex: "29", char: ")", desc: "Right parenthesis" },
                    { dec: 42, hex: "2A", char: "*", desc: "Asterisk" },
                    { dec: 43, hex: "2B", char: "+", desc: "Plus" },
                    { dec: 44, hex: "2C", char: ",", desc: "Comma" },
                    { dec: 45, hex: "2D", char: "-", desc: "Hyphen" },
                    { dec: 46, hex: "2E", char: ".", desc: "Period" },
                    { dec: 47, hex: "2F", char: "/", desc: "Slash" },
                    { dec: 48, hex: "30", char: "0", desc: "Digit zero" },
                    { dec: 49, hex: "31", char: "1", desc: "Digit one" },
                    { dec: 65, hex: "41", char: "A", desc: "Uppercase A" },
                    { dec: 66, hex: "42", char: "B", desc: "Uppercase B" },
                    { dec: 97, hex: "61", char: "a", desc: "Lowercase a" },
                    { dec: 98, hex: "62", char: "b", desc: "Lowercase b" },
                  ].map((item) => (
                    <tr key={item.dec}>
                      <td className="border px-4 py-2 text-center">{item.dec}</td>
                      <td className="border px-4 py-2 text-center">{item.hex}</td>
                      <td className="border px-4 py-2 text-center">{item.char}</td>
                      <td className="border px-4 py-2">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Control Characters (0–31)</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>0 - NULL (null character)</li>
              <li>7 - BEL (bell)</li>
              <li>8 - BS (backspace)</li>
              <li>9 - TAB (horizontal tab)</li>
              <li>10 - LF (line feed)</li>
              <li>13 - CR (carriage return)</li>
              <li>27 - ESC (escape)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Notes</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>ASCII includes 128 characters.</li>
              <li>Extended ASCII (0–255) includes more symbols.</li>
              <li>Commonly used for text files and communication protocols.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AsciiTable;
