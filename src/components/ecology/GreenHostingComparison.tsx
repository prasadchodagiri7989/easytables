import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

// You can include this in your <Helmet> component or similar in your app
import { Helmet } from "react-helmet";

<Helmet>
  <title>Green Web Hosting Comparison | Eco-Friendly Hosting Providers</title>
  <meta
    name="description"
    content="Compare top green web hosting providers like GreenGeeks, DreamHost, A2 Hosting, and HostPapa. Learn about their eco-friendly initiatives, features, and pricing."
  />
  <meta
    name="keywords"
    content="green hosting comparison, eco-friendly web hosting, sustainable hosting, green web hosts, renewable energy hosting, green geeks, hostpapa, dreamhost, carbon neutral hosting"
  />
  <meta property="og:title" content="Green Hosting Providers Comparison" />
  <meta
    property="og:description"
    content="Find the best green hosting providers and compare their renewable energy efforts, features, and prices. Make your website more sustainable today."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://yourdomain.com/green-hosting-comparison" />
  <meta property="og:image" content="https://yourdomain.com/images/green-hosting-cover.png" />
  <link rel="canonical" href="https://yourdomain.com/green-hosting-comparison" />
</Helmet>


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
