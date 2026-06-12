import PageHeader from "../../components/PageHeader";

export default function VisionPage() {
  return (
    <>
      <PageHeader
        title="Our Vision"
        description="Building future-ready students through quality education and values."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-white rounded-xl shadow-sm p-10 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            School Vision
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Sunshine Model School aims to nurture responsible,
            confident, and compassionate learners who are equipped
            with knowledge, skills, and values to contribute
            positively to society and excel in a rapidly changing
            world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3">
              Academic Excellence
            </h3>

            <p>
              Encourage curiosity, creativity, and a lifelong love
              for learning through quality education.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3">
              Character Building
            </h3>

            <p>
              Develop integrity, discipline, leadership, and
              respect for others.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3">
              Holistic Growth
            </h3>

            <p>
              Promote physical, emotional, social, and intellectual
              development for every student.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}