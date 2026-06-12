"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdmissionsAdminPage() {
  const [admissions, setAdmissions] = useState<any[]>([]);

  useEffect(() => {
    fetchAdmissions();
  }, []);

  async function fetchAdmissions() {
    const { data, error } = await supabase
      .from("admission_inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setAdmissions(data || []);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Admission Inquiries
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="w-full">
          <thead className="bg-[#800020] text-white">
            <tr>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">Parent</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Class</th>
            </tr>
          </thead>

          <tbody>
            {admissions.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center">
                  No admission inquiries found.
                </td>
              </tr>
            ) : (
              admissions.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4">{item.student_name}</td>
                  <td className="p-4">{item.parent_name}</td>
                  <td className="p-4">{item.email}</td>
                  <td className="p-4">{item.phone}</td>
                  <td className="p-4">{item.class_applied}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}