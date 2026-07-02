function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-5xl font-bold text-white mb-10">
        Contact Me
      </h2>

      <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 shadow-lg text-center max-w-xl w-full">

        {/* Email */}
        <p className="text-slate-300 text-lg mb-6">
          Email:{" "}
          <a
            href="mailto:mshoaib6307181@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition duration-300"
          >
            mshoaib6307181@gmail.com
          </a>
        </p>

        {/* Phone Number */}
        <p className="text-slate-300 text-lg mb-6">
          Phone:{" "}
          <a
            href="tel:+923008143370"
            className="text-cyan-400 hover:text-cyan-300 transition duration-300"
          >
            0300-8143370
          </a>
        </p>

        {/* GitHub */}
        <p className="text-slate-300 text-lg mb-6">
          GitHub:{" "}
          <a
            href="https://github.com/mehar-shoaib-arian"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition duration-300"
          >
            github.com/mehar-shoaib-arian
          </a>
        </p>

        {/* Location */}
        <p className="text-slate-300 text-lg">
          Location:{" "}
          <span className="text-cyan-400">
            Pakistan
          </span>
        </p>

      </div>
    </section>
  );
}

export default Contact;