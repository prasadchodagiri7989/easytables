import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const GreenHostingComparison: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Green Hosting Providers Comparison</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Green web hosting is an eco-conscious alternative to traditional hosting, aimed at reducing carbon emissions and promoting sustainability. These providers invest in renewable energy, carbon offset programs, or energy-efficient data centers. Here's a comparison of some well-known green hosting providers:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-4">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-2 border">Provider</th>
                  <th className="text-left p-2 border">Green Initiatives</th>
                  <th className="text-left p-2 border">Hosting Features</th>
                  <th className="text-left p-2 border">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">GreenGeeks</td>
                  <td className="p-2 border">300% renewable energy match, carbon-reducing practices</td>
                  <td className="p-2 border">Shared, VPS, WordPress Hosting</td>
                  <td className="p-2 border">$2.95/month</td>
                </tr>
                <tr>
                  <td className="p-2 border">DreamHost</td>
                  <td className="p-2 border">Data centers powered by renewable energy, energy-efficient cooling</td>
                  <td className="p-2 border">Shared, Cloud, VPS, WordPress</td>
                  <td className="p-2 border">$2.59/month</td>
                </tr>
                <tr>
                  <td className="p-2 border">A2 Hosting</td>
                  <td className="p-2 border">Carbon offsetting, partnership with Carbonfund.org</td>
                  <td className="p-2 border">Shared, VPS, Dedicated, WordPress</td>
                  <td className="p-2 border">$2.99/month</td>
                </tr>
                <tr>
                  <td className="p-2 border">HostPapa</td>
                  <td className="p-2 border">Green energy powered offices and data centers</td>
                  <td className="p-2 border">Shared, WordPress, VPS, Reseller</td>
                  <td className="p-2 border">$2.95/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Choosing a green hosting provider helps lower your website’s environmental impact while supporting sustainable technology. If your project values eco-friendliness, opting for a green host is a small step that contributes to a larger change.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GreenHostingComparison;
