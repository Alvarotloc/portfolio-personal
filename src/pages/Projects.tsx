import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Project } from "../types/typeProject";

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
              ({ image, name, description, usedSkills, repo, url, id }) => (
                <Card
                  key={id}
                  image={image}
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
              ({ image, name, description, usedSkills, repo, url, id }) => (
                <Card
                  key={id}
                  image={image}
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
