import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HowToSaveFuel: React.FC = () => {
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
            <BreadcrumbPage>How to Save Fuel</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>How to Save Fuel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Fuel is a valuable and finite resource, and using it efficiently not only saves money but also reduces harmful emissions. Here are practical tips to help you conserve fuel in your everyday life:
          </p>

          <p>
            <strong>1. Drive smoothly:</strong> Avoid rapid acceleration and hard braking. Gentle driving reduces engine strain and fuel consumption significantly.
          </p>

          <p>
            <strong>2. Maintain proper tire pressure:</strong> Under-inflated tires increase rolling resistance, causing your vehicle to use more fuel. Check tire pressure regularly and keep them inflated to the recommended level.
          </p>

          <p>
            <strong>3. Limit idling time:</strong> Turn off your engine if you're waiting for more than a minute. Idling consumes more fuel than restarting the engine.
          </p>

          <p>
            <strong>4. Reduce vehicle weight:</strong> Extra weight in your car requires more fuel. Remove unnecessary items from your trunk and avoid carrying bulky loads unless needed.
          </p>

          <p>
            <strong>5. Plan your trips:</strong> Combine errands into one outing, choose the most efficient routes, and avoid rush-hour traffic when possible.
          </p>

          <p>
            <strong>6. Use cruise control on highways:</strong> Maintaining a steady speed improves fuel efficiency. Cruise control is especially helpful on long, flat stretches of road.
          </p>

          <p>
            <strong>7. Keep your car well-maintained:</strong> Regular oil changes, clean air filters, and timely engine checks improve your car’s performance and fuel economy.
          </p>

          <p>
            By adopting these habits, you can reduce fuel usage, lower your carbon footprint, and contribute to a cleaner, more sustainable future.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowToSaveFuel;
