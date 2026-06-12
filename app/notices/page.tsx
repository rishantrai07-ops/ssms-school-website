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
        description="Stay updated with the latest announcements."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-6">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              title={notice.title}
              date={notice.notice_date}
              description={notice.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}