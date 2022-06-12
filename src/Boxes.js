import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, RoundedBox } from '@react-three/drei'
import './styles.css'
// import Meta from "./Meta";

function Box({ text, color, ...props }) {
  const [hovered, set] = useState(false)
  return (
    <mesh {...props} onPointerOver={(e) => set(true)} onPointerOut={(e) => set(false)}>
      <RoundedBox args={[6, 2, 2]} radius={0.1}>
        <meshLambertMaterial attach="material" color={hovered ? 'cyan' : color} />
      </RoundedBox>
      <Html position={[0, 0, 1]} className="label" center>
        {text}
      </Html>
    </mesh>
  )
}

function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree()
  const group = useRef()
  useFrame((state, delta) => {
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, viewport.height * scroll.current, 4, delta)
    // Or: group.current.position.lerp(vec.set(0, viewport.height * scroll.current, 0), 0.1)
  })
  return <group ref={group}>{children}</group>
}

function Scene() {
  const viewport = useThree((state) => state.viewport)
  return (
    <>
      <Box text={
      <>
      <div className='font-bold text-4xl w-max'>Perché un <span className='text-orange-600'>metaverso</span> pensato per le aziende?</div>
      <div className='text-xl w-full mt-2'>Negli ultimi anni abbiamo capito l'importanza degli spazi digitali collaborativi, la pandemia ci ha spinto a trovare nuove soluzioni per incontrarci, fare riunioni, prendere decisioni e lavorare insieme ma da casa.<br/> In un periodo difficile abbiamo scoperto nuove opportunità che oggi possiamo mettere in atto per migliorare i nostri posti di lavoro.</div>
      </>
      } color="lightblue" />


      <Box text={
        <>
        <div className='font-bold text-4xl w-max'>Hai già conosciuto <span className='text-orange-600'>Futura</span>, la nostra IA?</div>
        <div className='text-xl w-full mt-2'>Futura è l'assistente digitale che mettiamo a disposizione in FORWORLD. Lei ti guiderà alla scoperta delle potenzialità della nostra piattaforma. Supporta fino a 22 miliardi di operazioni al secondo per non perdersi nemmeno una delle infinite strade che portano al domani. Chi meglio di lei può suggerire alla tua azienda su cosa investire il prossimo trimestre o se un'idea avrà ancora appeal tra cinque anni?</div>
        </>
      } color="lightyellow" position={[0, -viewport.height, 0]} />
    </>
  )
}

  

export default function App() {
  const scrollRef = useRef()
  const scroll = useRef(0)
  return (
    <>
      <Canvas
        onCreated={(state) => state.events.connect(scrollRef.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} />
        <ScrollContainer scroll={scroll}>
          <Scene />
        </ScrollContainer>
      </Canvas>
      <div
        ref={scrollRef}
        onScroll={(e) => (scroll.current = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))}
        className="scroller">
        <div style={{ height: `200vh`, pointerEvents: 'none' }}></div>
      </div>
    </>
  )
}

