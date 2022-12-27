import React from 'react';

/* Snow and rain pngs are imported */ 
import snow1 from './Images/snow1.png';
import snow2 from './Images/snow2.png';
import snow3 from './Images/snow3.png';

import rain1 from './Images/rain1.png';
import rain2 from './Images/rain2.png';
import rain3 from './Images/rain3.png';

/* Arrays of snow and rain images are made to iterate through the images */
const snow = [snow1, snow2, snow3];
const rain = [rain1, rain2, rain3];

/* Default precipitation type is created */
var type = rain;

  /* Rain function that iterates up to 300 times to create precipitation elements */
  function Rain() {

    /* Returned array for precipitation creation is initialized */
    var particles = [];

    /* Iterator is initialized */
    var i = 0;
    while(i < 300) {

      /* Iterator randomly incremented */
      var randomInc = (Math.floor(Math.random() * 3) + 1);
      i += randomInc;

      /* Random X and Y values are created. randomT delays the animation of each element randomly */
      var randomX = (Math.random() * 100) + "%";
      var randomY = (Math.random() * 100) * 1000 + "px";
      var randomT = (Math.random() * 1000) + "ms";

      /* randomIndex chooses a random element from the arrays of size 3 */
      const randomIndex = Math.floor(Math.random() * 3); 
      /* randomSize chooses a random size for the element */
      const randomSize = (randomIndex * 20) + "px";

      /* The elements are added to the particles array */
      particles.push(<img id="precip" 
      style={{left: randomX, bottom: randomY, animationDelay: randomT}}
      height={randomSize} src={type[randomIndex]} alt=""/>);
    }

    /* Array returned to add as HTML elements */
    return particles;
  }

  /* Function that changes seasons by changing the precipitation type based on user input */
  function ChangeType(season){
    if(season === "winter"){
      type = snow;
    }
    else{
      type = rain;
    }
  }

  /* Function that toggles whether precipitation is visible or not. */
  /* Done by changing the display value between inline or none if the presses the checkbox on the page */
  function ToggleRain(toggle){
    if(document.documentElement.style.getPropertyValue('--rain-opacity') === "inline") {
      document.documentElement.style.setProperty('--rain-opacity', "none");
    }
    else{
      document.documentElement.style.setProperty('--rain-opacity', "inline");
    }
  }

/* Functions exported for use in main js file */
export {Rain, ChangeType, ToggleRain};