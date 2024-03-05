import React, { useMemo, useRef } from 'react';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from "three";
import { useFrame, useThree } from '@react-three/fiber';
const createGeometry = distance => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < 750; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);

    vertices.push(
      distance * Math.sin(theta) * Math.cos(phi),
      distance * Math.sin(theta) * Math.sin(phi),
      distance * Math.cos(theta)
    );
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

  return geometry;
};


const Particles = React.forwardRef((props, ref) => {
  const { size } = useThree();
  const distance = Math.min(130);
  const geometry = useMemo(() => createGeometry(distance), [distance]);
  const material = new THREE.PointsMaterial({ color: "#ff44ff", size: 2 });
  return( 
        <group ref={ref} >
          <points geometry={geometry} material={material} />;
        </group>
        );
      });


const Skills3DObjcetList = ({item}) => {
  const particlesRef = useRef()
useFrame(()=>{
  particlesRef.current.rotation.y += 0.002
})
    return (
        <>
        <OrbitControls />
        <ambientLight intensity={30} />
        <group>
        <Particles ref={particlesRef} />
          <Text color={"#00ffa2"} font={'fonts/Gugi/Gugi-Regular.ttf'} fontSize={50} fontWeight={800} textAlign='center'>
            {item.name}
          </Text>
        </group>
        </>
    );
};

export default Skills3DObjcetList;