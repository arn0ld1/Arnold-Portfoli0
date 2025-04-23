import RevealOnScroll from "../RevealOnScroll";


const About = () => {

  const frontendSkills = ["React JS", "Redux", "Tailwindcss", "Material UI", "TypeScript", "Vue JS", "Chakra UI", "Bootstrap", "Figma Design", "Zustand"];

  const cybersecuritySkills = ["Security Principles","Business Continuity", "Disaster Recovery", "Incident Response Concepts", "Access Controls Concepts","Network Security", "Security Operations"];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
    <RevealOnScroll>
      <div
        className="max-w-3xl mx-auto px-4"
      >
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
           About Me 
        </h2>
        <div
          className="glass rounded-xl p-8 border-white/10 border hover:-transalte-y-1 transition-all "
        >
          <p className="text-gray-300 mb-6 ">
          I'm a beginner cybersecurity analyst with a strong foundation in core cybersecurity concepts, earned through the (ISC)² Certified in Cybersecurity (CC) certification. I bring a security-aware mindset and a passion for protecting digital environments, continuously expanding my knowledge of threat detection, risk mitigation, and secure system practices. Alongside my cybersecurity foundation, I also have hands-on experience in front-end web development, working with technologies like React, Redux, TailwindCSS, Chakra UI, and Vue.js. This dual background allows me to approach both web development and cybersecurity with a well-rounded perspective—writing clean, efficient code while considering application security and best practices. I’m eager to grow in the cybersecurity space, apply what I’ve learned in real-world environments, and collaborate with teams focused on building secure and user-friendly digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              Frontend Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, key) =>(
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              Cyber Security Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {cybersecuritySkills.map((tech, key) =>(
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              🏫 Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong className="text-cyan-400">B.S. in Computer Science</strong> - KABARAK University (2020-2024)
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong className="text-cyan-400">ISC2 CERTIFIED IN CYBERSECURITY (CC) </strong> - MORINGA School (2024-2025)
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong className="text-cyan-400">Certified in Python and Ethical Hacking</strong> - Udemy.com (May 2022 - Aug 2022)
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong className="text-cyan-400">Introduction to Critical Infrastructure Protection </strong> - OpswatAcademy.com (May 2023 - Aug 2023)
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong className="text-cyan-400"> Mobile Computing Program </strong> - Strathmore University, Nairobi  (Jan 2020 - April 2020)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              💼 Work Experience
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-cyan-400"> ICT Trainee at Kenya Film Comission(May 2023 - Aug 2023) </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Supported end-users through helpdesk services, resolving queries and technical 
                    issues promptly in order to ensure smooth operations in the office 
                  </li>

                  <li>
                    Participated in troubleshooting technical issues, contributing to a reduction in 
                    system downtime and to increase productivity 
                  </li>

                  <li>
                    Assisted with network installations and upgrades, improving connectivity and 
                    facilitating efficient communication channels. 
                  </li>

                  <li>
                    Assisted in the configuration and deployment of IT hardware and software, 
                    enhancing system functionality and user experience. 
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400"> IT Intern at Ecoscience & Engineering through Igap-IT solutions (March 2025 - Present) </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Supported end-users through helpdesk services, resolving queries and technical 
                    issues promptly in order to ensure smooth operations in the office 
                  </li>

                  <li>
                    Participated in troubleshooting technical issues, contributing to a reduction in 
                    system downtime and to increase productivity 
                  </li>

                  <li>
                    Assisted in the configuration and deployment of IT hardware and software, 
                    enhancing system functionality and user experience. 
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
    </section>
  )
}

export default About
