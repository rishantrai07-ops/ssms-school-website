"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { schoolInfo } from "../../lib/SchoolData";
import { supabase } from "../../lib/supabase";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    student_name: "",
    parent_name: "",
    email: "",
    phone: "",
    class_applied: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("admission_inquiries")
      .insert([formData]);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Admission inquiry submitted successfully!");

    setFormData({
      student_name: "",
      parent_name: "",
      email: "",
      phone: "",
      class_applied: "",
      address: "",
    });
  };

  return (
    <>
      <PageHeader
        title="Admissions"
        description="Begin your journey with Sunshine Model School."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Step 1</h3>
              <p>Submit an admission inquiry.</p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Step 2</h3>
              <p>Provide required documents.</p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Step 3</h3>
              <p>Verification by school administration.</p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Step 4</h3>
              <p>Admission confirmation.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Required Documents
          </h2>

          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-3">
              <li>✓ Birth Certificate</li>
              <li>✓ Previous School Report Card</li>
              <li>✓ Passport Size Photographs</li>
              <li>✓ Address Proof</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Admission Inquiry Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              placeholder="Student Name"
              value={formData.student_name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  student_name: e.target.value,
                })
              }
              className="border p-4 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Parent Name"
              value={formData.parent_name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  parent_name: e.target.value,
                })
              }
              className="border p-4 rounded-lg"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="border p-4 rounded-lg"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="border p-4 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Class Applying For"
              value={formData.class_applied}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  class_applied: e.target.value,
                })
              }
              className="border p-4 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: e.target.value,
                })
              }
              className="border p-4 rounded-lg"
              required
            />

            <button
              type="submit"
              className="bg-[#800020] text-white px-8 py-3 rounded-lg col-span-full"
            >
              Submit Inquiry
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            Need Help?
          </h2>

          <div className="bg-gray-50 rounded-xl p-8">
            <p><strong>Phone:</strong> {schoolInfo.phone}</p>
            <p><strong>Email:</strong> {schoolInfo.email}</p>
            <p><strong>Address:</strong> {schoolInfo.address}</p>
          </div>
        </section>

      </div>
    </>
  );
}