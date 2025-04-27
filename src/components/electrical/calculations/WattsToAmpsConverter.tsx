import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToAmpsConverter: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const wattsQuery = searchParams.get("watts");

  const initialWatts = wattsQuery ? parseFloat(wattsQuery) : 1;

  const [voltage, setVoltage] = useState<number>(12); // Default voltage: 12V
  const [powerFactor, setPowerFactor] = useState<number>(1); // Default PF: 1 (pure resistive)
  const [watts, setWatts] = useState<number>(initialWatts); // Default wattage from query or 1W


  const calculateAmps = (watts: number, voltage: number, powerFactor: number) => {
    return watts / (powerFactor * voltage);
  };

  const amps = calculateAmps(watts, voltage, powerFactor);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <Card>
        <CardHeader>
          <CardTitle>How to Convert Watts to Amps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <section>
            <p>
              To convert electric power in watts (W) to electric current in amps (A), you need the voltage (V) and, for AC systems, the power factor (PF). The basic formulas are:
            </p>
          </section>

          {/* Formula */}
          <section className="text-center">
            <h3 className="text-lg font-semibold">Formula</h3>
            <p className="mt-2">
              For <strong>DC power</strong>:<br />
              <code>amps = watts ÷ volts</code>
            </p>
            <p className="mt-4">
              For <strong>AC power</strong>:<br />
              <code>amps = watts ÷ (PF × volts)</code>
            </p>
            <p className="mt-2">
              <strong>PF</strong> (Power Factor) is a value between 0 and 1 that accounts for phase differences between voltage and current.
            </p>
          </section>

          {/* Example with DC */}
          <section>
            <h2 className="text-lg font-semibold mb-2">{watts}W to Amps Calculation (DC Power Supply)</h2>
            <p>
              For a DC power supply with a voltage of {voltage}V:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">amps = watts ÷ volts</p>
              <p className="mt-2">
                amps = {watts}W ÷ {voltage}V = {calculateAmps(watts, voltage, 1).toFixed(6)}A
              </p>
            </div>
            <p className="mt-2">
              So, with {voltage}V, {watts} watt{watts !== 1 ? "s" : ""} result{watts !== 1 ? "" : "s"} in approximately {calculateAmps(watts, voltage, 1).toFixed(6)} amps.
            </p>
          </section>

          {/* Example with AC */}
          <section>
            <h2 className="text-lg font-semibold mb-2">{watts}W to Amps Calculation (AC Power Supply)</h2>

            {/* 120V AC */}
            <div>
              <h3 className="text-md font-semibold mb-2">Voltage: 120V AC</h3>
              <p>For a resistive load (PF = 1):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-semibold">amps = watts ÷ (PF × volts)</p>
                <p className="mt-2">
                  amps = {watts}W ÷ (1 × 120V) = {calculateAmps(watts, 120, 1).toFixed(6)}A
                </p>
              </div>
              <p className="mt-2">
                For a purely resistive load at 120V, {watts} watt equals about {calculateAmps(watts, 120, 1).toFixed(6)} amps.
              </p>

              <p className="mt-4">For an inductive load (PF = 0.8):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-semibold">amps = watts ÷ (PF × volts)</p>
                <p className="mt-2">
                  amps = {watts}W ÷ (0.8 × 120V) = {calculateAmps(watts, 120, 0.8).toFixed(6)}A
                </p>
              </div>
              <p className="mt-2">
                For an inductive load at 120V, {watts} watt equals about {calculateAmps(watts, 120, 0.8).toFixed(6)} amps.
              </p>
            </div>

            {/* 230V AC */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-2">Voltage: 230V AC</h3>
              <p>For a resistive load (PF = 1):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-semibold">amps = watts ÷ (PF × volts)</p>
                <p className="mt-2">
                  amps = {watts}W ÷ (1 × 230V) = {calculateAmps(watts, 230, 1).toFixed(6)}A
                </p>
              </div>
              <p className="mt-2">
                For a purely resistive load at 230V, {watts} watt equals about {calculateAmps(watts, 230, 1).toFixed(6)} amps.
              </p>

              <p className="mt-4">For an inductive load (PF = 0.8):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-semibold">amps = watts ÷ (PF × volts)</p>
                <p className="mt-2">
                  amps = {watts}W ÷ (0.8 × 230V) = {calculateAmps(watts, 230, 0.8).toFixed(6)}A
                </p>
              </div>
              <p className="mt-2">
                For an inductive load at 230V, {watts} watt equals about {calculateAmps(watts, 230, 0.8).toFixed(6)} amps.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              In DC systems, you simply divide watts by voltage to obtain the current in amps. In AC systems, the power factor also affects the result. Ensure you know both the voltage and power factor for accurate conversions.
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToAmpsConverter;
