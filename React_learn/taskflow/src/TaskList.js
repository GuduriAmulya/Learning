import React from "react";
import TaskItem from "./TaskItem";
function TaskList({tasks,onToggle,onDelete}){
    // here we will be listing all the tasks....
    console.log(tasks)
    if(!tasks|| tasks.length===0){
        return <p>No tasks yet --feel free to add!</p>

    }
    return (
        <div>
            {tasks.map((t)=>(
                <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete}/>
                // when we render list of items using map, React needs a way to uniquely identity each eleemnt in the list
                // thats where key prop comes..
            ))}
        </div>
    )
}
export default TaskList;