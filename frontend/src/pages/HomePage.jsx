import { useEffect, useState } from 'react'
import { LiquidChrome } from './../components/react_bits/luiquid chrome'
import { axiosInstance } from '../api/axios.js'
export default function HomePage() {
    const [message, setMessage] = useState("Seba se la come");
    
    useEffect(() => {
        axiosInstance.get('/')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error("Error fetching data from backend:", error);
            });
    }, []);

    console.log(message);
    
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
            <h1 >{message.msg}</h1>
        </div>
    </>
    )
}