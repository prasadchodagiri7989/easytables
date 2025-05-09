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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

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
                {/* Using HTTP Headers in PHP for Redirection */}
<div>
  <h2 className="text-lg font-semibold mb-2">Using HTTP Headers in PHP for Redirection</h2>
  <p>
    PHP allows server-side redirection using the <code>header()</code> function. This is useful when redirect logic is conditional or based on server-side variables like user sessions or authentication.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<?php
  header("Location: https://www.example.com/");
  exit;
?>`}</code>
  </pre>
  <p>
    Always call <code>exit</code> after <code>header</code> to prevent further code execution. This method sends an HTTP 302 status code by default. To specify a 301 (permanent) redirect:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<?php
  header("HTTP/1.1 301 Moved Permanently");
  header("Location: https://www.example.com/");
  exit;
?>`}</code>
  </pre>
</div>

{/* Delayed JavaScript Redirection with Countdown */}
<div>
  <h2 className="text-lg font-semibold mb-2">Delayed JavaScript Redirection with Countdown</h2>
  <p>
    You can create a user-friendly experience by showing a countdown before redirecting. This is often used after form submissions or logout actions.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<p>Redirecting in <span id="countdown">5</span> seconds...</p>
<script>
  var seconds = 5;
  var countdown = document.getElementById("countdown");
  var interval = setInterval(function() {
    seconds--;
    countdown.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(interval);
      window.location.href = "https://www.example.com/";
    }
  }, 1000);
</script>`}</code>
  </pre>
  <p>
    This method provides visual feedback and can reduce user frustration during navigation changes.
  </p>
</div>

{/* Conditional Redirection Based on Device */}
<div>
  <h2 className="text-lg font-semibold mb-2">Conditional Redirection Based on Device</h2>
  <p>
    You may want to redirect mobile users to a different site or page. JavaScript can be used to detect the device type:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "https://m.example.com/";
  }
</script>`}</code>
  </pre>
  <p>
    This script checks if the visitor is on a mobile device and redirects them to the mobile version of your site. For a more robust solution, use server-side detection via user-agent parsing.
  </p>
</div>

{/* Redirection After Form Submission */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection After Form Submission</h2>
  <p>
    After a user submits a form, it’s common to redirect them to a confirmation or thank-you page. In HTML alone, this is handled via the <code>action</code> attribute:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<form action="/thank-you.html" method="post">
  <!-- form fields -->
  <button type="submit">Submit</button>
</form>`}</code>
  </pre>
  <p>
    In server-side languages like PHP, you can perform the redirect after processing the form:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<?php
  // Process form data
  header("Location: /thank-you.html");
  exit;
?>`}</code>
  </pre>
</div>

{/* SEO Considerations with Redirection */}
<div>
  <h2 className="text-lg font-semibold mb-2">SEO Considerations with Redirection</h2>
  <p>
    Redirections can significantly affect SEO. Here are some key points to remember:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Use 301 for permanent moves:</strong> This transfers link equity and helps search engines update their indexes.</li>
    <li><strong>Avoid redirect chains:</strong> Too many hops can reduce crawl efficiency and page rank.</li>
    <li><strong>Minimize redirect loops:</strong> Infinite redirections frustrate users and search engines.</li>
    <li><strong>Ensure consistency:</strong> Use canonical URLs and keep HTTPS and non-WWW redirects streamlined.</li>
  </ul>
</div>

{/* Redirecting to HTTPS */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting to HTTPS</h2>
  <p>
    It’s crucial to enforce HTTPS for security and SEO. You can add this to your <code>.htaccess</code>:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`}</code>
  </pre>
  <p>
    This rule ensures all traffic is redirected from HTTP to HTTPS automatically.
  </p>
</div>

{/* Redirecting Non-WWW to WWW */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting Non-WWW to WWW</h2>
  <p>
    For domain consistency, you might want all requests to go to <code>www.example.com</code> instead of <code>example.com</code>:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{HTTP_HOST} ^example\\.com [NC]
RewriteRule ^(.*)$ https://www.example.com/$1 [L,R=301]`}</code>
  </pre>
  <p>
    Or vice versa, redirect <code>www</code> to non-<code>www</code> depending on your preferred domain setup.
  </p>
</div>

{/* Redirecting Specific File Types */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting Specific File Types</h2>
  <p>
    To redirect requests for a particular file type (e.g., old PDFs), use this in <code>.htaccess</code>:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteRule ^files/(.*)\\.pdf$ /new-location/$1 [L,R=301]`}</code>
  </pre>
  <p>
    This example redirects all PDF files from the <code>files</code> directory to a new folder structure.
  </p>
</div>
        {/* Redirection Using JavaScript Based on Query Parameters */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Based on Query Parameters</h2>
  <p>
    Sometimes you may want to redirect users based on URL query parameters. This is useful for campaign tracking, conditional navigation, or user behavior flow.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  const urlParams = new URLSearchParams(window.location.search);
  const redirectTo = urlParams.get('redirect');
  if (redirectTo) {
    window.location.href = redirectTo;
  }
</script>`}</code>
  </pre>
  <p>
    This example checks for a <code>?redirect=</code> parameter in the URL and navigates accordingly.
  </p>
</div>

{/* Redirection with HTTP Refresh Header in CGI */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection with HTTP Refresh Header (CGI)</h2>
  <p>
    Some CGI-based setups or legacy systems use HTTP refresh headers for redirection. Although not as common today, it’s still worth mentioning:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`Content-type: text/html
Refresh: 5; url=https://www.example.com/

<html>
  <body>
    <p>Redirecting in 5 seconds...</p>
  </body>
</html>`}</code>
  </pre>
  <p>
    This behaves similarly to the HTML <code>&lt;meta&gt;</code> tag refresh but is sent via the HTTP header.
  </p>
</div>

{/* Handling Redirection Loops */}
<div>
  <h2 className="text-lg font-semibold mb-2">Handling Redirection Loops</h2>
  <p>
    A redirection loop occurs when two or more URLs continuously redirect to each other. To prevent this:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Double-check rewrite rules and redirect logic.</li>
    <li>Use cookies or session variables to detect if a redirection has already happened.</li>
    <li>In JavaScript, you can store a local flag:
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        <code>{`if (!sessionStorage.getItem("redirected")) {
  sessionStorage.setItem("redirected", "true");
  window.location.href = "https://www.example.com/";
}`}</code>
      </pre>
    </li>
  </ul>
</div>

{/* Redirecting After Login */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting After Login</h2>
  <p>
    After a user logs in successfully, you typically want to redirect them to a dashboard or homepage. In JavaScript or frameworks like React:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`// React example using useEffect
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard');
  }, []);

  return <p>Redirecting...</p>;
}`}</code>
  </pre>
  <p>
    In traditional server-side apps, redirect after setting login session variables.
  </p>
</div>

{/* Redirection in SPAs (Single Page Applications) */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection in SPAs (Single Page Applications)</h2>
  <p>
    In React, Angular, or Vue, navigation is handled internally without full-page reloads. Use the routing library's built-in methods:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`// React Router DOM v6
import { useNavigate } from 'react-router-dom';

const RedirectComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);
  return <p>Redirecting...</p>;
};`}</code>
  </pre>
  <p>
    This allows for fast and smooth transitions in SPAs.
  </p>
</div>

{/* Redirecting Based on Geolocation */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting Based on Geolocation</h2>
  <p>
    You might want to redirect users based on their country or region. This requires a geolocation API or third-party service:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`fetch("https://ipapi.co/json")
  .then(response => response.json())
  .then(data => {
    if (data.country === "FR") {
      window.location.href = "https://fr.example.com";
    }
  });`}</code>
  </pre>
  <p>
    Always provide a fallback or manual selector to avoid user frustration.
  </p>
</div>

{/* Redirection for Expired Content */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection for Expired Content</h2>
  <p>
    When content or events expire (e.g., past webinars, limited-time offers), redirecting users to an updated page ensures they always find value.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`const today = new Date();
const expiryDate = new Date("2025-06-01");

if (today > expiryDate) {
  window.location.href = "/archived-events";
}`}</code>
  </pre>
  <p>
    This logic can be applied with JavaScript, backend logic, or content management systems.
  </p>
</div>

{/* Redirection Based on User Role */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Based on User Role</h2>
  <p>
    In applications with user roles (admin, editor, customer), it’s common to redirect to role-specific dashboards.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`// Pseudo code example
if (user.role === "admin") {
  window.location.href = "/admin/dashboard";
} else if (user.role === "editor") {
  window.location.href = "/editor/home";
} else {
  window.location.href = "/user/home";
}`}</code>
  </pre>
  <p>
    Implement this logic securely on the server side to avoid unauthorized access.
  </p>
</div>

{/* Accessibility Considerations */}
<div>
  <h2 className="text-lg font-semibold mb-2">Accessibility Considerations</h2>
  <p>
    Redirection can impact accessibility, especially for users relying on screen readers or keyboard navigation. Best practices include:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Announce redirection with visible messages like “You are being redirected...”</li>
    <li>Provide a manual redirect link in case automatic redirection fails.</li>
    <li>Use ARIA live regions to notify screen readers of changes:
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        <code>{`<div aria-live="polite">You will be redirected in 5 seconds...</div>`}</code>
      </pre>
    </li>
  </ul>
</div>

{/* Testing Redirection */}
<div>
  <h2 className="text-lg font-semibold mb-2">Testing Redirection</h2>
  <p>
    To ensure redirection works as expected:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Use browser dev tools to monitor network requests and response codes.</li>
    <li>Test across devices and browsers to verify compatibility.</li>
    <li>Use tools like <a href="https://httpstatus.io" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">httpstatus.io</a> to inspect HTTP redirect headers.</li>
    <li>Validate SEO impact using tools like Google Search Console and Lighthouse.</li>
  </ul>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlRedirection;