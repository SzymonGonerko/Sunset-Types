import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { ItemsList } from "./partials/ItemsList";


interface ToDoList {
    tasks: any;
    dispatch: any;
  }

export const ToDoList = ({tasks, dispatch}: ToDoList) => {

    return <>
 <BrowserRouter>
<nav>
    
</nav>

    <Routes>
        <Route path="/" element={<ItemsList tasks={tasks} dispatch={dispatch}/>}/>
        <Route path="/rr" element={<div>focuse</div>}/>
    </Routes>
 </BrowserRouter>
    </>
}