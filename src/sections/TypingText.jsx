import { useState, useEffect } from 'react';
import { Text } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';
import * as THREE from 'three'

const TypingText = () => {
    const [displayedText, setDisplayedText] = useState('  ');
    const text = "  프론트 엔드가 사용자에게 \n제공할 수 있는 서비스 중 가장 중요한 것은 \n체험을 선사하는 것이라고 생각합니다.\n단 하나의 클릭만으로 \n지금처럼 전혀 다른 공간으로 들어오는 것 같은 기분을\n 선사하는 것처럼 말이죠.";
    const delay = 100; 

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length -1) {
                setDisplayedText((prevText) => prevText + text[i]);
                i++;
            } else {
                clearInterval(typing);
            }
        }, delay);

        return () => clearInterval(typing); // cleanup
    }, []);
    return (
        <Text 
        lineHeight={1.4}
        position-x={3}
        position-y={0.5}
        position-z={-0.3}
        fontSize={0.005}
        anchorY={"bottom"}
        textAlign='center'
        side={THREE.DoubleSide}>
            {displayedText.length > 0 ? displayedText : ' '}
            <meshBasicMaterial color={"#fff"}/>
        </Text>
        
    );
};

export default TypingText;