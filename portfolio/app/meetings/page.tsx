import { Suspense } from "react";
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

async function MeetingsList() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/meetings`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}

export default function MeetingsPage() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Recent sacrament meetings</h3>
          <p className="mt-1 text-sm text-slate-600">View the most recent agendas and program details.</p>
        </div>
      </div>
      <Suspense fallback={<p className="text-slate-600">Loading meetings...</p>}>
        <MeetingsList />
      </Suspense>
    </section>
  );
}
