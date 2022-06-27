import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { ItemsList } from "./partials/ItemsList";


interface ToDoList {
    val: any;
    dispatch: any;
  }

export const ToDoList = ({val, dispatch}: ToDoList) => {

    return <>
 <BrowserRouter>
<nav>
    
</nav>

    <Routes>
        <Route path="/" element={<ItemsList val={val} dispatch={dispatch}/>}/>
        <Route path="/rr" element={<div>focuse</div>}/>
    </Routes>
 </BrowserRouter>
    </>
}