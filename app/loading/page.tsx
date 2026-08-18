
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  "Understanding your profile",
  "Mapping your biggest opportunities",
  "Building your personalized roadmap",
  "Preparing your results",
];

export default function LoadingPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepTimer = window.setInterval(() => {
      setActiveStep((current) => {
        if (current >= steps.length - 1) {
          return current;
        }

        return current + 1;
      });
    }, 800);

    const resultTimer = window.setTimeout(() => {
      router.replace("/results");
    }, 3600);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(resultTimer);
    };
  }, [router]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0d0b] px-4 py-6 text-[#f6efe8]">
      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.26)_0%,rgba(245,166,35,0.10)_35%,rgba(245,166,35,0)_72%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f5a623]/20 bg-[#f5a623]/10 text-sm font-bold tracking-[-0.08em] text-[#fff8f0] shadow-[0_0_35px_rgba(245,166,35,0.18)]">
            HG
          </div>

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a623]/80">
            Step 3 of 4
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#fff8f0]">
            Building your glow-up plan
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#d8ccc0]/65">
            We're turning your answers into a focused roadmap built around
            your goals.
          </p>

          {/* Loading indicator */}
          <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#f5a623]/15 bg-[#17130f]">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-[#f5a623]/15 border-t-[#f5a623]" />
          </div>

          {/* Progress steps */}
          <div className="mt-10 w-full space-y-3 text-left">
            {steps.map((step, index) => {
              const isComplete = index < activeStep;
              const isActive = index === activeStep;

              return (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-[#f5a623]/10 bg-[#17130f] px-4 py-3"
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                      isComplete
                        ? "bg-[#f5a623] text-[#17100a]"
                        : isActive
                          ? "border border-[#f5a623]/40 bg-[#f5a623]/10 text-[#f5b544]"
                          : "border border-[#f5a623]/10 bg-[#0f0d0b] text-[#d8ccc0]/35"
                    }`}
                  >
                    {isComplete ? "✓" : index + 1}
                  </div>

                  <p
                    className={`text-sm ${
                      isComplete || isActive
                        ? "text-[#f6efe8]/90"
                        : "text-[#d8ccc0]/35"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-[11px] leading-5 text-[#d8ccc0]/35">
            This usually takes just a few seconds.
          </p>
        </div>
      </div>
    </main>
  );
}