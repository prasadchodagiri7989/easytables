import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const JQueryRedirection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>jQuery Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            jQuery Redirection is a method of redirecting users to a different page using jQuery. jQuery simplifies DOM manipulation and allows for concise handling of user interactions, although redirection relies on the browser’s built-in navigation functionality.
          </p>

          {/* How jQuery Redirection Works */}
          <div>
            <h2 className="text-lg font-semibold mb-2">How jQuery Redirection Works</h2>
            <p>jQuery uses the <code>window.location</code> object or <code>location.href</code> method for redirection. While jQuery simplifies event handling, redirection itself is handled by the browser.</p>
          </div>

          {/* Basic jQuery Redirection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic jQuery Redirection</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
  $(document).ready(function() {
    setTimeout(function() {
      window.location.href = 'https://www.example.com/';
    }, 3000);
  });
</script>`}</code>
            </pre>
            <p>
              This example redirects the page to <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/</a> after a 3-second delay once the document is ready.
            </p>
          </div>

          {/* jQuery Redirection on Button Click */}
          <div>
            <h2 className="text-lg font-semibold mb-2">jQuery Redirection on Button Click</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<button id="redirectButton">Click to Redirect</button>

<script>
  $(document).ready(function() {
    $('#redirectButton').click(function() {
      window.location.href = 'https://www.example.com/';
    });
  });
</script>`}</code>
            </pre>
            <p>
              Clicking the button with ID <code>redirectButton</code> will redirect the user to <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/</a>.
            </p>
          </div>

          {/* jQuery Redirection with location.replace() */}
          <div>
            <h2 className="text-lg font-semibold mb-2">jQuery Redirection with <code>location.replace()</code></h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
  $(document).ready(function() {
    setTimeout(function() {
      window.location.replace('https://www.example.com/');
    }, 3000);
  });
</script>`}</code>
            </pre>
            <p>
              This approach redirects and removes the current page from the browser’s history, preventing users from going back.
            </p>
          </div>

          {/* jQuery Redirection with Query Parameters */}
          <div>
            <h2 className="text-lg font-semibold mb-2">jQuery Redirection with Query Parameters</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
  $(document).ready(function() {
    window.location.href = 'https://www.example.com/?ref=123&campaign=summer-sale';
  });
</script>`}</code>
            </pre>
            <p>
              The user is redirected to <a href="https://www.example.com/?ref=123&campaign=summer-sale" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/?ref=123&campaign=summer-sale</a> with query parameters.
            </p>
          </div>

          {/* jQuery Redirection with Conditions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">jQuery Redirection with Conditions</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
  $(document).ready(function() {
    var isLoggedIn = true; // Example condition
    if (isLoggedIn) {
      window.location.href = 'https://www.example.com/dashboard';
    } else {
      window.location.href = 'https://www.example.com/login';
    }
  });
</script>`}</code>
            </pre>
            <p>
              Based on the <code>isLoggedIn</code> condition, the user is redirected to either the dashboard or the login page.
            </p>
          </div>

          {/* Important Considerations */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Considerations</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>SEO Impact:</strong> jQuery redirection is similar to JavaScript redirection and may not be SEO-friendly.</li>
              <li><strong>Browser Compatibility:</strong> Works across modern browsers, but remember to include the jQuery library.</li>
              <li><strong>Delay Impact:</strong> Be mindful of using delays, as unexpected redirections can affect the user experience.</li>
            </ul>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://api.jquery.com/category/ajax/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  jQuery API Documentation - location
                </a>
              </li>
              <li>
                <a
                  href="https://jquery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  jQuery Official Website
                </a>
              </li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default JQueryRedirection;