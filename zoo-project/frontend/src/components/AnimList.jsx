import React,{useState} from "react";
import AnimForm from "./AnimForm";
import { getAnims } from "../services/api";
export default function AnimList() {
  const [TotalAnimals,setTotalAnimals]=useState(0);
  const updateAnimalCount=async ()=>{
    const{data}=await getAnims();
    setTotalAnimals(data.length);
  }
  return (
    <div>
      <h2>
        Animals :{TotalAnimals}
      </h2>
      <AnimForm onRefresh={updateAnimalCount}/>
    </div>
  );
}
