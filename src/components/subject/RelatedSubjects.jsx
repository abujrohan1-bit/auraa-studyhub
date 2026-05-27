import { Link, useParams } from "react-router-dom";
import { subjects } from "../../data/subjects";

export default function RelatedSubjects() {
  const { subject } = useParams();

  const currentSubject = subjects.find(
    (item) => item.slug === subject
  );

  if (!currentSubject) return null;

  const relatedSubjects = subjects
    .filter(
      (item) =>
        item.branch === currentSubject.branch &&
        item.semester === currentSubject.semester &&
        item.slug !== currentSubject.slug
    )
    .slice(0, 4);

  return (
    <section
      className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Related Subjects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {relatedSubjects.map((item) => (

          <Link
            key={item.slug}
            to={item.link}
            className="
              p-5
              rounded-2xl
              bg-white/5
              border
              border-white/10
              hover:border-cyan-400/40
              hover:bg-white/10
              transition-all
            "
          >
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              {item.semester}
            </p>
          </Link>

        ))}

      </div>

    </section>
  );
}