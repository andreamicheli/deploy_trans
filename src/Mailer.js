import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router-dom';




function Mailer() {

    const [codice, setcodice] = useState('')
    let navigate = useNavigate()


    function sendemail(e) {
        e.preventDefault();
    
        if (codice === 'ciao'){
            navigate('/secret')
            return
        }
        else{
        emailjs.sendForm('service_9ihaixr', 'template_moj7e12', e.target, 'mLYuw_x3TsbO2ERCF')
          .then((result) => {
              console.log('funzionato ', result.text);
          }, (error) => {
              console.log('errore ',error.text);
          });
        e.target.reset()
        }
    }
    

  return (
      <>
        <form onSubmit={sendemail}>
            <div className="relative z-0 mb-6 mt-6 w-full group flex items-center">
            <input type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-cyan-300 peer" value={codice} onChange={(e)=>{setcodice(e.target.value)}} placeholder=" " required />
            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            <label>
                <input type="submit" name="submit" className='appearance-none'/>
                <svg xmlns="http://www.w3.org/2000/svg" className=" m-2 h-6 w-6 hover:stroke-cyan-300 hover:cursor-pointer hover:rotate-90 hover:animate-pulse hover:opacity-100 opacity-30 transition ease-in-out delay-150 " fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </label>
            </div>
        </form>
        {/* <div className={'w-52 h-52 p-8 bg-orange-500 text-cyan-400 rounded-3xl absolute z-10' + (visible===true ? 'flex' : 'hidden')}>
            ATTENZIONE! RICHIESTO ACCESSO A MATERIALE SENSIBILE
            </div> */}
      </>
  )
}

export default Mailer