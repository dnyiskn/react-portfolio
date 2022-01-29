import { projects } from "../data";

function Projects() {
  return (
    <section className="container">
      <div>
        {projects.map((project) => (
          <a href={project.link} key={project.image}>
            <div>
              <img alt="gallery" src={project.image} />
              <div>
                <h2>{project.subtitle}</h2>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Projects;
