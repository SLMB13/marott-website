import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";

export function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Analysis", "Review", "Essay", "Technical", "Interview"];

  const featuredArticle = {
    title: "The Evolution of Cinematography in Modern Cinema",
    excerpt:
      "An in-depth exploration of how digital technology has transformed the visual language of contemporary filmmaking, from color grading to camera movement, and what it means for the future of cinema.",
    author: "Marott Team",
    date: "March 8, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1643753072748-cac34c448e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwbW92aWUlMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzczMTM5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Analysis",
  };

  const articles = [
    {
      id: 1,
      title: "Breaking Down the Visual Language of Blade Runner 2049",
      excerpt: "How Roger Deakins created a dystopian masterpiece through innovative lighting techniques and masterful composition that redefined modern cinematography.",
      author: "Marott Team",
      date: "March 5, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1553377102-31f26497d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbCUyMGZpbG1tYWtpbmd8ZW58MXx8fHwxNzczMTM5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Technical",
    },
    {
      id: 2,
      title: "The Art of Sound Design in Horror Films",
      excerpt: "Examining how audio creates atmosphere and drives emotional impact in genre cinema, from classic techniques to modern innovations.",
      author: "Marott Team",
      date: "March 1, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1678655538413-b0f9623b0f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBwcm9kdWN0aW9uJTIwZmlsbSUyMHNldHxlbnwxfHx8fDE3NzMxMzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Analysis",
    },
    {
      id: 3,
      title: "Character Development in Contemporary Indie Films",
      excerpt: "Why smaller budgets often lead to richer, more nuanced character work and what mainstream cinema can learn from independent filmmaking.",
      author: "Marott Team",
      date: "February 26, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGJlaGluZCUyMHNjZW5lc3xlbnwxfHx8fDE3NzMwODczMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Essay",
    },
    {
      id: 4,
      title: "The Renaissance of Asian Cinema",
      excerpt: "How filmmakers from Korea, Japan, and China are reshaping global cinema and influencing Western storytelling techniques.",
      author: "Marott Team",
      date: "February 20, 2026",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1758874384555-37d50c0ee81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcmV2aWV3JTIwbm90ZWJvb2slMjBkZXNrfGVufDF8fHx8MTc3MzEzOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Analysis",
    },
    {
      id: 5,
      title: "Editing Rhythms: The Invisible Art",
      excerpt: "Understanding how cutting patterns create emotional beats and narrative flow, and why editing is the true final rewrite.",
      author: "Marott Team",
      date: "February 15, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1643753072748-cac34c448e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwbW92aWUlMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzczMTM5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Technical",
    },
    {
      id: 6,
      title: "Documentary Ethics in the Digital Age",
      excerpt: "Exploring the responsibilities of truth-telling in modern documentary filmmaking and the challenges posed by new technologies.",
      author: "Marott Team",
      date: "February 10, 2026",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1553377102-31f26497d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbCUyMGZpbG1tYWtpbmd8ZW58MXx8fHwxNzczMTM5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Essay",
    },
    {
      id: 7,
      title: "Auteur Theory in the Streaming Era",
      excerpt: "Does the concept of the auteur still hold meaning in an age of showrunners and algorithmic content creation?",
      author: "Marott Team",
      date: "February 5, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1770745560263-a8fc696de90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMGFic3RyYWN0JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzMxMzk2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Essay",
    },
    {
      id: 8,
      title: "The Power of Practical Effects",
      excerpt: "Why many filmmakers are returning to practical effects and what they offer that CGI cannot replicate.",
      author: "Marott Team",
      date: "January 28, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1678655538413-b0f9623b0f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBwcm9kdWN0aW9uJTIwZmlsbSUyMHNldHxlbnwxfHx8fDE3NzMxMzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Technical",
    },
    {
      id: 9,
      title: "Parasite: A Masterclass in Visual Storytelling",
      excerpt: "Analyzing Bong Joon-ho's use of space, composition, and metaphor in creating a modern classic.",
      author: "Marott Team",
      date: "January 20, 2026",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGJlaGluZCUyMHNjZW5lc3xlbnwxfHx8fDE3NzMwODczMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Review",
    },
    {
      id: 10,
      title: "The Role of Color in Film Noir",
      excerpt: "How modern filmmakers reinterpret the noir aesthetic through contemporary color palettes and grading techniques.",
      author: "Marott Team",
      date: "January 15, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1643753072748-cac34c448e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwbW92aWUlMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzczMTM5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Analysis",
    },
    {
      id: 11,
      title: "Interview: Emerging Voices in British Cinema",
      excerpt: "Conversations with up-and-coming UK filmmakers about their creative process and vision for the future.",
      author: "Marott Team",
      date: "January 10, 2026",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1758874384555-37d50c0ee81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcmV2aWV3JTIwbm90ZWJvb2slMjBkZXNrfGVufDF8fHx8MTc3MzEzOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Interview",
    },
    {
      id: 12,
      title: "The Long Take: When and Why to Use It",
      excerpt: "Examining the artistic and narrative purposes of long takes, from Hitchcock to modern masters.",
      author: "Marott Team",
      date: "January 5, 2026",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1553377102-31f26497d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbCUyMGZpbG1tYWtpbmd8ZW58MXx8fHwxNzczMTM5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Technical",
    },
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758874384555-37d50c0ee81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcmV2aWV3JTIwbm90ZWJvb2slMjBkZXNrfGVufDF8fHx8MTc3MzEzOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Writing desk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Marott Articles
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Critical analysis and thoughtful perspectives on the art of cinema
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-white text-black text-sm font-bold">
              FEATURED
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-zinc-800 text-sm mb-4">
                {featuredArticle.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-gray-300 transition-colors cursor-pointer">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              <button className="group flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 transition-all">
                Read Full Article
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-zinc-900 sticky top-20 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Tag className="text-gray-400 flex-shrink-0" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-black text-gray-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
          </h2>
          <p className="text-gray-400 mb-12">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-700 transition-all cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-zinc-700 text-xs mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Subscribe to receive our latest articles and film analysis directly to your inbox.
            Join our community of cinema enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
            <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Topics We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Film Analysis</h3>
              <p className="text-gray-400 text-sm">
                Deep dives into the themes, symbolism, and narrative structure of
                notable films from around the world.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Technical Breakdowns</h3>
              <p className="text-gray-400 text-sm">
                Exploring the craft of filmmaking: cinematography, editing, sound
                design, and visual effects.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Director Spotlights</h3>
              <p className="text-gray-400 text-sm">
                Examining the careers and distinctive styles of influential
                filmmakers, both established and emerging.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Industry Trends</h3>
              <p className="text-gray-400 text-sm">
                Discussing the evolving landscape of cinema in the streaming era
                and beyond.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Film History</h3>
              <p className="text-gray-400 text-sm">
                Revisiting classics and tracing the evolution of cinematic
                techniques and movements.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Interviews</h3>
              <p className="text-gray-400 text-sm">
                Conversations with filmmakers, cinematographers, editors, and
                other creative professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
