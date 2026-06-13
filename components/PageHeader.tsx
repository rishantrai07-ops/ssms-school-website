interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-[#800020] to-[#5c0017] text-white py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm">
          🏆 Celebrating 25 Years of Excellence
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {description}
          </p>
        )}

      </div>

    </section>
  );
}