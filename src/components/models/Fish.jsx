import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/toonstylized_fish.glb');
  const ref = useRef();

  // Animation: Make the fish float up and down
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = Math.sin(Date.now() * 0.002) * 0.5; // Adjust the speed and amplitude of the floating effect
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}
    position={[0, -2.7, 0]}
    scale={[0.5, 0.5, 0.5]}
    rotation={[0.2, 0.25, 0]}
    >
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fish_Fish_Body_0.geometry}
            material={materials.Fish_Body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fish_Black_0.geometry}
            material={materials.Black}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/toonstylized_fish.glb');
