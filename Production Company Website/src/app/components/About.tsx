import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Film, FileText, Users, Target } from "lucide-react";

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGNyZWF0aXZlJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzE0MDE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            About Marott
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A creative studio dedicated to storytelling through production and analysis
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Marott began with a simple belief: that truly understanding cinema requires
              both creating it and critically analyzing it. We are filmmakers who are also
              critics, and critics who understand the craft of filmmaking.
            </p>
            <p>
              This dual perspective informs everything we do. Our production work benefits
              from a deep understanding of film theory and history, while our critical
              analysis is grounded in the practical realities of filmmaking.
            </p>
            <p>
              Based in the UK, we've worked on diverse projects ranging from short films
              and commercials to in-depth analytical essays exploring the works of both
              established masters and emerging voices in cinema.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black p-10 rounded-lg border border-white/10">
              <Film className="text-white mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4">Marott Production</h3>
              <p className="text-gray-400 text-lg mb-6">
                We create compelling visual narratives across multiple formats including
                short films, commercials, music videos, and branded content. Our approach
                combines technical excellence with emotional storytelling.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Short Films & Documentaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Commercial & Branded Content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Music Videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Creative Consultation</span>
                </li>
              </ul>
            </div>

            <div className="bg-black p-10 rounded-lg border border-white/10">
              <FileText className="text-white mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4">Marott Articles</h3>
              <p className="text-gray-400 text-lg mb-6">
                Our critical writing explores cinema from multiple angles: technical
                analysis, thematic exploration, historical context, and cultural impact.
                We aim to deepen appreciation for the art of filmmaking.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Film Reviews & Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Technical Breakdowns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Industry Essays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Filmmaker Interviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <Target className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p className="text-gray-400">
                We are committed to excellence in every frame we shoot and every word
                we write. Quality is non-negotiable.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-400">
                Great work comes from great teams. We value the contributions of every
                collaborator and believe in the power of collective creativity.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <Film className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
              <p className="text-gray-400">
                We create and critique with honesty and integrity, staying true to our
                vision while respecting the art form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The Team
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-16">
            Marott is powered by a collective of passionate filmmakers, writers, and
            creatives who bring diverse perspectives and skills to every project.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add team members here - placeholder structure */}
            <div className="bg-black p-8 rounded-lg border border-white/10 text-center">
              <div className="w-32 h-32 rounded-full bg-zinc-800 mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Team Member</h3>
              <p className="text-gray-400 text-sm mb-4">Director / Writer</p>
              <p className="text-gray-500 text-sm">
                Passionate about visual storytelling and cinematic analysis.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10 text-center">
              <div className="w-32 h-32 rounded-full bg-zinc-800 mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Team Member</h3>
              <p className="text-gray-400 text-sm mb-4">Producer / Editor</p>
              <p className="text-gray-500 text-sm">
                Dedicated to bringing stories to life through meticulous craft.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10 text-center">
              <div className="w-32 h-32 rounded-full bg-zinc-800 mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Team Member</h3>
              <p className="text-gray-400 text-sm mb-4">Cinematographer</p>
              <p className="text-gray-500 text-sm">
                Crafting compelling visuals that serve the narrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work With Us
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Interested in collaborating on a project or have a story you'd like us to cover?
            We'd love to hear from you.
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
