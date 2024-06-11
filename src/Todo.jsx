import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function Todo (){
    let[todos , setTodos] = useState([{work :"read" , id:uuidv4() , done:false}]) ;
    let[newtask , setNewTask] = useState("")

    let addNew =() =>{
        setTodos([...todos ,{work :newtask , id:uuidv4() , done :false}])
        setNewTask() 
     }
let taskValue=(event)=>{
    setNewTask(event.target.value)
};

let deleteTodo = (id)=>{
   setTodos(todos.filter((task)=> task.id !== id ))

// console.log(id)
}
let caseAll =()=>{
   setTodos(todos.map((task)=>{
        return {
            ...task,
           work: task.work.toUpperCase(), }
    }))
}
let caseEach =(id)=>{
    setTodos(todos.map((task)=>{
        if(task.id === id){
            return {
                ...task,
                work: task.work.toUpperCase(), }
        }
        
            else{
                return task
            }
     }))
 }
 
 let lowerAll =()=>{
     setTodos(todos.map((task)=>{
     return {
        ...task ,
        work : task.work.toLowerCase()
     }
    }))
 }
 let markEach =(id)=>{
    setTodos(todos.map((task)=>{
        if(task.id === id){
            return {
                ...task,
                 done:true
            } }
            else{
                return 
                task
            }
            
       
       
    }))
   
 }
    return (
        <>
        <div>
            <input type="text" placeholder="Add some today task"  value={newtask} onChange={taskValue} />  <button onClick={addNew}>Add</button>
            <div>
                <h2>Todo list</h2>
                <ul>
                {todos.map((task)=>(
                    <li key={task.id}><span style={task.done ? {textDecorationLine:"line-through"}:{ }}>{task.work}</span><button onClick={()=>deleteTodo(task.id)}> Delete</button>
                                        <button onClick={()=>caseEach(task.id)}>upper</button> 
                                         <button onClick={()=>markEach(task.id)}>mark </button>

</li>
                    
                 ))}
                    <button onClick={caseAll}>upper</button>
                    <button onClick={lowerAll}>lower</button>
                    
                </ul>
             
            </div>
        </div>
        
        
        </>
    )
}