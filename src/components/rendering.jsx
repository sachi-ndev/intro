import React from 'react'

export default function Rendring() {
  const CardNames = [
    {name:"ka",job:'Astronut'},
    {name:"Kavya", job:"Developer"},
    {name:"kavs", job:"pilot"}
  ] //array of objects
let e = CardNames.filter(es=> es.name == "Kavya")
// if(CardNames[1].name == "Kavya"){
//     return (
  
//         <div>
//         {e.map(eachCard => (
//           <h1>{eachCard.name}</h1>
//         ))}
//       </div>
//     )
// }
// else{
//     return (
  
//         <div>
//       not kavs
//       </div>
//     )
// }
 

return(
    CardNames[0].name =="Kavya"
    ? <div>
             {e.map(eachCard => (
              <h1>{eachCard.name}</h1>
           ))}
           </div>
           :
           <div>
                 not kavs
              </div> 
)
}
