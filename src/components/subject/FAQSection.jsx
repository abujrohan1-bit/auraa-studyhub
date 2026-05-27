export default function FAQSection() {
  const faqs = [
    {
      question: "What is DBMS?",
      answer:
        "DBMS stands for Database Management System. It is software used to store, manage and retrieve data efficiently.",
    },

    {
      question: "Is DBMS difficult?",
      answer:
        "DBMS is considered one of the easiest core computer engineering subjects if concepts are understood properly.",
    },

    {
      question: "Which book is best for DBMS?",
      answer:
        "Database System Concepts by Silberschatz is one of the most recommended books.",
    },

    {
      question: "How many units are there in DBMS?",
      answer:
        "Most universities divide DBMS into 5 to 6 units depending on the syllabus.",
    },

    {
      question: "Are PYQs important for DBMS?",
      answer:
        "Yes. Previous year question papers help identify frequently asked exam questions.",
    },
  ];

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
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="
              p-5
              rounded-2xl
              border
              border-white/10
              bg-white/5
            "
          >

            <h3 className="font-bold">
              {faq.question}
            </h3>

            <p className="text-slate-400 mt-3">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>
    </div>
  );
}