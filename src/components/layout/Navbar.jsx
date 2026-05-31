import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

const [open,setOpen]=useState(false);

return(

<nav className="fixed top-0 left-0 w-full z-50">

<div className="w-full">

<div
className="
w-full

h-[70px]

px-6
lg:px-8

flex
items-center
justify-between

backdrop-blur-xl

bg-[#020617]/80

border-b
border-white/10
"
>

{/* LOGO */}

<Link
to="/"
className="
text-[28px]
font-bold
tracking-tight
"
>

<span className="text-white">

Study

</span>

<span className="
bg-gradient-to-r
from-cyan-400
to-purple-500

bg-clip-text
text-transparent
">

Hub

</span>

</Link>


{/* DESKTOP MENU */}

<div className="
hidden
lg:flex

items-center

gap-10

text-sm
font-semibold
">

<Link
to="/"
className="
text-slate-300
hover:text-cyan-400
transition
"
>

Home

</Link>


<Link
to="/about"
className="
text-slate-300
hover:text-cyan-400
transition
"
>

About

</Link>


<Link
to="/contact"
className="
text-slate-300
hover:text-cyan-400
transition
"
>

Contact

</Link>


<Link
to="/privacy-policy"
className="
text-slate-300
hover:text-cyan-400
transition
"
>

Privacy Policy

</Link>


<Link
to="/terms"
className="
text-slate-300
hover:text-cyan-400
transition
"
>

Terms

</Link>


<Link
to="/disclaimer"
className="
text-slate-300
hover:text-cyan-400
transition
"
>

Disclaimer

</Link>

</div>


{/* RIGHT BUTTON */}

<div className="hidden lg:block">

<button
className="
px-7
py-3

rounded-xl

bg-cyan-500

hover:bg-cyan-400

font-semibold

transition
"
>

Explore

</button>

</div>


{/* MOBILE BUTTON */}

<button

onClick={()=>setOpen(!open)}

className="
lg:hidden

text-3xl

text-white
"

>

☰

</button>

</div>


{/* MOBILE MENU */}

{open && (

<div
className="
lg:hidden

mx-4
mt-3

rounded-3xl

backdrop-blur-xl

bg-[#0B1224]/95

border
border-white/10

p-6

flex
flex-col

gap-5

shadow-2xl
"
>

<Link
to="/"
onClick={()=>setOpen(false)}
className="text-slate-300"
>

Home

</Link>


<Link
to="/about"
onClick={()=>setOpen(false)}
className="text-slate-300"
>

About

</Link>


<Link
to="/contact"
onClick={()=>setOpen(false)}
className="text-slate-300"
>

Contact

</Link>


<Link
to="/privacy-policy"
onClick={()=>setOpen(false)}
className="text-slate-300"
>

Privacy Policy

</Link>


<Link
to="/terms"
onClick={()=>setOpen(false)}
className="text-slate-300"
>

Terms

</Link>


<Link
to="/disclaimer"
onClick={()=>setOpen(false)}
className="text-slate-300"
>

Disclaimer

</Link>

</div>

)}

</div>

</nav>

);

}