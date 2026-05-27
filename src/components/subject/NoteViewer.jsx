import { useParams } from "react-router-dom";

export default function NoteViewer() {
  const { subject, unit } = useParams();

  const pdfUrl = "/sample.pdf";

  return (
    <div
      className="
      min-h-screen
      bg-[#020617]
      text-white
      relative
      overflow-hidden
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* WATERMARK */}

      <div
        className="
        fixed
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        z-10
      "
      >
        <h1
          className="
          text-[120px]
          font-black
          text-white/5
          rotate-[-30deg]
          select-none
          "
        >
          AURAAWEB.COM
        </h1>
      </div>

      {/* HEADER */}

      <div
        className="
        sticky
        top-0
        z-20
        bg-black/60
        backdrop-blur-xl
        border-b
        border-white/10
        px-6
        py-4
        "
      >
        <h1 className="font-bold text-xl">
          {subject} - {unit}
        </h1>
      </div>

      {/* PDF */}

      <div className="relative z-20 h-[calc(100vh-70px)]">

        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          title="Notes"
          className="w-full h-full"
        />

      </div>
    </div>
  );
}