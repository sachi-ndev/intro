import React from "react";
import StudAge from "./StudAge";


export default function StudentName(props) {
    const {StudName,color,age} = props
    console.log(props);
  return (
    <div>
      <h1 style={{
        color:color
      }}>{StudName}</h1>

<StudAge eachage={age}/> 

    </div>
  )
}
