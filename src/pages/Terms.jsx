import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Terms() {

return (

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

Terms & Conditions

</h1>


<div className="
space-y-8

text-slate-300

leading-8
">

<section>

<h2 className="text-2xl font-semibold mb-3">

1. Acceptance

</h2>

<p>

By accessing Auraa StudyHub you agree to comply with these terms.

</p>

</section>


<section>

<h2 className="text-2xl font-semibold mb-3">

2. Educational Purpose

</h2>

<p>

All notes, books, PYQs and study materials are provided only for educational purposes.

</p>

</section>


<section>

<h2 className="text-2xl font-semibold mb-3">

3. Content Usage

</h2>

<p>

Users may not reproduce, sell or redistribute website content without permission.

</p>

</section>


<section>

<h2 className="text-2xl font-semibold mb-3">

4. Liability

</h2>

<p>

We do not guarantee accuracy or completeness of uploaded content.

</p>

</section>


<section>

<h2 className="text-2xl font-semibold mb-3">

5. Changes

</h2>

<p>

We may update terms at any time without notice.

</p>

</section>

</div>

</main>

<Footer/>

</div>

);

}