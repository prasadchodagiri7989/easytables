export const numberFormats = [
  { label: "ASCII", value: "ascii" },
  { label: "Binary", value: "binary" },
  { label: "Decimal", value: "decimal" },
  { label: "Hexadecimal", value: "hex" },
  { label: "Octal", value: "octal" },
  { label: "Base64", value: "base64" },
  { label: "String", value: "string" },
  { label: "Roman Numerals", value: "roman" },
  { label: "Fraction", value: "fraction" },
  { label: "Percent", value: "percent" },
  { label: "PPM", value: "ppm" },
  { label: "PPB", value: "ppb" },
  { label: "PPT", value: "ppt" },
  { label: "Degrees", value: "degrees" },
  { label: "DMS (Deg:Min:Sec)", value: "dms" },
  { label: "Radians", value: "radians" },
  { label: "Scientific", value: "scientific" }
];

export function convertNumber(value: string, from: string, to: string): string {
  const isValidInput = (input: string, format: string): boolean => {
    switch (format) {
      case "ascii":
        return /^[\x00-\x7F]*$/.test(input); // ASCII characters only
      case "binary":
        return /^[01]+$/.test(input); // Only binary characters (0 or 1)
      case "decimal":
        return !isNaN(parseFloat(input)); // Valid decimal number
      case "hex":
        return /^[0-9A-Fa-f]+$/.test(input); // Hexadecimal (0-9, A-F)
      case "octal":
        return /^[0-7]+$/.test(input); // Octal numbers (0-7)
      case "fraction":
        return /^(\d+)\/(\d+)$/.test(input); // Fraction in the form of "a/b"
      case "ppm":
      case "ppt":
      case "ppb":
        return !isNaN(parseFloat(input)); // Allow numeric input for PPT and PPM
      case "roman":
        return /^[IVXLCDM]+$/.test(input); // Roman numerals
      case "scientific":
        return /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(input); // Scientific notation
      default:
        return true; // For non-numeric inputs, assume it's okay
    }
  };

  if (!isValidInput(value, from)) {
    throw new Error(`Invalid input for format ${from}`);
  }

    // Handle conversions for PPM, PPT, PPB
    if (from === "ppt" && to === "ppm") {
      const num = parseFloat(value);
      return (num * 1000).toFixed(2); // Convert PPT to PPM (multiply by 1000)
    }
  
    if (from === "ppm" && to === "ppt") {
      const num = parseFloat(value);
      return (num / 1000).toFixed(2); // Convert PPM to PPT (divide by 1000)
    }
  
    if (from === "ppt" && to === "ppb") {
      const num = parseFloat(value);
      return (num * 1e6).toFixed(2); // Convert PPT to PPB (multiply by 1e6)
    }
  
    if (from === "ppb" && to === "ppt") {
      const num = parseFloat(value);
      return (num / 1e6).toFixed(2); // Convert PPB to PPT (divide by 1e6)
    }
  
    if (from === "ppm" && to === "ppb") {
      const num = parseFloat(value);
      return (num * 1000).toFixed(2); // Convert PPM to PPB (multiply by 1000)
    }
  
    if (from === "ppb" && to === "ppm") {
      const num = parseFloat(value);
      return (num / 1000).toFixed(2); // Convert PPB to PPM (divide by 1000)
    }

  // ASCII to other conversions
  if (from === "ascii") {
    const code = value.charCodeAt(0);
    if (to === "binary") return code.toString(2);
    if (to === "decimal") return code.toString(10);
    if (to === "hex") return code.toString(16).toUpperCase();
    if (to === "base64") return btoa(value); // Convert ASCII to Base64
  }

  // Binary conversions
  if (from === "binary") {
    const num = parseInt(value, 2);
    if (to === "ascii") return String.fromCharCode(num);
    if (to === "decimal") return num.toString(10);
    if (to === "hex") return num.toString(16).toUpperCase();
    if (to === "octal") return num.toString(8);
    if (to === "base64") return btoa(String.fromCharCode(num));
  }

  // Decimal conversions
  if (from === "decimal") {
    const num = parseFloat(value);
    if (to === "binary") return num.toString(2); // Convert to string in binary
    if (to === "hex") return num.toString(16).toUpperCase(); // Convert to string in hex
    if (to === "octal") return num.toString(8); // Convert to string in octal
    if (to === "fraction") return decimalToFraction(num); // Ensure decimalToFraction returns a string
    if (to === "percent") return (num * 100).toFixed(2) + "%"; // Percent as string
    if (to === "roman") return decimalToRoman(Math.floor(num)); // Roman numeral as string
    if (to === "scientific") return num.toExponential(); // Scientific notation as string
    if (to === "ppm") return (num * 1e6).toFixed(2); // PPM as string
    if (to === "ppt") return (num * 1e3).toFixed(2); // PPT as string
    if (to === "ppb") return (num * 1e9).toFixed(2); // PPB as string
  }

  // Fraction conversions
  if (from === "fraction") {
    const match = value.match(/^(\d+)\/(\d+)$/); // Match fraction format
    if (match) {
      const numerator = parseFloat(match[1]);
      const denominator = parseFloat(match[2]);

      if (to === "percent") return ((numerator / denominator) * 100).toFixed(2) + "%";
      if (to === "decimal") return (numerator / denominator).toString(10);
      if (to === "ppm") return ((numerator / denominator) * 1e6).toFixed(2); // Fraction to PPM
      if (to === "ppt") return ((numerator / denominator) * 1e3).toFixed(2); // Fraction to PPT
      if (to === "ppb") return ((numerator / denominator) * 1e9).toFixed(2); // Fraction to PPB
    }
  }

  // Hexadecimal conversions
  if (from === "hex") {
    const num = parseInt(value, 16);
    if (to === "ascii") return String.fromCharCode(num);
    if (to === "decimal") return num.toString(10);
    if (to === "binary") return num.toString(2);
    if (to === "octal") return num.toString(8);
    if (to === "base64") return btoa(String.fromCharCode(num));
  }

  // Octal conversions
  if (from === "octal") {
    const num = parseInt(value, 8);
    if (to === "decimal") return num.toString(10);
    if (to === "binary") return num.toString(2);
    if (to === "hex") return num.toString(16).toUpperCase();
  }

  // Base64 conversions
  if (from === "base64" && to === "string") return atob(value);
  if (from === "string" && to === "base64") return btoa(value);

  // Percentage conversions
  if (from === "percent") {
    const num = parseFloat(value);
    if (to === "decimal") return (num / 100).toString(10);
    if (to === "fraction") return decimalToFraction(num / 100); // Percent to Fraction
    if (to === "ppm") return (num * 1e4).toFixed(2); // Percent to PPM
    if (to === "ppt") return (num * 1e1).toFixed(2); // Percent to PPT
  }

  // Convert degrees to DMS (Degrees, Minutes, Seconds)
  if (from === "degrees" && to === "dms") {
    const deg = parseFloat(value);
    const degrees = Math.floor(deg);
    const minutes = Math.floor((deg - degrees) * 60);
    const seconds = ((deg - degrees - minutes / 60) * 3600).toFixed(2);
    return `${degrees}° ${minutes}' ${seconds}"`;
  }

  // Convert DMS to degrees
  if (from === "dms" && to === "degrees") {
    const match = value.match(/(\d+)° (\d+)' (\d+\.\d+)"/);
    if (match) {
      const degrees = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const seconds = parseFloat(match[3]);
      return (degrees + minutes / 60 + seconds / 3600).toFixed(6);
    }
  }

  // Convert Degrees to Radians
  if (from === "degrees" && to === "radians") {
    const degrees = parseFloat(value);
    return (degrees * (Math.PI / 180)).toFixed(6);
  }

  // Convert Radians to Degrees
  if (from === "radians" && to === "degrees") {
    const radians = parseFloat(value);
    return (radians * (180 / Math.PI)).toFixed(6);
  }

  // Roman Numerals conversions
  if (from === "roman" && to === "decimal") return romanToDecimal(value).toString();  // Convert number to string
  if (from === "decimal" && to === "roman") return decimalToRoman(parseInt(value));

  // Scientific notation conversions
  if (from === "scientific" && to === "decimal") return parseFloat(value).toString(10);
  if (from === "decimal" && to === "scientific") return parseFloat(value).toExponential();

  throw new Error("Conversion not supported");
}

// Helper functions for Roman numerals and Fraction
export function decimalToRoman(num: number): string {
  if (num > 3999 || num <= 0) {
    throw new Error("Roman numerals only go up to 3999.");
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

export function romanToDecimal(roman: string): number {
  const romanMap: { [key: string]: number } = {
    "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000,
  };
  let result = 0;
  let prevValue = 0;
  for (let i = roman.length - 1; i >= 0; i--) {
    const current = romanMap[roman[i]];
    if (current < prevValue) result -= current;
    else result += current;
    prevValue = current;
  }
  return result;
}



export function decimalToFraction(decimal: number): string {
  const tolerance = 1e-6; // Define precision tolerance
  let numerator = 1;
  let denominator = 1;

  // Use a better approach to find the fraction by multiplying
  let fraction = decimal;
  while (Math.abs(fraction - Math.round(fraction)) > tolerance) {
    fraction *= 10;
    denominator *= 10;
  }
  numerator = Math.round(fraction);

  // Simplify the fraction using GCD
  const gcd = (a: number, b: number): number => {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const greatestCommonDivisor = gcd(numerator, denominator);
  numerator /= greatestCommonDivisor;
  denominator /= greatestCommonDivisor;

  // Ensure that the result is a string
  return `${numerator}/${denominator}`;
}




