import React, {FC, useState} from 'react';

type Props = {
  setCity?: any
}

const WeatherInputFilter:FC<Props> = ({
  setCity
}) => {

  const [cityToFilter, setCityToFilter] = useState<string>('Paris');

  const handleClick = (cityToFilter: string) => {
    setCityToFilter(cityToFilter === 'Paris' ? 'New york' : 'Paris');
    setCity(cityToFilter === 'Paris' ? 'PARIS' : 'NEWYORK')
  };

  return (
    <>
      <input type={"button"} value={`Actual city : ${cityToFilter} click to change`} onClick={() => handleClick(cityToFilter)} />
    </>
  );
};

export default WeatherInputFilter;
