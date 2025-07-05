import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let[err,setErr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY=import.meta.env.VITE_API_KEY; // this is for .jsx (vite) file extension

    let getWeatherInfo=async()=>{
        try {
            let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes=await res.json();
            // console.log(jsonRes);
            let result={
                city: city,
                country:jsonRes.sys.country,
                temp: jsonRes.main.temp,
                tempMax: jsonRes.main.temp_max,
                tempMin: jsonRes.main.temp_min,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                visibility: jsonRes.visibility,
                wind: jsonRes.wind.speed,
                weather: jsonRes.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
    };
   
    let handlechange=(event)=>{
        setCity(event.target.value);
    }; 
    let handlesubmit=async (event)=>{
        try {
            event.preventDefault();
            // console.log(city);
            setCity("");
            setErr(false);
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setErr(true);
        }
       
    };
    return(
        <div className='searchbox'>
            <h3>🔍 Search for any city</h3>
            <form onSubmit={handlesubmit}>
            <TextField 
                id="outlined-basic" 
                label="City Name" 
                variant="outlined" 
                required 
                value={city} 
                onChange={handlechange}
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                        '& fieldset': {
                            borderColor: 'var(--border-color, rgba(0, 0, 0, 0.23))',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--accent-color, #1976d2)',
                        },
                    },
                }}
            />
            <Button 
                variant="contained" 
                type='submit'
                sx={{
                    background: 'linear-gradient(45deg, #1976d2, #90caf9)',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #1565c0, #64b5f6)',
                    },
                }}
            >
                Search Weather
            </Button>
            {err && <p className="error-message">❌ No such place exists! Please try again.</p>}
            </form>
        </div>
    );
} 