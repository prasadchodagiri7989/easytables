
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BasicElectricalTerms = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Electrical Terms</CardTitle>
          <CardDescription>Essential terminology for understanding electrical concepts</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="voltage">
              <AccordionTrigger>Voltage (V)</AccordionTrigger>
              <AccordionContent>
                <p>Voltage is the electrical pressure or potential difference that causes current to flow in a circuit. It's measured in volts (V) and represents the energy per unit charge.</p>
                <p className="mt-2"><strong>Formula:</strong> V = IR (Voltage = Current × Resistance)</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="current">
              <AccordionTrigger>Current (I)</AccordionTrigger>
              <AccordionContent>
                <p>Current is the flow of electric charge through a conductor. It's measured in amperes (A) and represents the rate at which charge flows.</p>
                <p className="mt-2"><strong>Formula:</strong> I = V/R (Current = Voltage ÷ Resistance)</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="resistance">
              <AccordionTrigger>Resistance (R)</AccordionTrigger>
              <AccordionContent>
                <p>Resistance is the opposition to the flow of electric current. It's measured in ohms (Ω) and depends on the material, length, and cross-sectional area of a conductor.</p>
                <p className="mt-2"><strong>Formula:</strong> R = V/I (Resistance = Voltage ÷ Current)</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="power">
              <AccordionTrigger>Power (P)</AccordionTrigger>
              <AccordionContent>
                <p>Power is the rate at which electrical energy is transferred or converted. It's measured in watts (W).</p>
                <p className="mt-2"><strong>Formula:</strong> P = VI (Power = Voltage × Current)</p>
                <p className="mt-1">Alternative formulas: P = I²R or P = V²/R</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="energy">
              <AccordionTrigger>Energy (E)</AccordionTrigger>
              <AccordionContent>
                <p>Electrical energy is the energy derived from electric potential energy or kinetic energy. It's measured in joules (J) or kilowatt-hours (kWh).</p>
                <p className="mt-2"><strong>Formula:</strong> E = P × t (Energy = Power × time)</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="capacitance">
              <AccordionTrigger>Capacitance (C)</AccordionTrigger>
              <AccordionContent>
                <p>Capacitance is the ability of a body to store an electrical charge. It's measured in farads (F).</p>
                <p className="mt-2"><strong>Formula:</strong> C = Q/V (Capacitance = Charge ÷ Voltage)</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="inductance">
              <AccordionTrigger>Inductance (L)</AccordionTrigger>
              <AccordionContent>
                <p>Inductance is the property of an electrical conductor by which a change in current through it induces an electromotive force. It's measured in henries (H).</p>
                <p className="mt-2"><strong>Formula:</strong> V = L × (dI/dt)</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="frequency">
              <AccordionTrigger>Frequency (f)</AccordionTrigger>
              <AccordionContent>
                <p>Frequency is the number of occurrences of a repeating event per unit of time. In electricity, it refers to the number of cycles per second in an AC signal. It's measured in hertz (Hz).</p>
                <p className="mt-2"><strong>Formula:</strong> f = 1/T (Frequency = 1 ÷ Period)</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default BasicElectricalTerms;
