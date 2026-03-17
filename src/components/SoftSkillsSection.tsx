import { motion } from "framer-motion";
import { MessageCircle, Users, Lightbulb, Clock, Palette, BookOpen } from "lucide-react";

const softSkills = [
  { icon: MessageCircle, name: "Communication", level: 90 },
  { icon: Users, name: "Teamwork", level: 85 },
  { icon: Lightbulb, name: "Problem Solving", level: 88 },
  { icon: Clock, name: "Time Management", level: 80 },
  { icon: Palette, name: "Creativity", level: 85 },
  { icon: BookOpen, name: "Fast Learning", level: 92 },
];

export const SoftSkillsSection = () => {
  return (
    <section id="soft-skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// soft skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Beyond <span className="gradient-text">Code</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:neon-border transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="ml-auto text-sm font-mono text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
