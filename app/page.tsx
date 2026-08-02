import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          HeGlows
        </p>

        <h1 className="text-5xl font-semibold leading-tight sm:text-7xl">
          Build your glow-up with a clear plan.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg">
          HeGlows helps you improve your looks, confidence, and daily habits in one simple place.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/upload"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get early access
          </Link>

          <a
            href="#features"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            See features
          </a>
        </div>

        <div
          id="features"
          className="mt-16 grid gap-4 text-left sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-medium">Personal plan</h2>
            <p className="mt-2 text-sm text-white/65">
              Get a step-by-step roadmap made for you.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-medium">Daily tracking</h2>
            <p className="mt-2 text-sm text-white/65">
              Track progress and stay consistent.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-medium">Simple advice</h2>
            <p className="mt-2 text-sm text-white/65">
              Clear actions instead of confusing theory.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}