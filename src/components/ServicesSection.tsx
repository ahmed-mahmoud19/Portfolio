import { motion } from "framer-motion";
import { Code2, Smartphone, Figma, Rocket, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development (React)",
    desc: "Building modern, interactive web applications using React.js with clean, maintainable component architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    desc: "Crafting pixel-perfect layouts that adapt seamlessly across all devices and screen sizes.",
  },
  {
    icon: Figma,
    title: "UI Implementation from Figma",
    desc: "Translating Figma designs into production-ready code with precision and attention to detail.",
  },
  {
    icon: Rocket,
    title: "Landing Page Development",
    desc: "Creating high-converting landing pages with engaging visuals and optimized user flows.",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    desc: "Improving performance, accessibility, and SEO to deliver fast, user-friendly experiences.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// services</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:neon-border transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {service.desc}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
              >
                Get in touch →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
