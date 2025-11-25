import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Experience() {
  const responsibilities = [
    "Built responsive front-end UI components using React.js, Tailwind CSS & JavaScript to improve user experience and code reusability",
    "Developed backend REST APIs using Node.js & Express.js for CRUD and business logic handling",
    "Implemented JWT-based authentication, secure session handling and protected routes",
    "Integrated Stripe payment gateway in test mode for subscription based flow and validated webhook event handling",
    "Worked on admin panel modules including filtering, pagination and data visibility enhancements",
    "Designed MongoDB schemas, optimized queries and assisted API integration with frontend",
    "Collaborated using Git & GitHub for version control",
  ];

  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
    "Stripe",
    "Git",
    "GitHub",
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 bg-navy-medium/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">
          &lt;<span className="text-white">Experience</span>/&gt;
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6" />
        <p className="text-center text-gray-300 mb-12 sm:mb-20 max-w-2xl mx-auto">
          Professional journey and key contributions
        </p>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto"> 
          <div className="overflow-hidden bg-navy-medium border border-slate-800/50 rounded-2xl hover:border-cyan-400/40 hover:shadow-glow-cyan-sm transition-all duration-300 backdrop-blur">
            {/* Gradient top bar */}
            <div className="h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500" />

            <div className="p-6 sm:p-8">
              {/* Top: Role / Company / Type */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-400/10 rounded-lg border border-cyan-400/40">
                      <Briefcase className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        MERN Stack Developer (Training + Projects)
                      </h3>
                      <p className="text-cyan-400 font-semibold">PRAXINFO</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span>January 2025 - Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span>Ahmedabad, India</span>
                    </div>
                  </div>
                </div>

                <Badge className="bg-green-400/15 text-green-400 border border-green-400/60 self-start">
                  Full-time
                </Badge>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="font-semibold mb-4 text-cyan-400">
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300 group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 pt-4 border-t border-slate-800">
                <h4 className="font-semibold mb-3 text-white">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-navy-dark border border-slate-800 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Currently Working Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-glow-cyan" />
              <span className="text-sm text-gray-400 font-medium">
                Currently Working
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
