
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Zap, Activity, Gauge } from "lucide-react";

export const OhmsLawCalculator = () => {
  const [voltage, setVoltage] = useState<number | "">("");
  const [current, setCurrent] = useState<number | "">("");
  const [resistance, setResistance] = useState<number | "">("");
  const [power, setPower] = useState<number | "">("");
  const [calcMode, setCalcMode] = useState<'voltage' | 'current' | 'resistance' | 'power'>('voltage');

  const calculateOhmsLaw = () => {
    try {
      if (calcMode === 'voltage') {
        if (typeof current === 'number' && typeof resistance === 'number') {
          const result = current * resistance;
          setVoltage(parseFloat(result.toFixed(4)));
          setPower(parseFloat((current * current * resistance).toFixed(4)));
          toast.success("Voltage calculated", {
            description: `V = I × R = ${current} × ${resistance} = ${result.toFixed(4)} V`
          });
        } else {
          toast.error("Please enter valid current and resistance values");
        }
      } 
      else if (calcMode === 'current') {
        if (typeof voltage === 'number' && typeof resistance === 'number' && resistance !== 0) {
          const result = voltage / resistance;
          setCurrent(parseFloat(result.toFixed(4)));
          setPower(parseFloat((voltage * voltage / resistance).toFixed(4)));
          toast.success("Current calculated", {
            description: `I = V / R = ${voltage} / ${resistance} = ${result.toFixed(4)} A`
          });
        } else {
          toast.error("Please enter valid voltage and non-zero resistance values");
        }
      } 
      else if (calcMode === 'resistance') {
        if (typeof voltage === 'number' && typeof current === 'number' && current !== 0) {
          const result = voltage / current;
          setResistance(parseFloat(result.toFixed(4)));
          setPower(parseFloat((voltage * current).toFixed(4)));
          toast.success("Resistance calculated", {
            description: `R = V / I = ${voltage} / ${current} = ${result.toFixed(4)} Ω`
          });
        } else {
          toast.error("Please enter valid voltage and non-zero current values");
        }
      } 
      else if (calcMode === 'power') {
        if (typeof voltage === 'number' && typeof current === 'number') {
          const result = voltage * current;
          setPower(parseFloat(result.toFixed(4)));
          setResistance(parseFloat((voltage / current).toFixed(4)));
          toast.success("Power calculated", {
            description: `P = V × I = ${voltage} × ${current} = ${result.toFixed(4)} W`
          });
        } else if (typeof current === 'number' && typeof resistance === 'number') {
          const result = current * current * resistance;
          setPower(parseFloat(result.toFixed(4)));
          setVoltage(parseFloat((current * resistance).toFixed(4)));
          toast.success("Power calculated", {
            description: `P = I² × R = ${current}² × ${resistance} = ${result.toFixed(4)} W`
          });
        } else if (typeof voltage === 'number' && typeof resistance === 'number' && resistance !== 0) {
          const result = voltage * voltage / resistance;
          setPower(parseFloat(result.toFixed(4)));
          setCurrent(parseFloat((voltage / resistance).toFixed(4)));
          toast.success("Power calculated", {
            description: `P = V² / R = ${voltage}² / ${resistance} = ${result.toFixed(4)} W`
          });
        } else {
          toast.error("Please enter either voltage and current, current and resistance, or voltage and resistance");
        }
      }
    } catch (error) {
      toast.error("Calculation error", {
        description: "Please check your input values and try again"
      });
    }
  };

  const resetValues = () => {
    setVoltage("");
    setCurrent("");
    setResistance("");
    setPower("");
    toast.info("Calculator reset", {
      description: "All values have been cleared"
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" /> Ohm's Law Calculator
        </CardTitle>
        <CardDescription>
          Calculate voltage, current, resistance and power using Ohm's Law
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={calcMode} onValueChange={(value) => setCalcMode(value as any)} className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="voltage">Voltage</TabsTrigger>
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="resistance">Resistance</TabsTrigger>
            <TabsTrigger value="power">Power</TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="voltage" className="flex items-center gap-1">
                <Zap className="h-4 w-4" /> Voltage (V)
              </Label>
              <Input
                id="voltage"
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Enter voltage in volts"
                disabled={calcMode === 'voltage'}
                className={calcMode === 'voltage' ? 'bg-gray-100 dark:bg-gray-800' : ''}
              />
            </div>
            <div>
              <Label htmlFor="current" className="flex items-center gap-1">
                <Activity className="h-4 w-4" /> Current (A)
              </Label>
              <Input
                id="current"
                type="number"
                value={current}
                onChange={(e) => setCurrent(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Enter current in amperes"
                disabled={calcMode === 'current'}
                className={calcMode === 'current' ? 'bg-gray-100 dark:bg-gray-800' : ''}
              />
            </div>
            <div>
              <Label htmlFor="resistance" className="flex items-center gap-1">
                <Gauge className="h-4 w-4" /> Resistance (Ω)
              </Label>
              <Input
                id="resistance"
                type="number"
                value={resistance}
                onChange={(e) => setResistance(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Enter resistance in ohms"
                disabled={calcMode === 'resistance'}
                className={calcMode === 'resistance' ? 'bg-gray-100 dark:bg-gray-800' : ''}
              />
            </div>
            <div>
              <Label htmlFor="power" className="flex items-center gap-1">
                <Zap className="h-4 w-4" /> Power (W)
              </Label>
              <Input
                id="power"
                type="number"
                value={power}
                onChange={(e) => setPower(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Enter power in watts"
                disabled={calcMode === 'power'}
                className={calcMode === 'power' ? 'bg-gray-100 dark:bg-gray-800' : ''}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <Button className="flex-1" onClick={calculateOhmsLaw}>
              Calculate
            </Button>
            <Button variant="outline" onClick={resetValues}>
              Reset
            </Button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
            <h3 className="font-medium mb-2">Ohm's Law Formulas:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div>• Voltage (V) = Current (I) × Resistance (R)</div>
              <div>• Current (I) = Voltage (V) ÷ Resistance (R)</div>
              <div>• Resistance (R) = Voltage (V) ÷ Current (I)</div>
              <div>• Power (P) = Voltage (V) × Current (I)</div>
              <div>• Power (P) = Current² (I²) × Resistance (R)</div>
              <div>• Power (P) = Voltage² (V²) ÷ Resistance (R)</div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};
