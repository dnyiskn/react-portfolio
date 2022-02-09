import { projects } from "../data";

function Projects() {
  return (
    <section className="container  max-w-screen-lg p-5 mx-auto">
      <h2 className="text-4xl mb-5">Projects</h2>
      <div className="lg:flex lg:gap-x-4">
        {projects.map((project) => (
          <a href={project.link} key={project.image}>
            <div className="max-w-5/6">
              <img className="max-w-full" alt="gallery" src={project.image} />
              <div className="my-5 max-w-5/6 border-solid border-slate-50 rounded">
                <h4 className="text-slate-400">{project.subtitle}</h4>
                <h3 className="text-xl font-bold">{project.title}</h3>
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
