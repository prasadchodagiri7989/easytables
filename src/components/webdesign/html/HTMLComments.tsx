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
                            <Link to="/">Home</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
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

        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

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
          {/* Commenting for Debugging */}
<div>
  <h2 className="text-lg font-semibold mb-2">Using HTML Comments for Debugging</h2>
  <p className="text-sm text-muted-foreground mb-2">
    During development, HTML comments can be useful for temporarily removing portions of code to help isolate issues or test certain features. This approach is often used for debugging.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!-- Temporarily hide this section for testing -->
  <div>This section causes an issue in the layout.</div>
-->`}</code>
  </pre>
  <p>By commenting out sections of code, you can test different layouts or troubleshoot specific problems on the page.</p>
</div>

{/* Commenting Non-HTML Content */}
<div>
  <h2 className="text-lg font-semibold mb-2">Commenting Non-HTML Content</h2>
  <p className="text-sm text-muted-foreground mb-2">
    HTML comments are not limited to just HTML code. You can use them to comment out other content types like JavaScript or CSS embedded in HTML files.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!--
  <style>
    body { color: red; }
  </style>
-->`}</code>
  </pre>
  <p>The above <code>&lt;style&gt;</code> block is commented out, meaning it won't be executed or affect the page's styling.</p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!--
  <script>
    alert('This script is temporarily disabled.');
  </script>
-->`}</code>
  </pre>
  <p>The same approach can be applied to <code>&lt;script&gt;</code> blocks as well.</p>
</div>

{/* Commenting Out Elements for Testing Layout */}
<div>
  <h2 className="text-lg font-semibold mb-2">Commenting Out Elements for Testing Layout</h2>
  <p className="text-sm text-muted-foreground mb-2">
    While designing layouts, it's common to temporarily hide certain elements to see how the layout behaves without them. HTML comments can be a quick and efficient way to do this.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!-- <div class="sidebar">Sidebar content</div> -->`}</code>
  </pre>
  <p>The <code>&lt;div&gt;</code> element for the sidebar is commented out in this example. This helps test how the layout behaves without the sidebar.</p>
</div>

{/* HTML Comments and Accessibility */}
<div>
  <h2 className="text-lg font-semibold mb-2">HTML Comments and Accessibility</h2>
  <p className="text-sm text-muted-foreground mb-2">
    HTML comments should not be used to hide content that is meant to be accessible to screen readers or assistive technologies. Content hidden in comments is not visible to anyone, including users relying on accessibility tools.
  </p>
  <p>
    Instead of using comments to hide content for accessibility purposes, consider using <code>aria-hidden="true"</code> or CSS techniques that hide content from visual users but still make it accessible to screen readers.
  </p>
</div>

{/* Versioning and Change Tracking */}
<div>
  <h2 className="text-lg font-semibold mb-2">Using HTML Comments for Versioning and Change Tracking</h2>
  <p className="text-sm text-muted-foreground mb-2">
    In collaborative environments or projects with many developers, it can be helpful to leave comments that indicate who made changes, when the changes were made, and why those changes were necessary. These comments can serve as a versioning tool for developers.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!--
  Version 2.0 - 2025-05-09
  Updated the header section for better accessibility.
  Changes made by: Developer Name
-->`}</code>
  </pre>
  <p>This approach provides a record of changes directly in the code, helping developers understand the history of modifications.</p>
</div>

{/* Commenting for SEO Purposes */}
<div>
  <h2 className="text-lg font-semibold mb-2">Commenting for SEO Purposes</h2>
  <p className="text-sm text-muted-foreground mb-2">
    Sometimes developers use comments to add notes about SEO optimizations and keywords, especially when working in a team. However, keep in mind that search engines do not read HTML comments, so these notes will not affect your site's SEO.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!-- SEO: Make sure to include target keywords in meta descriptions and titles -->`}</code>
  </pre>
  <p>This comment serves as a reminder to ensure SEO practices are followed, but it has no impact on search engine rankings.</p>
</div>

{/* Commenting for Cross-Browser Compatibility */}
<div>
  <h2 className="text-lg font-semibold mb-2">Commenting for Cross-Browser Compatibility</h2>
  <p className="text-sm text-muted-foreground mb-2">
    HTML comments can also be used to add notes about compatibility with specific browsers. For example, comments may indicate certain quirks that need to be addressed in older browsers or specific versions of browsers.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!-- 
  Compatibility note: This feature doesn't work in Internet Explorer 8.
  Please ensure to test in modern browsers only.
-->`}</code>
  </pre>
  <p>This is particularly helpful when managing legacy codebases or ensuring that new features work across a wide range of browsers.</p>
</div>

{/* HTML Comments and Security */}
<div>
  <h2 className="text-lg font-semibold mb-2">HTML Comments and Security</h2>
  <p className="text-sm text-muted-foreground mb-2">
    It's important to be cautious when using comments in web applications. Comments can inadvertently expose sensitive information, such as database queries or API keys, if included in the code.
  </p>
  <p>Always ensure that sensitive data is never included in comments. Use other secure methods to handle and store sensitive information, such as environment variables or secure storage solutions.</p>
</div>

{/* Organizing HTML Code with Comments */}
<div>
  <h2 className="text-lg font-semibold mb-2">Organizing HTML Code with Comments</h2>
  <p className="text-sm text-muted-foreground mb-2">
    One of the best uses of HTML comments is organizing and sectioning off your code for better readability. Adding headers or section comments in long HTML files helps developers quickly navigate different parts of the code.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<!-- Header Section -->
  <header>
    <nav>...</nav>
  </header>
-->`}</code>
  </pre>
  <p>In this case, a comment marks the beginning of the header section, making it easy to identify during code review or editing.</p>
</div>

{/* Removing Comments for Production */}
<div>
  <h2 className="text-lg font-semibold mb-2">Removing Comments for Production</h2>
  <p className="text-sm text-muted-foreground mb-2">
    While comments are great for development, they should generally be removed before deploying a website to production. Comments can make the HTML file larger and may expose unnecessary information to anyone inspecting the source code.
  </p>
  <p>Consider using build tools or scripts that automatically strip out comments before production deployment to optimize file size and maintain security.</p>
</div>

{/* Summary of HTML Comment Uses */}
<div>
  <h2 className="text-lg font-semibold mb-2">Summary of HTML Comment Uses</h2>
  <p className="text-sm text-muted-foreground mb-2">
    HTML comments are a versatile tool in web development, offering a wide range of uses such as:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Providing explanations and context for code.</li>
    <li>Temporarily hiding code during development and debugging.</li>
    <li>Marking sections of code for organizational purposes.</li>
    <li>Adding versioning information and tracking changes in the code.</li>
    <li>Including browser compatibility notes and SEO reminders.</li>
  </ul>
</div>

          

        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlComments;
