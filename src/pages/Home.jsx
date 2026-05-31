import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import heroImage from "../assets/images/hero.png";

import SearchBar from "../components/common/SearchBar";
import Stats from "../components/common/Stats";
import TrendingNotes from "../components/subject/TrendingNotes";

import AdPlaceholder from "../components/ads/AdPlaceholder";
import WhatsappChannel from "../components/common/WhatsappChannel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div
          className="
            absolute
            top-0
            right-0

            w-[250px]
            h-[250px]

            lg:w-[700px]
            lg:h-[700px]

            bg-cyan-500/10
            blur-[120px]
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto

            px-5
            lg:px-6

            pt-24
            lg:pt-36

            pb-10
            lg:pb-16
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2

              gap-5
              lg:gap-12

              items-center
            "
          >

            {/* LEFT */}

            <div>

              <div
                className="
                  inline-flex

                  px-3
                  py-1.5

                  rounded-full

                  bg-cyan-500/10

                  border
                  border-cyan-500/20

                  text-cyan-300

                  text-xs
                  lg:text-sm

                  mb-4
                "
              >
                Your Ultimate Study Companion
              </div>

              <h1
                className="
                  text-3xl

                  sm:text-4xl

                  lg:text-7xl

                  font-black

                  leading-tight
                "
              >

                Access Quality

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

                  Notes, PYQs & Books

                </span>

              </h1>

              <p
                className="
                  mt-4

                  text-slate-400

                  text-sm
                  lg:text-lg

                  leading-6
                  lg:leading-8

                  max-w-xl
                "
              >

                Download premium engineering notes,
                previous year question papers,
                books and exam resources.

              </p>

            </div>


            {/* RIGHT */}

            <div className="flex justify-center">

              <img
                src={heroImage}

                alt="Engineering Notes and Study Material"

                className="
                  w-full

                  max-w-[170px]

                  sm:max-w-[220px]

                  lg:max-w-[520px]

                  object-contain
                "
              />

            </div>

          </div>

          <AdPlaceholder label="Homepage Top Ad" />

          <SearchBar />

          <AdPlaceholder label="Homepage Middle Ad" />

          <Stats />

        </div>

      </section>


      {/* TRENDING NOTES */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-5
          lg:px-6
          pb-20
        "
      >

        <TrendingNotes />

      </section>


      {/* CTA */}

      <section
        className="
          max-w-7xl
          mx-auto

          px-5
          lg:px-6

          pb-20
        "
      >

        <div
          className="
            rounded-3xl

            bg-gradient-to-r

            from-cyan-500
            to-violet-600

            p-6
            lg:p-12

            flex

            flex-col
            lg:flex-row

            items-center
            justify-between

            gap-6
          "
        >

          <div>

            <h2 className="text-2xl lg:text-3xl font-bold">

              Get Unlimited Access

            </h2>

            <p className="mt-2 text-white/80">

              Join thousands of students using Auraa StudyHub.

            </p>

          </div>

          <button
            className="
              bg-white

              text-black

              px-8
              py-3

              rounded-xl

              font-bold
            "
          >

            Explore Now

          </button>

        </div>

      </section>
      
     <WhatsappChannel/>
     
      <Footer />

    </div>
  );
}