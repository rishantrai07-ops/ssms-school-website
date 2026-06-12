import Link from "next/link";

export default function AdminPage() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-3xl font-bold text-[#800020]">
            1
          </h2>
          <p>Admission Inquiries</p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-3xl font-bold text-[#800020]">
            3
          </h2>
          <p>Contact Messages</p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-3xl font-bold text-[#800020]">
            0
          </h2>
          <p>Active Notices</p>
        </div>

      </div>

      {/* Management Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-4">
            Admissions
          </h3>

          <p className="mb-4">
            View and manage admission inquiries.
          </p>

          <Link
            href="/admin/admissions"
            className="bg-[#800020] text-white px-4 py-2 rounded-lg inline-block"
          >
            View Admissions
          </Link>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-4">
            Contact Messages
          </h3>

          <p className="mb-4">
            View messages submitted through the website.
          </p>

          <Link
            href="/admin/messages"
            className="bg-[#800020] text-white px-4 py-2 rounded-lg inline-block"
          >
            View Messages
          </Link>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-4">
            Notices
          </h3>

          <p className="mb-4">
            Add, edit and delete notices.
          </p>

          <Link
            href="/admin/notices"
            className="bg-[#800020] text-white px-4 py-2 rounded-lg inline-block"
          >
            Manage Notices
          </Link>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-4">
            School Information
          </h3>

          <p className="mb-4">
            Update school information and contact details.
          </p>

          <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">
            Coming Soon
          </button>
        </div>

      </div>

    </div>
  );
}