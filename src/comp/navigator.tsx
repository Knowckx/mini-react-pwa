import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { HomeIcon, SettingsIcon } from "lucide-react"; // Example icons
import { BottomNavigator } from "infa";


const TableApp1: React.FC = () =>{
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`count is `, count)
    }, [count]);
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div className="card">
                <Button variant="outline" onClick={() => setCount((count) => count + 1)}><Mail /> count is {count}</Button>
            </div>
        </>
    )
}

const TableApp2: React.FC = () => <div>Settings TableApp2</div>;
const TableApp3: React.FC = () => <div>Settings TableApp3</div>;

const tabs = [
    { label: "Home", icon: HomeIcon, component: TableApp1 },
    { label: "Lable", component: TableApp2 },
    { label: "Settings", icon: SettingsIcon, component: TableApp3 },
  ];


export function NavigatorApp() {
    return (
        <>
          <BottomNavigator tabs={tabs} />
        </>
    )
}