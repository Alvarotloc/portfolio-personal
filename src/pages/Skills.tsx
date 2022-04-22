import Skill from '../components/Skill';
import { SkillTech } from '../types/typeProject';
import { useState, useEffect } from 'react';

const Skills = ():JSX.Element => {
  const [skills, setSkills] = useState<SkillTech[]>([]);
  const [charging, setCharging] = useState<boolean>(true);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const url = `http://localhost:4000/skills`;
        const response = await fetch(url);
        const result = await response.json();
        setSkills(result);
        setCharging(false);
      } catch (error) {
        console.log(error);
      }
    };
    getSkills();
  }, []);
  return (
    <div id="skills-container">
      <h1>Skills</h1>
      <div id="all-skills">
        {skills.map(({image,name,experience}) => <Skill key={image} image={image} name={name} experience={experience} charging={charging}/>)}
      </div>
    </div>
  )
}

export default Skills