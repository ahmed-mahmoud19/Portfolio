import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ahmedPhoto from "@/assets/ahmed-photo.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--neon-blue)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--neon-blue)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
              // Hello World
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Ahmed Mahmoud{" "}
              <span className="gradient-text neon-text">Madany</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
              Front-End Developer &amp; CS Student
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Computer Science and Artificial Intelligence student passionate about
              Front-End Development, Problem Solving, and building responsive modern
              web interfaces.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild className="neon-glow hover:scale-105 transition-transform">
                <a href="#projects">
                  <ArrowDown className="mr-2 h-4 w-4" /> View Projects
                </a>
              </Button>
              <Button asChild variant="outline" className="neon-border hover:scale-105 transition-transform">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button asChild variant="secondary" className="hover:scale-105 transition-transform">
                <a href="/Ahmed_Mahmoud_Madany.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float neon-glow">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-card border-2 border-primary/30 overflow-hidden">
                  <img src={ahmedPhoto} alt="Ahmed Mahmoud Madany" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-mono animate-pulse-neon">
                open to work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
