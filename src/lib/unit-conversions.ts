
// Define unit categories
export const unitCategories = [
  { label: "Length", value: "length" },
  { label: "Mass", value: "mass" },
  { label: "Temperature", value: "temperature" },
  { label: "Area", value: "area" },
  { label: "Volume", value: "volume" },
  { label: "Time", value: "time" },
  { label: "Speed", value: "speed" },
  { label: "Pressure", value: "pressure" },
  { label: "Energy", value: "energy" },
  { label: "Power", value: "power" },
  { label: "Data", value: "data" },
  { label: "Angle", value: "angle" },
  { label: "Frequency", value: "frequency" },
  { label: "Fuel Economy", value: "fuel_economy" },
  { label: "Voltage", value: "voltage" },
  { label: "Current", value: "current" },
  { label: "Color", value: "color" },


];

// Units for each category with conversion factors to a base unit
export const units = {
  length: [
    { label: "Meter (m)", value: "m", factor: 1 },
    { label: "Kilometer (km)", value: "km", factor: 1000 },
    { label: "Centimeter (cm)", value: "cm", factor: 0.01 },
    { label: "Millimeter (mm)", value: "mm", factor: 0.001 },
    { label: "Micrometer (μm)", value: "um", factor: 0.000001 },
    { label: "Nanometer (nm)", value: "nm", factor: 0.000000001 },
    { label: "Mile (mi)", value: "mi", factor: 1609.344 },
    { label: "Yard (yd)", value: "yd", factor: 0.9144 },
    { label: "Foot (ft)", value: "ft", factor: 0.3048 },
    { label: "Inch (in)", value: "in", factor: 0.0254 },
    { label: "Nautical Mile", value: "nmi", factor: 1852 },
  ],
  mass: [
    { label: "Kilogram (kg)", value: "kg", factor: 1 },
    { label: "Gram (g)", value: "g", factor: 0.001 },
    { label: "Milligram (mg)", value: "mg", factor: 0.000001 },
    { label: "Microgram (μg)", value: "ug", factor: 0.000000001 },
    { label: "Pound (lb)", value: "lb", factor: 0.45359237 },
    { label: "Ounce (oz)", value: "oz", factor: 0.028349523125 },
    { label: "Ton (metric)", value: "ton", factor: 1000 },
    { label: "Stone (st)", value: "st", factor: 6.35029318 },
  ],
  color: [
    { label: "HEX (#RRGGBB)", value: "hex", factor: 1 },
    { label: "RGB (rgb)", value: "rgb", factor: 1 },
    { label: "HSL (hsl)", value: "hsl", factor: 1 },
  ],
  
  temperature: [
    { label: "Celsius (°C)", value: "c", factor: 1 },
    { label: "Fahrenheit (°F)", value: "f", factor: 1 },
    { label: "Kelvin (K)", value: "k", factor: 1 },
    { label: "Rankine (°R)", value: "r", factor: 1 },
  ],
  area: [
    { label: "Square Meter (m²)", value: "m2", factor: 1 },
    { label: "Square Kilometer (km²)", value: "km2", factor: 1000000 },
    { label: "Square Centimeter (cm²)", value: "cm2", factor: 0.0001 },
    { label: "Square Millimeter (mm²)", value: "mm2", factor: 0.000001 },
    { label: "Square Mile", value: "mi2", factor: 2589988.11 },
    { label: "Square Yard", value: "yd2", factor: 0.83612736 },
    { label: "Square Foot", value: "ft2", factor: 0.09290304 },
    { label: "Square Inch", value: "in2", factor: 0.00064516 },
    { label: "Acre", value: "acre", factor: 4046.8564224 },
    { label: "Hectare", value: "ha", factor: 10000 },
  ],
  volume: [
    { label: "Cubic Meter (m³)", value: "m3", factor: 1 },
    { label: "Cubic Kilometer (km³)", value: "km3", factor: 1000000000 },
    { label: "Cubic Centimeter (cm³)", value: "cm3", factor: 0.000001 },
    { label: "Liter (L)", value: "l", factor: 0.001 },
    { label: "Milliliter (mL)", value: "ml", factor: 0.000001 },
    { label: "Gallon (US)", value: "gal", factor: 0.00378541 },
    { label: "Quart (US)", value: "qt", factor: 0.000946353 },
    { label: "Pint (US)", value: "pt", factor: 0.000473176 },
    { label: "Cup (US)", value: "cup", factor: 0.000236588 },
    { label: "Fluid Ounce (US)", value: "floz", factor: 0.0000295735 },
    { label: "Tablespoon (US)", value: "tbsp", factor: 0.0000147868 },
    { label: "Teaspoon (US)", value: "tsp", factor: 0.00000492892 },
  ],
  time: [
    { label: "Second (s)", value: "s", factor: 1 },
    { label: "Millisecond (ms)", value: "ms", factor: 0.001 },
    { label: "Microsecond (μs)", value: "us", factor: 0.000001 },
    { label: "Nanosecond (ns)", value: "ns", factor: 0.000000001 },
    { label: "Minute (min)", value: "min", factor: 60 },
    { label: "Hour (h)", value: "h", factor: 3600 },
    { label: "Day (d)", value: "d", factor: 86400 },
    { label: "Week (wk)", value: "wk", factor: 604800 },
    { label: "Month (mo)", value: "mo", factor: 2592000 }, // approx. 30 days
    { label: "Year (yr)", value: "yr", factor: 31536000 }, // approx. 365 days
  ],
  speed: [
    { label: "Meter per second (m/s)", value: "mps", factor: 1 },
    { label: "Kilometer per hour (km/h)", value: "kph", factor: 0.277778 },
    { label: "Mile per hour (mph)", value: "mph", factor: 0.44704 },
    { label: "Foot per second (ft/s)", value: "fps", factor: 0.3048 },
    { label: "Knot (kn)", value: "kn", factor: 0.514444 },
  ],
  pressure: [
    { label: "Pascal (Pa)", value: "pa", factor: 1 },
    { label: "Kilopascal (kPa)", value: "kpa", factor: 1000 },
    { label: "Megapascal (MPa)", value: "mpa", factor: 1000000 },
    { label: "Bar", value: "bar", factor: 100000 },
    { label: "Pound per square inch (psi)", value: "psi", factor: 6894.76 },
    { label: "Atmosphere (atm)", value: "atm", factor: 101325 },
    { label: "Torr", value: "torr", factor: 133.322 },
    { label: "Millimeter of mercury (mmHg)", value: "mmhg", factor: 133.322 },
  ],
  energy: [
    { label: "Joule (J)", value: "j", factor: 1 },
    { label: "Kilojoule (kJ)", value: "kj", factor: 1000 },
    { label: "Calorie (cal)", value: "cal", factor: 4.184 },
    { label: "Kilocalorie (kcal)", value: "kcal", factor: 4184 },
    { label: "Watt-hour (Wh)", value: "wh", factor: 3600 },
    { label: "Kilowatt-hour (kWh)", value: "kwh", factor: 3600000 },
    { label: "Electronvolt (eV)", value: "ev", factor: 1.602176634e-19 },
    { label: "British Thermal Unit (BTU)", value: "btu", factor: 1055.06 },
    { label: "Foot-pound (ft⋅lb)", value: "ftlb", factor: 1.355818 },
  ],
  power: [
    { label: "Watt (W)", value: "w", factor: 1 },
    { label: "Kilowatt (kW)", value: "kw", factor: 1000 },
    { label: "Megawatt (MW)", value: "mw", factor: 1000000 },
    { label: "Horsepower (hp)", value: "hp", factor: 745.7 },
    { label: "Foot-pound per minute (ft⋅lb/min)", value: "ftlbmin", factor: 0.0225969658 },
    { label: "BTU per hour (BTU/h)", value: "btuh", factor: 0.29307107 },
  ],
  data: [
    { label: "Bit (b)", value: "b", factor: 1 },
    { label: "Kilobit (kb)", value: "kb", factor: 1000 },
    { label: "Megabit (Mb)", value: "mb", factor: 1000000 },
    { label: "Gigabit (Gb)", value: "gb", factor: 1000000000 },
    { label: "Terabit (Tb)", value: "tb", factor: 1000000000000 },
    { label: "Byte (B)", value: "B", factor: 8 },
    { label: "Kilobyte (KB)", value: "KB", factor: 8000 },
    { label: "Megabyte (MB)", value: "MB", factor: 8000000 },
    { label: "Gigabyte (GB)", value: "GB", factor: 8000000000 },
    { label: "Terabyte (TB)", value: "TB", factor: 8000000000000 },
  ],
  angle: [
    { label: "Degree (°)", value: "deg", factor: 1 },
    { label: "Radian (rad)", value: "rad", factor: 57.29578 },
    { label: "Gradian (grad)", value: "grad", factor: 0.9 },
    { label: "Arcminute (')", value: "arcmin", factor: 1/60 },
    { label: "Arcsecond (\")", value: "arcsec", factor: 1/3600 },
  ],
  frequency: [
    { label: "Hertz (Hz)", value: "hz", factor: 1 },
    { label: "Kilohertz (kHz)", value: "khz", factor: 1000 },
    { label: "Megahertz (MHz)", value: "mhz", factor: 1000000 },
    { label: "Gigahertz (GHz)", value: "ghz", factor: 1000000000 },
    { label: "Revolutions per minute (rpm)", value: "rpm", factor: 1/60 },
  ],
  fuel_economy: [
    { label: "Miles per gallon (mpg)", value: "mpg", factor: 1 },
    { label: "Kilometers per liter (km/L)", value: "kml", factor: 0.425144 },
    { label: "Liters per 100 kilometers (L/100km)", value: "l100km", factor: 1 }, // Special conversion
  ],
  voltage: [
    { label: "Volt (V)", value: "v", factor: 1 },
    { label: "Millivolt (mV)", value: "mv", factor: 0.001 },
    { label: "Kilovolt (kV)", value: "kv", factor: 1000 },
    { label: "Megavolt (MV)", value: "Mv", factor: 1000000 },
  ],
  current: [
    { label: "Ampere (A)", value: "a", factor: 1 },
    { label: "Milliampere (mA)", value: "ma", factor: 0.001 },
    { label: "Kiloampere (kA)", value: "ka", factor: 1000 },
    { label: "Microampere (µA)", value: "ua", factor: 0.000001 },
  ]
};

// Function to get units for a specific category
export const getUnitsForCategory = (category: string) => {
  return units[category as keyof typeof units] || [];
};

// Special conversion functions
const convertTemperature = (value: number, from: string, to: string): number => {
  // Convert to Celsius first (as base unit)
  let celsius: number;

  if (from === "c") {
    celsius = value;
  } else if (from === "f") {
    celsius = (value - 32) * 5 / 9;
  } else if (from === "k") {
    celsius = value - 273.15;
  } else if (from === "r") {
    celsius = value * 1.25;
  } else {
    throw new Error("Invalid temperature unit");
  }

  // Convert from Celsius to target unit
  if (to === "c") {
    return celsius;
  } else if (to === "f") {
    return celsius * 9 / 5 + 32;
  } else if (to === "k") {
    return celsius + 273.15;
  } else if (to === "r") {
    return celsius * 0.8;
  } else {
    throw new Error("Invalid temperature unit");
  }
};


const convertFuelEconomy = (value: number, from: string, to: string): number => {
  if (from === to) return value;
  
  // Convert to mpg as base
  let mpg: number;
  
  if (from === "mpg") {
    mpg = value;
  } else if (from === "kml") {
    mpg = value / 0.425144;
  } else if (from === "l100km") {
    mpg = 235.214583 / value; // 235.214583 is the conversion factor
  } else {
    throw new Error("Invalid fuel economy unit");
  }
  
  // Convert from mpg to target unit
  if (to === "mpg") {
    return mpg;
  } else if (to === "kml") {
    return mpg * 0.425144;
  } else if (to === "l100km") {
    return 235.214583 / mpg;
  } else {
    throw new Error("Invalid fuel economy unit");
  }
};

// Main conversion function
export const convert = (value: number, fromUnit: string, toUnit: string): number => {
  if (fromUnit === toUnit) return value;

  // Find category based on units
  let category: string | null = null;
  
  for (const [cat, unitList] of Object.entries(units)) {
    if (unitList.some(u => u.value === fromUnit) && unitList.some(u => u.value === toUnit)) {
      category = cat;
      break;
    }
  }
  
  if (!category) throw new Error("Cannot convert between different categories");
  
  // Special case for temperature
  if (category === "temperature") {
    return convertTemperature(value, fromUnit, toUnit);
  }
  
  // Special case for fuel economy
  if (category === "fuel_economy") {
    return convertFuelEconomy(value, fromUnit, toUnit);
  }
  
  // Regular conversion using factors
  const unitList = units[category as keyof typeof units];
  const fromUnitData = unitList.find(u => u.value === fromUnit);
  const toUnitData = unitList.find(u => u.value === toUnit);
  
  if (!fromUnitData || !toUnitData) {
    throw new Error("Invalid units");
  }
  
  // Convert using factors
  const baseValue = value * fromUnitData.factor;
  return baseValue / toUnitData.factor;
};
