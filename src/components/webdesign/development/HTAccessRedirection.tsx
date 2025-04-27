import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const HtaccessRedirection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>.htaccess Redirection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            The <code>.htaccess</code> file is an Apache server configuration file that allows webmasters to configure specific behaviors for directories and subdirectories. One of the common uses of <code>.htaccess</code> is to set up redirects.
          </p>

          {/* 301 Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">What is a 301 Redirect?</h2>
            <p>
              A 301 Redirect is a permanent redirect from one URL to another. It informs search engines and browsers that the old page has moved permanently to a new location. When used, the page rank (SEO value) is also transferred to the new URL.
            </p>
          </div>

          {/* Using .htaccess for Redirects */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using .htaccess for Redirects</h2>
            <p>
              The <code>.htaccess</code> file is used per directory, allowing redirection without altering the server's main configuration file. However, using <code>.htaccess</code> can impact server performance, so it's recommended only when you don't have access to the main Apache configuration (typically <code>httpd.conf</code>).
            </p>
          </div>

          {/* Single URL Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Single URL Redirect</h2>
            <p>To create a permanent redirect for a single page, add this to your <code>.htaccess</code> file:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`Redirect 301 /old-page.html http://www.mydomain.com/new-page.html`}</code>
            </pre>
            <p>This redirect tells browsers and search engines that <code>old-page.html</code> has permanently moved to <code>new-page.html</code>.</p>
          </div>

          {/* Entire Domain Redirect */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Entire Domain Redirect</h2>
            <p>To redirect an entire domain to a new domain, place this code in the root directory's <code>.htaccess</code> file:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`Redirect 301 / http://www.newdomain.com/`}</code>
            </pre>
          </div>

          {/* Enabling .htaccess Configuration */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Enabling .htaccess Configuration</h2>
            <p>
              If your redirect does not work after uploading the <code>.htaccess</code> file, it may be because <code>.htaccess</code> files are not enabled in the Apache server's <code>httpd.conf</code> file.
            </p>
            <p>Add the following configuration inside your <code>httpd.conf</code> to enable it:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<Directory /path/to/your/directory>
  AllowOverride All
</Directory>`}</code>
            </pre>
            <p className="text-red-600 font-medium">
              Note: Enabling <code>AllowOverride All</code> may reduce server performance and is not recommended for high-traffic websites.
            </p>
          </div>

          {/* Redirect in httpd.conf */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Redirect in httpd.conf</h2>
            <p>
              If you have permission to modify <code>httpd.conf</code>, it's better to set up redirects there instead of using <code>.htaccess</code>.
            </p>

            <p>Check if the <code>mod_rewrite</code> module is enabled:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`$ apache2ctl -M`}</code>
            </pre>

            <p>If not enabled, load it by uncommenting this line:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`# LoadModule rewrite_module /usr/lib/apache2/modules/mod_rewrite.so`}</code>
            </pre>

            <p>After modification, restart Apache:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`$ sudo /etc/init.d/apache2 restart`}</code>
            </pre>

            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Example: Redirect via httpd.conf</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`<Directory /path/to/your/website>
  Redirect 301 /old-page.html http://www.mydomain.com/new-page.html
</Directory>`}</code>
              </pre>
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Using the <code>.htaccess</code> file for 301 redirects is a quick and easy solution for shared servers. If you have access to <code>httpd.conf</code>, prefer server-level redirects for better performance.
            </p>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://httpd.apache.org/docs/current/mod/mod_rewrite.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Apache mod_rewrite Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://www.rapidtables.com/web/apache/htaccess-redirect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  .htaccess Redirect - RapidTables
                </a>
              </li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default HtaccessRedirection;
