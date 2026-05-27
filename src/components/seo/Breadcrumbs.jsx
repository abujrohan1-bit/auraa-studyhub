import { Link } from "react-router-dom";

export default function Breadcrumbs({
  branch,
  semester,
  subject,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">

      <Link
        to="/"
        className="hover:text-cyan-400"
      >
        Home
      </Link>

      <span>/</span>

      <span>{branch}</span>

      <span>/</span>

      <span>{semester}</span>

      <span>/</span>

      <span className="text-cyan-400">
        {subject}
      </span>

    </div>
  );
}