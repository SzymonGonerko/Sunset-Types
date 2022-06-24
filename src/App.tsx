import React, { useEffect } from 'react';
import './App.css';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Html, OrbitControls, Environment} from '@react-three/drei'

import { ToDoList } from './components/ToDoList/ToDoList';



const App = () => {


  return (
<Canvas dpr={[30, 2]} camera={{ position: [-Math.PI/2, 0, 0] } }>
  
      <Suspense fallback={null}>
      
          <OrbitControls/>
          <Environment preset="sunset" background />

          <group position={[7,0,0]} rotation={[0,-Math.PI/2,0]} >
            <Html transform>
              <ToDoList/>
            </Html>
          </group>


      </Suspense>
</Canvas>
  );
}

export default App;
