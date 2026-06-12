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
        console.error("SUPABASE ERROR:", error);
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
        description="Get in touch with Sunshine Model School."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">
                  Address
                </h3>
                <p>{schoolInfo.address}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Phone
                </h3>
                <p>{schoolInfo.phone}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>
                <p>{schoolInfo.email}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Office Hours
                </h3>
                <p>Monday - Friday</p>
                <p>8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

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
                className="w-full border p-4 rounded-lg"
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
                className="w-full border p-4 rounded-lg"
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
                className="w-full border p-4 rounded-lg"
                required
              />

              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full border p-4 rounded-lg"
                required
              />

              <button
                type="submit"
                className="bg-[#800020] text-white px-8 py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Location
          </h2>

          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            Google Map will be added here
          </div>
        </div>
      </div>
    </>
  );
}