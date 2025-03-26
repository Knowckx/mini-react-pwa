
import { BadgeDollarSign } from "lucide-react"
import { Calculator, SettingsIcon } from "lucide-react";
import { BottomNavigator } from "infa";
import { TableSetting } from "./components/apps";
import { KlineStructApp } from "./components/KlineStructApp";
import { RecruitApp } from "./components/RecruitApp";

const tabs = [
    { label: "Calculator", icon: Calculator, component: KlineStructApp },
    { label: "ShopCalc", icon: BadgeDollarSign, component: RecruitApp },
    { label: "Settings", icon: SettingsIcon, component: TableSetting },
];


export function NavigatorApp() {
    return (
        <BottomNavigator tabs={tabs} />
    )
}