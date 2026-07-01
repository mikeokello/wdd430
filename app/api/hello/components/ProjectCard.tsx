interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string; // ? makes it optional
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-6 border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-600 mb-3">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      {link && ( // Conditional rendering: only shows if link exists
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 font-medium hover:underline"
        >
          View Project →
        </a>
      )}
    </article>
  );
}