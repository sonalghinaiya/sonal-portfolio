import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "700ms" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Code-style greeting */}
          <div className="inline-block">
            <code className="text-cyan-400 font-mono text-sm">
              <span className="text-slate-500">const</span> developer ={" "}
              <span className="text-emerald-400">"Sonal Ghinaiya"</span>;
            </code>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight">
            Sonal Ghinaiya
          </h1>

          {/* Role with typing effect style */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-slate-400 text-2xl sm:text-3xl font-mono">
                &gt;
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
                MERN Stack Developer
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable web applications with{" "}
              <span className="text-cyan-400 font-semibold">
                modern JavaScript
              </span>{" "}
              frameworks and{" "}
              <span className="text-emerald-400 font-semibold">clean code</span>
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">1</div>
              <div className="text-sm text-slate-400">Year Experience</div>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-slate-400">Technologies</div>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">2+</div>
              <div className="text-sm text-slate-400">Projects</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-6 text-lg font-semibold group shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/50 transition-all"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold group"
              asChild
            >
              <a
                href="/Sonal_Ghinaiya_MERN_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/sonalghinaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-slate-300" />
            </a>
            <a
              href="https://linkedin.com/in/sonal-ghinaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-slate-300" />
            </a>
            <a
              href="mailto:ghinaiyasonal1308@gmail.com"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6 text-slate-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
