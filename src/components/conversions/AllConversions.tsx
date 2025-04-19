import ElectricalCalculators from "../conversion-calculators/ElectricalCalculators";
import ElectricalCalculations from "../electrical/calculations/ElectricalCalculations";
import ColorConversions from "./ColorConversions";
import ElectricChargeConversions from "./ElectricChargeConversions";
import EnergyConversions from "./EnergyConversions";
import FrequencyConversions from "./FrequencyConversions";
import ImageConversions from "./ImageConversions";
import LengthConversions from "./LengthConversions";
import NumberConversions from "./NumberConversions";
import PowerConversions from "./PowerConversions";
import TemperatureConversions from "./TemperatureConversions";
import VoltageConversions from "./VoltageConversions";
import WeightConversions from "./WeightConversions";

export default function AllConversions() {

    return (
        <>
            <LengthConversions />
            <WeightConversions />
            <PowerConversions />
            <VoltageConversions />
            <EnergyConversions />
            <ElectricChargeConversions />
            <NumberConversions />
            <FrequencyConversions />
            <TemperatureConversions />
            <ImageConversions />
            <ColorConversions />
            <ElectricalCalculations />
        </>
    )
}