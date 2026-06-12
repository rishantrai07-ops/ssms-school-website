"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <div className="max-w-md mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Admin Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-6"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-4 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-4 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-[#800020] text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}