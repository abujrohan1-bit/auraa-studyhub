import { subjects } from "../../data/subjects";
import { Link } from "react-router-dom";

export default function TrendingNotes() {

  return (

    <section className="mt-16">

      <h2 className="text-3xl font-bold">

        Trending Notes

      </h2>

      <p className="text-slate-400 mt-2">

        Most viewed engineering resources

      </p>

      <div className="grid md:grid-cols-4 gap-5 mt-8">

        {subjects.map((item) => (

          <div
            key={item.title}
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-5
            "
          >

            <div className="text-5xl mb-4">

              📘

            </div>

            <h3 className="font-bold">

              {item.title}

            </h3>

            <p className="text-slate-400 text-sm mt-2">

              {item.branch}

            </p>
<Link
  to={item.link}
  className="
    mt-5
    block
    text-center
    w-full
    py-3
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-violet-500
    hover:scale-105
    transition-all
  "
>
  Open Notes
</Link>

          </div>

        ))}

      </div>

    </section>
  );
}