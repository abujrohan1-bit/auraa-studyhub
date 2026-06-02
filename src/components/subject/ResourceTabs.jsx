export default function ResourceTabs({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    "Notes",
    "PYQs",
    "PYQs Models",
    "Important Questions",
  ];

  return (
    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-2
      flex
      flex-wrap
      gap-2
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-6
            py-3
            rounded-xl
            transition-all
            ${
              activeTab === tab
                ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                : "bg-transparent text-slate-400 hover:text-white"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}