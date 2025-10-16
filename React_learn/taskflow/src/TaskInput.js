import React,{useState} from "react";
function TaskInput({addTask}){
    //input from user
    const[value,setValue]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const trim=value.trim();
        if(!trim) return ;
        addTask(trim);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} 
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Add a new task.." 
            style={{flex:1,padding:0,fontSize:16}}
            />
            {/* Setting initial value in the given form as inital value as set in useState=" " then as user writes it gets changed using setValue */}
            <button type="submit" style={{padding:"8px 12px"}}>Add</button>
        </form>
    );
}
export default TaskInput;