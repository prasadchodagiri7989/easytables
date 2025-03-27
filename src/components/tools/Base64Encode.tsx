
import React, { useState } from "react";
import { Copy, Check, ArrowDownUp } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";

const Base64Encode = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encodeBase64 = () => {
    if (!input) {
      toast.error("Please enter text to encode");
      return;
    }

    try {
      const encoded = btoa(input);
      setOutput(encoded);
      toast.success("Text encoded to Base64");
    } catch (error) {
      toast.error("Error encoding to Base64. Check your input text.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const swapTool = () => {
    window.location.href = "/tools/base64-decode";
  };

  return (
    <ToolLayout
      title="Base64 Encode"
      description="Convert text to Base64 encoded string."
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
            Switch to Decode
          </Button>
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="inputText" 
            className="block text-sm font-medium text-gray-700"
          >
            Text to Encode
          </label>
          <textarea
            id="inputText"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to encode to Base64..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all min-h-[120px]"
          />
        </div>

        <Button 
          onClick={encodeBase64}
          className="w-full"
        >
          Encode to Base64
        </Button>

        {output && (
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
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg break-all min-h-[120px] max-h-[240px] overflow-y-auto text-sm">
              {output}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default Base64Encode;
