export default function Facilities() {
  const facilities = [
    "Smart Classrooms",
    "Computer Lab",
    "Library",
    "Sports Facilities",
    "Science Laboratory",
    "Transportation",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Facilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold">
                {facility}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}