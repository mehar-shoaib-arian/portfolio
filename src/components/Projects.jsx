function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-5xl font-bold text-white mb-10">
        Projects
      </h2>

      <div className="max-w-4xl w-full">

        <div className="bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-cyan-400">
            Smart Car Rental System
          </h3>

          <p className="text-slate-300 mt-4">
            MERN Stack based car rental platform with
            authentication, booking management and admin panel.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;