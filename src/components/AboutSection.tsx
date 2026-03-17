import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "CS & AI Student",
    desc: "Studying Computer Science & Artificial Intelligence at Sohag University (2024–2028 Expected).",
  },
  {
    icon: Code2,
    title: "DEPI Trainee",
    desc: "Front-End Developer Trainee at Digital Egypt Pioneers Initiative (DEPI).",
  },
  {
    icon: Sparkles,
    title: "Clean Code Advocate",
    desc: "Passionate about writing clean, maintainable code and crafting responsive, accessible UI designs.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// about me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get to <span className="gradient-text">Know Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 text-center hover:neon-border transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:neon-glow transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
