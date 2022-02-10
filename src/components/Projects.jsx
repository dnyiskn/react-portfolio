import { projects } from "../data";

function Projects() {
  return (
    <section className="container bg-slate-50 shadow-sm rounded max-w-screen-lg p-5 mx-auto">
      <h2 className="text-4xl mb-5">Projects</h2>
      <div className="lg:flex">
        {projects.map((project) => (
          <a href={project.link} key={project.image}>
            <div className="mx-5 max-w-5/6">
              <img
                className="max-w-full mb-5"
                alt="gallery"
                src={project.image}
              />
              <div className="mb-5 max-w-5/6">
                <h4 className="text-slate-400">{project.subtitle}</h4>
                <h3 className="text-xl font-bold mb-5">{project.title}</h3>
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
