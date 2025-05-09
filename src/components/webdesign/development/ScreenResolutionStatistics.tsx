import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const ScreenResolutionStats: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
                                      <Breadcrumb className="mb-4">
                                            <BreadcrumbList>
                                              <BreadcrumbItem>
                                                <BreadcrumbLink asChild>
                                                  <Link to="/web/development">Development Tools</Link>
                                                </BreadcrumbLink>
                                              </BreadcrumbItem>
                                              <BreadcrumbSeparator />
                                              <BreadcrumbItem>
                                                <BreadcrumbPage>Screen Resolution Statistics</BreadcrumbPage>
                                              </BreadcrumbItem>
                                            </BreadcrumbList>
                                          </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Screen Resolution Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction */}
          <p>
            Screen resolution refers to the number of pixels displayed on a screen. It's typically represented as width × height (e.g., 1920x1080). A higher resolution means more pixels are displayed, resulting in sharper and clearer images.
          </p>

          {/* Common Screen Resolutions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Screen Resolutions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1920x1080:</strong> Full HD (Common in laptops and monitors)</li>
              <li><strong>1366x768:</strong> HD (Common for budget laptops)</li>
              <li><strong>1440x900:</strong> WXGA+ (Older monitors)</li>
              <li><strong>2560x1440:</strong> QHD (Higher-end monitors)</li>
              <li><strong>3840x2160:</strong> 4K Ultra HD (High-end monitors and TVs)</li>
              <li><strong>375x667:</strong> iPhone 6, 7, 8 (Older iPhones)</li>
              <li><strong>1080x1920:</strong> Mobile Full HD (Many smartphones)</li>
              <li><strong>414x896:</strong> iPhone X, 11 (Modern iPhones)</li>
            </ul>
          </div>

          {/* Why Screen Resolution Matters */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Why Screen Resolution Matters in Web Development</h2>
            <p>
              Understanding screen resolution is crucial for web developers to optimize websites for various devices. Here's why:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>User Experience:</strong> Unoptimized resolutions can cause elements to be cut off or distorted.</li>
              <li><strong>Mobile-first Design:</strong> Most users access websites on mobile devices, making mobile optimization essential.</li>
              <li><strong>Performance:</strong> Larger resolutions may require more resources, such as higher-quality images.</li>
              <li><strong>Content Layout:</strong> Ensuring content adapts to different screen sizes prevents awkward or unreadable layouts.</li>
            </ul>
          </div>

          {/* Detecting Screen Resolution in JavaScript */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Detecting Screen Resolution in JavaScript</h2>
            <p>
              You can easily detect the screen resolution using JavaScript:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`console.log("Screen width: " + window.screen.width);
console.log("Screen height: " + window.screen.height);`}</code>
            </pre>
            <p>
              This outputs the screen's width and height in pixels. For browser window size, use <code>window.innerWidth</code> and <code>window.innerHeight</code>.
            </p>
          </div>

          {/* Common Screen Resolution Statistics (2023) */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Screen Resolution Statistics (2023)</h2>
            <table className="table-auto w-full text-sm text-left text-gray-700 border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Resolution</th>
                  <th className="px-4 py-2 border-b">Percentage of Users</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">1920x1080 (Full HD)</td>
                  <td className="px-4 py-2 border-b">30%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">1366x768 (HD)</td>
                  <td className="px-4 py-2 border-b">20%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">1440x900 (WXGA+)</td>
                  <td className="px-4 py-2 border-b">10%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">2560x1440 (QHD)</td>
                  <td className="px-4 py-2 border-b">5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">3840x2160 (4K)</td>
                  <td className="px-4 py-2 border-b">3%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">375x667 (iPhone 6/7/8)</td>
                  <td className="px-4 py-2 border-b">15%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">1080x1920 (Mobile Full HD)</td>
                  <td className="px-4 py-2 border-b">8%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">414x896 (iPhone X/11)</td>
                  <td className="px-4 py-2 border-b">9%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Responsive Design Tips */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Responsive Design Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Use Media Queries:</strong> Apply different styles based on screen width.</li>
              <li><strong>Flexible Layouts:</strong> Use percentages or viewport units (vw/vh) for fluid layouts.</li>
              <li><strong>Image Optimization:</strong> Use responsive images (e.g., <code>srcset</code>) to adjust image size based on screen resolution.</li>
              <li><strong>Test on Multiple Devices:</strong> Regularly test your design on various devices to ensure good usability.</li>
            </ul>
          </div>

          {/* Further Reading */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Reading</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  W3Schools - Media Queries
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  MDN - Media Queries
                </a>
              </li>
            </ul>
          </div>
                          {/* Historical Evolution of Screen Resolutions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Historical Evolution of Screen Resolutions</h2>
            <p>
              Screen resolutions have evolved significantly over the decades. In the early days of computing, resolutions were extremely low. For example, the IBM CGA standard in the 1980s supported 320x200 pixels. As technology advanced, resolutions increased to 640x480 (VGA), 800x600 (SVGA), and eventually to Full HD and 4K displays today.
            </p>
            <p>
              The rapid development of smartphone technology also led to an explosion of device-specific resolutions, making responsive design and resolution-aware web development more critical than ever.
            </p>
          </div>

          {/* DPI vs Resolution */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Understanding DPI vs Resolution</h2>
            <p>
              While screen resolution refers to the number of pixels on a screen, DPI (dots per inch) refers to pixel density — how many pixels fit into one inch of the display.
            </p>
            <p>
              For example, a 1920x1080 resolution on a 24-inch monitor has a lower DPI than the same resolution on a 13-inch laptop screen. This affects how large or small elements appear.
            </p>
            <p>
              Devices like Apple’s Retina displays have higher DPIs, making graphics appear smoother and more detailed.
            </p>
          </div>

          {/* Retina and High-Density Displays */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Retina and High-Density Displays</h2>
            <p>
              High-density displays like Retina (Apple), AMOLED (Samsung), or OLED screens pack more pixels per inch, making individual pixels imperceptible to the human eye at normal viewing distances.
            </p>
            <p>
              For web developers, this means you may need to provide high-resolution assets, like SVGs or 2x/3x images, to ensure content looks crisp. CSS media queries like <code>min-resolution</code> or <code>-webkit-min-device-pixel-ratio</code> help target these displays.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`@media 
(-webkit-min-device-pixel-ratio: 2), 
(min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
  }
}`}</code>
            </pre>
          </div>

          {/* Adaptive vs Responsive vs Fluid Design */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Adaptive vs Responsive vs Fluid Design</h2>
            <p>
              These terms are often used interchangeably, but they have subtle differences:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Responsive Design:</strong> Uses media queries and flexible grids to adapt layout based on screen width.</li>
              <li><strong>Adaptive Design:</strong> Uses fixed layouts for specific screen sizes (e.g., mobile, tablet, desktop).</li>
              <li><strong>Fluid Design:</strong> Uses percentage-based widths to scale seamlessly across any resolution.</li>
            </ul>
            <p>
              In practice, many developers use a hybrid approach for the best results.
            </p>
          </div>

          {/* Screen Orientation and Resolution */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Screen Orientation and Resolution</h2>
            <p>
              Screen resolution values switch when the device orientation changes. For example, a mobile device with a resolution of 1080x1920 in portrait mode becomes 1920x1080 in landscape.
            </p>
            <p>
              Use the <code>orientation</code> media feature to apply styles accordingly:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`@media (orientation: portrait) {
  body {
    background-color: lightblue;
  }
}`}</code>
            </pre>
          </div>

          {/* Tools for Testing Screen Resolutions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Tools for Testing Screen Resolutions</h2>
            <p>
              Various tools can help simulate different screen resolutions and devices:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Chrome DevTools:</strong> Built-in device toolbar to test different resolutions and DPRs.</li>
              <li><strong>Responsively App:</strong> An open-source app to view multiple screen sizes at once.</li>
              <li><strong>BrowserStack:</strong> Cloud-based cross-device and cross-browser testing.</li>
              <li><strong>Screenfly:</strong> Online tool to view websites on various devices.</li>
            </ul>
          </div>

          {/* Real-World Design Considerations */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Real-World Design Considerations</h2>
            <p>
              Web developers often encounter challenges such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Breakpoints:</strong> Choosing the right breakpoints for different screen widths.</li>
              <li><strong>Touch vs Click:</strong> Designing for touch interaction on small screens vs mouse interaction on desktops.</li>
              <li><strong>Typography:</strong> Ensuring text remains legible across all screen sizes and DPIs.</li>
              <li><strong>Navigation:</strong> Adapting navigation UI (e.g., hamburger menus on mobile).</li>
              <li><strong>Accessibility:</strong> Ensuring content is readable for users with visual impairments or on older screens.</li>
            </ul>
          </div>

          {/* Viewport Meta Tag */}
          <div>
            <h2 className="text-lg font-semibold mb-2">The Viewport Meta Tag</h2>
            <p>
              The viewport meta tag ensures your site scales correctly on mobile devices. It looks like this:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code>
            </pre>
            <p>
              Without this tag, your site might render with a desktop layout on mobile, requiring zooming and horizontal scrolling.
            </p>
          </div>

          {/* Advanced Techniques */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Advanced Techniques for Handling Resolutions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Container Queries:</strong> A newer CSS feature to apply styles based on container size, not just viewport size.</li>
              <li><strong>Srcset and Sizes:</strong> Use <code>img</code> attributes to serve different images for different resolutions and screen widths.</li>
              <li><strong>Picture Element:</strong> Advanced HTML tag to serve different images for different scenarios (e.g., art direction).</li>
              <li><strong>Server-Side Detection:</strong> Use user-agent strings to deliver tailored content or redirections for different devices.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Screen resolution continues to be a critical aspect of web development, especially with the growing variety of devices and screen types. By understanding how resolutions affect layout, performance, and user experience — and by using responsive best practices — developers can create websites that look and function beautifully across all platforms.
            </p>
          </div>
                            {/* Device Pixel Ratio (DPR) and Its Impact */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Device Pixel Ratio (DPR) and Its Impact</h2>
            <p>
              Device Pixel Ratio (DPR) is the ratio between physical pixels and device-independent pixels (DIPs). A DPR of 2 means that for every 1 CSS pixel, the device uses 2 physical pixels in both width and height.
            </p>
            <p>
              This ratio affects how crisp images and elements appear. For instance, standard resolution images may look blurry on a high-DPR device unless scaled appropriately. You can detect DPR using:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`console.log(window.devicePixelRatio);`}</code>
            </pre>
            <p>
              Using responsive images, scalable vector graphics (SVGs), or CSS techniques like <code>background-size: cover;</code> help manage these variations.
            </p>
          </div>

          {/* Screen Resolution in Gaming and Media */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Screen Resolution in Gaming and Media</h2>
            <p>
              In gaming, resolution directly affects rendering quality and performance. Higher resolutions provide more detailed visuals but require stronger GPUs. Common gaming resolutions include 1080p, 1440p, and 4K.
            </p>
            <p>
              Streaming platforms like YouTube and Netflix also use adaptive streaming based on screen resolution and bandwidth, delivering 720p, 1080p, or 4K depending on the device.
            </p>
            <p>
              Developers creating multimedia or video-heavy websites must consider these resolutions to provide high-quality yet performant experiences.
            </p>
          </div>

          {/* Challenges with Unusual Screen Resolutions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Challenges with Unusual Screen Resolutions</h2>
            <p>
              Devices like foldables, ultra-wide monitors, or smart TVs introduce unusual resolutions and aspect ratios, such as 21:9 or dual-screen interfaces. These devices can cause layout issues if not considered during development.
            </p>
            <p>
              Web developers should test designs with a range of screen widths, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>360x800 — mid-range Android phones</li>
              <li>1024x600 — small tablets</li>
              <li>2560x1080 — ultra-wide displays</li>
              <li>3840x1080 — dual-monitor setups</li>
            </ul>
            <p>
              Flexbox and grid layout systems help maintain adaptability in these scenarios.
            </p>
          </div>

          {/* The Importance of Aspect Ratio */}
          <div>
            <h2 className="text-lg font-semibold mb-2">The Importance of Aspect Ratio</h2>
            <p>
              Aspect ratio is the width-to-height proportion of a screen. Common ratios include 16:9, 4:3, and 21:9. Understanding aspect ratio is important when embedding media or designing layouts.
            </p>
            <p>
              CSS offers tools to maintain consistent aspect ratios using the <code>aspect-ratio</code> property:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`img {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}`}</code>
            </pre>
            <p>
              This ensures images and videos scale without distortion, regardless of screen resolution.
            </p>
          </div>

          {/* Media Queries Best Practices */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Media Queries Best Practices</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Start with a mobile-first approach: base styles for smaller screens first.</li>
              <li>Use min-width instead of max-width for better scaling up.</li>
              <li>Group breakpoints logically (e.g., mobile, tablet, desktop).</li>
              <li>Consider adding dark mode queries with <code>prefers-color-scheme</code>.</li>
              <li>Limit media queries to what's necessary to avoid bloated CSS.</li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}`}</code>
            </pre>
          </div>

          {/* Using CSS Grid and Flexbox Responsively */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using CSS Grid and Flexbox Responsively</h2>
            <p>
              Modern layout systems like CSS Grid and Flexbox simplify building responsive designs. They allow dynamic adaptation based on content and screen resolution.
            </p>
            <p>
              For example, creating a flexible grid:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}`}</code>
            </pre>
            <p>
              This layout adapts to available screen width, providing responsive behavior without needing multiple media queries.
            </p>
          </div>

          {/* Progressive Enhancement for Older Devices */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Progressive Enhancement for Older Devices</h2>
            <p>
              Not all users have the latest devices or high-resolution displays. Web developers should practice progressive enhancement — building base functionality first, then layering advanced features for capable devices.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use semantic HTML for accessible, fallback-friendly content.</li>
              <li>Ensure text and buttons are readable even at low resolutions.</li>
              <li>Don’t rely solely on high-resolution media; provide alternatives.</li>
              <li>Test with reduced motion or high contrast modes enabled.</li>
            </ul>
          </div>

          {/* Performance Optimization for High Resolutions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Performance Optimization for High Resolutions</h2>
            <p>
              Higher resolutions demand more processing power and bandwidth. Developers must optimize performance by:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Compressing images using formats like WebP or AVIF.</li>
              <li>Lazy-loading images and components with <code>loading="lazy"</code>.</li>
              <li>Using responsive images to prevent oversized downloads.</li>
              <li>Minifying and bundling assets for faster delivery.</li>
            </ul>
            <p>
              A fast-loading site enhances the user experience, especially on mobile or lower-end devices.
            </p>
          </div>

          {/* Mobile-First vs Desktop-First */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Mobile-First vs Desktop-First Design</h2>
            <p>
              A mobile-first design strategy begins with the smallest screens, ensuring the core experience is optimized before layering enhancements for larger screens.
            </p>
            <p>
              Conversely, desktop-first design starts with large screen layouts, which are then scaled down. In today’s mobile-dominant world, mobile-first is generally preferred.
            </p>
            <p>
              Example of mobile-first media query:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`.nav-menu {
  display: none;
}

@media (min-width: 768px) {
  .nav-menu {
    display: flex;
  }
}`}</code>
            </pre>
          </div>

          {/* Final Thoughts on Screen Resolutions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Final Thoughts</h2>
            <p>
              Screen resolution is more than just a technical detail — it influences layout, design, performance, accessibility, and user satisfaction. By staying informed about device trends and practicing adaptive strategies, web developers can create interfaces that feel natural, fast, and beautiful regardless of screen size or density.
            </p>
            <p>
              In summary, always test across a range of resolutions, keep user experience in focus, and embrace responsive, performance-minded practices.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ScreenResolutionStats;