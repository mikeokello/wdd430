import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default function CurrentMeetingRedirect() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  const sundayString = sunday.toISOString().slice(0, 10);

  const currentMeeting = getMeetings(sundayString)[0];

  if (currentMeeting) {
    redirect(`/meetings/${currentMeeting.id}`);
  }

  redirect("/meetings");
}
