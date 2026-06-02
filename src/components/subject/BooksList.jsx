import { useParams } from "react-router-dom";
import { subjectResources } from "../../data/subjectResources";

export default function BooksList() {
const { subjectSlug } = useParams();

const books =
  subjectResources[subjectSlug]?.books || [];

  return (
    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        PYQs Models
      </h2>

      <div className="space-y-4">

        {books.map((book) => (

          <div
            key={book.title}
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-5
              hover:border-cyan-400/30
              transition-all
            "
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

              <div>

                <h3 className="font-bold text-lg">
                  {book.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  Author: {book.author}
                </p>

              </div>

              <div className="flex gap-3">

                <a
                  href={book.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-5
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500
                    font-medium
                    hover:scale-105
                    transition-all
                  "
                >
                  View
                </a>

                <a
                  href={book.pdf}
                  download
                  className="
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition-all
                  "
                >
                  Download
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}