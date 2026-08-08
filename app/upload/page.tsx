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
    setStatus("Uploading your selfie...");

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

    setStatus("Upload successful!");

    router.push("/questionnaire");
  };

  return (
    <main>
      <div>
        <button
          onClick={() => router.back()}
          className="mb-8 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
        >
          ← Back
        </button>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Step 1 of 3
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Upload your selfie
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Use a clear front-facing photo in good lighting. This helps
            generate a more accurate glow-up report.
          </p>
        </div>

        <label className="mt-10 flex cursor-pointer flex-1 flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/5 p-8 text-center transition hover:border-white/30">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <span className="text-2xl text-white/40">+</span>
          </div>

          <h2 className="text-xl font-semibold">
            {file ? file.name : "Tap to choose a selfie"}
          </h2>

          <p className="mt-3 text-sm text-white/50">
            JPG • PNG • Clear face • Good lighting
          </p>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-white/80">
            ✓ Face clearly visible
          </p>
          <p className="mt-2 text-sm text-white/80">
            ✓ Remove sunglasses or masks
          </p>
          <p className="mt-2 text-sm text-white/80">
            ✓ Use natural lighting if possible
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs leading-5 text-white/60">
            Your photo is securely stored and used to generate your
            personalized HeGlows analysis.
          </p>
          <p className="mt-2 text-xs leading-5 text-white/40">
            We don't sell or publicly display your photo.
          </p>
        </div>

        {status && (
          <p className="mt-5 text-center text-sm text-white/70">
            {status}
          </p>
        )}

        <button
          onClick={uploadSelfie}
          disabled={uploading}
          className="mt-6 h-14 rounded-2xl bg-white text-base font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Continue"}
        </button>
      </div>
    </main>
  );
}