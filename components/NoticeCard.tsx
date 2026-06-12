interface NoticeCardProps {
  title: string;
  date: string;
  description: string;
}

export default function NoticeCard({
  title,
  date,
  description,
}: NoticeCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500 mb-2">
        {date}
      </p>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}