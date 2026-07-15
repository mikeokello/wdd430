import { NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const parsedId = Number(params.id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    return NextResponse.json({ error: "Invalid meeting id" }, { status: 400 });
  }

  const meeting = getMeetingById(parsedId);

  if (!meeting) {
    return NextResponse.json({ error: "Meeting not found" }, { status: 404 });
  }

  return NextResponse.json(meeting);
}
