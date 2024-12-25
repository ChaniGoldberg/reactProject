import React, { useState,useEffect } from 'react';
export default function GetWeather()
{
    const [weather,setWeather]=useState([]);
    useEffect(()=>{
        const  fetchWeather=async()=>
        {
            try{
                const response= await fetch("http://localhost:5189/WeatherForecast");
                const data=await response.json();
                console.log(data);
                setWeather(data);
               }
            catch(error)
              {
                console.error('Error fetching weather',error);
              }
        };
        fetchWeather();
    },[]);
    return(
    <>
    {weather.map(w=>(
        <>
        <p>{w.date}</p>
        <p>{w.temperatureC}</p>
        <p>{w.temperatureF}</p>
        <p>{w.summary}</p>
        </>
    ))}
    </>)
}