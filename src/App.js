import React from "react";
import StudentName from "./components/studentName";
function App() {





  let name = "prg";
  return (
    <div className="App">
      <h1>hai welcom to react </h1>
      <h2>{name}</h2>
      <StudentName StudName="Shaheer" color="red" age='100'/>
      <StudentName StudName="Sachin"  color = "green" age='100'/>
    </div>
  );
}

export default App;
