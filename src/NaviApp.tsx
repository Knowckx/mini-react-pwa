
import { BadgeDollarSign } from "lucide-react"
import { Calculator, SettingsIcon } from "lucide-react";
import { BottomNavigator } from "infa";
import { TableHome, TableSetting } from "./components/apps";

const tabs = [
    { label: "Calculator", icon: Calculator, component: TableHome },
    { label: "ShopCalc", icon: BadgeDollarSign, component: TableSetting },
    { label: "Settings", icon: SettingsIcon, component: TableSetting },
];


export function NavigatorApp() {
    return (
        <BottomNavigator tabs={tabs} />
    )
}