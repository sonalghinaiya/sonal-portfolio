// ...existing code...
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Quotation Maker Web Application",
      description:
        "A dynamic and responsive quotation generation interface with data validation for tax/discount fields. Implemented reusable UI components and optimized state handling for improved user experience with clean design structure.",
      features: [
        "Next.js App Router architecture",
        "TypeScript for type safety",
        "Reusable component library",
        "Tax and discount validation",
        "Clean, intuitive UI/UX",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Admin Panel with Filtering & Pagination",
      description:
        "A modular admin dashboard for managing product, category, and user data with server-side filtering and pagination. Features JWT authentication, protected routes, and optimized API endpoints for improved performance.",
      features: [
        "JWT-based authentication",
        "Protected route system",
        "Server-side pagination",
        "Advanced filtering",
        "CRUD operations",
        "Optimized database queries",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

//   const moreProjects = [
//     { name: "Mediplus Website", subtitle: "Hospital", tech: "HTML, CSS" },
//     {
//       name: "WsCube Tech (Digital Marketing)",
//       subtitle: "Figma → HTML",
//       tech: "HTML, CSS, Bootstrap",
//     },
//     { name: "Apex Template", tech: "HTML, CSS, Bootstrap" },
//     { name: "Yummy (Food) Template", tech: "HTML, CSS, Bootstrap" },
//     {
//       name: "Tailwind CSS Quotation Maker Clone",
//       tech: "HTML, CSS, Tailwind",
//       link: "https://quotationmakerr.netlify.app/",
//     },
//     { name: "Google Webpage", tech: "Tailwind CSS" },
//     { name: "PW Skills Template", tech: "Tailwind CSS" },
//     {
//       name: "Clarity Webpage",
//       tech: "Tailwind CSS",
//       link: "https://tailwindclarity.netlify.app/",
//     },
//     { name: "Movie App", tech: "React.js" },
//     { name: "Task Tracker", tech: "React.js" },
//     {
//       name: "eBookStore (React)",
//       tech: "React.js",
//       link: "https://react-js-two-alpha.vercel.app/",
//     },
//     {
//       name: "eBookStore (Next.js)",
//       tech: "Next.js",
//       link: "https://next-js-eight-iota.vercel.app",
//     },
//     {
//       name: "eBookStore API",
//       subtitle: "MongoDB + Next.js API",
//       tech: "MongoDB, Next.js",
//       link: "https://ebookstore-api.vercel.app/",
//     },
//     {
//       name: "eBookStore Dashboard",
//       tech: "Next.js",
//       link: "https://ebookstore-dashboard.vercel.app/",
//     },
//     {
//       name: "URL Shortner",
//       tech: "Node.js",
//       link: "https://node-js-1-ha0i.onrender.com/",
//     },
//     {
//       name: "Drizzle Authentication",
//       subtitle: "Node.js + Drizzle",
//       tech: "Node.js, Drizzle",
//       link: "https://node-js-wz07.onrender.com/",
//     },
//     {
//       name: "Node.js CRUD – User and Product",
//       tech: "Node.js, Express.js, MongoDB",
//     },
//     { name: "E-commerce API", tech: "Next.js" },
//     { name: "E-commerce Frontend", tech: "Next.js" },
//     {
//       name: "Shadcn Next.js – Quotation Maker Web App",
//       tech: "Next.js, shadcn",
//     },
//     {
//       name: "Payment Integration – Stripe (Test Mode)",
//       tech: "Stripe, Next.js",
//     },
//   ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-slate-400">&lt;</span>Projects
            <span className="text-slate-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real-world applications showcasing my skills in full-stack
            development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 group backdrop-blur rounded-2xl"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8">
                {/* Title + Icon */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <Sparkles className="w-6 h-6 text-cyan-400 group-hover:scale-125 transition-transform" />
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg px-3 py-1 text-xs sm:text-sm`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-slate-600 hover:border-cyan-500 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 group/btn"
                    disabled
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:text-cyan-400" />
                    Code
                  </Button>
                  <Button
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold group/btn"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Want to see more of my work?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
            onClick={() =>
              window.open("https://github.com/sonalghinaiya", "_blank")
            }
          >
            <Github className="w-5 h-5 mr-2" />
            Visit My GitHub
          </Button>
        </div>

        {/* More Projects Block */}
        {/* <div className="mt-12">
          <h3 className="text-center text-2xl font-semibold text-white">
            More Projects
          </h3>
          <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-3" />
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {moreProjects.map((item) => {
              const line = item.subtitle ? `${item.subtitle} – ${item.tech}` : item.tech;
              return (
                <div
                  key={item.name}
                  className="bg-slate-800/40 border border-slate-700 rounded-xl p-3 sm:p-4 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:-translate-y-0.5 text-left flex items-start justify-between"
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-slate-400 mt-1">{line}</div>
                  </div>

                  {item.link ? (
                    <button
                      onClick={() => window.open(item.link, "_blank")}
                      aria-label={`Open ${item.name}`}
                      className="ml-3 text-slate-300 hover:text-cyan-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : null}
                </div>
              );
            })}
          </div> 
        </div> */}
      </div>
    </section>
  );
}
