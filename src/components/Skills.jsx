import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={50} />,
      color: "border-orange-500 text-orange-500",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={50} />,
      color: "border-blue-500 text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <FaJs size={50} />,
      color: "border-yellow-400 text-yellow-400",
    },
    {
      name: "React",
      icon: <FaReact size={50} />,
      color: "border-cyan-400 text-cyan-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={50} />,
      color: "border-green-500 text-green-500",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={50} />,
      color: "border-emerald-500 text-emerald-500",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={50} />,
      color: "border-purple-500 text-purple-500",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          My Skills
        </h2>

        <p className="text-center text-slate-400 mb-14 text-lg">
          Technologies and tools I use for web development
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-slate-900 border ${skill.color}
              rounded-2xl p-8 flex flex-col items-center justify-center
              hover:-translate-y-3 hover:shadow-lg transition-all duration-300`}
            >
              {skill.icon}

              <h3 className="mt-4 text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;