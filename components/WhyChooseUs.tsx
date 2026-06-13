export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-sm p-12">

          <h2 className="text-5xl font-bold text-center mb-4">
            Why Choose Sunshine Model School?
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We provide an environment that nurtures academic excellence,
            character development, innovation, and lifelong learning.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold mb-3">
                Academic Excellence
              </h3>

              <p className="text-gray-600">
                Strong academic foundation with student-focused
                learning and personalized guidance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🏫</div>

              <h3 className="text-2xl font-semibold mb-3">
                Modern Infrastructure
              </h3>

              <p className="text-gray-600">
                Smart classrooms, science labs, library,
                sports facilities, and digital learning tools.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🌟</div>

              <h3 className="text-2xl font-semibold mb-3">
                Holistic Development
              </h3>

              <p className="text-gray-600">
                Focus on leadership, creativity, discipline,
                teamwork, and personal growth.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}