import { useParams } from "react-router-dom";
import { subjectResources } from "../../data/subjectResources";

export default function ImportantQuestions() {
  const { subjectSlug } = useParams();

  const questions =
    subjectResources[subjectSlug]?.importantQuestions || [];

  return (
    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Important Questions
      </h2>

      <div className="space-y-4">

        {questions.map((item, index) => (

          <div
            key={index}
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-5
              hover:border-cyan-400/30
              transition-all
            "
          >

            <h3 className="font-medium text-lg">
              {item.question}
            </h3>

          </div>

        ))}

      </div>
    </div>
  );
}