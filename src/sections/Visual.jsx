import { Canvas, useFrame } from '@react-three/fiber';
import { VisualContainer } from '../styled/portfolioStyled';
import { CameraControls, Environment, MeshReflectorMaterial, OrbitControls, SpotLight, Text } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';
import { useRef, useState } from 'react';
import Visual3DObject from './Visual3DObject.jsx'
const Visual = () => {
    const [onButton,setOnButton] = useState(false)

    const clickButton = () =>{
        setOnButton(!onButton)
    }
    return (
        <VisualContainer id='visual'>
            <div className='space'></div>
            <Canvas shadows camera={{position: [0,0,12], fov : 42}}>
                <color attach={"background"} args={["#171720"]}/>
                <fog attach="fog" args={["#171720", 8, 20]}/>
                <Visual3DObject onButton={onButton}/>
                <Environment preset='sunset'/>
            </Canvas>
            {onButton || <div className='button'>
                <button type='button' onClick={clickButton}> Experience</button>
            </div> }
           
        </VisualContainer>
    );
};

export default Visual;