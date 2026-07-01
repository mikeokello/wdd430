import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I am a Web Full-Stack Development student at BYU-Pathway. I enjoy building accessible, responsive web applications with modern tools like Next.js and Tailwind CSS.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <SkillCard skill="Next.js" level="Intermediate" />
        <SkillCard skill="TypeScript" level="Intermediate" />
        <SkillCard skill="Tailwind CSS" level="Advanced" />
      </div>
    </div>
  );
}

