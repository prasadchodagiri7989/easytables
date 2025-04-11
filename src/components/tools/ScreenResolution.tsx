
import React, { useState, useEffect } from "react";
import { Copy, Check, Maximize2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const ScreenResolution = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [deviceType, setDeviceType] = useState("");
  const [orientation, setOrientation] = useState("");
  const [dpr, setDpr] = useState(window.devicePixelRatio || 1);
  const [colorDepth, setColorDepth] = useState(window.screen.colorDepth || 24);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      updateDeviceType(window.innerWidth);
      updateOrientation(window.innerWidth, window.innerHeight);
    };

    const updateDeviceType = (width: number) => {
      if (width < 640) setDeviceType("Mobile");
      else if (width < 768) setDeviceType("Large Mobile / Small Tablet");
      else if (width < 1024) setDeviceType("Tablet");
      else if (width < 1280) setDeviceType("Laptop");
      else if (width < 1536) setDeviceType("Desktop");
      else setDeviceType("Large Desktop");
    };

    const updateOrientation = (width: number, height: number) => {
      if (width > height) setOrientation("Landscape");
      else setOrientation("Portrait");
    };

    updateDeviceType(window.innerWidth);
    updateOrientation(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyToClipboard = () => {
    const resText = `Screen Resolution: ${screenWidth} × ${screenHeight}
Viewport Size: ${window.innerWidth} × ${window.innerHeight}
Device Type: ${deviceType}
Orientation: ${orientation}
Device Pixel Ratio: ${dpr}
Color Depth: ${colorDepth} bits`;

    navigator.clipboard.writeText(resText);
    setCopied(true);
    toast.success("Resolution info copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const launchFullscreen = () => {
    document.documentElement.requestFullscreen().catch((e) => {
      toast.error("Fullscreen request failed");
    });
  };

  // Common screen resolutions
  const commonResolutions = [
    { name: "Mobile (Small)", width: 320, height: 568 },
    { name: "Mobile (Medium)", width: 375, height: 667 },
    { name: "Mobile (Large)", width: 414, height: 896 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Laptop", width: 1366, height: 768 },
    { name: "Desktop", width: 1920, height: 1080 },
    { name: "4K", width: 3840, height: 2160 },
  ];

  const isCommonResolution = () => {
    return commonResolutions.some(
      (res) => 
        (res.width === screenWidth && res.height === screenHeight) || 
        (res.height === screenWidth && res.width === screenHeight)
    );
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
      title="Screen Resolution"
      description="Check your screen and viewport resolution, device type, and other display properties."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 p-4">
                <h3 className="text-lg font-medium text-gray-800">Current Resolution</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-primary flex items-center">
                    {screenWidth} <span className="mx-2 text-gray-400">×</span> {screenHeight}
                  </div>
                  <div className="mt-2 text-gray-500">pixels</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Device Type</div>
                    <div className="font-medium">{deviceType}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Orientation</div>
                    <div className="font-medium">{orientation}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Pixel Ratio</div>
                    <div className="font-medium">{dpr}x</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Color Depth</div>
                    <div className="font-medium">{colorDepth} bits</div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="flex-1 flex items-center justify-center"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="mr-1.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-1.5" />
                        Copy Info
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={launchFullscreen}
                    variant="outline"
                    className="flex items-center justify-center"
                  >
                    <Maximize2 size={16} className="mr-1.5" />
                    Fullscreen
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 p-4">
                <h3 className="text-lg font-medium text-gray-800">Common Resolutions</h3>
              </div>
              <div className="p-4">
                <div className="space-y-3 max-h-[270px] overflow-y-auto pr-2">
                  {commonResolutions.map((res, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border ${
                        (res.width === screenWidth && res.height === screenHeight) ||
                        (res.height === screenWidth && res.width === screenHeight)
                          ? "border-primary/30 bg-primary/5"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{res.name}</span>
                        <span className="text-sm">
                          {res.width} × {res.height}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Resolution Info</h3>
              <p className="text-sm text-gray-600">
                Your current resolution {isCommonResolution() ? "matches" : "doesn't match"} a common screen size. {
                  dpr > 1 ? 
                  `With a pixel ratio of ${dpr}x, your effective resolution is ${Math.round(screenWidth * dpr)} × ${Math.round(screenHeight * dpr)} physical pixels.` : 
                  ""
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the Screen Resolution Checker">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Understanding Your Screen Resolution</h4>
      <p>The Screen Resolution Checker provides detailed information about your display settings, including resolution, pixel density, and orientation.</p>

      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>View your current screen resolution and device type at a glance.</li>
        <li>Compare your resolution with common device resolutions.</li>
        <li>Use the "Copy Info" button to copy resolution details for reference.</li>
        <li>Toggle "Fullscreen" to check changes in display dimensions.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Why This Tool is Useful?</h4>
      <ul className="list-disc pl-5">
        <li>Helps developers test responsive web designs across different screen sizes.</li>
        <li>Provides quick access to pixel ratio and color depth for media professionals.</li>
        <li>Identifies whether the current screen matches standard device resolutions.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </>
  );
};

export default ScreenResolution;
