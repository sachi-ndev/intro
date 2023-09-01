import React, { useEffect, useRef, useState } from 'react'


export default function Refuse() {
const Ref  = useRef(0)
const Ref2 = useRef()
const [s , setS]=useState(0)
function show (){
   Ref.current = Ref.current + 1
console.log( Ref2.current);
    Ref2.current.style.color="red"
   setS(Ref.current)
}
useEffect(()=>{
  
},[])

  return (
    <div>
    <h1 ref={Ref2}>hai </h1>
    <h2 >{s}</h2>
    <button onClick={show}>Show</button>
    </div>
  )
}