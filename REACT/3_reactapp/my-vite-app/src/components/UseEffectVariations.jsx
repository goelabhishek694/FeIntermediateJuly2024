import { useEffect, useState } from "react";

function UseEffectVariations() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  console.log("after state initialisation");

  // //first variation

  // useEffect(()=>{
  //     //called when component is rendered(mounted) for the first time and everytime when state changes
  //     console.log("i am useEffect 1");
  // })


  // //second variation -> with empty dependency array
  // useEffect(()=>{
  //     //called when component is rendered(mounted) for the first time
  //     console.log("i am useEffect 2 ");
  //     //display my spin wheel
  // },[])

  // //third variation -> with empty dependency array
  // useEffect(()=>{
  //     //called when component is rendered(mounted) and everytime when count state changes
  //     console.log("i am useEffect 3 ");
  // },[count])

  // //fourth variation + cleanup
  // useEffect(()=>{
  //     console.log("i am useEffect 4");
  //     //just before next useEffect is called, cleanup function is called first.
  //     return ()=>{
  //         //remove event listensers after previous is removed and before next button is created
  //         console.log("cleanup before useEffect 4 is called");
  //     }
  // },[input])

  // //fifth variation + cleanup
  // useEffect(()=>{
  //     console.log("i am useEffect 5");
  //     //called when mounted, and then when unmounted.
  //     return ()=>{
  //         //cancel my subscription
  //         //me remove listeners
  //         console.log("cleanup before useEffect 4 is called");
  //     }
  // },[])

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  console.log("UI is rendered");
  return (
    <div>
      {/* <button onClick={()=>setCount(count+1)}>+</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count-1)}>-</button>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/> */}
      <div>{data ? <p>Data loaded !</p> : <p>Loading .....</p>}</div>
    </div>
  );
}

export default UseEffectVariations;
