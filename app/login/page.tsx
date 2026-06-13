"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    window.location.replace("/admin");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md">

        <div className="text-center mb-8">

          <div className="w-20 h-20 bg-[#800020] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
            S
          </div>

          <h1 className="text-4xl font-bold text-[#800020] mb-2">
            Admin Login
          </h1>

          <p className="text-gray-500">
            Sign in to access the SSMS Admin Panel
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800020]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800020]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#800020] text-white py-4 rounded-xl font-semibold hover:bg-[#650019] transition disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}