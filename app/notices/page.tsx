"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import NoticeCard from "../../components/NoticeCard";
import { supabase } from "../../lib/supabase";

export default function NoticesPage() {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  async function fetchNotices() {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("notice_date", { ascending: false });

    if (!error && data) {
      setNotices(data);
    }
  }

  return (
    <>
      <PageHeader
        title="School Notices"
        description="Stay updated with the latest announcements, events, and important information."
      />

      <main className="max-w-7xl mx-auto px-6 py-20">

        {/* Notice Summary */}
        <section className="mb-12">

          <div className="bg-gradient-to-r from-[#800020] to-[#5c0017] text-white rounded-3xl p-10 text-center">

            <div className="text-6xl mb-4">
              📢
            </div>

            <h2 className="text-4xl font-bold mb-3">
              Latest School Announcements
            </h2>

            <p className="text-white/90 text-lg">
              {notices.length} Active Notice
              {notices.length !== 1 ? "s" : ""}
            </p>

          </div>

        </section>

        {/* Notices List */}
        <section>

          {notices.length === 0 ? (

            <div className="bg-white rounded-3xl border p-12 text-center shadow-sm">

              <div className="text-7xl mb-4">
                📭
              </div>

              <h2 className="text-3xl font-bold mb-3 text-[#800020]">
                No Notices Available
              </h2>

              <p className="text-gray-500">
                New announcements and updates will appear here.
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {notices.map((notice) => (
                <NoticeCard
                  key={notice.id}
                  title={notice.title}
                  date={notice.notice_date}
                  description={notice.description}
                />
              ))}

            </div>

          )}

        </section>

      </main>
    </>
  );
}