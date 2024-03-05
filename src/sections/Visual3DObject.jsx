import { useFrame, useThree } from '@react-three/fiber';
import { CameraControls, MeshReflectorMaterial, Text, useTexture } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Bloom, EffectComposer} from '@react-three/postprocessing';
import { BoxGeometry, EdgesGeometry, LineBasicMaterial } from 'three';
import * as THREE from 'three'
import TypingText from './TypingText';
const Visual3DObject = ({onButton}) => {
    const [line, setLine] = useState(null)
    const refBox = useRef()
    const sphereMeshRef = useRef()
    const refText = useRef();
    const refPlane = useRef();
    const {camera} = useThree();
    const texture = useTexture({
        map: "./images/8k_stars_milky_way.jpg"
    })
    useFrame(()=>{
        refBox.current.rotation.x += 0.005
        refBox.current.rotation.y += 0.005
    })
    useEffect(() => {
        const box = new BoxGeometry()
        const edges = new EdgesGeometry(box)
        const lineMaterial = new LineBasicMaterial({ color: "#ff44ff" }) // 황금색
        setLine(<lineSegments args={[edges, lineMaterial]} />)
    }, [])
    const controls = useRef();
    const intro = async () => {
        controls.current.smoothTime = 1.2;
        controls.current.dollyTo(25);
        controls.current.dollyTo(12, true);
    }

    useEffect(()=>{
        intro();
        if (controls.current) {
            controls.current.minPolarAngle = 0; 
            controls.current.maxPolarAngle = Math.PI / 2; 
            controls.current.maxDistance = 12;
            if(onButton){ 
                controls.current.smoothTime = 1.2;
                controls.current.dampingFactor = 0.05;
                controls.current.setPosition(3,0.5,0,true);
                controls.current.setTarget(3,0.5,-0.0000001,true);
            }
        }
    },[onButton])
    
    return (
        <>
            <CameraControls ref={controls} />
            <EffectComposer>
                <Bloom 
                    intensity={1} 
                    luminanceThreshold={0.1}
                    luminanceSmoothing={0.5} />
            </EffectComposer>
            <Text
                ref={refText}
                lineHeight={1}
                font={'fonts/Gugi/Gugi-Regular.ttf'}
                position-y={-0.5}
                position-x={-3.5}
                rotation-y={degToRad(30)}
                anchorY={"bottom"}
                side={THREE.DoubleSide}
                >Frontend is{"\n"}an experience
                <meshBasicMaterial color={"#ffffff"}/>
                </Text>
                <mesh rotation-x={-Math.PI/2} position-y={-0.5} ref={refPlane}>
                <planeGeometry args={[100,100]}/>
                <MeshReflectorMaterial
                    blur={[1000,1000]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={50}
                    roughness={1}
                    depthScale={10}
                    opacity={0.1}
                    transparent
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color={"#333"}
                    metalness={0.5}
                />
                </mesh>
                <mesh position={[3,0.5,0]} ref={refBox} scale={[1.15,1.15,1.15]} >
                    <boxGeometry />
                    <meshStandardMaterial color={"#000000"} side={THREE.FrontSide} metalness={1} roughness={0}/>
                    {line}
                </mesh>
                <mesh position={[3,0.5,0]} ref={sphereMeshRef}>
                    <sphereGeometry args={[0.5,64,32]}/>
                    <meshStandardMaterial side={THREE.BackSide} map={texture.map}/>
                </mesh>
                {onButton && <TypingText/>}
                
        </>
    );
};

export default Visual3DObject;