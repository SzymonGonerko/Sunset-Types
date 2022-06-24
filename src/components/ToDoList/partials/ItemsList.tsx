import React, { ChangeEvent, useState } from "react";
import { KeyboardEvent } from 'react';

type Task = {
label: string
}


export const ItemsList : React.FC = () => {
const [tasks, setTasks] = useState<Task[]>([])
const [newTask, setNewTask] = useState<string>("")

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
}

const handleNewTask = (e: KeyboardEvent<HTMLInputElement>) => {
if (e.key === "Enter") {setTasks(tasks => [...tasks, {label: newTask}])}
}

return (<div>
    <ul>
        {tasks.map((task, i) => <li key={i}>{task.label}</li>)}
    </ul>
    <input 
    value={newTask} 
    onKeyPress={handleNewTask}
    onChange={handleChange}/>

</div>)
}