import React from 'react'


function Modal(){
    return (
    <>
    <div className={'fade w-full h-full  bg-black top-0 z-10 left-0 flex justify-center items-center overflow-hidden '}>
        <div className=' max-w-1/4 h-1/3 bg-red-500 z-50 rounded-3xl p-10 border-4 border-solid border-white shadow-md'>
            <div className='flex justify-between'>
            <span className='text-cyan-200 font-extrabold text-2xl mb-2'>ATTENZIONE!</span></div>
            <p className='text-cyan-200 font-light mb-6'>materiale sensibile, è vietato rilasciare informazioni</p>
            <p className='text-cyan-200 font-bold'>username: <span className='italic font-normal'>roberto.marino.1973@gmail.com</span></p>
            <p className='text-cyan-200 font-bold'>password: <span className='italic font-normal'>Robertone@</span></p>
            <p className='text-cyan-200 font-light mt-4'>per accedere all'archivio segreto, inserire le credenziali<br /> precedenti sul servizio cloud <a href='mega.io' className='text-blue-300 underline'>Mega.io</a></p>
        </div>
    </div>

    </>

    )
}



function Secret() {
  return (
    <div className='bg-black w-screen h-screen'>
        <Modal />
    </div>
  )
}

export default Secret