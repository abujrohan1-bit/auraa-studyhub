import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function About() {
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
            right-0
            w-[700px]
            h-[700px]
            bg-cyan-500/10
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

          {/* TOP BADGE */}

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
              About Auraa StudyHub
            </div>

            {/* HEADING */}

            <h1
              className="
                text-5xl
                lg:text-7xl
                font-black
                leading-tight
              "
            >
              Empowering

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
                Engineering Students
              </span>

            </h1>

            {/* SUBTEXT */}

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
              Auraa StudyHub is a modern educational
              platform built to help engineering students
              access high-quality Notes, PYQs, Books
              and Important Questions in one place.
            </p>

          </div>

          {/* FEATURE CARDS */}

          <div className="grid lg:grid-cols-3 gap-6 mt-20">

            {/* CARD 1 */}

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
                📘
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Smart Study Material
              </h2>

              <p className="text-slate-400 leading-7">
                Access well-organized Notes,
                unit-wise PDFs and exam-focused
                engineering resources.
              </p>

            </div>

            {/* CARD 2 */}

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
                📄
              </div>

              <h2 className="text-2xl font-bold mb-4">
                PYQs & Practice
              </h2>

              <p className="text-slate-400 leading-7">
                Improve preparation using Previous
                Year Question Papers and important
                university questions.
              </p>

            </div>

            {/* CARD 3 */}

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
                Student Focused
              </h2>

              <p className="text-slate-400 leading-7">
                Built to simplify engineering
                education and save students
                valuable study time.
              </p>

            </div>

          </div>

          {/* MISSION SECTION */}

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

            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p
              className="
                text-slate-300
                text-lg
                leading-8
              "
            >
              Our mission is to provide a clean,
              fast and organized platform where
              engineering students can access
              educational resources without wasting
              time searching across multiple websites.
            </p>

            {/* CONTACT */}

            <div className="mt-10">

              <h3 className="text-2xl font-bold mb-4">
                Contact
              </h3>

              <p className="text-slate-300">
                auraaweb26@gmail.com
              </p>

            </div>

            {/* POWERED BY */}

            <div className="mt-12 pt-6 border-t border-white/10">

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