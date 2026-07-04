import Link from "next/link";
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-stack Next.js app for managing products, orders, and inventory with a responsive admin panel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "https://github.com/Your-Username/ecommerce-dashboard",
  },
  {
    title: "Weather Application",
    description:
      "A React app that fetches and displays real-time weather data for any city using a public API.",
    technologies: ["React", "JavaScript", "CSS", "OpenWeather API"],
    link: "https://github.com/Your-Username/weather-app",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-white shadow-lg">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            Web Developer Portfolio
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Building thoughtful web experiences with modern tools.</h1>
          <p className="mt-4 text-lg text-blue-50">
            I am a full-stack developer learning Next.js, TypeScript, and the App Router. I enjoy creating clean, responsive, and user-focused applications.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-white px-5 py-2.5 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Learn More About Me
            </Link>
            <a
              href="#projects"
              className="rounded-full border border-blue-200 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A selection of recent work that reflects my growth as a developer.</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}

