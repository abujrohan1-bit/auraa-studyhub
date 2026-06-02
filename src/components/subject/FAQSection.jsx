import { useParams } from "react-router-dom";
import { subjectDetails } from "../../data/subjectDetails";

export default function FAQSection() {

const { subjectSlug } = useParams();

const subject =
subjectDetails[subjectSlug];

if(!subject) return null;

const faqs=[

{
q:`What is ${subject.title}?`,
a:`${subject.title} is an important subject in ${subject.branch} covering core concepts required for academic and industry applications.`,
},

{
q:`Is ${subject.title} difficult?`,
a:`${subject.title} becomes easier when concepts are practiced regularly with notes, PYQs and examples.`,
},

{
q:`How many units are there in ${subject.title}?`,
a:`Usually ${subject.title} contains around 5 to 6 units depending upon university syllabus.`,
},

{
q:`Why should I study ${subject.title}?`,
a:`${subject.title} helps build strong technical knowledge useful for exams, projects and placements.`,
},

];

return(

<section
className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
space-y-4
"
>

<h2 className="text-2xl font-bold">

Frequently Asked Questions

</h2>

<div className="space-y-4">

{faqs.map((faq,index)=>(

<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-4
"

>

<h3 className="font-semibold">

{faq.q}

</h3>

<p className="text-slate-400 mt-2">

{faq.a}

</p>

</div>

))}

</div>

</section>

);

}