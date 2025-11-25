import { Code, Server, Database, Wrench, Rocket, Link as LinkIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      gradient: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      icon: Database,
      title: "Database",
      gradient: "from-purple-500 to-pink-500",
      skills: ["MongoDB", "MySQL", "Prisma", "Drizzle ORM"],
    },
    {
      icon: Wrench,
      title: "Tools",
      gradient: "from-orange-500 to-red-500",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
    {
      icon: Rocket,
      title: "Deployment",
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Vercel", "Netlify", "Render"],
    },
    {
      icon: LinkIcon,
      title: "Integrations",
      gradient: "from-pink-500 to-rose-500",
      skills: ["Stripe (Test Mode)", "Webhooks", "Payment Gateways"],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-slate-400">&lt;</span>Skills
            <span className="text-slate-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 group backdrop-blur"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-slate-700/50 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-slate-600 hover:border-cyan-500/50 px-3 py-1 text-sm transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl backdrop-blur">
            <p className="text-slate-300">
              <span className="font-semibold text-cyan-400">Always learning</span> and staying
              updated with the latest technologies and best practices in web development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
