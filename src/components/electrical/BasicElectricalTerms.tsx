import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const BasicElectricalTerms = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Basic Electrical Terms and Concepts</h1>

      <Tabs defaultValue="fundamentals" className="w-full">
      <TabsList className="flex flex-col sm:grid sm:grid-cols-4 gap-2 mb-4">
  <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
  <TabsTrigger value="components">Components</TabsTrigger>
  <TabsTrigger value="measurements">Measurements</TabsTrigger>
  <TabsTrigger value="circuits">Circuits</TabsTrigger>
</TabsList>


        <TabsContent value="fundamentals">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="current">
              <AccordionTrigger>Current (I) – Amperes (A)</AccordionTrigger>
              <AccordionContent>
                The flow of electric charge through a conductor. Current is measured in amperes (A) and represents the rate at which charge flows.
                <br /><span className="text-sm mt-2 block">Formula: I = Q / t</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="voltage">
              <AccordionTrigger>Voltage (V) – Volts (V)</AccordionTrigger>
              <AccordionContent>
                The electric potential difference between two points. It’s the "pressure" that pushes current through a circuit.
                <br /><span className="text-sm mt-2 block">Formula: V = W / Q</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resistance">
              <AccordionTrigger>Resistance (R) – Ohms (Ω)</AccordionTrigger>
              <AccordionContent>
                The opposition to current flow in a conductor. Materials with high resistance impede current flow.
                <br /><span className="text-sm mt-2 block">Formula: R = V / I</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="power">
              <AccordionTrigger>Power (P) – Watts (W)</AccordionTrigger>
              <AccordionContent>
                The rate of energy transfer in a circuit.
                <br /><span className="text-sm mt-2 block">Formula: P = VI or I²R or V²/R</span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="components">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="resistor">
              <AccordionTrigger>Resistor</AccordionTrigger>
              <AccordionContent>
                Implements electrical resistance. Used to reduce current flow, divide voltage, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="capacitor">
              <AccordionTrigger>Capacitor</AccordionTrigger>
              <AccordionContent>
                Stores electrical energy in an electric field. Used for filtering, timing, and energy storage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inductor">
              <AccordionTrigger>Inductor</AccordionTrigger>
              <AccordionContent>
                Stores energy in a magnetic field. Used in filters and oscillators.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="diode">
              <AccordionTrigger>Diode</AccordionTrigger>
              <AccordionContent>
                Allows current to flow in one direction. Used in rectification and voltage regulation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="transistor">
              <AccordionTrigger>Transistor</AccordionTrigger>
              <AccordionContent>
                Amplifies or switches signals. A building block of modern electronics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ic">
              <AccordionTrigger>Integrated Circuit (IC)</AccordionTrigger>
              <AccordionContent>
                A chip that contains many tiny components like transistors and resistors on silicon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="measurements">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="multimeter">
              <AccordionTrigger>Multimeter</AccordionTrigger>
              <AccordionContent>
                Measures voltage, current, resistance, and more in one device.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="oscilloscope">
              <AccordionTrigger>Oscilloscope</AccordionTrigger>
              <AccordionContent>
                Graphically displays voltage signals over time—great for analyzing waveforms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="frequency">
              <AccordionTrigger>Frequency – Hertz (Hz)</AccordionTrigger>
              <AccordionContent>
                The number of cycles per second in AC. Standard unit: hertz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="impedance">
              <AccordionTrigger>Impedance – Ohms (Ω)</AccordionTrigger>
              <AccordionContent>
                Resistance to AC combining both resistance and reactance (inductive/capacitive).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="circuits">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="series">
              <AccordionTrigger>Series Circuit</AccordionTrigger>
              <AccordionContent>
                Components connected in a single path. Same current flows, voltage is divided.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="parallel">
              <AccordionTrigger>Parallel Circuit</AccordionTrigger>
              <AccordionContent>
                Components connected across same two nodes. Same voltage, current is divided.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kcl">
              <AccordionTrigger>Kirchhoff's Current Law (KCL)</AccordionTrigger>
              <AccordionContent>
                Sum of currents entering a node = sum of currents leaving the node.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kvl">
              <AccordionTrigger>Kirchhoff's Voltage Law (KVL)</AccordionTrigger>
              <AccordionContent>
                The sum of all voltages around a closed loop equals zero.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BasicElectricalTerms;
