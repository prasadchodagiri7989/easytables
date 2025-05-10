import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HtaccessRedirection: React.FC = () => {
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
                                          <Link to="/web/development">Development Tools</Link>
                                        </BreadcrumbLink>
                                      </BreadcrumbItem>
                                      <BreadcrumbSeparator />
                                      <BreadcrumbItem>
                                        <BreadcrumbPage>HTAccess Redirection</BreadcrumbPage>
                                      </BreadcrumbItem>
                                    </BreadcrumbList>
                                  </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>HTAccess Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction */}
          <p>
            The <code>.htaccess</code> file is an Apache server configuration file that allows webmasters to configure specific behaviors for directories and subdirectories. One of the common uses of <code>.htaccess</code> is to set up redirects.
          </p>

          {/* 301 Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">What is a 301 Redirect?</h2>
            <p>
              A 301 Redirect is a permanent redirect from one URL to another. It informs search engines and browsers that the old page has moved permanently to a new location. When used, the page rank (SEO value) is also transferred to the new URL.
            </p>
          </div>

          {/* Using .htaccess for Redirects */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using .htaccess for Redirects</h2>
            <p>
              The <code>.htaccess</code> file is used per directory, allowing redirection without altering the server's main configuration file. However, using <code>.htaccess</code> can impact server performance, so it's recommended only when you don't have access to the main Apache configuration (typically <code>httpd.conf</code>).
            </p>
          </div>

          {/* Single URL Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Single URL Redirect</h2>
            <p>To create a permanent redirect for a single page, add this to your <code>.htaccess</code> file:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`Redirect 301 /old-page.html http://www.mydomain.com/new-page.html`}</code>
            </pre>
            <p>This redirect tells browsers and search engines that <code>old-page.html</code> has permanently moved to <code>new-page.html</code>.</p>
          </div>

          {/* Entire Domain Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Entire Domain Redirect</h2>
            <p>To redirect an entire domain to a new domain, place this code in the root directory's <code>.htaccess</code> file:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`Redirect 301 / http://www.newdomain.com/`}</code>
            </pre>
          </div>

          {/* Enabling .htaccess Configuration */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Enabling .htaccess Configuration</h2>
            <p>
              If your redirect does not work after uploading the <code>.htaccess</code> file, it may be because <code>.htaccess</code> files are not enabled in the Apache server's <code>httpd.conf</code> file.
            </p>
            <p>Add the following configuration inside your <code>httpd.conf</code> to enable it:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<Directory /path/to/your/directory>
  AllowOverride All
</Directory>`}</code>
            </pre>
            <p className="text-red-600 font-medium">
              Note: Enabling <code>AllowOverride All</code> may reduce server performance and is not recommended for high-traffic websites.
            </p>
          </div>

          {/* Redirect in httpd.conf */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirect in httpd.conf</h2>
            <p>
              If you have permission to modify <code>httpd.conf</code>, it's better to set up redirects there instead of using <code>.htaccess</code>.
            </p>

            <p>Check if the <code>mod_rewrite</code> module is enabled:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`$ apache2ctl -M`}</code>
            </pre>

            <p>If not enabled, load it by uncommenting this line:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`# LoadModule rewrite_module /usr/lib/apache2/modules/mod_rewrite.so`}</code>
            </pre>

            <p>After modification, restart Apache:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`$ sudo /etc/init.d/apache2 restart`}</code>
            </pre>

            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Example: Redirect via httpd.conf</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`<Directory /path/to/your/website>
  Redirect 301 /old-page.html http://www.mydomain.com/new-page.html
</Directory>`}</code>
              </pre>
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Using the <code>.htaccess</code> file for 301 redirects is a quick and easy solution for shared servers. If you have access to <code>httpd.conf</code>, prefer server-level redirects for better performance.
            </p>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://httpd.apache.org/docs/current/mod/mod_rewrite.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Apache mod_rewrite Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://www.rapidtables.com/web/apache/htaccess-redirect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  .htaccess Redirect - RapidTables
                </a>
              </li>
            </ul>
          </div>
                  {/* Advanced Redirect Rules with mod_rewrite */}
<div>
  <h2 className="text-lg font-semibold mb-2">Advanced Redirect Rules with mod_rewrite</h2>
  <p>
    The <code>mod_rewrite</code> module provides powerful and flexible URL manipulation. It's especially useful when you need pattern-based redirection. Before using these rules, ensure that <code>mod_rewrite</code> is enabled in your server.
  </p>
  <p>Here’s how to redirect all traffic from <code>non-www</code> to <code>www</code> version of your site:</p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{HTTP_HOST} ^example\\.com [NC]
RewriteRule ^(.*)$ http://www.example.com/$1 [L,R=301]`}</code>
  </pre>
  <p>This ensures all traffic is directed to a single canonical domain, helping with SEO consistency.</p>
</div>

{/* Redirecting from HTTP to HTTPS */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting from HTTP to HTTPS</h2>
  <p>
    Enforcing HTTPS is critical for security and SEO. Here's how to redirect all HTTP traffic to HTTPS using <code>.htaccess</code>:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`}</code>
  </pre>
  <p>This ensures encrypted connections, builds trust with users, and avoids mixed content warnings in browsers.</p>
</div>

{/* Redirect Based on User-Agent */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirect Based on User-Agent</h2>
  <p>
    In some scenarios, you may want to redirect users based on their device or browser type. While not generally recommended for SEO, this can be useful for temporary campaigns or mobile optimizations.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} "iPhone" [NC]
RewriteRule ^$ https://m.example.com [L,R=302]`}</code>
  </pre>
  <p>This example redirects iPhone users to a mobile version of the site.</p>
</div>

{/* SEO Considerations for Redirects */}
<div>
  <h2 className="text-lg font-semibold mb-2">SEO Considerations for Redirects</h2>
  <p>
    While 301 redirects pass most SEO value, excessive redirect chains or improper usage can degrade performance and crawl efficiency. Follow these best practices:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Use a maximum of one redirect per URL to reach the destination.</li>
    <li>Always prefer 301 over 302 if the move is permanent.</li>
    <li>Update internal links to point directly to the new URLs when possible.</li>
    <li>Use canonical tags in combination with redirects for large migrations.</li>
  </ul>
</div>

{/* Redirect Loops and Troubleshooting */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirect Loops and Troubleshooting</h2>
  <p>
    A common issue with redirection is a loop, where the server keeps redirecting between two or more URLs. This can lead to browser errors and site inaccessibility. To debug:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Use browser developer tools (Network tab) to trace redirects.</li>
    <li>Temporarily disable the <code>.htaccess</code> file to check original behavior.</li>
    <li>Ensure no conflicting redirects exist at the server or CMS level.</li>
    <li>Use online tools like <a href="https://httpstatus.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">httpstatus.io</a> to trace redirect chains.</li>
  </ul>
</div>

{/* Wildcard Redirects */}
<div>
  <h2 className="text-lg font-semibold mb-2">Wildcard Redirects</h2>
  <p>
    Wildcard or pattern-based redirects let you move entire sections of a website. This is common during website restructures.
  </p>
  <p>Example: Redirect all pages under <code>/blog/</code> to <code>/articles/</code>:</p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RedirectMatch 301 ^/blog/(.*)$ /articles/$1`}</code>
  </pre>
  <p>This keeps URLs intact while shifting the content path.</p>
</div>

{/* Performance and Security Implications */}
<div>
  <h2 className="text-lg font-semibold mb-2">Performance and Security Implications</h2>
  <p>
    Using <code>.htaccess</code> gives flexibility, but has trade-offs:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Performance:</strong> Apache evaluates <code>.htaccess</code> on every request, which can impact load times. For high-performance sites, prefer server-level config.</li>
    <li><strong>Security:</strong> Malicious users can inject unsafe redirects if the file is not properly secured. Always set correct permissions (<code>644</code>) and limit write access.</li>
    <li><strong>Maintainability:</strong> Too many rules can make debugging complex. Keep redirects organized and well-commented.</li>
  </ul>
</div>

{/* Testing Redirects */}
<div>
  <h2 className="text-lg font-semibold mb-2">Testing Redirects</h2>
  <p>
    After setting up redirection rules, always test across browsers and devices. Tools like <a href="https://redirect-checker.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">redirect-checker.org</a> and Chrome DevTools are great for checking status codes and final destinations.
  </p>
</div>
        {/* Redirecting Based on Referrer */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting Based on Referrer</h2>
  <p>
    Sometimes, you may want to redirect users based on where they came from. For example, to block or redirect users arriving from a specific domain:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{HTTP_REFERER} badwebsite\\.com [NC]
RewriteRule ^(.*)$ http://www.example.com/blocked.html [L,R=302]`}</code>
  </pre>
  <p>
    This is useful for managing spam traffic or referrer abuse. You could also redirect users to a landing page customized for specific campaigns or affiliates.
  </p>
</div>

{/* Logging Redirects */}
<div>
  <h2 className="text-lg font-semibold mb-2">Logging Redirects</h2>
  <p>
    Apache does not log redirects by default in access logs with detailed info. You can modify your Apache configuration or virtual host file to log redirections, which helps in auditing and debugging:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`LogFormat "%h %l %u %t \\"%r\\" %>s %b \\"%{Referer}i\\" \\"%{User-Agent}i\\"" combined
CustomLog /var/log/apache2/access.log combined`}</code>
  </pre>
  <p>
    After making changes, restart Apache. Analyzing logs with tools like AWStats or GoAccess can provide insights into redirect behavior.
  </p>
</div>

{/* Country-Based Redirects */}
<div>
  <h2 className="text-lg font-semibold mb-2">Country-Based Redirects</h2>
  <p>
    You can redirect users based on their geographic location using Apache's <code>mod_geoip</code> module. This is useful for language-specific content or legal compliance (e.g., GDPR):
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`GeoIPEnable On
GeoIPDBFile /usr/share/GeoIP/GeoIP.dat

SetEnvIf GEOIP_COUNTRY_CODE CN BlockCountry
SetEnvIf GEOIP_COUNTRY_CODE RU BlockCountry

RewriteEngine On
RewriteCond %{ENV:BlockCountry} ^1$
RewriteRule .* http://www.example.com/blocked.html [L]`}</code>
  </pre>
  <p>
    This setup blocks or redirects traffic from China and Russia. You’ll need the GeoIP database and proper server configuration for this to work.
  </p>
</div>

{/* Redirect Based on Query Strings */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirect Based on Query Strings</h2>
  <p>
    If your URLs contain query parameters and you want to redirect only when they match specific values, use conditions like:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{QUERY_STRING} (^|&)ref=facebook(&|$)
RewriteRule ^page\\.html$ /fb-landing.html? [L,R=301]`}</code>
  </pre>
  <p>
    This rule detects when a user lands on <code>page.html</code> with <code>?ref=facebook</code> and redirects them to a dedicated page. Note the trailing <code>?</code> after the target URL—it strips the original query string.
  </p>
</div>

{/* Redirects for Maintenance Mode */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirects for Maintenance Mode</h2>
  <p>
    During maintenance, it’s best to redirect all traffic to a temporary page except for your IP (so you can access the backend). Here’s how to do that:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{REMOTE_ADDR} !^123\\.456\\.789\\.000
RewriteCond %{REQUEST_URI} !/maintenance.html$
RewriteRule ^(.*)$ /maintenance.html [R=302,L]`}</code>
  </pre>
  <p>
    Replace <code>123.456.789.000</code> with your actual IP address. This ensures users see a maintenance message while you work on the site.
  </p>
</div>

{/* Preventing Image Hotlinking */}
<div>
  <h2 className="text-lg font-semibold mb-2">Preventing Image Hotlinking</h2>
  <p>
    Hotlinking is when other sites embed your images directly, consuming your bandwidth. To block this:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`RewriteEngine On
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^https?://(www\\.)?yourdomain\\.com [NC]
RewriteRule \\.(jpg|jpeg|png|gif)$ - [F]`}</code>
  </pre>
  <p>
    This rule blocks direct image linking from any site other than your own. You can also replace the image with a placeholder or message.
  </p>
</div>

{/* Redirecting Based on Time of Day */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting Based on Time of Day (Using PHP)</h2>
  <p>
    Apache doesn’t support time-based redirects natively, but you can combine <code>.htaccess</code> and PHP to achieve it. Example:
  </p>
  <p>Create a PHP file:</p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<?php
$hour = date("G");
if ($hour >= 22 || $hour < 6) {
  header("Location: /afterhours.html");
  exit;
}
?>`}</code>
  </pre>
  <p>Then in <code>.htaccess</code>, route the target URL through this PHP script.</p>
</div>

{/* Chaining Multiple Redirects */}
<div>
  <h2 className="text-lg font-semibold mb-2">Chaining Multiple Redirects</h2>
  <p>
    Avoid chaining multiple 301 redirects unnecessarily, as each one increases server load and affects SEO performance. Instead, redirect directly from the source to the final destination:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`# Not Recommended
Redirect 301 /a.html /b.html
Redirect 301 /b.html /c.html

# Recommended
Redirect 301 /a.html /c.html`}</code>
  </pre>
  <p>
    Search engines will follow up to 5 redirects in a chain. Anything beyond that could result in the destination page not being indexed.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default HtaccessRedirection;
