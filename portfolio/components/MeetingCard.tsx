import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            {meeting.meetingType}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">{meeting.date}</h3>
          <p className="mt-2 text-sm text-slate-600">Presiding: {meeting.presiding}</p>
          <p className="text-sm text-slate-600">Conducting: {meeting.conducting}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
          View program
        </span>
      </div>
    </Link>
  );
}
