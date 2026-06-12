interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-[#800020] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}