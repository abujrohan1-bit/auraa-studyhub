export default function SubjectSEOContent({ data }) {
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
      <h2 className="text-2xl font-bold mb-4">
        About {data.title}
      </h2>

      <p className="text-slate-300 leading-8">
        {data.title} is an important subject in
        {` ${data.branch} `}
        for
        {` ${data.semester}. `}
        This page contains Notes, Previous Year
        Question Papers, Books, Important Questions
        and Study Material to help students prepare
        for university examinations.
      </p>

      <p className="text-slate-300 leading-8 mt-4">
        Students can access unit-wise notes,
        downloadable PDFs, important questions,
        reference books and previous examination
        papers from a single place.
      </p>
    </section>
  );
}