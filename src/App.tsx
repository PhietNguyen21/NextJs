
import './App.css'
import Input from './Input/Input'
import ListTodo from './Input/list.todo';
import {useState} from 'react'
function App() {
  const lastName='PHIET';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const inFo={
    gender:'Male',
    address:'Nha Be'
  }
  const [lstTodo,setLstTodo]=useState<string[]>([]);

  const addTodo=(todo :string)=>{
    setLstTodo([...lstTodo,todo])
  }
  return (
    <>
     <Input addTodo={addTodo} name={lastName} age={18} info={inFo}  />
     <ListTodo arr={lstTodo}/>
    </>
  )
}

export default App
