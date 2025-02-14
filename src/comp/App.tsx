import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function DemoApp() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`App is `, DemoApp)
    }, []);
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

