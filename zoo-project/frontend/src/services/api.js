import axios from "axios";
const API_URL = "http://localhost:5000/anims";
export const getAnims = () => axios.get(API_URL);
export const addAnim = (anim) => axios.post(API_URL, anim);
export const updateAnim = (id, anim) => axios.put(`${API_URL}/${id}`, anim);
export const deleteAnim = (id) => axios.delete(`${API_URL}/${id}`);
