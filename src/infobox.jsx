import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css';


export default function infobox({info}){ // info prop passed here
    const hotURL="https://media.istockphoto.com/id/1200224188/photo/white-clouds-and-sun-in-blue-sky.webp?b=1&s=612x612&w=0&k=20&c=Xh4q7zzBu3GK8kgoUNYL9IB8_Ir7s5vHwNYIftqSnkQ=";
    const rainURL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    const coldURL="https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyfGVufDB8fDB8fHww";

    // let info={
    //     city: "Aligarh",
    //     country: "IN",
    //     feelsLike: 37.05,
    //     humidity: 72,
    //     temp: 30.58,
    //     tempMax: 30.58,
    //     tempMin: 30.58,
    //     visibility: 10000,
    //     weather: "overcast clouds",
    //     wind: 2.89,
    // }
    return(
        <div className="InfoBox">
            <h1>{info.city}</h1>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image={info.humidity>75 ? rainURL:info.temp>20 ? hotURL: coldURL}
                alt="Dusty"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.weather.toUpperCase()}
                        <hr />
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Country: <b>{info.country}</b></p>
                        <p>Current Temperature: <b>{info.temp}&deg;C</b></p>
                        <p>Max Temperature: <b>{info.tempMax}&deg;C</b></p>
                        <p>Min Temperature: <b>{info.tempMin}&deg;C</b></p>
                        <p>Visibility: <b>{info.visibility} m</b></p>
                        <p>Wind Speed: <b>{info.wind} Km/h</b></p>
                        <p>Humidity: <b>{info.humidity}</b></p>
                        <p>Temperature feels like: <b>{info.feelsLike}&deg;C.</b></p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}
