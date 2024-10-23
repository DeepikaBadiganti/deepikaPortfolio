"use client"
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Mermaid(props) {
  const modelRef = useRef()
  const { nodes, materials } = useGLTF('/models/pink_cute_mermaid.glb')

  
  useFrame((state,delta,xrFrame) => {
    // console.log(modelRef.current.position)
      if (modelRef.current) {
      modelRef.current.position.y = -2.5 + Math.sin(state.clock.elapsedTime) * 0.15; // Up and down motion
    }
  })

  return (
    <group  ref={modelRef} {...props} dispose={null}
    position={[0, -2.7, 0]}
    scale={[0.5, 0.5, 0.5]}
    rotation={[0.2, 0.25, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.673}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.tail}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.tshirt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.hair}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.tongue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.teeth}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.horns}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/pink_cute_mermaid.glb')