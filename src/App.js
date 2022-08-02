import { useState } from 'react';
import './App.css';

function App() {
  const [showAllLayers, setShowAllLayers] = useState(false);
  const [showMeat, setShowMeat] = useState(true);
  const [showTomato, setShowTomato] = useState(true);
  const [showLettuce, setShowLettuce] = useState(true);

  function showHeader(){
    return <>
      <div className='Header'>    
        <h1>ACA Burger</h1>
      </div>
    </>
  }

  function changeState(buttonPressed){
    if(buttonPressed){
      setShowAllLayers(true); 
    }else{
      setShowAllLayers(false);
    }
  }

  function makeAnOrderButton(){
  return<div>
    <div className='showButton'>
      <div className='showButtonTop'></div>
      <button className='placeOrderBtn' onClick={()=>changeState(true)}>Place an order</button>
      <div className='showButtonBottom'></div>
    </div>
  </div>
  }
  
  function removeLayer(ingredient){
    switch(ingredient){
      case "tomato":
        setShowTomato(false);
        break;
      case "meat":
         setShowMeat(false);
         break;
      case "lettuce":
          setShowLettuce(false);
          break;
    }
  }
  
  function showLayers(){
    return(
      <div className='allLayers'>
        <h2>Select fillings to remove in the burger</h2>
        <div className='bunStyleTop' name="topBun"></div>
        <div className='ingredients'>
          {showTomato ? <button className='tomato' onClick={()=>removeLayer("tomato")} >TOMATO</button> : <></>}
          {showMeat? <button className='meat' onClick={()=>removeLayer("meat")}>MEAT</button> : <></>}
          {showLettuce? <button className='lettuce' onClick={()=>removeLayer("lettuce")}>LETTUCE</button> : <></>}
        </div>
        <div className='bunStyleBottom' name="bottomBun"></div>
        <div>
          <button className='refreshButton' onClick={()=>window.location.reload()}>Re-do Order</button>
        </div>
    </div>
    );
  }

  return(
    <div className='App'>
      {showHeader()}
      <div>     
        {showAllLayers? <></>:makeAnOrderButton()}
      </div>
      <div>
        {showAllLayers? showLayers() : <></>}
      </div>
    </div>
  );
}

export default App;
