/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import url from "./Jellyfish.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
    
    actions.float.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="ctrl" position={[0, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="center1">
            <group name="B_body">
              <group name="B_body_1" position={[0, 0.14, -0.29]} rotation={[-0.14, 0, 0]}>
                <group name="B_body_2">
                  <group name="B_body_3" />
                </group>
              </group>
            </group>
            <group name="BL_tentacle_1" position={[0.18, -0.09, 0.05]} rotation={[0.06, 0.11, -0.03]}>
              <group name="BL_tentacle_2" position={[0.12, -0.08, -0.11]} rotation={[-0.19, -0.2, -0.07]}>
                <group name="BL_tentacle_3" position={[1.06, 0.06, 0.07]} rotation={[0.02, -0.36, -0.05]} />
              </group>
            </group>
            <group name="BR_tentacle_1" position={[-0.24, -0.04, 0.04]} rotation={[0.06, -0.12, 0.15]}>
              <group name="BR_tentacle_2" position={[-0.24, -0.06, -0.16]} rotation={[-0.2, 0.38, 0.14]}>
                <group name="BR_tentacle_3" position={[-1.04, -0.29, 0.03]} rotation={[-0.14, 0.32, 0.35]} />
              </group>
            </group>
            <group name="F_body">
              <group name="F_body_1" position={[0, -0.14, -0.3]} rotation={[0.14, 0, 0]}>
                <group name="F_body_2">
                  <group name="F_body_3" />
                </group>
              </group>
            </group>
            <group name="FL_tentacle_1" position={[0.23, 0.1, 0.06]} rotation={[-0.07, 0.14, 0.02]}>
              <group name="FL_tentacle_2" position={[0.16, 0.09, -0.13]} rotation={[0.19, -0.3, 0.04]}>
                <group name="FL_tentacle_3" position={[1.04, 0.25, 0.04]} rotation={[0.09, -0.36, 0]} />
              </group>
            </group>
            <group name="FR_tentacle_1" position={[-0.14, 0.07, 0.04]} rotation={[-0.04, -0.09, -0.01]}>
              <group name="FR_tentacle_2" position={[-0.06, 0.08, -0.09]} rotation={[0.11, 0.17, 0.06]}>
                <group name="FR_tentacle_3" position={[-1.93, -0.51, 0.54]} rotation={[-0.22, 0.7, 0.06]} />
              </group>
            </group>
            <group name="L_body">
              <group name="L_body_1" position={[-0.14, 0, -0.29]} rotation={[0, -0.14, 0]}>
                <group name="L_body_2">
                  <group name="L_body_3" />
                </group>
              </group>
            </group>
            <group name="R_body">
              <group name="R_body_1" position={[0.14, 0, -0.29]} rotation={[0, 0.14, 0]}>
                <group name="R_body_2">
                  <group name="R_body_3" />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.center} />
          <skinnedMesh name="jellyfish" geometry={nodes.jellyfish.geometry} material={materials.aiStandardSurface1} skeleton={nodes.jellyfish.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Jellyfish.glb')
