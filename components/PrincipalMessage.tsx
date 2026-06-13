export default function PrincipalMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-sm border p-10">

          <div className="grid lg:grid-cols-3 gap-10 items-center">

            {/* Principal Photo */}
            <div className="flex justify-center">

              <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-lg bg-gray-200">

                <img
                  src="/principal.jpg"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

            {/* Message */}
            <div className="lg:col-span-2">

              <h2 className="text-4xl font-bold mb-6 text-[#800020]">
                Principal's Message
              </h2>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Welcome to Sunshine Model School. Our mission is to
                provide quality education while nurturing leadership,
                discipline, creativity, and lifelong learning.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-8">
                We believe every student possesses unique potential,
                and our goal is to help them discover, develop, and
                excel academically and personally.
              </p>

              <div>
                <h3 className="text-2xl font-semibold">
                  Mr. Basant Rai
                </h3>

                <p className="text-gray-600">
                  Principal, Sunshine Model School
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}