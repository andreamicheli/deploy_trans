import React, { useContext } from 'react'
import Countdown from './Countdown'
import { contesto } from "./Main";
import { Link } from 'react-router-dom';

function Dashboard() {

    let setStartDate = useContext(contesto).setStartDate;
    let startDate = useContext(contesto).startDate;
    let timeLeft = useContext(contesto).timeLeft;

    function startfunction() {
        const mins = new Date().setMinutes(new Date().getMinutes() + 40);
        setStartDate(mins);
        console.log(startDate)
    }

  return (
    <>
    <Link to="/">
        <button className="m-4 relative group overflow-hidden px-8 h-12 rounded-md bg-slate-600
                      before:absolute 
                      before:inset-0 
                      before:bg-slate-800 
                      before:scale-y-[0.1] 
                      before:origin-bottom
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100
                      text-white
                      font-bold
                      ">
                          ARG
          
        </button>
    </Link>
    <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">DASHBOARD</span>
        <div className="grid grid-cols-2 gap-4 w-1/2">
            <div className="bg-blue-300 w-52 h-72 m-8 static rounded-lg ">
                <div className="bg-white w-52 h-72 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                    <h1 className="m-4 text-2xl font-bold">INIZIO</h1>
                    <hr className="m-4 rounded-2xl border-t-2" />
                    <p className="m-4 text-sm">{startDate==null ? "Premi il pulsante per avviare il timer:" : "Premi il pulsante per resettare il timer:"}</p>
                    <button className="m-4 relative group overflow-hidden px-8 h-12 rounded-md bg-blue-300
                      before:absolute 
                      before:inset-0 
                      before:bg-blue-400 
                      before:scale-y-[0.1] 
                      before:origin-bottom
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100
                      " onClick={()=>startfunction()}>
                        <span className="relative uppercase text-white font-future_zregular">
                            {
                            startDate == null ?
                            "AVVIO" : 
                            <Countdown size='small'/> 
                            }
                        </span>
                    </button>
                </div>
            </div>
            {/* <div class="bg-green-300 w-52 h-72 m-8 static rounded-lg ">
                <div class="bg-white w-52 h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                    <h1 class="m-4 text-2xl font-bold">RESTART</h1>
                    <hr class="m-4 rounded-2xl border-t-2" />
                    <p class="m-4 text-sm">Resetta il timer</p>
                    <button className="m-4 relative group overflow-hidden px-8 h-12 rounded-md bg-green-300
                      before:absolute 
                      before:inset-0 
                      before:bg-green-400 
                      before:scale-y-[0.1] 
                      before:origin-bottom
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100
                      ">
                        <span className="relative uppercase text-white font-future_zregular">
                            LOREM IPSUM
                        </span>
                    </button>
                </div>
            </div> */}
            {/* <div class="bg-red-300 w-52 h-72 m-8 static rounded-lg ">
                <div class="bg-white w-52 h-72 hover:m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                    <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
                    <hr class="m-4 rounded-2xl border-t-2" />
                    <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
                </div>
            </div>
            <div class="bg-yellow-300 w-52 h-72 m-8 static rounded-lg ">
                <div class="bg-white w-52 h-72 m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                    <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
                    <hr class="m-4 rounded-2xl border-t-2" />
                    <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
                </div>
            </div> */}
        </div>

    
    </div> 
    </>
 )
}

export default Dashboard