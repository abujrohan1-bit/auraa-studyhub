import { Link } from "react-router-dom";

export default function Footer() {

const socialLinks={

whatsapp:
"https://chat.whatsapp.com/EfzHiIkHheD8aHUq72Owxy",

telegram:
"YOUR_TELEGRAM_LINK",

instagram:
"YOUR_INSTAGRAM_LINK",

linkedin:
"YOUR_LINKEDIN_LINK"

};

return(

<footer className="relative mt-24 border-t border-white/10 bg-[#020617]">

<div className="
absolute
inset-x-0
top-0
h-px

bg-gradient-to-r
from-transparent
via-cyan-500/40
to-transparent
"/>


<div className="
max-w-7xl
mx-auto

px-6
py-16
">

<div className="
grid

grid-cols-1
sm:grid-cols-2
lg:grid-cols-4

gap-12
">


{/* BRAND */}

<div>

<Link
to="/"
className="text-3xl font-black tracking-tight"
>

<span className="text-white">

Auraa

</span>

<span className="
bg-gradient-to-r
from-cyan-400
to-violet-500

bg-clip-text
text-transparent
">

StudyHub

</span>

</Link>

<p className="
mt-5

text-slate-400

leading-7

text-sm
">

Free Engineering Notes,
PYQs, Books and
Study Resources.

</p>

<div className="
mt-5

inline-flex

px-4
py-2

rounded-full

bg-cyan-500/10

border
border-cyan-500/20

text-cyan-300
text-sm
">

Powered by AuraaWeb

</div>

</div>


{/* QUICK LINKS */}

<div>

<h3 className="
font-bold
mb-5
">

Quick Links

</h3>

<div className="
flex
flex-col
gap-3

text-slate-400
">

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/contact">Contact</Link>

<Link to="/privacy-policy">

Privacy Policy

</Link>

<Link to="/terms">

Terms

</Link>

</div>

</div>


{/* RESOURCES */}

<div>

<h3 className="
font-bold
mb-5
">

Resources

</h3>

<div className="
flex
flex-col
gap-3

text-slate-400
">

<span>Notes</span>

<span>PYQs</span>

<span>Books</span>

<span>Important Questions</span>

</div>

</div>


{/* SOCIAL + CONTACT */}

<div>

<h3 className="
font-bold
mb-5
">

Connect

</h3>

<div className="
flex
flex-col
gap-3

text-slate-400
text-sm
">

<span>

auraaweb26@gmail.com

</span>

<a
href={socialLinks.whatsapp}
target="_blank"
rel="noreferrer"
>

WhatsApp

</a>

<a
href={socialLinks.telegram}
target="_blank"
rel="noreferrer"
>

Telegram

</a>

<a
href={socialLinks.instagram}
target="_blank"
rel="noreferrer"
>

Instagram

</a>

<a
href={socialLinks.linkedin}
target="_blank"
rel="noreferrer"
>

LinkedIn

</a>

</div>

</div>

</div>


{/* Bottom */}

<div className="
mt-14
pt-8

border-t
border-white/10

flex

flex-col
md:flex-row

items-center
justify-between

gap-4
">

<p className="
text-slate-500
text-sm

text-center
">

© {new Date().getFullYear()}

AuraaWeb.

All rights reserved.

</p>


<p className="
text-slate-500
text-sm
text-center
">

Auraa StudyHub • Engineering Notes & PYQs

</p>

</div>

</div>

</footer>

);

}