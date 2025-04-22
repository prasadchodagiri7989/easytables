export const numberFormats = [
    { label: "ASCII", value: "ascii" },
    { label: "Binary", value: "binary" },
    { label: "Decimal", value: "decimal" },
    { label: "Hexadecimal", value: "hex" },
  ];
  
  export function convertNumber(value: string, from: string, to: string): string {
    let num: number | string;
  
    switch (from) {
      case "ascii":
        num = value.charCodeAt(0); // only first char for now
        break;
      case "binary":
        num = parseInt(value, 2);
        break;
      case "decimal":
        num = parseInt(value, 10);
        break;
      case "hex":
        num = parseInt(value, 16);
        break;
      default:
        throw new Error("Invalid input format");
    }
  
    switch (to) {
      case "ascii":
        return String.fromCharCode(Number(num));
      case "binary":
        return Number(num).toString(2);
      case "decimal":
        return Number(num).toString(10);
      case "hex":
        return Number(num).toString(16).toUpperCase();
      default:
        throw new Error("Invalid output format");
    }
  }
  