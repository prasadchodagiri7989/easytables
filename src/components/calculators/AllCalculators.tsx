import ElectricalCalculators from "../conversion-calculators/ElectricalCalculators";
import FinancialCalculators from "./financial/FinancialCalculators";
import AllGradeCalculators from "./grade/AllGradeCalculators";
import LightingCalculators from "../lighting/calculators/LightingCalculators";
import TimeDateTools from "./time/TimeDateTools";
import WireGaugeTools from "./wire/WireGaugeTools";
import MathTools from "./math/MathTools";

export default function AllCalculators() {

    return (
        <>
            <ElectricalCalculators />
            <FinancialCalculators />
            <AllGradeCalculators />
            <LightingCalculators />
            <MathTools />
            <TimeDateTools />
            <WireGaugeTools />
        </>
    )
}