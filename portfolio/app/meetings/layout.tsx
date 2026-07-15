import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacrament Meetings",
  description: "View weekly meeting agendas and program details",
};

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Sacrament Meeting Planner</h2>
            <p className="text-sm text-slate-600">Browse current and past programs with a clear agenda view.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/meetings" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
              All meetings
            </Link>
            <Link href="/meetings/current" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Current Sunday
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
