import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const CanonicalUrl: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
                      <Breadcrumb className="mb-4">
                            <BreadcrumbList>
                              <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                  <Link to="/web/development">Development Tools</Link>
                                </BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator />
                              <BreadcrumbItem>
                                <BreadcrumbPage>Canonical URL</BreadcrumbPage>
                              </BreadcrumbItem>
                            </BreadcrumbList>
                          </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Canonical URL</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            A Canonical URL is an HTML element used to indicate the preferred version of a webpage when there are multiple versions of the same or similar content. It helps search engines identify the original source and avoid duplicate content issues.
          </p>

          {/* Why Use a Canonical URL */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Why Use a Canonical URL?</h2>
            <p>
              Duplicate content can confuse search engines about which page to rank. By specifying a canonical URL, you tell search engines which version of the page is the "main" version, improving your SEO performance.
            </p>
          </div>

          {/* How to Implement a Canonical URL */}
          <div>
            <h2 className="text-lg font-semibold mb-2">How to Implement a Canonical URL</h2>
            <p>Add the canonical link inside the <code>&lt;head&gt;</code> section of your HTML document:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{<link rel="canonical" href="https://www.example.com/page" />}</code>
            </pre>
            <p>This tells search engines that <strong>https://www.example.com/page</strong> is the preferred version.</p>
          </div>

          {/* Example of a Canonical Link */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example of a Canonical Link</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="canonical" href="https://www.example.com/page" />
</head>
<body>
  <h1>Welcome to Our Page</h1>
  <p>This is the content of the page.</p>
</body>
</html>`}</code>
            </pre>
            <p>This example shows a full HTML page using a canonical link inside the <code>&lt;head&gt;</code> section.</p>
          </div>

          {/* Best Practices for Canonical URLs */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Best Practices for Canonical URLs</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Ensure the canonical URL points to the correct page (no typos).</li>
              <li>Always use absolute URLs, not relative URLs.</li>
              <li>Canonicalize base pages when URLs have parameters.</li>
              <li>Ensure all duplicate pages point to the same canonical URL.</li>
            </ul>
          </div>

          {/* Handling Duplicate Content */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Handling Duplicate Content</h2>
            <p>If the same content is available at multiple URLs, use a canonical tag to point them all to the main page.</p>
            <p>Example:</p>
            <ul className="list-disc pl-6 text-sm">
              <li><code>https://www.example.com/page</code></li>
              <li><code>https://www.example.com/page?source=affiliate</code></li>
            </ul>
            <p>Add this tag to the second page:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{<link rel="canonical" href="https://www.example.com/page" />}</code>
            </pre>
          </div>

          {/* Common Mistakes to Avoid */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Having multiple canonical links on the same page.</li>
              <li>Setting the canonical URL to a non-existent or broken page.</li>
              <li>Using relative URLs instead of absolute URLs.</li>
            </ul>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <p>For more information, check out:</p>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <a
                  href="https://moz.com/learn/seo/canonicalization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Moz - Canonicalization
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google Search Central - Consolidating Duplicate URLs
                </a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CanonicalUrl;