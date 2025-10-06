import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LiquidChrome } from './components/react_bits/luiquid chrome.jsx'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  // Este componente solo renderiza el fondo animado con LiquidChrome
  return (
    <>
      <LiquidChrome
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        baseColor={[0.10, 0, 0.25]}
        speed={1}
        amplitude={0.1}
        frequencyX={10}
        frequencyY={4}
        interactive={true}
      />
    </>
  )
}
