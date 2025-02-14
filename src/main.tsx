import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DemoApp } from '@/comp/App'
import '@/main.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DemoApp />
    </StrictMode>,
)
