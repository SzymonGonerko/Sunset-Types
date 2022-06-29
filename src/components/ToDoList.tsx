import React, { ChangeEvent, FormEvent, useState, useId, useRef } from "react";
import {nanoid} from "nanoid"
import { addTask, removeTask, changeCheckedTask, clearCompletedTasks } from "../features/taskSlice";
import {Form, Ul, Header, AddTaskWrapper, TextInput, CircleDiv, ClearInput} from "./ToDoStyles"
import {AddCircle} from '@styled-icons/material'

interface ToDoList {
    tasks: {isComplete: boolean; id: string; label: string}[];
    dispatch: any
  }




export const ToDoList = ({tasks, dispatch}: ToDoList) => {
const input = useRef<any>(null)

const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    if ( input.current.value !== "") dispatch(addTask({isComplete: false, id: nanoid(), label: input.current.value}))
    input.current.value = ""
    e.preventDefault()
}


return (
    <Form onSubmit={handleNewTask}>
        <Header>Sunset List</Header>
        <Ul>
            {tasks.map((task , i) => 
            <li key={task.id}>
                <input type="checkbox" checked={task.isComplete} onChange={() => dispatch(changeCheckedTask(task.id))}/>
                {task.label}
                <input type="button" value="Usuń" onClick={() => dispatch(removeTask(i))}/>
            </li>
            )}
        </Ul>

        <AddTaskWrapper>
            <TextInput ref={input} placeholder="Add Task"/>
            <AddCircle size={30} onClick={() => {dispatch(addTask({isComplete: false, id: nanoid(), label: input.current.value}))}}/>
        </AddTaskWrapper>

        <ClearInput type="button" value="Clear finished" onClick={() => dispatch(clearCompletedTasks(true))}/>
   </Form>
)
}