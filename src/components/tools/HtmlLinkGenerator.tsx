
import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const HtmlLinkGenerator = () => {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("_self");
  const [rel, setRel] = useState("");
  const [cssClass, setCssClass] = useState("");
  const [id, setId] = useState("");
  const [linkCode, setLinkCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateLinkCode();
  }, [url, text, title, target, rel, cssClass, id]);

  const generateLinkCode = () => {
    if (!url) {
      setLinkCode("");
      return;
    }

    let linkText = text || url;
    let code = '<a href="' + url + '"';
    
    if (title) code += ' title="' + title + '"';
    if (target !== "_self") code += ' target="' + target + '"';
    if (rel) code += ' rel="' + rel + '"';
    if (cssClass) code += ' class="' + cssClass + '"';
    if (id) code += ' id="' + id + '"';
    
    code += '>' + linkText + '</a>';
    
    setLinkCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkCode);
    setCopied(true);
    toast.success("Link code copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>

              <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>HTML Link Generator</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
    <ToolLayout
      title="HTML Link Code Generator"
      description="Generate HTML link code with custom attributes and styling."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                URL <span className="text-red-500">*</span>
              </label>
              <input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                Link Text
              </label>
              <input
                id="text"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Click here"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <p className="text-xs text-gray-500">
                If empty, the URL will be used as the link text
              </p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title Attribute
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tooltip text on hover"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="target" className="block text-sm font-medium text-gray-700">
                Target
              </label>
              <select
                id="target"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              >
                <option value="_self">Same window (_self)</option>
                <option value="_blank">New window/tab (_blank)</option>
                <option value="_parent">Parent frame (_parent)</option>
                <option value="_top">Full body of the window (_top)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="rel" className="block text-sm font-medium text-gray-700">
                Rel Attribute
              </label>
              <input
                id="rel"
                type="text"
                value={rel}
                onChange={(e) => setRel(e.target.value)}
                placeholder="nofollow noopener"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <p className="text-xs text-gray-500">
                Common values: nofollow, noopener, noreferrer, etc.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                  CSS Class
                </label>
                <input
                  id="class"
                  type="text"
                  value={cssClass}
                  onChange={(e) => setCssClass(e.target.value)}
                  placeholder="btn btn-primary"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                  ID Attribute
                </label>
                <input
                  id="id"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="main-link"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">Generated Link Code</h3>
            {linkCode && (
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
            )}
          </div>
          
          <div className="relative">
            <pre className="p-4 bg-gray-50 border border-gray-200 rounded-lg overflow-x-auto text-sm min-h-[100px] whitespace-pre-wrap">
              {linkCode || "Fill in the URL field to generate link code"}
            </pre>
          </div>
          
          {linkCode && (
            <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
              <div 
                className="preview-html"
                dangerouslySetInnerHTML={{
                  __html: linkCode
                }}
              />
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the HTML Link Code Generator">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">Generating an HTML Link</h4>
            <p>
              The HTML Link Code Generator allows you to create customized anchor 
              <span className="font-mono">{'<a>'}</span> tags with various attributes.
            </p>

            <p className="mt-2"><strong>How to Use:</strong></p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Enter the <strong>URL</strong> you want the link to point to.</li>
              <li>Provide <strong>Link Text</strong> (optional). If left empty, the URL will be used as the text.</li>
              <li>Set a <strong>Title Attribute</strong> (optional) for a tooltip on hover.</li>
              <li>
                Select a <strong>Target</strong> to specify where the link should open:
                <ul className="list-disc pl-5">
                  <li><code>_self</code> (default) – Opens in the same tab</li>
                  <li><code>_blank</code> – Opens in a new tab</li>
                </ul>
              </li>
              <li>
                Choose <strong>Rel Attributes</strong> (optional) for SEO and security:
                <ul className="list-disc pl-5">
                  <li><strong>nofollow</strong> – Tells search engines not to follow the link</li>
                  <li><strong>noopener</strong> – Prevents security risks when opening in a new tab</li>
                  <li><strong>noreferrer</strong> – Prevents passing referrer information</li>
                </ul>
              </li>
              <li>Add optional <strong>CSS Class</strong> and <strong>ID Attribute</strong> for styling.</li>
              <li>Click <strong>Generate Link Code</strong> to get your custom HTML link.</li>
            </ol>
          </div>
        </div>
      </GuidanceSection>


    </>
  );
};

export default HtmlLinkGenerator;
