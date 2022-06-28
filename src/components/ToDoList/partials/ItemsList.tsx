import React, { ChangeEvent, FormEvent, useState, useId, useRef } from "react";
import {nanoid} from "nanoid"
import { addTask, removeTask, changeCheckedTask, clearCompletedTasks, changeInputValue } from "../../../features/taskSlice";



interface ItemsList {
    tasks: {textValueInput: string, label: string, id: string, isComplete: boolean}[];
    dispatch: any
  }




export const ItemsList = ({tasks, dispatch}: ItemsList) => {
const input = useRef<any>(null)

const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    dispatch(addTask({isComplete: false, id: nanoid(), label: input.current.value}))
    input.current.value = ""
    e.preventDefault()
}

return (
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
    
        <input ref={input}/>

        <input type="button" value="Wyszyść Ukończone" onClick={() => dispatch(clearCompletedTasks(true))}/>
   </form>
)
}