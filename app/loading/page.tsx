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
      router.replace("/result");
    }, 3600);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(resultTimer);
    };
  }, [router]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] px-4 py-6 text-[#f4f7fa]">
      {/* Turquoise glow */}
      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(32,224,208,0.18)_0%,rgba(32,224,208,0.06)_35%,rgba(32,224,208,0)_72%)] blur-3xl" />

      {/* Midnight-blue glow */}
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,38,77,0.5)_0%,rgba(20,38,77,0)_72%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#20e0d0]/20 bg-[#20e0d0]/10 text-sm font-bold tracking-[-0.08em] text-[#f4f7fa] shadow-[0_0_35px_rgba(32,224,208,0.14)]">
            HG
          </div>

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#20e0d0]/80">
            Step 3 of 4
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f4f7fa]">
            Building your glow-up plan
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#8b98a8]/75">
            We're turning your answers into a focused roadmap built around
            your goals.
          </p>

          {/* Spinner */}
          <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#20e0d0]/15 bg-[#0b1119] shadow-[0_0_30px_rgba(32,224,208,0.05)]">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-[#182535] border-t-[#20e0d0]" />
          </div>

          {/* Progress steps */}
          <div className="mt-10 w-full space-y-3 text-left">
            {steps.map((step, index) => {
              const isComplete = index < activeStep;
              const isActive = index === activeStep;

              return (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-[#20e0d0]/10 bg-[#0b1119] px-4 py-3 transition-colors"
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                      isComplete
                        ? "bg-[#20e0d0] text-[#03100e] shadow-[0_0_14px_rgba(32,224,208,0.18)]"
                        : isActive
                          ? "border border-[#20e0d0]/40 bg-[#20e0d0]/10 text-[#20e0d0]"
                          : "border border-[#182535] bg-[#05070a] text-[#8b98a8]/35"
                    }`}
                  >
                    {isComplete ? "✓" : index + 1}
                  </div>

                  <p
                    className={`text-sm ${
                      isComplete || isActive
                        ? "text-[#f4f7fa]/90"
                        : "text-[#8b98a8]/35"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-[11px] leading-5 text-[#8b98a8]/40">
            This usually takes just a few seconds.
          </p>
        </div>
      </div>
    </main>
  );
}