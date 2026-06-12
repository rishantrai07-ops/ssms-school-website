export default function QuickStats() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-3xl font-bold text-[#800020]">1200+</h3>
            <p>Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#800020]">80+</h3>
            <p>Faculty</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#800020]">25+</h3>
            <p>Years</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#800020]">100%</h3>
            <p>Success Rate</p>
          </div>

        </div>
      </div>
    </section>
  );
}