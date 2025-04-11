
import React, { useState, useRef } from "react";
import { Upload, Copy, Check, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const ImageToBase64 = () => {
  const [base64Output, setBase64Output] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [includeDataUrl, setIncludeDataUrl] = useState(true);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImagePreview(result);
      
      if (includeDataUrl) {
        setBase64Output(result);
      } else {
        // Strip the data URL prefix
        const base64Data = result.split(',')[1];
        setBase64Output(base64Data);
      }
      
      toast.success("Image converted to Base64");
    };
    
    reader.onerror = () => {
      toast.error("Error reading file");
    };
    
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(base64Output);
    setCopied(true);
    toast.success("Copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const clearImage = () => {
    setImagePreview("");
    setBase64Output("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const toggleDataUrlPrefix = () => {
    if (imagePreview) {
      if (includeDataUrl) {
        // Remove data URL prefix
        const base64Data = imagePreview.split(',')[1];
        setBase64Output(base64Data);
      } else {
        // Add data URL prefix back
        setBase64Output(imagePreview);
      }
    }
    setIncludeDataUrl(!includeDataUrl);
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
                  <BreadcrumbPage>Average Calculator</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
    <ToolLayout
      title="Image to Base64 Converter"
      description="Convert images to Base64 encoded strings for use in CSS, HTML, or data storage."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label 
            htmlFor="imageFile" 
            className="block text-sm font-medium text-gray-700"
          >
            Select Image
          </label>
          <div className="flex items-center space-x-2">
            <input
              ref={fileInputRef}
              id="imageFile"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="flex-1"
            >
              <Upload size={16} className="mr-1.5" />
              Choose File
            </Button>
            {imagePreview && (
              <Button
                variant="outline"
                onClick={clearImage}
              >
                <X size={16} className="mr-1.5" />
                Clear
              </Button>
            )}
          </div>
          <p className="text-xs text-gray-500">
            Supported formats: PNG, JPEG, GIF, SVG, WebP (max 5MB)
          </p>
        </div>

        {imagePreview && (
          <>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-700">Preview</h3>
                <div className="flex items-center space-x-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeDataUrl}
                      onChange={toggleDataUrlPrefix}
                      className="rounded border-gray-300 text-primary focus:ring-primary/30 mr-1.5"
                    />
                    <span className="text-xs text-gray-600">Include data URL prefix</span>
                  </label>
                </div>
              </div>
              <div className="p-4 bg-[#f5f5f5] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZJREFUOE+9ktsRgjAQRaHIxkoK8FEAtmEZ9qEdaEk+/MNxCUucGcWvO7Mhm92995Jj8rGdpbHtJVvCCRu8JO+pEMHiQzBnfyD5xrK2V0irZAh2JIcR1O7jptgNIKgOWRRJvkC2BVdKibfsA1gUwSKErR0NsicKhxA0oBIWO/Yj+QFGOYEUlRgK3+TbdJKPBuAQDhKkaHlvCJ9AGZzxK/kJwHwSIvkF+mPMGjyR/AILMN8HhUuWQIl8gXxuYJ7mHTiQpwMUvADrHmXTO1/ZUAAAAABJRU5ErkJggg==')] border border-gray-200 rounded-lg flex items-center justify-center min-h-[150px] max-h-[300px] overflow-hidden">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="max-w-full max-h-[280px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">Base64 Output</h3>
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
                      Copy to Clipboard
                    </>
                  )}
                </Button>
              </div>
              <div className="relative">
                <textarea
                  value={base64Output}
                  readOnly
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono min-h-[120px] max-h-[200px] overflow-y-auto"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the Image to Base64 Converter">
    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-1">Using the Image to Base64 Converter</h4>
        <p>The Image to Base64 Converter allows you to convert images into Base64 encoded strings for use in CSS, HTML, or data storage.</p>
        <p className="mt-2"><strong>How to Use:</strong></p>
        <ol className="list-decimal pl-5">
          <li>Click "Choose File" to select an image from your device.</li>
          <li>Ensure the image format is supported (PNG, JPEG, GIF, SVG, WebP).</li>
          <li>Make sure the file size does not exceed 5MB.</li>
          <li>Once uploaded, the tool will generate a Base64 encoded string.</li>
          <li>Copy the generated Base64 string for use in your projects.</li>
        </ol>
      </div>
  
      <div>
        <h4 className="font-medium mb-1">Features</h4>
        <ul className="list-disc pl-5">
          <li>Converts images into Base64 encoded strings instantly.</li>
          <li>Supports multiple image formats, including PNG, JPEG, GIF, SVG, and WebP.</li>
          <li>File size support up to 5MB.</li>
          <li>Easy-to-use interface for quick conversions.</li>
        </ul>
      </div>
    </div>
  </GuidanceSection>
  </>
  );
};

export default ImageToBase64;
