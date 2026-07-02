import hero from "../assets/hero.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <p className="text-cyan-400 text-xl mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Muhammad
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Shoaib
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-5">
              Web Developer & Computer Science Student
            </h2>

            <p className="text-slate-400 mt-8 text-lg leading-9 max-w-xl">
              Passionate about building modern, responsive and
              user-friendly web applications using React,
              Node.js, Express.js and MongoDB.
            </p>

            <div className="flex items-center gap-6 mt-10">

              <button className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold text-white hover:bg-cyan-600 transition duration-300 hover:scale-105">
                Download CV
              </button>

              <a
                href="https://github.com/mehar-shoaib-arian"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-4xl text-slate-300 hover:text-cyan-400 transition duration-300" />
              </a>

              <FaLinkedin className="text-4xl text-slate-300 hover:text-cyan-400 transition duration-300 cursor-pointer" />

            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-20"></div>

              <img
                src={hero}
                alt="Muhammad Shoaib"
                className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.4)]"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;