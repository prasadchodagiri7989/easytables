import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const HowToReduceCarbonFootprint: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
       <Breadcrumb className="mb-4">
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <Link to="/">Home</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <Link to="/ecology/all">Ecology</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Reduce Your Carbon Footprint</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                   </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>How to Reduce Your Carbon Footprint</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Reducing your carbon footprint means actively working to decrease the amount of greenhouse gases you emit into the atmosphere. It's one of the most effective ways individuals can help fight climate change. From transportation to diet, there are multiple ways to make eco-conscious choices.
          </p>
          <p>
            <strong>1. Travel smarter:</strong> Use public transport, bike, walk, or carpool whenever possible. Avoid unnecessary flights, and if you do fly, consider carbon offset programs.
          </p>
          <p>
            <strong>2. Conserve energy:</strong> Switch to energy-efficient appliances and LED lighting. Unplug electronics when not in use and consider renewable energy sources like solar panels.
          </p>
          <p>
            <strong>3. Eat sustainably:</strong> Eating more plant-based meals and reducing food waste can significantly lower your carbon footprint. Locally sourced, seasonal foods are also more sustainable.
          </p>
          <p>
            <strong>4. Reduce, Reuse, Recycle:</strong> Buy only what you need, repurpose items, and recycle whenever you can. Avoid single-use plastics and aim for sustainable packaging.
          </p>
          <p>
            <strong>5. Shop responsibly:</strong> Support businesses that prioritize sustainability and ethical practices. Fast fashion, for example, has a huge environmental cost.
          </p>
          <p>
            <strong>6. Water usage:</strong> Fix leaks, install low-flow fixtures, and be mindful of your water usage in daily routines.
          </p>
          <p>
            These small lifestyle changes, when practiced consistently, can lead to a significant reduction in your environmental impact. Every conscious choice adds up and contributes to a healthier planet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowToReduceCarbonFootprint;
