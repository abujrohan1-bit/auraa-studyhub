
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { subjects } from "../../data/subjects";

export default function SearchBar() {
  const navigate = useNavigate();

  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const branches = [
    ...new Set(subjects.map((item) => item.branch)),
  ];

  const semesters = [
    ...new Set(
      subjects
        .filter((item) => item.branch === branch)
        .map((item) => item.semester)
    ),
  ];

  const filteredSubjects = subjects.filter(
    (item) =>
      item.branch === branch &&
      item.semester === semester
  );

  const filteredSearchResults = subjects.filter((item) =>
    item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleExplore = () => {
    const selected = subjects.find(
      (item) => item.slug === subject
    );

    if (!selected) {
      alert("Please select a subject");
      return;
    }

    navigate(selected.link);
  };

  return (
    <div className="mt-10">

      <div
        className="
        bg-white/5
        border
        border-white/10
        rounded-2xl
        p-4
        backdrop-blur-xl
        "
      >

        {/* Smart Search */}

        <div className="relative mb-4">

          <input
            type="text"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search subjects, notes, PYQs..."
            className="
              w-full
              px-4
              py-4
              rounded-xl
              bg-[#0f172a]
              border
              border-white/10
              outline-none
              text-white
            "
          />

          <p className="text-white mt-2">
  Search: {searchTerm}
</p>

<p className="text-yellow-400">
  Results: {filteredSearchResults.length}
</p>

          {searchTerm && (
            <div
              className="
              absolute
              top-full
              left-0
              right-0
              mt-2
              bg-[#0f172a]
              border
              border-white/10
              rounded-xl
              overflow-hidden
              z-50
              "
            >
              {filteredSearchResults
                .slice(0, 6)
                .map((item) => (

                  <button
                    key={item.slug}
                    onClick={() => {
                      navigate(item.link);
                      setSearchTerm("");
                    }}
                    className="
                    w-full
                    text-left
                    px-4
                    py-3
                    hover:bg-white/5
                    border-b
                    border-white/5
                    "
                  >
                    📘 {item.title}
                  </button>

              ))}

              {filteredSearchResults.length === 0 && (
                <div className="px-4 py-3 text-slate-400">
                  No results found
                </div>
              )}

            </div>
          )}

        </div>

        {/* Filters */}

        <div className="grid md:grid-cols-4 gap-3">

          {/* Branch */}

          <select
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
              setSemester("");
              setSubject("");
            }}
            className="
              px-4
              py-4
              rounded-xl
              bg-[#0f172a]
              border
              border-white/10
              text-white
            "
          >
            <option value="">
              Select Branch
            </option>

            {branches.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          {/* Semester */}

          <select
            value={semester}
            onChange={(e) => {
              setSemester(e.target.value);
              setSubject("");
            }}
            className="
              px-4
              py-4
              rounded-xl
              bg-[#0f172a]
              border
              border-white/10
              text-white
            "
          >
            <option value="">
              Select Semester
            </option>

            {semesters.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          {/* Subject */}

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="
              px-4
              py-4
              rounded-xl
              bg-[#0f172a]
              border
              border-white/10
              text-white
            "
          >
            <option value="">
              Select Subject
            </option>

            {filteredSubjects.map((item) => (
              <option
                key={item.slug}
                value={item.slug}
              >
                {item.title}
              </option>
            ))}
          </select>

          {/* Explore Button */}

          <button
            onClick={handleExplore}
            className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Explore Now
          </button>

        </div>

      </div>

    </div>
  );
}

