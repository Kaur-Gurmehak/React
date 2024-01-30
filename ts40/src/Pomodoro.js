import React, { useEffect, useState } from 'react'
import './Pomodoro.css';

function Pomodoro() {
    const[workTime,setworkTime]=useState(25);
    const[breakTime,setbreakTime]=useState(5);
    const[workSec,setWorkSec]=useState(1500);
    const[breakSec,setBreakSec]=useState(300);
    const[type,setType]=useState("Work");
    const[rstflag,setrstflag]=useState(true);
    const[flag,setflag]=useState(false);
    useEffect(() => {
        if (flag && type === "Work") {
          if (workSec > 0) {
            setTimeout(() => setWorkSec(workSec - 1), 1000);
          }
          if (workSec === 0) {
              alert("Work duration is over");
              setType("Break");
              setWorkSec(workTime * 60);
          }
        }
        if (flag && type === "Break") {
          if (breakSec > 0) {
            setTimeout(() => setBreakSec(breakSec - 1), 1000);
          }
          if (breakSec === 0) {
              alert("Break duration is over");
              setType("Work");
              setBreakSec(breakTime * 60);
          }
        }
      }, [type, flag, workSec, breakSec, breakTime, workTime]);
      
    const convertor=(sec)=>{
        let m = parseInt(sec/60).toString();
        let s = parseInt(sec%60).toString();
        if(m.length === 1) m="0"+m
        if(s.length === 1) s="0"+s
        return m+":"+s
    }
    const validateMinutes = (minutes) => {
        const parsedMin = parseInt(minutes);
        return Number.isInteger(parsedMin) && parsedMin > 0;
      };
    const handleSubmit=(e)=>{
        e.preventDefault()
        const validworkTime = validateMinutes(workTime);
        const validbreakTime = validateMinutes(breakTime);
        if (validworkTime && validbreakTime) {
            setWorkSec(workTime * 60);
            setBreakSec(breakTime * 60);
            setType("Work");
        } else {
            setworkTime(25);
            setbreakTime(5);
            console.log("Invalid minutes! Setting to Default Values...");
        }
}
    const handleReset=()=>{
        setrstflag(true);
        setflag(false);
        setbreakTime(5);
        setworkTime(25);
        setWorkSec(1500);
        setBreakSec(300);
    }

  return (
    <div>
        <div>
            <h1>{type === "Work"?convertor(workSec):convertor(breakSec)}</h1>
            <h1>{type === "Work"?"Work":"Break"}-Time</h1>
        </div>
        <div>
            <button onClick={()=>{setflag(true);setrstflag(false)}}disabled={flag}>Start</button>
            <button onClick={()=>{setflag(false);setrstflag(false)}} disabled={!flag}>Stop</button>
            <button onClick={handleReset} disabled={rstflag}>Reset</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input1" type="number" value={workTime} onChange={(e)=>setworkTime(e.target.value)} disabled={flag}/>
                <input className="input1" type="number" value={breakTime} onChange={(e)=>setbreakTime(e.target.value)} disabled={flag}/>
                <input className="set1" type="submit" value="set" disabled={flag}/>
            </form>
        </div>
    </div>
  )
}

export default Pomodoro