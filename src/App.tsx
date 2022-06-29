import React, { useEffect, useState } from 'react';
import './App.css';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Html, OrbitControls, Environment, Sphere} from '@react-three/drei'
import Switch from '@mui/material/Switch';

import { ToDoList } from './components/ToDoList';

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./app/store";



const App = () => {
  const dispatch = useDispatch();
  const [back, setBack] = useState<any>("sunset")
  const [checked, setChecked] = React.useState(true);
  const tasks: any[] = useSelector(
    (state: RootState) => state.tasks
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setBack((prev: {}) => (prev === "sunset"? "night": "sunset"))
  };




  return (
<Canvas camera={{ position: [-Math.PI/2, 0, 0] } }>
  
      <Suspense fallback={null}>
      
          <OrbitControls/>
          <Environment preset={back} background />

          <group position={[7,0,0]} rotation={[0,-Math.PI/2,0]} >
            <Html transform>
              <ToDoList tasks={tasks} dispatch={dispatch}/>
            </Html>
          </group>

          <group position={[7,5,2]} rotation={[0, -Math.PI/2, 0]} >
            <Html transform>
            <Switch
              checked={checked}
              onChange={handleChange}
            />
            </Html>
          </group>


      </Suspense>
</Canvas>
  );
}

export default App;
