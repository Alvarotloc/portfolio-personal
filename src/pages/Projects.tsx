import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Project } from "../types/typeProject";
import clients from '../imgs/clients.webp'
import vet from '../imgs/vet.webp'
import crypto from '../imgs/crypto.webp'
import portafolio from '../imgs/portafolio.webp'
import garden from '../imgs/garden.webp'
import rickmorty from '../imgs/rickmorty.webp'
import gif from '../imgs/gif.webp'
import indecision from '../imgs/indecision.webp'
import aldemy from '../imgs/aldemy.webp'
import freelancer from '../imgs/freelancer.webp'
import bio from '../imgs/bio.webp'
import marvel from '../imgs/marvel.webp'

const Projects = (): JSX.Element => {
  const [filter, setFilter] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtereds, setFiltereds] = useState<Project[]>([]);
  const [charging, setCharging] = useState<boolean>(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/projects`;
        const response = await fetch(url);
        const result = await response.json();
        setProjects(result);
        setCharging(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    if (filter.trim() === "") {
      return setFiltereds(projects);
    }
    setFiltereds(projects.filter((project) => filter === project.tech));
  }, [filter]);


  const images = [clients,vet,crypto,portafolio,garden,rickmorty,gif,indecision,aldemy,freelancer,bio,marvel];




  return (
    <>
      <section id="top-section">
        <h1 id="title">Projects</h1>
        <p>
          Most outstanding personal projects using web technologies, mostly
          frameworks/libraries focused on javascript on their front-end side.
        </p>
        <div id="filter">
          <label htmlFor="options" id="label-options">
            Filter by category
          </label>
          <select
            name="options"
            id="options"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- All Projects --</option>
            <option value="react">React</option>
            <option value="tailwindcss">React + Tailwind</option>
            <option value="basic">HTML and Css</option>
            <option value="vue">Vue Js</option>
            <option value="vanilla">Vanilla JS</option>
          </select>
        </div>
      </section>
      <div id="cards">
        {filtereds.length
          ? filtereds.map(
              ({name, description, usedSkills, repo, url, id }) => (
                <Card
                  key={id}
                  image={images[id - 1]}
                  name={name}
                  description={description}
                  usedSkills={usedSkills}
                  repo={repo}
                  url={url}
                  charging={charging}
                />
              )
            )
          : projects.map(
              ({ name, description, usedSkills, repo, url, id }) => (
                <Card
                  key={id}
                  image={images[id - 1]}
                  name={name}
                  description={description}
                  usedSkills={usedSkills}
                  repo={repo}
                  url={url}
                  charging={charging}
                />
              )
            )}
      </div>
    </>
  );
};

export default Projects;
