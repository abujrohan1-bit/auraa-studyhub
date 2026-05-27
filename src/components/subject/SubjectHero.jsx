import heroImage from "../../assets/images/hero.png";

export default function SubjectHero({ data }) {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-gradient-to-br
      from-[#071128]
      to-[#030712]
      p-8
      lg:p-12
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[400px]
        h-[400px]
        bg-cyan-500/10
        blur-[120px]
        "
      />

      <div
        className="
        grid
        lg:grid-cols-2
        gap-10
        items-center
        relative
        z-10
        "
      >
        {/* LEFT */}

        <div>
          <h1
            className="
            text-5xl
            lg:text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
            bg-clip-text
            text-transparent
            "
          >
            {data.title}
          </h1>

          <p className="text-xl mt-2 text-slate-300">
            {data.code}
          </p>

          <p
            className="
            mt-6
            text-slate-400
            leading-8
            max-w-xl
            "
          >
            {data.description}
          </p>
        </div>

        {/* RIGHT */}

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt={data.title}
            className="
            w-full
            max-w-[420px]
            object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}