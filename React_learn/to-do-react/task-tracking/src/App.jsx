import React,{useState,useEffect}from 'react'
import "./App.css"
import TaskForm from '../components/TaskForm'
import TaskColumn from '../components/TaskColumn'
import Todo from "../assets/direct-hit.png"
import Doing from "../assets/fire.png"
import Done from "../assets/glowing-star.png"
const oldTasks=localStorage.getItem("tasks")
console.log(oldTasks)
const App = () => {
  const [tasks,setTasks]=useState(JSON.parse(oldTasks))//storing all tasks from TaskForm.jsx
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
         //what to run   //when to run       //dependency

  const handleDelete=(taskIndex)=>{
    const newTasks=tasks.filter((task,index)=>index!==taskIndex)
    setTasks(newTasks)
    console.log(newTasks)
  }
  console.log("tasks: ",tasks)
  return (
    <div className='app'>
     <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        {/* Fill the task array inside these columns of todo,doing,etc */}
        <TaskColumn title="To Do" icon={Todo} tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskColumn title="Doing" icon={Doing} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn title="Done" icon={Done} tasks={tasks} status="done" handleDelete={handleDelete}/>
        {/* <section className='task_column'>Section 1</section> */}
        
      </main>
    </div>
  )
}

export default App