"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const uploadSelfie = async () => {
    if (!file) {
      setStatus("Please choose a selfie.");
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("Selfies")
      .upload(fileName, file);

    if (error) {
      setStatus(error.message);
      return;
    }

    setStatus("Selfie uploaded successfully!");
  };

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Upload Your Selfie
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFile(e.target.files?.[0] ?? null)
        }
      />

      <button
        onClick={uploadSelfie}
        className="mt-6 bg-black text-white px-4 py-2 rounded"
      >
        Upload
      </button>

      <p className="mt-4">{status}</p>
    </main>
  );
}