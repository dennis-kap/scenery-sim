/* Importing React, CSS sheet and makeRain functions */
import React from 'react';
import './App.css';
import { Rain, ChangeType, ToggleRain } from './makeRain';

/* Importing images to allow changing urls */
import summer from './Images/summer.png';
import spring from './Images/spring.png';
import fall from './Images/fall.png';
import winter from './Images/winter.png';

import treeSu from './Images/treeSu.png';
import treeSp from './Images/treeSp.png';
import treeFa from './Images/treeFa.png';
import treeWi from './Images/treeWi.png';

import day from './Images/day.png';
import night from './Images/night.png';

/* Setting default images */
var hills = summer;
var tree = treeSu;
var time = day;

/* App */
class App extends React.Component {

  /* Function gets the angle from the range slider input */
  /* With the angle, sets the swaying angle of plants and the rain angle using document style setProperty */
  changeSkew(angle){
    let angleBack = -angle;
    angleBack = 0.2 * angleBack;
    let degrees = 'deg';

    /* Precipitation angle is set before the angle for the plants are set to a decreased angle */
    let precipAngle = angle + degrees;

    angle = 0.2 * angle;
    let angleStr = angle + degrees;
    let angleBackStr = angleBack + degrees
    
    document.documentElement.style.setProperty('--skew-amount', angleStr);
    document.documentElement.style.setProperty('--skew-back-amount', angleBackStr);
    document.documentElement.style.setProperty('--rotate-rain-amount', precipAngle);

  }

  /* Function that recieves the season radio input from the user and changes the images accordingly */
  changeSeason(season) {
    if(season === "fall"){
      hills = fall;
      tree = treeFa;
    }
    else if(season === "spring"){
      hills = spring;
      tree = treeSp;
    }
    else if(season === "winter"){
      hills = winter;
      tree = treeWi;
    }
    else {
      hills = summer;
      tree = treeSu;
    }
    
    /* Fall speed is also changes to make snow fall slower than rain */
    if(season === "winter"){
      document.documentElement.style.setProperty('--fall-speed', "1s");
    }
    else{
      document.documentElement.style.setProperty('--fall-speed', "0.5s");
    }

    /* Precipitation type is changed */
    ChangeType(season);

    /* Force update allows the images to be changed as they are rendered again */
    this.forceUpdate();
  }

  /* Function that will change the brightness and background based on radio input from the user */
  changeTime(t) {
    if(t === "day"){
      time = day;
      document.documentElement.style.setProperty('--brightness', "100%");
    }
    else if(t === "night"){
      time = night;
      document.documentElement.style.setProperty('--brightness', "30%");
    }
    this.forceUpdate();
  }

  /* The HTML layout of the program */
  render() {
    return (

      /* Container for the entire site is screen and container for the scene is scene */
      <div id="screen">
        <div id="scene">
          <div>

            {/* Sky and hill background/foreground are created */}
            <img id="sky" src={time} alt=""></img>
            <img id="hill" src={hills} alt="summer"></img>
          </div>

          <div>
            {/* Tree is added */}
            <img id="tree" class="plant" src={tree} alt=""></img>
          </div>

          {/* Container and precipitation elements are created */}
          <div class="precipitation">
            <Rain />
          </div>
        </div>
        <div>

          {/* Container for user inputs */}
          <ul id="inputs">
            <li>

              {/* Inputs for wind (range slider) */}
              {/* On input, changeSkew function is called */}
              <h3>Wind</h3>
              <input type="range" id="wind" min="1" max="15" defaultValue="1"
                onInput={()=>this.changeSkew(document.getElementById('wind').value)}></input>
            </li>
            <li>

              {/* Input for precipitation (checkbox) */}
              {/* On user input, ToggleRain function is called */}
              <h3>Precipitation</h3>
              <input type="checkbox" id="togglePrecip"
                onInput={()=>ToggleRain(document.getElementById('togglePrecip').checked)}></input>
            </li>
            <li>

              {/* Inputs for season */}
              {/* On input, changeSeason function is called */}
              <h3>Season</h3>
              <form>
                <input type="radio" id="spring" name="season"
                  onInput={()=>this.changeSeason("spring")}></input>
                  <label for="winter">Spring<br/></label>
                <input type="radio" id="summer" name="season" defaultChecked
                  onInput={()=>this.changeSeason("summer")}></input>
                  <label for="winter">Summer<br/></label>
                <input type="radio" id="fall" name="season"
                  onInput={()=>this.changeSeason("fall")}></input>
                  <label for="winter">Fall<br/></label>
                <input type="radio" id="winter" name="season"
                  onInput={()=>this.changeSeason("winter")}></input>
                  <label for="winter">Winter<br/></label>
              </form>
            </li>
            <li>

              {/* Inputs for time of day (radio buttons with day/night option) */}
              {/* On input, changeTime function is called */}
              <h3>Time of Day</h3>
              <form>
                <input type="radio" id="day" name="time" defaultChecked
                  onInput={()=>this.changeTime("day")}></input>
                  <label for="winter">Day<br/></label>
                <input type="radio" id="night" name="time"
                  onInput={()=>this.changeTime("night")}></input>
                  <label for="winter">Night<br/></label>
              </form>
            </li>
          </ul>
        </div>
      </div>
      
    );
  }
}

/* Return result is exported */ 
export default App;