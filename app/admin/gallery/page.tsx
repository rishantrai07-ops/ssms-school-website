"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function GalleryAdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setImages(data);
    }
  }

  async function uploadImage(e: React.FormEvent) {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(fileName, file);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const { data } = supabase.storage
      .from("gallery")
      .getPublicUrl(fileName);

    const imageUrl = data.publicUrl;

    const { error } = await supabase
      .from("gallery")
      .insert([
        {
          title,
          category,
          image_url: imageUrl,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    setTitle("");
    setCategory("");
    setFile(null);

    fetchImages();

    alert("Image uploaded successfully!");
  }

  async function deleteImage(id: number) {
    const { error } = await supabase
      .from("gallery")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchImages();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Gallery Management
      </h1>

      <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">

        <form
          onSubmit={uploadImage}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-4 rounded-lg"
            required
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-4 rounded-lg"
            required
          >
            <option value="">
              Select Event Category
            </option>

            <option value="Annual Day 2025">
              Annual Day 2025
            </option>

            <option value="Sports Day 2025">
              Sports Day 2025
            </option>

            <option value="Science Exhibition">
              Science Exhibition
            </option>

            <option value="Independence Day">
              Independence Day
            </option>

            <option value="Educational Tour">
              Educational Tour
            </option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
            className="w-full border p-4 rounded-lg"
            required
          />

          <button
            type="submit"
            className="bg-[#800020] text-white px-6 py-3 rounded-lg hover:bg-[#650019] transition"
          >
            Upload Image
          </button>

        </form>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >

            <img
              src={image.image_url}
              alt={image.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">

              <h2 className="font-semibold">
                {image.title}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {image.category}
              </p>

              <button
                onClick={() => deleteImage(image.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}