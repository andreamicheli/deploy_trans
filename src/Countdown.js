import React, {useState, useEffect, useContext} from 'react'
import { contesto } from "./Main";

function Countdown({seconds, size="big"}) {



  return (
    <div className={'font-future_zregular text-white text-center' && size === 'big' ? "text-6xl" : "text-xl"}>
        <span className={size === 'big' ? "text-cyan-300" : "text-cyan-100"}>{Math.floor(seconds/60).toString().length<2 ? '0'+Math.floor(seconds/60) : Math.floor(seconds/60)}</span>
        <span className='text-white'>{' : ' + ((seconds%60).toString().length<2 ? '0'+seconds%60 : seconds%60)}</span>
    </div>
  )
}

export default Countdown