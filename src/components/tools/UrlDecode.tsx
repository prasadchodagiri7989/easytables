
import React, { useState } from "react";
import { Copy, Check, ArrowDownUp } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";

const UrlDecode = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const decodeUrl = () => {
    if (!input) {
      toast.error("Please enter a URL encoded string to decode");
      return;
    }

    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
      toast.success("URL string decoded");
    } catch (error) {
      toast.error("Error decoding URL string. Check your input.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const swapTool = () => {
    window.location.href = "/tools/url-encode";
  };

  return (
    <ToolLayout
      title="URL Decode"
      description="Decode URL encoded strings back to normal text."
    >
      <div className="space-y-6">
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={swapTool}
            className="flex items-center text-xs"
          >
            <ArrowDownUp size={14} className="mr-1.5" />
            Switch to Encode
          </Button>
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="inputText" 
            className="block text-sm font-medium text-gray-700"
          >
            URL Encoded String to Decode
          </label>
          <textarea
            id="inputText"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter URL encoded string to decode..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all min-h-[120px]"
          />
        </div>

        <Button 
          onClick={decodeUrl}
          className="w-full"
        >
          Decode URL String
        </Button>

        {output && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">Decoded Output</h3>
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
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg break-all min-h-[120px] max-h-[240px] overflow-y-auto text-sm">
              {output}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default UrlDecode;
