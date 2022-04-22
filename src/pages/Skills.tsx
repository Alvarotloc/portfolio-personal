import Skill from '../components/Skill';
import { SkillTech } from '../types/typeProject';
import { useState, useEffect } from 'react';
import react from '../imgs/react.webp';
import typescript from '../imgs/typescript.webp';
import node from '../imgs/node.webp';
import express from '../imgs/express.webp';
import javascript from '../imgs/javascript.webp';
import tailwind from '../imgs/tailwind.webp';
import mysql from '../imgs/mysql.webp';
import mongodb from '../imgs/mongodb.webp';
import html from '../imgs/html.webp';
import css from '../imgs/css.webp';
import nextjs from '../imgs/nextjs.webp';
import vue from '../imgs/vue.webp';
import bootstrap from '../imgs/bootstrap.webp';


const Skills = ():JSX.Element => {
  const [skills, setSkills] = useState<SkillTech[]>([]);
  const [charging, setCharging] = useState<boolean>(true);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/skills`;
        const response = await fetch(url);
        const result = await response.json();
        setSkills(result);
        setTimeout(() => {
          setCharging(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    getSkills();
  }, []);
  const skillsArray = [react,typescript,node,express,javascript,tailwind,mysql,mongodb,html,css,nextjs,vue,bootstrap];
  return (
    <div id="skills-container">
      <h1>Skills</h1>
      <div id="all-skills">
        {skills.map(({name,experience,id}) => <Skill key={id} image={skillsArray[id - 1]} name={name} experience={experience} charging={charging}/>)}
      </div>
    </div>
  )
}

export default Skills