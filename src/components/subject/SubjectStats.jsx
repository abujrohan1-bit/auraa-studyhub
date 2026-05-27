export default function SubjectStats({ data })  {
const stats = [
  {
    title: "Notes",
    value: data.notes,
    icon: "📘",
  },
  {
    title: "PYQs",
    value: data.pyqs,
    icon: "📄",
  },
  {
    title: "Books",
    value: data.books,
    icon: "📚",
  },
  {
    title: "Important Qs",
    value: data.importantQuestions,
    icon: "⭐",
  },
];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

      {stats.map((item) => (

        <div
          key={item.title}
          className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-5
            hover:border-cyan-400/30
            transition-all
            duration-300
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-400 text-sm">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold mt-2 text-cyan-400">
                {item.value}
              </h3>

            </div>

            <div className="text-4xl">
              {item.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}