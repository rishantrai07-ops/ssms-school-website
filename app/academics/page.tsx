import PageHeader from "../../components/PageHeader";

export default function AcademicsPage() {
  const programs = [
    {
      title: "Primary School",
      classes: "Classes Nursery - U.K.G",
      icon: "📚",
      description:
        "Building strong foundations in literacy, numeracy, creativity, values, and lifelong learning.",
    },
    {
      title: "Middle School",
      classes: "Classes I - V",
      icon: "🎓",
      description:
        "Encouraging critical thinking, exploration, collaboration, and academic growth.",
    },
    {
      title: "Secondary School",
      classes: "Classes VI - VIII",
      icon: "🏆",
      description:
        "Preparing students for board examinations, higher education, and future careers.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Academics"
        description="Empowering Students Through Knowledge, Innovation, and Excellence"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">

        {/* Introduction */}
        <section className="mb-20">

  <div className="bg-gradient-to-r from-[#800020] to-[#5c0017] text-white rounded-3xl p-12 md:p-16 shadow-xl">

    <div className="text-center max-w-4xl mx-auto">

      <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-6">
        🎓 Excellence in Learning
      </div>

      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Academic Excellence
      </h2>

      <p className="text-xl text-white/90 leading-9">
        At Sunshine Model School, we provide a balanced and
        comprehensive curriculum that fosters academic excellence,
        creativity, leadership, and lifelong learning. Our teaching
        approach encourages students to think critically, solve
        problems, and develop the skills required for future success.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-12">

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">📚</div>
        <h3 className="font-semibold text-xl">
          Strong Curriculum
        </h3>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">💡</div>
        <h3 className="font-semibold text-xl">
          Critical Thinking
        </h3>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">🚀</div>
        <h3 className="font-semibold text-xl">
          Future Ready
        </h3>
      </div>

    </div>

  </div>

</section>

        {/* Academic Programs */}
        <section className="mb-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Academic Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-3xl shadow-sm border p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="text-5xl mb-4">
                  {program.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#800020] mb-2">
                  {program.title}
                </h3>

                <p className="font-medium text-gray-500 mb-4">
                  {program.classes}
                </p>

                <p className="text-gray-700">
                  {program.description}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* Teaching Methodology */}
        <section className="mb-20">

          <div className="bg-[#800020] text-white rounded-3xl p-12">

            <h2 className="text-4xl font-bold text-center mb-10">
              Our Teaching Methodology
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-4xl mb-4">💡</div>

                <h3 className="text-2xl font-semibold mb-3">
                  Interactive Learning
                </h3>

                <p>
                  Engaging lessons that encourage participation,
                  collaboration, and curiosity.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-4xl mb-4">🔬</div>

                <h3 className="text-2xl font-semibold mb-3">
                  Practical Education
                </h3>

                <p>
                  Hands-on experiences through laboratories,
                  projects, and activities.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-4xl mb-4">🌟</div>

                <h3 className="text-2xl font-semibold mb-3">
                  Holistic Development
                </h3>

                <p>
                  Equal emphasis on academics, values,
                  leadership, sports, and creativity.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Student Development */}
        <section>

          <div className="bg-gray-50 rounded-3xl p-12">

            <h2 className="text-4xl font-bold text-center mb-10 text-[#800020]">
              Student Development
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">🎭</div>
                <h3 className="font-semibold">
                  Cultural Activities
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">⚽</div>
                <h3 className="font-semibold">
                  Sports & Games
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="font-semibold">
                  Technology Skills
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-semibold">
                  Leadership Training
                </h3>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}