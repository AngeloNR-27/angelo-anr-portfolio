"use client"; 

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / Nom */}
          <h1 className="text-xl font-bold text-gray-800">Angelo ANR</h1>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-gray-900">Accueil</a>
            <a href="#about" className="hover:text-gray-900">À propos</a>
            <a href="#projects" className="hover:text-gray-900">Projets</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          {/* Menu mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-6 py-4">
            <a href="#home" className="hover:text-gray-900">Accueil</a>
            <a href="#about" className="hover:text-gray-900">À propos</a>
            <a href="#projects" className="hover:text-gray-900">Projets</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-0 mt-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bonjour, je suis Angelo 
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
          “Je développe des solutions web et des automatisations pour résoudre des problèmes business.”
        </p>
        <a
          href="#projects"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Voir mes projets
        </a>
      </section>
    </main>
  );
}
