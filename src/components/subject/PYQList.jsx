import { useParams } from "react-router-dom";
import { subjectResources } from "../../data/subjectResources";

export default function PYQList() {
  const { subjectSlug } = useParams();

  const papers =
    subjectResources[subjectSlug]?.pyqs || [];

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
        Previous Year Question Papers
      </h2>

      <div className="space-y-4">

        {papers.length === 0 && (
          <p className="text-slate-400">
            No PYQs Available
          </p>
        )}

        {papers.map((paper) => (

          <div
            key={paper.title}
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-5
            "
          >

            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-bold text-lg">
                  {paper.title}
                </h3>

                <p className="text-slate-400">
                  Previous Year Question Paper
                </p>
              </div>

              <div className="flex gap-3">

                <a
                  href={paper.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-5
                    py-3
                    rounded-xl
                    bg-cyan-500
                  "
                >
                  View
                </a>

                <a
                  href={paper.pdf}
                  download
                  className="
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-white/10
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