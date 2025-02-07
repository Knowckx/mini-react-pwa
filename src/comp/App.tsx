import { useEffect, useState } from "react";


export function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`App is `, App)
    }, []);
    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}