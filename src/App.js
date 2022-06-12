import React, { Suspense, useState, useRef } from "react";

import ForWorld from './ForWorld'
import { Html, OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";

import * as THREE from 'three'


import { Canvas, useThree, useFrame } from '@react-three/fiber';
import Mailer from "./Mailer";
import Boxes from "./Boxes"
import Presentation from "./Presentation";
import Astronave from "./Astronave";
import Planet from "./Planet";
import Timer from "./Timer";
function Title({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 10, -10]}
      lineHeight={0.8}
      font="./futurez-mveaw-webfont.woff"
      fontSize={width / 10}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}
function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 6, -6]}
      lineHeight={0.8}
      font="./futurez-mveaw-webfont.woff"
      fontSize={width / 25}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x, state.mouse.y, 10), 0.1)
  })
}

function App() {

  const pos = useRef();


  return (
    <>
    <div className="snap-y snap-mandatory overflow-scroll h-screen bg-black">
    {/* <div className="snap-y snap-mandatory h-screen overflow-scroll  bg-black"> */}

      {/* pagina 1 */}
      {/* <div className="flex items-center justify-center flex-col h-screen">
        <div className="flex flex-col text-white w-screen text-center h-1/3 font-future_zregular">
          <span className="text-8xl pt-4">FORWORLD</span>
          <span className="text-2xl pt-4">the event</span>
          <div className="pt-16">
          <Countdown />
          </div>
        </div> */}

        {/* <div className="snap-start! h-screen w-screen bg-lime-400"> */}
        <div class="snap-start w-screen h-screen flex items-center justify-center text-8xl">
          <Canvas camera={{ position: [0, -1, 10]}}>
          {/* <Canvas camera={{ position: [0, -5, 10]}}> */}
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={null}>
            <Rig />
            <Title>{'FORWORLD'}</Title>
            <Caption>{'the event'}</Caption>
            {/* <ForWorld position={[0, -3, -8]}/> */}
            <Planet position={[0, -13, 0]} rotation={[0, Math.PI / 2, 0]}/>
            </Suspense>
          </Canvas>
        </div>
      {/* </div> */}

      {/* pagina 2 */}
      {/* <div className="snap-start! flex items-center justify-center flex-col h-screen w-screen bg-violet-300"> */}
      <div class="snap-start w-screen h-screen flex flex-col items-center justify-center">
        <div className={"h-2/3 w-screen"}>
          <Canvas camera={{ position: [0, 0, 0]}}>
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.5} />
              <Suspense fallback={null}>
              <Rig />
              <Astronave position={[-5, 1, 3]} rotation={[Math.PI / 5, -Math.PI / 6, 0]}/>
              <Html position={[0, 4, 0]}>
              <Presentation />
              </Html>
              </Suspense>
          </Canvas>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/3">
            <span className="text-cyan-50 font-bold text-2xl mr-20">Iscriviti all'evento, manca poco!</span>
            <Mailer />
            <div className="text-cyan-100 text-2xl mt-16 border-cyan-400 rounded-xl border-4 p-6 hover:animate-pulse">Scoprirai le grandi innovazioni che abbiamo preparato per te e la tua impresa!</div>
          </div>
          <div className="ml-20">
            <Timer />
          </div>

        </div>
      </div>
 
    {/*  <div className="h-[50vh]">
      </div> */}


      {/* pagina 3 */}
     
      {/* <div className="snap-start! flex items-center justify-center flex-col h-screen bg-red-300"> */}
     
    <div class="snap-start"></div>
    </div>
    <div class="w-screen h-screen flex items-center justify-center text-8xl bg-black" 
      ref={pos} onClick={()=>{console.log(pos.current.getBoundingClientRect())}}>
          <Boxes />
    </div>
    </>
  );
}

export default App;
