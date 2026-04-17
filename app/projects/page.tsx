'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data';

const categories = ['All', 'Web', 'Design', 'Branding'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        {/* Header */}
        <section className="pt-36 pb-20" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
            >
              Our Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Featured <span style={{ color: 'var(--gold)' }}>Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}
            >
              A curated selection of our finest work across industries and disciplines.
            </motion.p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border"
                  style={{
                    backgroundColor: activeCategory === cat ? 'var(--gold)' : 'transparent',
                    borderColor: activeCategory === cat ? 'var(--gold)' : 'rgba(212,175,55,0.3)',
                    color: activeCategory === cat ? '#000' : 'rgba(255,255,255,0.6)',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative group rounded-2xl overflow-hidden glass-strong cursor-pointer"
                    style={{ minHeight: '280px' }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Category badge */}
                    <div className="p-7">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block"
                        style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
                      >
                        {project.category}
                      </span>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}
                      >
                        {project.title}
                      </h3>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded text-xs"
                            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-inter)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-end p-7"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                      }}
                    >
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-inter)' }}
                      >
                        {project.description}
                      </p>
                    </motion.div>

                    {/* Gold bottom border on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: 'var(--gold)' }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
