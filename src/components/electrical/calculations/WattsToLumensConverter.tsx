import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToLumensConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(10); // Default 10 Watts
  const [efficacy, setEfficacy] = useState<number>(80); // Default luminous efficacy 80 lm/W

  const calculateLumens = (watts: number, efficacy: number) => {
    return watts * efficacy;
  };

  const lumens = calculateLumens(watts, efficacy);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watts (W) to Lumens (lm)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert electrical power in watts (W) to light output in lumens (lm). 
            This conversion is helpful when comparing the brightness of different lighting products.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Watts to Lumens Calculation</h3>
            <p className="mt-2">
              Lumens measure the amount of visible light produced, while watts measure energy consumption. 
              The conversion depends on the light source's luminous efficacy.
            </p>
          </div>

          {/* Watts to Lumens Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The luminous flux \( \Phi \) in lumens (lm) is calculated by multiplying the power \( P \) in watts (W) 
              by the luminous efficacy \( \eta \) in lumens per watt (lm/W):
            </p>
            <p className="mt-2">
              <code>Lumens = Watts × Luminous Efficacy</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Watts (W)</strong> = Electrical power</li>
              <li><strong>Luminous Efficacy (lm/W)</strong> = Light output per watt consumed</li>
              <li><strong>Lumens (lm)</strong> = Total visible light output</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a light bulb rated at {watts}W with a luminous efficacy of {efficacy} lm/W. 
              The total light output would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">Lumens = Watts × Efficacy</p>
              <p className="mt-2">
                Lumens = {watts} W × {efficacy} lm/W = {lumens} lm
              </p>
            </div>
            <p className="mt-2">
              Therefore, a {watts} watt bulb with an efficacy of {efficacy} lm/W produces {lumens} lumens of light.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* 5 W LED bulb with 100 lm/W:
                <p className="bg-gray-100 p-2">Lumens = 5 × 100 = 500 lm</p>
              </li>
              <li>
                *Example 2:* 15 W CFL bulb with 65 lm/W:
                <p className="bg-gray-100 p-2">Lumens = 15 × 65 = 975 lm</p>
              </li>
              <li>
                *Example 3:* 60 W incandescent bulb with 15 lm/W:
                <p className="bg-gray-100 p-2">Lumens = 60 × 15 = 900 lm</p>
              </li>
              <li>
                *Example 4:* 8 W LED spotlight with 120 lm/W:
                <p className="bg-gray-100 p-2">Lumens = 8 × 120 = 960 lm</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Different light sources have different luminous efficacies.</li>
              <li>LEDs are much more efficient (higher lm/W) than incandescent or fluorescent lights.</li>
              <li>This method gives an approximate result; check manufacturer specifications for exact lumens.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watts to lumens, multiply the power rating by the light source's luminous efficacy. 
              Understanding this helps you choose the most efficient and brightest lighting solutions.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToLumensConverter;
