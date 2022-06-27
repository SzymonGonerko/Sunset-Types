import React, { ChangeEvent, FormEvent, useState } from "react";
import {nanoid} from "nanoid"
import { addTask, removeTask, changeCheckedTask } from "../../../features/taskSlice";



interface ItemsList {
    val: {label: string, id: string, isComplete: boolean}[];
    dispatch: any
  }


export const ItemsList = ({val, dispatch}: ItemsList) => {
const [newTask, setNewTask] = useState<string>("")


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
}

const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
if (newTask !== "") {
    dispatch(addTask({isComplete: false, id: nanoid(), label: newTask}))
    setNewTask("")}
}



return (
    <>
    <form onSubmit={handleNewTask}>
    <ul>
        {val.map((task , i) => 
        <li key={task.id}>
            <input type="checkbox" checked={task.isComplete} onChange={() => dispatch(changeCheckedTask(task.id))}/>
            {task.label}
            <input type="button" value="Usuń" onClick={() => dispatch(removeTask(i))}/>
        </li>
        
        )}
    </ul>
    
    <input 
    value={newTask} 
    onChange={handleChange}/>
    <input type="button" value="Wyszyść Ukończone"/>
   </form>
</>)
}