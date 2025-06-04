
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowDown, Lightbulb, Target, TrendingUp, Users } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IU</span>
              </div>
              <span className="text-xl font-bold text-blue-900">Influence U</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-blue-700 hover:text-blue-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('vision')} className="text-blue-700 hover:text-blue-900 transition-colors">Vision</button>
              <button onClick={() => scrollToSection('join')} className="text-blue-700 hover:text-blue-900 transition-colors">Join Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-blue-700 hover:text-blue-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Welcome to <span className="text-blue-600">Influence U</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-8 leading-relaxed">
              Empowering the next generation of social media influencers
            </p>
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join the Movement
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&crop=center" 
                alt="Content creator filming with professional setup" 
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Influence U</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Influence U, we provide comprehensive training, mentorship, and representation for aspiring social media influencers. Our expert team helps you develop authentic content strategies, build engaged communities, and turn your passion into a thriving career.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From content creation workshops to brand partnership negotiations, we guide you through every step of your influencer journey with personalized support and industry insights.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 italic">
                  *Influence U is a fictional company created by Professor Greg Thompson to help teach students effective communication.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center" 
                alt="Content creator working on laptop" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              We believe in empowering creators through four core principles that drive success in the digital world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Creativity</h3>
                <p className="text-gray-600">Unleash your unique voice and create content that resonates with your audience.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Strategy</h3>
                <p className="text-gray-600">Develop data-driven approaches to grow your influence and reach your goals.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Growth</h3>
                <p className="text-gray-600">Scale your influence with proven techniques and industry best practices.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Connection</h3>
                <p className="text-gray-600">Build authentic relationships with your community and brand partners.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Callout Section */}
      <section id="join" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl mb-8 leading-relaxed">
                Are you passionate about social media? Have the work ethic, creativity, and drive to make an impact? We want to hear from you!
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Call this number to leave a voicemail telling us about yourself and why you're interested, and we'll get back to you.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
                <p className="text-lg mb-2">Leave us a voicemail</p>
                <p className="text-2xl font-bold">📞 843-349-7108</p>
              </div>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Contact Us Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-blue-700">
              Ready to start your influencer journey? We'd love to hear from you!
            </p>
          </div>
          
          <Card className="shadow-xl border-blue-200">
            <CardContent className="p-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-8">
                <p className="text-blue-800 text-center">
                  <strong>Note:</strong> This is a demonstration form for a college communications project. For actual inquiries, please call the number above.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-blue-900 font-medium">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name" 
                      className="mt-2 border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-blue-900 font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="mt-2 border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-blue-900 font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your social media goals and experience..." 
                    className="mt-2 border-blue-200 focus:border-blue-500 h-32"
                  />
                </div>
                
                <Button 
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Send Message (Demo Only)
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IU</span>
                </div>
                <span className="text-xl font-bold">Influence U</span>
              </div>
              <p className="text-blue-200">
                Empowering the next generation of social media influencers through education, mentorship, and strategic growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <p className="text-blue-200 mb-2">📞 843-349-7108</p>
              <p className="text-blue-200 mb-2">✉️ hello@influenceu.com</p>
              <p className="text-blue-200">📍 Virtual Campus Worldwide</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Our Logo</h3>
              <div className="flex justify-center md:justify-start">
                <img 
                  src="/lovable-uploads/8827dd1b-8bd4-4060-bc41-4b35340cfb04.png" 
                  alt="Influence U Logo" 
                  className="h-16 w-auto bg-white rounded-lg p-2"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-300">
              © 2024 Influence U. This is a fictional company created for educational purposes in a professional communications course.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
