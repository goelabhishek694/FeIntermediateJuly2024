import logo from './logo.svg';
import './App.css';
import ClassComp from './Components/ClassComp';
import TodoList from './Components/TodoList';
import TodoListFunc from './Components/TodoListFunc';
import withLoading from "./Components/WithLoading"
import DataComp from './Components/DataComp';
const EnhancedDataComponent = withLoading(DataComp);
function App() {
  return (
    // <ClassComp name="Scaler"></ClassComp>
    // <TodoList></TodoList>
    // <TodoListFunc></TodoListFunc>
    <>
    <EnhancedDataComponent data="here is some data !!"></EnhancedDataComponent>
    <EnhancedDataComponent data="here is some data !!"></EnhancedDataComponent>
    </>
  );
}

export default App;
