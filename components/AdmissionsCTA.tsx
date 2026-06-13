import Link from "next/link";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#800020] text-white rounded-3xl p-12 text-center shadow-lg">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Admissions Open for 2026-27
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join Sunshine Model School and provide your child
            with an environment focused on academic excellence,
            innovation, leadership, and holistic development.
          </p>

          <Link
            href="/contact"
            className="inline-block border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#800020] transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}