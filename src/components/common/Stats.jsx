export default function Stats() {

  const stats = [
    ["500+", "High Quality Notes"],
    ["120+", "PYQs Papers"],
    ["50+", "Subjects Covered"],
    ["24/7", "Access Anytime"],
  ];

  return (

    <div className="grid md:grid-cols-4 gap-5 mt-12">

      {stats.map((item) => (

        <div
          key={item[0]}
          className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
          "
        >

          <h3 className="text-3xl font-bold text-cyan-400">

            {item[0]}

          </h3>

          <p className="text-slate-400 mt-2">

            {item[1]}

          </p>

        </div>

      ))}

    </div>

  );
}