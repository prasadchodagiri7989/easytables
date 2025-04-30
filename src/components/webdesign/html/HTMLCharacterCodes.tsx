import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HtmlCharacterCodes: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
           <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/web/html">HTML Tools</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>HTML Character Codes</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>HTML Character Codes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            HTML character codes (or HTML entities) are used to display characters that are reserved in HTML
            or characters that might not be easily typed. These codes allow you to display special characters 
            without confusing the browser or conflicting with HTML syntax.
          </p>

          {/* Common Codes Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common HTML Character Codes</h2>
            <div className="space-y-6">

              {/* Ampersand */}
              <div>
                <h3 className="text-sm font-semibold">&amp; (Ampersand)</h3>
                <p>
                  The ampersand (<strong>&amp;</strong>) character is used in HTML code to represent "AND." Since 
                  the ampersand is a special character, use its character code to display it safely.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;amp;</code>
                </pre>
                <p>It will render as: &amp;</p>
              </div>

              {/* Check Mark */}
              <div>
                <h3 className="text-sm font-semibold">✓ (Check Mark)</h3>
                <p>
                  The check mark (<strong>✓</strong>) symbol can be inserted using its character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;#10003;</code>
                </pre>
                <p>It will render as: ✓</p>
              </div>

              {/* Copyright */}
              <div>
                <h3 className="text-sm font-semibold">© (Copyright Symbol)</h3>
                <p>
                  To display a copyright symbol (<strong>©</strong>), use the following character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;copy;</code>
                </pre>
                <p>It will render as: ©</p>
              </div>

              {/* Euro */}
              <div>
                <h3 className="text-sm font-semibold">€ (Euro Symbol)</h3>
                <p>
                  The Euro symbol (<strong>€</strong>) is represented by its character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;euro;</code>
                </pre>
                <p>It will render as: €</p>
              </div>

              {/* Heart */}
              <div>
                <h3 className="text-sm font-semibold">♥ (Heart Symbol)</h3>
                <p>
                  Use this character code to display a heart symbol (<strong>♥</strong>).
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;#9829;</code>
                </pre>
                <p>It will render as: ♥</p>
              </div>

              {/* Quotation Mark */}
              <div>
                <h3 className="text-sm font-semibold">“ (Quotation Mark)</h3>
                <p>
                  A left double quotation mark (<strong>“</strong>) can be displayed with this code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;#8220;</code>
                </pre>
                <p>It will render as: “</p>
              </div>

              {/* Space */}
              <div>
                <h3 className="text-sm font-semibold">(Space)</h3>
                <p>
                  To represent a space in HTML using a character code:
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;nbsp;</code>
                </pre>
                <p>It will render as a regular space.</p>
              </div>

              {/* Trademark */}
              <div>
                <h3 className="text-sm font-semibold">™ (Trademark Symbol)</h3>
                <p>
                  The trademark symbol (<strong>™</strong>) can be displayed using this character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>&amp;trade;</code>
                </pre>
                <p>It will render as: ™</p>
              </div>

            </div>
          </div>

          {/* Table of Codes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">List of Common HTML Character Codes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">Character</th>
                    <th className="border border-gray-300 p-2">HTML Entity Code</th>
                    <th className="border border-gray-300 p-2">Render</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">&amp;</td>
                    <td className="border border-gray-300 p-2">&amp;amp;</td>
                    <td className="border border-gray-300 p-2">&amp;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">✓</td>
                    <td className="border border-gray-300 p-2">&amp;#10003;</td>
                    <td className="border border-gray-300 p-2">✓</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">©</td>
                    <td className="border border-gray-300 p-2">&amp;copy;</td>
                    <td className="border border-gray-300 p-2">©</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">€</td>
                    <td className="border border-gray-300 p-2">&amp;euro;</td>
                    <td className="border border-gray-300 p-2">€</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">♥</td>
                    <td className="border border-gray-300 p-2">&amp;#9829;</td>
                    <td className="border border-gray-300 p-2">♥</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">“</td>
                    <td className="border border-gray-300 p-2">&amp;#8220;</td>
                    <td className="border border-gray-300 p-2">“</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">(space)</td>
                    <td className="border border-gray-300 p-2">&amp;nbsp;</td>
                    <td className="border border-gray-300 p-2">(space)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">™</td>
                    <td className="border border-gray-300 p-2">&amp;trade;</td>
                    <td className="border border-gray-300 p-2">™</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              HTML character codes are essential for displaying special characters or symbols that would otherwise 
              conflict with HTML syntax. They are widely used for characters like ampersands, copyright symbols, 
              Euro signs, hearts, and more.
            </p>
          </div>

          {/* Further Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Resources</h2>
            <p>
              For a full list and more detailed information, you can visit:{" "}
              <a href="https://www.rapidtables.com/web/html/html-codes.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                HTML Character Codes - RapidTables
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlCharacterCodes;