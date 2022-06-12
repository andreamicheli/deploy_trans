import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Secret from "./Secret";
import Core from "./Core";
import App from './App';


export const contesto = React.createContext();


function Main() {

    const [startDate, setStartDate] = useState(null)
    const [timeLeft, setTimeLeft] = useState({minutes: null, seconds: null})  
    

    const calculateTimeLeft = ()=>{

      // const mins = new Date().setMinutes(new Date().getMinutes() + 40);

      const difference = startDate - +new Date();

      let timeLeft = {};

      if (difference > 0) {
          timeLeft = {
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      
      return timeLeft;

  }


  useEffect(() => {
      if (startDate!==null){
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000); 
      return () => clearTimeout(timer);}
    }, [startDate, timeLeft]);





  return (
    <>

    <BrowserRouter>
    <contesto.Provider value={{
            startDate: startDate,
            setStartDate: setStartDate,
            timeLeft: timeLeft,
            setTimeLeft: setTimeLeft,
            }}>
        <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/secret" element={<Secret />} />               
                <Route path="/core" element={<Core />} />               
        </Routes>
        </contesto.Provider>
    </BrowserRouter>
 
    </>
    
  )
}

export default Main