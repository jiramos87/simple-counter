import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SecondsCounter from './SecondsCounter';


let seconds = 0
let main

const handleStop = () => {
  clearInterval(main)
}

const handleResume = () => {
  main = setInterval(() => { ReactDOM.render(
    <SecondsCounter seconds={seconds} stop={handleStop} resume={handleResume} reset={handleReset}/>,
  document.getElementById('root')
  )
  seconds++
  }, 1000)
}

const handleReset = () => {
  seconds = 0
}

main = setInterval(() => { ReactDOM.render(
  <SecondsCounter seconds={seconds} stop={handleStop} resume={handleResume} reset={handleReset}/>,
document.getElementById('root')
)
seconds++
}, 1000)



