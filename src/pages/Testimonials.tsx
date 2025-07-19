import React from 'react';
import Layout from '@/components/layout';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Success Stories</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-blue-700 mb-8">
            See how Influence U has helped creators achieve their social media goals
          </p>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Featured Creators</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Story 1 */}
              <Card className="overflow-hidden">
                <img 
                  src="/uploads/part1.webp" 
                  alt="Sarah's Journey" 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Sarah's Journey
                  </h3>
                  <p className="text-blue-700">
                    "Thanks to Influence U, I turned my passion for sustainable living into a thriving community. Their guidance helped me grow from 1K to 100K followers in just 8 months!"
                  </p>
                </CardContent>
              </Card>

              {/* Story 2 */}
              <Card className="overflow-hidden">
                <img 
                  src="/uploads/part2.webp" 
                  alt="Mike's Success" 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Mike's Success
                  </h3>
                  <p className="text-blue-700">
                    "The strategies I learned at Influence U transformed my tech reviews channel. Their mentorship was crucial in helping me secure brand partnerships."
                  </p>
                </CardContent>
              </Card>

              {/* Story 3 */}
              <Card className="overflow-hidden">
                <img 
                  src="/uploads/part3.webp" 
                  alt="Lisa's Growth" 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Lisa's Growth
                  </h3>
                  <p className="text-blue-700">
                    "I went from struggling with content ideas to having a clear, engaging strategy. Now my fitness content reaches millions, and I've built a genuine community."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Famous Influencer Testimonials */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Famous Alumni Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Charli D'Amelio */}
              <Card className="overflow-hidden">
                <img 
                  src="/uploads/charli.webp" 
                  alt="Charli D'Amelio" 
                  className="w-full h-48 object-cover rounded-t"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Charli D'Amelio</h3>
                  <p className="text-blue-700 text-base">“I thought I had viral fame figured out, but Influence U taught me the one dance I hadn’t mastered – the algorithm two-step. Now I’m trending even in my sleep! 😄”</p>
                </CardContent>
              </Card>
              {/* MrBeast */}
              <Card className="overflow-hidden">
                <img 
                  src="/uploads/mrbeast.webp" 
                  alt="MrBeast" 
                  className="w-full h-48 object-cover rounded-t"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">MrBeast</h3>
                  <p className="text-blue-700 text-base">“I’ve done crazy challenges on YouTube, but enrolling in Influence U was next level. The best part? They didn’t even make me give away $100,000 to pass the final! My videos got better and I kept my money – talk about a win-win. 🎉”</p>
                </CardContent>
              </Card>
              {/* Rhett & Link */}
              <Card className="overflow-hidden">
                <img 
                  src="/uploads/gmm.webp" 
                  alt="Rhett & Link" 
                  className="w-full h-48 object-cover rounded-t"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Rhett & Link</h3>
                  <p className="text-blue-700 text-base">“We never thought we’d go back to school. But now it’s ‘Good Mythical Morning, class!’ thanks to Influence U. They even taught two old Internetainers like us some new tricks – our content is now mythically good and we got A+’s in having fun. ✨”</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-900 mb-2">500+</h3>
              <p className="text-blue-700">Successful Graduates</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-900 mb-2">85%</h3>
              <p className="text-blue-700">Growth in Engagement</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-900 mb-2">$2M+</h3>
              <p className="text-blue-700">Creator Earnings</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;

