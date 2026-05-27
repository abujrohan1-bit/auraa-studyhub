import { useParams } from "react-router-dom";
import { subjectDetails } from "../../data/subjectDetails";

export default function SubjectInfoCards() {
const { subjectSlug } = useParams();

const data =
  subjectDetails[subjectSlug] ||
  subjectDetails["database-management-system"];

  return (
    <div className="space-y-6">

      {/* About Subject */}

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
        "
      >
        <h3 className="text-xl font-bold mb-4">
          About {data.title}
        </h3>

        <p className="text-slate-400 leading-7">
          {data.description}
        </p>
      </div>

      {/* Resources */}

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
        "
      >
        <h3 className="text-xl font-bold mb-4">
          Resources
        </h3>

        <ul className="space-y-3 text-slate-300">
          <li>✓ Notes</li>
          <li>✓ Previous Year Papers</li>
          <li>✓ Books</li>
          <li>✓ Important Questions</li>
        </ul>
      </div>

      {/* Need Help */}

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
        "
      >
        <h3 className="text-xl font-bold mb-4">
          Need Help?
        </h3>

        <p className="text-slate-400 mb-5">
          Can't find the resource you're looking for?
        </p>

        <button
          className="
          w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          font-medium
          "
        >
          Contact Us
        </button>
      </div>

    </div>
  );
}