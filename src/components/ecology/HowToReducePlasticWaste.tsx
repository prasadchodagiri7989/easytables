import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const HowToReducePlasticWaste: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>How to Reduce Plastic Waste Pollution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Plastic pollution is a growing environmental concern, with millions of tons of plastic waste ending up in oceans, landfills, and ecosystems each year. Reducing plastic waste starts with everyday habits and mindful consumption choices.
          </p>

          <p>
            <strong>1. Avoid single-use plastics:</strong> Ditch disposable straws, cutlery, cups, and bags. Opt for reusable alternatives like stainless steel straws, cloth bags, and durable containers.
          </p>

          <p>
            <strong>2. Reuse and repurpose:</strong> Give plastic items a second life by reusing them creatively. Glass jars, old bottles, and containers can serve many purposes at home.
          </p>

          <p>
            <strong>3. Choose sustainable packaging:</strong> When shopping, look for products with minimal or compostable packaging. Buy in bulk to reduce plastic wrappers and containers.
          </p>

          <p>
            <strong>4. Say no to microplastics:</strong> Avoid cosmetics and products that contain microbeads. These tiny particles are harmful to marine life and water systems.
          </p>

          <p>
            <strong>5. Support plastic-free brands:</strong> Shop from companies that offer eco-friendly alternatives and commit to reducing their plastic footprint in production and packaging.
          </p>

          <p>
            <strong>6. Educate and advocate:</strong> Spread awareness about plastic pollution in your community. Join local clean-up drives and support legislation that restricts single-use plastics.
          </p>

          <p>
            Every action counts. By making small yet impactful choices in your daily life, you can contribute to a cleaner, healthier planet and help turn the tide against plastic pollution.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowToReducePlasticWaste;
