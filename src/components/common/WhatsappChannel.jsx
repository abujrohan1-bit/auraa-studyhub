import { useState } from "react";

import {
FaWhatsapp,
FaTelegramPlane,
FaInstagram,
FaLinkedinIn,
FaPlus
}

from "react-icons/fa";

export default function SocialLinks() {

const [open,setOpen]=useState(false);

const links={

whatsapp:
"https://chat.whatsapp.com/channel/0029VbD2t9jCsU9YSo9H020W",

telegram:
"https://t.me/+chHSjMXsj_c3MGFl",

instagram:
" https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=a56zsus",

linkedin:
"YOUR_LINKEDIN_LINK"

};

return(

<div className="fixed bottom-5 right-5 z-[999]">

{/* ICONS */}

{open && (

<div className="
flex
flex-col
gap-3
mb-3
items-end
">

<a

href={links.linkedin}

target="_blank"

rel="noreferrer"

className="
w-14
h-14

rounded-full

bg-blue-700

flex
items-center
justify-center

shadow-xl
"

>

<FaLinkedinIn className="text-white text-xl"/>

</a>


<a

href={links.instagram}

target="_blank"

rel="noreferrer"

className="
w-14
h-14

rounded-full

bg-pink-600

flex
items-center
justify-center

shadow-xl
"

>

<FaInstagram className="text-white text-xl"/>

</a>


<a

href={links.telegram}

target="_blank"

rel="noreferrer"

className="
w-14
h-14

rounded-full

bg-sky-500

flex
items-center
justify-center

shadow-xl
"

>

<FaTelegramPlane className="text-white text-xl"/>

</a>


<a

href={links.whatsapp}

target="_blank"

rel="noreferrer"

className="
w-14
h-14

rounded-full

bg-green-500

flex
items-center
justify-center

shadow-xl
"

>

<FaWhatsapp className="text-white text-xl"/>

</a>

</div>

)}


{/* MAIN BUTTON */}

<button

onClick={()=>setOpen(!open)}

className="
w-16
h-16

rounded-full

bg-cyan-500

flex
items-center
justify-center

shadow-2xl
"

>

<FaPlus
className={`
text-white
text-2xl
transition-all
${open?"rotate-45":""}
`}
/>

</button>

</div>

);

}