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
      { label: "Percent to Fraction", href: "/convertor/number?from=percent&to=fraction" },
      { label: "Fraction to Percent", href: "/convertor/number?from=fraction&to=percent" },
      { label: "Percent to Decimal", href: "/convertor/number?from=percent&to=decimal" },
      { label: "Decimal to Percent", href: "/convertor/number?from=decimal&to=percent" },
      { label: "Percent to PPM", href: "/convertor/number?from=percent&to=ppm" },
      { label: "PPM to Percent", href: "/convertor/number?from=ppm&to=percent" },
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
"/electrical/units/ampere": [
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Ohm (Ω)", href: "/electrical/units/ohm" },
  { label: "Amps to Volts Calculator", href: "/electrical-calculations/amps-to-volts" },
  { label: "Amps to Watts Calculator", href: "/electrical-calculations/amps-to-watts" },
  { label: "Electrical Units Overview", href: "/electrical/units" }
],
"/electrical/units/dbm": [
  { label: "dBm to mW Conversion Calculator", href: "/electrical-calculations/dbm-to-mw" },
  { label: "mW to dBm Conversion Calculator", href: "/electrical-calculations/mw-to-dbm" },
  { label: "dBm to Watts Conversion Calculator", href: "/electrical-calculations/dbm-to-watt" },
  { label: "Watts to dBm Conversion Calculator", href: "/electrical-calculations/watt-to-dbm" },
  { label: "dBW (Decibel-Watt)", href: "/electrical/units/dbw" },
  { label: "Decibel (dB)", href: "/electrical/units/decibel" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Logarithm Calculator", href: "/tools/log-calculator" }
],
"/electrical/units/dbw": [
  { label: "dBm (Decibel-milliwatt)", href: "/electrical/units/dbm" },
  { label: "Decibel (dB)", href: "/electrical/units/decibel" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "dBm to mW Conversion Calculator", href: "/electrical-calculations/dbm-to-mw" },
  { label: "mW to dBm Conversion Calculator", href: "/electrical-calculations/mw-to-dbm" },
  { label: "dBm to Watts Conversion Calculator", href: "/electrical-calculations/dbm-to-watt" },
  { label: "Watts to dBm Conversion Calculator", href: "/electrical-calculations/watt-to-dbm" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Logarithm Calculator", href: "/tools/log-calculator" }
],
"/electrical/units/decibel": [
  { label: "dBm (Decibel-milliwatt)", href: "/electrical/units/dbm" },
  { label: "dBW (Decibel-Watt)", href: "/electrical/units/dbw" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Logarithm Calculator", href: "/tools/log-calculator" }
],
"/electrical/units/farad": [
  { label: "Capacitor (Farad)", href: "/electrical/content/capacitor" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Ohm (Ω)", href: "/electrical/units/ohm" },
  { label: "Voltage", href: "/electrical/content/voltage" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Electrical Units", href: "/electrical/units" }
],
"/electrical/units/kva": [
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "dB milliwatt (dBm)", href: "/electrical/units/dbm" },
  { label: "Kilowatt-hour (kWh)", href: "/electrical/units/kwh" },
  { label: "kVA to VA Calculator", href: "/electrical-calculations/kva-to-va" },
  { label: "kVA to kW Calculator", href: "/electrical-calculations/kva-to-kw" },
  { label: "kVA to Watts Calculator", href: "/electrical-calculations/kva-to-watts" },
  { label: "kVA to Amps Calculator", href: "/electrical-calculations/kva-to-amps" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Logarithm Calculator", href: "/tools/log-calculator" }
],
"/electrical/units/kwh": [
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "kW to kWh Calculator", href: "/electrical-calculations/kw-to-kwh" },
  { label: "kWh to kW Calculator", href: "/electrical-calculations/kwh-to-kw" },
  { label: "kWh to BTU Converter", href: "/electrical-calculations/kwh-to-btuh" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" },
  { label: "Electrical Units", href: "/electrical/units" }
],
"/electrical/units/ohm": [
  { label: "Electrical Resistance", href: "/electrical/content/resistance" },
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Watt (W)", href: "/electrical/units/watt" }
],
"/electrical/units/volt": [
  { label: "Voltage", href: "/electrical/content/voltage" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Ohm (Ω)", href: "/electrical/units/ohm" },
  { label: "How to Convert Volts to Watts", href: "/electrical-calculations/volts-to-watts" },
  { label: "Volts to Watts Calculator", href: "/electrical-calculators/volts-to-watts-calculator" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Energy Conversion", href: "/convertor/energy" }
],
"/electrical/units/watt": [
  { label: "Watt Definition", href: "/electrical/content/power" },
  { label: "Watt to mW, kW, MW, GW, dBm, dBW Conversion Calculator", href: "/electrical-calculators/watts-conversion" },
  { label: "Watt Unit Prefix Table", href: "/electrical/content/watt-prefixes" },
  { label: "How to Convert Watts to Kilowatts", href: "/electrical-calculations/watts-to-kw" },
  { label: "How to Convert Watts to Milliwatts", href: "/electrical-calculations/watts-to-mw" },
  { label: "How to Convert Watts to dBm", href: "/electrical-calculations/watt-to-dbm" },
  { label: "How to Convert Watts to Amps", href: "/electrical-calculations/watts-to-amps" },
  { label: "How to Convert Watts to Volts", href: "/electrical-calculations/watts-to-volts" },
  { label: "How to Convert Watts to Ohms", href: "/electrical-calculations/watts-to-ohms" },
  { label: "How to Convert Watts to BTU", href: "/electrical-calculations/watts-to-btuh" },
  { label: "How to Convert Watts to Joules", href: "/electrical-calculations/watts-to-joules" },
  { label: "How to Convert Watts to Horsepower", href: "/electrical-calculations/watts-to-hp" },
  { label: "How to Convert Watts to kVA", href: "/electrical-calculations/watts-to-kva" },
  { label: "How to Convert Watts to VA", href: "/electrical-calculations/watts-to-va" },
  { label: "Power Consumption Table", href: "/electrical/content/power-consumption-table" }
],
"/electrical/content/current": [
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Kirchhoff's Laws", href: "/electrical/circuit-laws/kirchhoff" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Resistance", href: "/electrical/content/resistance" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Capacitor", href: "/electrical/content/capacitor" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical/content/resistance": [
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Ohm (Ω)", href: "/electrical/units/ohm" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical/content/power": [
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Power Factor", href: "/electrical/content/power-factor" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "dBm (Decibel-milliwatt)", href: "/electrical/units/dbm" },
  { label: "dBW (Decibel-Watt)", href: "/electrical/units/dbw" },
  { label: "Kilowatt (kW)", href: "/electrical/units/kw" },
  { label: "Kilovolt-Amp (kVA)", href: "/electrical/units/kva" },
  { label: "Efficiency", href: "/electrical/content/efficiency" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" }
],
"/electrical/content/charge": [
  { label: "Coulomb's Law", href: "/electrical/circuit-laws/coulomb" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Capacitor", href: "/electrical/content/capacitor" },
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical/content/efficiency": [
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical/content/factor": [
  { label: "Power Factor Calculator", href: "/electrical-calculators/power-factor-calculator" },
  { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
  { label: "Amps to kW Calculator", href: "/electrical-calculations/amps-to-kw" },
  { label: "Amps to kVA Calculator", href: "/electrical-calculations/amps-to-kva" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Efficiency", href: "/electrical/content/efficiency" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Power Conversion Tools", href: "/all-conversions" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Electrical Calculators", href: "/electrical-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" }
],
"/electrical/components/resistor": [
  { label: "Electrical Resistance", href: "/electrical/content/resistance" },
  { label: "Resistor Symbols", href: "/electrical/content/resistor" },
  { label: "Ohm (Ω)", href: "/electrical/units/ohm" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Capacitor", href: "/electrical/content/capacitor" },
  { label: "Inductor", href: "/electrical/content/inductor" }
],
"/electrical/components/capacitor": [
  { label: "Capacitor Symbols", href: "/electrical/content/capacitor" },
  { label: "Electrical & Electronic Symbols", href: "/electrical/content/symbols" },
  { label: "Farad (F)", href: "/electrical/units/farad" },
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Inductor", href: "/electrical/content/inductor" }
],
"/electrical/components/inductor": [
  { label: "Capacitor", href: "/electrical/content/capacitor" },
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Electrical Symbols", href: "/electrical/content/symbols" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" }
],
"/electrical/components/dip-switch": [
  { label: "Decimal to Binary Converter", href: "/tools/decimal-to-binary" },
  { label: "Solder Bridge", href: "/electrical/components/solder-bridge" },
  { label: "Electrical Symbols", href: "/electrical/content/symbols" },
  { label: "Electronic Components", href: "/electrical/components" }
],
"/electrical/components/solder-bridge": [
  { label: "DIP Switch", href: "/electrical/components/dip-switch" },
  { label: "Electrical Symbols", href: "/electrical/content/symbols" },
  { label: "Electronic Components", href: "/electrical/components" }
],
"/electrical/symbols/switch": [
  { label: "Electronic Symbols", href: "/electrical/content/symbols" },
  { label: "Resistor Symbols", href: "/electrical/content/resistor" },
  { label: "Capacitor Symbols", href: "/electrical/content/capacitor" },
  { label: "Diode Symbols", href: "/electrical/symbols/diode" },
  { label: "Transistor Symbols", href: "/electrical/symbols/transistor" }
],
"/electrical/symbols/ground": [
  { label: "Electronic Symbols", href: "/electrical/content/symbols" },
  { label: "Resistor Symbols", href: "/electrical/content/resistor" },
  { label: "Capacitor Symbols", href: "/electrical/content/capacitor" },
  { label: "Diode Symbols", href: "/electrical/symbols/diode" },
  { label: "Transistor Symbols", href: "/electrical/symbols/transistor" }
],
"/electrical/symbols/resistor": [
  { label: "Electronic Symbols", href: "/electrical/content/symbols" },
  { label: "Switch Symbols", href: "/electrical/symbols/switch" },
  { label: "Capacitor Symbols", href: "/electrical/content/capacitor" },
  { label: "Diode Symbols", href: "/electrical/symbols/diode" },
  { label: "Transistor Symbols", href: "/electrical/symbols/transistor" },
  { label: "Resistor", href: "/electrical/content/resistor" }
],
"/electrical/symbols/capacitor": [
  { label: "Electronic Symbols", href: "/electrical/content/symbols" },
  { label: "Switch Symbols", href: "/electrical/symbols/switch" },
  { label: "Resistor Symbols", href: "/electrical/symbols/resistor" },
  { label: "Diode Symbols", href: "/electrical/symbols/diode" },
  { label: "Transistor Symbols", href: "/electrical/symbols/transistor" },
  { label: "Capacitor", href: "/electrical/content/capacitor" }
],
"/electrical/symbols/diode": [
  { label: "Electronic Symbols", href: "/electrical/content/symbols" },
  { label: "Switch Symbols", href: "/electrical/symbols/switch" },
  { label: "Resistor Symbols", href: "/electrical/symbols/resistor" },
  { label: "Capacitor Symbols", href: "/electrical/symbols/capacitor" },
  { label: "Transistor Symbols", href: "/electrical/symbols/transistor" }
],
"/electrical/symbols/transistor": [
  { label: "Electronic Symbols", href: "/electrical/content/symbols" },
  { label: "Switch Symbols", href: "/electrical/symbols/switch" },
  { label: "Resistor Symbols", href: "/electrical/symbols/resistor" },
  { label: "Capacitor Symbols", href: "/electrical/symbols/capacitor" },
  { label: "Diode Symbols", href: "/electrical/symbols/diode" }
],
"/electrical/circuit-laws/ohm": [
  { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electrical Resistance", href: "/electrical/content/resistance" },
  { label: "Ohm (Ω)", href: "/electrical/units/ohm" },
  { label: "Volt (V)", href: "/electrical/units/volt" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Electrical Symbols", href: "/electrical/content/symbols" }
],
"/electrical/circuit-laws/voltage-divider": [
  { label: "Voltage Divider Calculator", href: "/electrical-calculators/voltage-divider-calculator" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Kirchhoff's Laws", href: "/electrical/circuit-laws/kirchhoff" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Electric Power", href: "/electrical/content/power" },
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Energy Conversion", href: "/convertor/energy" }
],
"/electrical/circuit-laws/kirchhoff": [
  { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
  { label: "Electronic Components", href: "/electrical/components" }
],
"/electrical/circuit-laws/coulomb": [
  { label: "Electric Charge", href: "/electrical/content/charge" },
  { label: "Electrical Current", href: "/electrical/content/current" },
  { label: "Ampere (A)", href: "/electrical/units/ampere" },
  { label: "Electrical Voltage", href: "/electrical/content/voltage" },
  { label: "Capacitor", href: "/electrical/content/capacitor" },
  { label: "Resistor", href: "/electrical/content/resistor" },
  { label: "Electrical Units", href: "/electrical/units" }
],
"/howto/save-electricity": [
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "Energy Consumption Calculator", href: "/electrical-calculators/energy-consumption-calculator" },
  { label: "How to Save Energy", href: "/howto/save-energy" }
],
"/howto/save-energy": [
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "How to Save Electricity", href: "/howto/save-electricity" }
],
"/tools/color-scheme-generator": [
  { label: "RGB Color Picker", href: "/tools/rgb-color-picker" },
  { label: "Web Safe Colors", href: "/tools/web-safe-colors" },
  { label: "Yellow Color Codes", href: "/tools/html-color-codes#yellow" },
  { label: "Gold Color Codes", href: "/tools/html-color-codes#gold" },
  { label: "Color Code Converter", href: "/tools/html-color-codes" }
],
"/tools/html-color-codes": [
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
  { label: "Black Color", href: "/color-codes?color=black" },
  { label: "Blue Color", href: "/color-codes?color=blue" },
  { label: "Brown Color", href: "/color-codes?color=brown" },
  { label: "Cyan Color", href: "/color-codes?color=cyan" },
  { label: "Gold Color", href: "/color-codes?color=gold" },
  { label: "Green Color", href: "/color-codes?color=green" },
  { label: "Grey Color", href: "/color-codes?color=grey" },
  { label: "Maroon Color", href: "/color-codes?color=maroon" },
  { label: "Orange Color", href: "/color-codes?color=orange" },
  { label: "Pink Color", href: "/color-codes?color=pink" },
  { label: "Purple Color", href: "/color-codes?color=purple" },
  { label: "Red Color", href: "/color-codes?color=red" },
  { label: "White Color", href: "/color-codes?color=white" },
  { label: "Yellow Color", href: "/color-codes?color=yellow" },
  { label: "Beige Color", href: "/color-codes?color=beige" },
  { label: "Ivory Color", href: "/color-codes?color=ivory" },
  { label: "Lavender Color", href: "/color-codes?color=lavender" },
  { label: "Magenta Color", href: "/color-codes?color=magenta" },
  { label: "Peach Color", href: "/color-codes?color=peach" },
  { label: "Silver Color", href: "/color-codes?color=silver" },
  { label: "Tan Color", href: "/color-codes?color=tan" },
  { label: "Teal Color", href: "/color-codes?color=teal" },
  { label: "Turquoise Color", href: "/color-codes?color=turquoise" }
],
"/tools/rgb-color-picker": [
  { label: "RGB to HEX Converter", href: "/tools/html-color-codes#rgb-to-hex" },
  { label: "RGB to HSV Converter", href: "/tools/html-color-codes#rgb-to-hsv" },
  { label: "RGB to HSL Converter", href: "/tools/html-color-codes#rgb-to-hsl" },
  { label: "RGB to CMYK Converter", href: "/tools/html-color-codes#rgb-to-cmyk" },
  { label: "Color Conversions", href: "/tools/html-color-codes#conversion" },
  { label: "Color Wheel Chart", href: "/tools/color-scheme-generator" },
  { label: "Screen Color Tester", href: "/tools/color-tester" },
  { label: "HTML Color Codes", href: "/tools/html-color-codes" },
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "Web Safe Colors", href: "/tools/web-safe-colors" },
  { label: "Yellow Color", href: "/tools/html-color-codes#yellow" },
  { label: "Gold Color", href: "/tools/html-color-codes#gold" }
],
"/tools/web-safe-colors": [
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
  { label: "Black Color", href: "/tools/html-color-codes#black" },
  { label: "Blue Color", href: "/tools/html-color-codes#blue" },
  { label: "Brown Color", href: "/tools/html-color-codes#brown" },
  { label: "Cyan Color", href: "/tools/html-color-codes#cyan" },
  { label: "Gold Color", href: "/tools/html-color-codes#gold" },
  { label: "Green Color", href: "/tools/html-color-codes#green" },
  { label: "Grey Color", href: "/tools/html-color-codes#grey" },
  { label: "Maroon Color", href: "/tools/html-color-codes#maroon" },
  { label: "Orange Color", href: "/tools/html-color-codes#orange" },
  { label: "Pink Color", href: "/tools/html-color-codes#pink" },
  { label: "Purple Color", href: "/tools/html-color-codes#purple" },
  { label: "Red Color", href: "/tools/html-color-codes#red" },
  { label: "White Color", href: "/tools/html-color-codes#white" },
  { label: "Yellow Color", href: "/tools/html-color-codes#yellow" },
  { label: "Beige Color", href: "/tools/html-color-codes#beige" },
  { label: "Ivory Color", href: "/tools/html-color-codes#ivory" },
  { label: "Lavender Color", href: "/tools/html-color-codes#lavender" },
  { label: "Magenta Color", href: "/tools/html-color-codes#magenta" },
  { label: "Peach Color", href: "/tools/html-color-codes#peach" },
  { label: "Silver Color", href: "/tools/html-color-codes#silver" },
  { label: "Tan Color", href: "/tools/html-color-codes#tan" },
  { label: "Teal Color", href: "/tools/html-color-codes#teal" },
  { label: "Turquoise Color", href: "/tools/html-color-codes#turquoise" }
],
"/tools/html-character-codes": [
  { label: "URL Encoder/Decoder", href: "/tools/url-encode" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "Windows ALT Codes", href: "/text/alt-codes" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Greek Alphabet", href: "/symbols/greek" },
  { label: "HTML Color Codes", href: "/tools/html-color-codes" },
  { label: "& HTML Code", href: "/tools/html-character-codes#ampersand" },
  { label: "Check Mark HTML Code", href: "/tools/html-character-codes#check" },
  { label: "Copyright HTML Code", href: "/tools/html-character-codes#copyright" },
  { label: "Euro HTML Code", href: "/tools/html-character-codes#euro" },
  { label: "Heart HTML Code", href: "/tools/html-character-codes#heart" },
  { label: "Quotes HTML Code", href: "/tools/html-character-codes#quotes" },
  { label: "Space HTML Code", href: "/tools/html-character-codes#space" },
  { label: "Trademark HTML Code", href: "/tools/html-character-codes#trademark" }
],
"/tools/html-comments-guide": [
  { label: "HTML Mailto Link", href: "/tools/html-link-generator#mailto" },
  { label: "HTML Table Generator", href: "/tools/html-table-generator" },
  { label: "HTML Color Codes", href: "/tools/html-color-codes" }
],
"/tools/html-tables-generator": [
  { label: "HTML Comments", href: "/tools/html-comments-guide" },
  { label: "HTML Anchor Link", href: "/tools/html-link-generator#anchor" },
  { label: "HTML Button Link", href: "/tools/html-link-generator#button" },
  { label: "HTML Download Link", href: "/tools/html-link-generator#download" },
  { label: "HTML Image Link", href: "/tools/html-link-generator#image" },
  { label: "HTML Link Color", href: "/tools/html-color-codes#link" },
  { label: "HTML Mailto Link", href: "/tools/html-link-generator#mailto" },
  { label: "HTML New Window Link", href: "/tools/html-link-generator#target" },
  { label: "HTML Text Link", href: "/tools/html-link-generator#text" }
],
"/tools/html-color": [
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
  { label: "Black Color", href: "/tools/html-color-codes#black" },
  { label: "Blue Color", href: "/tools/html-color-codes#blue" },
  { label: "Brown Color", href: "/tools/html-color-codes#brown" },
  { label: "Cyan Color", href: "/tools/html-color-codes#cyan" },
  { label: "Gold Color", href: "/tools/html-color-codes#gold" },
  { label: "Green Color", href: "/tools/html-color-codes#green" },
  { label: "Grey Color", href: "/tools/html-color-codes#grey" },
  { label: "Maroon Color", href: "/tools/html-color-codes#maroon" },
  { label: "Orange Color", href: "/tools/html-color-codes#orange" },
  { label: "Pink Color", href: "/tools/html-color-codes#pink" },
  { label: "Purple Color", href: "/tools/html-color-codes#purple" },
  { label: "Red Color", href: "/tools/html-color-codes#red" },
  { label: "White Color", href: "/tools/html-color-codes#white" },
  { label: "Yellow Color", href: "/tools/html-color-codes#yellow" },
  { label: "Beige Color", href: "/tools/html-color-codes#beige" },
  { label: "Ivory Color", href: "/tools/html-color-codes#ivory" },
  { label: "Lavender Color", href: "/tools/html-color-codes#lavender" },
  { label: "Magenta Color", href: "/tools/html-color-codes#magenta" },
  { label: "Peach Color", href: "/tools/html-color-codes#peach" },
  { label: "Silver Color", href: "/tools/html-color-codes#silver" },
  { label: "Tan Color", href: "/tools/html-color-codes#tan" },
  { label: "Teal Color", href: "/tools/html-color-codes#teal" },
  { label: "Turquoise Color", href: "/tools/html-color-codes#turquoise" }
],
"/tools/canonical-url-generator": [
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "HTML Redirection", href: "/tools/html-redirection" },
  { label: "Redirect Generator", href: "/tools/redirect-generator" }
],
"/tools/htaccess-redirection": [
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "PHP Redirection", href: "/tools/php-redirection" },
  { label: "Redirect Generator", href: "/tools/redirect-generator" }
],
"/tools/html-redirection": [
  { label: "Canonical URL Link", href: "/tools/canonical-url-generator" },
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "Redirect Generator", href: "/tools/redirect-generator" }
],
"/tools/javascript-redirection": [
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "jQuery Redirection", href: "/tools/jquery-redirection" },
  { label: "Redirect Generator", href: "/tools/redirect-generator" }
],
"/tools/php-redirection": [
  { label: "PHP Redirect Generator", href: "/tools/php-redirection" },
  { label: ".htaccess Redirection", href: "/tools/htaccess-redirection" },
  { label: "URL Redirection", href: "/tools/url-encode" }
],
"/tools/screen-resolution-statistics": [
  { label: "What Is My Screen Resolution", href: "/tools/screen-resolution" },
  { label: "Screen Resolution Simulator", href: "/tools/screen-resolution-statistics" }
],
"/lighting-calculators/candela-to-lumens-calculator": [
  { label: "Lumens to Candela Calculator", href: "/lighting-calculators/lumens-to-candela-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" }
],
"/lighting-calculators/candela-to-lux-calculator": [
  { label: "Candela to Lumens Calculator", href: "/lighting-calculators/candela-to-lumens-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" }
],
"/lighting-calculators/footcandles-to-lux-calculator": [
  { label: "Lux to Footcandles Calculator", href: "/lighting-calculators/lux-to-footcandles-calculator" },
  { label: "Lumens to Lux Calculator", href: "/lighting-calculators/lumens-to-lux-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" }
],
"/lighting-calculators/lumens-to-candela-calculator": [
  { label: "Candela to Lumens Calculator", href: "/lighting-calculators/candela-to-lumens-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" }
],
"/lighting-calculators/lumens-to-lux-calculator": [
  { label: "Lux to Lumens Calculator", href: "/lighting-calculators/lux-to-lumens-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/lumens-to-millicandela-calculator": [
  { label: "Millicandela to Lumens Calculator", href: "/lighting-calculators/millicandela-to-lumens-calculator" },
  { label: "Candela to Lumens Calculator", href: "/lighting-calculators/candela-to-lumens-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/lumens-to-watts-calculator": [
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lumens to Lux Calculator", href: "/lighting-calculators/lumens-to-lux-calculator" },
  { label: "Amps to Watts Calculator", href: "/electrical-calculations/amps-to-watts" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/lux-to-candela-calculator": [
  { label: "Candela to Lumens Calculator", href: "/lighting-calculators/candela-to-lumens-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/lux-to-footcandles-calculator": [
  { label: "Footcandles to Lux Calculator", href: "/lighting-calculators/footcandles-to-lux-calculator" },
  { label: "Lumens to Lux Calculator", href: "/lighting-calculators/lumens-to-lux-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculations", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/lux-to-lumens-calculator": [
  { label: "Lumens to Lux Calculator", href: "/lighting-calculators/lumens-to-lux-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/lux-to-watts-calculator": [
  { label: "Watts to Lux Calculator", href: "/lighting-calculators/watts-to-lux-calculator" },
  { label: "Lux to Watts Calculation", href: "/electrical-calculations/watts-to-lux" },
  { label: "Lumens to Watts Calculator", href: "/lighting-calculators/lumens-to-watts-calculator" },
  { label: "Lux to Lumens Calculator", href: "/lighting-calculators/lux-to-lumens-calculator" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/millicandela-to-lumens-calculator": [
  { label: "Lumens to Millicandela Calculator", href: "/lighting-calculators/lumens-to-millicandela-calculator" },
  { label: "Lumens to Candela Calculator", href: "/lighting-calculators/lumens-to-candela-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/watts-to-lumens-calculator": [
  { label: "Lumens to Watts Calculator", href: "/lighting-calculators/lumens-to-watts-calculator" },
  { label: "Watts to Lumens Calculation", href: "/electrical-calculations/watts-to-lumens" },
  { label: "Lux to Lumens Calculator", href: "/lighting-calculators/lux-to-lumens-calculator" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/lighting-calculators/watts-to-lux-calculator": [
  { label: "Lux to Watts Calculator", href: "/lighting-calculators/lux-to-watts-calculator" },
  { label: "Watts to Lux Calculation", href: "/electrical-calculations/watts-to-lux" },
  { label: "Lumens to Watts Calculator", href: "/lighting-calculators/lumens-to-watts-calculator" },
  { label: "Lux to Lumens Calculator", href: "/lighting-calculators/lux-to-lumens-calculator" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/electrical/lighting/lumens": [
  { label: "Watts to Lux Calculator", href: "/lighting-calculators/watts-to-lux-calculator" },
  { label: "Lux to Watts Calculation", href: "/electrical-calculations/watts-to-lux" },
  { label: "Lumens to Watts Calculator", href: "/lighting-calculators/lumens-to-watts-calculator" },
  { label: "Lux to Lumens Calculator", href: "/lighting-calculators/lux-to-lumens-calculator" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/electrical/lighting/led-savings": [
  { label: "Lumens to Watts Calculator", href: "/lighting-calculators/lumens-to-watts-calculator" },
  { label: "Watts to Lumens Calculation", href: "/electrical-calculations/watts-to-lumens" },
  { label: "Lux to Lumens Calculator", href: "/lighting-calculators/lux-to-lumens-calculator" },
  { label: "Watts to Amps Calculator", href: "/electrical-calculations/watts-to-amps" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/electrical/lighting/wattage": [
  { label: "Lumens to Lux Calculator", href: "/lighting-calculators/lumens-to-lux-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/electrical/lighting/color-temp": [
  { label: "Lumens to Millicandela Calculator", href: "/lighting-calculators/lumens-to-millicandela-calculator" },
  { label: "Lumens to Candela Calculator", href: "/lighting-calculators/lumens-to-candela-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Watt (W)", href: "/electrical/units/watt" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/electrical/lighting/energy-usage": [
  { label: "Lumens to Lux Calculator", href: "/lighting-calculators/lumens-to-lux-calculator" },
  { label: "Watts to Lumens Calculator", href: "/lighting-calculators/watts-to-lumens-calculator" },
  { label: "Lumens to Watts Calculation", href: "/electrical-calculations/lumen-to-watt" },
  { label: "Lighting Calculators", href: "/lighting-calculators" },
  { label: "Electrical Calculation", href: "/electrical-calculations" },
  { label: "Power Conversion", href: "/electrical-calculations/power-calculator" },
],
"/word-counter": [
  { label: "Character Counter", href: "/character-counter" },
  { label: "Line Counter", href: "/line-counter" },
  { label: "Word Frequency", href: "/word-frequency" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
],
"/character-counter": [
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "Word Counter", href: "/word-counter" },
  { label: "Line Counter", href: "/line-counter" },
  { label: "Word Frequency", href: "/word-frequency" },
],
"/line-counter": [
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "Word Counter", href: "/word-counter" },
  { label: "Character Counter", href: "/character-counter" },
  { label: "Word Frequency", href: "/word-frequency" },
],
"/word-frequency": [
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "Word Counter", href: "/word-counter" },
  { label: "Character Counter", href: "/character-counter" },
  { label: "Line Counter", href: "/line-counter" },
],
"/image-to-text": [
  { label: "Word Counter", href: "/word-counter" },
  { label: "Character Counter", href: "/character-counter" },
  { label: "Line Counter", href: "/line-counter" },
  { label: "Word Frequency", href: "/word-frequency" },
],
"/image-to-pdf": [
  { label: "Word Counter", href: "/word-counter" },
  { label: "Character Counter", href: "/character-counter" },
  { label: "Line Counter", href: "/line-counter" },
  { label: "Word Frequency", href: "/word-frequency" },
],
"/jpg-to-pdf": [
  { label: "Word Counter", href: "/word-counter" },
  { label: "Character Counter", href: "/character-counter" },
  { label: "Line Counter", href: "/line-counter" },
  { label: "Word Frequency", href: "/word-frequency" },
],
"/png-to-pdf": [
  { label: "Word Counter", href: "/word-counter" },
  { label: "Character Counter", href: "/character-counter" },
  { label: "Line Counter", href: "/line-counter" },
  { label: "Word Frequency", href: "/word-frequency" },
],
"/bar-graph": [
  { label: "Line Graph Maker", href: "/line-graph" },
  { label: "Pie Chart Maker", href: "/pie-chart" },
  { label: "XY Scatter Plot Maker", href: "/scatter-plot" },
  { label: "Table Chart Maker", href: "/table-chart" },
],"/alarm-clock": [
  { label: "Camera Online", href: "/camera" },
  { label: "Flashlight Online", href: "/tools/flashlight" }, // Assuming route if exists
  { label: "Microphone Test", href: "/mic-test" },
  { label: "Webcam Test", href: "/webcam-test" },
],
"/call-recorder": [
  { label: "Tone Generator", href: "/tone-generator" },
  { label: "Microphone Test", href: "/mic-test" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Online Mirror", href: "/online-mirror" },
  { label: "Online Notepad", href: "/notepad" },
],
"/camera": [
  { label: "Online Mirror", href: "/online-mirror" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Webcam Test", href: "/webcam-test" },
  { label: "Screenshot", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Notepad", href: "/notepad" },
],
"/calendar": [
  { label: "Countdown Timer", href: "/countdown" },
  { label: "Click Counter", href: "/click-counter" },
  { label: "Click Speed Test", href: "/cps-test" },
  { label: "Online Scoreboard", href: "/scoreboard" },
],
"/chart-maker": [
  { label: "XY Scatter Plot Maker", href: "/scatter-plot" },
  { label: "Bar Graph Maker", href: "/bar-graph" },
  { label: "Pie Chart Maker", href: "/pie-chart" },
],
"/click-counter": [
  { label: "CPS Test", href: "/cps-test" },
  { label: "Online Scoreboard", href: "/scoreboard" },
  { label: "Online Timer", href: "/countdown" },
  { label: "Online Mirror", href: "/online-mirror" },
],
"/cps-test": [
  { label: "Click Counter", href: "/click-counter" },
  { label: "Online Scoreboard", href: "/scoreboard" },
  { label: "Online Timer", href: "/countdown" },
  { label: "Online Mirror", href: "/online-mirror" },
  { label: "1 Second Click Test", href: "/cps-test#1s" },
  { label: "2 Second Click Test", href: "/cps-test#2s" },
  { label: "5 Second Click Test", href: "/cps-test#5s" },
  { label: "10 Second Click Test", href: "/cps-test#10s" },
  { label: "15 Second Click Test", href: "/cps-test#15s" },
  { label: "20 Second Click Test", href: "/cps-test#20s" },
  { label: "30 Second Click Test", href: "/cps-test#30s" },
  { label: "60 Second Click Test", href: "/cps-test#60s" },
  { label: "100 Second Click Test", href: "/cps-test#100s" },
],
"/countdown": [
  { label: "Online Stopwatch", href: "/stopwatch" },
  { label: "Online Clock", href: "/online-clock" },
  { label: "Click Counter", href: "/click-counter" },
  { label: "Click Speed Test", href: "/cps-test" },
  { label: "Online Scoreboard", href: "/scoreboard" },
  
],
"/current-time": [
  { label: "UK Time", href: "/current-time#uk" },
  { label: "New York Time", href: "/current-time#newyork" },
  { label: "Los Angeles Time", href: "/current-time#la" },
  { label: "Chicago Time", href: "/current-time#chicago" },
  { label: "Tokyo Time", href: "/current-time#tokyo" },
  { label: "Today's Date", href: "/todays-date" },
  { label: "Online Clock", href: "/online-clock" },
  { label: "Calendar", href: "/calendar" },
  { label: "Countdown Timer", href: "/countdown" },
  { label: "Stopwatch", href: "/stopwatch" },
],
"/line-graph": [
  { label: "XY Scatter Plot Maker", href: "/scatter-plot" },
  { label: "Bar Graph Maker", href: "/bar-graph" },
  { label: "Pie Chart Maker", href: "/pie-chart" },
  { label: "Table Chart Maker", href: "/table-chart" },
],
"/grocery-list": [
  { label: "XY Scatter Plot Maker", href: "/scatter-plot" },
  { label: "Bar Graph Maker", href: "/bar-graph" },
  { label: "Pie Chart Maker", href: "/pie-chart" },
],
"/mic-test": [
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Tone Generator", href: "/tone-generator" },
  { label: "Mirror App Online", href: "/online-mirror" },
  { label: "Screenshot", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Notepad App Online", href: "/notepad" },
],
"/online-clock": [
  { label: "Current Time Now", href: "/current-time" },
  { label: "Today's Date", href: "/todays-date" },
  { label: "Calendar", href: "/calendar" },
  { label: "Countdown Timer", href: "/countdown" },
  { label: "Stopwatch", href: "/stopwatch" },
],
"/online-mirror": [
  { label: "Camera Online", href: "/camera" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Webcam Test", href: "/webcam-test" },
  { label: "Screenshot", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Notepad", href: "/notepad" },
],
"/notepad": [
  { label: "Current Time Now", href: "/current-time" },
  { label: "Today's Date", href: "/todays-date" },
  { label: "Calendar", href: "/calendar" },
  { label: "Countdown Timer", href: "/countdown" },
  { label: "Stopwatch", href: "/stopwatch" },
],
"/notes": [
  { label: "Current Time Now", href: "/current-time" },
  { label: "Today's Date", href: "/todays-date" },
  { label: "Calendar", href: "/calendar" },
  { label: "Countdown Timer", href: "/countdown" },
  { label: "Stopwatch", href: "/stopwatch" },
],
"/password-generator": [
  { label: "Random Number Generator", href: "/random-number" },
  { label: "4 Digits Password", href: "/password-generator#4-digit" },
  { label: "5 Digits Password", href: "/password-generator#5-digit" },
  { label: "6 Digits Password", href: "/password-generator#6-digit" },
  { label: "7 Digits Password", href: "/password-generator#7-digit" },
  { label: "8 Digits Password", href: "/password-generator#8-digit" },
  { label: "4 Letters Password", href: "/password-generator#4-letters" },
  { label: "5 Letters Password", href: "/password-generator#5-letters" },
  { label: "6 Letters Password", href: "/password-generator#6-letters" },
  { label: "7 Letters Password", href: "/password-generator#7-letters" },
  { label: "8 Letters Password", href: "/password-generator#8-letters" },
  { label: "10 Letters Password", href: "/password-generator#10-letters" },
  { label: "4 Characters Password", href: "/password-generator#4-chars" },
  { label: "5 Characters Password", href: "/password-generator#5-chars" },
  { label: "6 Characters Password", href: "/password-generator#6-chars" },
  { label: "7 Characters Password", href: "/password-generator#7-chars" },
  { label: "8 Characters Password", href: "/password-generator#8-chars" },
  { label: "10 Characters Password", href: "/password-generator#10-chars" },
],
"/random-number": [
  { label: "Password Generator", href: "/password-generator" },
  { label: "Random Number 1-2", href: "/random-number#1-2" },
  { label: "Random Number 1-3", href: "/random-number#1-3" },
  { label: "Random Number 1-4", href: "/random-number#1-4" },
  { label: "Random Number 1-5", href: "/random-number#1-5" },
  { label: "Random Number 1-6", href: "/random-number#1-6" },
  { label: "Random Number 1-7", href: "/random-number#1-7" },
  { label: "Random Number 1-8", href: "/random-number#1-8" },
  { label: "Random Number 1-9", href: "/random-number#1-9" },
  { label: "Random Number 1-10", href: "/random-number#1-10" },
  { label: "Random Number 1-100", href: "/random-number#1-100" },
],
"/pie-chart": [
  { label: "Bar Graph Maker", href: "/bar-graph" },
  { label: "Line Graph Maker", href: "/line-graph" },
  { label: "XY Scatter Plot Maker", href: "/scatter-plot" },
  { label: "Table Chart Maker", href: "/table-chart" },
],
"/scatter-plot": [
  { label: "Line Graph Maker", href: "/line-graph" },
  { label: "Bar Graph Maker", href: "/bar-graph" },
  { label: "Pie Chart Maker", href: "/pie-chart" },
  { label: "Table Chart Maker", href: "/table-chart" },
],
"/scoreboard": [
  { label: "Click Counter", href: "/click-counter" },
  { label: "Click Speed Test", href: "/cps-test" },
  { label: "Online Timer", href: "/countdown" },
],"/screenshot": [
  { label: "Screenshot on Android", href: "/screenshot#android" },
  { label: "Screenshot on iPhone", href: "/screenshot#iphone" },
  { label: "Screenshot on Mac", href: "/screenshot#mac" },
  { label: "Screenshot on Windows", href: "/screenshot#windows" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Online Mirror", href: "/online-mirror" },
  { label: "Webcam Test", href: "/webcam-test" },
],
"/screen-recorder": [
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Online Mirror", href: "/online-mirror" },
  { label: "Webcam Test", href: "/webcam-test" },
],
"/speech-to-text": [
  { label: "Text to Speech Reader", href: "/text-to-speech" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
],
"/stopwatch": [
  { label: "Countdown Timer", href: "/countdown" },
  { label: "Click Counter", href: "/click-counter" },
  { label: "Click Speed Test", href: "/cps-test" },
  { label: "Online Scoreboard", href: "/scoreboard" },
],
"/text-editor": [
  { label: "Text to Speech Reader", href: "/text-to-speech" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
],
"/table-chart": [
  { label: "Line Graph Maker", href: "/line-graph" },
  { label: "XY Scatter Plot Maker", href: "/scatter-plot" },
  { label: "Bar Graph Maker", href: "/bar-graph" },
  { label: "Pie Chart Maker", href: "/pie-chart" },
],
"/text-to-speech": [
  { label: "Speech to Text Reader", href: "/speech-to-text" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
],
"/todays-date": [
  { label: "Current Time", href: "/current-time" },
  { label: "Online Clock", href: "/online-clock" },
  { label: "Calendar", href: "/calendar" },
  { label: "Countdown Timer", href: "/countdown" },
  { label: "Stopwatch", href: "/stopwatch" },
],
"/todo-list": [
  { label: "Text to Speech Reader", href: "/text-to-speech" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
],
"/tone-generator": [
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Microphone Test", href: "/mic-test" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Online Mirror", href: "/online-mirror" },
  { label: "Online Notepad", href: "/notepad" },
  { label: "300Hz Tone", href: "/tone-generator#300hz" },
  { label: "350Hz Tone", href: "/tone-generator#350hz" },
  { label: "450Hz Tone", href: "/tone-generator#450hz" },
  { label: "500Hz Tone", href: "/tone-generator#500hz" },
  { label: "600Hz Tone", href: "/tone-generator#600hz" },
  { label: "700Hz Tone", href: "/tone-generator#700hz" },
  { label: "800Hz Tone", href: "/tone-generator#800hz" },
  { label: "900Hz Tone", href: "/tone-generator#900hz" },
  { label: "1000Hz Tone", href: "/tone-generator#1000hz" },
  { label: "1500Hz Tone", href: "/tone-generator#1500hz" },
  { label: "2000Hz Tone", href: "/tone-generator#2000hz" },
],
"/ruler-cm": [
  { label: "Text to Speech Reader", href: "/text-to-speech" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
],
"/ruler-inch": [
  { label: "Text to Speech Reader", href: "/text-to-speech" },
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
],
"/voice-recorder": [
  { label: "Tone Generator", href: "/tone-generator" },
  { label: "Microphone Test", href: "/mic-test" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Screenshot Online", href: "/screenshot" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Online Mirror", href: "/online-mirror" },
  { label: "Online Notepad", href: "/notepad" },
],
"/webcam-test": [
  { label: "Voice Recorder", href: "/voice-recorder" },
  { label: "Text to Speech", href: "/text-to-speech" },
  { label: "Mirror App Online", href: "/online-mirror" },
  { label: "Camera Online App", href: "/camera" },
  { label: "Tone Generator", href: "/tone-generator" },
  { label: "Screenshot", href: "/screenshot" },
  { label: "Screen Recorder", href: "/screen-recorder" },
  { label: "Notepad App Online", href: "/notepad" },
],
"/tools/redirect-generator": [
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "PHP Redirection", href: "/tools/php-redirection" },
  { label: ".htaccess Redirection", href: "/tools/htaccess-redirection" },
  { label: "HTML Redirection", href: "/tools/html-redirection" },
  { label: "JavaScript Redirection", href: "/tools/javascript-redirection" },
  { label: "HTML Table Generator", href: "/tools/html-table-generator" },
  { label: "Online Pixel Ruler", href: "/tools/pixel-ruler" },
  { label: "Color Tester", href: "/tools/color-tester" },
  { label: "Base64 Decoder", href: "/tools/base64-decode" },
  { label: "Base64 Encoder", href: "/tools/base64-encode" },
],
"/tools/base64-encode": [
  { label: "Base64 Encode", href: "/tools/base64-encode" },
  { label: "URL Encode", href: "/tools/url-encode" },
  { label: "URL Decode", href: "/tools/url-decode" },
  { label: "Image to Base64", href: "/tools/image-to-base64" },
  { label: "Base64 to Image", href: "/tools/base64-to-image" },
  { label: "ASCII to Binary Converter", href: "/tools/base64-encode#ascii-to-binary" },
  { label: "ASCII to Hex Converter", href: "/tools/base64-encode#ascii-to-hex" },
  { label: "Binary to ASCII Converter", href: "/tools/base64-encode#binary-to-ascii" },
  { label: "Hex to ASCII Converter", href: "/tools/base64-encode#hex-to-ascii" },
  { label: "Number Conversion", href: "/tools/base64-encode#number-conversion" },
  { label: "Image Conversion", href: "/image-conversions" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "HTTP Status Checker", href: "/tools/http-status-checker" },
],
"/tools/base64-decode": [
  { label: "Base64 Decode", href: "/tools/base64-decode" },
  { label: "URL Encode", href: "/tools/url-encode" },
  { label: "URL Decode", href: "/tools/url-decode" },
  { label: "Image to Base64", href: "/tools/image-to-base64" },
  { label: "Base64 to Image", href: "/tools/base64-to-image" },
  { label: "ASCII to Binary Converter", href: "/tools/base64-encode#ascii-to-binary" },
  { label: "ASCII to Hex Converter", href: "/tools/base64-encode#ascii-to-hex" },
  { label: "Binary to ASCII Converter", href: "/tools/base64-encode#binary-to-ascii" },
  { label: "Hex to ASCII Converter", href: "/tools/base64-encode#hex-to-ascii" },
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "HTTP Status Checker", href: "/tools/http-status-checker" },
  { label: "Password Generator", href: "/password-generator" },
],
"/tools/base64-to-image": [
  { label: "Base64 Decoder", href: "/tools/base64-decode" },
  { label: "Base64 Encoder", href: "/tools/base64-encode" },
  { label: "URL Encoder", href: "/tools/url-encode" },
  { label: "URL Decoder", href: "/tools/url-decode" },
  { label: "ASCII to Binary Converter", href: "/tools/base64-encode#ascii-to-binary" },
  { label: "ASCII to Hex Converter", href: "/tools/base64-encode#ascii-to-hex" },
  { label: "Binary to ASCII Converter", href: "/tools/base64-encode#binary-to-ascii" },
  { label: "Hex to ASCII Converter", href: "/tools/base64-encode#hex-to-ascii" },
  { label: "Number Conversion", href: "/tools/base64-encode#number-conversion" },
  { label: "Image Conversion", href: "/image-conversions" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "HTTP Status Checker", href: "/tools/http-status-checker" },
],
"/tools/image-to-base64": [
  { label: "Base64 Decoder", href: "/tools/base64-decode" },
  { label: "Base64 Encoder", href: "/tools/base64-encode" },
  { label: "URL Encoder", href: "/tools/url-encode" },
  { label: "URL Decoder", href: "/tools/url-decode" },
  { label: "ASCII to Binary Converter", href: "/tools/base64-encode#ascii-to-binary" },
  { label: "ASCII to Hex Converter", href: "/tools/base64-encode#ascii-to-hex" },
  { label: "Binary to ASCII Converter", href: "/tools/base64-encode#binary-to-ascii" },
  { label: "Hex to ASCII Converter", href: "/tools/base64-encode#hex-to-ascii" },
  { label: "Number Conversion", href: "/tools/base64-encode#number-conversion" },
  { label: "Image Conversion", href: "/image-conversions" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "Unicode Characters", href: "/text/unicode-page" },
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "HTTP Status Checker", href: "/tools/http-status-checker" },
],
"/tools/html-link-generator": [
  { label: "HTML Table Generator", href: "/tools/html-table-generator" },
  { label: "HTML Links", href: "/tools/html-comments-guide#links" },
  { label: "HTML Mailto Link", href: "/tools/html-link-generator#mailto" },
],
"/tools/html-editor": [
  { label: "HTML Table Generator", href: "/tools/html-table-generator" },
  { label: "HTML Links", href: "/tools/html-comments-guide#links" },
  { label: "HTML Mailto Link", href: "/tools/html-link-generator#mailto" },
],
"/tools/html-table-generator": [
  { label: "Color Tester", href: "/tools/color-tester" },
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
],
"/tools/http-header-checker": [
  { label: "HTTP Status Checker", href: "/tools/http-status-checker" },
  { label: "Base64 Decoder/Encoder", href: "/tools/base64-encode" },
  { label: "URL Decoder/Encoder", href: "/tools/url-encode" },
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
],
"/tools/http-status-checker": [
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "Base64 Decoder/Encoder", href: "/tools/base64-encode" },
  { label: "URL Decoder/Encoder", href: "/tools/url-encode" },
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
],
"/tools/screen-resolution": [
  { label: "Window Size", href: "/tools/window-size" },
  { label: "Screen Resolution Statistics", href: "/tools/screen-resolution-statistics" },
  { label: "Screen Resolution Tester", href: "/tools/screen-resolution" },
],
"/tools/url-encode": [
  { label: "URL Decode", href: "/tools/url-decode" },
  { label: "Base64 Decode", href: "/tools/base64-decode" },
  { label: "Base64 Encode", href: "/tools/base64-encode" },
  { label: "Image to Base64", href: "/tools/image-to-base64" },
  { label: "Base64 to Image", href: "/tools/base64-to-image" },
  { label: "HTML Mailto Link", href: "/tools/html-link-generator#mailto" },
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "HTTP Status Checker", href: "/tools/http-status-checker" },
],
"/tools/url-decode": [
  { label: "URL Decode", href: "/tools/url-decode" },
  { label: "Base64 Decode", href: "/tools/base64-decode" },
  { label: "Base64 Encode", href: "/tools/base64-encode" },
  { label: "Image to Base64", href: "/tools/image-to-base64" },
  { label: "Base64 to Image", href: "/tools/base64-to-image" },
  { label: "HTML Mailto Link", href: "/tools/html-link-generator#mailto" },
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "HTTP Status Checker", href: "/tools/http-status-checker" },
],
"/tools/window-size": [
  { label: "Screen Resolution", href: "/tools/screen-resolution" },
  { label: "Screen Resolution Tester", href: "/tools/screen-resolution-statistics" },
],
"/tools/pixel-ruler": [
  { label: "HTTP Header Checker", href: "/tools/http-header-checker" },
  { label: "Base64 Decoder/Encoder", href: "/tools/base64-encode" },
  { label: "URL Decoder/Encoder", href: "/tools/url-encode" },
  { label: "URL Redirection", href: "/tools/url-encode" },
  { label: "ASCII Table", href: "/text/ascii-table" },
  { label: "HTML Character Codes", href: "/tools/html-character-codes" },
],
"/tools/svg-viewer": [
  { label: "Screen Resolution", href: "/tools/screen-resolution" },
  { label: "Screen Resolution Tester", href: "/tools/screen-resolution-statistics" },
],
"/tools/color-picker-from-image": [
  { label: "Window Size", href: "/tools/window-size" },
  { label: "Screen Resolution Statistics", href: "/tools/screen-resolution-statistics" },
  { label: "Screen Resolution Tester", href: "/tools/screen-resolution" },
],
"/tools/color-tester": [
  { label: "Window Size", href: "/tools/window-size" },
  { label: "Screen Resolution Statistics", href: "/tools/screen-resolution-statistics" },
  { label: "Screen Resolution Tester", href: "/tools/screen-resolution" },
],
"/eco/reduce-carbon-footprint": [
  { label: "How to Reduce Plastic Waste", href: "/eco/reduce-plastic-waste" },
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "How to Save Electricity", href: "/eco/save-electricity" },
],
"/eco/reduce-plastic-waste": [
  { label: "How to Reduce Carbon Footprint", href: "/eco/reduce-carbon-footprint" },
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "How to Save Electricity", href: "/eco/save-electricity" },
],
"/eco/save-fuel": [
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
],
"/eco/save-electricity": [
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "Energy Consumption Calculator", href: "/electrical-calculators/energy-consumption-calculator" },
  { label: "How to Save Energy", href: "/eco/save-energy" },
],
"/eco/save-energy": [
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "How to Save Electricity", href: "/eco/save-electricity" },
],
"/eco/green-hosting-comparison": [
  { label: "How to Reduce Carbon Footprint", href: "/eco/reduce-carbon-footprint" },
  { label: "How to Reduce Plastic Waste Pollution", href: "/eco/reduce-plastic-waste" },
  { label: "How to Save Fuel", href: "/eco/save-fuel" },
  { label: "How to Save Electricity", href: "/eco/save-electricity" },
  { label: "How to Save Energy", href: "/eco/save-energy" },
  { label: "Plant Trees", href: "/eco/plant-trees" },
],
"/eco/plant-trees": [
  { label: "Energy Cost Calculator", href: "/electrical-calculators/energy-cost-calculator" },
  { label: "Electricity Bill Calculator", href: "/electrical-calculators/electricity-bill-calculator" },
  { label: "How to Save Electricity", href: "/eco/save-electricity" },
],
"/symbols/math": [
  { label: "Algebra Symbols", href: "/symbols/algebra" },
  { label: "Geometry Symbols", href: "/symbols/geometry" },
  { label: "Statistical Symbols", href: "/symbols/statistics" },
  { label: "Logic Symbols", href: "/symbols/logic" },
  { label: "Set Theory Symbols", href: "/symbols/set-theory" },
  { label: "Calculus & Analysis Symbols", href: "/symbols/calculus-analysis" },
  { label: "Number Symbols", href: "/symbols/numbers" },
  { label: "Greek Alphabet Symbols", href: "/symbols/greek" },
  { label: "Roman Numerals", href: "/symbols/roman-numerals" },
  { label: "Infinity Symbol", href: "/symbols/math#infinity" },
  { label: "HTML Symbols Codes", href: "/tools/html-character-codes" },
  { label: "Math Calculators", href: "/math/all" },
],
"/symbols/algebra": [
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Basic Math Symbols", href: "/symbols/math#basic" },
  { label: "Statistical Symbols", href: "/symbols/statistics" },
  { label: "Set Symbols", href: "/symbols/set-theory" },
  { label: "Calculus Symbols", href: "/symbols/calculus-analysis" },
  { label: "Infinity Symbol", href: "/symbols/math#infinity" },
],
"/symbols/geometry": [
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Algebra Symbols", href: "/symbols/algebra" },
  { label: "Statistical Symbols", href: "/symbols/statistics" },
  { label: "Set Symbols", href: "/symbols/set-theory" },
],
"/symbols/statistics": [
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Set Symbols", href: "/symbols/set-theory" },
  { label: "Basic Math Symbols", href: "/symbols/math#basic" },
  { label: "Logic Symbols", href: "/symbols/logic" },
  { label: "Greek Alphabet Symbols", href: "/symbols/greek" },
  { label: "Probability Distribution", href: "/probability/distribution" },
  { label: "Probability & Statistics", href: "/mathematics/probability" },
],
"/symbols/logic": [
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Set Symbols", href: "/symbols/set-theory" },
  { label: "Statistical Symbols", href: "/symbols/statistics" },
  { label: "Electrical Symbols", href: "/electrical/symbols" },
],
"/symbols/set-theory": [
  { label: "Probability & Statistics Symbols", href: "/symbols/statistics" },
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Logic Symbols", href: "/symbols/logic" },
  { label: "Probability & Statistics", href: "/mathematics/probability" },
],
"/symbols/calculus-analysis": [
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Algebra Symbols", href: "/symbols/algebra" },
  { label: "Calculus & Analysis", href: "/mathematics/calculus" },
],
"/symbols/numbers": [
  { label: "Numeral Systems", href: "/numbers/numeral-systems" },
  { label: "Math Symbols", href: "/symbols/math" },
],
"/symbols/greek": [
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Roman Numerals", href: "/symbols/roman-numerals" },
  { label: "HTML Greek Alphabet Codes", href: "/tools/html-character-codes#greek" },
  { label: "Unicode Greek Alphabet Codes", href: "/text/unicode-page#greek" },
  { label: "Electrical Symbols", href: "/electrical/symbols" },
],
"/symbols/roman-numerals": [
  { label: "Greek Alphabet Symbols", href: "/symbols/greek" },
  { label: "Date to Roman Numerals Converter", href: "/tools/date-to-roman" },
  { label: "Roman Numerals Converter", href: "/tools/roman-numerals-converter" },
  { label: "Roman Numeral Printable Chart", href: "/symbols/roman-numerals#printable" },
  { label: "How to Convert Number to Roman Numerals", href: "/symbols/roman-numerals#to-roman" },
  { label: "How to Convert Roman Numerals to Number", href: "/symbols/roman-numerals#from-roman" },
  { label: "XXXIX Roman Numeral", href: "/symbols/roman-numerals#xxxix" },
  { label: "What is 4 in Roman Numerals", href: "/symbols/roman-numerals#4" },
  { label: "What is 5 in Roman Numerals", href: "/symbols/roman-numerals#5" },
  { label: "What is 6 in Roman Numerals", href: "/symbols/roman-numerals#6" },
  { label: "What is 9 in Roman Numerals", href: "/symbols/roman-numerals#9" },
  { label: "Roman Numerals 1–100 Chart", href: "/symbols/roman-numerals#1-100" },
  { label: "Roman Numerals 1–20 Chart", href: "/symbols/roman-numerals#1-20" },
  { label: "Roman Numerals 1–10 Chart", href: "/symbols/roman-numerals#1-10" },
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Electrical Symbols", href: "/electrical/symbols" },
],
"/numbers/multiplication-table": [
  { label: "Multiplication Calculator", href: "/tools/multiplication-calculator" },
  { label: "Printable Multiplication Table of 12x12", href: "/numbers/multiplication-table#12x12" },
  { label: "Blank Printable Multiplication Table of 12x12", href: "/numbers/multiplication-table#12x12-blank" },
  { label: "Printable Multiplication Table of 10x10", href: "/numbers/multiplication-table#10x10" },
  { label: "Blank Printable Multiplication Table of 10x10", href: "/numbers/multiplication-table#10x10-blank" },
  { label: "Multiplication Table of 12x12", href: "/numbers/multiplication-table#table-12x12" },
  { label: "Multiplication Table of 10x10", href: "/numbers/multiplication-table#table-10x10" },
  { label: "Addition Table", href: "/numbers/addition-table" },
],
"/numbers/addition-table": [
  { label: "Addition Calculator", href: "/tools/addition-calculator" },
  { label: "Multiplication Table", href: "/numbers/multiplication-table" },
],
"/numbers/exponents-rules": [
  { label: "Adding Exponents", href: "/numbers/exponents-rules#adding" },
  { label: "Dividing Exponents", href: "/numbers/exponents-rules#dividing" },
  { label: "Fractional Exponents", href: "/numbers/exponents-rules#fractional" },
  { label: "Multiplying Exponents", href: "/numbers/exponents-rules#multiplying" },
  { label: "Negative Exponents", href: "/numbers/exponents-rules#negative" },
  { label: "Simplifying Exponents", href: "/numbers/exponents-rules#simplifying" },
  { label: "Zero Exponent", href: "/numbers/exponents-rules#zero" },
  { label: "Exponent Calculator", href: "/tools/exponents-calculator" },
  { label: "Logarithm Calculator", href: "/tools/log-calculator" },
  { label: "Exponential Growth Calculator", href: "/tools/exponential-growth-calculator" },
  { label: "Antilog Calculator", href: "/tools/antilog-calculator" },
  { label: "log(x) Rules", href: "/algebra/logarithm-rules#log" },
  { label: "ln(x) Rules", href: "/algebra/logarithm-rules#ln" },
  { label: "e Constant", href: "/numbers/e-constant" },
],
"/numbers/numeral-systems": [
  { label: "Hex/Decimal/Octal/Binary Converter", href: "/tools/base-calculator" },
  { label: "Base Converter", href: "/tools/base-calculator" },
  { label: "Binary to Decimal Conversion", href: "/numbers/numeral-systems#binary-to-decimal" },
  { label: "Binary to Hex Conversion", href: "/numbers/numeral-systems#binary-to-hex" },
  { label: "Decimal to Binary Conversion", href: "/numbers/numeral-systems#decimal-to-binary" },
  { label: "Decimal to Hex Conversion", href: "/numbers/numeral-systems#decimal-to-hex" },
  { label: "Octal to Decimal Conversion", href: "/numbers/numeral-systems#octal-to-decimal" },
  { label: "Hex to Binary Conversion", href: "/numbers/numeral-systems#hex-to-binary" },
  { label: "Hex to Decimal Conversion", href: "/numbers/numeral-systems#hex-to-decimal" },
  { label: "Binary to ASCII Text Conversion", href: "/numbers/numeral-systems#binary-to-ascii" },
  { label: "Hex to ASCII Text Conversion", href: "/numbers/numeral-systems#hex-to-ascii" },
  { label: "How to Convert Binary to Decimal", href: "/numbers/numeral-systems#convert-binary-to-decimal" },
  { label: "How to Convert Binary to Hex", href: "/numbers/numeral-systems#convert-binary-to-hex" },
  { label: "How to Convert Decimal to Binary", href: "/numbers/numeral-systems#convert-decimal-to-binary" },
  { label: "How to Convert Decimal to Hex", href: "/numbers/numeral-systems#convert-decimal-to-hex" },
  { label: "How to Convert Hex to Binary", href: "/numbers/numeral-systems#convert-hex-to-binary" },
  { label: "How to Convert Hex to Decimal", href: "/numbers/numeral-systems#convert-hex-to-decimal" },
  { label: "Number Conversion", href: "/convertor/number" }
],
"/numbers/percentage": [
  { label: "Percentage Calculator", href: "/percentage" },
  { label: "Percentage Change Calculator", href: "/calculator/percentage-change" },
  { label: "Per-mille (‰)", href: "/numbers/per-mille" },
  { label: "Parts-per Million (PPM)", href: "/numbers/parts-per-million" },
  { label: "Basic Math Symbols", href: "/symbols/math#basic" },
  { label: "Numbers", href: "/mathematics/numbers" },
],
"/numbers/per-mille": [
  { label: "PPM to Percent Conversion", href: "/numbers/parts-per-million#ppm-to-percent" },
  { label: "PPM to PPB Conversion", href: "/numbers/parts-per-million#ppm-to-ppb" },
  { label: "PPM to PPT Conversion", href: "/numbers/parts-per-million#ppm-to-ppt" },
  { label: "Percent to PPM Conversion", href: "/numbers/parts-per-million#percent-to-ppm" },
  { label: "PPB to PPM Conversion", href: "/numbers/parts-per-million#ppb-to-ppm" },
  { label: "PPT to PPM Conversion", href: "/numbers/parts-per-million#ppt-to-ppm" },
  { label: "Percentage (%)", href: "/numbers/percentage" },
  { label: "Per-mille (‰)", href: "/numbers/per-mille" },
  { label: "Electrical Units", href: "/electrical/units" },
  { label: "Math Symbols", href: "/symbols/math" },
  { label: "Numbers", href: "/mathematics/numbers" },
],
"/numbers/zero": [
  { label: "e Constant", href: "/numbers/e-constant" },
  { label: "Factorial", href: "/algebra/factorial" },
  { label: "Logarithm", href: "/algebra/logarithm" },
  { label: "Derivative", href: "/calculus/derivative" },
],
"/numbers/prime-number": [
  { label: "Percentage (%)", href: "/numbers/percentage" },
  { label: "Per-mille (‰)", href: "/numbers/per-mille" },
  { label: "Parts-per Million (PPM)", href: "/numbers/parts-per-million" },
  { label: "Zero Number", href: "/numbers/zero" },
  { label: "e Constant", href: "/numbers/e-constant" },
],
"/numbers/e-constant": [
  { label: "Logarithm Rules", href: "/algebra/logarithm-rules" },
  { label: "Natural Logarithm", href: "/algebra/natural-logarithm" },
  { label: "Exponents Rules", href: "/numbers/exponents-rules" },
  { label: "Normal Distribution", href: "/probability/normal-distribution" },
  { label: "e Constant – Wikipedia", href: "https://en.wikipedia.org/wiki/E_(mathematical_constant)" },
],
"/numbers/fibonacci": [
  { label: "e Constant", href: "/numbers/e-constant" },
  { label: "Factorial", href: "/algebra/factorial" },
  { label: "Logarithm", href: "/algebra/logarithm" },
  { label: "Derivative", href: "/calculus/derivative" },
],
"/algebra/factorial": [
  { label: "Factorial Calculator", href: "/tools/factorial-calculator" },
  { label: "Logarithm", href: "/algebra/logarithm" },
  { label: "Factorial – Wikipedia", href: "https://en.wikipedia.org/wiki/Factorial" },
],
"/algebra/logarithm": [
  { label: "Logarithm Rules", href: "/algebra/logarithm-rules" },
  { label: "Logarithm Table", href: "/algebra/logarithm-table" },
  { label: "Logarithm Calculator", href: "/tools/log-calculator" },
],
"/algebra/natural-logarithm": [
  { label: "Logarithm (log)", href: "/algebra/logarithm" },
  { label: "Natural Logarithm Calculator", href: "/tools/ln-calculator" },
  { label: "Natural Logarithm Table", href: "/algebra/logarithm-table" },
  { label: "Logarithm Calculator", href: "/tools/log-calculator" },
  { label: "e Constant", href: "/numbers/e-constant" },
],
"/algebra/quadratic-equation": [
  { label: "Quadratic Equation Solver", href: "/tools/quadratic-equation-solver" },
  { label: "Logarithm", href: "/algebra/logarithm" },
],
"/calculus/derivative": [
  { label: "Calculus", href: "/mathematics/calculus" },
  { label: "Laplace Transform (ℒ)", href: "/calculus/laplace-transform" },
  { label: "Calculus Symbols", href: "/symbols/calculus-analysis" },
],
"/calculus/laplace-transform": [
  { label: "Derivative", href: "/calculus/derivative" },
  { label: "Calculus Symbols", href: "/symbols/calculus-analysis" },
],
"/calculus/convolution": [
  { label: "Convolution Calculator", href: "/tools/convolution-calculator" },
  { label: "Laplace Transform (ℒ)", href: "/calculus/laplace-transform" },
  { label: "Calculus Symbols", href: "/symbols/calculus-analysis" },
],
"/probability/expectation": [
  { label: "Variance", href: "/probability/variance" },
  { label: "Standard Deviation", href: "/probability/standard-deviation" },
  { label: "Distribution", href: "/probability/distribution" },
  { label: "Normal Distribution", href: "/probability/normal-distribution" },
  { label: "Expected Value – Wikipedia", href: "https://en.wikipedia.org/wiki/Expected_value" },
],
"/probability/variance": [
  { label: "Standard Deviation", href: "/probability/standard-deviation" },
  { label: "Expectation", href: "/probability/expectation" },
  { label: "Distribution", href: "/probability/distribution" },
  { label: "Normal Distribution", href: "/probability/normal-distribution" },
],
"/probability/standard-deviation": [
  { label: "Standard Deviation Calculator", href: "/tools/standard-deviation-calculator" },
  { label: "Variance", href: "/probability/variance" },
  { label: "Expectation", href: "/probability/expectation" },
  { label: "Distribution", href: "/probability/distribution" },
  { label: "Normal Distribution", href: "/probability/normal-distribution" },
],
"/probability/distribution": [
  { label: "Normal Distribution", href: "/probability/normal-distribution" },
  { label: "Statistical Symbols", href: "/symbols/statistics" },
  { label: "Distribution – Wikipedia", href: "https://en.wikipedia.org/wiki/Probability_distribution" },
],
"/probability/normal-distribution": [
  { label: "Probability Distribution", href: "/probability/distribution" },
  { label: "Statistical Symbols", href: "/symbols/statistics" },
  { label: "Normal Distribution – Wikipedia", href: "https://en.wikipedia.org/wiki/Normal_distribution" },
],
"/probability/basic": [
  { label: "Standard Deviation Calculator", href: "/tools/standard-deviation-calculator" },
  { label: "Variance", href: "/probability/variance" },
  { label: "Expectation", href: "/probability/expectation" },
  { label: "Distribution", href: "/probability/distribution" },
  { label: "Normal Distribution", href: "/probability/normal-distribution" },
],
"/trigonometry/arccos": [
  { label: "Cosine Function", href: "/tools/cosine-calculator" },
  { label: "Arcsine Function", href: "/trigonometry/arcsin" },
  { label: "Arctan Function", href: "/trigonometry/arctan" },
  { label: "Arccos Calculator", href: "/tools/arccos-calculator" },
  { label: "Radians to Degrees Converter", href: "/convertor/angle" },

],
"/trigonometry/arcsin": [
  { label: "Sine Function", href: "/tools/sine-calculator" },
  { label: "Arccosine Function", href: "/trigonometry/arccos" },
  { label: "Arctan Function", href: "/trigonometry/arctan" },
  { label: "Arcsin Calculator", href: "/tools/arcsin-calculator" },
  { label: "Degrees to Radians Converter", href: "/convertor/angle" },
  { label: "Arcsin of 0", href: "/trigonometry/arcsin#0" },
  { label: "Arcsin of 1", href: "/trigonometry/arcsin#1" },
  { label: "Arcsin of Infinity", href: "/trigonometry/arcsin#infinity" },
  { label: "Arcsin Graph", href: "/trigonometry/arcsin#graph" },
  { label: "Arcsin Derivative", href: "/trigonometry/arcsin#derivative" },
  { label: "Arcsin Integral", href: "/trigonometry/arcsin#integral" },
  { label: "Sin of Arcsin", href: "/trigonometry/arcsin#sin-of-arcsin" },
  { label: "Cos of Arcsin", href: "/trigonometry/arcsin#cos-of-arcsin" },
  { label: "Tan of Arcsin", href: "/trigonometry/arcsin#tan-of-arcsin" },
],
"/trigonometry/arctan": [
  { label: "Tangent Function", href: "/tools/tangent-calculator" },
  { label: "Arccosine Function", href: "/trigonometry/arccos" },
  { label: "Arcsine Function", href: "/trigonometry/arcsin" },
  { label: "Arctan of 0", href: "/trigonometry/arctan#0" },
  { label: "Arctan of 1", href: "/trigonometry/arctan#1" },
  { label: "Arctan of 2", href: "/trigonometry/arctan#2" },
  { label: "Arctan of Infinity", href: "/trigonometry/arctan#infinity" },
  { label: "Derivative of Arctan", href: "/trigonometry/arctan#derivative" },
  { label: "Integral of Arctan", href: "/trigonometry/arctan#integral" },
  { label: "Sine of Arctan", href: "/trigonometry/arctan#sin-of-arctan" },
  { label: "Cosine of Arctan", href: "/trigonometry/arctan#cos-of-arctan" },
  { label: "Arctan Graph", href: "/trigonometry/arctan#graph" },
  { label: "Arctan Calculator", href: "/tools/arctan-calculator" },
  { label: "Degrees to Radians Converter", href: "/convertor/angle" },
],
  "/calculator/college-gpa": [
    { label: "GPA Calculator", href: "/calculator/gpa" },
    { label: "Grade Calculator", href: "/calculator/grade-basic" },
    { label: "Final Grade Calculator", href: "/calculator/final-grade" },
  ],
  "/calculator/discount": [
    { label: "GST Calculator", href: "/calculator/gst" },
    { label: "VAT Calculator", href: "/calculator/vat" },
    { label: "Percentage Calculator", href: "/percentage" },
  ],
  "/calculator/gpa-to-letter": [
    { label: "GPA Calculator", href: "/calculator/gpa" },
    { label: "College GPA", href: "/calculator/college-gpa" },
    { label: "Letter to GPA", href: "/calculator/letter-to-gpa" },
  ],
  "/calculator/gst": [
    { label: "Discount Calculator", href: "/calculator/discount" },
    { label: "VAT Calculator", href: "/calculator/vat" },
    { label: "Simple Interest Calculator", href: "/calculator/simple-interest" },
  ],
  "/calculator/letter-to-gpa": [
    { label: "GPA to Letter", href: "/calculator/gpa-to-letter" },
    { label: "College GPA", href: "/calculator/college-gpa" },
    { label: "GPA Calculator", href: "/calculator/gpa" },
  ],
  "/calculator/test": [
    { label: "Grade Calculator", href: "/calculator/grade-basic" },
    { label: "College GPA Calculator", href: "/calculator/college-gpa" },
    { label: "GPA to Letter Converter", href: "/calculator/gpa-to-letter" },
  ],
  "/calculator/vat": [
    { label: "GST Calculator", href: "/calculator/gst" },
    { label: "Discount Calculator", href: "/calculator/discount" },
    { label: "Percentage Calculator", href: "/percentage" },
  ],

  "/code/all": [
    { label: "Linux Commands", href: "/linux/all" },
    { label: "HTML Tools", href: "/web/html" },
    { label: "Dev Tools", href: "/web/development" },
  ],

   "/convertor-electrical/:slug": [
    { label: "Electrical Units", href: "/electrical/units" },
    { label: "Electrical Calculators", href: "/electrical-calculators" },
    { label: "Electrical Laws", href: "/electrical/laws" }
  ],

  "/convertor/area": [
    { label: "Unit Converter", href: "/unit-converter" },
    { label: "Volume Converter", href: "/convertor/volume" },
    { label: "Length Converter", href: "/convertor/length" }
  ],

  "/convertor/current": [
    { label: "Amps to Milliamps", href: "/electrical-calculations/amps-to-milliamps" },
    { label: "Amps to Watts", href: "/electrical-calculations/amps-to-watts" }
  ],

  "/convertor/data": [
    { label: "Data Storage Converter", href: "/unit-converter" },
    { label: "Bytes to KB", href: "/convertor/data" }
  ],

  "/convertor/fuel_economy": [
    { label: "Speed Converter", href: "/convertor/speed" },
    { label: "Energy Usage", href: "/electrical/lighting/energy-usage" }
  ],


  "/convertor/pressure": [
    { label: "Energy Converter", href: "/convertor/energy" },
    { label: "Power Converter", href: "/convertor/power" }
  ],

  "/convertor/speed": [
    { label: "Time Converter", href: "/convertor/time" },
    { label: "Distance Calculator", href: "/unit-converter" }
  ],

  "/convertor/time": [
    { label: "Time Now", href: "/tools/time-now" },
    { label: "Time Calculator", href: "/tools/time-calculator" }
  ],


  "/ecology/all": [
    { label: "Plant Trees", href: "/eco/plant-trees" },
    { label: "Reduce Plastic Waste", href: "/eco/reduce-plastic-waste" }
  ],
  "/electrical-calculations/amp-to-watts": [
    { label: "Amps to Watts Calculator", href: "/electrical-calculators/amps-to-watts-calculator" },
    { label: "Watts to Amps", href: "/electrical-calculations/watts-to-amps" },
    { label: "Voltage to Watts", href: "/electrical-calculations/volts-to-watts" }
  ],

  "/electrical-calculations/amps-to-milliamps": [
    { label: "Milliamps to Amps", href: "/electrical-calculations/milliamps-to-amps" },
    { label: "Amps to Watts", href: "/electrical-calculations/amps-to-watts" }
  ],

  "/electrical-calculations/db-converter": [
    { label: "Decibel (dB) Calculator", href: "/electrical/units/decibel" },
    { label: "dBm Calculator", href: "/electrical/units/dbm" },
    { label: "dBW Calculator", href: "/electrical/units/dbw" }
  ],

  "/electrical-calculations/kilowatts-to-joules": [
    { label: "KW to Joules", href: "/electrical-calculations/kw-to-joules" },
    { label: "KW to WH", href: "/electrical-calculations/kw-to-wh" }
  ],

  "/electrical-calculations/kilowatts-to-kva": [
    { label: "KW to KVA", href: "/electrical-calculations/kw-to-kva" },
    { label: "KW to VA", href: "/electrical-calculations/kw-to-va" }
  ],

  "/electrical-calculations/kw-to-joules": [
    { label: "KW to WH", href: "/electrical-calculations/kw-to-wh" },
    { label: "KW to KJ", href: "/electrical-calculations/kw-to-kj" }
  ],

  "/electrical-calculations/kw-to-kj": [
    { label: "KW to WH", href: "/electrical-calculations/kw-to-wh" },
    { label: "KW to Joules", href: "/electrical-calculations/kw-to-joules" }
  ],

  "/electrical-calculations/kw-to-watts": [
    { label: "KW to WH", href: "/electrical-calculations/kw-to-wh" },
    { label: "Watts to KW", href: "/electrical-calculations/watts-to-kva" }
  ],

  "/electrical-calculations/vat-to-amps": [
    { label: "VAT to KW", href: "/electrical-calculations/vat-to-kw" },
    { label: "VAT to Watts", href: "/electrical-calculations/vat-to-watts" }
  ],

  "/electrical-calculations/vat-to-kva": [
    { label: "VAT to KW", href: "/electrical-calculations/vat-to-kw" },
    { label: "KVA to KW", href: "/electrical-calculations/kva-to-kw" }
  ],

  "/electrical-calculations/vat-to-kw": [
    { label: "VAT to Amps", href: "/electrical-calculations/vat-to-amps" },
    { label: "KW to KVA", href: "/electrical-calculations/kw-to-kva" }
  ],

  "/electrical-calculations/vat-to-watts": [
    { label: "VAT to KW", href: "/electrical-calculations/vat-to-kw" },
    { label: "Watts to VA", href: "/electrical-calculations/watts-to-va" }
  ],
  "/electrical/basic-terms": [
    { label: "Ohm's Law", href: "/electrical/calculators/ohms-law" },
    { label: "Voltage Divider", href: "/electrical/calculators/voltage-divider" },
    { label: "Electric Current", href: "/electrical/content/current" },
    { label: "Electric Power", href: "/electrical/content/power" },
  ],

  "/electrical/calculators/capacitance": [
    { label: "Capacitance Basics", href: "/electrical/components/capacitor" },
    { label: "Ohm's Law Calculator", href: "/electrical/calculators/ohms-law" },
    { label: "Power Calculator", href: "/electrical/calculators/power" },
  ],

  "/electrical/calculators/frequency": [
    { label: "Power Calculator", href: "/electrical/calculators/power" },
    { label: "Ohm's Law Calculator", href: "/electrical/calculators/ohms-law" },
    { label: "Capacitance Calculator", href: "/electrical/calculators/capacitance" },
  ],

  "/electrical/calculators/ohms-law": [
    { label: "Voltage Divider", href: "/electrical/calculators/voltage-divider" },
    { label: "Power Calculator", href: "/electrical/calculators/power" },
    { label: "Resistance Calculator", href: "/electrical/calculators/resistance" },
  ],

  "/electrical/calculators/power": [
    { label: "Ohm's Law", href: "/electrical/calculators/ohms-law" },
    { label: "Watts to Amps", href: "/electrical-calculators/watts-to-amps-calculator" },
    { label: "Voltage Divider", href: "/electrical/calculators/voltage-divider" },
  ],

  "/electrical/calculators/resistance": [
    { label: "Ohm's Law", href: "/electrical/calculators/ohms-law" },
    { label: "Capacitance Calculator", href: "/electrical/calculators/capacitance" },
    { label: "Power Calculator", href: "/electrical/calculators/power" },
  ],

  "/electrical/calculators/voltage-divider": [
    { label: "Ohm's Law Calculator", href: "/electrical/calculators/ohms-law" },
    { label: "Resistor Symbols", href: "/electrical/symbols/resistor" },
    { label: "Voltage Divider Rule", href: "/electrical/circuit-laws/voltage-divider" },
  ],

  "/electrical/laws": [
    { label: "Ohm's Law", href: "/electrical/circuit-laws/ohm" },
    { label: "Kirchhoff's Laws", href: "/electrical/circuit-laws/kirchhoff" },
    { label: "Coulomb's Law", href: "/electrical/circuit-laws/coulomb" }
  ],


  "/electrical/save-electricity": [
    { label: "LED Savings", href: "/electrical/lighting/led-savings" },
    { label: "Energy Usage", href: "/electrical/lighting/energy-usage" },
    { label: "How to Save Electricity", href: "/howto/save-electricity" }
  ],
    "/final-grade": [
    { label: "GPA Calculator", href: "/calculator/gpa" },
    { label: "Grade Calculator", href: "/calculator/grade-basic" },
    { label: "College GPA", href: "/calculator/college-gpa" }
  ],

  "/finance-all": [
    { label: "GST Calculator", href: "/calculator/gst" },
    { label: "Discount Calculator", href: "/calculator/discount" },
    { label: "VAT Calculator", href: "/calculator/vat" }
  ],

  "/gpa": [
    { label: "College GPA Calculator", href: "/calculator/college-gpa" },
    { label: "Letter to GPA", href: "/calculator/letter-to-gpa" },
    { label: "GPA to Letter", href: "/calculator/gpa-to-letter" }
  ],

  "/grade": [
    { label: "Grade Calculator", href: "/calculator/grade-basic" },
    { label: "Final Grade", href: "/final-grade" },
    { label: "GPA Calculator", href: "/calculator/gpa" }
  ],

  "/linux/all": [
    { label: "Cat Command", href: "/linux/cat-command" },
    { label: "Cd Command", href: "/linux/cd-command" },
    { label: "Ls Command", href: "/linux/ls-command" }
  ],

  "/linux/cat-command": [
    { label: "View Files in Linux", href: "/linux/view-files" },
    { label: "PWD Command", href: "/linux/pwd-command" },
    { label: "Current Directory", href: "/linux/current-directory" }
  ],

  "/linux/cd-command": [
    { label: "Pwd Command", href: "/linux/pwd-command" },
    { label: "Ls Command", href: "/linux/ls-command" },
    { label: "MV Command", href: "/linux/mv-command" }
  ],

  "/linux/cp-command": [
    { label: "MV Command", href: "/linux/mv-command" },
    { label: "Move Files in Linux", href: "/linux/move-files" },
    { label: "Cat Command", href: "/linux/cat-command" }
  ],

  "/linux/current-directory": [
    { label: "Cd Command", href: "/linux/cd-command" },
    { label: "Pwd Command", href: "/linux/pwd-command" },
    { label: "View Files", href: "/linux/view-files" }
  ],

  "/linux/gcc-command": [
    { label: "Cat Command", href: "/linux/cat-command" },
    { label: "MV Command", href: "/linux/mv-command" },
    { label: "Slow VirtualBox Ubuntu", href: "/linux/slow-virtualbox-ubuntu" }
  ],

  "/linux/ls-command": [
    { label: "Cd Command", href: "/linux/cd-command" },
    { label: "PWD Command", href: "/linux/pwd-command" },
    { label: "Cat Command", href: "/linux/cat-command" }
  ],

  "/linux/move-files": [
    { label: "MV Command", href: "/linux/mv-command" },
    { label: "CP Command", href: "/linux/cp-command" },
    { label: "Current Directory", href: "/linux/current-directory" }
  ],

  "/linux/mv-command": [
    { label: "Move Files", href: "/linux/move-files" },
    { label: "CP Command", href: "/linux/cp-command" },
    { label: "CD Command", href: "/linux/cd-command" }
  ],

  "/linux/pwd-command": [
    { label: "Cd Command", href: "/linux/cd-command" },
    { label: "Current Directory", href: "/linux/current-directory" },
    { label: "Ls Command", href: "/linux/ls-command" }
  ],

  "/linux/slow-virtualbox-ubuntu": [
    { label: "GCC Command", href: "/linux/gcc-command" },
    { label: "Cat Command", href: "/linux/cat-command" },
    { label: "View Files", href: "/linux/view-files" }
  ],

  "/linux/view-files": [
    { label: "Cat Command", href: "/linux/cat-command" },
    { label: "Current Directory", href: "/linux/current-directory" },
    { label: "Ls Command", href: "/linux/ls-command" }
  ],

  "/mathematics/algebra": [
    { label: "Quadratic Equation", href: "/algebra/quadratic-equation" },
    { label: "Logarithm", href: "/algebra/logarithm" },
    { label: "Factorial", href: "/algebra/factorial" }
  ],

  "/mathematics/all": [
    { label: "Algebra Tools", href: "/mathematics/algebra" },
    { label: "Trigonometry Tools", href: "/mathematics/trigonometry" },
    { label: "Probability Tools", href: "/probability/basic" }
  ],

  "/mathematics/symbols": [
    { label: "Math Symbols", href: "/symbols/math" },
    { label: "Greek Symbols", href: "/symbols/greek" },
    { label: "Logic Symbols", href: "/symbols/logic" }
  ],

  "/mathematics/trigonometry": [
    { label: "Trigonometry Calculator", href: "/tools/trigonometry-calculator" },
    { label: "Right Triangle Calculator", href: "/tools/right-triangle-calculator" },
    { label: "Pythagorean Theorem", href: "/tools/pythagorean-theorem-calculator" }
  ],
  "/pdf-reader": [
    { label: "PDF Viewer", href: "/pdf-viewer" },
    { label: "JPG to PDF", href: "/jpg-to-pdf" },
    { label: "PNG to PDF", href: "/png-to-pdf" }
  ],

  "/pdf-viewer": [
    { label: "PDF Reader", href: "/pdf-reader" },
    { label: "Image to PDF", href: "/image-to-pdf" },
    { label: "JPG to PDF", href: "/jpg-to-pdf" }
  ],


  "/test": [
    { label: "Percentage Calculator", href: "/percentage" },
    { label: "Grade Calculator", href: "/calculator/grade-basic" },
    { label: "BMI Calculator", href: "/bmi" }
  ],


  "/text/all": [
    { label: "Alt Codes", href: "/text/alt-codes" },
    { label: "ASCII Table", href: "/text/ascii-table" },
    { label: "Unicode Page", href: "/text/unicode-page" }
  ],

  "/time/all": [
    { label: "Current Time", href: "/tools/current-time" },
    { label: "Time Calculator", href: "/tools/time-calculator" },
    { label: "Today's Date", href: "/tools/todays-date" }
  ],
  "/tools/2-gauge-wire-calculator": [
    { label: "Wire Gauge Calculator", href: "/tools/wire-gauge-calculator" },
    { label: "AWG to mm", href: "/tools/awg-to-mm-calculator" },
    { label: "Voltage Drop Calculator", href: "/tools/voltage-drop-calculator" }
  ],

  "/tools/age-calculator": [
    { label: "Birthday Calculator", href: "/tools/birthday-calculator" },
    { label: "Date Calculator", href: "/tools/date-calculator" },
    { label: "Days in Year", href: "/tools/days-in-year" }
  ],

  "/tools/awg-to-mm-calculator": [
    { label: "Wire Gauge Calculator", href: "/tools/wire-gauge-calculator" },
    { label: "SWG to mm", href: "/tools/swg-to-mm-calculator" },
    { label: "2 Gauge Wire", href: "/tools/2-gauge-wire-calculator" }
  ],

  "/tools/binary-calculator": [
    { label: "Hex Calculator", href: "/tools/hex-calculator" },
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" },
    { label: "Base Converter", href: "/tools/base-calculator" }
  ],

  "/tools/birthday-calculator": [
    { label: "Age Calculator", href: "/tools/age-calculator" },
    { label: "Date Calculator", href: "/tools/date-calculator" },
    { label: "Days in Year", href: "/tools/days-in-year" }
  ],

  "/tools/current-time": [
    { label: "Time Now", href: "/tools/time-now" },
    { label: "Today's Date", href: "/tools/todays-date" },
    { label: "Date Calculator", href: "/tools/date-calculator" }
  ],

  "/tools/date-calculator": [
    { label: "Days in Year", href: "/tools/days-in-year" },
    { label: "Time Calculator", href: "/tools/time-calculator" },
    { label: "Birthday Calculator", href: "/tools/birthday-calculator" }
  ],

  "/tools/days-in-year": [
    { label: "Age Calculator", href: "/tools/age-calculator" },
    { label: "Date Calculator", href: "/tools/date-calculator" },
    { label: "Months of Year", href: "/tools/months-of-year" }
  ],

  "/tools/division-calculator": [
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" },
    { label: "Addition Calculator", href: "/tools/addition-calculator" },
    { label: "Multiplication Calculator", href: "/tools/multiplication-calculator" }
  ],

  "/tools/dst-back": [
    { label: "DST Change", href: "/tools/dst-change" },
    { label: "DST Forward", href: "/tools/dst-forward" },
    { label: "Current Time", href: "/tools/current-time" }
  ],

  "/tools/dst-change": [
    { label: "DST Forward", href: "/tools/dst-forward" },
    { label: "DST Back", href: "/tools/dst-back" },
    { label: "Time Calculator", href: "/tools/time-calculator" }
  ],

  "/tools/dst-forward": [
    { label: "DST Back", href: "/tools/dst-back" },
    { label: "DST Change", href: "/tools/dst-change" },
    { label: "Time Now", href: "/tools/time-now" }
  ],

  "/tools/fractions-calculator": [
    { label: "Subtracting Fractions", href: "/tools/subtracting-fractions-calculator" },
    { label: "Dividing Fractions", href: "/tools/dividing-fractions-calculator" },
    { label: "Adding Fractions", href: "/tools/adding-fractions-calculator" }
  ],

  "/tools/gcf-calculator": [
    { label: "LCM Calculator", href: "/tools/lcm-calculator" },
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" },
    { label: "Root Calculator", href: "/tools/root-calculator" }
  ],

  "/tools/hex-calculator": [
    { label: "Binary Calculator", href: "/tools/binary-calculator" },
    { label: "Base Converter", href: "/tools/base-calculator" },
    { label: "Fraction Calculator", href: "/tools/fractions-calculator" }
  ],

  "/tools/hours-in-week": [
    { label: "Hours in Year", href: "/tools/hours-in-year" },
    { label: "Days in Year", href: "/tools/days-in-year" },
    { label: "Time Calculator", href: "/tools/time-calculator" }
  ],

  "/tools/hours-in-year": [
    { label: "Hours in Week", href: "/tools/hours-in-week" },
    { label: "Seconds in Year", href: "/tools/seconds-in-year" },
    { label: "Time Calculator", href: "/tools/time-calculator" }
  ],

  "/tools/lcm-calculator": [
    { label: "GCF Calculator", href: "/tools/gcf-calculator" },
    { label: "Root Calculator", href: "/tools/root-calculator" },
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" }
  ],

  "/tools/months-of-year": [
    { label: "Days in Year", href: "/tools/days-in-year" },
    { label: "Weeks in Year", href: "/tools/weeks-in-year" },
    { label: "Time Now", href: "/tools/time-now" }
  ],

  "/tools/percentage-increase-calculator": [
    { label: "Percentage Change Calculator", href: "/calculator/percentage-change" },
    { label: "Percent Error Calculator", href: "/tools/percent-error-calculator" },
    { label: "Fraction to Percent", href: "/convertor/number?from=fraction&to=percent" }
  ],

  "/tools/pythagorean-theorem-calculator": [
    { label: "Right Triangle Calculator", href: "/tools/right-triangle-calculator" },
    { label: "Trigonometry Calculator", href: "/tools/trigonometry-calculator" },
    { label: "Root Calculator", href: "/tools/root-calculator" }
  ],

  "/tools/ratio-calculator": [
    { label: "Fraction Calculator", href: "/tools/fractions-calculator" },
    { label: "GCF Calculator", href: "/tools/gcf-calculator" },
    { label: "LCM Calculator", href: "/tools/lcm-calculator" }
  ],

  "/tools/remainder-calculator": [
    { label: "Division Calculator", href: "/tools/division-calculator" },
    { label: "Modulus Basics", href: "/math/modulo" },
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" }
  ],

  "/tools/right-triangle-calculator": [
    { label: "Pythagorean Theorem Calculator", href: "/tools/pythagorean-theorem-calculator" },
    { label: "Trigonometry Calculator", href: "/tools/trigonometry-calculator" },
    { label: "Root Calculator", href: "/tools/root-calculator" }
  ],

  "/tools/root-calculator": [
    { label: "Square Root Calculator", href: "/tools/square-root-calculator" },
    { label: "Exponent Calculator", href: "/tools/exponents-calculator" },
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" }
  ],

  "/tools/scientific-notation-calculator": [
    { label: "Exponents Calculator", href: "/tools/exponents-calculator" },
    { label: "Log Calculator", href: "/tools/log-calculator" },
    { label: "Complex Numbers Calculator", href: "/tools/complex-numbers-calculator" }
  ],

  "/tools/seconds-in-day": [
    { label: "Seconds in Hour", href: "/tools/seconds-in-hour" },
    { label: "Seconds in Year", href: "/tools/seconds-in-year" },
    { label: "Time Calculator", href: "/tools/time-calculator" }
  ],

  "/tools/seconds-in-hour": [
    { label: "Seconds in Day", href: "/tools/seconds-in-day" },
    { label: "Seconds in Year", href: "/tools/seconds-in-year" },
    { label: "Time Calculator", href: "/tools/time-calculator" }
  ],

  "/tools/seconds-in-year": [
    { label: "Seconds in Day", href: "/tools/seconds-in-day" },
    { label: "Seconds in Hour", href: "/tools/seconds-in-hour" },
    { label: "Time Calculator", href: "/tools/time-calculator" }
  ],

  "/tools/simple-math-calculator": [
    { label: "Addition Calculator", href: "/tools/addition-calculator" },
    { label: "Multiplication Calculator", href: "/tools/multiplication-calculator" },
    { label: "Subtraction Calculator", href: "/tools/subtraction-calculator" }
  ],

  "/tools/square-root-calculator": [
    { label: "Root Calculator", href: "/tools/root-calculator" },
    { label: "Exponent Calculator", href: "/tools/exponents-calculator" },
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" }
  ],

  "/tools/subtracting-fractions-calculator": [
    { label: "Fractions Calculator", href: "/tools/fractions-calculator" },
    { label: "Adding Fractions", href: "/tools/adding-fractions-calculator" },
    { label: "Dividing Fractions", href: "/tools/dividing-fractions-calculator" }
  ],

  "/tools/subtraction-calculator": [
    { label: "Addition Calculator", href: "/tools/addition-calculator" },
    { label: "Multiplication Calculator", href: "/tools/multiplication-calculator" },
    { label: "Simple Math Calculator", href: "/tools/simple-math-calculator" }
  ],

  "/tools/swg-to-mm-calculator": [
    { label: "AWG to MM Calculator", href: "/tools/awg-to-mm-calculator" },
    { label: "Wire Gauge Calculator", href: "/tools/wire-gauge-calculator" },
    { label: "2 Gauge Wire Calculator", href: "/tools/2-gauge-wire-calculator" }
  ],

  "/tools/time-calculator": [
    { label: "Time Now", href: "/tools/time-now" },
    { label: "Today's Date", href: "/tools/todays-date" },
    { label: "Seconds in Year", href: "/tools/seconds-in-year" }
  ],

  "/tools/time-now": [
    { label: "Current Time", href: "/tools/current-time" },
    { label: "Time Calculator", href: "/tools/time-calculator" },
    { label: "Today's Date", href: "/tools/todays-date" }
  ],

  "/tools/todays-date": [
    { label: "Time Now", href: "/tools/time-now" },
    { label: "Date Calculator", href: "/tools/date-calculator" },
    { label: "Current Time", href: "/tools/current-time" }
  ],

  "/tools/trigonometry-calculator": [
    { label: "Sine Calculator", href: "/tools/sine-calculator" },
    { label: "Cosine Calculator", href: "/tools/cosine-calculator" },
    { label: "Tangent Calculator", href: "/tools/tangent-calculator" }
  ],

  "/tools/voltage-drop-calculator": [
    { label: "Power Calculator", href: "/electrical-calculators/power-calculator" },
    { label: "Ohm's Law Calculator", href: "/electrical-calculators/ohms-law-calculator" },
    { label: "Wire Gauge Calculator", href: "/tools/wire-gauge-calculator" }
  ],

  "/tools/web-colors": [
    { label: "HTML Color Codes", href: "/tools/html-color-codes" },
    { label: "RGB Color Picker", href: "/tools/rgb-color-picker" },
    { label: "Web Safe Colors", href: "/tools/web-safe-colors" }
  ],

  "/tools/website-traffic-down-checker": [
    { label: "Screen Resolution Stats", href: "/tools/screen-resolution-statistics" },
    { label: "Canonical URL Generator", href: "/tools/canonical-url-generator" },
    { label: "Htaccess Redirection", href: "/tools/htaccess-redirection" }
  ],

  "/tools/weeks-in-month": [
    { label: "Weeks in Year", href: "/tools/weeks-in-year" },
    { label: "Days in Year", href: "/tools/days-in-year" },
    { label: "Months of Year", href: "/tools/months-of-year" }
  ],

  "/tools/weeks-in-year": [
    { label: "Weeks in Month", href: "/tools/weeks-in-month" },
    { label: "Days in Year", href: "/tools/days-in-year" },
    { label: "Hours in Year", href: "/tools/hours-in-year" }
  ],


  "/web/all": [
    { label: "Web Colors", href: "/web/colors" },
    { label: "Web Tools", href: "/web/tools" },
    { label: "Web Development", href: "/web/development" }
  ],

  "/web/colors": [
    { label: "Web Safe Colors", href: "/tools/web-safe-colors" },
    { label: "Color Picker", href: "/tools/color-picker-from-image" },
    { label: "RGB Color Picker", href: "/tools/rgb-color-picker" }
  ],

  "/web/development": [
    { label: "Canonical URL Generator", href: "/tools/canonical-url-generator" },
    { label: "Htaccess Redirection", href: "/tools/htaccess-redirection" },
    { label: "HTML Tables Generator", href: "/tools/html-tables-generator" }
  ],

  "/web/html": [
    { label: "HTML Editor", href: "/tools/html-editor" },
    { label: "HTML Link Generator", href: "/tools/html-link-generator" },
    { label: "HTML Color", href: "/tools/html-color" }
  ],

  "/web/tools": [
    { label: "Website Down Checker", href: "/tools/website-traffic-down-checker" },
    { label: "Screen Resolution Stats", href: "/tools/screen-resolution-statistics" },
    { label: "HTML Editor", href: "/tools/html-editor" }
  ],

  "/wire/all": [
    { label: "AWG to MM Calculator", href: "/tools/awg-to-mm-calculator" },
    { label: "SWG to MM Calculator", href: "/tools/swg-to-mm-calculator" },
    { label: "Wire Gauge Calculator", href: "/tools/wire-gauge-calculator" }
  ]


  };
  