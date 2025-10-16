import React from "react";

function TaskItem({task,onToggle,onDelete}){
    return (
        <div
         style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 8,
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        background: task.completed ? "#e6ffed" : "#fff",
      }}
        >
           
            <label style={{display:"flex",gap:10}}>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={()=>onToggle(task.id)}
                />
                <span style={{textDecoration: task.completed?"line-through":"none"}}>{task.title}</span>

            </label>
            <button onClick={()=>onDelete(task.id)}
                style={{background:"none",border:"none",color:"#d00"}}>Delete Task

            </button>
        </div>
    )
}

export default TaskItem;