import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const PlantTrees: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
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
                          <BreadcrumbPage>Plant Trees</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                   </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Plant Trees to Help the Environment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Planting trees is one of the simplest yet most impactful actions individuals and communities can take to protect the environment and combat climate change. Trees absorb carbon dioxide (CO₂), release oxygen, and provide essential habitat for wildlife.
          </p>

          <h4 className="font-medium text-base">Benefits of Planting Trees</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Carbon Sequestration:</strong> Trees act as carbon sinks, helping reduce greenhouse gases in the atmosphere.</li>
            <li><strong>Air Quality Improvement:</strong> Trees filter pollutants and provide cleaner air for humans and animals.</li>
            <li><strong>Soil Health:</strong> Their roots prevent erosion and promote water retention in soil.</li>
            <li><strong>Temperature Regulation:</strong> Tree cover can reduce urban heat islands by providing shade and cooling.</li>
            <li><strong>Wildlife Habitat:</strong> Forests and tree-lined areas support biodiversity by offering shelter and food sources.</li>
          </ul>

          <h4 className="font-medium text-base">How You Can Help</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Participate in local tree planting drives or community reforestation programs.</li>
            <li>Donate to organizations focused on forest conservation and tree planting worldwide.</li>
            <li>Plant trees in your own garden, school, or neighborhood if space permits.</li>
            <li>Educate others about the benefits of trees and inspire collective action.</li>
          </ul>

          <p>
            Whether you plant a single tree in your backyard or support global reforestation efforts, every tree matters. Over time, this small action contributes to a greener, healthier, and more sustainable planet for future generations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlantTrees;
