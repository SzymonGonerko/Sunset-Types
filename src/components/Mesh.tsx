import React from "react"

import {Sphere, MeshDistortMaterial} from '@react-three/drei'
import { propTypesSphere } from "../propTypesSphere"

interface Mesh {
    positionX?: any
    length?: number
}

export const Mesh = ({positionX, length}: Mesh) => {
    

    const lengthParam: number =   length? length: 1
    const firstParam: number =  positionX * 2 - lengthParam
    const secParam: number =    firstParam > 0 ? 0 : 3


    let randomColor = '#' + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0')


    return (          
    <Sphere position={[(firstParam > 0 ? -firstParam : firstParam) + lengthParam/2, secParam + 6, -7]} args={[0.8, 50, 200]} {...propTypesSphere} >
            <MeshDistortMaterial
            color={randomColor}
            emissive
            attach="material"
            distort={0.6}
            speed={4}
            transparent
            opacity={0.7}
            roughness={0}
            />
    </Sphere>)
}