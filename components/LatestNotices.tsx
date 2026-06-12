import { notices } from "../data/notices";

export default function LatestNotices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Notices
        </h2>

        <div className="space-y-4">
          {notices.slice(0, 3).map((notice) => (
            <div
              key={notice.id}
              className="border rounded-lg p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500 mb-2">
                {notice.date}
              </p>

              <h3 className="font-semibold text-lg">
                {notice.title}
              </h3>

              <p className="text-gray-700">
                {notice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}