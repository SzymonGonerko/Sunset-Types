import React, { useEffect, useState } from 'react';
import './App.css';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Html, OrbitControls, Environment} from '@react-three/drei'
import Switch from '@mui/material/Switch';
import { DarkGlobalStyle, LightGlobalStyle } from './styledComponents/GlobalStyles';
import {Swipe} from '@styled-icons/material'
import { ToDoList } from './components/ToDoList';
import {Calculator} from "./components/Calculator"
import {Mesh} from "./components/Mesh"

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./app/store";






const App = () => {
  const dispatch = useDispatch();
  const [back, setBack] = useState<any>("night")
  const [checked, setChecked] = useState(true);
  const [meshes, setMeshes]: any[] = useState([])

  const tasks: any[] = useSelector(
    (state: RootState) => state.tasks
  );

  const operations: {
    display?: string;
    operator?: string;
    expression?: string[];
    sumInSky?: boolean
    elementsInSky?: any[]} = useSelector((state: RootState) => state.operations)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setBack((prev: {}) => (prev === "sunset"? "night": "sunset"))
  };

useEffect(() => {
  setMeshes((prev: number[]) => operations.elementsInSky)
}, [operations.sumInSky, operations.elementsInSky])





  return (<>
<Canvas camera={{ position: [-Math.PI/2, 0, 0] } }>
  {(back === "sunset" ?<LightGlobalStyle/> : <DarkGlobalStyle/>)}
      <Suspense fallback={null}>
        <ambientLight intensity={2}/>

        
          <OrbitControls/>
          <Environment preset={back} background />

          {/* <group position={[7, 4.5 ,0]} rotation={[0,-Math.PI/2,0]} >
            <Html transform>
              <Swipe style={{opacity: "0.5"}} size={40}/>
            </Html>
          </group> */}

          <group position={[7,0,0]} rotation={[0,-Math.PI/2,0]} >
            <Html transform>
              <ToDoList isDarkMood={back} tasks={tasks} dispatch={dispatch}/>
            </Html>
          </group>

          <group position={[7, 5, 2.4]} rotation={[0, -Math.PI/2, 0]} >
            <Html transform>
            <Switch
              checked={checked}
              onChange={handleChange}
            />
            </Html>
          </group>
          
          <group position={[0,0,-9]} rotation={[0, 0, 0]} >
            <Html transform>
             <Calculator isDarkMood={back} operations={operations} dispatch={dispatch}/>
            </Html>
          </group>          

        {operations.sumInSky && operations.elementsInSky?.map((_:number, index : React.Key) => <Mesh length={meshes.length} positionX={index} key={index}/>)}
          
          

      </Suspense>
      
</Canvas>
</>);
}

export default App;
