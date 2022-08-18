/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
export function ModelCar(props) {
  const { nodes, materials } = useGLTF('/model_car.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material}/>
    </group>
  )
}

useGLTF.preload('/model_car.gltf')
