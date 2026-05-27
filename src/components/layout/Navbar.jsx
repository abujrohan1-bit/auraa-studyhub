import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50">

      <div className="w-full">

        <div
          className="
          w-full
          h-[30px]
          px-8
          flex
          items-center
          justify-between
          backdrop-blur-xl
          bg-white/5
          border-b
          border-white/10
          "
        >

          {/* LOGO */}

          <Link
            to="/"
            className="text-[26px]
font-bold
tracking-tight"
          >

            <span className="text-white">
              Study
            </span>

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Hub
            </span>

          </Link>

          {/* DESKTOP MENU */}

          <div className="hidden lg:flex items-center gap-14 text-sm font-semibold tracking-wide">

            <Link
              to="/"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              to="/notes"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Notes
            </Link>

            <Link
              to="/pyqs"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              PYQs
            </Link>

            <Link
              to="/books"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Books
            </Link>

            <Link
              to="/about"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Contact
            </Link>

          </div>

          {/* RIGHT BUTTON */}

          <div className="hidden lg:block">

            <button className="
h-[48px]
px-8
rounded-xl
bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/30
">

              Explore

            </button>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-white"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}

        {open && (

          <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 lg:hidden shadow-2xl">

            <Link
              to="/"
              className="text-slate-300 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/notes"
              className="text-slate-300 hover:text-cyan-400"
            >
              Notes
            </Link>

            <Link
              to="/pyqs"
              className="text-slate-300 hover:text-cyan-400"
            >
              PYQs
            </Link>

            <Link
              to="/books"
              className="text-slate-300 hover:text-cyan-400"
            >
              Books
            </Link>

            <Link
              to="/about"
              className="text-slate-300 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-slate-300 hover:text-cyan-400"
            >
              Contact
            </Link>

          </div>

        )}

      </div>

    </nav>

  );

}