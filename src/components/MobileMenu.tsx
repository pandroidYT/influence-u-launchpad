import React from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => (
  <div
    className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    aria-hidden={!open}
    onClick={onClose}
  >
    <nav
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
      aria-label="Mobile menu"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 text-gray-700"
        aria-label="Close menu"
        onClick={onClose}
      >
        ✕
      </button>
      <ul className="flex flex-col mt-20 space-y-6 px-8 text-lg font-semibold">
        <li><a href="#about" onClick={onClose}>About</a></li>
        <li><a href="#vision" onClick={onClose}>Vision</a></li>
        <li><a href="#testimonials" onClick={onClose}>Testimonials</a></li>
        <li><a href="#join" onClick={onClose}>Join Us</a></li>
        <li><a href="#contact" onClick={onClose}>Contact</a></li>
      </ul>
    </nav>
  </div>
);
