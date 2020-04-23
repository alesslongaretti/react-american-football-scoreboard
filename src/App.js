//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, sethome] = useState(0);

  const touchHome = event => {
    sethome(home + 7);
  };

  const fieldHome = event => {
    sethome(home +3);
   
  };

  const [away, setAway] = useState(0);

  const touchAway = event => {
    setAway(away + 7);
  }

  const fieldAway = event => {
    setAway(away + 3);
  }

  // Timer


  const[timer, setTimer] = useState(60);
  const [isActive, setIsActive] = useState(false);

  function toggle () {
    setIsActive(!isActive);
  }

  function reset () {
    setTimer(60);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1 );
      }, 1000);
    } if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);





  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={touchHome}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick= {fieldHome}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {touchAway}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {fieldAway}>Away Field Goal</button>
        </div>
        <div className="homeButtons">
          <button className={`homeButtons_touchdown${isActive ? 'active' : 'inactive'}`} onClick={toggle}>{isActive ? 'pause' : 'Start'}</button>
          <button className="homeButtons_fieldGoal" onClick= {reset}>Reset</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
