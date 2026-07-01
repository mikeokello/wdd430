interface SkillCardProps {
  skill: string;
  level: string;
}

export default function SkillCard({ skill, level }: SkillCardProps) {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h4 className="font-semibold text-blue-900 text-lg">{skill}</h4>
      <p className="text-sm text-blue-700">{level}</p>
    </div>
  );
}

