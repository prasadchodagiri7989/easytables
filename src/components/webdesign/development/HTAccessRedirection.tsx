import React from 'react';

const HTAccessRedirection = () => {
  return (
    <div>
      <h2>.htaccess Redirection</h2>

      <p>
        The <code>.htaccess</code> file is an Apache server configuration file that allows webmasters to configure specific behaviors for directories and subdirectories. One of the common uses of <code>.htaccess</code> is to set up redirects.
      </p>

      <h3>What is a 301 Redirect?</h3>

      <p>
        A <strong>301 Redirect</strong> is a permanent redirect from one URL to another. It informs the search engines and browsers that the old page has moved permanently to a new location. When used, the page rank (SEO value) is also transferred to the new URL.
      </p>

      <h3>Using .htaccess for Redirects</h3>

      <p>
        The <code>.htaccess</code> file is used per directory, and it allows redirection without needing to alter the server's main configuration file. However, using <code>.htaccess</code> can impact server performance, so it is recommended to use it only when you don't have access to the Apache configuration file (typically <code>httpd.conf</code>).
      </p>

      <h3>Single URL Redirect</h3>

      <p>To create a permanent redirect for a single page, add this to your <code>.htaccess</code> file:</p>

      <pre>
        <code>
          Redirect 301 /old-page.html http://www.mydomain.com/new-page.html
        </code>
      </pre>

      <p>This redirect tells browsers and search engines that <code>old-page.html</code> has permanently moved to <code>new-page.html</code>.</p>

      <h3>Entire Domain Redirect</h3>

      <p>To redirect an entire domain to a new domain, place this code in the root directory's <code>.htaccess</code> file:</p>

      <pre>
        <code>
          Redirect 301 / http://www.newdomain.com/
        </code>
      </pre>

      <h3>Enabling .htaccess Configuration</h3>

      <p>
        If your redirect does not work after uploading the <code>.htaccess</code> file, it may be because <code>.htaccess</code> files are not enabled in the Apache server's <code>httpd.conf</code> file.
      </p>

      <p>Add the following configuration inside your <code>httpd.conf</code> to enable it:</p>

      <pre>
        <code>
          &lt;Directory /path/to/your/directory&gt;
            AllowOverride All
          &lt;/Directory&gt;
        </code>
      </pre>

      <p><strong>Note:</strong> Enabling <code>AllowOverride All</code> may reduce server performance and is not recommended for high-traffic websites.</p>

      <h3>Redirect in httpd.conf</h3>

      <p>If you have permission to modify <code>httpd.conf</code>, it’s better to set up redirects there instead of using <code>.htaccess</code>.</p>

      <p>Check if the <code>mod_rewrite</code> module is enabled:</p>

      <pre>
        <code>
          $ apache2ctl -M
        </code>
      </pre>

      <p>If not enabled, load it by uncommenting this line:</p>

      <pre>
        <code>
          # LoadModule rewrite_module /usr/lib/apache2/modules/mod_rewrite.so
        </code>
      </pre>

      <p>After modification, restart Apache:</p>

      <pre>
        <code>
          $ sudo /etc/init.d/apache2 restart
        </code>
      </pre>

      <h3>Example: Redirect via httpd.conf</h3>

      <p>Example configuration inside <code>httpd.conf</code>:</p>

      <pre>
        <code>
          &lt;Directory /path/to/your/website&gt;
            Redirect 301 /old-page.html http://www.mydomain.com/new-page.html
          &lt;/Directory&gt;
        </code>
      </pre>

      <h3>Conclusion</h3>

      <p>
        Using the <code>.htaccess</code> file for 301 redirects is a quick and easy solution for shared servers. If you have access to <code>httpd.conf</code>, prefer server-level redirects for better performance.
      </p>

      <h3>Further Reading</h3>

      <ul>
        <li>
          <a
            href="https://httpd.apache.org/docs/current/mod/mod_rewrite.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apache mod_rewrite Documentation
          </a>
        </li>
        <li>
          <a
            href="https://www.rapidtables.com/web/redirect/htaccess-redirect.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            .htaccess Redirect - RapidTables
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HTAccessRedirection;
