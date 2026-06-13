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
        description="Begin your journey with Sunshine Model School"
      />

      <main className="max-w-7xl mx-auto px-6 py-20">

        {/* Admission Process */}
        <section className="mb-20">

          <div className="bg-gradient-to-r from-[#800020] to-[#5c0017] text-white rounded-3xl p-12">

            <h2 className="text-5xl font-bold text-center mb-4">
              Admission Process
            </h2>

            <p className="text-center text-white/90 max-w-3xl mx-auto mb-12">
              Our admission process is simple, transparent, and designed
              to help parents complete enrollment smoothly.
            </p>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="font-bold text-xl mb-2">Step 1</h3>
                <p>Submit an admission inquiry.</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="font-bold text-xl mb-2">Step 2</h3>
                <p>Provide required documents.</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-bold text-xl mb-2">Step 3</h3>
                <p>Verification by school administration.</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-bold text-xl mb-2">Step 4</h3>
                <p>Admission confirmation.</p>
              </div>

            </div>

          </div>

        </section>

        {/* Required Documents */}
        <section className="mb-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Required Documents
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="font-semibold">
                Birth Certificate
              </h3>
            </div>

            <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-semibold">
                Previous Report Card
              </h3>
            </div>

            <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">📷</div>
              <h3 className="font-semibold">
                Passport Photos
              </h3>
            </div>

            <div className="bg-white border rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="font-semibold">
                Address Proof
              </h3>
            </div>

          </div>

        </section>

        <section className="mb-16">

  <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 text-center">

    <h2 className="text-3xl font-bold text-[#800020] mb-4">
      Download Admission Form
    </h2>

    <p className="text-gray-700 mb-6">
      Download the official admission application form and submit it to the school office.
    </p>

    <a
      href="/admission-form.pdf"
      download
      className="inline-block bg-[#800020] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#650019] transition"
    >
      📄 Download Application Form
    </a>

  </div>

</section>

        {/* Admission Form */}
        <section className="mb-20">

          <div className="text-center mb-10">

            <h2 className="text-5xl font-bold text-[#800020] mb-4">
              Admission Inquiry Form
            </h2>

            <p className="text-gray-600">
              Complete the form below and our admissions team will contact you.
            </p>

          </div>

          <div className="bg-white border rounded-3xl shadow-sm p-8">

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
                className="border p-4 rounded-xl"
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
                className="border p-4 rounded-xl"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="border p-4 rounded-xl"
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
                className="border p-4 rounded-xl"
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
                className="border p-4 rounded-xl"
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
                className="border p-4 rounded-xl"
                required
              />

              <button
                type="submit"
                className="col-span-full bg-[#800020] text-white py-4 rounded-xl font-semibold hover:bg-[#650019] transition"
              >
                Submit Admission Inquiry
              </button>

            </form>

          </div>

        </section>

        {/* Need Help */}
        <section>

          <div className="bg-gray-50 rounded-3xl p-12">

            <h2 className="text-4xl font-bold text-center mb-10 text-[#800020]">
              Need Help?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>{schoolInfo.phone}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p>{schoolInfo.email}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p>{schoolInfo.address}</p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}