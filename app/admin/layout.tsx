"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import LogoutButton from "../../components/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        window.location.replace("/login");
        return;
      }

      setLoading(false);
    }

    checkUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">
          Loading Admin Panel...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-[#800020] text-white min-h-screen p-6">

          <h2 className="text-2xl font-bold mb-10">
            SSMS Admin
          </h2>

          <nav className="space-y-4">

            <Link
              href="/admin"
              className="block hover:text-gray-200"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/admissions"
              className="block hover:text-gray-200"
            >
              Admissions
            </Link>

            <Link
              href="/admin/messages"
              className="block hover:text-gray-200"
            >
              Messages
            </Link>

            <Link
              href="/admin/notices"
              className="block hover:text-gray-200"
            >
              Notices
            </Link>

            <Link
              href="/admin/gallery"
              className="block hover:text-gray-200"
            >
              Gallery
            </Link>

          </nav>

          <div className="mt-10">
            <LogoutButton />
          </div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>
    </div>
  );
}