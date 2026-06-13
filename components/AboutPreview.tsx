export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* About School */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-10 border">

            <h2 className="text-4xl font-bold mb-6 text-[#800020]">
              About Our School
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sunshine Model School is dedicated to nurturing young minds
              through academic excellence, innovation, leadership, and
              character development. We strive to create an environment
              where every student can discover their potential and achieve
              success.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">
                  Academic Excellence
                </h3>
                <p className="text-sm text-gray-600">
                  Strong curriculum and student-centered learning.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">
                  Modern Facilities
                </h3>
                <p className="text-sm text-gray-600">
                  Labs, library, sports and technology resources.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">
                  Holistic Growth
                </h3>
                <p className="text-sm text-gray-600">
                  Focus on leadership, discipline and creativity.
                </p>
              </div>

            </div>

          </div>

          {/* Notices */}
          <div className="bg-[#800020] text-white rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Latest Notices
            </h2>

            <div className="space-y-4">

              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-medium">
                  Admissions Open 2026
                </p>
                <p className="text-sm text-gray-200">
                  Apply now for the upcoming academic session.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-medium">
                  Parent-Teacher Meeting
                </p>
                <p className="text-sm text-gray-200">
                  Scheduled for next Saturday.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-medium">
                  Annual Sports Day
                </p>
                <p className="text-sm text-gray-200">
                  Registrations are now open.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}