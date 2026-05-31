
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { subjectResources } from "../../data/subjectResources";

export default function NotesList() {

const { subjectSlug } = useParams();

const notes =
subjectResources[subjectSlug]?.notes || [];

const [selectedPdf,setSelectedPdf] =
useState(null);

useEffect(()=>{

if(selectedPdf){

document.body.style.overflow="hidden";

}else{

document.body.style.overflow="auto";

}

return ()=>{

document.body.style.overflow="auto";

};

},[selectedPdf]);

return (

<>

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

Notes

</h2>

<div className="space-y-4">

{notes.map((note)=>(

<div

key={note.title}

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

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

<div>

<h3 className="font-bold text-lg">

{note.title}

</h3>

<p className="text-slate-400 mt-2">

{note.description}

</p>

</div>

<button

onClick={()=>setSelectedPdf(note.pdf)}

className="
px-6

py-3

rounded-xl

bg-gradient-to-r

from-cyan-500
to-violet-500

font-medium

hover:scale-105

transition-all
"

>

View Notes

</button>

</div>

</div>

))}

</div>

</div>


{/* FULLSCREEN PDF */}

{selectedPdf && (

<div

className="
fixed

inset-0

z-[9999]

bg-[#020617]
"

>

{/* TOP BAR */}

<div

className="
absolute

top-0

left-0

right-0

h-16

flex

items-center

justify-end

px-6

bg-black/60

backdrop-blur-xl

z-20
"

>

<button

onClick={()=>setSelectedPdf(null)}

className="
w-10

h-10

rounded-full

bg-red-500

font-bold
"

>

✕

</button>

</div>


{/* PDF */}

<div className="pt-16 h-full">

<iframe

src={`${selectedPdf}#toolbar=0&navpanes=0`}

title="notes"

className="
w-full

h-full

border-0
"

/>

</div>

</div>

)}

</>

);

}