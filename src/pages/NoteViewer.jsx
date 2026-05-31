import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import WhatsappChannel from "../components/common/WhatsappChannel";

export default function NoteViewer() {

const { subject, unit } = useParams();

const navigate = useNavigate();

const pdfUrl="/sample.pdf";

useEffect(()=>{

document.body.style.overflow="hidden";

return ()=>{

document.body.style.overflow="auto";

};

},[]);

return (

<div

className="
fixed

inset-0

z-[9999]

bg-[#020617]

text-white

overflow-hidden
"

>

{/* HEADER */}

<div

className="
absolute

top-0

left-0

right-0

z-30

flex

items-center

justify-between

px-5

py-4

bg-black/70

backdrop-blur-xl

border-b

border-white/10
"

>

<h1 className="font-semibold truncate">

{subject} - {unit}

</h1>


<button

onClick={()=>navigate(-1)}

className="
w-10

h-10

rounded-full

bg-white/10

hover:bg-red-500

transition

text-xl
"

>

✕

</button>

</div>


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
text-[80px]

lg:text-[150px]

font-black

text-white/5

rotate-[-30deg]
"

>

AURAAWEB.COM

</h1>

</div>


{/* PDF */}

<div

className="
pt-[70px]

h-screen

relative

z-20
"

>

<iframe

src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}

title="notes"

className="
w-full

h-full

border-0
"

/>

<WhatsappChannel/>

</div>

</div>

);

}