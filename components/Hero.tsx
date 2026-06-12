export default function Hero() {
  return (
    <section className="bg-[#800020] text-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-widest mb-4">
          Welcome To
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Sunshine Model School
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          Nurturing young minds through academic excellence,
          innovation, discipline, and character development.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-[#800020] px-6 py-3 rounded-lg font-semibold">
            Apply Now
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}