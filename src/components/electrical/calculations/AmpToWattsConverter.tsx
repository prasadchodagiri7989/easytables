import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const AmpToWattsConverter: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ampParam = searchParams.get("amps");
  const amps = ampParam ? parseFloat(ampParam) : 1; // Default to 1A if no param

  const calculateWatts = (amps: number, volts: number, powerFactor = 1) => {
    return powerFactor * amps * volts;
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
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
                              <Link to="/electrical-calculations">Electrical Calculations</Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbPage>Amps to Watts</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                     </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>How to Convert Amps to Watts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction */}
          <section>
            <p>
              To convert electric current in amps (A) to electric power in watts (W), you need to know the voltage (V) and the type of power supply (DC or AC). The general formula for calculating watts is:
            </p>
          </section>

          {/* Formula */}
          <section className="text-center">
            <h3 className="text-lg font-semibold">Formula</h3>
            <p className="mt-2">
              For <strong>DC power</strong>:
              <br />
              <code>watts = amps × volts</code>
            </p>
            <p className="mt-4">
              For <strong>AC power</strong>:
              <br />
              <code>watts = PF × amps × volts</code>
            </p>
            <p className="mt-4">
              Where <strong>PF</strong> is the power factor, a number between 0 and 1 accounting for the phase difference between voltage and current.
            </p>
          </section>

          {/* Example with DC */}
          <section>
            <h2 className="text-lg font-semibold mb-2">{amps}A to Watts Calculation (DC Power Supply)</h2>
            <p>
              For a DC power supply with a voltage of 12V:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold">watts = amps × volts</p>
              <p className="mt-2">
                watts = {amps}A × 12V = {calculateWatts(amps, 12)}W
              </p>
            </div>
            <p className="mt-2">
              So, {amps} amp{amps !== 1 ? "s" : ""} at 12 volts DC result{amps !== 1 ? "" : "s"} in {calculateWatts(amps, 12)} watts of power.
            </p>
          </section>

          {/* Example with AC */}
          <section>
            <h2 className="text-lg font-semibold mb-4">{amps}A to Watts Calculation (AC Power Supply)</h2>

            {/* 120V AC */}
            <div>
              <h3 className="text-md font-semibold mb-2">Voltage: 120V AC</h3>

              {/* Resistive load */}
              <p>For a resistive load (PF = 1):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 1 × {amps}A × 120V = {calculateWatts(amps, 120, 1)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 120V results in {calculateWatts(amps, 120, 1)} watts for a resistive load.
              </p>

              {/* Inductive load */}
              <p className="mt-4">For an inductive load (PF = 0.8):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 0.8 × {amps}A × 120V = {calculateWatts(amps, 120, 0.8)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 120V results in {calculateWatts(amps, 120, 0.8)} watts for an inductive load.
              </p>
            </div>

            {/* 230V AC */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-2">Voltage: 230V AC</h3>

              {/* Resistive load */}
              <p>For a resistive load (PF = 1):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 1 × {amps}A × 230V = {calculateWatts(amps, 230, 1)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 230V results in {calculateWatts(amps, 230, 1)} watts for a resistive load.
              </p>

              {/* Inductive load */}
              <p className="mt-4">For an inductive load (PF = 0.8):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 0.8 × {amps}A × 230V = {calculateWatts(amps, 230, 0.8)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 230V results in {calculateWatts(amps, 230, 0.8)} watts for an inductive load.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              In DC systems, you simply multiply amps by voltage to get watts. In AC systems, you must also account for the power factor, which adjusts for the type of load. Always ensure you know both the voltage and power factor for accurate conversions.
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpToWattsConverter;
