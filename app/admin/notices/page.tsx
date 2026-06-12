"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function NoticesAdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noticeDate, setNoticeDate] = useState("");
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  async function fetchNotices() {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setNotices(data || []);
  }

  async function addNotice(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase
      .from("notices")
      .insert([
        {
          title,
          description,
          notice_date: noticeDate,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    setTitle("");
    setDescription("");
    setNoticeDate("");

    fetchNotices();
  }

  async function deleteNotice(id: number) {
    const { error } = await supabase
      .from("notices")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchNotices();
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Notice Management
      </h1>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
        <form
          onSubmit={addNotice}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Notice Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-4 rounded-lg"
            required
          />

          <textarea
            placeholder="Notice Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-4 rounded-lg"
            rows={4}
            required
          />

          <input
            type="date"
            value={noticeDate}
            onChange={(e) => setNoticeDate(e.target.value)}
            className="border p-4 rounded-lg"
            required
          />

          <button
            type="submit"
            className="bg-[#800020] text-white px-6 py-3 rounded-lg"
          >
            Add Notice
          </button>
        </form>
      </div>

      <div className="space-y-4">
        {notices.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            No notices available.
          </div>
        ) : (
          notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h2 className="text-2xl font-semibold">
                {notice.title}
              </h2>

              <p className="text-gray-500 mb-2">
                {notice.notice_date}
              </p>

              <p className="mb-4">
                {notice.description}
              </p>

              <button
                onClick={() => deleteNotice(notice.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}