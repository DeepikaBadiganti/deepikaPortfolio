"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Robo(props) {
  const { nodes, materials } = useGLTF("/models/bb8_droid.glb");
  const roboRef = useRef(); // Reference to the Robo model
  const rotateSpeed = 0.006; // Speed of rotation
  const rotationLimit = Math.PI / 6; // Limit for rotation


  useEffect(() => {
    if (roboRef.current) {
      roboRef.current.rotation.y = Math.PI; // Reset the initial Y-axis rotation to 0
    }
  }, []);

  useFrame((state, delta) => {
    if (roboRef.current) {
      roboRef.current.rotation.y += rotateSpeed * Math.sin(state.clock.elapsedTime * 1); // Smooth oscillation
    }
  });

  

  return (
    <group
      ref={roboRef}
      {...props}
      dispose={null}
      scale={[0.7, 0.7, 0.7]} // Adjusted size for larger Robo
      position={[0, -3.5, -3]} // Positioning Robo to the left side
      rotation={[0.2, Math.PI, 0]} 
    //   className="robo-animation"
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.m7_ref}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/bb8_droid.glb");
