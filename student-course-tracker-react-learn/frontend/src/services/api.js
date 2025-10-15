//connecting frontend with backend
import axios from "axios";
const API_URL="http://localhost:5000/student";

export const getStudents=()=>{
    return axios.get(API_URL);
}
export const addStudent=(data)=>{
    return axios.post(API_URL,data);
}
export const updateStudent=(id,data)=>{
    return axios.put(`${API_URL}/${id}`,data);
}
export const deleteStudent=(id)=>{
    return axios.delete(`${API_URL}/${id}`);
}