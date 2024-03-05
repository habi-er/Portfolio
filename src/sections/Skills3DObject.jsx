import React from "react";
import { Canvas} from "@react-three/fiber";
import Skills3DObjcetList from './Skills3DObjcetList';



const Skills3DObject = ({item}) => {
  return (
    <li>
    <Canvas camera={{ position: [0, 0, 220]}}>
      <Skills3DObjcetList item={item}/>
    </Canvas>
    </li>
  );
};

export default Skills3DObject;