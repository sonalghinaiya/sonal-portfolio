import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Education() {
  const education = [
    {
      degree: "M.Sc. CA & IT",
      fullDegree:
        "Master of Science in Computer Applications & Information Technology",
      institution:
        "K. S. School of Business Management & Information Technology",
      period: "July 2023 – April 2025",
      gpa: "3.95 / 5.0",
      status: "Completed",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      degree: "B.Sc. CA & IT",
      fullDegree:
        "Bachelor of Science in Computer Applications & Information Technology",
      institution:
        "K. S. School of Business Management & Information Technology",
      period: "July 2020 – April 2023",
      gpa: "4.01 / 5.0",
      status: "Completed",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 text-white">
          <span className="text-slate-400">&lt;</span>
          Education
          <span className="text-slate-400">/&gt;</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6" />
        <p className="text-center text-slate-400 mb-12 sm:mb-20 max-w-2xl mx-auto">
          Academic background and qualifications
        </p>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="overflow-hidden bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 group backdrop-blur"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${edu.gradient}`} />

              <div className="p-6 sm:p-8">
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${edu.gradient} group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>

                  <Badge
                    className={
                      edu.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }
                  >
                    {edu.status}
                  </Badge>
                </div>

                {/* Degree Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {edu.fullDegree}
                    </p>
                  </div>

                  {/* Institution */}
                  <div className="flex items-start gap-2 text-sm">
                    <BookOpen className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">
                      {edu.institution}
                    </span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="h-5 w-5" />
                    <span>{edu.period}</span>
                  </div>

                  {/* GPA */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-700">
                    <Award className="h-5 w-5 text-cyan-400" />
                    <span className="text-slate-300 font-medium">GPA: </span>
                    <span className="text-cyan-400 font-bold text-lg">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <div className="inline-block p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl backdrop-blur">
            <p className="text-slate-300">
              <span className="font-semibold text-cyan-400">
                Strong academic foundation
              </span>{" "}
              in computer science with excellent grades and practical experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
