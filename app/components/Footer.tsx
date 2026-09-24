"use client";

import { useState } from "react";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer className="border-t border-[#20e0d0]/10 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#20e0d0]/20 bg-[#20e0d0]/10 text-[9px] font-bold tracking-[-0.08em] text-[#f4f7fa]">
              HG
            </div>

            <span className="text-sm text-[#8b98a8]/70">
              HeGlow
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#8b98a8]/60">
            <button
              type="button"
              onClick={() => setModal("privacy")}
              className="transition hover:text-[#20e0d0]"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => setModal("terms")}
              className="transition hover:text-[#20e0d0]"
            >
              Terms of Service
            </button>
          </div>
        </div>

        <p className="mt-3 text-[10px] text-[#8b98a8]/40">
          © 2026 HeGlow
        </p>
      </footer>

      {modal && (
        <LegalModal
          type={modal}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}