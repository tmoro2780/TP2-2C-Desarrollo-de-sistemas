import { useState } from 'react'
import { LiquidChrome } from './../components/react_bits/luiquid chrome'

export default function HomePage() {
    const [count, setCount] = useState(0)
    return (
    <>
        <LiquidChrome
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        baseColor={[0.10, 0, 0.25]}
        speed={1}
        amplitude={0.2}
        frequencyX={5}
        frequencyY={10}
        interactive={true}
        />
        <div>
            <h1>Bienvenido a la página principal</h1>
        </div>
    </>
    )
}