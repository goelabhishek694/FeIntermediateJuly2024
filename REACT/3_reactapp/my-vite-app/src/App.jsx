// import { useState } from "react"
import "./App.css"
import ReactRouterDOM from "./components/ReactRouterDOM";
// import AdvancedForm2 from "./components/AdvancedForm2";
// import TemeperatureInput from "./components/TemeperatureInput";
// import TemperatureDisplay from "./components/TemperatureDisplay";
// import UseEffectVariations from "./components/UseEffectVariations";
// import Form from "./components/Form";
// import Button from "./components/Button";
// import ConditionalRendering from "./components/ConditionalRendering";
// import FirstComponent from "./components/FirstComponent"
// import RenderData from "./components/RenderData";
// import UseState from "./components/UseState";

function App() {
  // console.log("i was called");
  // const isLoggedIn=false;
  // const username="Kishore";
  // const [temperature,setTemperature] = useState("");
  // const handleTemperatureChange=(temp)=>setTemperature(temp)
  return (
    <>
     {/* <FirstComponent name="Abhishek"></FirstComponent>
     <FirstComponent name="Manish"></FirstComponent>
     <FirstComponent name="Shobhit"></FirstComponent>
     <RenderData></RenderData>
     <ConditionalRendering isLoggedIn={isLoggedIn} username={username}></ConditionalRendering>
     <Button></Button> */}
     {/* <UseState></UseState>
     <UseState></UseState>
     <UseState></UseState> */}
     {/* <Form></Form> */}
     {/* <AdvancedForm2></AdvancedForm2> */}
     {/* <TemeperatureInput temperature={temperature} handleTemperatureChange={handleTemperatureChange}></TemeperatureInput>
     <TemperatureDisplay temperature={temperature}></TemperatureDisplay> */}
     {/* <UseEffectVariations></UseEffectVariations> */}
     <ReactRouterDOM></ReactRouterDOM>
    </>
  )
}

export default App

// benefits of props
// customization: cusotmixable, flexible 
// reusability : same component can be used multiple times with diff configurations. 
//separation of concerns : it remains encapsulated and focused on its own functionality . 
// efficiency : DRY , avoids code duplication . 