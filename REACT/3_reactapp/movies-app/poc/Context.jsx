import React, { useState, createContext, useContext } from 'react'
// creates a store -> storeApnaBazaar is name of the store
const storeApnaBazaar = createContext("default-value");
// const storeSmartBazaar = createContext("hello");
console.log(storeApnaBazaar);
//data to be put inside store 
const data={
    dal:"10kg",
    rice:"100kg",
    rajma:"5kg"
}

const data2={
    potato:"10kg",
    tomato:"100kg",
    mushroom:"5kg"
}

function Context() {
  return (
    // wrapping the topmost compoenent of react with the store and prividing data of our store . 
    <>
        <storeApnaBazaar.Provider value={data}>
            <Grandparent></Grandparent>
        </storeApnaBazaar.Provider>
        {/* <storeSmartBazaar.Provider value={data2}>
            <Grandparent></Grandparent>
        </storeSmartBazaar.Provider> */}
    </>
  )
}

export default Context

function Grandparent(){
    let [name,setName] = useState("Interviewbit");

    console.log("Grandparent was rendered");
    return <>
        <h3>Grandparent</h3>
        <div>⬇️</div>
        <Parent1 name={name} setName={setName}/>
    </>
}

function Parent1({name, setName}){
    console.log("Parent1 was rendered");
    return <>
        <h3>Parent1</h3>
        <div>⬇️</div>
        <Parent2 name={name} setName={setName}/>
    </>
}

function Parent2({name, setName}){
    console.log("Parent2 was rendered");
    return <>
        <h3>Parent2</h3>
        <div>⬇️</div>
        <Child name={name} setName={setName}/>
    </>
}

function Child({name,setName}){
    console.log("Child was rendered");
    const items = useContext(storeApnaBazaar);
    // const veggies = useContext(storeSmartBazaar);
    return <>
        <h3>Child</h3>
        <div>⬇️</div>
        <p>{name}</p>
        <p>{items.rice}</p>
        {/* <p>{veggies.mushroom}</p> */}
        <button onClick={()=>setName("Scaler")}>Change Name</button>
    </>
}