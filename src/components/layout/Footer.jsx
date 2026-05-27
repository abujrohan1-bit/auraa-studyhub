import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#020617]">

      {/* TOP GLOW */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>

            <Link
              to="/"
              className="text-3xl font-black tracking-tight"
            >
              <span className="text-white">
                Auraa
              </span>

              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                StudyHub
              </span>
            </Link>

            <p className="mt-5 text-slate-400 leading-7 text-sm">
              Free Engineering Notes, PYQs, Books and
              Important Questions for students.
              Built to help learners access quality
              study resources anytime.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
              Powered by AuraaWeb
            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-white font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">

              <Link
                to="/"
                className="hover:text-cyan-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-cyan-400 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </Link>

              <Link
                to="/privacy-policy"
                className="hover:text-cyan-400 transition"
              >
                Privacy Policy
              </Link>

            </div>

          </div>

          {/* STUDY RESOURCES */}

          <div>

            <h3 className="text-white font-bold mb-5">
              Study Resources
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">

              <span>
                Engineering Notes
              </span>

              <span>
                Previous Year Papers
              </span>

              <span>
                Reference Books
              </span>

              <span>
                Important Questions
              </span>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-white font-bold mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-slate-400 text-sm">

              <span>
                auraaweb26@gmail.com
              </span>

              <span>
                Available 24/7
              </span>

              <span>
                Fast Response Support
              </span>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">

            © {new Date().getFullYear()} AuraaWeb.
            All rights reserved.

          </p>

          <p className="text-slate-500 text-sm">

            Auraa StudyHub • Engineering Notes, PYQs & Books

          </p>

        </div>

      </div>

    </footer>
  );
}