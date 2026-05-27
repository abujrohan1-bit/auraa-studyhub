import { useParams } from "react-router-dom";
import { subjectDetails } from "../../data/subjectDetails";

export default function SubjectSidebar() {
 const { subjectSlug } = useParams();

const data =
  subjectDetails[subjectSlug] ||
  subjectDetails["database-management-system"];

  return (
    <div className="space-y-6">

      {/* Navigation */}

      <div
        className="
        bg-white/5
        border border-white/10
        rounded-2xl
        p-5
      "
      >
        <h3 className="font-semibold mb-4">
          Navigation
        </h3>

        <div className="space-y-2">

          <button className="w-full text-left p-3 rounded-xl bg-white/10">
            Overview
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-white/5">
            Notes
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-white/5">
            PYQs
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-white/5">
            Books
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-white/5">
            Important Questions
          </button>

        </div>
      </div>

      {/* Subject Info */}

      <div
        className="
        bg-white/5
        border border-white/10
        rounded-2xl
        p-5
      "
      >
        <h3 className="font-semibold mb-4">
          Subject Info
        </h3>

        <div className="space-y-3 text-sm">

          <div>
            <span className="text-slate-400">
              Subject
            </span>
            <p>{data.title}</p>
          </div>

          <div>
            <span className="text-slate-400">
              Branch
            </span>
            <p>{data.branch}</p>
          </div>

          <div>
            <span className="text-slate-400">
              Semester
            </span>
            <p>{data.semester}</p>
          </div>

          <div>
            <span className="text-slate-400">
              Pattern
            </span>
            <p>{data.pattern}</p>
          </div>

        </div>
      </div>

      {/* Quick Actions */}

      <div
        className="
        bg-white/5
        border border-white/10
        rounded-2xl
        p-5
      "
      >
        <h3 className="font-semibold mb-4">
          Quick Actions
        </h3>

        <div className="flex gap-3">

          <button
            className="
            flex-1
            py-3
            rounded-xl
            bg-cyan-500
            font-medium
          "
          >
            Download All
          </button>

          <button
            className="
            flex-1
            py-3
            rounded-xl
            border
            border-violet-500
          "
          >
            Share
          </button>

        </div>

      </div>

    </div>
  );
}