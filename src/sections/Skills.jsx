import { SkillsContainer } from '../styled/portfolioStyled';
import Skills3DObject from './Skills3DObject';

const skillsObj = [
    { id: 1, name: "React"},
    { id: 2, name: "Javascript" },
    { id: 3, name: "Redux" },
    { id: 4, name: "Three.js" },
    { id: 5, name: "R3F" },
    { id: 6, name: "styled-\ncomponents" },
    { id: 7, name: "SASS" },
  ];

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <div className="inner">
                <h2>SKILLS</h2>
                <ul className="skill-list">
                    {skillsObj.map(item => 
                    <Skills3DObject key={item.id} item={item}/>
                    )}
                </ul>
            </div>
        </SkillsContainer>
    );
};

export default Skills;