import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HtmlComments: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/web/html">HTML Tools</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>HTML Comments</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">HTML Comments</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            HTML comments are used to insert <strong>notes or explanations</strong> within the HTML code.
            These comments are not visible to users when viewing the page but help developers understand the code structure.
          </p>

          {/* Syntax Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax of HTML Comments</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<!-- This is a comment -->`}</code>
            </pre>
            <p>Anything between <code>&lt;!--</code> and <code>--&gt;</code> will be treated as a comment and not rendered on the page.</p>
          </div>

          {/* Usage Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Usage of HTML Comments</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing explanations about the code for future reference.</li>
              <li>Temporarily hiding portions of code during development.</li>
              <li>Adding notes on specific sections of HTML code.</li>
            </ul>
          </div>

          {/* Example: Commenting Out HTML Code */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example: Commenting Out HTML Code</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<!-- <div>This section is under development</div> -->`}</code>
            </pre>
            <p>The above <code>&lt;div&gt;</code> element will not be displayed because it is commented out.</p>
          </div>

          {/* Multi-Line Comments */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Multi-Line Comments</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<!--
  <h1>Title</h1>
  <p>This section is under construction.</p>
-->`}</code>
            </pre>
            <p>Everything between <code>&lt;!--</code> and <code>--&gt;</code> is commented out and not shown on the webpage.</p>
          </div>

          {/* HTML Comments in HTML5 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">HTML Comments in HTML5</h2>
            <p>HTML comments work the same way in HTML5. They are often used for feature detection or conditional HTML statements.</p>

            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Example: Conditional Comments for Internet Explorer</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`<!--[if lt IE 9]>
  <script src="html5shiv.js"></script>
<![endif]-->`}</code>
              </pre>
              <p>This code will only run in Internet Explorer versions less than 9.</p>
            </div>
          </div>

          {/* Best Practices */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Best Practices for Using HTML Comments</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Don’t overuse comments. If your code is clear, comments are not needed.</li>
              <li>Use comments to explain the "why", not the "what".</li>
              <li>Remove unnecessary comments before production to keep files clean.</li>
            </ul>
          </div>

          {/* Common Mistakes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Mistakes to Avoid with HTML Comments</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Missing the closing <code>--&gt;</code> tag.</li>
              <li>Commenting out too much code, making files harder to read.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>HTML comments are a simple yet powerful tool for adding context and explanations. Use them wisely to maintain clean, readable code.</p>
          </div>

          {/* Further Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Resources</h2>
            <p>For more information on HTML comments, check out:</p>
            <a
              href="https://www.rapidtables.com/web/html/html-comment.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              HTML Comments - RapidTables
            </a>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlComments;
