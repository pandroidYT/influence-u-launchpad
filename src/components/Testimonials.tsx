import React from "react";

const testimonials = [
  {
    name: "Charli D'Amelio",
    title: "TikTok Star",
    image: "/images/charli.png",
    alt: "Photo of Charli D'Amelio",
    quote: "I renagaded my way through the classes. Now I’m trending even in my sleep! 😄",
  },
  {
    name: "MrBeast",
    title: "YouTube Philanthropist",
    image: "/images/mrbeast.png",
    alt: "Photo of MrBeast",
    quote: "I’ve done crazy challenges on YouTube, but enrolling in Influence U was next level. The best part? They didn’t even make me give away $100,000 to pass the final! My videos got better and I kept my money – talk about a win-win. 🎉",
  },
  {
    name: "Rhett & Link",
    title: "Good Mythical Morning Hosts",
    image: "/images/gmm.webp",
    alt: "Photo of Rhett & Link",
    quote: "We never thought we’d go back to school. But now it’s ‘Good Mythical Morning, class!’ thanks to Influence U. They even taught two old Internetainers like us some new tricks – our content is now mythically good and we got A+’s in having fun. ✨",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-blue-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Student Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
            <img
              src={t.image}
              alt={t.alt}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200"
              loading="lazy"
            />
            <div className="text-lg font-semibold text-blue-800">{t.name}</div>
            <div className="text-sm text-blue-500 mb-2">{t.title}</div>
            <blockquote className="italic text-gray-700 text-center mt-2">“{t.quote}”</blockquote>
          </div>
        ))}
      </div>
    </div>
  </section>
);
