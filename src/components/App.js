import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [className, setClassName] = useState("redColor");

const handleClick = () => {
  if (className === "redColour") {
    setClassName("blueColor");
  } else {
    setClassName("redColor");
  }
};




  return (
    <div id="main">
      <p className={className} >Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;
