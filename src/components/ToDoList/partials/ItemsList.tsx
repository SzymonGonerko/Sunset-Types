import React, { ChangeEvent, FormEvent, useState, useId } from "react";
import {nanoid} from "nanoid"
import { addTask, removeTask, changeCheckedTask, clearCompletedTasks } from "../../../features/taskSlice";



interface ItemsList {
    tasks: {label: string, id: string, isComplete: boolean}[];
    dispatch: any
  }


export const ItemsList = ({tasks, dispatch}: ItemsList) => {
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
        {tasks.map((task , i) => 
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
    <input type="button" value="Wyszyść Ukończone" onClick={() => dispatch(clearCompletedTasks(true))}/>
   </form>
</>)
}