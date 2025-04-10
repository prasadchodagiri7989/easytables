
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BasicElectricalTerms = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Basic Electrical Terms and Concepts</h1>
      
      <Tabs defaultValue="fundamentals" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="measurements">Measurements</TabsTrigger>
          <TabsTrigger value="circuits">Circuits</TabsTrigger>
        </TabsList>
        
        <TabsContent value="fundamentals">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Current (I)</CardTitle>
                <CardDescription>Measured in Amperes (A)</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The flow of electric charge through a conductor. Current is measured in amperes (A) and represents the rate at which charge flows.</p>
                <p className="mt-2 text-sm">Formula: I = Q/t, where Q is charge and t is time.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Voltage (V)</CardTitle>
                <CardDescription>Measured in Volts (V)</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The electric potential difference between two points in a circuit. Voltage is the "pressure" that pushes electric current through a circuit.</p>
                <p className="mt-2 text-sm">Formula: V = W/Q, where W is work done and Q is charge.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Resistance (R)</CardTitle>
                <CardDescription>Measured in Ohms (Ω)</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The opposition to the flow of electric current in a conductor. Materials with high resistance impede current flow.</p>
                <p className="mt-2 text-sm">Formula: R = V/I (Ohm's Law).</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Power (P)</CardTitle>
                <CardDescription>Measured in Watts (W)</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The rate at which electrical energy is transferred or converted in a circuit.</p>
                <p className="mt-2 text-sm">Formula: P = VI or P = I²R or P = V²/R.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="components">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Resistor</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A passive component that implements electrical resistance in a circuit. Used to reduce current flow, adjust signal levels, divide voltages, and more.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Capacitor</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A component that stores electrical energy in an electric field. Used for filtering, coupling/decoupling, timing, and energy storage.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Inductor</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A component that stores energy in a magnetic field when electric current flows through it. Used in filters, oscillators, and energy storage.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Diode</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A semiconductor device that allows current to flow in one direction only. Used for rectification, signal demodulation, and voltage regulation.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Transistor</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A semiconductor device used to amplify or switch electronic signals. The fundamental building block of modern electronic devices.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Integrated Circuit (IC)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A set of electronic circuits on a small flat piece of semiconductor material, typically silicon. Can contain millions of transistors, resistors, capacitors, etc.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="measurements">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Multimeter</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A measuring instrument that combines several measurement functions in one unit. It can measure voltage, current, resistance, and more.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Oscilloscope</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A device that graphically displays varying signal voltages as a function of time. Essential for analyzing waveforms and troubleshooting electronic circuits.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Frequency</CardTitle>
                <CardDescription>Measured in Hertz (Hz)</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The number of complete cycles per second in an alternating current. The standard unit is hertz (Hz).</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Impedance</CardTitle>
                <CardDescription>Measured in Ohms (Ω)</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The measure of opposition to alternating current. It combines resistance and reactance (inductive and capacitive).</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="circuits">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Series Circuit</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A circuit where components are connected end-to-end, forming a single path for current. The current is the same through all components, but the voltage is divided.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Parallel Circuit</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A circuit where components are connected across the same two nodes, forming multiple paths for current. The voltage is the same across all components, but the current is divided.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Kirchhoff's Current Law (KCL)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The sum of all currents entering a node equals the sum of all currents leaving that node. In other words, the total current in a closed system is conserved.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Kirchhoff's Voltage Law (KVL)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The sum of all voltages around any closed loop in a circuit is zero. In other words, the total voltage in a closed loop is conserved.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BasicElectricalTerms;
