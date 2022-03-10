import React, { useState } from 'react';
import WeatherDisplay from "components/WeatherDisplay";
import WeatherInputFilter from "components/WeatherInputFilter";

export interface data {
  name: string;
  sys: {
    sunrise: number
  };
}

const WeatherDataContainer = ({}) => {

  const [city, setCity] = useState<string>('PARIS');

  return (
    <>
      <WeatherDisplay city={city} />
      <WeatherInputFilter setCity={setCity} />
    </>
  );
};

export default WeatherDataContainer;
