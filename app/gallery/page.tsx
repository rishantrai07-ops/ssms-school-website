"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { supabase } from "../../lib/supabase";

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setImages(data || []);
  }

  return (
    <>
      <PageHeader
        title="School Gallery"
        description="Explore school events, activities, and achievements."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">

        {images.length === 0 ? (
          <div className="text-center text-gray-500">
            No images available.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={image.image_url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-4">
                  <h2 className="font-semibold text-lg">
                    {image.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
}