import React from 'react';
import './App.css';
import { Rain, ChangeType, ToggleRain } from './makeRain';

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

var hills = summer;
var tree = treeSu;
var time = day;

class App extends React.Component {

  changeSkew(angle){
    let angleBack = -angle;
    angleBack = 0.2 * angleBack;
    let degrees = 'deg';

    let precipAngle = angle.toString().concat(degrees);

    angle = 0.2 * angle;

    let angleStr = angle.toString().concat(degrees);
    let angleBackStr = angleBack.toString().concat(degrees);
    
    document.documentElement.style.setProperty('--skew-amount', angleStr);
    document.documentElement.style.setProperty('--skew-back-amount', angleBackStr);

    document.documentElement.style.setProperty('--rotate-rain-amount', precipAngle);

  }

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
    
    if(season === "winter"){
      document.documentElement.style.setProperty('--fall-speed', "1s");
    }
    else{
      document.documentElement.style.setProperty('--fall-speed', "0.5s");
    }
    ChangeType(season);

    this.forceUpdate();
  }

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

  render() {
    return (
      <div id="screen">
        <div id="scene">
          <div>
            <img id="sky" src={time} alt=""></img>
            <img id="hill" src={hills} alt="summer"></img>
          </div>

          <div>
            <img id="tree" class="plant" src={tree} alt=""></img>
          </div>
          <div class="precipitation">
            <Rain />
          </div>
        </div>
        <div>
          <ul id="inputs">
            <li>
              <h3>Wind</h3>
              <input type="range" id="wind" min="1" max="15" defaultValue="1"
                onInput={()=>this.changeSkew(document.getElementById('wind').value)}></input>
            </li>
            <li>
              <h3>Precipitation</h3>
              <input type="checkbox" id="togglePrecip"
                onInput={()=>ToggleRain(document.getElementById('togglePrecip').checked)}></input>
            </li>
            <li>
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

export default App;