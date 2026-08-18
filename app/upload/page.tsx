
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { patchFlow } from "@/lib/flow";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export default function UploadPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (selectedFile: File | null) => {
    setStatus("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      setFile(null);
      setStatus("Please choose a JPG, PNG, or WebP image.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setFile(null);
      setStatus("That image is too large. The maximum file size is 10 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const uploadSelfie = async () => {
    if (!file) {
      setStatus("Please choose a selfie.");
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setStatus("Please choose a JPG, PNG, or WebP image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setStatus("That image is too large. The maximum file size is 10 MB.");
      return;
    }

    setUploading(true);
    setStatus("Uploading your selfie...");

    const fileExtension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

    const { error } = await supabase.storage
      .from("Selfies")
      .upload(fileName, file, {
        upsert: false,
        contentType: file.type,
      });

    if (error) {
      setUploading(false);
      setStatus(error.message);
      return;
    }

   patchFlow({
  uploadedFileName: fileName,
  uploadedAt: Date.now(),
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
            Clear front-facing photo • JPG, PNG, or WebP • Max 10 MB
          </p>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) =>
              handleFileChange(e.target.files?.[0] ?? null)
            }
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
            Your selfie is used for your HeGlows experience, stored securely
            in our storage system, and is not publicly displayed or sold.
            Uploaded selfies are intended to be deleted within 72 hours.
          </p>

          <p className="mt-2 text-xs leading-5 text-[#d8ccc0]/45">
            By continuing, you confirm that you have the right to upload this
            image and agree to our Privacy Policy and Terms of Service.
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