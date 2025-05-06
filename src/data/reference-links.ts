export const referenceLinks: Record<string, { label: string; href: string }[]> = {
    "/scientific": [
      { label: "Percentage Calculator", href: "/percentage" },
      { label: "Fraction Calculator", href: "/fraction" },
      { label: "Complex Numbers Calculator", href: "/tools/complex-numbers-calculator" },
    ],
  
    "/percentage": [
      { label: "Percentage (%)", href: "/percentage" },
      { label: "Percentage Increase Calculator", href: "/calculator/percentage-increase" },
      { label: "Percentage Change Calculator", href: "/calculator/percentage-change" },
      { label: "Percent Error Calculator", href: "/tools/percent-error-calculator" },
      { label: "Percent to Fraction", href: "/math/percent-to-fraction" },
      { label: "Fraction to Percent", href: "/math/fraction-to-percent" },
      { label: "Percent to Decimal", href: "/math/percent-to-decimal" },
      { label: "Decimal to Percent", href: "/math/decimal-to-percent" },
      { label: "Percent to PPM", href: "/math/percent-to-ppm" },
      { label: "PPM to Percent", href: "/math/ppm-to-percent" },
      { label: "Grade Calculator", href: "/calculator/grade-basic" },
      { label: "Per-mille (‰)", href: "/numbers/per-mille" },
      { label: "Parts-per Million (PPM)", href: "/numbers/parts-per-million" },
      { label: "Math Symbols", href: "/symbols/math" },
    ],
  
    "/fraction": [
      { label: "Fraction Calculator", href: "/fraction" },
      { label: "Adding Fractions Calculator", href: "/tools/adding-fractions-calculator" },
      { label: "Dividing Fractions Calculator", href: "/tools/dividing-fractions-calculator" },
      { label: "Multiplying Fractions Calculator", href: "/tools/multiplying-fractions-calculator" },
      { label: "Fraction Simplifier", href: "/tools/fraction-simplifier" },
    ],
  
    "/average": [
      { label: "Standard Deviation Calculator", href: "/tools/standard-deviation-calculator" },
      { label: "Variance Calculator", href: "/tools/variance-calculator" },
      { label: "Grade Calculator", href: "/calculator/grade-basic" },
      { label: "GPA Calculator", href: "/calculator/gpa" },
      { label: "Math Calculators", href: "/math/all" },
    ],
  
    "/calculator/grade-basic": [
      { label: "GPA Calculator", href: "/calculator/gpa" },
      { label: "Final Grade Calculator", href: "/calculator/final-grade" },
      { label: "Grade Calculation", href: "/calculator/grade-calc" },
    ],
  
    "/calculator/gpa": [
      { label: "How to Calculate GPA", href: "/calculator/gpa-calc" },
      { label: "Grade Calculator", href: "/calculator/grade-basic" },
      { label: "Standard Deviation Calculator", href: "/tools/standard-deviation-calculator" },
      { label: "Weighted Average Calculator", href: "/tools/weighted-average-calculator" },
      { label: "Grade Calculators", href: "/grade/all" },
    ],
    "/calculator/final-grade": [
      { label: "High School GPA Calculator", href: "/calculator/highschool-gpa" },
      { label: "GPA Calculator", href: "/calculator/gpa" },
      { label: "Grade Calculator", href: "/calculator/grade-basic" },
      { label: "Grade Calculation", href: "/calculator/grade-calc" },
      { label: "GPA Calculation", href: "/calculator/gpa-calc" },
      { label: "Standard Deviation Calculator", href: "/tools/standard-deviation-calculator" },
      { label: "Weighted Average Calculator", href: "/tools/weighted-average-calculator" },
      { label: "Percentage Calculator", href: "/percentage" },
      { label: "Math Calculators", href: "/math/all" }
    ],
    "/mortgage": [
  { label: "Compound Interest Calculator", href: "/compound-interest" },
  { label: "Compound Interest Formula", href: "/math/compound-interest" },
  { label: "Effective Interest Rate Calculator", href: "/calculator/effective-interest-rate" },
  { label: "Simple Interest Calculator", href: "/calculator/simple-interest" },
  { label: "Percentage Calculator", href: "/percentage" }
],
"/compound-interest": [
  { label: "Compound Interest Formula", href: "/math/compound-interest" },
  { label: "Effective Interest Rate Calculator", href: "/calculator/effective-interest-rate" },
  { label: "Simple Interest Calculator", href: "/calculator/simple-interest" },
  { label: "Mortgage Calculator", href: "/mortgage" }
],
"/bmi": [
  { label: "Body Mass Index", href: "/math/body-mass-index" },
  { label: "Kg to Pounds Converter", href: "/convertor/mass" },
  { label: "Feet and Inches to CM Converter", href: "/convertor/length" },
  { label: "Height Converter", href: "/tools/height-calculator" },
  { label: "Calorie Calculator", href: "/tools/calorie-calculator" }
],
"/electrical-calculations/amps-to-kw": [
  { label: "KW to Amps Calculator", href: "/electrical-calculators/kw-to-amps-calculator" },
  { label: "Amps to Watts Calculator", href: "/electrical-calculators/amps-to-watts-calculator" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Ampere", href: "/electrical/units/ampere" },
  { label: "Kilowatts", href: "/electrical/units/kw" },
  { label: "Volts", href: "/electrical/units/volt" },
  { label: "Watts", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
  { label: "VA to KW Calculator", href: "/electrical-calculators/va-to-kw-calculator" }
],
"/electrical-calculations/amps-to-kva": [
  { label: "How to Convert Amps to KVA", href: "/electrical-calculations/kva-to-amps" },
  { label: "KVA to Amps Calculator", href: "/electrical-calculators/kva-to-amps-calculator" },
  { label: "Amps to VA Calculator", href: "/electrical-calculators/amps-to-va-calculator" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Kilovolt-Amp", href: "/electrical/units/kva" },
  { label: "Ampere", href: "/electrical/units/ampere" },
  { label: "Volts", href: "/electrical/units/volt" },
  { label: "Watts", href: "/electrical/units/watt" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/amps-to-va": [
  { label: "How to Convert Amps to VA", href: "/electrical-calculations/va-to-amps" },
  { label: "VA to Amps Calculator", href: "/electrical-calculators/va-to-amps-calculator" },
  { label: "KVA to Amps Calculator", href: "/electrical-calculators/kva-to-amps-calculator" },
  { label: "Ampere", href: "/electrical/units/ampere" },
  { label: "Volts", href: "/electrical/units/volt" },
  { label: "Watts", href: "/electrical/units/watt" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "All Conversions", href: "/all-conversions" }
],
"/electrical-calculations/amps-to-volts": [
  { label: "Volts to Amps Calculator", href: "/electrical-calculations/volts-to-amps" },
  { label: "How to Convert Amps to Volts", href: "/electrical/circuit-laws/ohm" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Ampere", href: "/electrical/units/ampere" },
  { label: "Volt", href: "/electrical/units/volt" },
  { label: "Watt", href: "/electrical/units/watt" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Voltage Divider Calculator", href: "/electrical-calculators/voltage-divider-calculator" },
  { label: "All Conversions", href: "/all-conversions" }
],
"/electrical-calculations/amps-to-watts": [
  { label: "How to Convert Amps to Watts", href: "/electrical/circuit-laws/ohm" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Amps to kW Calculator", href: "/electrical-calculations/amps-to-kilowatts" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Lumens to Watts Calculator", href: "/lighting-calculators/lumens-to-watts-calculator" },
  { label: "Ampere", href: "/electrical/units/ampere" },
  { label: "Volt", href: "/electrical/units/volt" },
  { label: "Watt", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculators/electricity-bill-calculator": [
  { label: "Energy Consumption Calculator", href: "/electrical-calculators/energy-consumption-calculator" },
  { label: "How to Save Electricity", href: "/howto/save-electricity" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" }
],
"/electrical-calculators/energy-consumption-calculator": [
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "How to Save Energy", href: "/howto/save-energy" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" }
],
"/electrical-calculators/energy-cost-calculator": [
  { label: "Energy Consumption Calculator", href: "/electrical-calculators/energy-consumption-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "How to Save Energy", href: "/howto/save-energy" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" }
],
"/electrical-calculations/electron-volt-to-volt": [
  { label: "Volts to EV Calculator", href: "/electrical-calculations/volts-to-ev" },
  { label: "EV to Joules Conversion", href: "/electrical-calculations/joules-to-volts" },
  { label: "Joules to Volts Calculator", href: "/electrical-calculations/joules-to-volts-calculator" },
  { label: "Volt Info", href: "/electrical/units/volt" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" }
],
"/electrical-calculations/joules-to-watts": [
  { label: "Watts to Joules Calculator", href: "/electrical-calculations/watts-to-joules" },
  { label: "Joules to Kilowatts Converter", href: "/electrical-calculations/joules-to-kilowatts" },
  { label: "Watt Info", href: "/electrical/units/watt" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/joules-to-volts": [
  { label: "Volts to Joules Calculator", href: "/electrical-calculations/volts-to-joules" },
  { label: "Joules to Watts Calculator", href: "/electrical-calculations/joules-to-watts" },
  { label: "Volt Info", href: "/electrical/units/volt" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/kva-to-amps": [
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" },
  { label: "VA to Amps Calculator", href: "/electrical-calculations/va-to-amps-calculator" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/kva-to-watts": [
  { label: "Watts to kVA Calculator", href: "/electrical-calculations/watts-to-kva" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "kVA to Amps Calculator", href: "/electrical-calculations/kva-to-amps" },
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/kva-to-kw": [
  { label: "kW to kVA Calculator", href: "/electrical-calculations/kw-to-kva" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "kVA to Watts Calculator", href: "/electrical-calculations/kva-to-watts" },
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/kva-to-va": [
  { label: "VA to kVA Calculator", href: "/electrical-calculations/va-to-kva" },
  { label: "kVA to Watts Calculator", href: "/electrical-calculations/kva-to-watts" },
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/kw-to-amps": [
  { label: "Amps to kW Calculator", href: "/electrical-calculations/amps-to-kw" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Ohms Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/kw-to-volts": [
  { label: "Volts to kW Calculator", href: "/electrical-calculations/volts-to-kw" },
  { label: "Watts to Volts Calculator", href: "/electrical-calculations/watts-to-volts" },
  { label: "Amps to Volts Calculator", href: "/electrical-calculations/amps-to-volts" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" }
],
"/electrical-calculations/kw-to-kwh": [
  { label: "How to Convert kW to kWh", href: "/electrical-calculations/kw-to-wh" },
  { label: "kWh to kW Calculator", href: "/electrical-calculations/kwh-to-kw" },
  { label: "Watts to kWh Calculator", href: "/electrical-calculations/watts-to-kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/kw-to-va": [
  { label: "How to Convert kW to VA", href: "/electrical-calculations/kw-to-kva" },
  { label: "VA to kW Calculator", href: "/electrical-calculations/va-to-kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/kw-to-kva": [
  { label: "How to Convert kW to kVA", href: "/electrical-calculations/kva-to-kw" },
  { label: "kVA to kW Calculator", href: "/electrical-calculations/kva-to-kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/kwh-to-kw": [
  { label: "How to Convert kWh to kW", href: "/electrical-calculations/kw-to-kwh" },
  { label: "kWh to Watts Calculator", href: "/electrical-calculations/kwh-to-watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
  };
  