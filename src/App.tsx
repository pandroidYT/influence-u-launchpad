import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Vision from "./pages/Vision";
import JoinUs from "./pages/join-us";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import { MobileMenu } from "./components/MobileMenu";
import { Testimonials as TestimonialsComponent } from "./components/Testimonials";

const queryClient = new QueryClient();

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="bg-blue-50 min-h-screen flex flex-col">
            {/* Navigation */}
            <header className="fixed top-0 left-0 w-full bg-blue-900 text-blue-200 shadow z-50">
              <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-2">
                  {/* Logo or site name */}
                  <img
                    src="/images/logo.png"
                    alt="Influence U Logo"
                    className="h-8 w-8"
                  />
                  <span className="font-bold text-xl">Influence U</span>
                </div>
                <ul className="hidden md:flex space-x-8 font-semibold">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-white transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#vision"
                      className="hover:text-white transition"
                    >
                      Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="hover:text-white transition"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#join"
                      className="hover:text-white transition"
                    >
                      Join Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <button
                  className="md:hidden p-2 rounded hover:bg-blue-800 focus:outline-none"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(true)}
                >
                  <svg
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 7h20M4 14h20M4 21h20" />
                  </svg>
                </button>
              </nav>
              <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
            </header>

            {/* Hero Section */}
            <section className="pt-20 sm:pt-24 pb-12 bg-gradient-to-b from-blue-900 to-blue-700 text-white relative">
              <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                    Become the Next{" "}
                    <span className="text-yellow-300">Influencer Icon</span>
                  </h1>
                  <p className="text-lg sm:text-xl mb-6">
                    Join Influence U and master the art of content creation,
                    audience growth, and digital influence.
                  </p>
                  <a
                    href="#join"
                    className="inline-block bg-yellow-300 text-blue-900 font-bold px-6 py-3 rounded-lg shadow hover:scale-105 hover:bg-yellow-200 transition"
                  >
                    Join Us
                  </a>
                </div>
                <div className="flex-1 mt-8 md:mt-0 flex justify-center">
                  <img
                    src="/images/hero-banner.webp"
                    alt="Content creators collaborating"
                    className="rounded-xl shadow-lg w-full max-w-md"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-blue-50 to-transparent"></div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white border-b border-blue-100">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  About Influence U
                </h2>
                <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-700 mb-4">
                  Empowering creators to shape the digital world, one post at a
                  time.
                </blockquote>
                <p className="text-lg text-blue-800 mb-6">
                  Influence U is a unique program designed to help aspiring
                  influencers and creators build their brand, grow their audience,
                  and make a real impact online. Our curriculum covers content
                  strategy, platform algorithms, community engagement, and more –
                  all taught by industry experts and successful creators.
                </p>
                <img
                  src="/images/about.jpg"
                  alt="People collaborating on content"
                  className="rounded-lg shadow w-full max-w-lg mx-auto"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-16 bg-blue-50 border-b border-blue-100">
              <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
                  Our Vision
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                    {/* Icon */}
                    <span className="mb-3 text-blue-500">
                      {/* Lightbulb icon */}
                      <svg
                        width="36"
                        height="36"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 17a5 5 0 1 1 10 0c0 2.5-2 4.5-4 4.5s-4-2-4-4.5z" />
                        <path d="M12 21v1a3 3 0 0 0 6 0v-1" />
                        <path d="M9 9l1.5 1.5" />
                        <path d="M21 9l-1.5 1.5" />
                      </svg>
                    </span>
                    <h3 className="font-semibold text-xl text-blue-800 mb-2">
                      Content Quality
                    </h3>
                    <p className="text-blue-700 text-center">
                      We believe in creating content that is original, valuable,
                      and engaging – setting trends, not just following them.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                    <span className="mb-3 text-blue-500">
                      {/* Target icon */}
                      <svg
                        width="36"
                        height="36"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="18" cy="18" r="8" />
                        <circle cx="18" cy="18" r="4" />
                        <path d="M18 2v4M18 30v4M2 18h4M30 18h4" />
                      </svg>
                    </span>
                    <h3 className="font-semibold text-xl text-blue-800 mb-2">
                      Authenticity
                    </h3>
                    <p className="text-blue-700 text-center">
                      We encourage creators to be true to themselves, building
                      trust and genuine connections with their audience.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
                    <span className="mb-3 text-blue-500">
                      {/* TrendingUp icon */}
                      <svg
                        width="36"
                        height="36"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 17l6 6 7-7 7 7 7-7" />
                        <path d="M21 10V3h7" />
                      </svg>
                    </span>
                    <h3 className="font-semibold text-xl text-blue-800 mb-2">
                      Community Growth
                    </h3>
                    <p className="text-blue-700 text-center">
                      We foster a supportive environment where creators help each
                      other grow and succeed together.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsComponent />

            {/* Join Us Section */}
            <section id="join" className="py-16 bg-white border-b border-blue-100">
              <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Join Us
                </h2>
                <p className="text-lg text-blue-800 mb-6">
                  Want to be part of the next wave of digital creators? Call us
                  at{" "}
                  <span className="font-bold text-blue-700 text-xl">
                    555-123-4567
                  </span>{" "}
                  and leave a voicemail telling us why you want to join Influence
                  U!
                </p>
                <p className="text-blue-600 mb-6">
                  After you leave your message, our team will review it and get
                  back to you with next steps. (This is a demo – but imagine the
                  possibilities!)
                </p>
                <a
                  href="tel:5551234567"
                  className="inline-block bg-blue-900 text-yellow-300 font-bold px-6 py-3 rounded-lg shadow hover:scale-105 hover:bg-blue-800 transition"
                >
                  Call Now
                </a>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-blue-50">
              <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Contact
                </h2>
                <p className="text-blue-800 mb-6">
                  Questions? Reach out and we’ll get back to you soon.
                </p>
                <form className="space-y-4 max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={4}
                  ></textarea>
                  <button
                    type="button"
                    className="w-full bg-blue-900 text-yellow-300 font-bold px-6 py-3 rounded-lg shadow hover:scale-105 hover:bg-blue-800 transition"
                    aria-disabled="true"
                  >
                    Send
                  </button>
                  <div className="text-xs text-blue-500">
                    (Demo form – not currently functional)
                  </div>
                </form>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-blue-200 py-6 mt-auto">
              <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2 mb-2 md:mb-0">
                  <span className="font-bold">Influence U</span>
                  <span className="text-blue-400">|</span>
                  <span>Empowering creators everywhere</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-yellow-300 transition"
                  >
                    {/* Twitter icon */}
                    <svg width="24" height="24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-yellow-300 transition"
                  >
                    {/* Instagram icon */}
                    <svg width="24" height="24" fill="currentColor">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm16-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    </svg>
                  </a>
                </div>
                <div className="text-xs text-blue-300 mt-2 md:mt-0">
                  © {new Date().getFullYear()} Influence U. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
