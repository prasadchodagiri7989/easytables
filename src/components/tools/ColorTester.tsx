
import React, { useState, useEffect } from "react";
import { Copy, Check, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";

interface ColorItem {
  id: string;
  color: string;
  name: string;
}

const ColorTester = () => {
  const [colors, setColors] = useState<ColorItem[]>([
    { id: "1", color: "#3b82f6", name: "Blue" },
    { id: "2", color: "#ef4444", name: "Red" },
    { id: "3", color: "#10b981", name: "Green" },
  ]);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  // Calculate contrast ratio between colors
  const calculateContrast = (color1: string, color2: string) => {
    const getRGB = (color: string) => {
      if (color.startsWith("#")) {
        const r = parseInt(color.slice(1, 3), 16) / 255;
        const g = parseInt(color.slice(3, 5), 16) / 255;
        const b = parseInt(color.slice(5, 7), 16) / 255;
        return [r, g, b];
      }
      return [0, 0, 0];
    };

    const getLuminance = (rgb: number[]) => {
      const a = rgb.map((v) => {
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    };

    const rgb1 = getRGB(color1);
    const rgb2 = getRGB(color2);
    const l1 = getLuminance(rgb1);
    const l2 = getLuminance(rgb2);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    return ratio.toFixed(2);
  };

  const getContrastRating = (ratio: number) => {
    if (ratio >= 7) return "AAA (Excellent)";
    if (ratio >= 4.5) return "AA (Good)";
    if (ratio >= 3) return "AA Large Text (Fair)";
    return "Poor";
  };

  const addNewColor = () => {
    const newId = Date.now().toString();
    setColors([...colors, { id: newId, color: "#000000", name: `Color ${colors.length + 1}` }]);
    setSelectedColorId(newId);
  };

  const updateColor = (id: string, field: keyof ColorItem, value: string) => {
    setColors(colors.map(color => 
      color.id === id ? { ...color, [field]: value } : color
    ));
  };

  const removeColor = (id: string) => {
    setColors(colors.filter(color => color.id !== id));
    if (selectedColorId === id) {
      setSelectedColorId(null);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard");
    
    setTimeout(() => {
      setCopied(null);
    }, 1500);
  };

  return (
    <ToolLayout
      title="Color Tester"
      description="Test color combinations for contrast and accessibility."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Background & Text</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  id="bgColor"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-10 p-0 border-0 rounded cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="bgColor" className="block text-xs font-medium text-gray-500 mb-1">
                    Background Color
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1 px-3 py-1.5 border border-gray-200 rounded-l-lg text-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(backgroundColor, "bg")}
                      className="px-2 py-1.5 bg-gray-100 border-y border-r border-gray-200 rounded-r-lg"
                    >
                      {copied === "bg" ? (
                        <Check size={14} className="text-green-500" />
                      ) : (
                        <Copy size={14} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  id="textColor"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-12 h-10 p-0 border-0 rounded cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="textColor" className="block text-xs font-medium text-gray-500 mb-1">
                    Text Color
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 px-3 py-1.5 border border-gray-200 rounded-l-lg text-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(textColor, "text")}
                      className="px-2 py-1.5 bg-gray-100 border-y border-r border-gray-200 rounded-r-lg"
                    >
                      {copied === "text" ? (
                        <Check size={14} className="text-green-500" />
                      ) : (
                        <Copy size={14} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Additional Colors</h3>
              <div className="space-y-3 max-h-[200px] overflow-y-auto pr-1">
                {colors.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={item.color}
                      onChange={(e) => updateColor(item.id, "color", e.target.value)}
                      className="w-12 h-10 p-0 border-0 rounded cursor-pointer"
                    />
                    <div className="flex-1 grid grid-cols-3 gap-1">
                      <input
                        type="text"
                        value={item.color}
                        onChange={(e) => updateColor(item.id, "color", e.target.value)}
                        className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm"
                      />
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateColor(item.id, "name", e.target.value)}
                        placeholder="Name"
                        className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm"
                      />
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => copyToClipboard(item.color, item.id)}
                          className="flex-1 px-2 py-1.5 bg-gray-100 border border-gray-200 rounded-lg"
                        >
                          {copied === item.id ? (
                            <Check size={14} className="mx-auto text-green-500" />
                          ) : (
                            <Copy size={14} className="mx-auto text-gray-500" />
                          )}
                        </button>
                        <button
                          onClick={() => removeColor(item.id)}
                          className="flex-1 px-2 py-1.5 bg-gray-100 border border-gray-200 rounded-lg"
                        >
                          <X size={14} className="mx-auto text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addNewColor}
                className="w-full mt-3"
              >
                <Plus size={14} className="mr-1.5" />
                Add Color
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Preview</h3>
            <div 
              className="p-6 rounded-lg border border-gray-200 min-h-[280px] flex flex-col transition-colors duration-200"
              style={{ backgroundColor }}
            >
              <h2 
                className="text-2xl font-bold mb-4 transition-colors duration-200"
                style={{ color: textColor }}
              >
                Sample Heading
              </h2>
              <p 
                className="text-base mb-6 transition-colors duration-200"
                style={{ color: textColor }}
              >
                This is a paragraph of text that demonstrates how your color choices will look in a real context. Good color contrast is essential for readability and accessibility.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {colors.map((item) => (
                  <button
                    key={item.id}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{ 
                      backgroundColor: item.color,
                      color: Number(calculateContrast(item.color, "#ffffff")) > 2 ? "#ffffff" : "#000000"
                    }}
                    onClick={() => setSelectedColorId(selectedColorId === item.id ? null : item.id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold mb-3">Contrast Analysis</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Text/Background:</span>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">
                      {calculateContrast(textColor, backgroundColor)}:1
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      Number(calculateContrast(textColor, backgroundColor)) >= 4.5 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {getContrastRating(Number(calculateContrast(textColor, backgroundColor)))}
                    </span>
                  </div>
                </div>
                
                {selectedColorId && (
                  <div className="pt-2 border-t border-gray-100 mt-2">
                    <h4 className="font-medium mb-2">Selected Color: {colors.find(c => c.id === selectedColorId)?.name}</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">With Background:</span>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">
                            {calculateContrast(colors.find(c => c.id === selectedColorId)?.color || "#000", backgroundColor)}:1
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            Number(calculateContrast(colors.find(c => c.id === selectedColorId)?.color || "#000", backgroundColor)) >= 4.5 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {getContrastRating(Number(calculateContrast(colors.find(c => c.id === selectedColorId)?.color || "#000", backgroundColor)))}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">With Text:</span>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">
                            {calculateContrast(colors.find(c => c.id === selectedColorId)?.color || "#000", textColor)}:1
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            Number(calculateContrast(colors.find(c => c.id === selectedColorId)?.color || "#000", textColor)) >= 4.5 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {getContrastRating(Number(calculateContrast(colors.find(c => c.id === selectedColorId)?.color || "#000", textColor)))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ColorTester;
