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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

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

        </CardContent>
      </Card>
    </div>
  );
};

export default ScreenResolutionStats;