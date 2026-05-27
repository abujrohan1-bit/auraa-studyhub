import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      {/* HERO SECTION */}

      <section className="relative overflow-hidden">

        {/* GLOW */}

        <div
          className="
            absolute
            top-0
            left-0
            w-[700px]
            h-[700px]
            bg-violet-500/10
            blur-[180px]
          "
        />

        <div
          className="
            max-w-6xl
            mx-auto
            px-6
            pt-36
            pb-24
          "
        >

          {/* TOP */}

          <div className="text-center">

            <div
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
                text-sm
                mb-6
              "
            >
              Contact Auraa StudyHub
            </div>

            <h1
              className="
                text-5xl
                lg:text-7xl
                font-black
                leading-tight
              "
            >
              Let's Connect

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-400
                  to-violet-500
                  bg-clip-text
                  text-transparent
                "
              >
                With Students
              </span>

            </h1>

            <p
              className="
                mt-8
                text-slate-400
                text-lg
                leading-8
                max-w-3xl
                mx-auto
              "
            >
              Have questions, suggestions or resource requests?
              Feel free to contact us anytime.
            </p>

          </div>

          {/* CONTACT CARDS */}

          <div className="grid lg:grid-cols-3 gap-6 mt-20">

            {/* EMAIL */}

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-cyan-400/30
                transition-all
              "
            >

              <div className="text-5xl mb-6">
                📧
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Email Support
              </h2>

              <p className="text-slate-400 leading-7 mb-6">
                Contact us regarding notes,
                PYQs, books or technical issues.
              </p>

              <a
                href="mailto:auraawebbusiness@gmail.com"
                className="
                  text-cyan-400
                  hover:text-cyan-300
                  transition-all
                "
              >
                auraaweb26@gmail.com
              </a>

            </div>

            {/* EDUCATION */}

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-violet-400/30
                transition-all
              "
            >

              <div className="text-5xl mb-6">
                🎓
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Educational Purpose
              </h2>

              <p className="text-slate-400 leading-7">
                Auraa StudyHub is built to help
                engineering students access
                organized educational resources.
              </p>

            </div>

            {/* FUTURE */}

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-cyan-400/30
                transition-all
              "
            >

              <div className="text-5xl mb-6">
                🚀
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Future Updates
              </h2>

              <p className="text-slate-400 leading-7">
                More study materials, PDFs,
                branch resources and smart
                features are coming soon.
              </p>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div
            className="
              mt-20
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-10
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#0f172a]
                  border
                  border-white/10
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#0f172a]
                  border
                  border-white/10
                  outline-none
                "
              />

            </div>

            <textarea
              placeholder="Your Message"
              rows="6"
              className="
                mt-6
                w-full
                px-5
                py-4
                rounded-2xl
                bg-[#0f172a]
                border
                border-white/10
                outline-none
              "
            />

            <button
              className="
                mt-6
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-violet-500
                font-semibold
                hover:opacity-90
                transition-all
              "
            >
              Send Message
            </button>

            {/* POWERED */}

            <div className="mt-10 pt-6 border-t border-white/10">

              <p className="text-sm text-slate-500">
                Built for students with ❤️
              </p>

              <p className="text-xs text-slate-600 mt-2">
                Powered by AuraaWeb
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}