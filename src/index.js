import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SecondsCounter from './SecondsCounter';




window.onload = function() {   
  let seconds = 0;        
  const timer = () => {
    ReactDOM.render(
      <SecondsCounter seconds={seconds}/>,
    document.getElementById('root')
    );
    seconds++
  }
  setInterval(timer, 1000);
}


