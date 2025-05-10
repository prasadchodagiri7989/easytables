import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const CanonicalUrl: React.FC = () => {
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
                                <BreadcrumbPage>Canonical URL</BreadcrumbPage>
                              </BreadcrumbItem>
                            </BreadcrumbList>
                          </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Canonical URL</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            A Canonical URL is an HTML element used to indicate the preferred version of a webpage when there are multiple versions of the same or similar content. It helps search engines identify the original source and avoid duplicate content issues.
          </p>

          {/* Why Use a Canonical URL */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Why Use a Canonical URL?</h2>
            <p>
              Duplicate content can confuse search engines about which page to rank. By specifying a canonical URL, you tell search engines which version of the page is the "main" version, improving your SEO performance.
            </p>
          </div>

          {/* How to Implement a Canonical URL */}
          <div>
            <h2 className="text-lg font-semibold mb-2">How to Implement a Canonical URL</h2>
            <p>Add the canonical link inside the <code>&lt;head&gt;</code> section of your HTML document:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{<link rel="canonical" href="https://www.example.com/page" />}</code>
            </pre>
            <p>This tells search engines that <strong>https://www.example.com/page</strong> is the preferred version.</p>
          </div>

          {/* Example of a Canonical Link */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example of a Canonical Link</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<!DOCTYPE html>
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
</html>`}</code>
            </pre>
            <p>This example shows a full HTML page using a canonical link inside the <code>&lt;head&gt;</code> section.</p>
          </div>

          {/* Best Practices for Canonical URLs */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Best Practices for Canonical URLs</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Ensure the canonical URL points to the correct page (no typos).</li>
              <li>Always use absolute URLs, not relative URLs.</li>
              <li>Canonicalize base pages when URLs have parameters.</li>
              <li>Ensure all duplicate pages point to the same canonical URL.</li>
            </ul>
          </div>

          {/* Handling Duplicate Content */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Handling Duplicate Content</h2>
            <p>If the same content is available at multiple URLs, use a canonical tag to point them all to the main page.</p>
            <p>Example:</p>
            <ul className="list-disc pl-6 text-sm">
              <li><code>https://www.example.com/page</code></li>
              <li><code>https://www.example.com/page?source=affiliate</code></li>
            </ul>
            <p>Add this tag to the second page:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{<link rel="canonical" href="https://www.example.com/page" />}</code>
            </pre>
          </div>

          {/* Common Mistakes to Avoid */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Having multiple canonical links on the same page.</li>
              <li>Setting the canonical URL to a non-existent or broken page.</li>
              <li>Using relative URLs instead of absolute URLs.</li>
            </ul>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <p>For more information, check out:</p>
            <ul className="list-disc pl-6 text-sm">
              <li>
                <a
                  href="https://moz.com/learn/seo/canonicalization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Moz - Canonicalization
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google Search Central - Consolidating Duplicate URLs
                </a>
              </li>
            </ul>
          </div>
          {/* Advanced SEO Considerations for Canonical URLs */}
<div>
  <h2 className="text-lg font-semibold mb-2">Advanced SEO Considerations for Canonical URLs</h2>
  <p>
    Beyond basic implementation, canonical URLs play a key role in large-scale SEO strategies, especially for websites with complex architectures, e-commerce platforms, and multilingual content. Proper canonicalization ensures content consolidation, page rank flow, and accurate indexing.
  </p>
  <p>
    For e-commerce sites with filters or tracking parameters in the URL (e.g., color, size, or UTM tags), canonical tags help consolidate authority to a single URL. This prevents dilution of ranking signals and helps search engines focus on the primary product page.
  </p>
</div>

{/* Canonical URLs and Pagination */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical URLs and Pagination</h2>
  <p>
    When paginating content, such as in blog archives or product listings, it's important not to canonicalize every page to the first page. Instead, each paginated page should have a self-referential canonical URL to ensure search engines index all valuable content.
  </p>
  <p>
    Use <code>rel="prev"</code> and <code>rel="next"</code> attributes in the <code>&lt;head&gt;</code> to help search engines understand the relationship between paginated pages.
  </p>
</div>

{/* Interaction with hreflang */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical URLs and hreflang</h2>
  <p>
    For international websites, using the <code>hreflang</code> attribute alongside canonical URLs is essential. Each language or regional version of a page should have a self-referencing canonical tag and include <code>hreflang</code> tags pointing to alternate language versions.
  </p>
  <p>
    Avoid pointing all international versions to a single canonical URL unless the content is identical. Misuse can confuse search engines and disrupt geo-targeting efforts.
  </p>
</div>

{/* Canonical vs. 301 Redirect */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical Tag vs. 301 Redirect</h2>
  <p>
    While both 301 redirects and canonical tags help manage duplicate content, they serve different purposes. A 301 redirect physically redirects users and search engines from one URL to another, while a canonical tag simply suggests the preferred version without changing the user's navigation.
  </p>
  <p>
    Use 301 redirects when permanently consolidating URLs. Use canonical tags when you need to serve duplicate content for user experience or technical reasons but still want search engines to credit a single version.
  </p>
</div>

{/* Dynamic Canonical Tags */}
<div>
  <h2 className="text-lg font-semibold mb-2">Dynamic Canonical Tags</h2>
  <p>
    Dynamic websites often generate content based on user actions or query parameters. In such cases, dynamically generating canonical tags through server-side logic or JavaScript ensures each page declares the correct canonical URL.
  </p>
  <p>
    For example, a product filtering page should strip unnecessary query strings when setting the canonical tag, preserving the main product listing URL.
  </p>
</div>

{/* Tools to Test Canonical Tags */}
<div>
  <h2 className="text-lg font-semibold mb-2">Tools to Test Canonical Tags</h2>
  <p>
    Testing canonical tags is crucial to avoid misconfigurations. Several tools help you verify implementation:
  </p>
  <ul className="list-disc pl-6 text-sm">
    <li>
      <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        Google Mobile-Friendly Test
      </a> - Includes canonical tag output in test results.
    </li>
    <li>
      <a href="https://technicalseo.com/tools/robots-txt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        TechnicalSEO.com Tools
      </a> - Offers canonical tag extraction and auditing.
    </li>
    <li>
      Browser developer tools (Inspect → Elements → &lt;head&gt;) to check live canonical tags.
    </li>
    <li>
      SEO crawlers like Screaming Frog, Sitebulb, and Ahrefs Site Audit.
    </li>
  </ul>
</div>

{/* Canonical URLs in JavaScript Frameworks */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical URLs in JavaScript Frameworks</h2>
  <p>
    SPAs (Single Page Applications) and frameworks like React, Next.js, Angular, and Vue.js require special handling of canonical tags since content is often rendered client-side.
  </p>
  <p>
    In server-side rendered (SSR) environments like Next.js, use the <code>&lt;Head&gt;</code> component to inject canonical tags. For client-side rendered apps, ensure search engines can access canonical tags via pre-rendering or dynamic rendering strategies.
  </p>
</div>

{/* Canonicalization in Sitemaps */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonicalization and XML Sitemaps</h2>
  <p>
    Sitemaps should reflect canonical URLs only. Including duplicate or non-canonical URLs in a sitemap can dilute crawl efficiency and confuse search engines about preferred content.
  </p>
  <p>
    Audit your sitemaps regularly to ensure all entries match the canonical versions declared on-page.
  </p>
</div>

{/* Monitoring and Troubleshooting Canonical Tags */}
<div>
  <h2 className="text-lg font-semibold mb-2">Monitoring and Troubleshooting Canonical Tags</h2>
  <p>
    Ongoing monitoring of canonical tag behavior is essential. Google Search Console provides reports on indexed pages and coverage issues. Look for warnings like "Duplicate without user-selected canonical" or "Alternate page with proper canonical tag."
  </p>
  <p>
    If issues arise, check for:
  </p>
  <ul className="list-disc pl-6 text-sm">
    <li>Conflicting canonical tags and meta directives (e.g., noindex).</li>
    <li>Improper URL structures or dynamically injected tags that fail to render correctly.</li>
    <li>Canonical tags blocked by robots.txt or missing due to rendering issues.</li>
  </ul>
</div>

{/* Recap: When to Use Canonical Tags */}
<div>
  <h2 className="text-lg font-semibold mb-2">Recap: When to Use Canonical Tags</h2>
  <ul className="list-disc pl-6 space-y-1 text-sm">
    <li>When content is accessible via multiple URLs.</li>
    <li>When using URL parameters that don’t affect content.</li>
    <li>When syndicating content to other websites (they should point back to your canonical).</li>
    <li>On printable versions of web pages.</li>
    <li>On internationalized sites with identical or near-identical content.</li>
  </ul>
  <p>
    Canonicalization is a foundational SEO best practice that, when implemented properly, consolidates authority, improves ranking potential, and simplifies site structure for search engines.
  </p>
</div>
{/* Impact of Canonical URLs on Crawl Budget */}
<div>
  <h2 className="text-lg font-semibold mb-2">Impact of Canonical URLs on Crawl Budget</h2>
  <p>
    Crawl budget refers to the number of pages a search engine bot will crawl on your site within a given time. Proper use of canonical URLs ensures bots don’t waste resources crawling and indexing duplicate or near-duplicate pages.
  </p>
  <p>
    When search engines repeatedly crawl multiple URLs that point to the same content, it can reduce the efficiency of crawling important pages. Canonical tags help signal which URLs should be prioritized, optimizing the crawl path and resource usage.
  </p>
</div>

{/* Canonical Tags in Syndicated Content */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical Tags and Syndicated Content</h2>
  <p>
    When your content is republished on third-party platforms, canonical tags help retain SEO credit for your original work. Ask the syndicating site to include a canonical tag pointing back to the original version on your domain.
  </p>
  <p>
    This prevents duplicate content issues and ensures search engines consolidate link equity and rankings to your source page, not the republished version.
  </p>
</div>

{/* Canonical URLs and AMP Pages */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical URLs and AMP Pages</h2>
  <p>
    AMP (Accelerated Mobile Pages) versions of content should include a canonical link pointing to the standard (non-AMP) version of the page. This tells search engines that the original version resides on the canonical URL, while AMP is simply a performance-optimized alternative.
  </p>
  <p>
    Non-AMP versions should not include a canonical tag pointing to the AMP version. Instead, use a <code>&lt;link rel="amphtml"&gt;</code> on the standard page to connect the two.
  </p>
</div>

{/* Canonical URLs and Faceted Navigation */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical URLs and Faceted Navigation</h2>
  <p>
    Faceted navigation—common in e-commerce websites—lets users filter products based on attributes like size, brand, or price. These filters often create multiple URLs displaying similar content, which can quickly generate thousands of pages.
  </p>
  <p>
    Use canonical tags to point filtered or faceted pages to the main category page, unless each filtered result offers unique, valuable content worth indexing. Additionally, consider combining canonical tags with parameter handling in Google Search Console and proper <code>robots.txt</code> rules.
  </p>
</div>

{/* Misconceptions About Canonical Tags */}
<div>
  <h2 className="text-lg font-semibold mb-2">Common Misconceptions About Canonical Tags</h2>
  <ul className="list-disc pl-6 text-sm space-y-1">
    <li><strong>Myth:</strong> Canonical tags are directives. <br/> <em>Truth:</em> Canonical tags are hints, not strict directives. Search engines may ignore them if other signals suggest a different canonical.</li>
    <li><strong>Myth:</strong> Only duplicate pages need canonical tags. <br/> <em>Truth:</em> Even unique pages should have self-referencing canonical tags to prevent ambiguity.</li>
    <li><strong>Myth:</strong> Canonical tags are a replacement for redirects. <br/> <em>Truth:</em> Use 301 redirects for content consolidation. Canonicals should be used when both pages remain accessible.</li>
  </ul>
</div>

{/* Canonical URLs and Indexing Issues */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical URLs and Indexing Issues</h2>
  <p>
    Incorrect canonical tags can cause indexing problems, where the intended page is ignored by search engines. For instance, if multiple pages point to a canonical that is noindexed, blocked by robots.txt, or broken, none of the pages may be indexed.
  </p>
  <p>
    Regularly audit your canonical tags using tools like Screaming Frog or Google Search Console’s Index Coverage report to detect such issues.
  </p>
</div>

{/* Performance Tips for Canonical Tags */}
<div>
  <h2 className="text-lg font-semibold mb-2">Performance Tips for Canonical Tags</h2>
  <ul className="list-disc pl-6 text-sm space-y-1">
    <li>Use consistent URL formatting (trailing slashes, lowercase, etc.).</li>
    <li>Ensure canonical URLs load quickly and return 200 OK status.</li>
    <li>Avoid redirect chains in canonical targets.</li>
    <li>Include canonical tags as early as possible in the HTML <code>&lt;head&gt;</code>.</li>
    <li>Don’t rely on JavaScript to inject canonical tags if possible.</li>
  </ul>
</div>

{/* Canonical URLs in Headless CMS */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical URLs in Headless CMS Architectures</h2>
  <p>
    Headless CMS platforms like Strapi, Contentful, or Sanity allow content to be served via APIs. When using frameworks like Next.js, Nuxt, or Gatsby to render this content, it’s important to dynamically inject canonical URLs into the <code>&lt;head&gt;</code> of each page.
  </p>
  <p>
    Use server-side logic or static site generation to insert canonical URLs based on the structured data coming from the CMS. This ensures content consistency and SEO optimization at scale.
  </p>
</div>

{/* Audit Checklist for Canonical URLs */}
<div>
  <h2 className="text-lg font-semibold mb-2">Audit Checklist for Canonical URLs</h2>
  <ul className="list-disc pl-6 text-sm space-y-1">
    <li>Every indexable page includes a self-referencing canonical tag.</li>
    <li>No canonical tags point to redirected or broken URLs.</li>
    <li>Canonical tags are not conflicting with <code>noindex</code> directives.</li>
    <li>Duplicate pages point to the correct canonical target.</li>
    <li>Canonical URLs use HTTPS if your site supports it.</li>
  </ul>
  <p>
    Completing regular canonical audits ensures that your SEO efforts remain effective and free of technical debt.
  </p>
</div>

{/* Canonical Tags and Social Sharing */}
<div>
  <h2 className="text-lg font-semibold mb-2">Canonical Tags and Social Sharing</h2>
  <p>
    When users share your content on social platforms, the shared link often reflects the canonical URL. This helps consolidate share counts and visibility metrics across versions of a page. It also ensures consistency in Open Graph and Twitter Card metadata.
  </p>
  <p>
    If different URLs for the same content are shared across platforms, canonical tags help bring those signals together, reinforcing the authority of the original URL.
  </p>
</div>

{/* Final Thoughts */}
<div>
  <h2 className="text-lg font-semibold mb-2">Final Thoughts on Canonical URLs</h2>
  <p>
    Canonical URLs may appear simple in concept, but their influence across indexing, crawling, duplicate handling, link equity, and SEO health is profound. As websites scale, complexity increases, making disciplined use of canonical tags essential.
  </p>
  <p>
    Regular education, audits, and cross-team coordination between developers, SEOs, and content strategists are key to leveraging canonical tags for maximum effectiveness.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default CanonicalUrl;