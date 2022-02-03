import { projects } from "../data";

function Projects() {
  return (
    <section className="container flex max-w-screen-lg mx-auto">
      <div className="">
        {projects.map((project) => (
          <a href={project.link} key={project.image}>
            <div>
              <img
                className="p-5 max-w-5/6"
                alt="gallery"
                src={project.image}
              />
              <div className="p-5 mb-5 max-w-5/6 shadow-xl rounded">
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
