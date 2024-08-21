// import React from 'react'

function RenderData() {
    const fruits =["Apple","Mango","Cherry","Banana"];
    const person={
      name: "Sagar",
      age:22
    }
  return (
    <>
        <h1>Fruits List</h1>
        <ul>
            {/* {fruits.map(fruit=>(
                <li>{fruit}</li>
            ))} */}

            {fruits.map((fruit,index)=>{
                return <li key={index}>{fruit}</li>
            })}
            {/* {[<li>Aple</li>,<li>Kiwi</li>]} */}
        </ul>
        <h2>Peron Info</h2>
        <p>Name: {person.name}</p>
        <p>Name: {person.age}</p>
    </>

  )
}

export default RenderData