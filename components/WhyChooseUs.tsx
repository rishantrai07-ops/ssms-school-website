export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Sunshine Model School?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Academic Excellence
            </h3>
            <p>
              Strong academic foundation and student-focused learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Modern Infrastructure
            </h3>
            <p>
              Smart classrooms, labs, library, and sports facilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Holistic Development
            </h3>
            <p>
              Focus on academics, leadership, discipline, and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}