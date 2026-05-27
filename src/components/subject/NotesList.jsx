import { Link, useParams } from "react-router-dom";
import { subjectResources } from "../../data/subjectResources";

export default function NotesList() {
const { subjectSlug } = useParams();

const notes =
  subjectResources[subjectSlug]?.notes || [];

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
        Notes
      </h2>

      <div className="space-y-4">

        {notes.map((note) => (

          <div
            key={note.title}
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
                  {note.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {note.description}
                </p>

              </div>

              <div>

                <a
  href={note.pdf}
  target="_blank"
  rel="noreferrer"
                  className="
                    px-6
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500
                    font-medium
                    hover:scale-105
                    transition-all
                    inline-block
                  "
                >
                  View Notes
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}