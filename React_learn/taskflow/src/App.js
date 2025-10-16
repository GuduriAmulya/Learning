import React,{useEffect, useState} from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
function App(){
  // const [tasks,setTasks]=useState([
  //    { id: 1, title: "Study React", completed: false },
  //   { id: 2, title: "Do DSA practice", completed: true },
  //   { id: 3, title: "Finish project report", completed: false },
  // ]);
  const initialTasks=[
    { id: 1, title: "Study React", completed: false },
    { id: 2, title: "Do DSA practice", completed: true },
    { id: 3, title: "Finish project report", completed: false },
  ]

  // local storage;
  const [tasks,setTasks]=useState(()=>{
    const saved=localStorage.getItem("tasks");
    return saved? JSON.parse(saved):initialTasks;//convert the json object back to js object(parse);
  })
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);//whenever tasks change save in localstorage
  // addtasks
  const addTask=(title)=>{
    const newTask={
      id:Date.now()+Math.floor(Math.random()*1000),
      title,
      completed:false,
    };
    setTasks((prev)=>[newTask,...prev]);//adding new task to all previous tasks in tasks
    // here setTask no curly brackets so u can just write , no need for return
  };
  //toggle task
  const toggleTask=(id)=>{
    setTasks((prev)=>{
      return prev.map((t)=>t.id===id ?{...t,completed:!t.completed}:t);
    }); //in arrow function when i use { } i will have to return !! else 
  };
  const deleteTask=(id)=>{
    setTasks((prev)=>prev.filter((t)=>t.id!==id));//return only those products with id not equal to deleted id,

  };
  return (
    <div>
      <h1>TaskFlow</h1>
      <TaskInput addTask={addTask}/>
      {/* // the parent ie App is providing the prop(property of addTask) can be used by children */}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      {/* left side of equal seen by children they can call that functions.. */}
    </div>
  )
}
export default App;