import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Disclaimer() {

return(

<div className="min-h-screen bg-[#020617] text-white">

<Navbar/>

<main className="
max-w-5xl
mx-auto
px-6
pt-32
pb-20
">

<h1 className="
text-4xl
font-bold
mb-10
">

Disclaimer

</h1>

<div className="
space-y-8
text-slate-300
leading-8
">

<p>

All content provided on Auraa StudyHub is for educational purposes only.

</p>

<p>

We do not guarantee accuracy, completeness or reliability of study material.

</p>

<p>

Users should verify information before use.

</p>

<p>

Books, notes, PDFs and study material belong to their respective owners.

</p>

</div>

</main>

<Footer/>

</div>

);

}