import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

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
            max-w-5xl
            mx-auto
            px-6
            pt-36
            pb-24
          "
        >

          {/* HEADER */}

          <div className="text-center mb-16">

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
              Privacy Policy
            </div>

            <h1
              className="
                text-5xl
                lg:text-6xl
                font-black
                leading-tight
              "
            >
              Your Privacy

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
                Matters
              </span>

            </h1>

          </div>

          {/* CONTENT */}

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              lg:p-12
              space-y-10
            "
          >

            {/* SECTION */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>

              <p className="text-slate-400 leading-8">
                Auraa StudyHub may collect basic
                non-personal information such as
                browser type, device type and usage
                analytics to improve the platform.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                Educational Purpose
              </h2>

              <p className="text-slate-400 leading-8">
                Auraa StudyHub is built only for
                educational and informational purposes
                for engineering students.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                Google AdSense & Cookies
              </h2>

              <p className="text-slate-400 leading-8">
                Third-party vendors including Google
                may use cookies to serve ads based on
                user visits to this website and other
                websites on the internet.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                External Links
              </h2>

              <p className="text-slate-400 leading-8">
                Some resources may contain external
                links. We are not responsible for
                external website content or policies.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                Contact Us
              </h2>

              <p className="text-slate-400 leading-8">
                If you have any questions regarding
                this Privacy Policy, contact us at:
              </p>

              <p className="text-cyan-400 mt-4">
                auraawebbusiness@gmail.com
              </p>

            </div>

            {/* FOOT */}

            <div className="pt-8 border-t border-white/10">

              <p className="text-sm text-slate-500">
                Last Updated: May 2026
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