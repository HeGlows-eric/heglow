"use client";

import { useState } from "react";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer className="border-t border-[#f5a623]/10 py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#f5a623]/20 bg-[#f5a623]/10 text-[9px] font-bold tracking-[-0.08em] text-[#fff8f0]">
              HG
            </div>

            <span className="text-sm text-[#d8ccc0]/55">
              HeGlows
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#d8ccc0]/50">
            <button
              type="button"
              onClick={() => setModal("privacy")}
              className="transition hover:text-[#f5a623]"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => setModal("terms")}
              className="transition hover:text-[#f5a623]"
            >
              Terms of Service
            </button>
          </div>
        </div>

        <p className="mt-3 text-[10px] text-[#d8ccc0]/35">
          © 2026 HeGlows
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