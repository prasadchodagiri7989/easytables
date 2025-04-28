import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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
            <Breadcrumb className="mb-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>All Calculators</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

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
