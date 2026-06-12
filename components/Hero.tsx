export default function Hero() {
  return (
    <section className="bg-[#800020] text-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-widest mb-4 text-gray-200">
              Welcome To
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Sunshine Model School
            </h1>

            <p className="text-xl mb-8 leading-relaxed">
              Empowering students through academic excellence,
              innovation, discipline, and holistic development.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/admissions"
                className="bg-white text-[#800020] px-6 py-3 rounded-lg font-semibold"
              >
                Apply Now
              </a>

              <a
                href="/about"
                className="border border-white px-6 py-3 rounded-lg"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 w-full max-w-md text-center">
              <h2 className="text-3xl font-bold mb-6">
                Excellence in Education
              </h2>

              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  📚 Quality Education
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  🏆 Academic Excellence
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  🌱 Holistic Development
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  💡 Innovation & Creativity
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}