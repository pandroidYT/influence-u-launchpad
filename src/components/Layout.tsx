import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
              Influence U
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-blue-900 hover:text-blue-700 transition-colors">
                About
              </Link>
              <Link to="/vision" className="text-blue-900 hover:text-blue-700 transition-colors">
                Vision
              </Link>
              <Link to="/join-us" className="text-blue-900 hover:text-blue-700 transition-colors">
                Join Us
              </Link>
            </div>
            <Button asChild>
              <Link to="/join-us" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Influence U</h3>
              <p className="text-blue-200">Empowering the next generation of social media influencers.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/vision" className="text-blue-200 hover:text-white transition-colors">Vision</Link></li>
                <li><Link to="/join-us" className="text-blue-200 hover:text-white transition-colors">Join Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-blue-200">Email: info@influenceu.com</p>
              <p className="text-blue-200 mt-2">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">&copy; {new Date().getFullYear()} Influence U. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
