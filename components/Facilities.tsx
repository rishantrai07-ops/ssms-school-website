export default function Facilities() {
  const facilities = [
    {
      icon: "🖥️",
      title: "Smart Classrooms",
      description:
        "Interactive and technology-enabled classrooms for engaging learning.",
    },
    {
      icon: "💻",
      title: "Computer Lab",
      description:
        "Modern computer systems with internet access and practical learning.",
    },
    {
      icon: "📚",
      title: "Library",
      description:
        "Extensive collection of books, journals, and digital resources.",
    },
    {
      icon: "⚽",
      title: "Sports Facilities",
      description:
        "Indoor and outdoor sports facilities promoting fitness and teamwork.",
    },
    {
      icon: "🧪",
      title: "Science Laboratory",
      description:
        "Well-equipped laboratories for practical scientific exploration.",
    },
    {
      icon: "🚌",
      title: "Transportation",
      description:
        "Safe and reliable transportation services covering nearby areas.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#800020] rounded-3xl p-12 text-white">

          <h2 className="text-5xl font-bold text-center mb-4">
            Our Facilities
          </h2>

          <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
            We provide a modern learning environment with facilities
            designed to support academic excellence and student growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="bg-white text-black rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-4">
                  {facility.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {facility.title}
                </h3>

                <p className="text-gray-600">
                  {facility.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}