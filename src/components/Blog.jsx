import React from 'react';
import { Calendar, User, MessageSquare } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: 'Top 10 Tips for Your Kitchen Interior Design',
    category: 'Interior',
    date: 'March 20, 2020',
    author: 'Tom Black',
    comments: '0 Comments',
    image: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/03/post8.jpg',
  },
  {
    id: 2,
    title: 'The Golden Ratio Rule for Best 2D Sketch',
    category: 'Architecture',
    date: 'March 20, 2020',
    author: 'Tom Black',
    comments: '0 Comments',
    image: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/03/post9.jpg',
  },
  {
    id: 3,
    title: 'Use Pastel Colors & Natural Materials',
    category: 'Interior',
    date: 'March 19, 2020',
    author: 'Tom Black',
    comments: '0 Comments',
    image: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/03/post1.jpg',
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-[110px] pb-[160px] relative bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: `url('https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/07/bg2-home7.jpg')`,
      }}
    >
      {/* Background Overlay: background-color: #1A1A1A; opacity: 0.5; */}
      <div className="absolute inset-0 bg-[#1A1A1A]/70" />

      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        {/* Header with Title and "View all" Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div className="ot-heading">
            <span className="block text-[14px] uppercase font-semibold tracking-[2px] text-white/70 mb-3">
              [ our blog ]
            </span>
            <h2 className="text-[34px] sm:text-[42px] leading-[1.2] font-bold text-white font-['Titillium_Web'] tracking-tight">
              Read Our Latest News
            </h2>
          </div>

          <div className="mt-6 sm:mt-0">
            <a
              href="#blog"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] text-[13px] font-bold font-['Raleway'] tracking-[2px] uppercase py-[14px] px-[36px] transition-all duration-300"
            >
              View all
            </a>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white text-[#1a1a1a] shadow-xl overflow-hidden group transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#b07c5e] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-xs text-[#7A7A7A] mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#b07c5e]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#b07c5e]" />
                    {post.author}
                  </span>
                </div>

                <h4 className="text-[20px] font-bold text-[#1A1A1A] font-['Titillium_Web'] leading-snug group-hover:text-[#b07c5e] transition-colors">
                  <a href="#blog">{post.title}</a>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
