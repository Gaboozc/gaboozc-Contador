import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondsCounter.jsx";

function Home() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <SecondsCounter seconds={seconds} />
        </div>
    );
}

export default Home;
