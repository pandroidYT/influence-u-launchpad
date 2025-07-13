import React from 'react';
import Layout from '@/components/layout';

const About = () => {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
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
                  *Influence U is a fictional organization created by Professor Greg Thompson.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/uploads/Website-BlogPost-Image.jpg" 
                alt="People Dancing" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
