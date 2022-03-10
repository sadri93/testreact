import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {data} from "components/WeatherDataContainer";

type Props = {
  city?: any
}

const WeatherDisplay:FC<Props> = ({
  city
}) => {

  const [weatherData, setWeatherData] = useState<data>();

  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=f0300142b8077c308a187c9e1e25ec4b

  const getWeather = async (city: any) => {
    if(city === 'PARIS'){
     const result = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=f0300142b8077c308a187c9e1e25ec4b').then((response) => {
      setWeatherData(response.data)})
    }else {
      await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=40.712784&lon=-74.005941&appid=f0300142b8077c308a187c9e1e25ec4b').then((response) => {
      setWeatherData(response.data)})
    }
  }

  useEffect(() => {
    console.log(city)
    getWeather(city)
    //if (!weatherData) {
    //  const result = {"coord":{"lon":2.3522,"lat":48.8566},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":278.02,"feels_like":273.81,"temp_min":276.91,"temp_max":278.7,"pressure":1019,"humidity":51},"visibility":10000,"wind":{"speed":6.17,"deg":80},"clouds":{"all":0},"dt":1646676526,"sys":{"type":2,"id":2041230,"country":"FR","sunrise":1646634065,"sunset":1646674951},"timezone":3600,"id":6455259,"name":"Paris","cod":200};
    //  setWeatherData(result);
     
   
   // }
  }, [city]);

  return (
    <>
      <div>
        Sunrise : {weatherData && new Date(weatherData?.sys.sunrise * 1000).toLocaleTimeString('fr-FR')}
      </div>
      <div>
        Station : {weatherData?.name}
      </div>
    </>
  );
};

export default WeatherDisplay;
