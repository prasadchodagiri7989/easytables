import React from 'react';

const PHPRedirection = () => {
  return (
    <div>
      <h2>PHP Redirection</h2>
      <p>
        <strong>PHP Redirection</strong> is a way to redirect users to a different page using PHP. PHP is a server-side scripting language, and its redirection is handled by modifying the HTTP response headers before any content is sent to the browser.
      </p>

      <h3>How PHP Redirection Works</h3>
      <p>
        In PHP, redirection is typically achieved using the <code>header()</code> function. The <code>header()</code> function sends a raw HTTP header to the browser, instructing it to navigate to a new URL.
      </p>

      <h3>Basic PHP Redirection</h3>
      <p>
        Here's a simple example of how to redirect users to a new URL using PHP:
      </p>
      <pre>
        <code>{`
<?php
// Redirect to a new page
header('Location: https://www.example.com/');
exit;
?>
        `}</code>
      </pre>
      <p>
        In this example, the <code>header('Location: https://www.example.com/');</code> line tells the browser to go to <code>https://www.example.com/</code>. The <code>exit;</code> ensures that no further code is executed after the redirection.
      </p>

      <h3>PHP Redirection with Delay</h3>
      <p>
        You can also add a delay before redirecting the user to a new page. This is done using the <code>header()</code> function along with the <code>meta refresh</code> tag for a more controlled delay:
      </p>
      <pre>
        <code>{`
<?php
// Redirect after 5 seconds
header("refresh:5;url=https://www.example.com/");
?>
        `}</code>
      </pre>
      <p>
        This method will redirect the user after a 5-second delay. It's useful when you want to show a message or perform some action before redirecting.
      </p>

      <h3>PHP Redirection with Query Parameters</h3>
      <p>
        You can also append query parameters to the URL when performing a redirection:
      </p>
      <pre>
        <code>{`
<?php
// Redirect with query parameters
header('Location: https://www.example.com/?ref=123&campaign=summer-sale');
exit;
?>
        `}</code>
      </pre>
      <p>
        This will redirect the user to <code>https://www.example.com/</code> with the query parameters <code>ref=123</code> and <code>campaign=summer-sale</code>.
      </p>

      <h3>PHP 301 Permanent Redirect</h3>
      <p>
        A 301 redirect is a permanent redirect that indicates to the browser and search engines that the page has been permanently moved. You can perform a 301 redirect in PHP as follows:
      </p>
      <pre>
        <code>{`
<?php
// Permanent 301 redirect
header('HTTP/1.1 301 Moved Permanently');
header('Location: https://www.newdomain.com/');
exit;
?>
        `}</code>
      </pre>
      <p>
        In this example, the <code>header('HTTP/1.1 301 Moved Permanently');</code> sends the HTTP status code 301, signaling that the page has permanently moved to the new location. The <code>header('Location: https://www.newdomain.com/');</code> performs the redirection.
      </p>

      <h3>PHP Redirect with Absolute and Relative URLs</h3>
      <p>
        You can use both absolute and relative URLs for redirection in PHP:
      </p>
      <ul>
        <li>
          <strong>Absolute URL:</strong> Redirecting to a full URL including the domain:
          <pre>
            <code>{`
<?php
header('Location: https://www.example.com/new-page.html');
exit;
?>
            `}</code>
          </pre>
        </li>
        <li>
          <strong>Relative URL:</strong> Redirecting to a path relative to the current domain:
          <pre>
            <code>{`
<?php
header('Location: /new-page.html');
exit;
?>
            `}</code>
          </pre>
        </li>
      </ul>

      <h3>Important Considerations for PHP Redirection</h3>
      <ul>
        <li>
          <strong>Order of Execution:</strong> The <code>header()</code> function must be called before any output is sent to the browser. This includes whitespace and HTML tags. If you send any content before the header, PHP will throw an error.
        </li>
        <li>
          <strong>Exit Statement:</strong> Always use <code>exit;</code> after the <code>header()</code> function to stop further execution of the script.
        </li>
        <li>
          <strong>SEO Impact:</strong> Use the 301 redirect for SEO-friendly permanent redirects, as it passes on page rank to the new page.
        </li>
      </ul>

      <h3>PHP Redirection with Condition</h3>
      <p>
        You can conditionally redirect based on certain parameters, such as checking if a user is logged in:
      </p>
      <pre>
        <code>{`
<?php
$isLoggedIn = true; // Example condition

if ($isLoggedIn) {
    header('Location: https://www.example.com/dashboard');
} else {
    header('Location: https://www.example.com/login');
}
exit;
?>
        `}</code>
      </pre>
      <p>
        In this example, if the user is logged in, they will be redirected to the dashboard. Otherwise, they will be redirected to the login page.
      </p>

      <h3>Further Reading</h3>
      <p>
        For more information on PHP redirection and headers, you can refer to the following resources:
      </p>
      <ul>
        <li>
          <a
            href="https://www.php.net/manual/en/function.header.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHP Manual - header()
          </a>
        </li>
        <li>
          <a
            href="https://www.php.net/manual/en/function.exit.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHP Manual - exit()
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PHPRedirection;
