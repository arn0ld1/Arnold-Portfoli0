import RevealOnScroll from "../RevealOnScroll"


const Projects = () => {
  return (
    <section id='projects' className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Electronic Court Task Manager Web Application</h3>
            <p className="text-gray-400 mb-4">
              A MERN-Stack Task Manager Web Application designed specifically for use by Court Officials as they navigate their worklives. Created using ReactJs and Tailwindcss for the front end, ExpressJs and NodeJs for the Backend and the use of MongoDB Database.
            </p>
            <div className="flex flex-wrap gap-2 mb-4"> 
              {["React", "MongoDB", "Tailwind CSS" , "NodeJS", "Express"].map((tech, key) =>(
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ) )}
              <div 
                className="flex justify-between items-center"
              >
                <a 
                  href="https://github.com/arn0ld1/MyApp"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                   View Project 👉 
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Social Media Clone Web Application</h3>
            <p className="text-gray-400 mb-4">
              An Instagram clone application implemented with Google Firebase serving as the Database.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Firebase", "NodeJS", "Express"].map((tech, key) =>(
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ) )}
              <div 
                className="flex justify-between items-center"
              >
                <a 
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                   View Project 👉 
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </RevealOnScroll>
    </section>
  )
}

export default Projects
