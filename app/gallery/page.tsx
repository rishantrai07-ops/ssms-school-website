"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { supabase } from "../../lib/supabase";

interface GalleryImage {
  id: number;
  title: string;
  image_url: string;
  category: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);

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

    setImages((data as GalleryImage[]) || []);
  }

  const groupedImages = images.reduce(
    (acc: Record<string, GalleryImage[]>, image) => {
      const category = image.category || "School Activities";

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(image);

      return acc;
    },
    {}
  );

  return (
    <>
      <PageHeader
        title="School Gallery"
        description="Explore school events, activities, celebrations, and achievements."
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        {images.length === 0 ? (
          <div className="bg-white rounded-3xl border p-12 text-center shadow-sm">
            <div className="text-7xl mb-4">📷</div>

            <h2 className="text-3xl font-bold text-[#800020] mb-3">
              No Images Available
            </h2>

            <p className="text-gray-500">
              Gallery images will appear here once uploaded.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(groupedImages).map(
              ([category, categoryImages]) => (
                <section key={category}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-10 bg-[#800020] rounded-full" />

                    <h2 className="text-4xl font-bold text-[#800020]">
                      {category}
                    </h2>

                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {categoryImages.length} Photos
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryImages.map((image) => (
                      <div
                        key={image.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <img
                          src={image.image_url}
                          alt={image.title}
                          className="w-full h-48 object-cover"
                        />

                        <div className="p-3">
                          <h3 className="font-medium text-sm text-center">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            )}
          </div>
        )}
      </main>
    </>
  );
}