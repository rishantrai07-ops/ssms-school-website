export default function Stats() {
  const stats = [
    { number: "1200+", label: "Students" },
    { number: "80+", label: "Faculty Members" },
    { number: "25+", label: "Years of Excellence" },
    { number: "100%", label: "Board Results" },
  ];

  return (
    <section className="bg-[#800020] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}