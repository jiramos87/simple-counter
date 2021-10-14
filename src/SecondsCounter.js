import React, { useState } from 'react';
import clockImage from './clock-icon-white-0.jpeg'
import CountDiv from './components/CountDiv';
import StopButton from './components/StopButton';
import ResumeButton from './components/ResumeButton';
import ResetButton from './components/ResetButton';
import AlertTimeInput from './components/AlertTimeInput';

const SecondsCounter = (props) => {



  const [ countdown, setCountdown ] = useState(false)
  const [alertTime, setAlertTime] = useState(1000)

  let seconds = props.seconds
  let minutes;
  let bigSeconds;
  let bigMinutes;
  let bigHours;
  let countTop = 7200 + 3655

  const pad = value => { return value > 9 ? value : "0" + value; }
  const countdownPad = value => {return value > 60 ? "0" + value : value;}

  if(seconds === parseInt(alertTime))
  {
    alert(`Time ${alertTime} has been reached`);
  }
  if (countdown) { 
    minutes = Math.floor((countTop - seconds) / 60 % 60)
    if(minutes = 0 ) {
      minutes = 59;
    }
    if(minutes / 60 > 59) {
      minutes = 59;
    }
    bigSeconds = pad((countTop - seconds) % 60).toString()
    bigMinutes = countdownPad(Math.floor(parseInt(60 - minutes, 10)- 1)).toString()
    bigHours = pad(parseInt((countTop - seconds) / 60 / 60, 10)).toString()
  } else {  //normal count up
    minutes = Math.floor(seconds / 60 % 60)
    bigSeconds = pad(seconds % 60).toString()
    bigMinutes = pad(Math.floor(parseInt(minutes, 10))).toString()
    bigHours = pad(parseInt(seconds / 60 / 60, 10)).toString()
  }

  

  const handleCountdown = () => {
    setCountdown(!countdown)
  }

  const handleAlert = (e) => {
    console.log('alert time: ', alertTime)
    setAlertTime(e.target.value)
  }

 

  return (
    <div className="home">
      
      <div className="number-div">
        <img src={clockImage} alt="a clock" />
      </div>
     
      <CountDiv hours={bigHours} minutes={bigMinutes} seconds={bigSeconds} />

      <div className="countdown-check-div">
        Countdown from 2 hours<input type="checkbox" id="countdownCheck" defaultChecked={countdown} onChange={() => handleCountdown()} />
      </div>
      
       {/* stop, restart and reset buttons */}
       <div className="inputs">
        <div className="buttons-div">
          <StopButton stop={props.stop} />
          <ResumeButton resume={props.resume} />
          <ResetButton reset={props.reset} /> 
        </div>
        <AlertTimeInput onChange={handleAlert} value={alertTime}/>
       </div>

    </div>
  );
}

export default SecondsCounter;
