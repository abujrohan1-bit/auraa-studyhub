import { Link, useParams } from "react-router-dom";
import { subjectDetails } from "../../data/subjectDetails";

export default function RelatedSubjects() {

const { subjectSlug } = useParams();

const current =
subjectDetails[subjectSlug];

if (!current) return null;

const relatedSubjects =
Object.values(subjectDetails)

.filter(
(item)=>

item.branch===current.branch &&
item.semester===current.semester &&
item.slug && item.slug!==subjectSlug
)

.slice(0,4);

if (relatedSubjects.length===0)
return null;

return (

<section className="space-y-5">

<h2 className="text-2xl font-bold">
Related Subjects
</h2>

<div className="grid md:grid-cols-2 gap-4">

{relatedSubjects.map((subject)=>(

<Link

key={subject.slug}

to={`/subject/${subject.branch.toLowerCase().replaceAll(" ","-")}/${subject.semester.toLowerCase().replaceAll(" ","-")}/${subject.slug}`}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
hover:border-cyan-400/30
transition
"

>

<h3 className="font-semibold">
{subject.title}
</h3>

<p className="text-slate-400 text-sm mt-2">
{subject.code}
</p>

</Link>

))}

</div>

</section>

);

}