import { useState } from "react";


export default function useVisualMode(initial) {
   const [mode, setMode] = useState(initial);
   const [history, setHistory] = useState([initial]);

   const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      // console.log('before splice', history)
      history.splice(history.length-1, 1, newMode);
      // console.log('after splice', history)
      return;
    }
    // console.log('mode after setmode', mode);
    // console.log('history is', history);
    history.push(newMode);
    // console.log('history after push', history);
    return;
   }
   const back = () => {
    // console.log('history before pop', history);
    if(history.length === 1) {
      return;
    }
    history.pop();
    // console.log('history after pop', history)
    console.log('last element in the array', history[history.length-1])
    setMode(history[history.length-1]);
    return;
   } 

   return { mode, transition, back } ;
}