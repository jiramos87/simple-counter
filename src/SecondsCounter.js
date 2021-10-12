import React, { useState } from 'react';
import Card from './components/Card';
import clockImage from './clock-icon-white-0.jpeg'



const SecondsCounter = (props) => {

  const [ countdown, setCountdown ] = useState(false)

  let seconds = props.seconds
  let minutes;
  let bigSeconds;
  let bigMinutes;
  let bigHours;
  let countTop = 7200 + 3655
  const pad = value => { return value > 9 ? value : "0" + value; }
  const countdownPad = value => {return value > 60 ? "0" + value : value;}

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
    console.log(typeof bigMinutes)
    bigHours = pad(parseInt((countTop - seconds) / 60 / 60, 10)).toString()
    console.log('s:', seconds, 'm:', minutes, 'bs:', bigSeconds, 'bm:', bigMinutes, 'bh', bigHours)
  } else {  //normal count up
    minutes = Math.floor(seconds / 60 % 60)
    bigSeconds = pad(seconds % 60).toString()
    bigMinutes = pad(Math.floor(parseInt(minutes, 10))).toString()
    console.log(typeof bigMinutes)
    bigHours = pad(parseInt(seconds / 60 / 60, 10)).toString()
    console.log('s:', seconds, 'm:', minutes, 'bs:', bigSeconds, 'bm:', bigMinutes, 'bh', bigHours)
  }

  

  const handleClick = () => {
    setCountdown(!countdown)
  }

  return (
    <div className="home">
      
      <div className="number-div">
        <img src={clockImage} alt="a clock" />
      </div>
      <Card number={bigHours[0]} />
      <Card number={bigHours[1]} />
      <Card number={bigMinutes[0]} />
      <Card number={bigMinutes[1]} />
      <Card number={bigSeconds[0]} />
      <Card number={bigSeconds[1]} />
      <div className="countdown-check-div">
        Countdown from 2 hours<input type="checkbox" id="countdownCheck" defaultChecked={countdown} onChange={() => handleClick()} />
      </div>


    </div>
  );
}

export default SecondsCounter;
