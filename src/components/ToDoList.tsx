import React from "react";
import {useState, useRef} from 'react';


export const ToDoList = () => {
    const [state, setState] = useState<boolean>(false)

    return <>
    <div style={{background: "rgba(255, 0,0, 0.5)"}}>
        <h1>To do List</h1>
              <button onClick={() => setState(prev => !prev)}>Click Me</button>
              {state &&<h2>Clicked</h2>}
              <textarea style={{width: "100px", height: "100px"}}/>
              </div>
    </>
}