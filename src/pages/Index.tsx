import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import Layout from '@/components/layout';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
              Welcome to <span className="text-transparent">Influence U</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-8 leading-relaxed">
              Empowering the next generation of social media influencers
            </p>
            <Button asChild>
              <Link
                to="/join-us"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Join the Movement
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-8 shadow-2xl">
              <img 
                src="/uploads/8827dd1b-8bd4-4060-bc41-4b35340cfb04.png" 
                alt="Content creator filming with professional setup" 
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
