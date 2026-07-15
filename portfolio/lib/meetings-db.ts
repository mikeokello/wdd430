import type { SacramentMeeting } from "./types";

const today = new Date();
const currentSunday = new Date(today);
currentSunday.setDate(today.getDate() - today.getDay());
const currentSundayString = currentSunday.toISOString().slice(0, 10);

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: currentSundayString,
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    announcements: ["Ward temple night is scheduled for Friday evening.", "Young women activity will be held after the meeting."],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [{ description: "Sustaining of the new primary president" }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: "Sister Brown", topic: "Faith in Jesus Christ", type: "speaker" },
      { name: "Youth Choir", topic: "A special musical number", type: "musical-number" },
    ],
    closingHymn: { number: 31, title: "O God, Our Help in Ages Past" },
    closingPrayer: "Brother Davis",
  },
  {
    id: 2,
    date: "2026-07-05",
    meetingType: "testimony",
    presiding: "Elder Lewis",
    conducting: "Brother Rivera",
    openingHymn: { number: 25, title: "How Great Thou Art" },
    openingPrayer: "Brother Carter",
    wardBusiness: [{ description: "Ward mission plan review" }],
    stakeBusiness: false,
    sacramentHymn: { number: 177, title: "I Stand All Amazed" },
    speakers: [
      { name: "Brother Kim", topic: "The Savior's Atonement", type: "speaker" },
      { name: "Sister Ortiz", topic: "Trusting the Lord", type: "speaker" },
    ],
    closingHymn: { number: 27, title: "Come, Come, Ye Saints" },
    closingPrayer: "Sister Nguyen",
  },
  {
    id: 3,
    date: "2026-06-28",
    meetingType: "stake",
    presiding: "Stake President Allen",
    conducting: "Brother Thompson",
    openingHymn: { number: 14, title: "Sweet Hour of Prayer" },
    openingPrayer: "Sister Patel",
    wardBusiness: [{ description: "Stake temple recommend interviews" }],
    stakeBusiness: true,
    sacramentHymn: { number: 103, title: "Jesus, the Very Thought of Thee" },
    speakers: [
      { name: "Brother Evans", topic: "Service and sacrifice", type: "speaker" },
      { name: "Ward Choir", topic: "A joyful anthem", type: "musical-number" },
    ],
    closingHymn: { number: 91, title: "Nearer, Dear Savior, to Thee" },
    closingPrayer: "Brother Reed",
  },
  {
    id: 4,
    date: "2026-06-21",
    meetingType: "general",
    presiding: "Elder Bennett",
    conducting: "Brother Flores",
    announcements: ["LDS youth conference information shared at the pulpit."],
    openingHymn: { number: 45, title: "Lead, Kindly Light" },
    openingPrayer: "Sister Gomez",
    wardBusiness: [{ description: "Emergency preparedness class reminder" }],
    stakeBusiness: false,
    sacramentHymn: { number: 162, title: "Praise to the Man" },
    speakers: [
      { name: "Brother Stewart", topic: "The blessings of obedience", type: "speaker" },
    ],
    closingHymn: { number: 136, title: "How Firm a Foundation" },
    closingPrayer: "Sister Lee",
  },
  {
    id: 5,
    date: "2026-06-14",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Hale",
    announcements: ["Primary graduation is next week."],
    openingHymn: { number: 88, title: "A Child of God" },
    openingPrayer: "Brother Mason",
    wardBusiness: [{ description: "Discussed the summer service project" }],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: "Because I Have Been Given Much" },
    speakers: [
      { name: "Sister Wood", topic: "The joy of service", type: "speaker" },
      { name: "Brother Ellis", topic: "A spiritual preparation message", type: "speaker" },
    ],
    closingHymn: { number: 66, title: "Come, Follow Me" },
    closingPrayer: "Sister Ellis",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  const filtered = date ? meetings.filter((meeting) => meeting.date === date) : meetings;
  return filtered.sort((a, b) => b.date.localeCompare(a.date));
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}
