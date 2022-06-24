import React from "react";
import {useState, useRef} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { ItemsList } from "./partials/ItemsList";


export const ToDoList = () => {
    const [state, setState] = useState<boolean>(false)

    return <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<ItemsList/>}/>
    <Route path="/rr" element={<div>focuse</div>}/>
</Routes>
 </BrowserRouter>
    </>
}