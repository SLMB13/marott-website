import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Award, Users, Camera, Clock, Clapperboard, Sparkles } from "lucide-react";

export function Production() {
  const pastProjects = [
    {
      id: 1,
      title: "Silent Echoes",
      category: "Short Film",
      year: "2024",
      description: "A poignant exploration of memory and loss through visual storytelling.",
      image: "https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGJlaGluZCUyMHNjZW5lc3xlbnwxfHx8fDE3NzMwODczMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      awards: "Best Short Film - London Independent Film Festival 2024",
    },
    {
      id: 2,
      title: "Urban Fragments",
      category: "Documentary",
      year: "2023",
      description: "Capturing the essence of modern city life through intimate portraits.",
      image: "https://images.unsplash.com/photo-1678655538413-b0f9623b0f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBwcm9kdWN0aW9uJTIwZmlsbSUyMHNldHxlbnwxfHx8fDE3NzMxMzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      awards: "Audience Choice Award - Sheffield Doc/Fest 2023",
    },
    {
      id: 3,
      title: "The Last Frame",
      category: "Experimental",
      year: "2023",
      description: "A bold visual experiment pushing the boundaries of narrative cinema.",
      image: "https://images.unsplash.com/photo-1553377102-31f26497d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbCUyMGZpbG1tYWtpbmd8ZW58MXx8fHwxNzczMTM5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Beneath the Surface",
      category: "Short Film",
      year: "2022",
      description: "An atmospheric thriller exploring the depths of human psychology.",
      image: "https://images.unsplash.com/photo-1643753072748-cac34c448e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwbW92aWUlMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzczMTM5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Luminous",
      category: "Music Video",
      year: "2022",
      description: "A visually stunning music video blending practical and digital effects.",
      image: "https://images.unsplash.com/photo-1770745560263-a8fc696de90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMGFic3RyYWN0JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzMxMzk2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "Brand Stories: Tech Innovators",
      category: "Commercial",
      year: "2022",
      description: "A series of branded documentaries highlighting technology pioneers.",
      image: "https://images.unsplash.com/photo-1758874384555-37d50c0ee81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcmV2aWV3JTIwbm90ZWJvb2slMjBkZXNrfGVufDF8fHx8MTc3MzEzOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const currentProjects = [
    {
      id: 1,
      title: "Meridian",
      category: "Short Film",
      status: "Post-Production",
      description: "A sci-fi drama exploring themes of time and consequence. Currently in final color grading and sound mix.",
      image: "https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGJlaGluZCUyMHNjZW5lc3xlbnwxfHx8fDE3NzMwODczMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      expectedCompletion: "April 2026",
    },
    {
      id: 2,
      title: "Voices of the Midlands",
      category: "Documentary Series",
      status: "Production",
      description: "A documentary series capturing diverse stories from communities across the Midlands.",
      image: "https://images.unsplash.com/photo-1678655538413-b0f9623b0f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBwcm9kdWN0aW9uJTIwZmlsbSUyMHNldHxlbnwxfHx8fDE3NzMxMzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      expectedCompletion: "June 2026",
    },
    {
      id: 3,
      title: "Autumn Campaign 2026",
      category: "Commercial",
      status: "Pre-Production",
      description: "A series of commercial spots for a sustainable fashion brand. Concept development in progress.",
      image: "https://images.unsplash.com/photo-1553377102-31f26497d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbCUyMGZpbG1tYWtpbmd8ZW58MXx8fHwxNzczMTM5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      expectedCompletion: "May 2026",
    },
  ];

  const futureProjects = [
    {
      id: 1,
      title: "Feature Film in Development",
      category: "Feature Film",
      description: "Our first feature-length project. A character-driven drama set in contemporary Britain. Script development and funding in progress.",
      phase: "Development",
    },
    {
      id: 2,
      title: "Documentary: The Art of Craft",
      category: "Documentary",
      description: "Exploring traditional craftsmanship in the digital age. Researching artisans across the UK.",
      phase: "Research",
    },
    {
      id: 3,
      title: "Experimental Film Series",
      category: "Experimental",
      description: "A series of short experimental films pushing the boundaries of visual storytelling.",
      phase: "Concept",
    },
  ];

  const stats = [
    { icon: Camera, value: "20+", label: "Projects Completed" },
    { icon: Award, value: "12", label: "Awards & Nominations" },
    { icon: Users, value: "75+", label: "Collaborators" },
    { icon: Play, value: "250K+", label: "Total Views" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1553377102-31f26497d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbCUyMGZpbG1tYWtpbmd8ZW58MXx8fHwxNzczMTM5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Film production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Marott Production
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Crafting visual stories that resonate, inspire, and endure
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="mx-auto mb-4 text-white" size={40} />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Works Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Clock className="text-white" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">Current Works</h2>
          </div>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Projects currently in various stages of production. From pre-production
            planning to final post-production touches, these are the stories we're
            actively bringing to life.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-zinc-900 rounded-lg overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-bold">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-500">
                      Expected: {project.expectedCompletion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Clapperboard className="text-white" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">Past Projects</h2>
          </div>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            A selection of our completed works. Each project represents a unique
            creative journey and collaboration.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-700 transition-all cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="text-white" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  {project.awards && (
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-start gap-2">
                        <Award className="text-yellow-500 flex-shrink-0 mt-1" size={16} />
                        <p className="text-sm text-gray-400">{project.awards}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Sparkles className="text-white" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">Future Projects</h2>
          </div>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Projects in early development and on the horizon. These represent our
            vision for the future of Marott Production.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {futureProjects.map((project) => (
              <div
                key={project.id}
                className="bg-black p-8 rounded-lg border border-white/20 hover:border-white/40 transition-all"
              >
                <div className="inline-block px-3 py-1 bg-white/10 text-sm mb-4">
                  {project.phase}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.category}</p>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-gray-400 text-lg">
              At Marott Production, we believe in the power of visual storytelling
              to create emotional connections and provoke thought. Every project is
              an opportunity to explore new perspectives and push creative boundaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Pre-Production</h3>
              <p className="text-gray-400">
                Meticulous planning and creative development ensure every story
                is told with clarity and purpose. From script to storyboard, we
                lay the groundwork for success.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Production</h3>
              <p className="text-gray-400">
                Collaborative execution with talented crews bringing visions
                to life through technical excellence and creative problem-solving.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Post-Production</h3>
              <p className="text-gray-400">
                Careful editing and refinement transform raw footage into
                compelling finished works that resonate with audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a Story to Tell?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's collaborate to bring your vision to life through the power of cinema.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
