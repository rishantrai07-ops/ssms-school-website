"use client";

import { supabase } from "../lib/supabase";

export default function LogoutButton() {
  async function handleLogout() {
    await supabase.auth.signOut();

    window.location.replace("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
    >
      Logout
    </button>
  );
}