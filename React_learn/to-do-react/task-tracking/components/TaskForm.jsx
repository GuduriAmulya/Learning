import React,{useState} from 'react'
import "./TaskForm.css"
import Tag from './Tag';
const TaskForm = ({setTasks}) => {
    // onsubmit button we fill setTasks array
    const [taskData,setTaskData]=useState({task:"",status:"todo",tags:[]}) // name="task" name in input field and select field should have task,status
    const checkTag=(tag)=>{
        return taskData.tags.some(item=>item===tag)
    }
    // adding to taskData.tags whatever tag is selected.. 
    const selectTag=(tag)=>{
        // if the selected tag is already in the tags array then we have to remove it
        if(taskData.tags.some(item=>item===tag)){//some ret true/false
           const filterTags=taskData.tags.filter(item=>item!==tag)// if clicked agan then remove!
            setTaskData(prev=>{
                return {...prev,tags:filterTags}
            })
        }
        else{
            //else add the tag to the list
            setTaskData(prev=>{
                return {...prev,tags:[...prev.tags,tag]};//to append the new tag selected 
            })
        } 
        //console.log(tag)
    };
    //console.log(taskData.tags)
    const handleChange=(e)=>{
        const name=e.target.name // if input field changes then name= task, else if dropdown changes then status
        const value=e.target.value // what value written or selected in dropdown
        
        setTaskData(prev=>{
            return {...prev,[name]:value}
        });
        
        
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(taskData);
        setTasks(prev=>{
            return [...prev,taskData]
        })
        // once submitted, and after adding, we have to reset the form..
        setTaskData({ //reset the object
            task:"",status:"todo",tags:[],
        })
    }
    //console.log(taskData)

    // const [task,setTask]=useState("")
    // const [status,setStatus]=useState("todo")
    // //console.log(task)
    // const handleTaskChange=(e)=>{
    //     setTask(e.target.value)
    // }
    // const handleStatusChange=(e)=>{
    //     setStatus(e.target.value)
    // }
    // console.log(task,status)
  return (
     <header className='app_header'>
        <form onSubmit={handleSubmit}> 
            {/* onSubmit on hitting enter it will be submitted. we can also have this in onCLick button down  */}
            <input type="text" name="task" value={taskData.task} className='task_input' placeholder='Enter your task'
            onChange={handleChange}/>
            <div className='task_form_bottom_line'>
                <div>
                    <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                    <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                    <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")}/>
                    <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
                    {/* Each tag should be given different names=> use props....
                    Props: Properties: Arguemnets pass to react components.*/ }
                    {/* <button className='tag'>HTML</button>
                    <button className='tag'>CSS</button>
                    <button className='tag'>JavaScript</button>
                    <button className='tag'>React</button> */}
                </div>
                <div>
                <select className='task_status' name="status" value={taskData.status} onChange={handleChange}>
                    <option  value="todo">To Do</option>
                    <option  value="doing">Doing</option>
                    <option  value="done">Done</option>
                </select>
                
                <button type="submit" onClick={handleSubmit}className='task_submit'>+Add Task</button>
                </div>
            </div>
        </form>
     </header>
  )
}

export default TaskForm