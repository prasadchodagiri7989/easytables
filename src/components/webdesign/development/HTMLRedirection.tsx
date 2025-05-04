import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HtmlRedirection: React.FC = () => {
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
                                              <BreadcrumbPage>HTML Redirection</BreadcrumbPage>
                                            </BreadcrumbItem>
                                          </BreadcrumbList>
                                        </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>HTML Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            HTML Redirection is a method to redirect users from one page to another using HTML tags or HTTP headers. It can be useful for redirecting visitors to a new page, handling expired URLs, or guiding them to an updated website.
          </p>

          {/* Meta Tag Redirection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Meta Tag Redirection</h2>
            <p>
              One of the simplest ways to perform a redirection in HTML is by using the <code>&lt;meta&gt;</code> tag with the <code>http-equiv="refresh"</code> attribute. This method is client-side and instructs the browser to automatically redirect after a set time interval.
            </p>
          </div>

          {/* Example of Meta Tag Redirection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example of Meta Tag Redirection</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="5; url=https://www.example.com/">
  <title>Redirecting...</title>
</head>
<body>
  <p>If you're not redirected in 5 seconds, <a href="https://www.example.com/">click here</a>.</p>
</body>
</html>`}</code>
            </pre>
            <p>
              In this example, after 5 seconds, the browser will redirect the user to <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/</a>. A clickable link is also provided as a fallback.
            </p>
          </div>

          {/* How the Meta Tag Works */}
          <div>
            <h2 className="text-lg font-semibold mb-2">How the Meta Tag Works</h2>
            <p>
              The <code>http-equiv="refresh"</code> attribute tells the browser to refresh the page or redirect after a specified period. The <code>content</code> attribute includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The time interval in seconds (e.g., 5 means 5 seconds).</li>
              <li>The URL to redirect to (e.g., <code>https://www.example.com/</code>).</li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <p>
              The <code>&lt;meta&gt;</code> tag redirection is client-side, meaning it relies on the user’s browser. This may not be the best solution for SEO, as search engines might not fully respect <code>&lt;meta&gt;</code> redirections.
            </p>
            <p>
              For faster and more reliable server-side redirects, it's recommended to use HTTP headers like a 301 Redirect in <code>.htaccess</code> or the Location header in server-side languages like PHP.
            </p>
          </div>

          {/* Other Types of Redirection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Other Types of Redirection</h2>
            <p>
              Apart from <code>&lt;meta&gt;</code> tag redirection, server-side redirection can be handled using HTTP status codes such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>301 Redirect:</strong> Permanent redirection. Recommended for SEO when a page has permanently moved to a new URL.</li>
              <li><strong>302 Redirect:</strong> Temporary redirection. Used when a page is temporarily moved.</li>
            </ul>
          </div>

          {/* Example of Server-Side 301 Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example of Server-Side 301 Redirect in .htaccess</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`# .htaccess file
Redirect 301 /old-page.html https://www.example.com/new-page.html`}</code>
            </pre>
            <p>In this case, visitors to <code>old-page.html</code> are automatically redirected to <code>new-page.html</code>.</p>
          </div>

          {/* JavaScript Redirection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">JavaScript Redirection</h2>
            <p>Another method is redirection using JavaScript:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script>
  setTimeout(function() {
    window.location.href = 'https://www.example.com/';
  }, 5000);
</script>`}</code>
            </pre>
            <p>
              Here, the page will redirect to <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/</a> after 5 seconds using <code>window.location.href</code>.
            </p>
          </div>

          {/* Common Use Cases */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Use Cases for Redirection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>When a page is moved permanently or temporarily and users/search engines need notification.</li>
              <li>Redirecting users to a mobile version of a website.</li>
              <li>Handling URL changes during website restructuring.</li>
              <li>Merging pages or websites and redirecting users from old URLs to new ones.</li>
            </ul>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  MDN Web Docs - &lt;meta&gt; Tag
                </a>
              </li>
              <li>
                <a
                  href="https://moz.com/learn/seo/redirection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Moz - Redirection
                </a>
              </li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlRedirection;