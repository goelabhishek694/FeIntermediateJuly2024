import "./App.css"
import Button from "./components/Button";
import ConditionalRendering from "./components/ConditionalRendering";
import FirstComponent from "./components/FirstComponent"
import RenderData from "./components/RenderData";

function App() {
  console.log("i was called");
  const isLoggedIn=false;
  const username="Kishore";
  return (
    <>
     <FirstComponent name="Abhishek"></FirstComponent>
     <FirstComponent name="Manish"></FirstComponent>
     <FirstComponent name="Shobhit"></FirstComponent>
     <RenderData></RenderData>
     <ConditionalRendering isLoggedIn={isLoggedIn} username={username}></ConditionalRendering>
     <Button></Button>
    </>
  )
}

export default App

// benefits of props
// customization: cusotmixable, flexible 
// reusability : same component can be used multiple times with diff configurations. 
//separation of concerns : it remains encapsulated and focused on its own functionality . 
// efficiency : DRY , avoids code duplication . 