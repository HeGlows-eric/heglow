"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { patchFlow } from "@/lib/flow";

export default function UploadPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadSelfie = async () => {
    if (!file) {
      setStatus("Please choose a selfie.");
      return;
    }

    setUploading(true);
    setStatus("Uploading...");

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("Selfies")
      .upload(fileName, file);

    if (error) {
      setUploading(false);
      setStatus(error.message);
      return;
    }

    patchFlow({
      uploadedFileName: fileName,
    });

    setStatus("Selfie uploaded successfully!");

    router.push("/questionnaire");
  };

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Upload Your Selfie
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      <button
        onClick={uploadSelfie}
        disabled={uploading}
        className="mt-6 bg-black text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      <p className="mt-4">{status}</p>
    </main>
  );
}