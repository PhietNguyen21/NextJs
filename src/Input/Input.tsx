import React, { useState } from 'react'
import ListTodo from './list.todo';

interface Iprops{
    name:string,
    age:number,
    info:{
        gender:string,
        address:string
    },
    abc?:string,
    addTodo:(todo:string)=>void

}

// method 1
// const Input = (props : {
//     name:string,
//    age:number,
//    info:{
//        gender:string,
//        address:string
//    },
//    abc?:string
// })

const Input = ({name,age,addTodo} : Iprops) => {
     
  const [edit,setEdit]=useState<string>('');
  
  const handleSubmit=(e : any )=>{
    e.preventDefault();
    if(!edit)
    {
      return ;
    }
    addTodo(edit);
    setEdit('');
  }
  return (
    
    <form onSubmit={(e)=>{
      handleSubmit(e)

    }}>
        <div>Name: {name} - Age:{age}</div>
        <label>Add new todo</label>
        
        <br/>
        <input
        value={edit}
        onChange={(e)=>{
          setEdit(e.target.value);
        }} style={{marginRight:10}} placeholder='Content todo'/>
        <button type='submit'>Save</button>
        <div>LIST TODO</div>
        
        
    </form>
  )
}

export default Input