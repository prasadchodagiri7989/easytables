
import React, { useState } from "react";
import { Download, Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";

const Base64ToImage = () => {
  const [base64Input, setBase64Input] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageType, setImageType] = useState("png");
  const [fileName, setFileName] = useState("converted-image");

  const convertToImage = () => {
    if (!base64Input) {
      toast.error("Please enter a Base64 string");
      return;
    }

    try {
      // Strip data URL prefix if present
      let base64Data = base64Input.trim();
      if (base64Data.startsWith("data:")) {
        const matches = base64Data.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const detectedType = matches[1];
          base64Data = matches[2];
          
          // Update image type based on the data URL
          if (detectedType.includes("png")) setImageType("png");
          else if (detectedType.includes("jpeg") || detectedType.includes("jpg")) setImageType("jpeg");
          else if (detectedType.includes("gif")) setImageType("gif");
          else if (detectedType.includes("svg")) setImageType("svg");
          else setImageType("png");
        }
      }

      // Create image URL
      const imageUrl = `data:image/${imageType};base64,${base64Data}`;
      setImageUrl(imageUrl);
      toast.success("Base64 converted to image");
    } catch (error) {
      toast.error("Could not convert Base64 to image. Check your input.");
    }
  };

  const downloadImage = () => {
    if (!imageUrl) return;
    
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `${fileName}.${imageType}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("Image downloaded");
  };

  const clearImage = () => {
    setImageUrl("");
    toast.info("Image cleared");
  };

  return (
    <>
    <ToolLayout
      title="Base64 to Image Converter"
      description="Convert Base64 encoded strings to viewable and downloadable images."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label 
            htmlFor="base64Input" 
            className="block text-sm font-medium text-gray-700"
          >
            Base64 String
          </label>
          <textarea
            id="base64Input"
            value={base64Input}
            onChange={(e) => setBase64Input(e.target.value)}
            placeholder="Paste your Base64 string here..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all min-h-[120px]"
          />
          <p className="text-xs text-gray-500">
            Paste a Base64 string with or without the data URL prefix
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label 
              htmlFor="imageType" 
              className="block text-sm font-medium text-gray-700"
            >
              Image Type
            </label>
            <select
              id="imageType"
              value={imageType}
              onChange={(e) => setImageType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="gif">GIF</option>
              <option value="svg+xml">SVG</option>
            </select>
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="fileName" 
              className="block text-sm font-medium text-gray-700"
            >
              File Name
            </label>
            <input
              id="fileName"
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        <Button 
          onClick={convertToImage}
          className="w-full"
        >
          <Upload size={16} className="mr-1.5" />
          Convert to Image
        </Button>

        {imageUrl && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-700">Preview</h3>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearImage}
                  className="flex items-center text-xs"
                >
                  <Trash2 size={14} className="mr-1.5" />
                  Clear
                </Button>
                <Button
                  size="sm"
                  onClick={downloadImage}
                  className="flex items-center text-xs"
                >
                  <Download size={14} className="mr-1.5" />
                  Download
                </Button>
              </div>
            </div>
            <div className="p-4 bg-[#f5f5f5] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZJREFUOE+9ktsRgjAQRaHIxkoK8FEAtmEZ9qEdaEk+/MNxCUucGcWvO7Mhm92995Jj8rGdpbHtJVvCCRu8JO+pEMHiQzBnfyD5xrK2V0irZAh2JIcR1O7jptgNIKgOWRRJvkC2BVdKibfsA1gUwSKErR0NsicKhxA0oBIWO/Yj+QFGOYEUlRgK3+TbdJKPBuAQDhKkaHlvCJ9AGZzxK/kJwHwSIvkF+mPMGjyR/AILMN8HhUuWQIl8gXxuYJ7mHTiQpwMUvADrHmXTO1/ZUAAAAABJRU5ErkJggg==')] border border-gray-200 rounded-lg flex items-center justify-center min-h-[200px] max-h-[400px] overflow-hidden">
              <img 
                src={imageUrl} 
                alt="Converted from Base64" 
                className="max-w-full max-h-[360px] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the Base64 to Image Converter">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Using the Base64 to Image Converter</h4>
      <p>The Base64 to Image Converter allows you to convert Base64 encoded strings into viewable and downloadable images.</p>
      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>Paste your Base64 encoded string into the input field.</li>
        <li>Ensure the string includes or excludes the data URL prefix as needed.</li>
        <li>Select the desired image format (e.g., PNG).</li>
        <li>Specify a file name for the converted image.</li>
        <li>Click "Convert to Image" to generate the image from the Base64 string.</li>
        <li>View and download the generated image for further use.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Features</h4>
      <ul className="list-disc pl-5">
        <li>Converts Base64 encoded strings into images instantly.</li>
        <li>Supports multiple image formats, including PNG.</li>
        <li>Allows customization of the file name before downloading.</li>
        <li>Easy-to-use interface for quick conversions.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </>
  );
};

export default Base64ToImage;
