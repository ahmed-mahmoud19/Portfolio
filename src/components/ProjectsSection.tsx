import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectTask from "@/assets/project-taskmanager.jpg";
import projectLanding from "@/assets/project-landing.jpg";

const projects = [
  {
    title: "Modern Portfolio Website",
    desc: "Responsive portfolio built using HTML, CSS, JavaScript and React. Features smooth animations, modern UI, and mobile-friendly design.",
    image: projectPortfolio,
    github: "#",
  },
  {
    title: "Task Manager Web App",
    desc: "Interactive ToDo application with dynamic task management. Add, edit, delete, and filter tasks with local storage persistence.",
    image: projectTask,
    github: "#",
  },
  {
    title: "Responsive Landing Page",
    desc: "Modern responsive landing page with animations and Bootstrap layout. Clean design with attention to detail and performance.",
    image: projectLanding,
    github: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl overflow-hidden group hover:neon-border transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="neon-border hover:scale-105 transition-transform" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="neon-glow hover:scale-105 transition-transform" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
