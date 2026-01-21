"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero Section - Matching Career Style */}
      <section className="relative pt-24 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#F0F9FF]" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#BAE6FD] blur-[150px] opacity-20 rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#60A5FA] blur-[200px] opacity-10 rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"
            >
              <Briefcase size={20} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Showcasing Excellence</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase text-secondary mb-4 leading-[1.1] font-bold">
                Our <span className="text-primary italic">Creative</span> Portfolio
              </h1>
              <p className="text-secondary/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Explore our diverse range of projects, from large-scale signs to bespoke digital branding. Each piece is a testament to our commitment to quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      <div className="container mx-auto px-6 py-24">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border shadow-sm",
                activeCategory === category
                  ? "bg-primary border-primary text-white shadow-primary/20"
                  : "bg-white border-secondary/10 text-secondary/60 hover:border-primary/50 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white premium-shadow"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-display uppercase font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-secondary/50 py-32">
            <p className="text-xl font-display uppercase tracking-widest text-secondary/30">No projects found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

