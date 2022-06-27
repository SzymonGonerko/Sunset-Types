import React, { useEffect } from 'react';
import './App.css';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Html, OrbitControls, Environment} from '@react-three/drei'

import { ToDoList } from './components/ToDoList/ToDoList';

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./app/store";



const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(
    (state: RootState) => state.tasks
  );
  


  return (
<Canvas dpr={[30, 2]} camera={{ position: [-Math.PI/2, 0, 0] } }>
  
      <Suspense fallback={null}>
      
          <OrbitControls/>
          <Environment preset="sunset" background />

          <group position={[7,0,0]} rotation={[0,-Math.PI/2,0]} >
            <Html transform>
              <ToDoList val={tasks} dispatch={dispatch}/>
            </Html>
          </group>


      </Suspense>
</Canvas>
  );
}

export default App;
