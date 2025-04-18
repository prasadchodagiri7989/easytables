export interface Formula {
  type: string;
  expression: string;
  example: string;
}

export interface Conversion {
  slug: string;
  title: string;
  description: string;
  formulas: Formula[];
}

export const conversions: Conversion[] = [
  {
    slug: "1-amps-to-watts",
    title: "How to convert 1 amp to watts",
    description: "Convert electric current of 1 amp (A) to electric power in watts (W).",
    formulas: [
      {
        type: "DC Power",
        expression: "watts = amps × volts",
        example: "1A × 12V = 12W"
      },
      {
        type: "AC Power (Resistive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=1, 1A × 120V = 120W"
      },
      {
        type: "AC Power (Inductive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=0.8, 0.8 × 1A × 120V = 96W"
      }
    ]
  },
  {
    slug: "1-watt-to-amps",
    title: "How to convert 1 watt to amps",
    description: "Convert electric power of 1 watt (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "1W ÷ 12V = 0.083A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "1W ÷ (1 × 120V) = 0.0083A"
      }
    ]
  },
  {
    slug: "2-amps-to-watt",
    title: "How to convert 2 amps to watts",
    description: "Convert electric current of 2 amps (A) to electric power in watts (W).",
    formulas: [
      {
        type: "DC Power",
        expression: "watts = amps × volts",
        example: "2A × 12V = 24W"
      },
      {
        type: "AC Power (Resistive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=1, 2A × 120V = 240W"
      },
      {
        type: "AC Power (Inductive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=0.8, 0.8 × 2A × 120V = 192W"
      }
    ]
  },
  {
    slug: "3-amps-to-watt",
    title: "How to convert 3 amps to watts",
    description: "Convert electric current of 3 amps (A) to electric power in watts (W).",
    formulas: [
      {
        type: "DC Power",
        expression: "watts = amps × volts",
        example: "3A × 12V = 36W"
      },
      {
        type: "AC Power (Resistive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=1, 3A × 120V = 360W"
      },
      {
        type: "AC Power (Inductive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=0.8, 0.8 × 3A × 120V = 288W"
      }
    ]
  },
  {
    slug: "10-amps-to-watt",
    title: "How to convert 10 amps to watts",
    description: "Convert electric current of 10 amps (A) to electric power in watts (W).",
    formulas: [
      {
        type: "DC Power",
        expression: "watts = amps × volts",
        example: "10A × 12V = 120W"
      },
      {
        type: "AC Power (Resistive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=1, 10A × 120V = 1200W"
      },
      {
        type: "AC Power (Inductive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=0.8, 0.8 × 10A × 120V = 960W"
      }
    ]
  },
  {
    slug: "15-amps-to-watt",
    title: "How to convert 15 amps to watts",
    description: "Convert electric current of 15 amps (A) to electric power in watts (W).",
    formulas: [
      {
        type: "DC Power",
        expression: "watts = amps × volts",
        example: "15A × 12V = 180W"
      },
      {
        type: "AC Power (Resistive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=1, 15A × 120V = 1800W"
      },
      {
        type: "AC Power (Inductive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=0.8, 0.8 × 15A × 120V = 1440W"
      }
    ]
  },
  {
    slug: "100-amps-to-watt",
    title: "How to convert 100 amps to watts",
    description: "Convert electric current of 100 amps (A) to electric power in watts (W).",
    formulas: [
      {
        type: "DC Power",
        expression: "watts = amps × volts",
        example: "100A × 12V = 1200W"
      },
      {
        type: "AC Power (Resistive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=1, 100A × 120V = 12000W"
      },
      {
        type: "AC Power (Inductive Load)",
        expression: "watts = PF × amps × volts",
        example: "PF=0.8, 0.8 × 100A × 120V = 9600W"
      }
    ]
  },
  {
    slug: "100-watts-to-amps",
    title: "How to convert 100 watts to amps",
    description: "Convert electric power of 100 watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "100W ÷ 12V = 8.33A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "100W ÷ (1 × 120V) = 0.83A"
      },
      {
        type: "AC Power (PF = 0.8)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "100W ÷ (0.8 × 120V) = 1.04A"
      }
    ]
  },
  {
    slug: "500-watts-to-amps",
    title: "How to convert 500 watts to amps",
    description: "Convert electric power of 500 watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "500W ÷ 12V = 41.67A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "500W ÷ (1 × 120V) = 4.17A"
      }
    ]
  },
  {
    slug: "600-watts-to-amps",
    title: "How to convert 600 watts to amps",
    description: "Convert electric power of 600 watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "600W ÷ 12V = 50A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "600W ÷ (1 × 120V) = 5A"
      }
    ]
  },
  {
    slug: "800-watts-to-amps",
    title: "How to convert 800 watts to amps",
    description: "Convert electric power of 800 watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "800W ÷ 12V = 66.67A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "800W ÷ (1 × 120V) = 6.67A"
      }
    ]
  },
  {
    slug: "1000-watts-to-amps",
    title: "How to convert 1000 watts to amps",
    description: "Convert electric power of 1000 watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "1000W ÷ 12V = 83.33A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "1000W ÷ (1 × 120V) = 8.33A"
      }
    ]
  },
  {
    slug: "1200-watts-to-amps",
    title: "How to convert 1200 watts to amps",
    description: "Convert electric power of 1200 watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "1200W ÷ 12V = 100A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "1200W ÷ (1 × 120V) = 10A"
      }
    ]
  },
  {
    slug: "2000-watts-to-amps",
    title: "How to convert 2000 watts to amps",
    description: "Convert electric power of 2000 watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "2000W ÷ 12V = 166.67A"
      },
      {
        type: "AC Power (PF = 1)",
        expression: "amps = watts ÷ (PF × volts)",
        example: "2000W ÷ (1 × 120V) = 16.67A"
      }
    ]
  },
  {
    slug: "ah-to-mah",
    title: "How to convert Ah to mAh",
    description: "Convert ampere-hours (Ah) to milliampere-hours (mAh).",
    formulas: [
      {
        type: "Battery Capacity",
        expression: "mAh = Ah × 1000",
        example: "2Ah × 1000 = 2000mAh"
      }
    ]
  },
  {
    slug: "mah-to-ah",
    title: "How to convert mAh to Ah",
    description: "Convert milliampere-hours (mAh) to ampere-hours (Ah).",
    formulas: [
      {
        type: "Battery Capacity",
        expression: "Ah = mAh ÷ 1000",
        example: "2000mAh ÷ 1000 = 2Ah"
      }
    ]
  },
  {
    slug: "amps-to-kva",
    title: "How to convert amps to kVA",
    description: "Convert electric current in amps (A) to apparent power in kilovolt-amperes (kVA).",
    formulas: [
      {
        type: "Single-Phase AC",
        expression: "kVA = (amps × volts) ÷ 1000",
        example: "10A × 240V ÷ 1000 = 2.4kVA"
      },
      {
        type: "Three-Phase AC",
        expression: "kVA = (amps × volts × √3) ÷ 1000",
        example: "10A × 415V × √3 ÷ 1000 = 7.18kVA"
      }
    ]
  },
  {
    slug: "amps-to-ma",
    title: "How to convert amps to mA",
    description: "Convert electric current in amps (A) to milliamps (mA).",
    formulas: [
      {
        type: "Current Conversion",
        expression: "mA = amps × 1000",
        example: "0.5A × 1000 = 500mA"
      }
    ]
  },
  {
    slug: "amps-to-kw",
    title: "How to convert amps to kW",
    description: "Convert electric current in amps (A) to power in kilowatts (kW).",
    formulas: [
      {
        type: "DC Power",
        expression: "kW = (amps × volts) ÷ 1000",
        example: "20A × 12V ÷ 1000 = 0.24kW"
      },
      {
        type: "Single-Phase AC",
        expression: "kW = (PF × amps × volts) ÷ 1000",
        example: "PF=0.85, 10A × 230V × 0.85 ÷ 1000 = 1.96kW"
      },
      {
        type: "Three-Phase AC",
        expression: "kW = (√3 × PF × amps × volts) ÷ 1000",
        example: "PF=0.85, √3 × 0.85 × 10A × 400V ÷ 1000 = 5.89kW"
      }
    ]
  },
  {
    slug: "amps-to-ohms",
    title: "How to convert amps to ohms",
    description: "Convert electric current in amps (A) to resistance in ohms (Ω).",
    formulas: [
      {
        type: "Ohm's Law",
        expression: "ohms = volts ÷ amps",
        example: "12V ÷ 2A = 6Ω"
      }
    ]
  },
  {
    slug: "amps-to-va",
    title: "How to convert amps to VA",
    description: "Convert electric current in amps (A) to apparent power in volt-amperes (VA).",
    formulas: [
      {
        type: "Single-Phase AC",
        expression: "VA = amps × volts",
        example: "5A × 120V = 600VA"
      },
      {
        type: "Three-Phase AC",
        expression: "VA = amps × volts × √3",
        example: "5A × 208V × √3 = 1800VA"
      }
    ]
  },
  {
    slug: "amps-to-volts",
    title: "How to convert amps to volts",
    description: "Convert electric current in amps (A) to electric potential in volts (V).",
    formulas: [
      {
        type: "Ohm's Law",
        expression: "volts = amps × ohms",
        example: "2A × 5Ω = 10V"
      },
      {
        type: "Power Relationship",
        expression: "volts = watts ÷ amps",
        example: "100W ÷ 5A = 20V"
      }
    ]
  },
  {
    slug: "amps-to-watts",
    title: "How to convert amps to watts",
    description: "Convert electric current in amps (A) to power in watts (W).",
    formulas: [
      {
        type: "DC Power",
        expression: "watts = amps × volts",
        example: "5A × 12V = 60W"
      },
      {
        type: "AC Power",
        expression: "watts = PF × amps × volts",
        example: "PF=0.9, 5A × 230V × 0.9 = 1035W"
      }
    ]
  },
  {
    slug: "db-converter",
    title: "How to convert dB values",
    description: "Convert between various decibel (dB) measurements.",
    formulas: [
      {
        type: "Power Ratio",
        expression: "dB = 10 × log10(P₂ ÷ P₁)",
        example: "10 × log10(100W ÷ 1W) = 20dB"
      },
      {
        type: "Voltage Ratio",
        expression: "dB = 20 × log10(V₂ ÷ V₁)",
        example: "20 × log10(10V ÷ 1V) = 20dB"
      },
      {
        type: "dBm to Watts",
        expression: "watts = 10^((dBm - 30) ÷ 10)",
        example: "10^((20dBm - 30) ÷ 10) = 0.1W"
      }
    ]
  },
  {
    slug: "ev-to-volts",
    title: "How to convert eV to volts",
    description: "Convert electron volts (eV) to volts (V).",
    formulas: [
      {
        type: "Energy Conversion",
        expression: "volts = eV ÷ e",
        example: "1.6 × 10^-19 joules ÷ 1.6 × 10^-19 coulombs = 1V"
      },
      {
        type: "Simplified",
        expression: "volts = eV (for a single electron)",
        example: "5eV = 5V (for a single electron)"
      }
    ]
  },
  {
    slug: "joules-to-kw",
    title: "How to convert joules to kW",
    description: "Convert energy in joules (J) to power in kilowatts (kW).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "kW = joules ÷ (time in seconds × 1000)",
        example: "3600J ÷ (1s × 1000) = 3.6kW"
      }
    ]
  },
  {
    slug: "joules-to-volts",
    title: "How to convert joules to volts",
    description: "Convert energy in joules (J) to electric potential in volts (V).",
    formulas: [
      {
        type: "Energy per Charge",
        expression: "volts = joules ÷ coulombs",
        example: "5J ÷ 2C = 2.5V"
      }
    ]
  },
  {
    slug: "joules-to-watts",
    title: "How to convert joules to watts",
    description: "Convert energy in joules (J) to power in watts (W).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "watts = joules ÷ time in seconds",
        example: "100J ÷ 2s = 50W"
      }
    ]
  },
  {
    slug: "kw-to-amps",
    title: "How to convert kW to amps",
    description: "Convert power in kilowatts (kW) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = (kW × 1000) ÷ volts",
        example: "1.2kW × 1000 ÷ 12V = 100A"
      },
      {
        type: "Single-Phase AC",
        expression: "amps = (kW × 1000) ÷ (PF × volts)",
        example: "PF=0.9, 2.3kW × 1000 ÷ (0.9 × 230V) = 11.11A"
      },
      {
        type: "Three-Phase AC",
        expression: "amps = (kW × 1000) ÷ (√3 × PF × volts)",
        example: "PF=0.85, 10kW × 1000 ÷ (√3 × 0.85 × 400V) = 16.96A"
      }
    ]
  },
  {
    slug: "kj-to-kw",
    title: "How to convert kJ to kW",
    description: "Convert energy in kilojoules (kJ) to power in kilowatts (kW).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "kW = kJ ÷ time in seconds",
        example: "60kJ ÷ 30s = 2kW"
      }
    ]
  },
  {
    slug: "kj-to-watts",
    title: "How to convert kJ to watts",
    description: "Convert energy in kilojoules (kJ) to power in watts (W).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "watts = (kJ × 1000) ÷ time in seconds",
        example: "3.6kJ × 1000 ÷ 60s = 60W"
      }
    ]
  },
  {
    slug: "kva-to-amps",
    title: "How to convert kVA to amps",
    description: "Convert apparent power in kilovolt-amperes (kVA) to electric current in amps (A).",
    formulas: [
      {
        type: "Single-Phase AC",
        expression: "amps = (kVA × 1000) ÷ volts",
        example: "5kVA × 1000 ÷ 230V = 21.74A"
      },
      {
        type: "Three-Phase AC",
        expression: "amps = (kVA × 1000) ÷ (√3 × volts)",
        example: "10kVA × 1000 ÷ (√3 × 400V) = 14.43A"
      }
    ]
  },
  {
    slug: "kw-to-kva",
    title: "How to convert kW to kVA",
    description: "Convert power in kilowatts (kW) to apparent power in kilovolt-amperes (kVA).",
    formulas: [
      {
        type: "Power Factor",
        expression: "kVA = kW ÷ PF",
        example: "PF=0.8, 4kW ÷ 0.8 = 5kVA"
      }
    ]
  },
  {
    slug: "kw-to-joules",
    title: "How to convert kW to joules",
    description: "Convert power in kilowatts (kW) to energy in joules (J).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "joules = kW × 1000 × time in seconds",
        example: "2kW × 1000 × 30s = 60000J"
      }
    ]
  },
  {
    slug: "kva-to-kw",
    title: "How to convert kVA to kW",
    description: "Convert apparent power in kilovolt-amperes (kVA) to power in kilowatts (kW).",
    formulas: [
      {
        type: "Power Factor",
        expression: "kW = kVA × PF",
        example: "PF=0.8, 5kVA × 0.8 = 4kW"
      }
    ]
  },
  {
    slug: "kva-to-va",
    title: "How to convert kVA to VA",
    description: "Convert apparent power in kilovolt-amperes (kVA) to volt-amperes (VA).",
    formulas: [
      {
        type: "Unit Conversion",
        expression: "VA = kVA × 1000",
        example: "2.5kVA × 1000 = 2500VA"
      }
    ]
  },
  {
    slug: "kva-to-watts",
    title: "How to convert kVA to watts",
    description: "Convert apparent power in kilovolt-amperes (kVA) to power in watts (W).",
    formulas: [
      {
        type: "Power Factor",
        expression: "watts = kVA × PF × 1000",
        example: "PF=0.9, 3kVA × 0.9 × 1000 = 2700W"
      }
    ]
  },
  {
    slug: "kw-to-kj",
    title: "How to convert kW to kJ",
    description: "Convert power in kilowatts (kW) to energy in kilojoules (kJ).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "kJ = kW × time in seconds",
        example: "1.5kW × 60s = 90kJ"
      }
    ]
  },
  {
    slug: "kw-to-kwh",
    title: "How to convert kW to kWh",
    description: "Convert power in kilowatts (kW) to energy in kilowatt-hours (kWh).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "kWh = kW × time in hours",
        example: "2kW × 3h = 6kWh"
      }
    ]
  },
  {
    slug: "kw-to-va",
    title: "How to convert kW to VA",
    description: "Convert power in kilowatts (kW) to apparent power in volt-amperes (VA).",
    formulas: [
      {
        type: "Power Factor",
        expression: "VA = (kW × 1000) ÷ PF",
        example: "PF=0.85, 2kW × 1000 ÷ 0.85 = 2353VA"
      }
    ]
  },
  {
    slug: "kw-to-volts",
    title: "How to convert kW to volts",
    description: "Convert power in kilowatts (kW) to electric potential in volts (V).",
    formulas: [
      {
        type: "DC Power",
        expression: "volts = (kW × 1000) ÷ amps",
        example: "1.2kW × 1000 ÷ 10A = 120V"
      },
      {
        type: "Single-Phase AC",
        expression: "volts = (kW × 1000) ÷ (PF × amps)",
        example: "PF=0.9, 2.3kW × 1000 ÷ (0.9 × 10A) = 255.56V"
      }
    ]
  },
  {
    slug: "kw-to-wh",
    title: "How to convert kW to Wh",
    description: "Convert power in kilowatts (kW) to energy in watt-hours (Wh).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "Wh = kW × 1000 × time in hours",
        example: "1.5kW × 1000 × 2h = 3000Wh"
      }
    ]
  },
  {
    slug: "kwh-to-kw",
    title: "How to convert kWh to kW",
    description: "Convert energy in kilowatt-hours (kWh) to power in kilowatts (kW).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "kW = kWh ÷ time in hours",
        example: "6kWh ÷ 2h = 3kW"
      }
    ]
  },
  {
    slug: "kwh-to-watts",
    title: "How to convert kWh to watts",
    description: "Convert energy in kilowatt-hours (kWh) to power in watts (W).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "watts = (kWh × 1000) ÷ time in hours",
        example: "3kWh × 1000 ÷ 2h = 1500W"
      }
    ]
  },
  {
    slug: "lumens-to-watts",
    title: "How to convert lumens to watts",
    description: "Convert luminous flux in lumens (lm) to power in watts (W).",
    formulas: [
      {
        type: "Incandescent Equivalent",
        expression: "watts = lumens ÷ 15",
        example: "800lm ÷ 15 = 53.33W"
      },
      {
        type: "LED Equivalent",
        expression: "watts = lumens ÷ 100",
        example: "800lm ÷ 100 = 8W"
      }
    ]
  },
  {
    slug: "lumens-to-lux",
    title: "How to convert lumens to lux",
    description: "Convert luminous flux in lumens (lm) to illuminance in lux (lx).",
    formulas: [
      {
        type: "Area Calculation",
        expression: "lux = lumens ÷ area in square meters",
        example: "1000lm ÷ 10m² = 100lx"
      }
    ]
  },
  {
    slug: "lux-to-lumens",
    title: "How to convert lux to lumens",
    description: "Convert illuminance in lux (lx) to luminous flux in lumens (lm).",
    formulas: [
      {
        type: "Area Calculation",
        expression: "lumens = lux × area in square meters",
        example: "100lx × 10m² = 1000lm"
      }
    ]
  },
  {
    slug: "ma-to-amps",
    title: "How to convert mA to amps",
    description: "Convert electric current in milliamps (mA) to amps (A).",
    formulas: [
      {
        type: "Current Conversion",
        expression: "amps = mA ÷ 1000",
        example: "500mA ÷ 1000 = 0.5A"
      }
    ]
  },
  {
    slug: "mah-to-wh",
    title: "How to convert mAh to Wh",
    description: "Convert battery capacity in milliampere-hours (mAh) to watt-hours (Wh).",
    formulas: [
      {
        type: "Battery Energy",
        expression: "Wh = (mAh × volts) ÷ 1000",
        example: "2000mAh × 3.7V ÷ 1000 = 7.4Wh"
      }
    ]
  },
  {
    slug: "ohms-to-amps",
    title: "How to convert ohms to amps",
    description: "Convert resistance in ohms (Ω) to electric current in amps (A).",
    formulas: [
      {
        type: "Ohm's Law",
        expression: "amps = volts ÷ ohms",
        example: "12V ÷ 4Ω = 3A"
      }
    ]
  },
  {
    slug: "ohms-to-volts",
    title: "How to convert ohms to volts",
    description: "Convert resistance in ohms (Ω) to electric potential in volts (V).",
    formulas: [
      {
        type: "Ohm's Law",
        expression: "volts = amps × ohms",
        example: "2A × 3Ω = 6V"
      }
    ]
  },
  {
    slug: "va-to-amps",
    title: "How to convert VA to amps",
    description: "Convert apparent power in volt-amperes (VA) to electric current in amps (A).",
    formulas: [
      {
        type: "Single-Phase AC",
        expression: "amps = VA ÷ volts",
        example: "600VA ÷ 120V = 5A"
      },
      {
        type: "Three-Phase AC",
        expression: "amps = VA ÷ (√3 × volts)",
        example: "1800VA ÷ (√3 × 208V) = 5A"
      }
    ]
  },
  {
    slug: "va-to-watts",
    title: "How to convert VA to watts",
    description: "Convert apparent power in volt-amperes (VA) to power in watts (W).",
    formulas: [
      {
        type: "Power Factor",
        expression: "watts = VA × PF",
        example: "PF=0.8, 1000VA × 0.8 = 800W"
      }
    ]
  },
  {
    slug: "va-to-kva",
    title: "How to convert VA to kVA",
    description: "Convert apparent power in volt-amperes (VA) to kilovolt-amperes (kVA).",
    formulas: [
      {
        type: "Unit Conversion",
        expression: "kVA = VA ÷ 1000",
        example: "2500VA ÷ 1000 = 2.5kVA"
      }
    ]
  },
  {
    slug: "va-to-kw",
    title: "How to convert VA to kW",
    description: "Convert apparent power in volt-amperes (VA) to power in kilowatts (kW).",
    formulas: [
      {
        type: "Power Factor",
        expression: "kW = (VA × PF) ÷ 1000",
        example: "PF=0.85, 2000VA × 0.85 ÷ 1000 = 1.7kW"
      }
    ]
  },
  {
    slug: "volts-to-amps",
    title: "How to convert volts to amps",
    description: "Convert electric potential in volts (V) to electric current in amps (A).",
    formulas: [
      {
        type: "Ohm's Law",
        expression: "amps = volts ÷ ohms",
        example: "24V ÷ 8Ω = 3A"
      },
      {
        type: "Power Relationship",
        expression: "amps = watts ÷ volts",
        example: "60W ÷ 12V = 5A"
      }
    ]
  },
  {
    slug: "volts-to-joules",
    title: "How to convert volts to joules",
    description: "Convert electric potential in volts (V) to energy in joules (J).",
    formulas: [
      {
        type: "Energy per Charge",
        expression: "joules = volts × coulombs",
        example: "12V × 5C = 60J"
      }
    ]
  },
  {
    slug: "volts-to-kw",
    title: "How to convert volts to kW",
    description: "Convert electric potential in volts (V) to power in kilowatts (kW).",
    formulas: [
      {
        type: "DC Power",
        expression: "kW = (volts × amps) ÷ 1000",
        example: "230V × 10A ÷ 1000 = 2.3kW"
      },
      {
        type: "AC Power",
        expression: "kW = (PF × volts × amps) ÷ 1000",
        example: "PF=0.9, 0.9 × 230V × 10A ÷ 1000 = 2.07kW"
      }
    ]
  },
  {
    slug: "volts-to-ohms",
    title: "How to convert volts to ohms",
    description: "Convert electric potential in volts (V) to resistance in ohms (Ω).",
    formulas: [
      {
        type: "Ohm's Law",
        expression: "ohms = volts ÷ amps",
        example: "12V ÷ 3A = 4Ω"
      }
    ]
  },
  {
    slug: "volts-to-ev",
    title: "How to convert volts to eV",
    description: "Convert electric potential in volts (V) to electron volts (eV).",
    formulas: [
      {
        type: "Energy Conversion",
        expression: "eV = volts × e",
        example: "1V × 1 = 1eV (for a single electron)"
      }
    ]
  },
  {
    slug: "volts-to-watts",
    title: "How to convert volts to watts",
    description: "Convert electric potential in volts (V) to power in watts (W).",
    formulas: [
      {
        type: "Ohm's Law",
        expression: "watts = volts² ÷ ohms",
        example: "12V² ÷ 6Ω = 24W"
      },
      {
        type: "Power Calculation",
        expression: "watts = volts × amps",
        example: "12V × 5A = 60W"
      }
    ]
  },
  {
    slug: "watts-to-amps",
    title: "How to convert watts to amps",
    description: "Convert power in watts (W) to electric current in amps (A).",
    formulas: [
      {
        type: "DC Power",
        expression: "amps = watts ÷ volts",
        example: "60W ÷ 12V = 5A"
      },
      {
        type: "AC Power",
        expression: "amps = watts ÷ (PF × volts)",
        example: "PF=0.8, 800W ÷ (0.8 × 120V) = 8.33A"
      }
    ]
  },
  {
    slug: "watts-to-joules",
    title: "How to convert watts to joules",
    description: "Convert power in watts (W) to energy in joules (J).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "joules = watts × time in seconds",
        example: "100W × 30s = 3000J"
      }
    ]
  },
  {
    slug: "watts-to-volts",
    title: "How to convert watts to volts",
    description: "Convert power in watts (W) to electric potential in volts (V).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "volts = √(watts × ohms)",
        example: "√(100W × 10Ω) = 31.62V"
      },
      {
        type: "Current Relationship",
        expression: "volts = watts ÷ amps",
        example: "120W ÷ 10A = 12V"
      }
    ]
  },
  {
    slug: "watts-to-va",
    title: "How to convert watts to VA",
    description: "Convert power in watts (W) to apparent power in volt-amperes (VA).",
    formulas: [
      {
        type: "Power Factor",
        expression: "VA = watts ÷ PF",
        example: "PF=0.8, 800W ÷ 0.8 = 1000VA"
      }
    ]
  },
  {
    slug: "watts-to-va",
    title: "How to convert watts to VA",
    description: "Convert power in watts (W) to apparent power in volt-amperes (VA).",
    formulas: [
      {
        type: "Power Factor",
        expression: "VA = watts ÷ PF",
        example: "PF=0.8, 800W ÷ 0.8 = 1000VA"
      }
    ]
  },
  {
    slug: "watts-to-kva",
    title: "How to convert watts to kVA",
    description: "Convert power in watts (W) to apparent power in kilovolt-amperes (kVA).",
    formulas: [
      {
        type: "Power Factor",
        expression: "kVA = watts ÷ (PF × 1000)",
        example: "PF=0.85, 4250W ÷ (0.85 × 1000) = 5kVA"
      }
    ]
  },
  {
    slug: "watts-to-kwh",
    title: "How to convert watts to kWh",
    description: "Convert power in watts (W) to energy in kilowatt-hours (kWh).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "kWh = (watts × time in hours) ÷ 1000",
        example: "500W × 4h ÷ 1000 = 2kWh"
      }
    ]
  },
  {
    slug: "watts-to-kj",
    title: "How to convert watts to kJ",
    description: "Convert power in watts (W) to energy in kilojoules (kJ).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "kJ = (watts × time in seconds) ÷ 1000",
        example: "500W × 60s ÷ 1000 = 30kJ"
      }
    ]
  },
  {
    slug: "watts-to-lumens",
    title: "How to convert watts to lumens",
    description: "Convert power in watts (W) to luminous flux in lumens (lm).",
    formulas: [
      {
        type: "Incandescent Conversion",
        expression: "lumens = watts × 15",
        example: "60W × 15 = 900 lumens"
      },
      {
        type: "LED Conversion",
        expression: "lumens = watts × 100",
        example: "10W × 100 = 1000 lumens"
      }
    ]
  },
  {
    slug: "watts-to-wh",
    title: "How to convert watts to Wh",
    description: "Convert power in watts (W) to energy in watt-hours (Wh).",
    formulas: [
      {
        type: "Energy Calculation",
        expression: "Wh = watts × time in hours",
        example: "100W × 3h = 300Wh"
      }
    ]
  },
  {
    slug: "wh-to-kw",
    title: "How to convert Wh to kW",
    description: "Convert energy in watt-hours (Wh) to power in kilowatts (kW).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "kW = Wh ÷ (time in hours × 1000)",
        example: "3000Wh ÷ (2h × 1000) = 1.5kW"
      }
    ]
  },
  {
    slug: "wh-to-mah",
    title: "How to convert Wh to mAh",
    description: "Convert energy in watt-hours (Wh) to battery capacity in milliampere-hours (mAh).",
    formulas: [
      {
        type: "Battery Capacity",
        expression: "mAh = (Wh × 1000) ÷ volts",
        example: "7.4Wh × 1000 ÷ 3.7V = 2000mAh"
      }
    ]
  },
  {
    slug: "wh-to-watts",
    title: "How to convert Wh to watts",
    description: "Convert energy in watt-hours (Wh) to power in watts (W).",
    formulas: [
      {
        type: "Power Calculation",
        expression: "watts = Wh ÷ time in hours",
        example: "300Wh ÷ 3h = 100W"
      }
    ]
  },
];