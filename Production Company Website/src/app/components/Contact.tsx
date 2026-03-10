import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MzA4MTM3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Let's collaborate on your next project or discuss cinema
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a 
                      href="mailto:info@marott.co.uk" 
                      className="text-gray-400 hover:text-white transition-colors text-lg"
                    >
                      info@marott.co.uk
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-bold mb-4">Business Inquiries</h3>
                  <p className="text-gray-400 mb-4">
                    For production services, collaboration opportunities, or general
                    inquiries, please reach out via email. We typically respond within
                    24-48 hours.
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-bold mb-4">Article Submissions</h3>
                  <p className="text-gray-400 mb-4">
                    Interested in contributing to Marott Articles? We're always looking
                    for insightful perspectives on cinema. Send us your pitch or writing
                    sample.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-zinc-900 p-8 rounded-lg border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:bg-gray-200 transition-all"
                  >
                    Send Message
                    <Send size={20} />
                  </button>

                  <p className="text-gray-500 text-sm text-center">
                    Or email us directly at{" "}
                    <a 
                      href="mailto:info@marott.co.uk" 
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      info@marott.co.uk
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-black p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                What types of projects does Marott Production work on?
              </h3>
              <p className="text-gray-400">
                We work on a variety of projects including short films, commercials,
                music videos, branded content, and documentaries. We're open to
                discussing any creative project that aligns with our values and expertise.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                How can I submit an article to Marott Articles?
              </h3>
              <p className="text-gray-400">
                Send us an email with your pitch or a writing sample. We look for
                thoughtful, well-researched pieces that offer unique perspectives on
                cinema. Include a brief bio and why you're interested in contributing.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                What is your typical production timeline?
              </h3>
              <p className="text-gray-400">
                Timelines vary depending on the scope of the project. After our initial
                consultation, we'll provide a detailed timeline and production schedule
                tailored to your specific needs.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                Do you offer consulting services?
              </h3>
              <p className="text-gray-400">
                Yes, we offer creative consultation for filmmakers and production
                companies. This can include script development, production planning, or
                post-production guidance. Contact us to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
