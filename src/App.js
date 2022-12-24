import React from 'react';
import './App.css';
import { Rain, changeType } from './makeRain';

import summer from './Images/summer.png';
import spring from './Images/spring.png';
import fall from './Images/fall.png';
import winter from './Images/winter.png';

import treeSu from './Images/treeSu.png';
import treeSp from './Images/treeSp.png';
import treeFa from './Images/treeFa.png';
import treeWi from './Images/treeWi.png';

var hills = summer;
var tree = treeSu;

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
    changeType(season);

    this.forceUpdate();
  }

  render() {
    return (
      <div id="screen">
        <div id="scene">
          <div>
            <img id="sky" src={require("./Images/day.png")} alt=""></img>
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
                onInput={()=>Rain(document.getElementById('togglePrecip').checked)}></input>
            </li>
            <li>
              <h3>Season</h3>
              <form>
                <input type="radio" id="spring" name="season"
                  onInput={()=>this.changeSeason("spring")}></input>
                  <label for="winter">Spring<br/></label>
                <input type="radio" id="summer" name="season"
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
          </ul>
        </div>
      </div>
      
    );
  }
}

export default App;