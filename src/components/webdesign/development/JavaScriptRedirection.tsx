import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const JavaScriptRedirection: React.FC = () => {
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
                                                <BreadcrumbPage>JavaScript Redirection</BreadcrumbPage>
                                              </BreadcrumbItem>
                                            </BreadcrumbList>
                                          </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>JavaScript Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

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
                {/* Redirecting with Confirmation Dialog */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirecting with Confirmation Dialog</h2>
  <p>
    In some cases, you may want to prompt the user before redirecting. This gives users a chance to cancel or confirm the redirection.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  if (confirm("Do you want to go to the new page?")) {
    window.location.href = "https://www.example.com/";
  }
</script>`}</code>
  </pre>
  <p>
    This pattern improves user control and can be especially useful for redirects after form submissions or unsaved changes.
  </p>
</div>

{/* Redirection with Delay and Message */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection with Delay and Message</h2>
  <p>
    Sometimes it’s helpful to inform the user that a redirect will happen after a delay. This improves transparency and accessibility.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<div id="message">You will be redirected shortly...</div>
<script>
  setTimeout(function() {
    window.location.href = "https://www.example.com/";
  }, 5000);
</script>`}</code>
  </pre>
  <p>
    You can enhance this with a countdown timer to give users feedback on when the redirection will occur.
  </p>
</div>

{/* Redirection on Form Submission */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection on Form Submission</h2>
  <p>
    Redirecting users after form submission is a common use case. This can be handled within JavaScript to ensure the form data is processed first.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<form onsubmit="handleSubmit(event)">
  <input type="text" name="name" required />
  <button type="submit">Submit</button>
</form>

<script>
  function handleSubmit(e) {
    e.preventDefault();
    // Perform any additional logic here
    window.location.href = "https://www.example.com/thank-you";
  }
</script>`}</code>
  </pre>
</div>

{/* Redirection Using History API */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Using History API</h2>
  <p>
    The History API allows you to manipulate the browser’s history stack without causing a full page reload, often used in SPAs.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`history.pushState({}, "", "/new-path");
// Optionally trigger logic after route change
window.dispatchEvent(new Event("popstate"));`}</code>
  </pre>
  <p>
    This approach is ideal for applications using routing libraries like React Router or Vue Router.
  </p>
</div>

{/* Preventing Redirection Based on Conditions */}
<div>
  <h2 className="text-lg font-semibold mb-2">Preventing Redirection Based on Conditions</h2>
  <p>
    You can use conditionals to block redirection, for example, if a form is incomplete or a user doesn’t meet criteria.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  const isFormValid = false;
  if (isFormValid) {
    window.location.href = "https://www.example.com/";
  } else {
    alert("Please complete the form before continuing.");
  }
</script>`}</code>
  </pre>
</div>

{/* Redirection with Cookie Tracking */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection with Cookie Tracking</h2>
  <p>
    Cookies can be used to track user preferences or past actions to influence redirection decisions.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  const cookies = document.cookie;
  if (!cookies.includes("visited=true")) {
    document.cookie = "visited=true; path=/";
    window.location.href = "/welcome";
  }
</script>`}</code>
  </pre>
  <p>
    This ensures first-time visitors get a welcome experience while returning users are not redirected unnecessarily.
  </p>
</div>

{/* Detecting Redirect Source */}
<div>
  <h2 className="text-lg font-semibold mb-2">Detecting Redirect Source</h2>
  <p>
    If you need to determine how a user arrived on the page, you can use the <code>document.referrer</code> property.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  if (document.referrer.includes("example.com")) {
    console.log("User came from example.com");
  }
</script>`}</code>
  </pre>
</div>

{/* Redirection for Language Preference */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Based on Language Preference</h2>
  <p>
    Detect user language and redirect them to the appropriate version of your site.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith("fr")) {
    window.location.href = "https://fr.example.com";
  }
</script>`}</code>
  </pre>
  <p>
    Always provide an option for users to manually change their preferred language.
  </p>
</div>

{/* Redirection Fallback for No JavaScript */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Fallback for No JavaScript</h2>
  <p>
    Users who have JavaScript disabled should still experience proper navigation. Use a <code>&lt;noscript&gt;</code> tag as a fallback.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<noscript>
  <meta http-equiv="refresh" content="0; url=https://www.example.com/" />
</noscript>`}</code>
  </pre>
</div>

{/* SEO Considerations for Redirection */}
<div>
  <h2 className="text-lg font-semibold mb-2">SEO Considerations for Redirection</h2>
  <p>
    While JavaScript redirection is fast and flexible, search engines prefer server-side redirects (like 301 or 302 HTTP responses).
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Use JavaScript redirection only when necessary.</li>
    <li>Implement canonical tags or structured data to clarify redirection intent.</li>
    <li>Avoid cloaking: ensure bots and users see the same content and logic.</li>
    <li>Combine server-side redirects with JavaScript where appropriate.</li>
  </ul>
</div>
        {/* Redirection in Single Page Applications (SPAs) */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection in Single Page Applications (SPAs)</h2>
  <p>
    In SPAs, redirection is often handled via client-side routing libraries rather than using <code>window.location</code>. These libraries manage navigation without reloading the page.
  </p>
  <p>
    For example, using React Router:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return <button onClick={handleClick}>Go to Dashboard</button>;
}`}</code>
  </pre>
  <p>
    This approach provides a smoother experience and preserves application state between navigations.
  </p>
</div>

{/* Redirection After Login */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection After Login</h2>
  <p>
    Redirecting users to a dashboard or homepage after a successful login is a very common use case. It ensures they land in a relevant area of your application.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`function loginUser(credentials) {
  // Send login request
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        window.location.href = "/dashboard";
      }
    });
}`}</code>
  </pre>
  <p>
    Make sure to validate the login on the server before redirecting to protected pages.
  </p>
</div>

{/* Conditional Redirect Based on User Role */}
<div>
  <h2 className="text-lg font-semibold mb-2">Conditional Redirect Based on User Role</h2>
  <p>
    Many web apps tailor the experience based on user roles (admin, editor, viewer, etc.). JavaScript can be used to redirect accordingly after login or on page load.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  const userRole = "admin";

  switch (userRole) {
    case "admin":
      window.location.href = "/admin/dashboard";
      break;
    case "editor":
      window.location.href = "/editor/home";
      break;
    default:
      window.location.href = "/user/home";
  }
</script>`}</code>
  </pre>
</div>

{/* Redirection Based on Device Type */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Based on Device Type</h2>
  <p>
    You can detect the user's device type and redirect them to mobile or desktop versions of your website accordingly.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = "https://m.example.com";
  } else {
    window.location.href = "https://www.example.com";
  }
</script>`}</code>
  </pre>
  <p>
    Always provide users an option to switch back manually in case detection is incorrect.
  </p>
</div>

{/* Redirection with URL Hash Fragments */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection with URL Hash Fragments</h2>
  <p>
    Hash fragments (e.g., <code>#section2</code>) allow navigation within a single page or triggering behavior based on specific states.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  window.location.href = "https://www.example.com/page#section2";
</script>`}</code>
  </pre>
  <p>
    This can be used for deep linking or directing users to specific content areas.
  </p>
</div>

{/* Handling Redirection Errors */}
<div>
  <h2 className="text-lg font-semibold mb-2">Handling Redirection Errors</h2>
  <p>
    Redirection typically doesn’t fail, but it's still good practice to check for valid URLs or conditions before attempting a redirect.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  const targetUrl = "https://www.example.com/";
  try {
    new URL(targetUrl); // Validate URL format
    window.location.href = targetUrl;
  } catch (e) {
    console.error("Invalid URL:", e.message);
  }
</script>`}</code>
  </pre>
</div>

{/* Redirection Using Meta Refresh */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Using Meta Refresh</h2>
  <p>
    Although not JavaScript-based, it's worth noting the <code>&lt;meta&gt;</code> tag method for redirection:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<meta http-equiv="refresh" content="5; url=https://www.example.com/" />`}</code>
  </pre>
  <p>
    This redirects users after 5 seconds and can be useful in HTML-only environments or emails.
  </p>
</div>

{/* Accessibility and Redirection */}
<div>
  <h2 className="text-lg font-semibold mb-2">Accessibility and Redirection</h2>
  <p>
    When using JavaScript redirection, it’s important to consider accessibility. Sudden navigation can confuse screen reader users or those with cognitive disabilities.
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Provide textual cues or status updates when a redirect is about to happen.</li>
    <li>Allow users to cancel the redirect if possible.</li>
    <li>Update ARIA live regions when changes occur.</li>
  </ul>
</div>

{/* Best Practices for JavaScript Redirection */}
<div>
  <h2 className="text-lg font-semibold mb-2">Best Practices for JavaScript Redirection</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li>Use server-side redirects for permanent navigation (HTTP 301).</li>
    <li>Avoid redirect chains; go directly to the final destination.</li>
    <li>Ensure redirection logic is accessible and transparent to users.</li>
    <li>Test your redirection logic on various devices and browsers.</li>
    <li>Log redirection activity for analytics or debugging.</li>
  </ul>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default JavaScriptRedirection;