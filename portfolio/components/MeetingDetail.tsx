import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{meeting.meetingType}</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Sacrament Meeting Program</h1>
        <p className="mt-2 text-lg text-slate-600">{meeting.date}</p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Leaders</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li><span className="font-semibold">Presiding:</span> {meeting.presiding}</li>
            <li><span className="font-semibold">Conducting:</span> {meeting.conducting}</li>
            <li><span className="font-semibold">Stake business:</span> {meeting.stakeBusiness ? "Yes" : "No"}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Announcements</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {(meeting.announcements ?? ["No announcements listed."]).map((announcement) => (
              <li key={announcement}>{announcement}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Program Order</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li><span className="font-semibold">Opening Hymn:</span> #{meeting.openingHymn.number} {meeting.openingHymn.title}</li>
            <li><span className="font-semibold">Opening Prayer:</span> {meeting.openingPrayer}</li>
            <li><span className="font-semibold">Ward Business:</span> {meeting.wardBusiness.map((item) => item.description).join(", ")}</li>
            <li><span className="font-semibold">Sacrament Hymn:</span> #{meeting.sacramentHymn.number} {meeting.sacramentHymn.title}</li>
            <li><span className="font-semibold">Closing Hymn:</span> #{meeting.closingHymn.number} {meeting.closingHymn.title}</li>
            <li><span className="font-semibold">Closing Prayer:</span> {meeting.closingPrayer}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Speakers & Musical Numbers</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {meeting.speakers.map((speaker) => (
              <li key={`${speaker.name}-${speaker.topic}`} className="rounded-xl bg-slate-50 p-3">
                <p className="font-semibold">{speaker.name}</p>
                <p className="text-sm text-slate-600">{speaker.type === "musical-number" ? "Musical number" : "Speaker"}</p>
                {speaker.topic ? <p className="mt-1 text-sm">Topic: {speaker.topic}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
