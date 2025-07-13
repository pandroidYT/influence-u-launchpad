import React from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const JoinUs = () => {
  return (
    <Layout>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Join Influence U</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-blue-700">
              Ready to start your influencer journey? We'd love to hear from you!
            </p>
          </div>
          
          <Card className="shadow-xl border-blue-200">
            <CardContent className="p-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-8">
                <p className="text-blue-800 text-center">
                  <strong>Note:</strong> This is a demonstration form for proof of concept. no it doesn't work.
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
    </Layout>
  );
};

export default JoinUs;
