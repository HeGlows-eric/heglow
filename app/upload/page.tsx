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
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0f0d0b] px-4 py-6 text-[#f6efe8]">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col">
        {/* Back */}
        <button
          onClick={() => router.back()}
          className="mb-8 w-fit rounded-full border border-[#f5a623]/15 bg-[#17130f] px-4 py-2 text-sm text-[#d8ccc0]/80 transition hover:border-[#f5a623]/30 hover:bg-[#211a14]"
        >
          ← Back
        </button>

        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]/75">
            Step 1 of 3
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#fff8f0] sm:text-4xl">
            Let's build your glow-up plan.
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#d8ccc0]/70">
            Start with a clear photo. Then answer a few questions about your
            hair, skin, style, and goals so we can build your personalized
            HeGlows roadmap.
          </p>
        </div>

        {/* Upload area */}
        <label className="mt-10 flex min-h-[300px] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-[#f5a623]/20 bg-[#17130f] p-6 text-center shadow-[0_0_40px_rgba(245,166,35,0.04)] transition hover:border-[#f5a623]/40 hover:bg-[#1c1712]">
          <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5">
            <span className="text-2xl text-[#f5a623]">+</span>
          </div>

          <h2 className="max-w-full break-words text-xl font-semibold text-[#fff8f0]">
            {file ? file.name : "Choose your selfie"}
          </h2>

          <p className="mt-3 text-sm text-[#d8ccc0]/50">
            Clear front-facing photo • JPG or PNG
          </p>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>

        {/* Photo checklist */}
        <div className="mt-6 w-full rounded-2xl border border-[#f5a623]/10 bg-[#17130f] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8ccc0]/50">
            Best results
          </p>

          <p className="mt-3 text-sm text-[#f6efe8]/85">
            <span className="mr-2 text-[#f5a623]">✓</span>
            Face clearly visible
          </p>

          <p className="mt-2 text-sm text-[#f6efe8]/85">
            <span className="mr-2 text-[#f5a623]">✓</span>
            Remove sunglasses or masks
          </p>

          <p className="mt-2 text-sm text-[#f6efe8]/85">
            <span className="mr-2 text-[#f5a623]">✓</span>
            Use natural, even lighting
          </p>

          <p className="mt-2 text-sm text-[#f6efe8]/85">
            <span className="mr-2 text-[#f5a623]">✓</span>
            Keep your face centered
          </p>
        </div>

        {/* Privacy */}
        <div className="mt-5 w-full rounded-2xl border border-[#f5a623]/10 bg-[#14110e] p-4">
          <p className="text-xs font-semibold text-[#f6efe8]/80">
            Your photo stays private.
          </p>

          <p className="mt-2 text-xs leading-5 text-[#d8ccc0]/55">
            Your selfie is stored with your HeGlows session and is not publicly
            displayed or sold.
          </p>
        </div>

        {/* Status */}
        {status && (
          <p className="mt-5 break-words text-center text-sm text-[#f5b544]/90">
            {status}
          </p>
        )}

        {/* Continue */}
        <button
          onClick={uploadSelfie}
          disabled={uploading}
          className="mt-6 h-14 w-full rounded-2xl bg-gradient-to-r from-[#ffc15a] to-[#f59b20] px-4 text-base font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(245,166,35,0.2)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Continue →"}
        </button>

        <p className="mt-3 text-center text-[11px] leading-5 text-[#d8ccc0]/40">
          Next: a few questions to personalize your plan.
        </p>
      </div>
    </main>
  );
}