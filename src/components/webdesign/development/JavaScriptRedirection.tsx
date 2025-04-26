import React from 'react';

const JavaScriptRedirection = () => {
  return (
    <div>
      <h2>JavaScript Redirection</h2>
      <p>
        <strong>JavaScript Redirection</strong> allows you to change the URL of the current page using JavaScript. This method is often used when you want to redirect users based on specific conditions or actions, such as after a button click or a certain event.
      </p>

      <h3>How JavaScript Redirection Works</h3>
      <p>
        In JavaScript, you can redirect users to another page by modifying the <code>window.location</code> object. There are several ways to achieve this:
      </p>
      <ul>
        <li><code>window.location.href</code>: Redirects to a new URL and loads the page immediately.</li>
        <li><code>window.location.replace()</code>: Similar to <code>window.location.href</code>, but does not keep the current page in the history stack.</li>
        <li><code>window.location.assign()</code>: Similar to <code>window.location.href</code>, but explicitly loads the new page.</li>
      </ul>

      <h3>Basic JavaScript Redirection</h3>
      <p>
        Here's a simple example of how to redirect the user to another webpage using <code>window.location.href</code> after 3 seconds:
      </p>
      <pre>
        <code>{`
<script>
  setTimeout(function() {
    window.location.href = 'https://www.example.com/';
  }, 3000); // Redirects after 3 seconds
</script>
        `}</code>
      </pre>
      <p>
        In the above example, the page will redirect to <code>https://www.example.com/</code> after 3 seconds.
      </p>

      <h3>Redirection on Button Click</h3>
      <p>
        You can also trigger redirection when a user clicks a button. Here's an example:
      </p>
      <pre>
        <code>{`
<button onclick="redirectToPage()">Click to Redirect</button>

<script>
  function redirectToPage() {
    window.location.href = 'https://www.example.com/';
  }
</script>
        `}</code>
      </pre>
      <p>
        In this case, when the user clicks the button, they will be redirected to <code>https://www.example.com/</code>.
      </p>

      <h3>Using <code>window.location.replace()</code></h3>
      <p>
        If you don’t want the user to be able to navigate back to the current page using the browser’s back button, you can use <code>window.location.replace()</code>. It replaces the current page with the new one in the browser’s history.
      </p>
      <pre>
        <code>{`
<script>
  setTimeout(function() {
    window.location.replace('https://www.example.com/');
  }, 3000); // Redirects after 3 seconds
</script>
        `}</code>
      </pre>
      <p>
        In this example, after 3 seconds, the current page will be replaced with <code>https://www.example.com/</code>, and the user won't be able to go back to the original page.
      </p>

      <h3>Using <code>window.location.assign()</code></h3>
      <p>
        Another way to perform the redirection is using <code>window.location.assign()</code>. It behaves similarly to <code>window.location.href</code>, but is more explicit in its intent.
      </p>
      <pre>
        <code>{`
<script>
  window.location.assign('https://www.example.com/');
</script>
        `}</code>
      </pre>
      <p>
        This will also redirect the user to <code>https://www.example.com/</code>.
      </p>

      <h3>JavaScript Redirection with Query Parameters</h3>
      <p>
        You can also append query parameters to the URL during redirection. Here's an example:
      </p>
      <pre>
        <code>{`
<script>
  window.location.href = 'https://www.example.com/?ref=123&campaign=summer-sale';
</script>
        `}</code>
      </pre>
      <p>
        In this example, the user is redirected to <code>https://www.example.com/</code> with the query parameters <code>ref=123</code> and <code>campaign=summer-sale</code> appended to the URL.
      </p>

      <h3>JavaScript Redirection with Conditions</h3>
      <p>
        You can also use JavaScript redirection based on specific conditions. For example, you might want to redirect a user based on the time of day:
      </p>
      <pre>
        <code>{`
<script>
  var currentTime = new Date().getHours();
  if (currentTime >= 9 && currentTime <= 17) {
    window.location.href = 'https://www.work-hours-page.com/';
  } else {
    window.location.href = 'https://www.after-hours-page.com/';
  }
</script>
        `}</code>
      </pre>
      <p>
        In this example, the user is redirected to a different URL based on whether it’s within business hours (9 AM - 5 PM).
      </p>

      <h3>Important Considerations</h3>
      <ul>
        <li><strong>SEO Impact:</strong> JavaScript redirection is not as SEO-friendly as server-side redirection (like 301 or 302 redirects). Search engines may not fully follow JavaScript-based redirects.</li>
        <li><strong>User Experience:</strong> Ensure that redirections are not intrusive or unexpected for users. Consider providing feedback or messages about the redirection.</li>
        <li><strong>Browser Compatibility:</strong> JavaScript redirection works in most modern browsers, but be mindful of older browsers or users with JavaScript disabled.</li>
      </ul>

      <h3>Further Reading</h3>
      <p>
        For more detailed information on JavaScript redirection, you can refer to the following resources:
      </p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/location"
            target="_blank"
            rel="noopener noreferrer"
          >
            MDN Web Docs - Window.location
          </a>
        </li>
        <li>
          <a
            href="https://www.javascript.info/navigation"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript.info - Navigation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default JavaScriptRedirection;
