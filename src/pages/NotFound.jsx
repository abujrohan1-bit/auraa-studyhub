import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-black text-cyan-400">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 mt-4 max-w-md">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="
            inline-block
            mt-8
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            font-semibold
          "
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}