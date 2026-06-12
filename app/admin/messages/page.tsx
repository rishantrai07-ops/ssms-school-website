"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function MessagesAdminPage() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setMessages(data || []);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Contact Messages
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="w-full">
          <thead className="bg-[#800020] text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Message</th>
            </tr>
          </thead>

          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-6 text-center">
                  No messages found.
                </td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr key={message.id} className="border-b">
                  <td className="p-4">{message.name}</td>
                  <td className="p-4">{message.email}</td>
                  <td className="p-4">{message.subject}</td>
                  <td className="p-4">{message.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}