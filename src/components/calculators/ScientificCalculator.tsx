
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GuidanceSection } from "@/components/GuidanceSection";

export const ScientificCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPendingOperation] = useState<string | null>(null);
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [isNewInput, setIsNewInput] = useState(true);
  const [memory, setMemory] = useState<number>(0);

  useEffect(() => {
    setDisplay(currentValue);
  }, [currentValue]);

  const handleNumberInput = (num: string) => {
    if (isNewInput) {
      setCurrentValue(num);
      setIsNewInput(false);
    } else {
      setCurrentValue(currentValue === "0" ? num : currentValue + num);
    }
  };

  const handleDecimal = () => {
    if (isNewInput) {
      setCurrentValue("0.");
      setIsNewInput(false);
    } else if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  };

  const handleOperator = (op: string) => {
    const current = parseFloat(currentValue);
    
    if (storedValue === null) {
      setStoredValue(current);
    } else if (pendingOperation) {
      const result = performCalculation(storedValue, current, pendingOperation);
      setStoredValue(result);
      setCurrentValue(String(result));
    }
    
    setPendingOperation(op);
    setIsNewInput(true);
  };

  const handleEquals = () => {
    if (storedValue === null || pendingOperation === null) return;
    
    const current = parseFloat(currentValue);
    const result = performCalculation(storedValue, current, pendingOperation);
    
    setCurrentValue(String(result));
    setStoredValue(null);
    setPendingOperation(null);
    setIsNewInput(true);
  };

  const performCalculation = (a: number, b: number, operation: string): number => {
    switch (operation) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return b !== 0 ? a / b : NaN;
      case "^": return Math.pow(a, b);
      case "mod": return a % b;
      default: return b;
    }
  };

  const handleClear = () => {
    setCurrentValue("0");
    setStoredValue(null);
    setPendingOperation(null);
    setIsNewInput(true);
  };

  const handleFunction = (func: string) => {
    const current = parseFloat(currentValue);
    let result;

    switch (func) {
      case "sin":
        result = Math.sin(current);
        break;
      case "cos":
        result = Math.cos(current);
        break;
      case "tan":
        result = Math.tan(current);
        break;
      case "log":
        result = Math.log10(current);
        break;
      case "ln":
        result = Math.log(current);
        break;
      case "sqrt":
        result = Math.sqrt(current);
        break;
      case "sqr":
        result = current * current;
        break;
      case "1/x":
        result = 1 / current;
        break;
      case "+/-":
        result = -current;
        break;
      case "pi":
        result = Math.PI;
        break;
      case "e":
        result = Math.E;
        break;
      default:
        result = current;
    }

    setCurrentValue(String(result));
    setIsNewInput(true);
  };

  const handleMemory = (action: string) => {
    const current = parseFloat(currentValue);
    
    switch (action) {
      case "MC":
        setMemory(0);
        break;
      case "MR":
        setCurrentValue(String(memory));
        setIsNewInput(true);
        break;
      case "M+":
        setMemory(memory + current);
        setIsNewInput(true);
        break;
      case "M-":
        setMemory(memory - current);
        setIsNewInput(true);
        break;
      case "MS":
        setMemory(current);
        setIsNewInput(true);
        break;
    }
  };

  return (
    <div className="calculator-container bg-white/40 dark:bg-transparent">
      <h2 className="calculator-header">Scientific Calculator</h2>
      
      <Card className="p-6 glass-card">
        <div className="mb-4">
          <Input 
            className="text-right text-2xl h-16 font-mono p-4"
            value={display}
            readOnly
            aria-label="Calculator display"
          />
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {/* Memory functions */}
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleMemory("MC")}
          >
            MC
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleMemory("MR")}
          >
            MR
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleMemory("MS")}
          >
            MS
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleMemory("M+")}
          >
            M+
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleMemory("M-")}
          >
            M-
          </Button>

          {/* Scientific functions */}
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("sin")}
          >
            sin
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("cos")}
          >
            cos
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("tan")}
          >
            tan
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("log")}
          >
            log
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("ln")}
          >
            ln
          </Button>

          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("sqrt")}
          >
            √
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("sqr")}
          >
            x²
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("1/x")}
          >
            1/x
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleOperator("^")}
          >
            x^y
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleOperator("mod")}
          >
            mod
          </Button>

          {/* Constants */}
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("pi")}
          >
            π
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("e")}
          >
            e
          </Button>
          <Button 
            variant="outline" 
            className="text-sm" 
            onClick={() => handleFunction("+/-")}
          >
            +/-
          </Button>
          <Button 
            variant="secondary" 
            className="text-sm" 
            onClick={handleClear}
          >
            C
          </Button>
          <Button 
            variant="destructive" 
            className="text-sm" 
            onClick={handleClear}
          >
            AC
          </Button>

          {/* Numbers and operations */}
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("7")}
          >
            7
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("8")}
          >
            8
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("9")}
          >
            9
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleOperator("÷")}
          >
            ÷
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleOperator("×")}
          >
            ×
          </Button>

          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("4")}
          >
            4
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("5")}
          >
            5
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("6")}
          >
            6
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleOperator("-")}
          >
            -
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleOperator("+")}
          >
            +
          </Button>

          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("1")}
          >
            1
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("2")}
          >
            2
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("3")}
          >
            3
          </Button>
          <Button 
            variant="default" 
            onClick={handleEquals}
            className="row-span-2"
          >
            =
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleNumberInput("0")}
            className="col-span-2"
          >
            0
          </Button>
          <Button 
            variant="outline" 
            onClick={handleDecimal}
          >
            .
          </Button>
        </div>
      </Card>
      
      <GuidanceSection title="How to Use the Scientific Calculator">
        <p>This scientific calculator offers a range of mathematical operations and functions for both basic and advanced calculations.</p>
        
        <h4 className="font-medium mt-3 mb-1">Basic Operations</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Addition (+): Enter a number, press +, enter another number, then press =</li>
          <li>Subtraction (-): Enter a number, press -, enter another number, then press =</li>
          <li>Multiplication (×): Enter a number, press ×, enter another number, then press =</li>
          <li>Division (÷): Enter a number, press ÷, enter another number, then press =</li>
        </ul>
        
        <h4 className="font-medium mt-3 mb-1">Advanced Functions</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Trigonometric functions (sin, cos, tan): Enter an angle value, then press the corresponding button</li>
          <li>Logarithmic functions (log, ln): Enter a number, then press log (base 10) or ln (natural log)</li>
          <li>Power functions (x², x^y): Enter a number, then press x² for square or x^y followed by another number and = for custom powers</li>
          <li>Square root (√): Enter a number, then press √</li>
          <li>Reciprocal (1/x): Enter a number, then press 1/x</li>
        </ul>
        
        <h4 className="font-medium mt-3 mb-1">Memory Functions</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>MS (Memory Store): Saves the displayed number to memory</li>
          <li>MR (Memory Recall): Recalls the number from memory</li>
          <li>MC (Memory Clear): Clears the memory</li>
          <li>M+ (Memory Add): Adds the displayed number to the memory</li>
          <li>M- (Memory Subtract): Subtracts the displayed number from the memory</li>
        </ul>
        
        <h4 className="font-medium mt-3 mb-1">Example Calculations</h4>
        <div className="space-y-2">
          <p><strong>Calculate sin(30):</strong> Enter 30, press "sin" → Result: 0.5</p>
          <p><strong>Calculate 2³:</strong> Enter 2, press "x^y", enter 3, press "=" → Result: 8</p>
          <p><strong>Calculate √16:</strong> Enter 16, press "√" → Result: 4</p>
          <p><strong>Calculate log(100):</strong> Enter 100, press "log" → Result: 2</p>
        </div>
      </GuidanceSection>
    </div>
  );
};
