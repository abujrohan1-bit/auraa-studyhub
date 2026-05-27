import { Link, useParams } from "react-router-dom";
import { subjectDetails } from "../../data/subjectDetails";

export default function Breadcrumbs() {
const { subjectSlug } = useParams();

const data =
  subjectDetails[subjectSlug] ||
  subjectDetails["database-management-system"];

  return (
    <div className="text-sm text-slate-400 mb-6">

      <Link
        to="/"
        className="hover:text-cyan-400"
      >
        Home
      </Link>

      <span className="mx-2">›</span>

      <span>{data.branch}</span>

      <span className="mx-2">›</span>

      <span>{data.semester}</span>

      <span className="mx-2">›</span>

      <span className="text-white">
        {data.title}
      </span>

    </div>
  );
}