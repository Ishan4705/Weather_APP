import SearchBox from './searchbox';
import InfoBox from './infobox';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        country: "IN",
        feelsLike: 37.05,
        humidity: 72,
        temp: 30.58,
        tempMax: 30.58,
        tempMin: 30.58,
        visibility: 5000,
        weather: "overcast clouds",
        wind: 2.89,
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{
            textAlign:"center",
            minHeight: "100vh",
            background: "var(--bg-color)",
            color: "var(--text-color)",
            padding: "20px",
            transition: "all 0.3s ease"
        }}>
            <ThemeToggle />
            <h1 style={{
                fontSize: "3.5rem",
                marginBottom: "30px",
                background: "linear-gradient(45deg, #1976d2, #90caf9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "700",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                letterSpacing: "2px"
            }}>
                Weather
            </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
