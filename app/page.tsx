import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A full-stack Next.js app for managing products, orders, and inventory with a responsive admin panel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "https://github.com/[Your-Username]/ecommerce-dashboard", // Replace this
  },
  {
    title: "Weather Application",
    description: "A React app that fetches and displays real-time weather data for any city using a public API.",
    technologies: ["React", "JavaScript", "CSS", "OpenWeather API"],
    link: "https://github.com/[Your-Username]/weather-app", // Replace this
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I am a full-stack developer learning Next.js, TypeScript, and the App Router. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </div>
  );
}