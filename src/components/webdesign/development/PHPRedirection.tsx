import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const PHPRedirection: React.FC = () => {
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
                                            <BreadcrumbPage>PHP Redirection</BreadcrumbPage>
                                          </BreadcrumbItem>
                                        </BreadcrumbList>
                                      </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>PHP Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction */}
          <p>
            PHP Redirection allows you to redirect users to a different page using server-side scripting. PHP modifies the HTTP response headers to instruct the browser to navigate to a new URL, and it must occur before any output is sent to the browser.
          </p>

          {/* How PHP Redirection Works */}
          <div>
            <h2 className="text-lg font-semibold mb-2">How PHP Redirection Works</h2>
            <p>
              PHP uses the <code>header()</code> function to send raw HTTP headers that trigger redirection. This function must be called before any output (even whitespace) is sent to the browser.
            </p>
          </div>

          {/* Basic PHP Redirection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic PHP Redirection</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
// Redirect to a new page
header('Location: https://www.example.com/');
exit;
?>`}</code>
            </pre>
            <p>
              This example redirects the browser to <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/</a> and stops further script execution using <code>exit;</code>.
            </p>
          </div>

          {/* PHP Redirection with Delay */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection with Delay</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
// Redirect after 5 seconds
header("refresh:5;url=https://www.example.com/");
?>`}</code>
            </pre>
            <p>
              This method delays the redirection by 5 seconds, allowing you to display a message or perform other actions first.
            </p>
          </div>

          {/* PHP Redirection with Query Parameters */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection with Query Parameters</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
// Redirect with query parameters
header('Location: https://www.example.com/?ref=123&campaign=summer-sale');
exit;
?>`}</code>
            </pre>
            <p>
              Redirects the user to a URL with query parameters, e.g., <a href="https://www.example.com/?ref=123&campaign=summer-sale" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/?ref=123&campaign=summer-sale</a>.
            </p>
          </div>

          {/* PHP 301 Permanent Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP 301 Permanent Redirect</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
// Permanent 301 redirect
header('HTTP/1.1 301 Moved Permanently');
header('Location: https://www.newdomain.com/');
exit;
?>`}</code>
            </pre>
            <p>
              Sends a 301 status code for a permanent redirect, which is SEO-friendly and preserves page ranking.
            </p>
          </div>

          {/* PHP Redirect with Absolute and Relative URLs */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirect with Absolute and Relative URLs</h2>
            <p><strong>Absolute URL Example:</strong></p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
header('Location: https://www.example.com/new-page.html');
exit;
?>`}</code>
            </pre>

            <p><strong>Relative URL Example:</strong></p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
header('Location: /new-page.html');
exit;
?>`}</code>
            </pre>
          </div>

          {/* Important Considerations */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Considerations for PHP Redirection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Order of Execution:</strong> <code>header()</code> must be called before any output (HTML or whitespace).</li>
              <li><strong>Exit Statement:</strong> Always use <code>exit;</code> after redirection to terminate script execution.</li>
              <li><strong>SEO Impact:</strong> Use 301 redirects for permanent moves to preserve SEO value.</li>
            </ul>
          </div>

          {/* PHP Redirection with Condition */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection with Condition</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
$isLoggedIn = true; // Example condition

if ($isLoggedIn) {
    header('Location: https://www.example.com/dashboard');
} else {
    header('Location: https://www.example.com/login');
}
exit;
?>`}</code>
            </pre>
            <p>
              Redirects the user based on login status — either to the dashboard or the login page.
            </p>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://www.php.net/manual/en/function.header.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  PHP Manual - header()
                </a>
              </li>
              <li>
                <a
                  href="https://www.php.net/manual/en/function.exit.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  PHP Manual - exit()
                </a>
              </li>
            </ul>
          </div>
                          {/* PHP Redirection Using JavaScript Fallback */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection Using JavaScript Fallback</h2>
            <p>
              In cases where headers have already been sent and you can’t use <code>header()</code>, you can use JavaScript as a fallback method.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
echo '<script>window.location.href = "https://www.example.com";</script>';
exit;
?>`}</code>
            </pre>
            <p>
              This approach is not ideal for SEO or bots, but works in emergencies or late-stage scripts.
            </p>
          </div>

          {/* PHP Redirection with Session-Based Logic */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection with Session-Based Logic</h2>
            <p>
              Sessions allow you to track user states and perform redirects based on authentication or other session variables.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: /login.php');
    exit;
}

// User is logged in, continue to dashboard
header('Location: /dashboard.php');
exit;
?>`}</code>
            </pre>
            <p>
              This is a secure method to enforce access control through redirection.
            </p>
          </div>

          {/* Redirection to HTTPS Using PHP */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirection to HTTPS Using PHP</h2>
            <p>
              Redirecting users to HTTPS ensures secure communication and can improve SEO rankings.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
if (!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] !== 'on') {
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('Location: ' . $redirect);
    exit;
}
?>`}</code>
            </pre>
            <p>
              This ensures all traffic is routed through a secure HTTPS connection.
            </p>
          </div>

          {/* Redirect Based on User Agent (e.g. Mobile) */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirect Based on User Agent (e.g. Mobile)</h2>
            <p>
              You can detect mobile devices and redirect them to a mobile version of your site.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
$userAgent = $_SERVER['HTTP_USER_AGENT'];

if (preg_match('/Mobile|Android|iPhone|iPad/', $userAgent)) {
    header('Location: https://m.example.com');
    exit;
}
?>`}</code>
            </pre>
            <p>
              Be cautious with user-agent detection, as it's not always reliable across all devices.
            </p>
          </div>

          {/* PHP Redirection Based on Time of Day */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection Based on Time of Day</h2>
            <p>
              You can redirect users to different pages based on the current server time (e.g., support chat hours).
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
$hour = date("H");

if ($hour >= 9 && $hour <= 17) {
    header('Location: /live-support.php');
} else {
    header('Location: /leave-a-message.php');
}
exit;
?>`}</code>
            </pre>
            <p>
              This is useful for dynamic routing of users based on business hours.
            </p>
          </div>

          {/* Redirection Based on Referrer */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirection Based on Referrer</h2>
            <p>
              You can use the HTTP referer to redirect users coming from a specific source, like a campaign.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
$ref = $_SERVER['HTTP_REFERER'] ?? '';

if (strpos($ref, 'partner-site.com') !== false) {
    header('Location: /special-offer.php');
    exit;
}
?>`}</code>
            </pre>
            <p>
              Great for affiliate tracking or custom welcome pages.
            </p>
          </div>

          {/* Redirection After Form Submission */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirection After Form Submission</h2>
            <p>
              After processing a form, it's common to redirect users to a thank-you page to avoid resubmission.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form...

    header('Location: /thank-you.php');
    exit;
}
?>`}</code>
            </pre>
            <p>
              This pattern also helps prevent duplicate submissions on page reloads.
            </p>
          </div>

          {/* PHP Redirection in .htaccess vs PHP Script */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection vs .htaccess Redirection</h2>
            <p>
              While PHP can handle redirection, Apache’s <code>.htaccess</code> can also be used to redirect at the server level.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`# .htaccess 301 redirect
Redirect 301 /old-page.html https://www.example.com/new-page.html`}</code>
            </pre>
            <p>
              Use <code>.htaccess</code> for static redirects, and PHP when logic-based decisions are required.
            </p>
          </div>

          {/* Troubleshooting Redirection Issues */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Troubleshooting PHP Redirection Issues</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Headers Already Sent:</strong> Ensure no whitespace or output before <code>header()</code> calls.</li>
              <li><strong>Browser Caching:</strong> Use developer tools or incognito mode to test fresh redirects.</li>
              <li><strong>Multiple Headers:</strong> Avoid sending conflicting headers (e.g., both 200 and 301).</li>
              <li><strong>Check Web Server Logs:</strong> Inspect logs for redirection or permission-related issues.</li>
            </ul>
          </div>
                            {/* Redirection After Setting Cookies */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirection After Setting Cookies</h2>
            <p>
              If you need to set a cookie before redirecting, remember that both <code>setcookie()</code> and <code>header()</code> must be executed before any output.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
setcookie('user_pref', 'dark_mode', time() + (86400 * 30), "/");
header('Location: /dashboard.php');
exit;
?>`}</code>
            </pre>
            <p>
              This approach helps maintain preferences or session-based routing across pages.
            </p>
          </div>

          {/* Redirection Based on IP Address */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirection Based on IP Address</h2>
            <p>
              You can use IP detection to redirect certain users — for example, internal staff or restricted regions.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
$ip = $_SERVER['REMOTE_ADDR'];

if ($ip === '192.168.1.100') {
    header('Location: /internal-dashboard.php');
    exit;
}
?>`}</code>
            </pre>
            <p>
              For broader geographic targeting, use GeoIP or third-party APIs.
            </p>
          </div>

          {/* Redirection Using HTTP Response Codes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirection Using Different HTTP Response Codes</h2>
            <p>
              HTTP status codes define how the browser interprets the redirection. Common options include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>301:</strong> Permanent redirection (search engines update the link).</li>
              <li><strong>302:</strong> Temporary redirection (search engines do not update the link).</li>
              <li><strong>303:</strong> Redirect after a POST request (used with web forms).</li>
              <li><strong>307:</strong> Temporary, but maintains request method (like POST or GET).</li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mt-2">
              <code>{`<?php
header("HTTP/1.1 302 Found");
header("Location: /new-temp-location.php");
exit;
?>`}</code>
            </pre>
          </div>

          {/* PHP Redirect Based on Language Header */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirect Based on Accept-Language Header</h2>
            <p>
              You can inspect the <code>Accept-Language</code> HTTP header to redirect users to a localized version of your site.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

switch ($lang) {
    case 'fr':
        header('Location: /fr/index.php');
        break;
    case 'es':
        header('Location: /es/index.php');
        break;
    default:
        header('Location: /en/index.php');
}
exit;
?>`}</code>
            </pre>
            <p>
              This can improve user experience by automatically routing visitors to the correct language version.
            </p>
          </div>

          {/* Redirection Using Output Buffering */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PHP Redirection Using Output Buffering</h2>
            <p>
              If output has already started, you can use output buffering to prevent "headers already sent" errors.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
ob_start();
// Any output here
echo "Preparing to redirect...";

header('Location: /next-page.php');
ob_end_flush();
exit;
?>`}</code>
            </pre>
            <p>
              Use this method cautiously, as it can affect performance and debugging.
            </p>
          </div>

          {/* Redirection with Logging */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Logging Before Redirection</h2>
            <p>
              You might want to log the redirect event before performing it — for analytics, auditing, or debugging.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
file_put_contents('redirect-log.txt', "Redirected at " . date('Y-m-d H:i:s') . "\\n", FILE_APPEND);
header('Location: /new-location.php');
exit;
?>`}</code>
            </pre>
            <p>
              Ensure logs are stored securely and do not expose sensitive data.
            </p>
          </div>

          {/* Redirection for Maintenance Mode */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirecting Users During Maintenance</h2>
            <p>
              During site updates or server maintenance, redirect users to a maintenance page.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
$maintenance = true;

if ($maintenance) {
    header('Location: /maintenance.html');
    exit;
}
?>`}</code>
            </pre>
            <p>
              Combine with IP filtering to allow internal access while public users are redirected.
            </p>
          </div>

          {/* Redirection Based on Form Field Values */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirect Based on Form Field Values</h2>
            <p>
              You can inspect submitted form values and redirect users to different pages accordingly.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
if ($_POST['role'] === 'admin') {
    header('Location: /admin-dashboard.php');
} else {
    header('Location: /user-dashboard.php');
}
exit;
?>`}</code>
            </pre>
            <p>
              Useful in multi-role systems or dynamic form responses.
            </p>
          </div>

          {/* Debugging Headers */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Debugging Sent Headers in PHP</h2>
            <p>
              If you suspect issues with headers or redirection, use <code>headers_list()</code> to debug.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<?php
header('Location: /redirect-target.php');
print_r(headers_list());
exit;
?>`}</code>
            </pre>
            <p>
              This helps verify which headers have been sent before the script exits.
            </p>
          </div>

          {/* Summary of Use Cases */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Summary: When to Use PHP Redirection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Authentication Flows:</strong> Redirect users to login, dashboard, or logout paths.</li>
              <li><strong>Marketing Campaigns:</strong> Append UTM parameters and redirect to landing pages.</li>
              <li><strong>Multilingual Sites:</strong> Route users to their language-specific version.</li>
              <li><strong>Maintenance:</strong> Redirect visitors to a notice page during downtime.</li>
              <li><strong>Conditional Routing:</strong> Use business logic to handle user flows based on sessions, inputs, or time.</li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default PHPRedirection;