import PageHeader from "../../components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Sunshine Model School"
        description="Celebrating 25+ Years of Excellence in Education"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* School Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <div className="h-[500px] bg-[#800020] text-white flex flex-col items-center justify-center text-center p-8">

                <div className="text-8xl mb-6">
                  🏫
                </div>

                <h3 className="text-3xl font-bold mb-3">
                  Sunshine Model School
                </h3>

                <p className="text-white/80">
                  Replace this section with a real school photo
                </p>

              </div>
            </div>

            {/* Story Content */}
            <div>

              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-4">
                🏆 Celebrating 25+ Years
              </div>

              <h2 className="text-5xl font-bold text-[#800020] mb-6">
                Our Story
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-8">

                <p>
                  Sunshine Model School has been a center of learning,
                  growth, and excellence for more than twenty-five years.
                  Since its establishment, the school has remained
                  committed to providing quality education while nurturing
                  the intellectual, emotional, social, and moral
                  development of every student.
                </p>

                <p>
                  We believe that education extends beyond academic
                  achievement. Our learning environment encourages
                  curiosity, creativity, leadership, critical thinking,
                  and lifelong learning while helping students build the
                  confidence required to succeed in a changing world.
                </p>

                <p>
                  Through academics, sports, cultural activities,
                  community engagement, and modern teaching practices,
                  we strive to shape responsible citizens and future
                  leaders who contribute positively to society.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#800020] text-white rounded-3xl p-10 shadow-lg">

              <h2 className="text-3xl font-bold mb-6">
                Our Vision
              </h2>

              <p className="leading-8 text-lg">
                To inspire lifelong learners, responsible citizens,
                and future leaders who contribute positively to society
                through knowledge, innovation, character, and values.
              </p>

            </div>

            <div className="bg-white border rounded-3xl p-10 shadow-sm">

              <h2 className="text-3xl font-bold mb-6 text-[#800020]">
                Our Mission
              </h2>

              <p className="leading-8 text-lg text-gray-700">
                To provide quality education in a safe, inclusive,
                and stimulating environment that encourages academic
                excellence, creativity, leadership, discipline,
                and personal growth for every student.
              </p>

            </div>

          </div>

        </section>

        {/* 25 Years Section */}
        <section>

          <div className="bg-gray-50 rounded-3xl p-12 text-center">

            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-bold mb-6">
              🏆 Established 2000 • Celebrating 25+ Years
            </div>

            <h2 className="text-5xl font-bold mb-6 text-[#800020]">
              A Legacy of Excellence
            </h2>

            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-8 mb-12">
              For more than two decades, Sunshine Model School has
              remained dedicated to academic excellence, student success,
              and holistic development. This milestone reflects the trust
              of parents, the dedication of teachers, and the achievements
              of generations of students who have been part of our journey.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-4xl font-bold text-[#800020] mb-2">
                  25+
                </h3>
                <p>Years of Excellence</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-4xl font-bold text-[#800020] mb-2">
                  400+
                </h3>
                <p>Students</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-4xl font-bold text-[#800020] mb-2">
                  15+
                </h3>
                <p>Dedicated Teachers</p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}