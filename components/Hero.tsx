export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#800020] to-[#5c0017] text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-6">
  🏆 Celebrating 25 Years of Excellence
</div>

<p className="uppercase tracking-[0.3em] text-gray-200 mb-4">
  Welcome To Sunshine Model School
</p>

<h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
  Building Future Leaders Through
  <span className="block text-yellow-300">
    Excellence In Education
  </span>
</h1>

            <p className="text-xl text-gray-100 mb-10 max-w-2xl">
              Sunshine Model School empowers students through
              academic excellence, character development,
              innovation, and holistic learning experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">

              <a
                href="/admissions"
                className="bg-white text-[#800020] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Apply Now
              </a>

              <a
                href="/about"
                className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#800020] transition"
              >
                Learn More
              </a>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div>
                <h3 className="text-3xl font-bold">400+</h3>
                <p className="text-gray-200">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-gray-200">Teachers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-gray-200">Years</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-gray-200">Results</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="hidden lg:flex justify-center">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 w-full max-w-lg">

              <div className="bg-white/10 rounded-2xl h-[350px] flex items-center justify-center text-center">

                <div>
                  <div className="text-7xl mb-4">
                    🏫
                  </div>

                  <h2 className="text-3xl font-bold mb-2">
                    Sunshine Model School
                  </h2>

                  <p className="text-gray-200">
                    School Building Image Here
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}