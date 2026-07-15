import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";

async function getMeeting(id: string): Promise<SacramentMeeting | null> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function MeetingPage({ params }: { params: { id: string } }) {
  const meeting = await getMeeting(params.id);

  if (!meeting) {
    notFound();
  }

  return (
    <section>
      <MeetingDetail meeting={meeting} />
    </section>
  );
}
