/* import React from 'react'
import signs from "../data/horoscope.json"
import Image from 'next/image'

function TodaysHoroscope() {
    var currentDate = new Date().toJSON().slice(0, 10);
    console.log(currentDate);

    let currentSign;
    if (currentDate > '2023-08/23' && currentDate < '2023-09-23') {
        currentSign = signs.features[0];
    } else if (currentDate >= '2023-03-21' && currentDate < '2023-04-19') {
        currentSign = signs.features[1];
    } else if (currentDate >= '2023-07-23' && currentDate < '2023-08-22') {
        currentSign = signs.features[2];
    } else if (currentDate >= '2023-06-21' && currentDate < '2023-07-22') {
        currentSign = signs.features[3];
    } else if (currentDate >= '2023-05-21' && currentDate < '2023-06-20') {
        currentSign = signs.features[4];
    } else if (currentDate >= '2023-04-20' && currentDate < '2023-05-20') {
        currentDate = signs.features[5];
    } else if (currentDate >= '2023-09-23' && currentDate < '2023-10-22') {
        currentSign = signs.features[6];
    } else if (currentDate >= '2023-10-23' && currentDate < '2023-11-21') {
        currentSign = signs.features[7];
    } else if (currentDate >= '2023-01-20' && currentDate < '2023-02-18') {
        currentSign = signs.features[8];
    } else if (currentDate >= '2023-12-22' && currentDate < '2023-01-19') {
        currentSign = signs.features[9];
    } else if (currentDate >= '2023-11-22' && currentDate < '2023-12-21') {
        currentSign = signs.features[10];
    } else {
        currentSign = signs.features[11];
    }
    console.log(currentSign);
    return (
        <div>
            <h1>Todays Horoscope</h1>
            <p>{currentDate}</p>
            <p>{currentSign.properties.title}</p>
            <p>{currentSign.properties.content}</p>
            <Image src={currentSign.properties.logoImage} alt="horoscope" width="300" height="300" />


        </div>
    )
}



export default TodaysHoroscope */

import React, { useEffect, useState } from 'react'; // import the useEffect and useState hooks
import horoscopeData from '../data/horoscope.json';
import Image from 'next/image';

const TodaysHoroscope = () => {
  const [currentHoroscope, setCurrentHoroscope] = useState(null); // use state hook to manage the current horoscope data
  const currentDate = new Date().toLocaleDateString('en-US'); // get current date in localized string using toLocaleDateString method

  useEffect(() => { // use the useEffect hook to find and set the current horoscope
    const horoscopeList = horoscopeData.features;
    const horoscope = horoscopeList.find(h => {
      const horoscopeStartDate = new Date(h.properties.rangeFrom).toLocaleDateString('en-US'); // use toLocaleDateString method to convert date string to a localized date string
      const horoscopeEndDate = new Date(h.properties.rangeTo).toLocaleDateString('en-US'); // use toLocaleDateString method to convert date string to a localized date string
      return currentDate >= horoscopeStartDate && currentDate <= horoscopeEndDate;
    });
    setCurrentHoroscope(horoscope);
  }, [currentDate]);

  if (!currentHoroscope) return <div>Loading...</div>; // show loading text while the horoscope is being set

  const { title, content, logoImage } = currentHoroscope.properties; // destructure the current horoscope's properties

  return (
    <div>
      <h1>Todays Horoscope</h1>
      <p>{currentDate}</p>
      <p>{title}</p>
      <p>{content}</p>
      <Image src={logoImage} alt="horoscope" width={300} height={300} />
         </div>
  );
}

export default TodaysHoroscope;
