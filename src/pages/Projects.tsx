const Projects = (): JSX.Element => {
  return (
      
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
        <select name="options" id="options">
          <option value="">-- All Projects --</option>
          <option value="react">React</option>
          <option value="tailwindcss">React + Tailwind</option>
          <option value="basic">HTML and Css</option>
          <option value="vue">Vue Js</option>
        </select>
      </div>
    </section>
  );
};

export default Projects;
