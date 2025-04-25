const colorData = {
    black: {
      name: "Black",
      hex: "#000000",
      rgb: "rgb(0,0,0)",
      codes: [
        { name: "black", hex: "#000000", rgb: "rgb(0,0,0)" },
        { name: "dimgray", hex: "#696969", rgb: "rgb(105,105,105)" },
        { name: "gray", hex: "#808080", rgb: "rgb(128,128,128)" },
        { name: "darkgray", hex: "#A9A9A9", rgb: "rgb(169,169,169)" },
        { name: "silver", hex: "#C0C0C0", rgb: "rgb(192,192,192)" }
      ],
      htmlSnippets: [
        `<p style="color:black;">These fonts are black!</p>`,
        `<p style="color:#000000; background:black">These fonts are black too!</p>`,
        `<p style="color:rgb(255,255,0); background:black">These fonts are black too!</p>`,
        `<p style="color:white; background:black">Background color is black</p>`
      ]
    },
    blue: {
      name: "Blue",
      hex: "#0000FF",
      rgb: "rgb(0,0,255)",
      codes: [
        { name: "blue", hex: "#0000FF", rgb: "rgb(0,0,255)" },
        { name: "lightblue", hex: "#ADD8E6", rgb: "rgb(173,216,230)" },
        { name: "skyblue", hex: "#87CEEB", rgb: "rgb(135,206,235)" },
        { name: "dodgerblue", hex: "#1E90FF", rgb: "rgb(30,144,255)" },
        { name: "navy", hex: "#000080", rgb: "rgb(0,0,128)" }
      ],
      htmlSnippets: [
        `<p style="color:blue;">These fonts are blue!</p>`,
        `<p style="color:#0000FF; background:lightblue">These fonts are blue too!</p>`,
        `<p style="color:rgb(255,255,255); background:blue">These fonts are blue too!</p>`
      ]
    },
    brown: {
      name: "Brown",
      hex: "#A52A2A",
      rgb: "rgb(165,42,42)",
      codes: [
        { name: "brown", hex: "#A52A2A", rgb: "rgb(165,42,42)" },
        { name: "saddlebrown", hex: "#8B4513", rgb: "rgb(139,69,19)" },
        { name: "sienna", hex: "#A0522D", rgb: "rgb(160,82,45)" },
        { name: "peru", hex: "#CD853F", rgb: "rgb(205,133,63)" },
        { name: "chocolate", hex: "#D2691E", rgb: "rgb(210,105,30)" }
      ],
      htmlSnippets: [
        `<p style="color:brown;">These fonts are brown!</p>`,
        `<p style="color:#A52A2A; background:peru">These fonts are brown too!</p>`,
        `<p style="color:white; background:brown">These fonts are brown too!</p>`
      ]
    },
    cyan: {
      name: "Cyan",
      hex: "#00FFFF",
      rgb: "rgb(0,255,255)",
      codes: [
        { name: "cyan", hex: "#00FFFF", rgb: "rgb(0,255,255)" },
        { name: "lightcyan", hex: "#E0FFFF", rgb: "rgb(224,255,255)" },
        { name: "turquoise", hex: "#40E0D0", rgb: "rgb(64,224,208)" },
        { name: "mediumturquoise", hex: "#48D1CC", rgb: "rgb(72,209,204)" },
        { name: "darkturquoise", hex: "#00CED1", rgb: "rgb(0,206,209)" }
      ],
      htmlSnippets: [
        `<p style="color:cyan;">These fonts are cyan!</p>`,
        `<p style="color:#00FFFF; background:lightcyan">These fonts are cyan too!</p>`,
        `<p style="color:white; background:cyan">These fonts are cyan too!</p>`
      ]
    },
    gold: {
      name: "Gold",
      hex: "#FFD700",
      rgb: "rgb(255,215,0)",
      codes: [
        { name: "gold", hex: "#FFD700", rgb: "rgb(255,215,0)" },
        { name: "lightgoldenrodyellow", hex: "#FAFAD2", rgb: "rgb(250,250,210)" },
        { name: "yellowgold", hex: "#FFCC00", rgb: "rgb(255,204,0)" },
        { name: "goldenrod", hex: "#DAA520", rgb: "rgb(218,165,32)" },
        { name: "darkgoldenrod", hex: "#B8860B", rgb: "rgb(184,134,11)" }
      ],
      htmlSnippets: [
        `<p style="color:gold;">These fonts are gold!</p>`,
        `<p style="color:#FFD700; background:lightgoldenrodyellow">These fonts are gold too!</p>`,
        `<p style="color:white; background:gold">These fonts are gold too!</p>`
      ]
    },
    green: {
      name: "Green",
      hex: "#008000",
      rgb: "rgb(0,128,0)",
      codes: [
        { name: "green", hex: "#008000", rgb: "rgb(0,128,0)" },
        { name: "lime", hex: "#00FF00", rgb: "rgb(0,255,0)" },
        { name: "forestgreen", hex: "#228B22", rgb: "rgb(34,139,34)" },
        { name: "darkgreen", hex: "#006400", rgb: "rgb(0,100,0)" },
        { name: "mediumseagreen", hex: "#3CB371", rgb: "rgb(60,179,113)" }
      ],
      htmlSnippets: [
        `<p style="color:green;">These fonts are green!</p>`,
        `<p style="color:#008000; background:lime">These fonts are green too!</p>`,
        `<p style="color:white; background:green">These fonts are green too!</p>`
      ]
    },
    grey: {
      name: "Grey",
      hex: "#808080",
      rgb: "rgb(128,128,128)",
      codes: [
        { name: "grey", hex: "#808080", rgb: "rgb(128,128,128)" },
        { name: "lightgray", hex: "#D3D3D3", rgb: "rgb(211,211,211)" },
        { name: "darkgray", hex: "#A9A9A9", rgb: "rgb(169,169,169)" },
        { name: "slategray", hex: "#708090", rgb: "rgb(112,128,144)" },
        { name: "dimgray", hex: "#696969", rgb: "rgb(105,105,105)" }
      ],
      htmlSnippets: [
        `<p style="color:grey;">These fonts are grey!</p>`,
        `<p style="color:#808080; background:lightgray">These fonts are grey too!</p>`,
        `<p style="color:white; background:grey">These fonts are grey too!</p>`
      ]
    },
    maroon: {
      name: "Maroon",
      hex: "#800000",
      rgb: "rgb(128,0,0)",
      codes: [
        { name: "maroon", hex: "#800000", rgb: "rgb(128,0,0)" },
        { name: "darkred", hex: "#8B0000", rgb: "rgb(139,0,0)" },
        { name: "firebrick", hex: "#B22222", rgb: "rgb(178,34,34)" },
        { name: "brown", hex: "#A52A2A", rgb: "rgb(165,42,42)" },
        { name: "indianred", hex: "#CD5C5C", rgb: "rgb(205,92,92)" }
      ],
      htmlSnippets: [
        `<p style="color:maroon;">These fonts are maroon!</p>`,
        `<p style="color:#800000; background:firebrick">These fonts are maroon too!</p>`,
        `<p style="color:white; background:maroon">These fonts are maroon too!</p>`
      ]
    },
    orange: {
      name: "Orange",
      hex: "#FFA500",
      rgb: "rgb(255,165,0)",
      codes: [
        { name: "orange", hex: "#FFA500", rgb: "rgb(255,165,0)" },
        { name: "darkorange", hex: "#FF8C00", rgb: "rgb(255,140,0)" },
        { name: "coral", hex: "#FF7F50", rgb: "rgb(255,127,80)" },
        { name: "tomato", hex: "#FF6347", rgb: "rgb(255,99,71)" },
        { name: "orangered", hex: "#FF4500", rgb: "rgb(255,69,0)" }
      ],
      htmlSnippets: [
        `<p style="color:orange;">These fonts are orange!</p>`,
        `<p style="color:#FFA500; background:coral">These fonts are orange too!</p>`,
        `<p style="color:white; background:orange">These fonts are orange too!</p>`
      ]
    },
    pink: {
        name: "Pink",
        hex: "#FFC0CB",
        rgb: "rgb(255,192,203)",
        codes: [
          { name: "pink", hex: "#FFC0CB", rgb: "rgb(255,192,203)" },
          { name: "hotpink", hex: "#FF69B4", rgb: "rgb(255,105,180)" },
          { name: "deeppink", hex: "#FF1493", rgb: "rgb(255,20,147)" },
          { name: "palevioletred", hex: "#DB7093", rgb: "rgb(219,112,147)" },
          { name: "lightpink", hex: "#FFB6C1", rgb: "rgb(255,182,193)" }
        ],
        htmlSnippets: [
          `<p style="color:pink;">These fonts are pink!</p>`,
          `<p style="color:#FFC0CB; background:hotpink">These fonts are pink too!</p>`,
          `<p style="color:white; background:pink">These fonts are pink too!</p>`
        ]
      },
      purple: {
        name: "Purple",
        hex: "#800080",
        rgb: "rgb(128,0,128)",
        codes: [
          { name: "purple", hex: "#800080", rgb: "rgb(128,0,128)" },
          { name: "violet", hex: "#EE82EE", rgb: "rgb(238,130,238)" },
          { name: "indigo", hex: "#4B0082", rgb: "rgb(75,0,130)" },
          { name: "orchid", hex: "#DA70D6", rgb: "rgb(218,112,214)" },
          { name: "mediumorchid", hex: "#BA55D3", rgb: "rgb(186,85,211)" }
        ],
        htmlSnippets: [
          `<p style="color:purple;">These fonts are purple!</p>`,
          `<p style="color:#800080; background:violet">These fonts are purple too!</p>`,
          `<p style="color:white; background:purple">These fonts are purple too!</p>`
        ]
      },
      red: {
        name: "Red",
        hex: "#FF0000",
        rgb: "rgb(255,0,0)",
        codes: [
          { name: "red", hex: "#FF0000", rgb: "rgb(255,0,0)" },
          { name: "darkred", hex: "#8B0000", rgb: "rgb(139,0,0)" },
          { name: "firebrick", hex: "#B22222", rgb: "rgb(178,34,34)" },
          { name: "crimson", hex: "#DC143C", rgb: "rgb(220,20,60)" },
          { name: "indianred", hex: "#CD5C5C", rgb: "rgb(205,92,92)" }
        ],
        htmlSnippets: [
          `<p style="color:red;">These fonts are red!</p>`,
          `<p style="color:#FF0000; background:firebrick">These fonts are red too!</p>`,
          `<p style="color:white; background:red">These fonts are red too!</p>`
        ]
      },
      white: {
        name: "White",
        hex: "#FFFFFF",
        rgb: "rgb(255,255,255)",
        codes: [
          { name: "white", hex: "#FFFFFF", rgb: "rgb(255,255,255)" },
          { name: "snow", hex: "#FFFAFA", rgb: "rgb(255,250,250)" },
          { name: "ghostwhite", hex: "#F8F8FF", rgb: "rgb(248,248,255)" },
          { name: "floralwhite", hex: "#FFFAF0", rgb: "rgb(255,250,240)" },
          { name: "seashell", hex: "#FFF5EE", rgb: "rgb(255,245,238)" }
        ],
        htmlSnippets: [
          `<p style="color:white;">These fonts are white!</p>`,
          `<p style="color:#FFFFFF; background:snow">These fonts are white too!</p>`,
          `<p style="color:black; background:white">These fonts are white too!</p>`
        ]
      },
      yellow: {
        name: "Yellow",
        hex: "#FFFF00",
        rgb: "rgb(255,255,0)",
        codes: [
          { name: "yellow", hex: "#FFFF00", rgb: "rgb(255,255,0)" },
          { name: "lightyellow", hex: "#FFFFE0", rgb: "rgb(255,255,224)" },
          { name: "gold", hex: "#FFD700", rgb: "rgb(255,215,0)" },
          { name: "lemonchiffon", hex: "#FFFACD", rgb: "rgb(255,250,205)" },
          { name: "moccasin", hex: "#FFE4B5", rgb: "rgb(255,228,181)" }
        ],
        htmlSnippets: [
          `<p style="color:yellow;">These fonts are yellow!</p>`,
          `<p style="color:#FFFF00; background:gold">These fonts are yellow too!</p>`,
          `<p style="color:black; background:yellow">These fonts are yellow too!</p>`
        ]
      },
      beige: {
        name: "Beige",
        hex: "#F5F5DC",
        rgb: "rgb(245,245,220)",
        codes: [
          { name: "beige", hex: "#F5F5DC", rgb: "rgb(245,245,220)" },
          { name: "wheat", hex: "#F5DEB3", rgb: "rgb(245,222,179)" },
          { name: "ivory", hex: "#FFFFF0", rgb: "rgb(255,255,240)" },
          { name: "oldlace", hex: "#FDF5E6", rgb: "rgb(253,245,230)" },
          { name: "seashell", hex: "#FFF5EE", rgb: "rgb(255,245,238)" }
        ],
        htmlSnippets: [
          `<p style="color:beige;">These fonts are beige!</p>`,
          `<p style="color:#F5F5DC; background:wheat">These fonts are beige too!</p>`,
          `<p style="color:black; background:beige">These fonts are beige too!</p>`
        ]
      },
      ivory: {
        name: "Ivory",
        hex: "#FFFFF0",
        rgb: "rgb(255,255,240)",
        codes: [
          { name: "ivory", hex: "#FFFFF0", rgb: "rgb(255,255,240)" },
          { name: "seashell", hex: "#FFF5EE", rgb: "rgb(255,245,238)" },
          { name: "floralwhite", hex: "#FFFAF0", rgb: "rgb(255,250,240)" },
          { name: "ghostwhite", hex: "#F8F8FF", rgb: "rgb(248,248,255)" },
          { name: "snow", hex: "#FFFAFA", rgb: "rgb(255,250,250)" }
        ],
        htmlSnippets: [
          `<p style="color:ivory;">These fonts are ivory!</p>`,
          `<p style="color:#FFFFF0; background:seashell">These fonts are ivory too!</p>`,
          `<p style="color:black; background:ivory">These fonts are ivory too!</p>`
        ]
      },
      lavender: {
        name: "Lavender",
        hex: "#E6E6FA",
        rgb: "rgb(230,230,250)",
        codes: [
          { name: "lavender", hex: "#E6E6FA", rgb: "rgb(230,230,250)" },
          { name: "thistle", hex: "#D8BFD8", rgb: "rgb(216,191,216)" },
          { name: "plum", hex: "#DDA0DD", rgb: "rgb(221,160,221)" },
          { name: "violet", hex: "#EE82EE", rgb: "rgb(238,130,238)" },
          { name: "orchid", hex: "#DA70D6", rgb: "rgb(218,112,214)" }
        ],
        htmlSnippets: [
          `<p style="color:lavender;">These fonts are lavender!</p>`,
          `<p style="color:#E6E6FA; background:thistle">These fonts are lavender too!</p>`,
          `<p style="color:black; background:lavender">These fonts are lavender too!</p>`
        ]
      },
      magenta: {
        name: "Magenta",
        hex: "#FF00FF",
        rgb: "rgb(255,0,255)",
        codes: [
          { name: "magenta", hex: "#FF00FF", rgb: "rgb(255,0,255)" },
          { name: "fuchsia", hex: "#FF00FF", rgb: "rgb(255,0,255)" },
          { name: "orchid", hex: "#DA70D6", rgb: "rgb(218,112,214)" },
          { name: "mediumvioletred", hex: "#C71585", rgb: "rgb(199,21,133)" },
          { name: "violet", hex: "#EE82EE", rgb: "rgb(238,130,238)" }
        ],
        htmlSnippets: [
          `<p style="color:magenta;">These fonts are magenta!</p>`,
          `<p style="color:#FF00FF; background:fuchsia">These fonts are magenta too!</p>`,
          `<p style="color:black; background:magenta">These fonts are magenta too!</p>`
        ]
      },
      peach: {
        name: "Peach",
        hex: "#FFDAB9",
        rgb: "rgb(255,218,185)",
        codes: [
          { name: "peach", hex: "#FFDAB9", rgb: "rgb(255,218,185)" },
          { name: "mistyrose", hex: "#FFE4E1", rgb: "rgb(255,228,225)" },
          { name: "papayawhip", hex: "#FFEFD5", rgb: "rgb(255,239,213)" },
          { name: "blanchedalmond", hex: "#FFEBCD", rgb: "rgb(255,235,205)" },
          { name: "antiquewhite", hex: "#FAEBD7", rgb: "rgb(250,235,215)" }
        ],
        htmlSnippets: [
          `<p style="color:peach;">These fonts are peach!</p>`,
          `<p style="color:#FFDAB9; background:mistyrose">These fonts are peach too!</p>`,
          `<p style="color:black; background:peach">These fonts are peach too!</p>`
        ]
      },
      silver: {
        name: "Silver",
        hex: "#C0C0C0",
        rgb: "rgb(192,192,192)",
        codes: [
          { name: "silver", hex: "#C0C0C0", rgb: "rgb(192,192,192)" },
          { name: "gray", hex: "#808080", rgb: "rgb(128,128,128)" },
          { name: "lightgray", hex: "#D3D3D3", rgb: "rgb(211,211,211)" },
          { name: "darkgray", hex: "#A9A9A9", rgb: "rgb(169,169,169)" },
          { name: "gainsboro", hex: "#DCDCDC", rgb: "rgb(220,220,220)" }
        ],
        htmlSnippets: [
          `<p style="color:silver;">These fonts are silver!</p>`,
          `<p style="color:#C0C0C0; background:gray">These fonts are silver too!</p>`,
          `<p style="color:black; background:silver">These fonts are silver too!</p>`
        ]
      },
      tan: {
        name: "Tan",
        hex: "#D2B48C",
        rgb: "rgb(210,180,140)",
        codes: [
          { name: "tan", hex: "#D2B48C", rgb: "rgb(210,180,140)" },
          { name: "burlywood", hex: "#DEB887", rgb: "rgb(222,184,135)" },
          { name: "wheat", hex: "#F5DEB3", rgb: "rgb(245,222,179)" },
          { name: "peru", hex: "#CD853F", rgb: "rgb(205,133,63)" },
          { name: "saddlebrown", hex: "#8B4513", rgb: "rgb(139,69,19)" }
        ],
        htmlSnippets: [
          `<p style="color:tan;">These fonts are tan!</p>`,
          `<p style="color:#D2B48C; background:burlywood">These fonts are tan too!</p>`,
          `<p style="color:black; background:tan">These fonts are tan too!</p>`
        ]
      },
      teal: {
        name: "Teal",
        hex: "#008080",
        rgb: "rgb(0,128,128)",
        codes: [
          { name: "teal", hex: "#008080", rgb: "rgb(0,128,128)" },
          { name: "darkcyan", hex: "#008B8B", rgb: "rgb(0,139,139)" },
          { name: "lightseagreen", hex: "#20B2AA", rgb: "rgb(32,178,170)" },
          { name: "mediumturquoise", hex: "#48D1CC", rgb: "rgb(72,209,204)" },
          { name: "cadetblue", hex: "#5F9EA0", rgb: "rgb(95,158,160)" }
        ],
        htmlSnippets: [
          `<p style="color:teal;">These fonts are teal!</p>`,
          `<p style="color:#008080; background:darkcyan">These fonts are teal too!</p>`,
          `<p style="color:white; background:teal">These fonts are teal too!</p>`
        ]
      },
      turquoise: {
        name: "Turquoise",
        hex: "#40E0D0",
        rgb: "rgb(64,224,208)",
        codes: [
          { name: "turquoise", hex: "#40E0D0", rgb: "rgb(64,224,208)" },
          { name: "mediumturquoise", hex: "#48D1CC", rgb: "rgb(72,209,204)" },
          { name: "darkturquoise", hex: "#00CED1", rgb: "rgb(0,206,209)" },
          { name: "lightseagreen", hex: "#20B2AA", rgb: "rgb(32,178,170)" },
          { name: "aquamarine", hex: "#7FFFD4", rgb: "rgb(127,255,212)" }
        ],
        htmlSnippets: [
          `<p style="color:turquoise;">These fonts are turquoise!</p>`,
          `<p style="color:#40E0D0; background:mediumturquoise">These fonts are turquoise too!</p>`,
          `<p style="color:white; background:turquoise">These fonts are turquoise too!</p>`
        ]
      }
    };

    export default colorData