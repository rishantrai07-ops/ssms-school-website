"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { schoolInfo } from "../../lib/SchoolData";
import { supabase } from "../../lib/supabase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("contact_messages")
      .insert([formData]);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We're here to answer your questions and help you connect with Sunshine Model School."
      />

      <main className="max-w-7xl mx-auto px-6 py-20">

        {/* Contact Cards */}
        <section className="mb-20">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-center">
              <div className="text-5xl mb-4">📞</div>

              <h3 className="text-2xl font-bold mb-3 text-[#800020]">
                Phone
              </h3>

              <p>{schoolInfo.phone}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-center">
              <div className="text-5xl mb-4">📧</div>

              <h3 className="text-2xl font-bold mb-3 text-[#800020]">
                Email
              </h3>

              <p>{schoolInfo.email}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-center">
              <div className="text-5xl mb-4">📍</div>

              <h3 className="text-2xl font-bold mb-3 text-[#800020]">
                Address
              </h3>

              <p>{schoolInfo.address}</p>
            </div>

          </div>

        </section>

        {/* Contact Form + Office Hours */}
        <section className="mb-20">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border p-10">

              <h2 className="text-4xl font-bold mb-6 text-[#800020]">
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full border p-4 rounded-xl"
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
                  className="w-full border p-4 rounded-xl"
                  required
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  className="w-full border p-4 rounded-xl"
                  required
                />

                <textarea
                  rows={6}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full border p-4 rounded-xl"
                  required
                />

                <button
                  type="submit"
                  className="bg-[#800020] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#650019] transition"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Office Hours */}
            <div className="bg-[#800020] text-white rounded-3xl p-10">

              <h2 className="text-3xl font-bold mb-8">
                Office Hours
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-lg">
                    Monday - Friday
                  </h3>

                  <p>10:00 AM - 3:00 PM</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Saturday
                  </h3>

                  <p>10:00 AM - 12:00 PM</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Sunday
                  </h3>

                  <p>Closed</p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Location */}
<section>

  <div className="bg-gray-50 rounded-3xl p-10">

    <h2 className="text-4xl font-bold text-center mb-8 text-[#800020]">
      Find Us
    </h2>

    <div className="overflow-hidden rounded-2xl shadow-lg">

      <iframe
        src="https://maps.google.com/maps?q=Sunshine%20Model%20School%20Hatipotha%20Bazaar%20Alipurduar%20West%20Bengal%20736201&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>

    <div className="text-center mt-6">

      <a
        href="https://www.google.com/maps/search/?api=1&query=Sunshine+Model+School+Hatipotha+Bazaar+Alipurduar+West+Bengal+736201"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#800020] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#650019] transition"
      >
        📍 Get Directions
      </a>

    </div>

  </div>

</section>

      </main>
    </>
  );
}