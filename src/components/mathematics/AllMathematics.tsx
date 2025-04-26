import NumberTools from "./numbers/NumberTools";
import AlgebraTools from "./algebra/AlgebraTools";
import CalculusTools from "./calculus/CalculusTools";
import ProbabilityStatisticsTools from "./probability/ProbabilityTools";
import MathSymbolsTools from "./symbols/SymbolTools";
import TrigonometryTools from "./trignometry/TrignometryTools";

export default function AllMathematics() {
    return(
        <>
            <NumberTools />
            <AlgebraTools />
            <TrigonometryTools />
            <ProbabilityStatisticsTools />
            <CalculusTools />
            <MathSymbolsTools />
        </>
    )

}