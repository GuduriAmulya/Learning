import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import DeleteIcon from "../assets/delete.png"
const TaskCard = ({title,tags,handleDelete,index}) => {
    //console.log(tags);
  return (
    <article className='task_card'>
        <p className='task_text'>{title} </p>

        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                {
                    //tags.map((tag,index)=><Tag tagName={tag}/>)
                    tags.map((tag,index)=>{
                        console.log(tag,index);
                       return <Tag key={index} tagName={tag} selected={true}/>
                    })
                }
                {/* <Tag tagName="HTML"/>
                 <Tag tagName="CSS"/> */}
            </div>
            <div className='task_delete' onClick={()=>handleDelete(index)}>
                <img src={DeleteIcon} className='delete_icon' alt="delete icon"/>
            </div>
        </div>
    </article>
  )
}

export default TaskCard