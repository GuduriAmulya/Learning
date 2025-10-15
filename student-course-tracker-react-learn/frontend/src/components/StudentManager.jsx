import React,{useState,useEffect} from "react";
import{getStudents,addStudent,updateStudent,deleteStudent} from "../services/api";

export default function StudentManager(){
    const[students,setStudents]=useState([]);
    const [form,setForm]=useState({name:"",course:"",grade:""});
    const [editId,setEditId]=useState(null);

    useEffect(()=>{
        load();
    },[]);//component did mount first time it loads.
    const load=async()=>{
        //const response=await getStudents();
        //console.log("response checking diff bw {} ",response);
       //object destructuring, axios gives data in response object within data property inside response object we hav the actual data..
        const {data}=await getStudents();
        data.forEach((d)=>{
            console.log(d);
        })
        setStudents(data);
    };
    const handleChange=(e)=>{
        console.log("handle change",e.target.name,e.target.value);
        setForm({...form,[e.target.name]:e.target.value}); // spread operator changes the value of the form
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(editId){
            console.log("edit id",editId);
            await(updateStudent(editId,form))
        }
        else{
            await addStudent(form);
        }
        setForm({name:"",course:"",grade:""});
        setEditId(null);
        load();
    };
    // const handleEdit=async(id)=>{
    //     const student=students.find((s)=>s._id===id);
    //     setForm({name:student.name,course:student.course,grade:student.grade});
    //     setEditId(id);
    // }
    const handleDelete=async(id)=>{
        await deleteStudent(id);
        load();
    }
    return (
        <div>
            <h2>Student Tracker</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="name" required/>
                <input name="course" value={form.course} onChange={handleChange} placeholder="Course" required/>
                <input name="grade" value={form.grade} onChange={handleChange} placeholder="Grade" required/>
                <button name="submit">{editId?"Update":"Add"}</button>
            </form>

        <div>
        {students.map((s)=>(
            <div key={s._id}>
            <h3>Name: {s.name} Course: {s.course} Grade: {s.grade}</h3>
            <button onClick={()=>{
                setEditId(s._id);
                setForm(s);
            }}>Edit</button>
            <button onClick={()=>handleDelete(s._id)}>Delete</button>
            </div>
        ))}
         </div>
         </div>
    );
    
}
