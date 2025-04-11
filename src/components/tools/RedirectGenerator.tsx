
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "../ui/ToolLayout";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const RedirectGenerator = () => {
  const [sourceUrl, setSourceUrl] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    if (!sourceUrl || !destinationUrl) {
      toast.error("Please enter both source and destination URLs");
      return;
    }

    try {
      // Simple URL validation
      new URL(destinationUrl);
      
      const htaccessCode = `RewriteEngine On\nRewriteRule ^${sourceUrl.replace(/^\/+/, "")}$ ${destinationUrl} [R=301,L]`;
      const metaTagCode = `<meta http-equiv="refresh" content="0;url=${destinationUrl}" />`;
      const jsCode = `<script>\n  window.location.href = "${destinationUrl}";\n</script>`;
      
      setCode(`# .htaccess (Apache):\n${htaccessCode}\n\n# HTML Meta Tag:\n${metaTagCode}\n\n# JavaScript:\n${jsCode}`);
      
      toast.success("Redirect code generated successfully");
    } catch (error) {
      toast.error("Please enter a valid destination URL");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
    <ToolLayout
      title="301 Redirect Generator"
      description="Generate code for permanent 301 redirects using htaccess, meta tags, or JavaScript."
    >
      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <label 
              htmlFor="sourceUrl" 
              className="block text-sm font-medium text-gray-700"
            >
              Source URL Path
            </label>
            <input
              id="sourceUrl"
              type="text"
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              placeholder="/old-page"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <p className="text-xs text-gray-500">
              The URL path you want to redirect from (e.g., /old-page)
            </p>
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="destinationUrl" 
              className="block text-sm font-medium text-gray-700"
            >
              Destination URL
            </label>
            <input
              id="destinationUrl"
              type="text"
              value={destinationUrl}
              onChange={(e) => setDestinationUrl(e.target.value)}
              placeholder="https://example.com/new-page"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <p className="text-xs text-gray-500">
              The full URL you want to redirect to (e.g., https://example.com/new-page)
            </p>
          </div>

          <Button 
            onClick={generateCode}
            className="w-full mt-2"
          >
            Generate Redirect Code
          </Button>
        </div>

        {code && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">Generated Code</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center text-xs"
              >
                {copied ? (
                  <>
                    <Check size={14} className="mr-1.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} className="mr-1.5" />
                    Copy Code
                  </>
                )}
              </Button>
            </div>
            <pre className="p-4 bg-gray-50 border border-gray-200 rounded-lg overflow-x-auto text-xs sm:text-sm">
              {code}
            </pre>
          </div>
        )}
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the 301 Redirect Generator">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">What is a 301 Redirect?</h4>
            <p>A 301 redirect is a permanent redirect that tells search engines and users that a page has moved to a new URL.</p>
          </div>

          <div>
            <h4 className="font-medium mb-1">How to Use:</h4>
            <ol className="list-decimal pl-5">
              <li>Enter the old URL path you want to redirect from.</li>
              <li>Enter the full destination URL where users should be redirected.</li>
              <li>Click "Generate Redirect Code" to get the redirect options.</li>
              <li>Copy and implement the generated code into your server configuration, HTML, or JavaScript.</li>
            </ol>
          </div>

          <div>
            <h4 className="font-medium">Which Redirect Method to Use?</h4>
            <ul className="list-disc pl-5">
              <li><strong>.htaccess (Apache)</strong>: Best for permanent redirects on Apache servers.</li>
              <li><strong>Meta Tag</strong>: Quick client-side redirect, but not ideal for SEO.</li>
              <li><strong>JavaScript</strong>: Redirect users using JavaScript, useful for dynamic pages.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </>
  );
};

export default RedirectGenerator;
