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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


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