import React, { FormEvent, useRef } from "react";
import {nanoid} from "nanoid"
import { addTask, removeTask,clearCompletedTasks } from "../features/taskSlice";

import {Form, Ul, Header, AddTaskWrapper, TextInput, ClearInput, Li, CustomSwipe, CustomZoom} from "../styledComponents/ToDoStyles"
import {ThemeProvider} from "styled-components"
import {themeToDoList} from "../styledComponents/theme"

import {AddCircle, Delete, ZoomOutMap} from '@styled-icons/material'
import {Checkbox} from "../styledComponents/stylesCheckbox"

interface ToDoList {
    tasks: {isComplete: boolean; id: string; label: string}[];
    dispatch: any;
    isDarkMood?: string
  }



export const ToDoList = ({isDarkMood , tasks, dispatch}: ToDoList) => {
const input = useRef<any>(null)

const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    if ( input.current.value !== "") dispatch(addTask({isComplete: false, id: nanoid(), label: input.current.value}))
    input.current.value = ""
    e.preventDefault()
}

const handleClickCircle =  () : void  => {
    if ( input.current.value !== "") dispatch(addTask({isComplete: false, id: nanoid(), label: input.current.value}))
    input.current.value = ""
}


return (<>
    <ThemeProvider theme={(isDarkMood === "sunset" ? themeToDoList.light : themeToDoList.dark)}>
        <CustomSwipe color="#00d21b" size={35}/>
        <CustomZoom color="red" size={35}/>
    <Form onSubmit={handleNewTask}>
        
        <Header>Sunset List</Header>
        <Ul>
            {tasks.map((task , i) => 
            <Li key={task.id}>
                <Checkbox checked={task.isComplete} taskId={task.id} dispatch={dispatch}/>
                <p>{task.label}</p>
                
                <Delete size={20} onClick={() => dispatch(removeTask(i))}/>
            </Li>
            )}
        </Ul>
        
        <AddTaskWrapper>
            <TextInput ref={input} placeholder="Add Task"/>
            <AddCircle color="black" size={30} onClick={() => {handleClickCircle()}}/>
        </AddTaskWrapper>

        <ClearInput type="button" value="Clear finished" onClick={() => dispatch(clearCompletedTasks(true))}/>
   </Form>
   </ThemeProvider>
   </>
)
}