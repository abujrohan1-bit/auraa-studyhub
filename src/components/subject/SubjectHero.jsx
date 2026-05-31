import heroImage from "../../assets/images/hero.png";

export default function SubjectHero({ data }) {

return (

<section
className="
relative
overflow-hidden

rounded-2xl

border border-white/10

bg-gradient-to-br
from-[#071128]
to-[#030712]

px-4
py-4

lg:px-8
lg:py-8
"
>

<div
className="
absolute
top-0
right-0

w-[120px]
h-[120px]

lg:w-[350px]
lg:h-[350px]

bg-cyan-500/10

blur-[80px]
"
/>

<div
className="
grid

grid-cols-1
lg:grid-cols-2

gap-2
lg:gap-6

items-center

relative
z-10
"
>

{/* LEFT */}

<div>

<h1
className="
font-black

text-2xl
sm:text-3xl
lg:text-5xl

leading-tight

bg-gradient-to-r
from-cyan-400
to-violet-500

bg-clip-text
text-transparent
"
>

{data.title}

</h1>

<p className="text-sm lg:text-lg mt-1 text-slate-300">

{data.code}

</p>

<p
className="
mt-2

text-slate-400

text-xs
lg:text-base

leading-5
lg:leading-7

max-w-xl
"
>

{data.description}

</p>

</div>


{/* RIGHT */}

<div className="flex justify-center">

<img

src={heroImage}

alt={data.title}

className="
w-full

max-w-[100px]

sm:max-w-[120px]

lg:max-w-[320px]

object-contain

mx-auto
"

/>

</div>

</div>

</section>

);

}