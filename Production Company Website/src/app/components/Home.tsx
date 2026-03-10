import { Link } from "react-router";
import { ArrowRight, Film, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1678655538413-b0f9623b0f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBwcm9kdWN0aW9uJTIwZmlsbSUyMHNldHxlbnwxfHx8fDE3NzMxMzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Film production set"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            MAROTT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Where stories come to life through cinematic excellence and critical insight
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/production"
              className="group px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all inline-flex items-center justify-center gap-2"
            >
              Explore Production
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/articles"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-2"
            >
              Read Articles
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Two Passions, One Vision
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Marott is a creative studio that bridges the gap between filmmaking
                and film criticism. We don't just create stories—we analyze,
                deconstruct, and celebrate the art of cinema.
              </p>
              <p className="text-gray-400 text-lg">
                Our dual approach allows us to bring a unique perspective to both
                our productions and our critical analysis, informed by a deep
                understanding of what makes cinema truly powerful.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553377102-31f26497d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbCUyMGZpbG1tYWtpbmd8ZW58MXx8fHwxNzczMTM5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional film camera"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Production Card */}
            <Link
              to="/production"
              className="group relative overflow-hidden rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGJlaGluZCUyMHNjZW5lc3xlbnwxfHx8fDE3NzMwODczMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Film production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Film className="text-white" size={32} />
                  <h3 className="text-3xl font-bold">Marott Production</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Creating compelling short films, commercials, and visual narratives
                  that captivate audiences and tell meaningful stories.
                </p>
                <div className="flex items-center text-white group-hover:gap-3 gap-2 transition-all">
                  View Our Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </div>
            </Link>

            {/* Articles Card */}
            <Link
              to="/articles"
              className="group relative overflow-hidden rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643753072748-cac34c448e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjB0aGVhdGVyJTIwbW92aWUlMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzczMTM5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cinema theater"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="text-white" size={32} />
                  <h3 className="text-3xl font-bold">Marott Articles</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  In-depth analysis, reviews, and critical essays exploring the art
                  and craft of cinema from around the world.
                </p>
                <div className="flex items-center text-white group-hover:gap-3 gap-2 transition-all">
                  Read Our Articles
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
