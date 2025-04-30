import ColorTools from "./color/ColorTools";
import HtmlTools from "./html/HTMLtools";
import DevelopmentTools from "./development/DevelopementTools";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export default function WebTools(){
    return(
        <>
            <ColorTools />
            <HtmlTools />
            <DevelopmentTools />
        </>
    )
}