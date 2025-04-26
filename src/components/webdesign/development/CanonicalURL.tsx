import React from 'react';

const CanonicalURL = () => {
  return (
    <div>
      <h2>Canonical URL</h2>
      <p>
        A <strong>Canonical URL</strong> is an HTML element used to indicate the preferred version of a webpage when there are multiple versions of the same or similar content. It helps search engines identify the original source and avoid issues related to duplicate content.
      </p>

      <h3>Why Use a Canonical URL?</h3>
      <p>
        When you have duplicate content, either within your website or across different websites, search engines may not know which page to rank higher. This can negatively affect your SEO (Search Engine Optimization) efforts. By specifying a canonical URL, you tell search engines which version of the page should be considered the "main" version.
      </p>

      <h3>How to Implement a Canonical URL</h3>
      <p>
        The canonical URL is implemented by adding a <code>link</code> tag in the <code>&lt;head&gt;</code> section of the HTML document. Here’s the syntax:
      </p>
      <pre>
        <code>{`
<link rel="canonical" href="https://www.example.com/page" />
        `}</code>
      </pre>
      <p>
        In the above example, the canonical URL is <code>https://www.example.com/page</code>, which tells search engines that this is the preferred version of the page.
      </p>

      <h3>Example of a Canonical Link</h3>
      <p>
        Below is an example of how you would implement the canonical URL in a webpage:
      </p>
      <pre>
        <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="canonical" href="https://www.example.com/page" />
</head>
<body>
  <h1>Welcome to Our Page</h1>
  <p>This is the content of the page.</p>
</body>
</html>
        `}</code>
      </pre>
      <p>
        In this example, the canonical URL tells search engines that the page located at <code>https://www.example.com/page</code> should be treated as the primary version of the content.
      </p>

      <h3>Best Practices for Canonical URLs</h3>
      <ul>
        <li>Ensure the canonical URL points to the correct page version (e.g., no typos or incorrect links).</li>
        <li>Use absolute URLs, not relative URLs. This avoids confusion for search engines.</li>
        <li>If you have parameters in your URL, ensure that the canonical URL points to the base page without parameters.</li>
        <li>If you’re consolidating multiple versions of content, ensure each version has the same canonical URL.</li>
      </ul>

      <h3>Handling Duplicate Content</h3>
      <p>
        For example, if you have the same content available under different URLs like:
      </p>
      <ul>
        <li><code>https://www.example.com/page</code></li>
        <li><code>https://www.example.com/page?source=affiliate</code></li>
      </ul>
      <p>
        You should add a canonical tag in the head of the second page (with parameters) pointing to the first page (without parameters):
      </p>
      <pre>
        <code>{`
<link rel="canonical" href="https://www.example.com/page" />
        `}</code>
      </pre>
      <p>
        This tells search engines that the page without the parameters is the primary version of the content.
      </p>

      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li>Having multiple canonical links on the same page.</li>
        <li>Setting the canonical URL to a page that doesn’t exist or is broken.</li>
        <li>Incorrectly using relative URLs instead of absolute URLs.</li>
      </ul>

      <h3>Further Reading</h3>
      <p>
        For more information on canonical URLs and SEO best practices, you can refer to the following resources:
      </p>
      <ul>
        <li>
          <a
            href="https://moz.com/learn/seo/canonicalization"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moz - Canonicalization
          </a>
        </li>
        <li>
          <a
            href="https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central - Consolidating Duplicate URLs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CanonicalURL;
