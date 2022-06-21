import React, {useState, useEffect, useContext} from 'react'
import { contesto } from "./Main";

function Countdown({seconds, size="big"}) {



  return (
    <div className='relative w-screen h-screen flex justify-center items-center'>
      <div className='absolute z-10 w-max'>
        
      <div className={'font-future_zregular text-white text-center' && size === 'big' ? "text-8xl" : "text-xl"}>
          <span className={'bg-transparent' && size === 'big' ? "text-cyan-300" : "text-cyan-100"}>{Math.floor(seconds/60).toString().length<2 ? '0'+Math.floor(seconds/60) : Math.floor(seconds/60)}</span>
          <span className={'bg-transparent text-white'}>{' : ' + ((seconds%60).toString().length<2 ? '0'+seconds%60 : seconds%60)}</span>
      </div>
      </div>
        <div className='absolute w-max z-0 mt-28'><img src={'/clockgif.gif'} alt='stop' className="w-full h-full"/></div>
    </div>
  )
}

export default Countdown