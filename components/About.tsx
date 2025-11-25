import { Code2, Zap, Heart } from "lucide-react";
import React from "react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "Writing maintainable, efficient code with best practices",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing applications for speed and scalability",
    },
    {
      icon: Heart,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving skills",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-slate-400">&lt;</span>About
            <span className="text-slate-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Code Block Style */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur overflow-hidden shadow-lg shadow-cyan-500/10">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 bg-slate-800/80">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-slate-400 ml-2">
                  developer.js
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 sm:p-8 font-mono text-sm space-y-2">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">name</span>:{" "}
                  <span className="text-emerald-400">"Sonal Ghinaiya"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">role</span>:{" "}
                  <span className="text-emerald-400">
                    "MERN Stack Developer"
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">location</span>:{" "}
                  <span className="text-emerald-400">"Ahmedabad, India"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">experience</span>:{" "}
                  <span className="text-orange-400">"11+ months"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">skills</span>: [
                </div>
                <div className="pl-8 text-emerald-400">
                  "React.js", "Node.js", "Express.js", "MongoDB"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-cyan-400">passion</span>:{" "}
                  <span className="text-emerald-400">
                    "Building scalable apps"
                  </span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a{" "}
                <span className="font-semibold text-cyan-400">
                  motivated MERN Stack Developer
                </span>{" "}
                with hands-on experience building scalable and efficient web
                applications. Currently working at PRAXINFO, where I focus on
                creating responsive UI components and robust backend APIs.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Skilled in modern JavaScript frameworks and backend API
                development, with a strong focus on{" "}
                <span className="font-semibold text-cyan-400">
                  clean code, performance, and continuous learning
                </span>
                .
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in React.js, Node.js, Express.js, and MongoDB, with
                experience in authentication systems, payment gateway
                integration, and building admin panels with advanced filtering
                and pagination.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all hover:-translate-y-1 group"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform mx-auto sm:mx-0" />
                  <h4 className="font-semibold text-white mb-1 text-sm text-center sm:text-left">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 text-center sm:text-left">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
