
const colorVariations = [
  {
    name: "Black",
    hex: "#000000",
    rgb: "rgb(0,0,0)",
    variations: [
      { name: "Dimgray", hex: "#696969", rgb: "rgb(105,105,105)" },
      { name: "Gray", hex: "#808080", rgb: "rgb(128,128,128)" },
      { name: "Darkgray", hex: "#A9A9A9", rgb: "rgb(169,169,169)" },
      { name: "Silver", hex: "#C0C0C0", rgb: "rgb(192,192,192)" }
    ]
  },
  {
    name: "Blue",
    hex: "#0000FF",
    rgb: "rgb(0,0,255)",
    variations: [
      { name: "Aliceblue", hex: "#F0F8FF", rgb: "rgb(240,248,255)" },
      { name: "Lavender", hex: "#E6E6FA", rgb: "rgb(230,230,250)" },
      { name: "Powderblue", hex: "#B0E0E6", rgb: "rgb(176,224,230)" },
      { name: "Lightblue", hex: "#ADD8E6", rgb: "rgb(173,216,230)" },
      { name: "Lightskyblue", hex: "#87CEFA", rgb: "rgb(135,206,250)" },
      { name: "Skyblue", hex: "#87CEEB", rgb: "rgb(135,206,235)" },
      { name: "Deepskyblue", hex: "#00BFFF", rgb: "rgb(0,191,255)" },
      { name: "Lightsteelblue", hex: "#B0C4DE", rgb: "rgb(176,196,222)" },
      { name: "Dodgerblue", hex: "#1E90FF", rgb: "rgb(30,144,255)" },
      { name: "Cornflowerblue", hex: "#6495ED", rgb: "rgb(100,149,237)" },
      { name: "Steelblue", hex: "#4682B4", rgb: "rgb(70,130,180)" },
      { name: "Cadetblue", hex: "#5F9EA0", rgb: "rgb(95,158,160)" },
      { name: "Mediumslateblue", hex: "#7B68EE", rgb: "rgb(123,104,238)" },
      { name: "Slateblue", hex: "#6A5ACD", rgb: "rgb(106,90,205)" },
      { name: "Darkslateblue", hex: "#483D8B", rgb: "rgb(72,61,139)" },
      { name: "Royalblue", hex: "#4169E1", rgb: "rgb(65,105,225)" },
      { name: "Mediumblue", hex: "#0000CD", rgb: "rgb(0,0,205)" },
      { name: "Darkblue", hex: "#00008B", rgb: "rgb(0,0,139)" },
      { name: "Navy", hex: "#000080", rgb: "rgb(0,0,128)" },
      { name: "Midnightblue", hex: "#191970", rgb: "rgb(25,25,112)" },
      { name: "Blueviolet", hex: "#8A2BE2", rgb: "rgb(138,43,226)" },
      { name: "Indigo", hex: "#4B0082", rgb: "rgb(75,0,130)" }
    ]
  },
  {
    name: "Brown",
    hex: "#A52A2A",
    rgb: "rgb(165,42,42)",
    variations: [
      { name: "Lightbrown", hex: "#C9966B", rgb: "rgb(201,150,107)" },
      { name: "Darkbrown", hex: "#6B3F26", rgb: "rgb(107,63,38)" }
    ]
  },
  {
    name: "Cyan",
    hex: "#00FFFF",
    rgb: "rgb(0,255,255)",
    variations: [
      { name: "Lightcyan", hex: "#E0FFFF", rgb: "rgb(224,255,255)" },
      { name: "Darkcyan", hex: "#008B8B", rgb: "rgb(0,139,139)" }
    ]
  },
  {
    name: "Gold",
    hex: "#FFD700",
    rgb: "rgb(255,215,0)",
    variations: [
      { name: "Lightgold", hex: "#FFFACD", rgb: "rgb(255,250,205)" },
      { name: "Darkgold", hex: "#B8860B", rgb: "rgb(184,134,11)" }
    ]
  },
  {
    name: "Green",
    hex: "#008000",
    rgb: "rgb(0,128,0)",
    variations: [
      { name: "Lightgreen", hex: "#90EE90", rgb: "rgb(144,238,144)" },
      { name: "Darkgreen", hex: "#006400", rgb: "rgb(0,100,0)" }
    ]
  },
  {
    name: "Grey",
    hex: "#808080",
    rgb: "rgb(128,128,128)",
    variations: [
      { name: "Lightgrey", hex: "#D3D3D3", rgb: "rgb(211,211,211)" },
      { name: "Darkgrey", hex: "#A9A9A9", rgb: "rgb(169,169,169)" }
    ]
  },
  {
    name: "Maroon",
    hex: "#800000",
    rgb: "rgb(128,0,0)",
    variations: [
      { name: "Darkmaroon", hex: "#3E1414", rgb: "rgb(62,20,20)" },
      { name: "Lightmaroon", hex: "#A52A2A", rgb: "rgb(165,42,42)" }
    ]
  },
  {
    name: "Orange",
    hex: "#FFA500",
    rgb: "rgb(255,165,0)",
    variations: [
      { name: "Darkorange", hex: "#FF8C00", rgb: "rgb(255,140,0)" },
      { name: "Lightorange", hex: "#FFDAB9", rgb: "rgb(255,218,185)" }
    ]
  },
  {
    name: "Pink",
    hex: "#FFC0CB",
    rgb: "rgb(255,192,203)",
    variations: [
      { name: "Lightpink", hex: "#FFB6C1", rgb: "rgb(255,182,193)" },
      { name: "Darkpink", hex: "#D32F2F", rgb: "rgb(211,47,47)" }
    ]
  },
  {
    name: "Purple",
    hex: "#800080",
    rgb: "rgb(128,0,128)",
    variations: [
      { name: "Violet", hex: "#EE82EE", rgb: "rgb(238,130,238)" },
      { name: "Darkpurple", hex: "#4B0082", rgb: "rgb(75,0,130)" }
    ]
  },
  {
    name: "Red",
    hex: "#FF0000",
    rgb: "rgb(255,0,0)",
    variations: [
      { name: "Darkred", hex: "#8B0000", rgb: "rgb(139,0,0)" },
      { name: "Lightred", hex: "#FF6347", rgb: "rgb(255,99,71)" }
    ]
  },
  {
    name: "White",
    hex: "#FFFFFF",
    rgb: "rgb(255,255,255)",
    variations: [
      { name: "Snow", hex: "#FFFAFA", rgb: "rgb(255,250,250)" },
      { name: "Ghostwhite", hex: "#F8F8FF", rgb: "rgb(248,248,255)" }
    ]
  },
  {
    name: "Yellow",
    hex: "#FFFF00",
    rgb: "rgb(255,255,0)",
    variations: [
      { name: "Lightyellow", hex: "#FFFFE0", rgb: "rgb(255,255,224)" },
      { name: "Darkyellow", hex: "#9B870C", rgb: "rgb(155,135,12)" }
    ]
  },
  {
    name: "Beige",
    hex: "#F5F5DC",
    rgb: "rgb(245,245,220)",
    variations: []
  },
  {
    name: "Ivory",
    hex: "#FFFFF0",
    rgb: "rgb(255,255,240)",
    variations: []
  },
  {
    name: "Lavender",
    hex: "#E6E6FA",
    rgb: "rgb(230,230,250)",
    variations: []
  },
  {
    name: "Magenta",
    hex: "#FF00FF",
    rgb: "rgb(255,0,255)",
    variations: []
  },
  {
    name: "Peach",
    hex: "#FFDAB9",
    rgb: "rgb(255,218,185)",
    variations: []
  },
  {
    name: "Silver",
    hex: "#C0C0C0",
    rgb: "rgb(192,192,192)",
    variations: []
  },
  {
    name: "Tan",
    hex: "#D2B48C",
    rgb: "rgb(210,180,140)",
    variations: []
  },
  {
    name: "Teal",
    hex: "#008080",
    rgb: "rgb(0,128,128)",
    variations: []
  },
  {
    name: "Turquoise",
    hex: "#40E0D0",
    rgb: "rgb(64,224,208)",
    variations: []
  }
];

export default colorVariations;