
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tools
import RedirectGenerator from "./components/tools/RedirectGenerator";
import Base64Encode from "./components/tools/Base64Encode";
import Base64Decode from "./components/tools/Base64Decode";
import Base64ToImage from "./components/tools/Base64ToImage";
import ImageToBase64 from "./components/tools/ImageToBase64";
import ColorTester from "./components/tools/ColorTester";
import ColorPickerFromImage from "./components/tools/ColorPickerFromImage";
import HtmlEditor from "./components/tools/HtmlEditor";
import HtmlLinkGenerator from "./components/tools/HtmlLinkGenerator";
import HtmlTableGenerator from "./components/tools/HtmlTableGenerator";
import HttpHeaderChecker from "./components/tools/HttpHeaderChecker";
import HttpStatusChecker from "./components/tools/HttpStatusChecker";
import SvgViewer from "./components/tools/SvgViewer";
import UrlEncode from "./components/tools/UrlEncode";
import UrlDecode from "./components/tools/UrlDecode";
import ScreenResolution from "./components/tools/ScreenResolution";
import PixelRuler from "./components/tools/PixelRuler";
import WindowSize from "./components/tools/WindowSize";

import { ScientificCalculator } from "./components/calculators/ScientificCalculator";
import { PercentageCalculator } from "./components/calculators/PercentageCalculator";
import { FractionCalculator } from "./components/calculators/FractionCalculator";
import { AverageCalculator } from "./components/calculators/AverageCalculator";
import { GradeCalculator } from "./components/calculators/GradeCalculator";
import { GPACalculator } from "./components/calculators/GPACalculator";
import { FinalGradeCalculator } from "./components/calculators/FinalGradeCalculator";
import { MortgageCalculator } from "./components/calculators/MortgageCalculator";
import { CompoundInterestCalculator } from "./components/calculators/CompoundInterestCalculator";
import { BMICalculator } from "./components/calculators/BMICalculator";
import { UnitConverter } from "./components/calculators/UnitConverter";

// Import the online tools components
import { CurrentTime } from "./components/tools/CurrentTime";
import { Stopwatch } from "./components/tools/Stopwatch";
import { AlarmClock } from "./components/tools/AlarmClock";
import { TodoList } from "./components/tools/TodoList";
import { RandomNumberGenerator } from "./components/tools/RandomNumberGenerator";
import { BarGraphMaker } from "./components/tools/BarGraphMaker";
import { Calendar } from "./components/tools/Calendar";
import { CallRecorder } from "./components/tools/CallRecorder";
import { CameraOnline } from "./components/tools/CameraOnline";
import { ChartMaker } from "./components/tools/ChartMaker";
import { ClickCounter } from "./components/tools/ClickCounter";
import { CPSTest } from "./components/tools/CPSTest";
import { CountdownTimer } from "./components/tools/CountdownTimer";
import { LineGraphMaker } from "./components/tools/LineGraphMaker";
import { GroceryList } from "./components/tools/GroceryList";
import { MicTest } from "./components/tools/MicTest";
import { OnlineClock } from "./components/tools/OnlineClock";
import { OnlineMirror } from "./components/tools/OnlineMirror";
import { OnlineNotepad } from "./components/tools/OnlineNotepad";
import { OnlineNotes } from "./components/tools/OnlineNotes";
import { PasswordGenerator } from "./components/tools/PasswordGenerator";
import { PieChartMaker } from "./components/tools/PieChartMaker";
import { ScatterPlot } from "./components/tools/ScatterPlot";
import { Scoreboard } from "./components/tools/Scoreboard";
import { ScreenRecorder } from "./components/tools/ScreenRecorder";
import { Screenshot } from "./components/tools/Screenshot";
import { SpeechToText } from "./components/tools/SpeechToText";
import { TextEditor } from "./components/tools/TextEditor";
import { TableChartMaker } from "./components/tools/TableChartMaker";
import { TextToSpeech } from "./components/tools/TextToSpeech";
import { ToneGenerator } from "./components/tools/ToneGenerator";
import { RulerCm } from "./components/tools/RulerCm";
import { RulerInch } from "./components/tools/RulerInch";
import { VoiceRecorder } from "./components/tools/VoiceRecorder";
import { WebcamTest } from "./components/tools/WebcamTest";
import { Layout } from "./components/Layout";

// Import text tools
import { WordCounter } from "./components/tools/WordCounter";
import { CharacterCounter } from "./components/tools/CharacterCounter";
import { LineCounter } from "./components/tools/LineCounter";
import { WordFrequency } from "./components/tools/WordFrequency";
import { PDFReader } from "./components/tools/PDFReader";
import { ImageToText } from "./components/tools/ImageToText";

// Import PDF tools
import { ImageToPDF } from "./components/tools/ImageToPDF";
import { JPGtoPDF } from "./components/tools/JPGtoPDF";
import { PNGtoPDF } from "./components/tools/PNGtoPDF";
import { PDFViewer } from "./components/tools/PDFViewer";

// Import Convertors
import { LengthConverter } from "./components/convertors/LengthConverter";
import { MassConverter } from "./components/convertors/MassConverter";
import { TemperatureConverter } from "./components/convertors/TemparatureConverter";
import { AreaConverter } from "./components/convertors/AreaConverter";
import { VolumeConverter } from "./components/convertors/VolumeConverter";
import { TimeConverter } from "./components/convertors/TimeConverter";
import { SpeedConverter } from "./components/convertors/SpeedConverter";
import { PressureConverter } from "./components/convertors/PressureConverter";
import { EnergyConverter } from "./components/convertors/EnergyConverter";
import { PowerConverter } from "./components/convertors/PowerConverter";
import { DataConverter } from "./components/convertors/DataConverter";
import { AngleConverter } from "./components/convertors/AngleConverter";
import { FrequencyConverter } from "./components/convertors/FrequencyConverter";
import { FuelEconomyConverter } from "./components/convertors/FuelEconomyConverter";
import { VoltageConverter } from "./components/convertors/VoltageConverter";
import { CurrentConverter } from "./components/convertors/CurrentConverter";
import { ColorConverter } from "./components/convertors/ColorConverter";

// Import Electrical & Electronics
import BasicElectricalTerms from "./components/electrical/BasicElectricalTerms";
import OhmsLawCalculator from "./components/electrical/calculators/OhmsLawCalculator";
import ElectricalUnits from "./components/electrical/ElectricalUnits";
import ElectronicComponents from "./components/electrical/ElectricalComponents";
import ElectricalSymbols from "./components/electrical/ElectricalSymbols";
import ElectronicCircuit from "./components/electrical/ElectronicCircuit";
import HowTo from "./components/electrical/HowTo";

import PowerCalculator from "./components/electrical/calculators/PowerCalculator";
import VoltageDividerCalculator from "./components/electrical/calculators/VoltageDivider";
import CapacitanceCalculator from "./components/electrical/calculators/Capacitance";
import ResistanceCalculator from "./components/electrical/calculators/Resistence";
import FrequencyCalculator from "./components/electrical/calculators/Frequency";

import LumensCalculator from "./components/lighting/calculators/lumensCalculator";
import LEDSavingsCalculator from "./components/lighting/calculators/ledsavings";
import WattageConverter from "./components/lighting/calculators/wattageConvertor";
import ColorTemperatureConverter from "./components/lighting/calculators/colorTemperature";
import EnergyUsageCalculator from "./components/lighting/calculators/energyUsage";

import AmpereInfo from "./components/electrical/content/Ampere";
import DbmInfo from "./components/electrical/content/DBmilli";
import DbmilliInfo from "./components/electrical/content/DBmilli";
import DecibelInfo from "./components/electrical/content/Decibel";
import FaradInfo from "./components/electrical/content/Farad";
import KvaInfo from "./components/electrical/content/Kilovolt-amp";
import KwhInfo from "./components/electrical/content/Kilowatt-hour";
import KilowattInfo from "./components/electrical/content/Kilowatt";
import OhmLaw from "./components/electrical/content/Ohm";
import VoltInfo from "./components/electrical/content/Volt";
import WattInfo from "./components/electrical/content/Watt";

import ResistorChart from "./components/electrical/content/resistor";
import CapacitorInfo from "./components/electrical/content/CapacitorInfo";
import InductorInfo from "./components/electrical/content/InductorInfo";
import DipSwitchInfo from "./components/electrical/content/DIPSwitchInfo";
import SolderBridgeInfo from "./components/electrical/content/SolderBridgeInfo";

import ElectricCurrent from "./components/electrical/content/electricalcurrent";
import ElectricPower from "./components/electrical/content/electricpower";
import ElectricalVoltage from "./components/electrical/content/electricalvoltage";
import ElectricalResistance from "./components/electrical/content/electricalresistance";
import ElectricCharge from "./components/electrical/content/electricalCharge";
import PowerEfficiency from "./components/electrical/content/powerefficiency";
import PowerFactor from "./components/electrical/content/powerfactor";

import SwitchSymbols from "./components/electrical/content/SwitchSymbol";
import GroundSymbols from "./components/electrical/content/GroundSymbol";
import ResistorSymbols from "./components/electrical/content/ResistorSymbol";
import DiodeSymbols from "./components/electrical/content/DiodeSymbol";
import CapacitorSymbols from "./components/electrical/content/CapacitorSymbol";
import TransistorSymbols from "./components/electrical/content/Transistorsymbol";

import OhmsLaw from "./components/electrical/content/ohmslaw";
import VoltageDivider from "./components/electrical/content/voltagedriver";
import KirchhoffLaws from "./components/electrical/content/Kirchhoffslaws";
import CoulombsLaw from "./components/electrical/content/Coulombslaw";

import SaveElectricityTips from "./components/electrical/content/SaveElectricity";
import HowToSaveEnergy from "./components/electrical/content/SaveEnergy";

import ElectricalCalculations from "./components/electrical/calculations/ElectricalCalculations";
import ConversionPage from "./components/conversions/ConversionPage";
import CalculatorTool from "./components/conversions/ConversionsElectrical";
import AmpsToKWCalculator from "./components/conversion-calculators/AmpsToKwCalculator";
import AmpsToKVACalculator from "./components/conversion-calculators/AmpsToKVACalculator";
import AmpsToVACalculator from "./components/conversion-calculators/AmpsToVACalculator";
import AmpsToVoltsCalculator from "./components/conversion-calculators/AmpsToVoltsCalculator";
import AmpsToWattsCalculator from "./components/conversion-calculators/AmpsToWattsCalculator";
import ElectricityBillCalculator from "./components/conversion-calculators/ElectricityBillCalculator";
import EnergyConsumptionCalculator from "./components/conversion-calculators/EnergyConsumption";
import EnergyCostCalculator from "./components/conversion-calculators/EnergyCostCalculator";
import EVToVoltsCalculator from "./components/conversion-calculators/EVToVoltsCalculator";
import JoulesToVoltsCalculator from "./components/conversion-calculators/JoulesToVoltsCalculator";
import JoulesToWattsCalculator from "./components/conversion-calculators/JoulesToWattsCalculator";
import KVAToAmpsCalculator from "./components/conversion-calculators/KVAToAmpsCalculator";
import KVAToWattsCalculator from "./components/conversion-calculators/KVAToWattsCalculator";
import KVAToKWCalculator from "./components/conversion-calculators/KVAToKWCalculator";
import KVAToVACalculator from "./components/conversion-calculators/KVAToVACalculator";
import KWToAmpsCalculator from "./components/conversion-calculators/KWToAmpsCalculator";
import KWToVoltsCalculator from "./components/conversion-calculators/KWToVoltsCalculator";
import KWToKWhCalculator from "./components/conversion-calculators/KWToKWhCalculator";
import KWToVACalculator from "./components/conversion-calculators/KWToVACalculator";
import KWToKVACalculator from "./components/conversion-calculators/KWToKVACalculator";
import KWhToKWCalculator from "./components/conversion-calculators/KWhToKWCalculator";
import KWhToWattsCalculator from "./components/conversion-calculators/KWhToWattsCalculator";
import MAhToWhCalculator from "./components/conversion-calculators/MAhToWhCalculator";
import PowerFactorCalculator from "./components/conversion-calculators/PowerFactorCalculator";
import VAToAmpsCalculator from "./components/conversion-calculators/VAToAmpsCalculator";
import VAToWattsCalculator from "./components/conversion-calculators/VAToWattsCalculator";
import VAToKWCalculator from "./components/conversion-calculators/VAToKWCalculator";
import VAToKVACalculator from "./components/conversion-calculators/VAToKVACalculator";
import VoltageDropCalculator from "./components/conversion-calculators/VoltageDropCalculator";
import VoltsToAmpsCalculator from "./components/conversion-calculators/VoltsToAmpsCalculator";
import VoltsToWattsCalculator from "./components/conversion-calculators/VoltsToWattsCalculator";
import VoltsToKWCalculator from "./components/conversion-calculators/VoltsToKWCalculator";
import VoltsToJoulesCalculator from "./components/conversion-calculators/VoltsToJoulesCalculator";
import VoltsToEVCalculator from "./components/conversion-calculators/VoltsToEVCalculator";
import WattsVoltsAmpsOhmsCalculator from "./components/conversion-calculators/WattsVoltsAmpsOhmsCalculator";
import WattsToAmpsCalculator from "./components/conversion-calculators/WattsToAmpsCalculator";
import WattsToKWhCalculator from "./components/conversion-calculators/WattsToKWhCalculator";
import WattsToVoltsCalculator from "./components/conversion-calculators/WattsToVoltsCalculator";
import WattsToVACalculator from "./components/conversion-calculators/WattsToVACalculator";
import WattsToKVACalculator from "./components/conversion-calculators/WattsToKVA";
import WattsToJoulesCalculator from "./components/conversion-calculators/WattsToJoulesCalculator";
import WhTomAhCalculator from "./components/conversion-calculators/WhTomAhCalculator";
import WireGaugeCalculator from "./components/conversion-calculators/WireGaugeCalculator";
import ElectricalCalculators from "./components/conversion-calculators/ElectricalCalculators";

import LightingCalculators from "./components/lighting/calculators/LightingCalculators";

import CandelaToLumensCalculator from "./components/lighting/calculators/CandelaToLumensCalculator";
import CandelaToLuxCalculator from "./components/lighting/calculators/CandelaToLuxCalculator";
import FootcandlesToLuxCalculator from "./components/lighting/calculators/FootCandlesToLuxCalculator";
import LumensToCandelaCalculator from "./components/lighting/calculators/LumensToCandelaCalculator";
import LumensToLuxCalculator from "./components/lighting/calculators/LumensToLuxCalculator";
import LumensToMillicandelaCalculator from "./components/lighting/calculators/LumensToMillicandelaCalculator";
import LumensToWattsCalculator from "./components/lighting/calculators/LumensToWattsCalculator";
import LuxToCandelaCalculator from "./components/lighting/calculators/LuxToCandelaCalculator";
import LuxToFootcandlesCalculator from "./components/lighting/calculators/LuxToFootcandlesCalculator";
import LuxToLumensCalculator from "./components/lighting/calculators/LuxToLumensCalculator";
import LuxToWattsCalculator from "./components/lighting/calculators/LuxToWattsCalculator";
import MillicandelaToLumensCalculator from "./components/lighting/calculators/MillicandelaToLumensCalculator";
import WattsToLumensCalculator from "./components/lighting/calculators/WattsToLumensCalculator";
import WattsToLuxCalculator from "./components/lighting/calculators/WattsToLuxCalculator";

import AllConversions from "./components/conversions/AllConversions";
import { NumberConverter } from "./components/convertors/NumberConverter";

import { DiscountCalculator } from "./components/calculators/financial/DiscountCalculator";
import TimeNow from "./components/calculators/time/TimeNow";
import ColorInfoPage from "./components/webdesign/color/ColorInfoPage";
import AllCalculators from "./components/calculators/AllCalculators";
import { EffectiveInterestRateCalculator } from "./components/calculators/financial/EffectiveInterestRateCalculator";
import { GSTCalculator } from "./components/calculators/financial/GSTCalculator";
import { SimpleInterestCalculator } from "./components/calculators/financial/SimpleInterestCalculator";
import { VATCalculator } from "./components/calculators/financial/VATCalculator";


import { AddingFractionsCalculator } from "./components/calculators/math/AddingFractionsCalculator";
import { AdditionCalculator } from "./components/calculators/math/AdditionCalculator";
import { AntilogCalculator } from "./components/calculators/math/AntilogCalculator";
import { ArccosCalculator } from "./components/calculators/math/ArccosCalculator";
import { ArcsinCalculator } from "./components/calculators/math/ArcsinCalculator";
import { ArctanCalculator } from "./components/calculators/math/ArctanCalculator";
import { BaseConverter } from "./components/calculators/math/BaseConverter";
import { BinaryCalculator } from "./components/calculators/math/BinaryCalculator";
import ComplexNumberCalculator from "./components/calculators/math/ComplexNumberCalculator";
import ConvolutionCalculator from "./components/calculators/math/ConvolutionCalculator";
import CosineCalculator from "./components/calculators/math/CosineCalculator";
import DividingFractionsCalculator from "./components/calculators/math/DividingFractionsCalculator";
import DivisionCalculator from "./components/calculators/math/DivisionCalculator";
import ExponentialGrowthCalculator from "./components/calculators/math/ExponentialGrowthCalculator";
import ExponentsCalculator from "./components/calculators/math/ExponentsCalculator";
import FactorialCalculator from "./components/calculators/math/FactorialCalculator";
import FractionsCalculator from "./components/calculators/math/FractionsCalculator";
import FractionSimplifier from "./components/calculators/math/FractionSimplifier";
import GCFCalculator from "./components/calculators/math/GCFCalculator";
import HexCalculator from "./components/calculators/math/HexCalculator";
import LCMCalculator from "./components/calculators/math/LCMCalculator";
import LnCalculator from "./components/calculators/math/LnCalculator";
import LogCalculator from "./components/calculators/math/LogCalculator";
import MultiplicationCalculator from "./components/calculators/math/MultiplicationCalculator";
import MultiplyFractionsCalculator from "./components/calculators/math/MultiplyFractionsCalculator";
import PercentErrorCalculator from "./components/calculators/math/PercentErrorCalculator";
import PercentageIncreaseCalculator from "./components/calculators/math/PercentageIncreaseCalculator";
import PythagoreanCalculator from "./components/calculators/math/PythagoreanCalculator";
import QuadraticEquationSolver from "./components/calculators/math/QuadraticEquationSolver";
import RatioCalculator from "./components/calculators/math/RatioCalculator";
import RemainderCalculator from "./components/calculators/math/RemainderCalculator";
import RightTriangleCalculator from "./components/calculators/math/RightTriangleCalculator";
import RootCalculator from "./components/calculators/math/RootCalculator";
import ScientificNotationCalculator from "./components/calculators/math/ScientificNotationCalculator";
import SimpleMathCalculator from "./components/calculators/math/SimpleMathCalculator";
import SineCalculator from "./components/calculators/math/SineCalculator";
import SquareRootCalculator from "./components/calculators/math/SquareRootCalculator";
import StandardDeviationCalculator from "./components/calculators/math/StandardDeviationCalculator";
import SubtractingFractionsCalculator from "./components/calculators/math/SubtractingFractionsCalculator";
import SubtractionCalculator from "./components/calculators/math/SubtractionCalculator";
import TangentCalculator from "./components/calculators/math/TangentCalculator";
import TrigonometryCalculator from "./components/calculators/math/TrigonometryCalculator";
import WeightedAverageCalculator from "./components/calculators/math/WeightedAverageCalculator";
import VarianceCalculator from "./components/calculators/math/VarianceCalculator";


import AWGToMmCalculator from "./components/calculators/wire/AWGToMmCalculator";
import SWGToMmCalculator from "./components/calculators/wire/SWGToMmCalculator";
import GaugeToMmCalculator from "./components/calculators/wire/GaugeToMmCalculator";

import DateCalculator from "./components/calculators/time/DateCalculator";
import TimeCalculator from "./components/calculators/time/TimeCalculator";
import AgeCalculator from "./components/calculators/time/AgeCalculator";
import BirthdayCalculator from "./components/calculators/time/BirthdayCalculator";
import { DaysInYear } from "./components/calculators/time/DaysInYear";
import { DSTChangeGuide } from "./components/calculators/time/DSTChangeGuide";
import { DSTEndGuide } from "./components/calculators/time/DSTEndGuide";
import { DSTStartGuide } from "./components/calculators/time/DSTStartGuide";
import { HoursInWeek } from "./components/calculators/time/HoursInWeek";
import { HoursInYear } from "./components/calculators/time/HoursInYear";
import { MonthsOfYear } from "./components/calculators/time/MonthsOfYear";
import { SecondsInDay } from "./components/calculators/time/SecondsInDay";
import { SecondsInHour } from "./components/calculators/time/SecondsInHour";
import { SecondsInYear } from "./components/calculators/time/SecondsInYear";
import TodayDateNow from "./components/calculators/time/TodayDateNow";
import { WeeksInMonth } from "./components/calculators/time/WeeksInMonth";
import { WeeksInYear } from "./components/calculators/time/WeeksInYear";
import WorldClock from "./components/calculators/time/WorldClock";




import EcologyTools from "./components/ecology/EcologyPage";
import HowToReduceCarbonFootprint from "./components/ecology/HowToReduceCarbonFootprint";
import HowToReducePlasticWaste from "./components/ecology/HowToReducePlasticWaste";
import HowToSaveFuel from "./components/ecology/HowToSaveFuel";
import GreenHostingComparison from "./components/ecology/GreenHostingComparison";
import PlantTrees from "./components/ecology/PlantTrees";

import AllMathematics from "./components/mathematics/AllMathematics";

import NumberTools from "./components/mathematics/numbers/NumberTools";
import { AdditionTable } from "./components/mathematics/numbers/AdditionTable";
import { EConstantGuide } from "./components/mathematics/numbers/EConstantGuide";
import { ExponentRules } from "./components/mathematics/numbers/ExponentRules";
import { FibonacciNumbersGuide } from "./components/mathematics/numbers/FibonacciNumbersGuide";
import { MultiplicationTable } from "./components/mathematics/numbers/MultiplicationTable";
import { NumeralSystemsGuide } from "./components/mathematics/numbers/NumeralSystemsGuide";
import { PercentageGuide } from "./components/mathematics/numbers/PercentageGuide";
import { PerMilleGuide } from "./components/mathematics/numbers/PerMilleGuide";
import { PPMGuide } from "./components/mathematics/numbers/PPMGuide";
import { PrimeNumberGuide } from "./components/mathematics/numbers/PrimeNumberGuide";
import { ZeroNumberGuide } from "./components/mathematics/numbers/ZeroNumberGuide";

import AlgebraTools from "./components/mathematics/algebra/AlgebraTools";
import { FactorialNumbersGuide } from "./components/mathematics/algebra/FactorialNumbersGuide";
import { LogarithmGuide } from "./components/mathematics/algebra/LogarithmGuide";
import { LogarithmRules } from "./components/mathematics/algebra/LogarithmRules";
import { NaturalLogarithm } from "./components/mathematics/algebra/NaturalLogarithm";
import { LogarithmTable } from "./components/mathematics/algebra/LogarithmTable";
import { QuadraticEquationExplanation } from "./components/mathematics/algebra/QuadraticEquation";

import TrigonometryTools from "./components/mathematics/trignometry/TrignometryTools";
import { Arccos } from "./components/mathematics/trignometry/Arccos";
import { Arcsin } from "./components/mathematics/trignometry/Arcsin";
import { Arctan } from "./components/mathematics/trignometry/Arctan";

import ProbabilityStatisticsTools from "./components/mathematics/probability/ProbabilityTools";
import { Expectation } from "./components/mathematics/probability/Expectation";
import { NormalDistribution } from "./components/mathematics/probability/NormalDistribution";
import { Probability } from "./components/mathematics/probability/Probability";
import { ProbabilityDistribution } from "./components/mathematics/probability/ProbabilityDistribution";
import { StandardDeviation } from "./components/mathematics/probability/StandardDeviation";
import { Variance } from "./components/mathematics/probability/Variance";

import CalculusTools from "./components/mathematics/calculus/CalculusTools";
import { Convolution } from "./components/mathematics/calculus/Convolution";
import { Derivative } from "./components/mathematics/calculus/Derivative";
import { LaplaceTransformExplanation } from "./components/mathematics/calculus/LaplaceTransform";

import MathSymbolsTools from "./components/mathematics/symbols/SymbolTools";
import { AlgebraSymbols } from "./components/mathematics/symbols/AlgebraSymbols";
import { CalculusAnalysisSymbols } from "./components/mathematics/symbols/CalculusAnalysisSymbols";
import { GeometrySymbols } from "./components/mathematics/symbols/GeometrySymbols";
import { GreekAlphabetSymbols } from "./components/mathematics/symbols/GreekAlphabetSymbols";
import { LogicSymbols } from "./components/mathematics/symbols/LogicSymbols";
import { MathSymbols } from "./components/mathematics/symbols/MathSymbols";
import { NumberSymbols } from "./components/mathematics/symbols/NumberSymbols";
import { RomanNumerals } from "./components/mathematics/symbols/RomanNumerals";
import { SetTheorySymbols } from "./components/mathematics/symbols/SetTheorySymbols";
import { StatisticalSymbols } from "./components/mathematics/symbols/StatisticalSymbols";


import ColorSchemeGenerator from "./components/webdesign/color/ColorSchemeGenerator";
import HtmlColorCode from "./components/webdesign/color/HtmlColorCodes";
import RGBColorPicker from "./components/webdesign/color/RGBColorPicker";
import WebSafeColors from "./components/webdesign/color/WebSafeColors";

import CanonicalURL from "./components/webdesign/development/CanonicalURL";
import HTAccessRedirection from "./components/webdesign/development/HTAccessRedirection";
import HTMLRedirection from "./components/webdesign/development/HTMLRedirection";
import JavaScriptRedirection from "./components/webdesign/development/JavaScriptRedirection";
import JQueryRedirection from "./components/webdesign/development/JQueryRedirection";
import PHPRedirection from "./components/webdesign/development/PHPRedirection";
import ScreenResolutionStatistics from "./components/webdesign/development/ScreenResolutionStatistics";
import WebsiteTrafficDown from "./components/webdesign/development/WebsiteTrafficDown";

import HTMLCharacterCodes from "./components/webdesign/html/HTMLCharacterCodes";
import HTMLColorCodes from "./components/webdesign/html/HTMLColorCodes";
import HTMLComments from "./components/webdesign/html/HTMLComments";
import HTMLTables from "./components/webdesign/html/HTMLTables";
import WebTools from "./components/webdesign/WebTools";
import HtmlColorCodes from "./components/webdesign/color/HtmlColorCodes";

import AllCode from "./components/code/AllCode";

import AllLinux from "./components/code/linux/AllLinux";
import CatCommand from "./components/code/linux/CatCommand";
import CdCommand from "./components/code/linux/CdCommand";
import CpCommand from "./components/code/linux/CpCommand";
import CurrentDirectory from "./components/code/linux/CurrentDirectory";
import GccCommand from "./components/code/linux/GccCommand";
import LsCommand from "./components/code/linux/LsCommand";
import MoveFiles from "./components/code/linux/MoveFiles";
import MvCommand from "./components/code/linux/MvCommand";
import PwdCommand from "./components/code/linux/PwdCommand";
import SlowVirtualBoxUbuntu from "./components/code/linux/SlowVirtualBoxUbuntu";
import ViewFiles from "./components/code/linux/ViewFiles";

import TextTools from "./components/code/text/TextTools";
import AltCodes from "./components/code/text/AltCodes";
import AsciiTable from "./components/code/text/AsciiTable";
import UnicodePage from "./components/code/text/UnicodePage";

import DevelopmentTools from "./components/webdesign/development/DevelopementTools";
import HtmlTools from "./components/webdesign/html/HTMLtools";
import ColorTools from "./components/webdesign/color/ColorTools";

import AhToMAhConverter from "./components/electrical/calculations/AhToMAhConverter";
import AmpsToKilowattsConverter from "./components/electrical/calculations/AmpsToKilowattsConverter";
import AmpsToKVAConverter from "./components/electrical/calculations/AmpsToKVAConverter";
import AmpsToMilliampsConverter from "./components/electrical/calculations/AmpsToMilliampsConverter";
import AmpsToOhmsConverter from "./components/electrical/calculations/AmpsToOhmsConverter";
import AmpsToVAConverter from "./components/electrical/calculations/AmpsToVAConverter";
import AmpsToVoltsConverter from "./components/electrical/calculations/AmpsToVoltsConverter";
import AmpToWattsConverter from "./components/electrical/calculations/AmpToWattsConverter";
import DBConverter from "./components/electrical/calculations/DBConverter";
import ElectronVoltToVoltConverter from "./components/electrical/calculations/ElectronVoltToVoltConverter";
import JoulesToKilowattsConverter from "./components/electrical/calculations/JoulesToKilowattsConverter";
import JoulesToVoltsConverter from "./components/electrical/calculations/JoulesToVoltsConverter";
import JoulesToWattsConverter from "./components/electrical/calculations/JoulesToWattsConverter";
import KilowattsToAmpsConverter from "./components/electrical/calculations/KilowattsToAmpsConverter";
import KilowattsToJoulesConverter from "./components/electrical/calculations/KilowattsToJoulesConverter";
import KilowattsToKVAConverter from "./components/electrical/calculations/KilowattsToKVAConverter";
import KVAToKWConverter from "./components/electrical/calculations/KVAToKWConverter";
import KVAToVAConverter from "./components/electrical/calculations/KVAToVAConverter";
import KVAToWattsConverter from "./components/electrical/calculations/KVAToWattsConverter";
import KWhToKWConverter from "./components/electrical/calculations/KWhToKWConverter";
import KWhToWattConverter from "./components/electrical/calculations/KWhToWattConverter";
import KWToKJConverter from "./components/electrical/calculations/KWToKJConverter";
import KWToKWhConverter from "./components/electrical/calculations/KWToKWhConverter";
import KWToVAConverter from "./components/electrical/calculations/KWToVAConverter";
import KWToVoltsConverter from "./components/electrical/calculations/KWToVoltsConverter";
import KWToWhConverter from "./components/electrical/calculations/KWToWhConverter";
import LumenToLuxConverter from "./components/electrical/calculations/LumenToLuxConverter";
import LumenToWattConverter from "./components/electrical/calculations/LumenToWattConverter";
import LuxToLumenConverter from "./components/electrical/calculations/LuxToLumenConverter";
import MahToAhConverter from "./components/electrical/calculations/MahToAhConverter";
import MahToWhConverter from "./components/electrical/calculations/MahToWhConverter";
import MilliAmpsToAmpsConverter from "./components/electrical/calculations/MilliAmpsToAmpsConverter";
import OhmsToAmpsConverter from "./components/electrical/calculations/OhmsToAmpsConverter";
import OhmsToVoltsConverter from "./components/electrical/calculations/OhmsToVoltsConverter";
import VAToAmpsConverter from "./components/electrical/calculations/VAToAmpsConverter";
import VAToKVAConverter from "./components/electrical/calculations/VAToKVAConverter";
import VAToKWConverter from "./components/electrical/calculations/VAToKWConverter";
import VAToWattsConverter from "./components/electrical/calculations/VAToWattsConverter";
import VoltsToAmpsConverter from "./components/electrical/calculations/VoltsToAmpsConverter";
import VoltsToEVConverter from "./components/electrical/calculations/VoltsToEVConverter";
import VoltsToJoulesConverter from "./components/electrical/calculations/VoltsToJoulesConverter";
import VoltsToKWConverter from "./components/electrical/calculations/VoltsToKWConverter";
import VoltsToOhmsConverter from "./components/electrical/calculations/VoltsToOhmsConverter";
import VoltsToWattsConverter from "./components/electrical/calculations/VoltsToWattsConverter";
import WattsToAmpsConverter from "./components/electrical/calculations/WattsToAmpsConverter";
import WattsToKJConverter from "./components/electrical/calculations/WattsToKJConverter";
import WattsToKVAConverter from "./components/electrical/calculations/WattsToKVAConverter";
import WattsToKWhConverter from "./components/electrical/calculations/WattsToKWhConverter";
import WattsToLumensConverter from "./components/electrical/calculations/WattsToLumensConverter";
import WattsToVAConverter from "./components/electrical/calculations/WattsToVAConverter";
import WattsToJoulesConverter from "./components/electrical/calculations/WattsToJoulesConverter";
import WattsToVoltsConverter from "./components/electrical/calculations/WattsToVoltsConverter";
import WattsToWhConverter from "./components/electrical/calculations/WattsToWhConverter";
import WhToKwConverter from "./components/electrical/calculations/WhToKwConverter";
import WhToMahConverter from "./components/electrical/calculations/WhToMahConverter";
import WhToWattsConverter from "./components/electrical/calculations/WhToWattsConverter";

import FinancialCalculators from "./components/calculators/financial/FinancialCalculators";
import MathTools from "./components/calculators/math/MathTools";
import AllGradeCalculators from "./components/calculators/grade/AllGradeCalculators";
import { CollegeGPACalculator } from "./components/calculators/grade/CollegeGPACalculator";
import { GPACalculationPage } from "./components/calculators/grade/GPACalculationPage";
import { GPAToLetterGradeConversion } from "./components/calculators/grade/GPAToLetterGradeConversion";
import { GradeCalculationPage } from "./components/calculators/grade/GradeCalculationPage";
import { HighSchoolGPACalculator } from "./components/calculators/grade/HighSchoolGPACalculator";
import { LetterGradeToGPACalculator } from "./components/calculators/grade/LetterGradeToGPACalculator";
import { TestCalculator } from "./components/calculators/grade/TestCalculator";

import TimeDateTools from "./components/calculators/time/TimeDateTools";
import WireGaugeTools from "./components/calculators/wire/WireGaugeTools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          
          {/* Calculator Routes */}
          <Route path="/scientific" element={<Layout><ScientificCalculator /></Layout>} />
          <Route path="/percentage" element={<Layout><PercentageCalculator /></Layout>} />
          <Route path="/fraction" element={<Layout><FractionCalculator /></Layout>} />
          <Route path="/average" element={<Layout><AverageCalculator /></Layout>} />
          <Route path="/grade" element={<Layout><GradeCalculator /></Layout>} />
          <Route path="/gpa" element={<Layout><GPACalculator /></Layout>} />
          <Route path="/final-grade" element={<Layout><FinalGradeCalculator /></Layout>} />
          <Route path="/mortgage" element={<Layout><MortgageCalculator /></Layout>} />
          <Route path="/compound-interest" element={<Layout><CompoundInterestCalculator /></Layout>} />
          <Route path="/bmi" element={<Layout><BMICalculator /></Layout>} />
          <Route path="/unit-converter" element={<Layout><UnitConverter /></Layout>} />
          
          {/* Convertors Routes */}
          <Route path="/convertor/length" element={<Layout><LengthConverter /></Layout>} />
          <Route path="/convertor/mass" element={<Layout><MassConverter /></Layout>} />
          <Route path="/convertor/temperature" element={<Layout><TemperatureConverter /></Layout>} />
          <Route path="/convertor/area" element={<Layout><AreaConverter /></Layout>} />
          <Route path="/convertor/volume" element={<Layout><VolumeConverter /></Layout>} />
          <Route path="/convertor/time" element={<Layout><TimeConverter /></Layout>} />
          <Route path="/convertor/speed" element={<Layout><SpeedConverter /></Layout>} />
          <Route path="/convertor/pressure" element={<Layout><PressureConverter /></Layout>} />
          <Route path="/convertor/energy" element={<Layout><EnergyConverter /></Layout>} />
          <Route path="/convertor/power" element={<Layout><PowerConverter /></Layout>} />
          <Route path="/convertor/data" element={<Layout><DataConverter /></Layout>} />
          <Route path="/convertor/angle" element={<Layout><AngleConverter /></Layout>} />
          <Route path="/convertor/frequency" element={<Layout><FrequencyConverter /></Layout>} />
          <Route path="/convertor/fuel_economy" element={<Layout><FuelEconomyConverter /></Layout>} />
          <Route path="/convertor/voltage" element={<Layout><VoltageConverter /></Layout>} />
          <Route path="/convertor/current" element={<Layout><CurrentConverter /></Layout>} />
          <Route path="/convertor/color" element={<Layout><ColorConverter /></Layout>} />


          {/* Electrical & Electronic Routes */}
          <Route path="/electrical/basic-terms" element={<Layout><BasicElectricalTerms /></Layout>} />
          <Route path="/electrical/calculators/ohms-law" element={<Layout><OhmsLawCalculator /></Layout>} />
          <Route path="/electrical/units" element={<Layout><ElectricalUnits /></Layout>} />
          <Route path="/electrical/components" element={<Layout><ElectronicComponents /></Layout>} />
          <Route path="/electrical/symbols" element={<Layout><ElectricalSymbols /></Layout>} />
          <Route path="/electrical/laws" element={<Layout><ElectronicCircuit /></Layout>} />
          <Route path="/electrical/save-electricity" element={<Layout><HowTo /></Layout>} />
          <Route path="/electrical/calculators/power" element={<Layout><PowerCalculator /></Layout>} />
          <Route path="/electrical/calculators/voltage-divider" element={<Layout><VoltageDividerCalculator /></Layout>} />
          <Route path="/electrical/calculators/capacitance" element={<Layout><CapacitanceCalculator /></Layout>} />
          <Route path="/electrical/calculators/resistance" element={<Layout><ResistanceCalculator /></Layout>} />
          <Route path="/electrical/calculators/frequency" element={<Layout><FrequencyCalculator /></Layout>} />

          <Route path="/electrical/lighting/lumens" element={<Layout><LumensCalculator /></Layout>} />
          <Route path="/electrical/lighting/led-savings" element={<Layout><LEDSavingsCalculator /></Layout>} />
          <Route path="/electrical/lighting/wattage" element={<Layout><WattageConverter /></Layout>} />
          <Route path="/electrical/lighting/color-temp" element={<Layout><ColorTemperatureConverter /></Layout>} />
          <Route path="/electrical/lighting/energy-usage" element={<Layout><EnergyUsageCalculator /></Layout>} />
          
          <Route path="/electrical/units/ampere" element={<Layout><AmpereInfo /></Layout>} />
          <Route path="/electrical/units/dbm" element={<Layout><DbmilliInfo /></Layout>} />
          <Route path="/electrical/units/dbw" element={<Layout><DbmInfo /></Layout>} />
          <Route path="/electrical/units/decibel" element={<Layout><DecibelInfo /></Layout>} />
          <Route path="/electrical/units/farad" element={<Layout><FaradInfo /></Layout>} />
          <Route path="/electrical/units/kva" element={<Layout><KvaInfo /></Layout>} />
          <Route path="/electrical/units/kw" element={<Layout><KilowattInfo /></Layout>} />
          <Route path="/electrical/units/kwh" element={<Layout><KwhInfo /></Layout>} />
          <Route path="/electrical/units/ohm" element={<Layout><OhmLaw /></Layout>} />
          <Route path="/electrical/units/volt" element={<Layout><VoltInfo /></Layout>} />
          <Route path="/electrical/units/watt" element={<Layout><WattInfo /></Layout>} />

          <Route path="/electrical/components/resistor" element={<Layout><ResistorChart /></Layout>} />
          <Route path="/electrical/components/capacitor" element={<Layout><CapacitorInfo /></Layout>} />
          <Route path="/electrical/components/inductor" element={<Layout><InductorInfo /></Layout>} />
          <Route path="/electrical/components/dip-switch" element={<Layout><DipSwitchInfo /></Layout>} />
          <Route path="/electrical/components/solder-bridge" element={<Layout><SolderBridgeInfo /></Layout>} />

          <Route path="/electrical/content/voltage" element={<Layout><ElectricalVoltage /></Layout>} />
          <Route path="/electrical/content/resistance" element={<Layout><ElectricalResistance /></Layout>} />
          <Route path="/electrical/content/current" element={<Layout><ElectricCurrent /></Layout>} />
          <Route path="/electrical/content/power" element={<Layout><ElectricPower /></Layout>} />
          <Route path="/electrical/content/charge" element={<Layout><ElectricCharge /></Layout>} />
          <Route path="/electrical/content/efficiency" element={<Layout><PowerEfficiency /></Layout>} />
          <Route path="/electrical/content/factor" element={<Layout><PowerFactor /></Layout>} />

          <Route path="/electrical/symbols/switch" element={<Layout><SwitchSymbols /></Layout>} />
          <Route path="/electrical/symbols/ground" element={<Layout><GroundSymbols /></Layout>} />
          <Route path="/electrical/symbols/resistor" element={<Layout><ResistorSymbols /></Layout>} />
          <Route path="/electrical/symbols/capacitor" element={<Layout><CapacitorSymbols /></Layout>} />
          <Route path="/electrical/symbols/diode" element={<Layout><DiodeSymbols /></Layout>} />
          <Route path="/electrical/symbols/transistor" element={<Layout><TransistorSymbols /></Layout>} />

          <Route path="/electrical/circuit-laws/ohm" element={<Layout><OhmsLaw /></Layout>} />
          <Route path="/electrical/circuit-laws/voltage-divider" element={<Layout><VoltageDivider /></Layout>} />
          <Route path="/electrical/circuit-laws/kirchhoff" element={<Layout><KirchhoffLaws /></Layout>} />
          <Route path="/electrical/circuit-laws/coulomb" element={<Layout><CoulombsLaw /></Layout>} />
          
          <Route path="/howto/save-electricity" element={<Layout><SaveElectricityTips /></Layout>} />
          <Route path="/howto/save-energy" element={<Layout><HowToSaveEnergy /></Layout>} />

          {/* Electrical Calculations */}

          <Route path="/electrical-calculations" element={<Layout><ElectricalCalculations /></Layout>} />
          <Route path="/calculations/:slug" element={<Layout><ConversionPage /></Layout>} />

          <Route path="/convertor-electrical/:slug" element={<Layout><ConversionPage /></Layout>} />

          {/* Electrical Calculators */}
          <Route path="/electrical-calculators" element={<Layout><ElectricalCalculators /></Layout>} />

          <Route path="/electrical-calculators/amps-to-kw-calculator" element={<Layout><AmpsToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-kva-calculator" element={<Layout><AmpsToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-va-calculator" element={<Layout><AmpsToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-volts-calculator" element={<Layout><AmpsToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-watts-calculator" element={<Layout><AmpsToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/electricity-bill-calculator" element={<Layout><ElectricityBillCalculator /></Layout>} />
          <Route path="/electrical-calculators/energy-consumption-calculator" element={<Layout><EnergyConsumptionCalculator /></Layout>} />
          <Route path="/electrical-calculators/energy-cost-calculator" element={<Layout><EnergyCostCalculator /></Layout>} />
          <Route path="/electrical-calculators/ev-to-volts-calculator" element={<Layout><EVToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/joules-to-volts-calculator" element={<Layout><JoulesToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/joules-to-watts-calculator" element={<Layout><JoulesToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-amps-calculator" element={<Layout><KVAToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-watts-calculator" element={<Layout><KVAToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-kw-calculator" element={<Layout><KVAToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-va-calculator" element={<Layout><KVAToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-amps-calculator" element={<Layout><KWToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-volts-calculator" element={<Layout><KWToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-kwh-calculator" element={<Layout><KWToKWhCalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-va-calculator" element={<Layout><KWToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-kva-calculator" element={<Layout><KWToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/kwh-to-kw-calculator" element={<Layout><KWhToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/kwh-to-watts-calculator" element={<Layout><KWhToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/mah-to-wh-calculator" element={<Layout><MAhToWhCalculator /></Layout>} />
          <Route path="/electrical-calculators/power-factor-calculator" element={<Layout><PowerFactorCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-amps-calculator" element={<Layout><VAToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-watts-calculator" element={<Layout><VAToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-kw-calculator" element={<Layout><VAToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-kva-calculator" element={<Layout><VAToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/voltage-drop-calculator" element={<Layout><VoltageDropCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-amps-calculator" element={<Layout><VoltsToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-watts-calculator" element={<Layout><VoltsToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-kw-calculator" element={<Layout><VoltsToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-joules-calculator" element={<Layout><VoltsToJoulesCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-ev-calculator" element={<Layout><VoltsToEVCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-volts-amps-ohms-calculator" element={<Layout><WattsVoltsAmpsOhmsCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-amps-calculator" element={<Layout><WattsToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-kwh-calculator" element={<Layout><WattsToKWhCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-volts-calculator" element={<Layout><WattsToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-va-calculator" element={<Layout><WattsToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-kva-calculator" element={<Layout><WattsToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-joules-calculator" element={<Layout><WattsToJoulesCalculator /></Layout>} />
          
          <Route path="/electrical-calculators/wh-to-mah-calculator" element={<Layout><WhTomAhCalculator /></Layout>} />
          <Route path="/electrical-calculators/wire-gauge-calculator" element={<Layout><WireGaugeCalculator /></Layout>} />

          <Route path="/lighting-calculators" element={<Layout><LightingCalculators /></Layout>} />
          <Route path="/lighting-calculators/candela-to-lumens-calculator" element={<Layout><CandelaToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/candela-to-lux-calculator" element={<Layout><CandelaToLuxCalculator /></Layout>} />
          <Route path="/lighting-calculators/footcandles-to-lux-calculator" element={<Layout><FootcandlesToLuxCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-candela-calculator" element={<Layout><LumensToCandelaCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-lux-calculator" element={<Layout><LumensToLuxCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-millicandela-calculator" element={<Layout><LumensToMillicandelaCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-watts-calculator" element={<Layout><LumensToWattsCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-candela-calculator" element={<Layout><LuxToCandelaCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-footcandles-calculator" element={<Layout><LuxToFootcandlesCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-lumens-calculator" element={<Layout><LuxToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-watts-calculator" element={<Layout><LuxToWattsCalculator /></Layout>} />
          <Route path="/lighting-calculators/millicandela-to-lumens-calculator" element={<Layout><MillicandelaToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/watts-to-lumens-calculator" element={<Layout><WattsToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/watts-to-lux-calculator" element={<Layout><WattsToLuxCalculator /></Layout>} />

        {/* All Calculators */}
          <Route path="/all-calculators" element={<Layout><AllCalculators /></Layout>} />
          <Route path="/all-conversions" element={<Layout><AllConversions /></Layout>} />


          <Route path="/finance-all" element={<Layout><FinancialCalculators /></Layout>} />
          <Route path="/convertor/number" element={<Layout><NumberConverter /></Layout>} />
          <Route path="/calculator/discount" element={<Layout><DiscountCalculator /></Layout>} />
          <Route path="/calculator/effective-interest-rate" element={<Layout><EffectiveInterestRateCalculator /></Layout>} />
          <Route path="/calculator/gst" element={<Layout><GSTCalculator /></Layout>} />
          <Route path="/calculator/simple-interest" element={<Layout><SimpleInterestCalculator /></Layout>} />
          <Route path="/calculator/vat" element={<Layout><VATCalculator /></Layout>} />
          <Route path="/calculators/Percentage-calculator" element={<Layout><PercentageCalculator /></Layout>}/>
          <Route path="/calculator/percentage-change" element={<Layout><PercentageCalculator /></Layout>}/>
          <Route path="/calculator/percentage-increase" element={<Layout><PercentageIncreaseCalculator /></Layout>}/>


          <Route path="/tools/adding-fractions-calculator" element={<Layout><AddingFractionsCalculator /></Layout>} />
          <Route path="/tools/addition-calculator" element={<Layout><AdditionCalculator /></Layout>} />
          <Route path="/tools/antilog-calculator" element={<Layout><AntilogCalculator /></Layout>} />
          <Route path="/tools/arccos-calculator" element={<Layout><ArccosCalculator /></Layout>} />
          <Route path="/tools/arcsin-calculator" element={<Layout><ArcsinCalculator /></Layout>} />
          <Route path="/tools/arctan-calculator" element={<Layout><ArctanCalculator /></Layout>} />
          <Route path="/tools/base-calculator" element={<Layout><BaseConverter /></Layout>} />
          <Route path="/tools/binary-calculator" element={<Layout><BinaryCalculator /></Layout>} />
          <Route path="/tools/complex-numbers-calculator" element={<Layout><ComplexNumberCalculator /></Layout>} />
          <Route path="/tools/convolution-calculator" element={<Layout><ConvolutionCalculator /></Layout>} />
          <Route path="/tools/cosine-calculator" element={<Layout><CosineCalculator /></Layout>} />
          <Route path="/tools/dividing-fractions-calculator" element={<Layout><DividingFractionsCalculator /></Layout>} />
          <Route path="/tools/division-calculator" element={<Layout><DivisionCalculator /></Layout>} />
          <Route path="/tools/exponential-growth-calculator" element={<Layout><ExponentialGrowthCalculator /></Layout>} />
          <Route path="/tools/exponents-calculator" element={<Layout><ExponentsCalculator /></Layout>} />
          <Route path="/tools/factorial-calculator" element={<Layout><FactorialCalculator /></Layout>} />
          <Route path="/tools/fractions-calculator" element={<Layout><FractionsCalculator /></Layout>} />
          <Route path="/tools/fraction-simplifier" element={<Layout><FractionSimplifier /></Layout>} />
          <Route path="/tools/gcf-calculator" element={<Layout><GCFCalculator /></Layout>} />
          <Route path="/tools/hex-calculator" element={<Layout><HexCalculator /></Layout>} />
          <Route path="/tools/lcm-calculator" element={<Layout><LCMCalculator /></Layout>} />
          <Route path="/tools/ln-calculator" element={<Layout><LnCalculator /></Layout>} />
          <Route path="/tools/log-calculator" element={<Layout><LogCalculator /></Layout>} />
          <Route path="/tools/multiplication-calculator" element={<Layout><MultiplicationCalculator /></Layout>} />
          <Route path="/tools/multiplying-fractions-calculator" element={<Layout><MultiplyFractionsCalculator /></Layout>} />
          <Route path="/tools/percent-error-calculator" element={<Layout><PercentErrorCalculator /></Layout>} />
          <Route path="/tools/percentage-increase-calculator" element={<Layout><PercentageIncreaseCalculator /></Layout>} />
          <Route path="/tools/pythagorean-theorem-calculator" element={<Layout><PythagoreanCalculator /></Layout>} />
          <Route path="/tools/quadratic-equation-solver" element={<Layout><QuadraticEquationSolver /></Layout>} />
          <Route path="/tools/ratio-calculator" element={<Layout><RatioCalculator /></Layout>} />
          <Route path="/tools/remainder-calculator" element={<Layout><RemainderCalculator /></Layout>} />
          <Route path="/tools/right-triangle-calculator" element={<Layout><RightTriangleCalculator /></Layout>} />
          <Route path="/tools/root-calculator" element={<Layout><RootCalculator /></Layout>} />
          <Route path="/tools/scientific-notation-calculator" element={<Layout><ScientificNotationCalculator /></Layout>} />
          <Route path="/tools/simple-math-calculator" element={<Layout><SimpleMathCalculator /></Layout>} />
          <Route path="/tools/sine-calculator" element={<Layout><SineCalculator /></Layout>} />
          <Route path="/tools/square-root-calculator" element={<Layout><SquareRootCalculator /></Layout>} />
          <Route path="/tools/standard-deviation-calculator" element={<Layout><StandardDeviationCalculator /></Layout>} />
          <Route path="/tools/subtracting-fractions-calculator" element={<Layout><SubtractingFractionsCalculator /></Layout>} />
          <Route path="/tools/subtraction-calculator" element={<Layout><SubtractionCalculator /></Layout>} />
          <Route path="/tools/tangent-calculator" element={<Layout><TangentCalculator /></Layout>} />
          <Route path="/tools/trigonometry-calculator" element={<Layout><TrigonometryCalculator /></Layout>} />
          <Route path="/tools/weighted-average-calculator" element={<Layout><WeightedAverageCalculator /></Layout>} />
          <Route path="/tools/variance-calculator" element={<Layout><VarianceCalculator /></Layout>} />

          <Route path="/tools/wire-gauge-calculator" element={<Layout><WireGaugeCalculator /></Layout>} />
          <Route path="/tools/awg-to-mm-calculator" element={<Layout><AWGToMmCalculator /></Layout>} />
          <Route path="/tools/swg-to-mm-calculator" element={<Layout><SWGToMmCalculator /></Layout>} />
          <Route path="/tools/voltage-drop-calculator" element={<Layout><VoltageDropCalculator /></Layout>} />
          <Route path="/tools/2-gauge-wire-calculator" element={<Layout><GaugeToMmCalculator /></Layout>} />

          <Route path="/tools/time-now" element={<Layout><TimeNow /></Layout>} />
          <Route path="/tools/date-calculator" element={<Layout><DateCalculator /></Layout>} />
          <Route path="/tools/time-calculator" element={<Layout><TimeCalculator /></Layout>} />
          <Route path="/tools/age-calculator" element={<Layout><AgeCalculator /></Layout>} />
          <Route path="/tools/birthday-calculator" element={<Layout><BirthdayCalculator /></Layout>} />
          <Route path="/tools/days-in-year" element={<Layout><DaysInYear /></Layout>} />
          <Route path="/tools/dst-change" element={<Layout><DSTChangeGuide /></Layout>} />
          <Route path="/tools/dst-back" element={<Layout><DSTEndGuide /></Layout>} />
          <Route path="/tools/dst-forward" element={<Layout><DSTStartGuide /></Layout>} />
          <Route path="/tools/hours-in-week" element={<Layout><HoursInWeek /></Layout>} />
          <Route path="/tools/hours-in-year" element={<Layout><HoursInYear /></Layout>} />
          <Route path="/tools/months-of-year" element={<Layout><MonthsOfYear /></Layout>} />
          <Route path="/tools/seconds-in-day" element={<Layout><SecondsInDay /></Layout>} />
          <Route path="/tools/seconds-in-hour" element={<Layout><SecondsInHour /></Layout>} />
          <Route path="/tools/seconds-in-year" element={<Layout><SecondsInYear /></Layout>} />
          <Route path="/tools/todays-date" element={<Layout><TodayDateNow /></Layout>} />
          <Route path="/tools/weeks-in-month" element={<Layout><WeeksInMonth /></Layout>} />
          <Route path="/tools/weeks-in-year" element={<Layout><WeeksInYear /></Layout>} />
          <Route path="/tools/current-time" element={<Layout><WorldClock /></Layout>} />


          <Route path="/eco/reduce-carbon-footprint" element={<Layout><HowToReduceCarbonFootprint /></Layout>} />
          <Route path="/eco/reduce-plastic-waste" element={<Layout><HowToReducePlasticWaste /></Layout>} />
          <Route path="/eco/save-fuel" element={<Layout><HowToSaveFuel /></Layout>} />
          <Route path="/eco/save-energy" element={<Layout><HowToSaveEnergy /></Layout>} />
          <Route path="/eco/green-hosting-comparison" element={<Layout><GreenHostingComparison /></Layout>} />
          <Route path="/eco/plant-trees" element={<Layout><PlantTrees /></Layout>} />
          <Route path="/eco/save-electricity" element={<Layout><SaveElectricityTips /></Layout>} />

          <Route path="/mathematics/all" element={<Layout><AllMathematics /></Layout>} />

          {/* Numbers */}
          <Route path="/mathematics/numbers" element={<Layout><NumberTools /></Layout>} />
          <Route path="/numbers/addition-table" element={<Layout><AdditionTable /></Layout>} />
          <Route path="/numbers/multiplication-table" element={<Layout><MultiplicationTable /></Layout>} />
          <Route path="/numbers/exponents-rules" element={<Layout><ExponentRules /></Layout>} />
          <Route path="/numbers/numeral-systems" element={<Layout><NumeralSystemsGuide /></Layout>} />
          <Route path="/numbers/percentage" element={<Layout><PercentageGuide /></Layout>} />
          <Route path="/numbers/per-mille" element={<Layout><PerMilleGuide /></Layout>} />
          <Route path="/numbers/parts-per-million" element={<Layout><PPMGuide /></Layout>} />
          <Route path="/numbers/zero" element={<Layout><ZeroNumberGuide /></Layout>} />
          <Route path="/numbers/prime-number" element={<Layout><PrimeNumberGuide /></Layout>} />
          <Route path="/numbers/e-constant" element={<Layout><EConstantGuide /></Layout>} />
          <Route path="/numbers/fibonacci" element={<Layout><FibonacciNumbersGuide /></Layout>} />

          {/* Algebra */}
          <Route path="/mathematics/algebra" element={<Layout><AlgebraTools /></Layout>} />
          <Route path="/algebra/factorial" element={<Layout><FactorialNumbersGuide /></Layout>} />
          <Route path="/algebra/logarithm" element={<Layout><LogarithmGuide /></Layout>} />
          <Route path="/algebra/logarithm-rules" element={<Layout><LogarithmRules /></Layout>} />
          <Route path="/algebra/natural-logarithm" element={<Layout><NaturalLogarithm /></Layout>} />
          <Route path="/algebra/logarithm-table" element={<Layout><LogarithmTable /></Layout>} />
          <Route path="/algebra/quadratic-equation" element={<Layout><QuadraticEquationExplanation /></Layout>} />

          {/* Trigonometry */}
          <Route path="/mathematics/trigonometry" element={<Layout><TrigonometryTools /></Layout>} />
          <Route path="/trigonometry/arccos" element={<Layout><Arccos /></Layout>} />
          <Route path="/trigonometry/arcsin" element={<Layout><Arcsin /></Layout>} />
          <Route path="/trigonometry/arctan" element={<Layout><Arctan /></Layout>} />

          {/* Probability & Statistics */}
          <Route path="/mathematics/probability" element={<Layout><ProbabilityStatisticsTools /></Layout>} />
          <Route path="/probability/basic" element={<Layout><Probability /></Layout>} />
          <Route path="/probability/expectation" element={<Layout><Expectation /></Layout>} />
          <Route path="/probability/variance" element={<Layout><Variance /></Layout>} />
          <Route path="/probability/standard-deviation" element={<Layout><StandardDeviation /></Layout>} />
          <Route path="/probability/distribution" element={<Layout><ProbabilityDistribution /></Layout>} />
          <Route path="/probability/normal-distribution" element={<Layout><NormalDistribution /></Layout>} />

          {/* Calculus & Analysis */}
          <Route path="/mathematics/calculus" element={<Layout><CalculusTools /></Layout>} />
          <Route path="/calculus/derivative" element={<Layout><Derivative /></Layout>} />
          <Route path="/calculus/laplace-transform" element={<Layout><LaplaceTransformExplanation /></Layout>} />
          <Route path="/calculus/convolution" element={<Layout><Convolution /></Layout>} />

          {/* Symbols */}
          <Route path="/mathematics/symbols" element={<Layout><MathSymbolsTools /></Layout>} />
          <Route path="/symbols/math" element={<Layout><MathSymbols /></Layout>} />
          <Route path="/symbols/algebra" element={<Layout><AlgebraSymbols /></Layout>} />
          <Route path="/symbols/geometry" element={<Layout><GeometrySymbols /></Layout>} />
          <Route path="/symbols/statistics" element={<Layout><StatisticalSymbols /></Layout>} />
          <Route path="/symbols/logic" element={<Layout><LogicSymbols /></Layout>} />
          <Route path="/symbols/set-theory" element={<Layout><SetTheorySymbols /></Layout>} />
          <Route path="/symbols/calculus-analysis" element={<Layout><CalculusAnalysisSymbols /></Layout>} />
          <Route path="/symbols/numbers" element={<Layout><NumberSymbols /></Layout>} />
          <Route path="/symbols/greek" element={<Layout><GreekAlphabetSymbols /></Layout>} />
          <Route path="/symbols/roman-numerals" element={<Layout><RomanNumerals /></Layout>} />


          <Route path="/web/all" element={<Layout><WebTools /></Layout>} />

          <Route path="/web/colors" element={<Layout><ColorTools /></Layout>} />
          <Route path="/tools/web-colors" element={<Layout><HtmlColorCodes /></Layout>} />
          <Route path="/tools/color-scheme-generator" element={<Layout><ColorSchemeGenerator /></Layout>} />
          <Route path="/tools/html-color-codes" element={<Layout><HtmlColorCode /></Layout>} />
          <Route path="/tools/rgb-color-picker" element={<Layout><RGBColorPicker /></Layout>} />
          <Route path="/tools/web-safe-colors" element={<Layout><WebSafeColors /></Layout>} />

          <Route path="/web/development" element={<Layout><DevelopmentTools /></Layout>} />
          <Route path="/tools/canonical-url-generator" element={<Layout><CanonicalURL /></Layout>} />
          <Route path="/tools/htaccess-redirection" element={<Layout><HTAccessRedirection /></Layout>} />
          <Route path="/tools/html-redirection" element={<Layout><HTMLRedirection /></Layout>} />
          <Route path="/tools/javascript-redirection" element={<Layout><JavaScriptRedirection /></Layout>} />
          <Route path="/tools/jquery-redirection" element={<Layout><JQueryRedirection /></Layout>} />
          <Route path="/tools/php-redirection" element={<Layout><PHPRedirection /></Layout>} />
          <Route path="/tools/screen-resolution-statistics" element={<Layout><ScreenResolutionStatistics /></Layout>} />
          <Route path="/tools/website-traffic-down-checker" element={<Layout><WebsiteTrafficDown /></Layout>} />

          <Route path="/web/html" element={<Layout><HtmlTools /></Layout>} />
          <Route path="/tools/html-character-codes" element={<Layout><HTMLCharacterCodes /></Layout>} />
          <Route path="/tools/html-comments-guide" element={<Layout><HTMLComments /></Layout>} />
          <Route path="/tools/html-tables-generator" element={<Layout><HTMLTables /></Layout>} />
          <Route path="/tools/html-color" element={<Layout><HTMLColorCodes /></Layout>} />

          <Route path="/web/tools" element={<Layout><WebTools /></Layout>} />


          <Route path="/code/all" element={<Layout><AllCode /></Layout>} />

          <Route path="/linux/all" element={<Layout><AllLinux /></Layout>} />
          <Route path="/linux/cat-command" element={<Layout><CatCommand /></Layout>} />
          <Route path="/linux/cd-command" element={<Layout><CdCommand /></Layout>} />
          <Route path="/linux/cp-command" element={<Layout><CpCommand /></Layout>} />
          <Route path="/linux/current-directory" element={<Layout><CurrentDirectory /></Layout>} />
          <Route path="/linux/gcc-command" element={<Layout><GccCommand /></Layout>} />
          <Route path="/linux/ls-command" element={<Layout><LsCommand /></Layout>} />
          <Route path="/linux/move-files" element={<Layout><MoveFiles /></Layout>} />
          <Route path="/linux/mv-command" element={<Layout><MvCommand /></Layout>} />
          <Route path="/linux/pwd-command" element={<Layout><PwdCommand /></Layout>} />
          <Route path="/linux/slow-virtualbox-ubuntu" element={<Layout><SlowVirtualBoxUbuntu /></Layout>} />
          <Route path="/linux/view-files" element={<Layout><ViewFiles /></Layout>} />
         
          <Route path="/text/all" element={<Layout><TextTools /></Layout>} />
          <Route path="/text/alt-codes" element={<Layout><AltCodes /></Layout>} />
          <Route path="/text/ascii-table" element={<Layout><AsciiTable /></Layout>} />
          <Route path="/text/unicode-page" element={<Layout><UnicodePage /></Layout>} />

          <Route path="/electrical-calculations/amps-to-watts" element={<Layout><AmpToWattsConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-amps" element={<Layout><WattsToAmpsConverter /></Layout>} />
          <Route path="/electrical-calculations/ah-to-mah" element={<Layout><AhToMAhConverter /></Layout>} />
          <Route path="/electrical-calculations/amps-to-kilowatts" element={<Layout><AmpsToKilowattsConverter /></Layout>} />
          <Route path="/electrical-calculations/amps-to-kva" element={<Layout><AmpsToKVAConverter /></Layout>} />
          <Route path="/electrical-calculations/amps-to-milliamps" element={<Layout><AmpsToMilliampsConverter /></Layout>} />
          <Route path="/electrical-calculations/amps-to-ohms" element={<Layout><AmpsToOhmsConverter /></Layout>} />
          <Route path="/electrical-calculations/amps-to-va" element={<Layout><AmpsToVAConverter /></Layout>} />
          <Route path="/electrical-calculations/amps-to-volts" element={<Layout><AmpsToVoltsConverter /></Layout>} />
          <Route path="/electrical-calculations/amp-to-watts" element={<Layout><AmpToWattsConverter /></Layout>} />
          <Route path="/electrical-calculations/db-converter" element={<Layout><DBConverter /></Layout>} />
          <Route path="/electrical-calculations/electron-volt-to-volt" element={<Layout><ElectronVoltToVoltConverter /></Layout>} />
          <Route path="/electrical-calculations/joules-to-kilowatts" element={<Layout><JoulesToKilowattsConverter /></Layout>} />
          <Route path="/electrical-calculations/joules-to-volts" element={<Layout><JoulesToVoltsConverter /></Layout>} />
          <Route path="/electrical-calculations/joules-to-watts" element={<Layout><JoulesToWattsConverter /></Layout>} />
          <Route path="/electrical-calculations/kw-to-amps" element={<Layout><KilowattsToAmpsConverter /></Layout>} />
          <Route path="/electrical-calculations/kilowatts-to-joules" element={<Layout><KilowattsToJoulesConverter /></Layout>} />
          <Route path="/electrical-calculations/kilowatts-to-kva" element={<Layout><KilowattsToKVAConverter /></Layout>} />
          <Route path="/electrical-calculations/kva-to-kw" element={<Layout><KVAToKWConverter /></Layout>} />
          <Route path="/electrical-calculations/kva-to-va" element={<Layout><KVAToVAConverter /></Layout>} />
          <Route path="/electrical-calculations/kva-to-watts" element={<Layout><KVAToWattsConverter /></Layout>} />
          <Route path="/electrical-calculations/kwh-to-kw" element={<Layout><KWhToKWConverter /></Layout>} />
          <Route path="/electrical-calculations/kwh-to-watt" element={<Layout><KWhToWattConverter /></Layout>} />
          <Route path="/electrical-calculations/kw-to-kj" element={<Layout><KWToKJConverter /></Layout>} />
          <Route path="/electrical-calculations/kw-to-kwh" element={<Layout><KWToKWhConverter /></Layout>} />
          <Route path="/electrical-calculations/kw-to-va" element={<Layout><KWToVAConverter /></Layout>} />
          <Route path="/electrical-calculations/kw-to-volts" element={<Layout><KWToVoltsConverter /></Layout>} />
          <Route path="/electrical-calculations/kw-to-wh" element={<Layout><KWToWhConverter /></Layout>} />
          <Route path="/electrical-calculations/lumen-to-lux" element={<Layout><LumenToLuxConverter /></Layout>} />
          <Route path="/electrical-calculations/lumen-to-watt" element={<Layout><LumenToWattConverter /></Layout>} />
          <Route path="/electrical-calculations/lux-to-lumen" element={<Layout><LuxToLumenConverter /></Layout>} />
          <Route path="/electrical-calculations/mah-to-ah" element={<Layout><MahToAhConverter /></Layout>} />
          <Route path="/electrical-calculations/mah-to-wh" element={<Layout><MahToWhConverter /></Layout>} />
          <Route path="/electrical-calculations/milliamps-to-amps" element={<Layout><MilliAmpsToAmpsConverter /></Layout>} />
          <Route path="/electrical-calculations/ohms-to-amps" element={<Layout><OhmsToAmpsConverter /></Layout>} />
          <Route path="/electrical-calculations/ohms-to-volts" element={<Layout><OhmsToVoltsConverter /></Layout>} />
          <Route path="/electrical-calculations/vat-to-amps" element={<Layout><VAToAmpsConverter /></Layout>} />
          <Route path="/electrical-calculations/vat-to-kva" element={<Layout><VAToKVAConverter /></Layout>} />
          <Route path="/electrical-calculations/vat-to-kw" element={<Layout><VAToKWConverter /></Layout>} />
          <Route path="/electrical-calculations/vat-to-watts" element={<Layout><VAToWattsConverter /></Layout>} />
          <Route path="/electrical-calculations/volts-to-amps" element={<Layout><VoltsToAmpsConverter /></Layout>} />
          <Route path="/electrical-calculations/volts-to-ev" element={<Layout><VoltsToEVConverter /></Layout>} />
          <Route path="/electrical-calculations/volts-to-joules" element={<Layout><VoltsToJoulesConverter /></Layout>} />
          <Route path="/electrical-calculations/volts-to-kw" element={<Layout><VoltsToKWConverter /></Layout>} />
          <Route path="/electrical-calculations/volts-to-ohms" element={<Layout><VoltsToOhmsConverter /></Layout>} />
          <Route path="/electrical-calculations/volts-to-watts" element={<Layout><VoltsToWattsConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-amps" element={<Layout><WattsToAmpsConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-kj" element={<Layout><WattsToKJConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-kva" element={<Layout><WattsToKVAConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-kwh" element={<Layout><WattsToKWhConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-lumens" element={<Layout><WattsToLumensConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-va" element={<Layout><WattsToVAConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-volts" element={<Layout><WattsToVoltsConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-wh" element={<Layout><WattsToWhConverter /></Layout>} />
          <Route path="/electrical-calculations/wh-to-kw" element={<Layout><WhToKwConverter /></Layout>} />
          <Route path="/electrical-calculations/wh-to-mah" element={<Layout><WhToMahConverter /></Layout>} />
          <Route path="/electrical-calculations/wh-to-watts" element={<Layout><WhToWattsConverter /></Layout>} />
          <Route path="/electrical-calculations/watts-to-joules" element={<Layout><WattsToJoulesConverter /></Layout>} />



          <Route path="/wire/all" element={<Layout><WireGaugeTools /></Layout>} />
          <Route path="/time/all" element={<Layout><TimeDateTools /></Layout>} />
          <Route path="/math/all" element={<Layout><MathTools /></Layout>} />
          <Route path="/grade/all" element={<Layout><AllGradeCalculators /></Layout>} />
          <Route path="/calculator/college-gpa" element={<Layout><GPACalculationPage /></Layout>} />
          <Route path="/calculator/final-grade" element={<Layout><FinalGradeCalculator /></Layout>} />
          <Route path="/calculator/gpa" element={<Layout><GPACalculator /></Layout>} />
          <Route path="/calculator/grade-basic" element={<Layout><GradeCalculator /></Layout>} />
          <Route path="/calculator/gpa-calc" element={<Layout><GPACalculationPage /></Layout>} />
          <Route path="/calculator/grade-calc" element={<Layout><GradeCalculationPage /></Layout>} />
          <Route path="/calculator/gpa-to-letter" element={<Layout><GPAToLetterGradeConversion /></Layout>} />
          <Route path="/calculator/highschool-gpa" element={<Layout><HighSchoolGPACalculator /></Layout>} />
          <Route path="/calculator/letter-to-gpa" element={<Layout><LetterGradeToGPACalculator /></Layout>} />
          <Route path="/calculator/test" element={<Layout><TestCalculator /></Layout>} />

          
          <Route path="/ecology/all" element={<Layout><EcologyTools /></Layout>} />

          



                    







          






          

          {/* Text Tools Routes */}
          <Route path="/word-counter" element={<Layout><WordCounter /></Layout>} />
          <Route path="/character-counter" element={<Layout><CharacterCounter /></Layout>} />
          <Route path="/line-counter" element={<Layout><LineCounter /></Layout>} />
          <Route path="/word-frequency" element={<Layout><WordFrequency /></Layout>} />
          <Route path="/pdf-reader" element={<Layout><PDFReader /></Layout>} />
          <Route path="/image-to-text" element={<Layout><ImageToText /></Layout>} />
          
          {/* PDF Tools Routes */}
          <Route path="/image-to-pdf" element={<Layout><ImageToPDF /></Layout>} />
          <Route path="/jpg-to-pdf" element={<Layout><JPGtoPDF /></Layout>} />
          <Route path="/png-to-pdf" element={<Layout><PNGtoPDF /></Layout>} />
          <Route path="/pdf-viewer" element={<Layout><PDFViewer /></Layout>} />
          
          {/* Online Tools Routes */}
          <Route path="/current-time" element={<Layout><CurrentTime /></Layout>} />
          <Route path="/todays-date" element={<Layout><CurrentTime /></Layout>} />
          <Route path="/stopwatch" element={<Layout><Stopwatch /></Layout>} />
          <Route path="/alarm-clock" element={<Layout><AlarmClock /></Layout>} />
          <Route path="/todo-list" element={<Layout><TodoList /></Layout>} />
          <Route path="/random-number" element={<Layout><RandomNumberGenerator /></Layout>} />
          <Route path="/bar-graph" element={<Layout><BarGraphMaker /></Layout>} />
          <Route path="/calendar" element={<Layout><Calendar /></Layout>} />
          <Route path="/call-recorder" element={<Layout><CallRecorder /></Layout>} />
          <Route path="/camera" element={<Layout><CameraOnline /></Layout>} />
          <Route path="/chart-maker" element={<Layout><ChartMaker /></Layout>} />
          <Route path="/click-counter" element={<Layout><ClickCounter /></Layout>} />
          <Route path="/cps-test" element={<Layout><CPSTest /></Layout>} />
          <Route path="/countdown" element={<Layout><CountdownTimer /></Layout>} />
          <Route path="/line-graph" element={<Layout><LineGraphMaker /></Layout>} />
          <Route path="/grocery-list" element={<Layout><GroceryList /></Layout>} />
          <Route path="/mic-test" element={<Layout><MicTest /></Layout>} />
          <Route path="/online-clock" element={<Layout><OnlineClock /></Layout>} />
          <Route path="/online-mirror" element={<Layout><OnlineMirror /></Layout>} />
          <Route path="/notepad" element={<Layout><OnlineNotepad /></Layout>} />
          <Route path="/notes" element={<Layout><OnlineNotes /></Layout>} />
          <Route path="/password-generator" element={<Layout><PasswordGenerator /></Layout>} />
          <Route path="/pie-chart" element={<Layout><PieChartMaker /></Layout>} />
          <Route path="/scatter-plot" element={<Layout><ScatterPlot /></Layout>} />
          <Route path="/scoreboard" element={<Layout><Scoreboard /></Layout>} />
          <Route path="/screen-recorder" element={<Layout><ScreenRecorder /></Layout>} />
          <Route path="/screenshot" element={<Layout><Screenshot /></Layout>} />
          <Route path="/speech-to-text" element={<Layout><SpeechToText /></Layout>} />
          <Route path="/text-editor" element={<Layout><TextEditor /></Layout>} />
          <Route path="/table-chart" element={<Layout><TableChartMaker /></Layout>} />
          <Route path="/text-to-speech" element={<Layout><TextToSpeech /></Layout>} />
          <Route path="/tone-generator" element={<Layout><ToneGenerator /></Layout>} />
          <Route path="/ruler-cm" element={<Layout><RulerCm /></Layout>} />
          <Route path="/ruler-inch" element={<Layout><RulerInch /></Layout>} />
          <Route path="/voice-recorder" element={<Layout><VoiceRecorder /></Layout>} />
          <Route path="/webcam-test" element={<Layout><WebcamTest /></Layout>} />

          {/* HTML Tool Routes */}
          <Route path="/tools/redirect-generator" element={<Layout><RedirectGenerator /></Layout>} />
          <Route path="/tools/base64-encode" element={<Layout><Base64Encode /></Layout>} />
          <Route path="/tools/base64-decode" element={<Layout><Base64Decode /></Layout>} />
          <Route path="/tools/base64-to-image" element={<Layout><Base64ToImage /></Layout>} />
          <Route path="/tools/image-to-base64" element={<Layout><ImageToBase64 /></Layout>} />
          <Route path="/tools/color-tester" element={<Layout><ColorTester /></Layout>} />
          <Route path="/tools/color-picker-from-image" element={<Layout><ColorPickerFromImage /></Layout>} />
          <Route path="/tools/html-editor" element={<Layout><HtmlEditor /></Layout>} />
          <Route path="/tools/html-link-generator" element={<Layout><HtmlLinkGenerator /></Layout>} />
          <Route path="/tools/html-table-generator" element={<Layout><HtmlTableGenerator /></Layout>} />
          <Route path="/tools/http-header-checker" element={<Layout><HttpHeaderChecker /></Layout>} />
          <Route path="/tools/http-status-checker" element={<Layout><HttpStatusChecker /></Layout>} />
          <Route path="/tools/svg-viewer" element={<Layout><SvgViewer /></Layout>} />
          <Route path="/tools/url-encode" element={<Layout><UrlEncode /></Layout>} />
          <Route path="/tools/url-decode" element={<Layout><UrlDecode /></Layout>} />
          <Route path="/tools/screen-resolution" element={<Layout><ScreenResolution /></Layout>} />
          <Route path="/tools/pixel-ruler" element={<Layout><PixelRuler /></Layout>} />
          <Route path="/tools/window-size" element={<Layout><WindowSize /></Layout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
