
"use client";

import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Menu, 
  X, 
  ChevronDown 
} from "lucide-react";

// --- Données (Mock Data) ---
const projects = [
  {
    id: 1,
    title: "SaaS Dashboard Automatisé",
    desc: "Plateforme de gestion pour PME avec automatisation des factures et suivi client en temps réel.",
    tech: ["Next.js", "Supabase", "Stripe"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "E-commerce Headless",
    desc: "Boutique ultra-rapide connectée à un CMS headless avec gestion de panier complexe.",
    tech: ["React", "Shopify API", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bot d'Automatisation",
    desc: "Script Python pour scraper des données immobilières et alerter via Discord.",
    tech: ["Python", "Selenium", "Docker"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2370&auto=format&fit=crop"
  }
];

const skills = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Python", "Tailwind CSS", "Docker", "PostgreSQL"
];

// --- Composants ---

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants pour les animations
  const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], 
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 40 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  // };

  // const staggerContainer = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans overflow-x-hidden selection:bg-[#213BF6] selection:text-white">
      
      {/* --- Navbar Glassmorphism --- */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Image */}
          <a href="#" className="flex items-center">
            {/* Logo pour fond clair (Mode Light) */}
            <img
              src="/logo-dark.png"
              alt="Logo Angelo ANR"
              className="block dark:hidden h-10 w-auto object-contain"
            />
            {/* Logo pour fond sombre (Mode Dark) */}
            {/* Assure-toi d'avoir aussi logo-light.png, sinon mets logo-dark.png ici aussi */}
            <img
              src="/logo-light.png"
              alt="Logo Angelo ANR"
              className="hidden dark:block h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("à", "a").replace(" ", "")}`}
                className="hover:text-[#213BF6] transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#213BF6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace("à", "a").replace(" ", "")}`}
                    className="text-lg font-medium hover:text-[#213BF6]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* --- Hero Section --- */}
      <section id="accueil" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex justify-center">
            <span className="px-4 py-1.5 rounded-full border border-[#213BF6]/30 bg-[#213BF6]/10 text-[#213BF6] text-sm font-semibold tracking-wide uppercase">
              Disponible pour de nouvelles missions
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Je transforme vos idées en <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#213BF6] to-purple-600">
              Solutions Digitales
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Développeur Fullstack & Expert en Automatisation. J'aide les entreprises à <span className="text-gray-900 dark:text-white font-semibold">gagner du temps</span> et à scaler grâce à du code propre et performant.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projets"
              className="px-8 py-4 bg-[#213BF6] hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-[#213BF6] dark:hover:border-[#213BF6] text-gray-700 dark:text-white rounded-xl font-bold transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Me contacter
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- Tech Stack (Marquee) --- */}
      <div className="py-10 bg-white dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest font-semibold">Technologies maîtrisées</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {skills.map((skill) => (
              <span key={skill} className="text-xl md:text-2xl font-bold text-gray-400 dark:text-gray-500 hover:text-[#213BF6] cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- About Section --- */}
      <section id="apropos" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Derrière le code, <span className="text-[#213BF6]">une passion.</span></h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Bonjour, je suis Angelo. Passionné par le développement web depuis plusieurs années, je ne me contente pas d'écrire du code : je conçois des expériences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Mon approche combine une expertise technique rigoureuse (React, Node, Python) avec une vision pragmatique des besoins business. Que ce soit pour une automatisation complexe ou une interface utilisateur épurée, mon but est toujours le même : <strong>l'efficacité</strong>.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Code2 className="text-[#213BF6] mb-2" size={32} />
                <h3 className="font-bold text-lg">Développement</h3>
                <p className="text-sm text-gray-500">Sites vitrines, SaaS, E-commerce</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Cpu className="text-[#213BF6] mb-2" size={32} />
                <h3 className="font-bold text-lg">Automatisation</h3>
                <p className="text-sm text-gray-500">Scraping, Bots, API Workflow</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Remplace l'image source par ta propre photo */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
               <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop" alt="Angelo Portrait" className="object-cover w-full h-full hover:scale-105 transition duration-500" />
            </div>
            {/* Petit badge flottant */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
              <p className="font-bold text-3xl text-[#213BF6]">2+</p>
              <p className="text-sm text-gray-500">Années d'expérience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projets" className="py-24 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes Réalisations</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Une sélection de projets récents, allant de l'application web complexe aux scripts d'automatisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
                    <a href={project.github} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition"><Github size={20} /></a>
                    <a href={project.link} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#213BF6] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/AngeloNR-27" target="_blank" className="inline-flex items-center gap-2 text-[#213BF6] font-semibold hover:underline">
              Voir plus sur GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#213BF6] rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Cercles décoratifs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Prêt à lancer votre projet ?</h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto relative z-10">
            Discutons de vos besoins et voyons comment je peux vous aider à atteindre vos objectifs digitaux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a 
              href="mailto:rabetsimbaangelo@gmail.com" 
              className="flex items-center justify-center gap-2 bg-white text-[#213BF6] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg"
            >
              <Mail size={20} />
              m'envoyer un email
            </a>
            <a 
              href="https://www.linkedin.com/in/angelo-rabetsimba-079ba427b/" 
              target="_blank"
              className="flex items-center justify-center gap-2 border border-white/30 bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition backdrop-blur-sm"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* Petit logo en footer aussi si tu veux, ou texte */}
            <span className="font-bold text-xl">AngeloNR<span className="text-[#213BF6]">.dev</span></span>
            <p className="text-sm text-gray-500 mt-2">© 2026 Tous droits réservés.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/AngeloNR-27" className="text-gray-500 hover:text-[#213BF6] transition"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/angelo-rabetsimba-079ba427b/" className="text-gray-500 hover:text-[#213BF6] transition"><Linkedin size={24} /></a>
            <a href="mailto:rabetsimbaangelo@gmail.com"  className="text-gray-500 hover:text-[#213BF6] transition"><Mail size={24} /></a>
          </div>
        </div>
      </footer>

    </main>
  );
}