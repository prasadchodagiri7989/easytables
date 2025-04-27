import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const JavaScriptRedirection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>JavaScript Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            JavaScript Redirection allows you to change the URL of the current page using JavaScript. It’s often used when you want to redirect users based on specific conditions or actions, such as after a button click or an event.
          </p>

          {/* How JavaScript Redirection Works */}
          <div>
            <h2 className="text-lg font-semibold mb-2">How JavaScript Redirection Works</h2>
            <p>In JavaScript, you can redirect users to another page by modifying the <code>window.location</code> object. Common methods include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><code>window.location.href</code>: Redirects to a new URL immediately.</li>
              <li><code>window.location.replace()</code>: Redirects without keeping the current page in the history stack.</li>
              <li><code>window.location.assign()</code>: Similar to <code>href</code>, explicitly loads the new page.</li>
            </ul>
          </div>

          {/* Basic JavaScript Redirection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic JavaScript Redirection</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script>
  setTimeout(function() {
    window.location.href = 'https://www.example.com/';
  }, 3000); // Redirects after 3 seconds
</script>`}</code>
            </pre>
            <p>
              In this example, the page redirects to <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/</a> after 3 seconds.
            </p>
          </div>

          {/* Redirection on Button Click */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirection on Button Click</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<button onclick="redirectToPage()">Click to Redirect</button>

<script>
  function redirectToPage() {
    window.location.href = 'https://www.example.com/';
  }
</script>`}</code>
            </pre>
            <p>
              Here, clicking the button redirects the user to <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/</a>.
            </p>
          </div>

          {/* Using window.location.replace() */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using <code>window.location.replace()</code></h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script>
  setTimeout(function() {
    window.location.replace('https://www.example.com/');
  }, 3000); // Redirects after 3 seconds
</script>`}</code>
            </pre>
            <p>
              <code>window.location.replace()</code> redirects the user but removes the current page from the browser's history, so the user cannot navigate back to it.
            </p>
          </div>

          {/* Using window.location.assign() */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using <code>window.location.assign()</code></h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script>
  window.location.assign('https://www.example.com/');
</script>`}</code>
            </pre>
            <p>
              This method also redirects to a new page and behaves similarly to setting <code>window.location.href</code>.
            </p>
          </div>

          {/* JavaScript Redirection with Query Parameters */}
          <div>
            <h2 className="text-lg font-semibold mb-2">JavaScript Redirection with Query Parameters</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script>
  window.location.href = 'https://www.example.com/?ref=123&campaign=summer-sale';
</script>`}</code>
            </pre>
            <p>
              This redirects the user to <a href="https://www.example.com/?ref=123&campaign=summer-sale" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.example.com/?ref=123&campaign=summer-sale</a> with query parameters appended.
            </p>
          </div>

          {/* JavaScript Redirection with Conditions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">JavaScript Redirection with Conditions</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<script>
  var currentTime = new Date().getHours();
  if (currentTime >= 9 && currentTime <= 17) {
    window.location.href = 'https://www.work-hours-page.com/';
  } else {
    window.location.href = 'https://www.after-hours-page.com/';
  }
</script>`}</code>
            </pre>
            <p>
              In this example, users are redirected based on the current time (e.g., different pages during work hours vs after hours).
            </p>
          </div>

          {/* Important Considerations */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Considerations</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>SEO Impact:</strong> JavaScript redirection is less SEO-friendly compared to server-side redirects.</li>
              <li><strong>User Experience:</strong> Avoid unexpected redirections; inform users if possible.</li>
              <li><strong>Browser Compatibility:</strong> Works in modern browsers; be mindful of users with JavaScript disabled.</li>
            </ul>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  MDN Web Docs - Window.location
                </a>
              </li>
              <li>
                <a
                  href="https://javascript.info/navigation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  JavaScript.info - Navigation
                </a>
              </li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default JavaScriptRedirection;