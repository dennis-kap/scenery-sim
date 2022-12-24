import React from 'react';

import snow1 from './Images/snow1.png';
import snow2 from './Images/snow2.png';
import snow3 from './Images/snow3.png';

import rain1 from './Images/rain1.png';
import rain2 from './Images/rain2.png';
import rain3 from './Images/rain3.png';

const snow = [snow1, snow2, snow3];
const rain = [rain1, rain2, rain3, rain3];

var type = rain;

var particles = [];

  function Rain(toggle) {
    particles = [];
    var i = 0;
    while(i < 300) {
      var randomInc = (Math.floor(Math.random() * 3) + 1);
      i += randomInc;

      var randomX = (Math.random() * 100) + "%";
      var randomY = (Math.random() * 100) * 1000 + "px";
      var randomT = (Math.random() * 1000) + "ms";
      const randomIndex = Math.floor(Math.random() * 3); 
      const randomSize = (randomIndex * 20) + "px";

      particles.push(<img id="precip" 
      style={{left: randomX, bottom: randomY, animationDelay: randomT}}
      height={randomSize} src={type[randomIndex]} alt=""/>);
    }

    if(toggle){
      document.documentElement.style.setProperty('--rain-opacity', "block");
    }
    else{
      document.documentElement.style.setProperty('--rain-opacity', "none");
    }

    console.log(type);

    return particles;
  }

  function changeType(season){
    if(season === "winter"){
      type = snow;
    }
    else{
      type = rain;
    }
  }

export {Rain, changeType};