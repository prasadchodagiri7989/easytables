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
"/electrical-calculations/kwh-to-watt": [
  { label: "kWh to Watts Calculator", href: "/electrical-calculations/kwh-to-watt" },
  { label: "Watts to kWh Calculation", href: "/electrical-calculations/watts-to-kwh" },
  { label: "kWh to kW Calculation", href: "/electrical-calculations/kwh-to-kw" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatts (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/electrical-calculations/lumen-to-watt": [
  { label: "Lumens to Watts Calculator", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lumens to Lux Calculator", href: "/electrical-calculations/lumen-to-lux" },
  { label: "Lux to Lumens Calculator", href: "/electrical-calculations/lux-to-lumen" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/lumen-to-lux": [
  { label: "Lumens to Lux Calculator", href: "/electrical-calculations/lumen-to-lux" },
  { label: "Lux to Lumens Calculator", href: "/electrical-calculations/lux-to-lumen" },
  { label: "Lumens to Watts Calculator", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/lux-to-lumen": [
  { label: "Lux to Lumens Calculator", href: "/electrical-calculations/lux-to-lumen" },
  { label: "Lumens to Lux Calculator", href: "/electrical-calculations/lumen-to-lux" },
  { label: "Lumens to Watts Calculator", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/milliamps-to-amps": [
  { label: "How to Convert Amps to Milliamps", href: "/electrical-calculations/milliamps-to-amps" },
  { label: "How to Convert Amps to Kilowatts", href: "/electrical-calculations/amps-to-kw" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Ampere", href: "/electrical/units/ampere" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/mah-to-ah": [
  { label: "mAh to Ah Conversion Calculator", href: "/electrical-calculations/mah-to-ah" },
  { label: "How to Convert Ah to mAh", href: "/electrical-calculations/ah-to-mah" },
  { label: "How to Convert Amps to Milliamps", href: "/electrical-calculations/milliamps-to-amps" },
  { label: "How to Convert Amps to Kilowatts", href: "/electrical-calculations/amps-to-kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/mah-to-wh": [
  { label: "mAh to Wh Calculator", href: "/electrical-calculations/mah-to-wh" },
  { label: "How to Convert Wh to mAh", href: "/electrical-calculations/wh-to-mah" },
  { label: "How to Convert mAh to Ah", href: "/electrical-calculations/mah-to-ah" },
  { label: "How to Convert Amps to Milliamps", href: "/electrical-calculations/milliamps-to-amps" },
  { label: "How to Convert Amps to Kilowatts", href: "/electrical-calculations/amps-to-kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/ohms-to-amps": [
  { label: "How to Convert Amps to Ohms", href: "/electrical-calculations/amps-to-ohms" },
  { label: "Ohms (Ω)", href: "/electrical/units/ohm" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/ohms-to-volts": [
  { label: "How to Convert Volts to Ohms", href: "/electrical-calculations/ohms-to-volts" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Volts", href: "/electrical/units/volt" },
  { label: "Ohms", href: "/electrical/units/ohm" },
  { label: "Amperes", href: "/electrical/units/ampere" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/va-to-amps": [
  { label: "kVA to Amps Calculator", href: "/electrical-calculations/kva-to-amps" },
  { label: "How to Convert Amps to VA", href: "/electrical-calculations/amps-to-va" },
  { label: "How to Convert Amps to kVA", href: "/electrical-calculations/amps-to-kva" },
  { label: "How to Convert kW to Amps", href: "/electrical-calculations/kw-to-amps" },
  { label: "Amp", href: "/electrical/units/ampere" },
  { label: "Volt", href: "/electrical/units/volt" },
  { label: "Watt", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/va-to-watts": [
  { label: "Watts to VA Calculator", href: "/electrical-calculations/watts-to-va" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/va-to-kva": [
  { label: "How to Convert kVA to VA", href: "/electrical-calculations/kva-to-va" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/va-to-kw": [
  { label: "How to Convert kW to VA", href: "/electrical-calculations/kw-to-va" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/volts-to-amps": [
  { label: "Volts to Amps Calculator", href: "/electrical-calculations/volts-to-amps" },
  { label: "How to Convert Amps to Volts", href: "/electrical-calculations/amps-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/volts-to-joules": [
  { label: "Volts to Joules Calculator", href: "/electrical-calculations/volts-to-joules" },
  { label: "How to Convert Joules to Volts", href: "/electrical-calculations/joules-to-volts" },
  { label: "How to Convert Joules to Watts", href: "/electrical-calculations/joules-to-watts" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/volts-to-kw": [
  { label: "Volts to kW Calculator", href: "/electrical-calculations/volts-to-kw" },
  { label: "How to Convert kW to Volts", href: "/electrical-calculations/kw-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/volts-to-ohms": [
  { label: "How to Convert Ohms to Volts", href: "/electrical-calculations/volts-to-ohms" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/volts-to-ev": [
  { label: "Volts to eV Calculator", href: "/electrical-calculations/volts-to-ev" },
  { label: "Volts to Amps Calculator", href: "/electrical-calculations/volts-to-amps" },
  { label: "Volts to Joules Calculator", href: "/electrical-calculations/volts-to-joules" },
  { label: "Volts to Watts Calculator", href: "/electrical-calculations/volts-to-watts" },
  { label: "Volts to Ohms Calculator", href: "/electrical-calculations/volts-to-ohms" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/volts-to-watts": [
  { label: "Volts to Watts Calculator", href: "/electrical-calculations/volts-to-watts" },
  { label: "How to Convert Watts to Volts", href: "/electrical-calculations/watts-to-volts" },
  { label: "How to Convert Volts to kW", href: "/electrical-calculations/volts-to-kw" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-amps": [
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "How to Convert Amps to Watts", href: "/electrical-calculations/amps-to-watts" },
  { label: "How to Convert Amps to Kilowatts", href: "/electrical-calculations/amps-to-kw" },
  { label: "How to Convert Kilowatts to Amps", href: "/electrical-calculations/kw-to-amps" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-joules": [
  { label: "Watts to Joules Calculator", href: "/electrical-calculations/watts-to-joules" },
  { label: "How to Convert Joules to Watts", href: "/electrical-calculations/joules-to-watts" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-volts": [
  { label: "Watts to Volts Calculator", href: "/electrical-calculations/watts-to-volts" },
  { label: "How to Convert Volts to Watts", href: "/electrical-calculations/volts-to-watts" },
  { label: "How to Convert kW to Volts", href: "/electrical-calculations/kw-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-va": [
  { label: "Watts to VA Calculator", href: "/electrical-calculations/watts-to-va" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-kva": [
  { label: "Watts to kVA Calculator", href: "/electrical-calculations/watts-to-kva" },
  { label: "How to Convert kVA to Watts", href: "/electrical-calculations/kva-to-watts" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-kwh": [
  { label: "Watts to kWh Calculator", href: "/electrical-calculations/watts-to-kwh" },
  { label: "kWh to Watts Calculation", href: "/electrical-calculations/kwh-to-watt" },
  { label: "kW to kWh Calculation", href: "/electrical-calculations/kw-to-kwh" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/electrical-calculations/watts-to-kj": [
  { label: "Watts to kJ Calculator", href: "/electrical-calculations/watts-to-kj" },
  { label: "Watts to Joules Calculator", href: "/electrical-calculations/watts-to-joules" },
  { label: "How to Convert Joules to Watts", href: "/electrical-calculations/joules-to-watts" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-lumens": [
  { label: "Watts to Lumens Calculator", href: "/electrical-calculations/watts-to-lumens" },
  { label: "Lumens to Watts Calculator", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lumens to Lux Calculator", href: "/electrical-calculations/lumen-to-lux" },
  { label: "Lux to Lumens Calculator", href: "/electrical-calculations/lux-to-lumen" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculations/watts-to-wh": [
  { label: "How to Convert Wh to Watts", href: "/electrical-calculations/watts-to-wh" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/electrical-calculations/wh-to-kw": [
  { label: "How to Convert kW to Wh", href: "/electrical-calculations/wh-to-kw" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/electrical-calculations/wh-to-mah": [
  { label: "Wh to mAh Calculator", href: "/electrical-calculations/wh-to-mah" },
  { label: "How to Convert mAh to Wh", href: "/electrical-calculations/mah-to-wh" },
  { label: "How to Convert mAh to Ah", href: "/electrical-calculations/mah-to-ah" },
  { label: "How to Convert Milliamps to Amps", href: "/electrical-calculations/milliamps-to-amps" },
  { label: "How to Convert Amps to Kilowatts", href: "/electrical-calculations/amps-to-kw" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical-calculations/wh-to-watts": [
  { label: "How to Convert Watts to Wh", href: "/electrical-calculations/wh-to-watts" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/electrical-calculations": [
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/convertor/energy": [
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Voltage Conversion", href: "/convertor/voltage" },
  { label: "Frequency Conversion", href: "/convertor/frequency" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Decibel-milliwatt (dBm)", href: "/electrical/units/dbm" },
  { label: "Electrical Voltage", href: "/electrical/units/volt" },
  { label: "Electric Power", href: "/electrical/content/power" }
],
"/convertor/charge": [
  { label: "Power Conversion", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Frequency Conversion", href: "/convertor/frequency" },
  { label: "Temperature Conversion", href: "/convertor/temperature" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/convertor/color": [
  { label: "RGB Color Codes", href: "/convertor/color" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/convertor/frequency": [
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Charge Conversion", href: "/convertor/charge" }, // 🔧 To be created
  { label: "Number Conversion", href: "/convertor/numbers" }, // 🔧 To be created
  { label: "Temperature Conversion", href: "/convertor/temperature" }
],
"/image/gif-to-png": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image-conversions": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/gif-to-jpg": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/jpg-to-gif": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/jpg-to-pdf": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/jpg-to-png": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/png-to-gif": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/png-to-jpg": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/png-to-pdf": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/image/to-black-white": [
  { label: "Online Screenshot Tool", href: "/tools/screenshot" },
  { label: "Color Conversion", href: "/convertor/color" }
],
"/convertor/length": [
  { label: "Wire Gauge Calculator", href: "/tools/wire-gauge-calculator" },
  { label: "Temperature Conversion", href: "/convertor/temperature" },
  { label: "Mass Conversion", href: "/convertor/mass" },
],
"/convertor/number": [
  { label: "Percentage", href: "/percentage" },
  { label: "Parts-per Million (PPM)", href: "/numbers/parts-per-million" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Math Calculators", href: "/math/all" }
],
"/convertor/power": [
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Voltage Conversion", href: "/convertor/voltage" },
  { label: "Frequency Conversion", href: "/convertor/frequency" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Decibel-milliwatt (dBm)", href: "/electrical/units/dbm" },
  { label: "Electric Power", href: "/electrical/content/power" }
],
"/convertor/temperature": [
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Frequency Conversion", href: "/convertor/frequency" },
  { label: "Length Conversion", href: "/convertor/length" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/convertor/volume": [
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Frequency Conversion", href: "/convertor/frequency" },
  { label: "Length Conversion", href: "/convertor/length" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/convertor/mass": [
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Frequency Conversion", href: "/convertor/frequency" },
  { label: "Length Conversion", href: "/convertor/length" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/unit-converter": [
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Frequency Conversion", href: "/convertor/frequency" },
  { label: "Length Conversion", href: "/convertor/length" },
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/electrical-calculators/amps-to-kw-calculator": [
  { label: "How to Convert Amps to kW", href: "/electrical-calculations/amps-to-kw" },
  { label: "kW to Amps Calculator", href: "/electrical-calculations/kw-to-amps" },
  { label: "Amps to Watts Calculator", href: "/electrical-calculations/amps-to-watts" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/amps-to-kva-calculator": [
  { label: "How to Convert Amps to kVA", href: "/electrical-calculations/amps-to-kva" },
  { label: "kVA to Amps Calculator", href: "/electrical-calculations/kva-to-amps" },
  { label: "Amps to VA Calculator", href: "/electrical-calculations/amps-to-va" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/amps-to-va-calculator": [
  { label: "How to Convert Amps to VA", href: "/electrical-calculations/amps-to-va" },
  { label: "kVA to Amps Calculator", href: "/electrical-calculations/kva-to-amps" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/amps-to-volts-calculator": [
  { label: "Volts to Amps Calculator", href: "/electrical-calculations/volts-to-amps" },
  { label: "How to Convert Amps to Volts", href: "/electrical-calculations/amps-to-volts" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/amps-to-watts-calculator": [
  { label: "How to Convert Amps to Watts", href: "/electrical-calculations/amps-to-watts" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Amps to kW Calculator", href: "/electrical-calculations/amps-to-kw" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Lumens to Watts Calculator", href: "/lighting-calculators/lumens-to-watts-calculator" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/ev-to-volts-calculator": [
  { label: "Volts to eV Calculator", href: "/electrical-calculations/volts-to-ev" },
  { label: "Joules to Volts Calculator", href: "/electrical-calculations/joules-to-volts" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/joules-to-watts-calculator": [
  { label: "How to Convert Joules to Watts", href: "/electrical-calculations/joules-to-watts" },
  { label: "Watts to Joules Calculator", href: "/electrical-calculations/watts-to-joules" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/joules-to-volts-calculator": [
  { label: "How to Convert Joules to Volts", href: "/electrical-calculations/joules-to-volts" },
  { label: "Volts to Joules Calculator", href: "/electrical-calculations/volts-to-joules" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kva-to-amps-calculator": [
  { label: "How to Convert kVA to Amps", href: "/electrical-calculations/kva-to-amps" },
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kva-to-watts-calculator": [
  { label: "How to Convert kVA to Watts", href: "/electrical-calculations/kva-to-watts" },
  { label: "Watts to kVA Calculator", href: "/electrical-calculations/watts-to-kva" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kva-to-kw-calculator": [
  { label: "How to Convert kVA to kW", href: "/electrical-calculations/kva-to-kw" },
  { label: "kW to kVA Calculator", href: "/electrical-calculations/kw-to-kva" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kva-to-va-calculator": [
  { label: "How to Convert kVA to VA", href: "/electrical-calculations/kva-to-va" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kw-to-amps-calculator": [
  { label: "How to Convert kW to Amps", href: "/electrical-calculations/kw-to-amps" },
  { label: "Amps to kW Calculator", href: "/electrical-calculations/amps-to-kw" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kw-to-volts-calculator": [
  { label: "Volts to kW Calculator", href: "/electrical-calculations/volts-to-kw" },
  { label: "Watts to Volts Calculator", href: "/electrical-calculations/watts-to-volts" },
  { label: "How to Convert kW to Volts", href: "/electrical-calculations/kw-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kw-to-kwh-calculator": [
  { label: "How to Convert kW to kWh", href: "/electrical-calculations/kw-to-kwh" },
  { label: "kWh to kW Calculator", href: "/electrical-calculations/kwh-to-kw" },
  { label: "Watts to kWh Calculator", href: "/electrical-calculations/watts-to-kwh" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kw-to-va-calculator": [
  { label: "How to Convert kW to VA", href: "/electrical-calculations/kw-to-va" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kw-to-kva-calculator": [
  { label: "How to Convert kW to kVA", href: "/electrical-calculations/kw-to-kva" },
  { label: "kVA to kW Calculator", href: "/electrical-calculations/kva-to-kw" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kwh-to-kw-calculator": [
  { label: "How to Convert kWh to kW", href: "/electrical-calculations/kwh-to-kw" },
  { label: "kW to kWh Calculator", href: "/electrical-calculations/kw-to-kwh" },
  { label: "kWh to Watts Calculator", href: "/electrical-calculations/kwh-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/kwh-to-watts-calculator": [
  { label: "Watts to kWh Calculator", href: "/electrical-calculations/watts-to-kwh" },
  { label: "kWh to Watts Calculation", href: "/electrical-calculations/kwh-to-watt" },
  { label: "kWh to kW Calculation", href: "/electrical-calculations/kwh-to-kw" },
  { label: "kW to kWh Calculator", href: "/electrical-calculations/kw-to-kwh" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/mah-to-wh-calculator": [
  { label: "How to Convert mAh to Wh", href: "/electrical-calculations/mah-to-wh" },
  { label: "Wh to mAh Calculator", href: "/electrical-calculations/wh-to-mah" },
  { label: "mAh to Ah Calculator", href: "/electrical-calculations/mah-to-ah" },
  { label: "Energy Consumption Calculator", href: "/electrical-calculators/energy-consumption-calculator" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/ohms-law-calculator": [
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Voltage Divider Calculator", href: "/electrical-calculators/voltage-divider-calculator" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "kW to Amps Calculator", href: "/electrical-calculations/kw-to-amps" },
  { label: "Resistance", href: "/electrical/content/resistance" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Electric Voltage", href: "/electrical/content/voltage" },
  { label: "Complex Numbers Calculator", href: "/tools/complex-numbers-calculator" }
],
"/electrical-calculators/power-calculator": [
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Amps to Volts Calculator", href: "/electrical-calculations/amps-to-volts" },
  { label: "Exponents Calculator", href: "/tools/exponents-calculator" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Resistance", href: "/electrical/content/resistance" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Electric Voltage", href: "/electrical/content/voltage" }
],
"/electrical-calculators/power-factor-calculator": [
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
  { label: "Amps to kW Calculator", href: "/electrical-calculations/amps-to-kw" },
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" }
],
"/electrical-calculators/va-to-amps-calculator": [
  { label: "Amps to VA Calculator", href: "/electrical-calculations/amps-to-va" },
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],

"/electrical-calculators/va-to-kw-calculator": [
  { label: "kW to Volts Calculator", href: "/electrical-calculations/kw-to-volts" },
  { label: "Volts to Watts Calculator", href: "/electrical-calculations/volts-to-watts" },
  { label: "How to Convert Volts to kW", href: "/electrical-calculations/volts-to-kw" },
  { label: "How to Convert Volts to Watts", href: "/electrical-calculations/watts-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/va-to-kva-calculator": [
  { label: "kVA to VA Calculator", href: "/electrical-calculations/kva-to-va" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/voltage-divider-calculator": [
  { label: "Ohm's Law Calculator ►", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Resistance", href: "/electrical/content/resistance" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Electric Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "All Calculators", href: "/all-calculators" }
],
"/electrical-calculators/voltage-drop-calculator": [
  { label: "Electrical Calculators", href: "/electrical-calculators" }
],
"/electrical-calculators/volts-to-amps-calculator": [
  { label: "Amps to Volts Calculator", href: "/electrical-calculations/amps-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/va-to-watts-calculator": [
  { label: "Watts to Volts Calculator", href: "/electrical-calculations/watts-to-volts" },
  { label: "Volts to kW Calculator", href: "/electrical-calculations/volts-to-kw" },
  { label: "How to Convert Volts to Watts", href: "/electrical-calculations/volts-to-watts" },
  { label: "How to Convert Volts to kW", href: "/electrical-calculations/kw-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/volts-to-watts-calculator": [
  { label: "Watts to Volts Calculator", href: "/electrical-calculations/watts-to-volts" },
  { label: "Volts to kW Calculator", href: "/electrical-calculations/volts-to-kw" },
  { label: "How to Convert Volts to Watts", href: "/electrical-calculations/volts-to-watts" },
  { label: "How to Convert Volts to kW", href: "/electrical-calculations/kw-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/volts-to-kw-calculator": [
  { label: "kW to Volts Calculator", href: "/electrical-calculations/kw-to-volts" },
  { label: "Volts to Watts Calculator", href: "/electrical-calculations/volts-to-watts" },
  { label: "How to Convert Volts to kW", href: "/electrical-calculations/volts-to-kw" },
  { label: "How to Convert Volts to Watts", href: "/electrical-calculations/watts-to-volts" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/volts-to-joules-calculator": [
  { label: "How to Convert Volts to Joules", href: "/electrical-calculations/volts-to-joules" },
  { label: "Joules to Volts Calculator", href: "/electrical-calculations/joules-to-volts" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/volts-to-ev-calculator": [
  { label: "Volts to eV Calculation", href: "/electrical-calculations/volts-to-ev" },
  { label: "Volts to Joules Calculation", href: "/electrical-calculations/volts-to-joules" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/watts-volts-amps-ohms-calculator": [
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Amps to Volts Calculator", href: "/electrical-calculations/amps-to-volts" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Resistance", href: "/electrical/content/resistance" },
  { label: "Electric Current", href: "/electrical/content/current" },
  { label: "Electric Voltage", href: "/electrical/content/voltage" }
],
"/electrical-calculators/watts-to-amps-calculator": [
  { label: "How to Convert Watts to Amps", href: "/electrical-calculations/watts-to-amps" },
  { label: "Amps to Watts Calculator", href: "/electrical-calculations/amps-to-watts" },
  { label: "kW to Amps Calculator", href: "/electrical-calculations/kw-to-amps" },
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/watts-to-joules-calculator": [
  { label: "How to Convert Watts to Joules", href: "/electrical-calculations/watts-to-joules" },
  { label: "Joules to Watts Calculator", href: "/electrical-calculations/joules-to-watts" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/watts-to-kwh-calculator": [
  { label: "kWh to Watts Calculator", href: "/electrical-calculations/kwh-to-watt" },
  { label: "Watts to kWh Calculation", href: "/electrical-calculations/watts-to-kwh" },
  { label: "kW to kWh Calculation", href: "/electrical-calculations/kw-to-kwh" },
  { label: "kWh to kW Calculator", href: "/electrical-calculations/kwh-to-kw" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/watts-to-va-calculator": [
  { label: "How to Convert Watts to VA", href: "/electrical-calculations/watts-to-va" },
  { label: "VA to Watts Calculator", href: "/electrical-calculations/va-to-watts" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],

"/electrical-calculators/watts-to-volts-calculator": [
  { label: "Volts to Watts Calculator", href: "/electrical-calculations/volts-to-watts" },
  { label: "kW to Volts Calculator", href: "/electrical-calculations/kw-to-volts" },
  { label: "How to Convert Watts to Volts", href: "/electrical-calculations/watts-to-volts" },
  { label: "How to Convert kW to Volts", href: "/electrical-calculations/volts-to-kw" },
  { label: "Amp (A)", href: "/electrical/units/ampere" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/watts-to-kva-calculator": [
  { label: "How to Convert Watts to kVA", href: "/electrical-calculations/watts-to-kva" },
  { label: "kVA to Watts Calculator", href: "/electrical-calculations/kva-to-watts" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/wh-to-mah-calculator": [
  { label: "How to Convert Wh to mAh", href: "/electrical-calculations/wh-to-mah" },
  { label: "mAh to Wh Calculator", href: "/electrical-calculations/mah-to-wh" },
  { label: "mAh to Ah Calculator", href: "/electrical-calculations/mah-to-ah" },
  { label: "Energy Consumption Calculator", href: "/electrical-calculators/energy-consumption-calculator" },
  { label: "Power Conversion Tools", href: "/all-conversions" }
],
"/electrical-calculators/wire-gauge-calculator": [
  { label: "Voltage Drop Calculator", href: "/electrical-calculators/voltage-drop-calculator" },
  { label: "Inches to mm Converter", href: "/convertor/length" }
],


  };
  