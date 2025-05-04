
import React, { useState, useRef, useEffect } from "react";
import { Upload, Pipette, Copy, Check, X, Trash2, Maximize2, Minimize2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


interface PickedColor {
  id: string;
  color: string;
  x: number;
  y: number;
}

const ColorPickerFromImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [pickedColors, setPickedColors] = useState<PickedColor[]>([]);
  const [pickerMode, setPickerMode] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImageUrl(result);
      setPickedColors([]);
      toast.success("Image loaded successfully");
    };
    
    reader.onerror = () => {
      toast.error("Error reading file");
    };
    
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!imageUrl || !imageRef.current) return;

    // Wait for the image to load
    const img = imageRef.current;
    img.onload = () => {
      if (!containerRef.current) return;
      
      // Calculate the canvas size based on container size and image ratio
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = 400; // Fixed height
      
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let canvasWidth = containerWidth;
      let canvasHeight = containerWidth / imgRatio;
      
      if (canvasHeight > containerHeight) {
        canvasHeight = containerHeight;
        canvasWidth = containerHeight * imgRatio;
      }
      
      setCanvasSize({
        width: canvasWidth,
        height: canvasHeight
      });
      
      // Draw the image on canvas
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [imageUrl, zoomLevel]);

  const getColorAtPosition = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    
    // Get the pixel data at the cursor position
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    
    // Convert RGB to HEX
    const rgbToHex = (r: number, g: number, b: number) => {
      return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }).join("");
    };
    
    return rgbToHex(pixel[0], pixel[1], pixel[2]);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!pickerMode || !canvasRef.current) return;
    
    // Get canvas-relative coordinates
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left);
    const y = (e.clientY - rect.top);
    
    // Get color at position
    const color = getColorAtPosition(x, y);
    if (!color) return;
    
    // Add to picked colors
    const newColor: PickedColor = {
      id: Date.now().toString(),
      color,
      x,
      y
    };
    
    setPickedColors(prev => [...prev, newColor]);
    toast.success(`Color picked: ${color}`);
  };

  const togglePickerMode = () => {
    setPickerMode(!pickerMode);
    if (!pickerMode) {
      toast.info("Click anywhere on the image to pick a color");
    }
  };

  const removeColor = (id: string) => {
    setPickedColors(prev => prev.filter(color => color.id !== id));
  };

  const clearColors = () => {
    setPickedColors([]);
    toast.info("All picked colors cleared");
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Color copied to clipboard");
    
    setTimeout(() => {
      setCopied(null);
    }, 1500);
  };

  const toggleZoom = () => {
    setZoomLevel(prev => prev === 1 ? 1.5 : 1);
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
                  <BreadcrumbPage>Color Picker From Image</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
    <ToolLayout
      title="Color Picker from Image"
      description="Upload an image and pick colors from it. Perfect for finding color codes from design mockups."
      className="max-w-4xl p-0 overflow-hidden"
    >
      <div className="flex flex-col min-h-[600px]">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center text-xs"
            >
              <Upload size={14} className="mr-1.5" />
              Upload Image
            </Button>
            <Button
              variant={pickerMode ? "default" : "outline"}
              size="sm"
              onClick={togglePickerMode}
              className="flex items-center text-xs"
              disabled={!imageUrl}
            >
              <Pipette size={14} className="mr-1.5" />
              {pickerMode ? "Picking..." : "Pick Colors"}
            </Button>
          </div>
          {imageUrl && (
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleZoom}
                className="flex items-center text-xs"
              >
                {zoomLevel > 1 ? (
                  <>
                    <Minimize2 size={14} className="mr-1.5" />
                    Zoom Out
                  </>
                ) : (
                  <>
                    <Maximize2 size={14} className="mr-1.5" />
                    Zoom In
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearColors}
                className="flex items-center text-xs"
                disabled={pickedColors.length === 0}
              >
                <Trash2 size={14} className="mr-1.5" />
                Clear Colors
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div 
            ref={containerRef}
            className="flex-1 flex items-center justify-center overflow-hidden max-h-[500px] border-b lg:border-b-0 lg:border-r border-gray-200"
          >
            {imageUrl ? (
              <div className="relative overflow-auto p-4 w-full h-full">
                <img 
                  ref={imageRef}
                  src={imageUrl} 
                  alt="Uploaded" 
                  className="hidden"
                />
                <canvas
                  ref={canvasRef}
                  onClick={handleCanvasClick}
                  className={`mx-auto ${pickerMode ? 'cursor-crosshair' : 'cursor-default'}`}
                  style={{
                    width: canvasSize.width * zoomLevel,
                    height: canvasSize.height * zoomLevel,
                    maxWidth: "100vw",
                  }}
                />
                {pickedColors.map((color) => (
                  <div
                    key={color.id}
                    className="absolute w-4 h-4 border-2 border-white rounded-full shadow-md pointer-events-none"
                    style={{
                      left: color.x * zoomLevel - 2,
                      top: color.y * zoomLevel - 2,
                      backgroundColor: color.color,
                      transform: 'translate(16px, 16px)'
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 text-gray-500">
                <Upload size={48} className="mx-auto mb-4 text-gray-300" />
                <p className="text-sm">
                  Upload an image to start picking colors
                </p>
                <p className="text-xs mt-2 text-gray-400">
                  Supported formats: PNG, JPG, JPEG, GIF, WebP
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-4"
                >
                  Select Image
                </Button>
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-1/3 min-w-[280px] p-4 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Picked Colors</h3>
            {pickedColors.length === 0 ? (
              <div className="text-center p-8 text-gray-500 border border-dashed border-gray-200 rounded-lg flex-grow">
                <Pipette size={24} className="mx-auto mb-2 text-gray-300" />
                <p className="text-xs">
                  {imageUrl ? 'Click on the image to pick colors' : 'Upload an image to start picking colors'}
                </p>
              </div>
            ) : (
              <div className="space-y-3 overflow-y-auto pr-1 flex-grow">
                {pickedColors.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 group">
                    <div 
                      className="w-10 h-10 rounded border border-gray-200 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={item.color}
                        readOnly
                        className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-gray-50"
                      />
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => copyToClipboard(item.color, item.id)}
                        className="p-1.5 bg-gray-100 border border-gray-200 rounded-lg"
                      >
                        {copied === item.id ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} className="text-gray-500" />
                        )}
                      </button>
                      <button
                        onClick={() => removeColor(item.id)}
                        className="p-1.5 bg-gray-100 border border-gray-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {pickedColors.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-5 gap-1">
                  {pickedColors.map((color) => (
                    <div
                      key={color.id}
                      className="aspect-square rounded-md border border-gray-200"
                      style={{ backgroundColor: color.color }}
                      title={color.color}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the Color Picker from Image">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Using the Color Picker from Image</h4>
      <p>The Color Picker from Image allows you to extract color codes from any uploaded image.</p>
      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>Click "Upload Image" and select an image file.</li>
        <li>Once uploaded, click on the image to pick colors.</li>
        <li>The extracted colors will be displayed with their hex codes.</li>
        <li>Use the selected colors for design projects or reference.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Features</h4>
      <ul className="list-disc pl-5">
        <li>Supports multiple image formats (PNG, JPG, JPEG, GIF, WebP).</li>
        <li>Extracts accurate hex codes from any image.</li>
        <li>Easy-to-use interface for selecting colors.</li>
        <li>Ideal for designers and developers working with color palettes.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </>
  );
};

export default ColorPickerFromImage;
