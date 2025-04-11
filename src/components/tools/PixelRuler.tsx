
import React, { useState, useRef, useEffect } from "react";
import { MoveHorizontal, MoveVertical, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const PixelRuler = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [rulerLength, setRulerLength] = useState(800);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [dpr, setDpr] = useState(window.devicePixelRatio || 1);
  
  const rulerContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRulerRef = useRef<HTMLCanvasElement>(null);
  const verticalRulerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setDpr(window.devicePixelRatio || 1);
    
    const handleResize = () => {
      if (isFullWidth) {
        if (orientation === "horizontal") {
          setRulerLength(window.innerWidth - 48); // Adjust for container padding
        } else {
          setRulerLength(Math.min(600, window.innerHeight - 300)); // Limit height
        }
      }
      drawRuler();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isFullWidth, orientation]);

  useEffect(() => {
    if (isFullWidth && orientation === "horizontal") {
      setRulerLength(window.innerWidth - 48); // Adjust for container padding
    }
    drawRuler();
  }, [rulerLength, orientation, isFullWidth, dpr]);

  const toggleFullWidth = () => {
    const newIsFullWidth = !isFullWidth;
    setIsFullWidth(newIsFullWidth);
    
    if (newIsFullWidth && orientation === "horizontal") {
      setRulerLength(window.innerWidth - 48); // Adjust for container padding
    } else if (!newIsFullWidth) {
      setRulerLength(800); // Reset to default
    }
  };

  const toggleOrientation = () => {
    const newOrientation = orientation === "horizontal" ? "vertical" : "horizontal";
    setOrientation(newOrientation);
    
    if (isFullWidth && newOrientation === "horizontal") {
      setRulerLength(window.innerWidth - 48);
    } else if (isFullWidth && newOrientation === "vertical") {
      setRulerLength(Math.min(600, window.innerHeight - 300)); // Limit height
    } else {
      setRulerLength(800); // Reset to default
    }
  };

  const drawRuler = () => {
    if (orientation === "horizontal") {
      drawHorizontalRuler();
    } else {
      drawVerticalRuler();
    }
  };

  const drawHorizontalRuler = () => {
    const canvas = horizontalRulerRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Scale for high DPI displays
    const width = rulerLength;
    const height = 60;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    ctx.scale(dpr, dpr);
    
    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw ruler markings
    ctx.fillStyle = '#000000';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    
    // Draw the main horizontal line
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(width, 30);
    ctx.stroke();
    
    // Draw tick marks
    for (let i = 0; i <= width; i += 10) {
      const tickHeight = i % 100 === 0 ? 15 : i % 50 === 0 ? 10 : 5;
      
      ctx.beginPath();
      ctx.moveTo(i, 30 - tickHeight);
      ctx.lineTo(i, 30);
      ctx.stroke();
      
      // Add labels for every 100 pixels
      if (i % 100 === 0) {
        ctx.fillText(i.toString(), i, 20);
      }
    }
  };

  const drawVerticalRuler = () => {
    const canvas = verticalRulerRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Scale for high DPI displays
    const width = 60;
    const height = rulerLength;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    ctx.scale(dpr, dpr);
    
    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw ruler markings
    ctx.fillStyle = '#000000';
    ctx.font = '10px Arial';
    ctx.textAlign = 'right';
    
    // Draw the main vertical line
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(30, 0);
    ctx.lineTo(30, height);
    ctx.stroke();
    
    // Draw tick marks
    for (let i = 0; i <= height; i += 10) {
      const tickWidth = i % 100 === 0 ? 15 : i % 50 === 0 ? 10 : 5;
      
      ctx.beginPath();
      ctx.moveTo(30 - tickWidth, i);
      ctx.lineTo(30, i);
      ctx.stroke();
      
      // Add labels for every 100 pixels
      if (i % 100 === 0) {
        ctx.save();
        ctx.translate(20, i);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = 'center';
        ctx.fillText(i.toString(), 0, 0);
        ctx.restore();
      }
    }
  };

  const increaseLength = () => {
    setRulerLength(prevLength => Math.min(prevLength + 100, 2000));
  };

  const decreaseLength = () => {
    setRulerLength(prevLength => Math.max(prevLength - 100, 300));
  };

  return (
    <>
    <ToolLayout
      title="Online Pixel Ruler"
      description="Measure elements on your screen in pixels. Useful for web designers and developers."
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleOrientation}
              className="flex items-center text-xs"
            >
              {orientation === "horizontal" ? (
                <>
                  <MoveVertical size={14} className="mr-1.5" />
                  Switch to Vertical
                </>
              ) : (
                <>
                  <MoveHorizontal size={14} className="mr-1.5" />
                  Switch to Horizontal
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullWidth}
              className="flex items-center text-xs"
            >
              {isFullWidth ? (
                <>
                  <Minimize2 size={14} className="mr-1.5" />
                  Standard Size
                </>
              ) : (
                <>
                  <Maximize2 size={14} className="mr-1.5" />
                  {orientation === "horizontal" ? "Full Width" : "Longer"}
                </>
              )}
            </Button>
          </div>
          
          {!isFullWidth && (
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseLength}
                disabled={rulerLength <= 300}
              >
                -100px
              </Button>
              <span className="text-sm px-2">
                {rulerLength}px
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseLength}
                disabled={rulerLength >= 2000}
              >
                +100px
              </Button>
            </div>
          )}
        </div>
        
        <div 
          ref={rulerContainerRef}
          className="flex justify-center bg-white border border-gray-200 rounded-lg p-6 overflow-auto"
        >
          {orientation === "horizontal" ? (
            <canvas
              ref={horizontalRulerRef}
              className="border border-gray-300 shadow-sm"
              style={{ width: rulerLength, height: 60 }}
            />
          ) : (
            <canvas
              ref={verticalRulerRef}
              className="border border-gray-300 shadow-sm"
              style={{ width: 60, height: rulerLength }}
            />
          )}
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">How to Use</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
            <li>The ruler displays measurements in pixels</li>
            <li>Use the buttons above to change orientation or size</li>
            <li>Position the ruler next to the element you want to measure</li>
            <li>For more precise measurements, use browser developer tools</li>
          </ul>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <h4 className="text-xs font-medium text-gray-600 mb-1">Device Information</h4>
            <div className="text-xs text-gray-500">
              <p>Screen Resolution: {window.screen.width} × {window.screen.height} pixels</p>
              <p>Device Pixel Ratio: {dpr}x</p>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the Online Pixel Ruler">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Using the Pixel Ruler</h4>
      <p>The Online Pixel Ruler allows you to measure elements on your screen in pixels, making it an essential tool for web designers and developers.</p>

      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>Use the buttons to adjust the ruler width in increments of 100px.</li>
        <li>Switch between horizontal and vertical orientation as needed.</li>
        <li>Position the ruler next to the element you want to measure.</li>
        <li>For more precise measurements, use your browser's developer tools.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Device Information</h4>
      <ul className="list-disc pl-5">
        <li><strong>Screen Resolution:</strong> 1536 × 864 pixels</li>
        <li><strong>Device Pixel Ratio:</strong> 1.25x</li>
        <li>Effective resolution is adjusted based on pixel density.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-medium mb-1">Why Use This Tool?</h4>
      <ul className="list-disc pl-5">
        <li>Accurately measure elements without needing external software.</li>
        <li>Quickly adjust dimensions to match design specifications.</li>
        <li>Ensure pixel-perfect alignment in UI/UX design.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </>
  );
};

export default PixelRuler;
