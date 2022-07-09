import React, {useEffect, useState} from 'react';
import './App.css';
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, OrbitControls, Environment} from '@react-three/drei'

import {DarkGlobalStyle, LightGlobalStyle} from './styledComponents/GlobalStyles';
import {Nightlight, LightMode} from '@styled-icons/material'
import {ToDoList} from './components/ToDoList';
import {TextTheme} from "./styledComponents/ToDoStyles"
import {Calculator} from "./components/Calculator"
import {Mesh} from "./components/Mesh"
import {Loader} from "./Loader"

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./app/store";

import Jellyfishh from "./glb/Jellyfish"
import Switch from '@mui/material/Switch';



const App: React.FC = () => {
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
  <Loader/>
<Canvas camera={{ position: [-Math.PI/2, 0, 0] } }>
      {(back === "sunset" ?<LightGlobalStyle/> : <DarkGlobalStyle/>)}
      <Suspense fallback={null}>


          <ambientLight intensity={2}/>
          <OrbitControls rotateSpeed={0.5}/>
          <Environment preset={back} background />



          <group position={[7,0,0]} rotation={[0, -Math.PI/2 ,0]} >
            <Html transform>
              <ToDoList isDarkMood={back} tasks={tasks} dispatch={dispatch}/>
            </Html>
          </group>



          <group position={[7, 5, 2.4]} rotation={[0, -Math.PI/2, 0]} >
            <Html transform>
              <div>
                <TextTheme className='textTheme'>Theme:</TextTheme>
                {back === "night" && <Nightlight className='iconTheme' size={20}/>}
                {back === "sunset" && <LightMode className='iconTheme' size={20}/>}
              </div>
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
        
 
        {back === "night" &&<Jellyfishh rotation={[-0.5, 1, 0]}  position={[0, 1.1, 2.4]} scale={30}/>}


      </Suspense>
</Canvas>
</>);
}

export default App;
