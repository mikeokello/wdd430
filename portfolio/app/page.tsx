import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 px-6 py-10 text-white shadow-xl sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-100">WDD430 Week 02</p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Plan sacrament meetings with clarity and purpose.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-amber-50">
            Review announcements, hymns, speakers, prayer leaders, and ward business in one organized place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/meetings" className="rounded-full bg-white px-5 py-2.5 font-semibold text-amber-700 transition hover:bg-amber-50">
              View meeting programs
            </Link>
            <Link href="/meetings/current" className="rounded-full border border-white/70 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10">
              Jump to current Sunday
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/10 p-2 backdrop-blur">
          <Image
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
            alt="Church meeting hall with an organized program table"
            width={700}
            height={480}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">What this planner includes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900">Weekly agenda</h3>
            <p className="mt-2 text-sm text-slate-600">Track opening hymns, prayers, ward business, and closing music for each meeting.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900">Typed data model</h3>
            <p className="mt-2 text-sm text-slate-600">Each meeting uses a structured TypeScript interface for reliable content handling.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900">Accessible navigation</h3>
            <p className="mt-2 text-sm text-slate-600">Links and routes support easy browsing between the full list and each meeting detail.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

