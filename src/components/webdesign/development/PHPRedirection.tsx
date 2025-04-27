import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const PHPRedirection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>PHP Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

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

        </CardContent>
      </Card>
    </div>
  );
};

export default PHPRedirection;