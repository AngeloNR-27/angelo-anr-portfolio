"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans flex flex-col overflow-x-hidden">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src="/logo-dark.png"
              alt="Logo Angelo ANR"
              className="block dark:hidden h-12"
            />
            <img
              src="/logo-light.png"
              alt="Logo Angelo ANR"
              className="hidden dark:block h-12"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
            {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group hover:text-gray-900 dark:hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#213BF6] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-md flex flex-col space-y-2 px-6 py-4 animate-slideDown">
            {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-gray-900 dark:hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col justify-center items-center text-center px-6 md:px-0 min-h-[100vh] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        {/* Blobs animés */}
        <div className="absolute -top-20 -left-16 w-80 h-80 bg-[#213BF6]/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-16 w-80 h-80 bg-[#213BF6]/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

        {/* Hero Text */}
        <h1 className="font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg animate-fadeUp"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
          Bonjour, je suis <span className="text-[#213BF6]">Angelo</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fadeUp animate-delay-100"
           style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>
          Je développe des solutions web et des automatisations pour{" "}
          <span className="font-semibold text-[#213BF6]">gagner du temps</span> et
          optimiser les processus des entreprises.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp animate-delay-200">
          <a
            href="#projects"
            className="bg-[#213BF6] text-white dark:bg-[#213BF6] dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition transform"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border border-[#213BF6] text-[#213BF6] dark:border-[#213BF6] dark:text-[#213BF6] px-8 py-4 rounded-lg font-semibold hover:bg-[#213BF6]/10 dark:hover:bg-[#213BF6]/20 hover:scale-105 transition transform"
          >
            Me contacter
          </a>
        </div>
      </section>
    </main>
  );
}
