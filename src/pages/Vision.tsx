import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, TrendingUp } from 'lucide-react';

const Vision = () => {
  return (
    <Layout>
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              We envision a future where passionate creators can transform their social media presence into thriving careers through expert guidance and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-xl border-blue-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation First</h3>
                <p className="text-blue-700 leading-relaxed">
                  Stay ahead of social media trends with cutting-edge strategies and creative content ideas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-blue-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Authentic Growth</h3>
                <p className="text-blue-700 leading-relaxed">
                  Build genuine connections with your audience through authentic content and meaningful engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-blue-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Sustainable Success</h3>
                <p className="text-blue-700 leading-relaxed">
                  Develop long-term strategies for sustained growth and monetization of your social media presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
