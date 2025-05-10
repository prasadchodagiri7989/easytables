import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const JQueryRedirection: React.FC = () => {
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
                                                <BreadcrumbPage>JQuery Redirection</BreadcrumbPage>
                                              </BreadcrumbItem>
                                            </BreadcrumbList>
                                          </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>jQuery Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

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
                {/* Redirection in a Form Submission */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection in a Form Submission</h2>
  <p>
    You can use jQuery to handle form submissions and redirect the user upon success, without reloading the page prematurely.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<form id="loginForm">
  <input type="text" name="username" required />
  <input type="password" name="password" required />
  <button type="submit">Login</button>
</form>

<script>
  $(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // prevent default form submission
      const username = $('input[name="username"]').val();
      const password = $('input[name="password"]').val();

      // Simulate a login check
      if (username === "admin" && password === "1234") {
        window.location.href = "/dashboard";
      } else {
        alert("Invalid credentials!");
      }
    });
  });
</script>`}</code>
  </pre>
  <p>
    This example prevents the default form action, validates input, and then redirects based on the condition.
  </p>
</div>

{/* Redirection After Countdown */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection After Countdown</h2>
  <p>
    A countdown can be displayed to the user before performing a redirection.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<div id="message">Redirecting in <span id="count">5</span> seconds...</div>

<script>
  $(document).ready(function() {
    let seconds = 5;
    const interval = setInterval(function() {
      seconds--;
      $('#count').text(seconds);
      if (seconds <= 0) {
        clearInterval(interval);
        window.location.href = "https://www.example.com/";
      }
    }, 1000);
  });
</script>`}</code>
  </pre>
  <p>
    This informs the user before the redirect happens and allows them to see what’s going on.
  </p>
</div>

{/* Redirection with Button Disable Feature */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection with Button Disable Feature</h2>
  <p>
    You might want to disable the button after it's clicked to prevent multiple redirects.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<button id="goBtn">Go to Site</button>

<script>
  $(document).ready(function() {
    $('#goBtn').click(function() {
      $(this).prop('disabled', true).text("Redirecting...");
      setTimeout(function() {
        window.location.href = "https://www.example.com/";
      }, 2000);
    });
  });
</script>`}</code>
  </pre>
  <p>
    The button is disabled after one click and changes text to indicate progress.
  </p>
</div>

{/* Redirect Using window.open for New Tab */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirect Using <code>window.open</code> for New Tab</h2>
  <p>
    If you want to open a page in a new tab or window instead of navigating away from the current page:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<button id="openNewTab">Open in New Tab</button>

<script>
  $(document).ready(function() {
    $('#openNewTab').click(function() {
      window.open("https://www.example.com/", "_blank");
    });
  });
</script>`}</code>
  </pre>
  <p>
    This opens the target page in a new tab, allowing users to keep their current session active.
  </p>
</div>

{/* Dynamic Redirection Based on Dropdown Selection */}
<div>
  <h2 className="text-lg font-semibold mb-2">Dynamic Redirection Based on Dropdown Selection</h2>
  <p>
    Use a dropdown menu to let users choose where they want to go, then redirect based on the selected option.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<select id="pageSelector">
  <option value="">Choose a page</option>
  <option value="https://www.google.com">Google</option>
  <option value="https://www.yahoo.com">Yahoo</option>
  <option value="https://www.bing.com">Bing</option>
</select>

<script>
  $(document).ready(function() {
    $('#pageSelector').change(function() {
      const selected = $(this).val();
      if (selected) {
        window.location.href = selected;
      }
    });
  });
</script>`}</code>
  </pre>
  <p>
    This offers a user-friendly way to navigate based on preferences or tasks.
  </p>
</div>

{/* Redirect with Fallback URL */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirect with Fallback URL</h2>
  <p>
    Sometimes, the primary target might be unavailable. Use a fallback URL if the first one doesn’t load.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  function checkAndRedirect(primary, fallback) {
    fetch(primary, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          window.location.href = primary;
        } else {
          window.location.href = fallback;
        }
      })
      .catch(() => {
        window.location.href = fallback;
      });
  }

  $(document).ready(function() {
    checkAndRedirect("https://primary.example.com", "https://fallback.example.com");
  });
</script>`}</code>
  </pre>
  <p>
    This method checks if the primary site is online, otherwise redirects to the fallback.
  </p>
</div>

{/* Redirect with Animation or Loader */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirect with Animation or Loader</h2>
  <p>
    Adding visual feedback such as a loader animation before redirecting enhances the user experience.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<div id="loader" style="display:none;">Loading, please wait...</div>

<script>
  $(document).ready(function() {
    $('#loader').fadeIn();
    setTimeout(function() {
      window.location.href = "https://www.example.com/";
    }, 3000);
  });
</script>`}</code>
  </pre>
  <p>
    The loader is shown before the user is redirected, simulating a processing effect.
  </p>
</div>
        {/* Redirection Based on User Role */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Based on User Role</h2>
  <p>
    A common use case in web applications is redirecting users based on their roles after login.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  $(document).ready(function() {
    const userRole = "admin"; // Simulated role check
    switch (userRole) {
      case "admin":
        window.location.href = "/admin/dashboard";
        break;
      case "user":
        window.location.href = "/user/home";
        break;
      default:
        window.location.href = "/login";
    }
  });
</script>`}</code>
  </pre>
  <p>
    Using a <code>switch</code> statement provides clarity when handling multiple role-based destinations.
  </p>
</div>

{/* Redirection from One Domain to Another */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection from One Domain to Another</h2>
  <p>
    jQuery redirection can be used to move users from a staging or legacy domain to a production one.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  $(document).ready(function() {
    const currentDomain = window.location.hostname;
    if (currentDomain === "staging.example.com") {
      window.location.href = "https://www.example.com" + window.location.pathname;
    }
  });
</script>`}</code>
  </pre>
  <p>
    This preserves the path while switching to the main domain, useful during migrations.
  </p>
</div>

{/* Redirection Based on Screen Size (Responsive Redirection) */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection Based on Screen Size (Responsive Redirection)</h2>
  <p>
    Sometimes, you might want to redirect users on mobile to a mobile-friendly version of your site.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  $(document).ready(function() {
    if ($(window).width() < 768) {
      window.location.href = "https://m.example.com";
    }
  });
</script>`}</code>
  </pre>
  <p>
    Detects screen width using jQuery and performs conditional redirection for mobile devices.
  </p>
</div>

{/* Preventing Redirection Loop */}
<div>
  <h2 className="text-lg font-semibold mb-2">Preventing Redirection Loop</h2>
  <p>
    Redirection loops can occur if users are redirected back and forth endlessly. To prevent this, use flags or URL parameters.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  $(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("redirected")) {
      params.set("redirected", "1");
      window.location.href = window.location.pathname + "?" + params.toString();
    }
  });
</script>`}</code>
  </pre>
  <p>
    This ensures the redirect only happens once, using a URL query parameter as a flag.
  </p>
</div>

{/* Redirection with Cookies or Local Storage */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection with Cookies or Local Storage</h2>
  <p>
    You can store redirection preferences using localStorage or cookies for a personalized user experience.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  $(document).ready(function() {
    const lastPage = localStorage.getItem("lastVisited");
    if (lastPage) {
      window.location.href = lastPage;
    } else {
      window.location.href = "/welcome";
    }
  });
</script>`}</code>
  </pre>
  <p>
    Storing the last visited page allows you to return users to their preferred content directly.
  </p>
</div>

{/* jQuery Redirection with Fade Out Effect */}
<div>
  <h2 className="text-lg font-semibold mb-2">jQuery Redirection with Fade Out Effect</h2>
  <p>
    Enhancing user experience by fading out the page before redirection.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<div id="pageContent">Welcome to our site</div>

<script>
  $(document).ready(function() {
    setTimeout(function() {
      $('#pageContent').fadeOut(1000, function() {
        window.location.href = "https://www.example.com";
      });
    }, 2000);
  });
</script>`}</code>
  </pre>
  <p>
    This gracefully hides the content before redirecting, reducing visual shock for the user.
  </p>
</div>

{/* Redirection and Analytics Tracking */}
<div>
  <h2 className="text-lg font-semibold mb-2">Redirection and Analytics Tracking</h2>
  <p>
    Capture analytics events before redirection for accurate tracking (e.g., Google Analytics or custom logs).
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
    <code>{`<script>
  $(document).ready(function() {
    // Simulate sending data
    console.log("Logging event: user redirect");
    
    setTimeout(function() {
      window.location.href = "https://www.example.com";
    }, 500); // Slight delay to ensure logging completes
  });
</script>`}</code>
  </pre>
  <p>
    Useful for tracking user journeys and conversion funnels accurately.
  </p>
</div>

{/* Common jQuery Redirection Mistakes */}
<div>
  <h2 className="text-lg font-semibold mb-2">Common jQuery Redirection Mistakes</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Forgetting to include jQuery:</strong> Ensure the jQuery library is loaded before using <code>$</code>.</li>
    <li><strong>Multiple conflicting redirections:</strong> Avoid placing redirects in multiple places that may execute simultaneously.</li>
    <li><strong>Infinite redirection loops:</strong> Always validate and flag redirection logic to avoid loops.</li>
    <li><strong>Delays that confuse users:</strong> Use clear messages or loaders when using setTimeout for redirect.</li>
  </ul>
</div>

{/* jQuery Redirection vs JavaScript Redirection */}
<div>
  <h2 className="text-lg font-semibold mb-2">jQuery Redirection vs JavaScript Redirection</h2>
  <p>
    Redirection itself is a browser feature, and jQuery only simplifies how and when it’s triggered. Here’s a comparison:
  </p>
  <table className="table-auto w-full border mt-2 text-sm">
    <thead>
      <tr>
        <th className="border px-2 py-1">Feature</th>
        <th className="border px-2 py-1">jQuery</th>
        <th className="border px-2 py-1">Vanilla JS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">Ease of DOM Events</td>
        <td className="border px-2 py-1">Simplified with <code>$().click()</code></td>
        <td className="border px-2 py-1">Manual with <code>addEventListener</code></td>
      </tr>
      <tr>
        <td className="border px-2 py-1">Library Required</td>
        <td className="border px-2 py-1">Yes</td>
        <td className="border px-2 py-1">No</td>
      </tr>
      <tr>
        <td className="border px-2 py-1">Flexibility</td>
        <td className="border px-2 py-1">High with chaining</td>
        <td className="border px-2 py-1">High but verbose</td>
      </tr>
    </tbody>
  </table>
</div>

{/* Final Thoughts and Tips */}
<div>
  <h2 className="text-lg font-semibold mb-2">Final Thoughts and Tips</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li>Use redirection responsibly to avoid annoying or disorienting users.</li>
    <li>Always provide visual feedback if a delay is involved.</li>
    <li>Consider accessibility—screen readers may not handle abrupt redirects well.</li>
    <li>Prefer using server-side redirection for authentication or secure routing.</li>
  </ul>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default JQueryRedirection;