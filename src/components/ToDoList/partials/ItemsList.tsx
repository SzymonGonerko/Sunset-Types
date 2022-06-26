import React, { ChangeEvent, ChangeEventHandler, FormEvent, MouseEventHandler, useState } from "react";
import {nanoid} from "nanoid"

type Task = {
id?: string;
label: string;
isComplete: boolean
}


export const ItemsList : React.FC = () => {
const [tasks, setTasks] = useState<Task[]>([])
const [newTask, setNewTask] = useState<string>("")

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
}

const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
if (newTask !== "") {
    setTasks(tasks => [...tasks, {isComplete: false,id: nanoid(), label: newTask}])
    setNewTask("")}
}

const handleChangeStatus = (element : Task) => (e: ChangeEvent<HTMLInputElement>) => {
    setTasks((tasks) => tasks.map((task) => {
        if (task.id === element.id) return {...task, isComplete: e.target.checked}
        return task
    })) 
}


const handleClearFinished = () => {
setTasks(tasks => tasks.filter(el => !el.isComplete))
}

const handleDelete = (element: Task) => (e: React.MouseEvent) => {
setTasks(prev => prev.filter(el => el.id !== element.id))
}

return (
    <form onSubmit={handleNewTask}>
    <ul>
        {tasks.map((task) => 
        <li key={task.id}>
            <input type="checkbox" checked={task.isComplete} onChange={handleChangeStatus(task)}/>
            {task.label}
            <input onClick={handleDelete(task)} type="button" value="Usuń"/>
        </li>
        
        )}
    </ul>
    <input 
    value={newTask} 
    onChange={handleChange}/>

    <input type="button" value="Wyszyść Ukończone" onClick={handleClearFinished}/>

</form>)
}