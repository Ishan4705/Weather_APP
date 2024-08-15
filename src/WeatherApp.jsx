import SearchBox from './searchbox';
import InfoBox from './infobox';
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
        <div style={{textAlign:"center"}}>
            <h1>Weather</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
