export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">MAROTT</h3>
            <p className="text-gray-400 text-sm">
              Creating compelling stories through film production and
              insightful cinema analysis.
            </p>
          </div>
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/production" className="text-gray-400 hover:text-white transition-colors">
                  Production
                </a>
              </li>
              <li>
                <a href="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              Email us at:
            </p>
            <a href="mailto:info@marott.co.uk" className="text-white hover:text-gray-300 transition-colors">
              info@marott.co.uk
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Marott. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}