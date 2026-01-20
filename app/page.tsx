"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Accueil", "À propos", "Projets", "Contact"];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans flex flex-col overflow-x-hidden">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src="/logo-dark.png"
              alt="Logo Angelo ANR"
              className="block dark:hidden h-10 sm:h-12 md:h-14"
            />
            <img
              src="/logo-light.png"
              alt="Logo Angelo ANR"
              className="hidden dark:block h-10 sm:h-12 md:h-14"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-200 font-medium">
            {navItems.map((item) => (
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
          <nav className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-md flex flex-col space-y-2 px-4 sm:px-6 md:px-8 py-4 animate-slideDown">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-gray-900 dark:hover:text-white transition text-base sm:text-lg"
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
        className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 min-h-[100vh] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        {/* Blobs animés */}
        <div className="absolute -top-20 -left-16 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-[#213BF6]/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-16 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-[#213BF6]/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

        {/* Hero Title */}
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 dark:text-white mb-6 drop-shadow-lg animate-fadeUp">
          Bonjour, je suis{" "}
          <span className="text-[#213BF6]">Angelo</span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fadeUp animate-delay-100">
          Je développe des solutions web et des automatisations pour{" "}
          <span className="font-semibold text-[#213BF6]">gagner du temps</span> et
          optimiser les processus des entreprises.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 animate-fadeUp animate-delay-200">
          <a
            href="#projects"
            className="bg-[#213BF6] text-white dark:bg-[#213BF6] dark:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition transform text-base sm:text-lg md:text-xl"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border border-[#213BF6] text-[#213BF6] dark:border-[#213BF6] dark:text-[#213BF6] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#213BF6]/10 dark:hover:bg-[#213BF6]/20 hover:scale-105 transition transform text-base sm:text-lg md:text-xl"
          >
            Me contacter
          </a>
        </div>
      </section>
    </main>
  );
}
