import { useState } from "react";


export default function useVisualMode(initial) {
   const [mode, setMode] = useState(initial);
   const [history, setHistory] = useState([initial]);
  
   const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      history.splice(history.length-1, 1, newMode);
      return;
    }
    history.push(newMode);
    return;
   }
   const back = () => {
    if(history.length === 1) {
      return;
    }
    history.pop();
    
    setMode(history[history.length-1]);
   
    return;
   } 
  
   return { mode, transition, back } ;
}