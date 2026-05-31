import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SubjectHero from "../components/subject/SubjectHero";
import SubjectSidebar from "../components/subject/SubjectSidebar";
import SubjectStats from "../components/subject/SubjectStats";
import ResourceTabs from "../components/subject/ResourceTabs";

import NotesList from "../components/subject/NotesList";
import PYQList from "../components/subject/PYQList";
import BooksList from "../components/subject/BooksList";
import ImportantQuestions from "../components/subject/ImportantQuestions";

import SubjectInfoCards from "../components/subject/SubjectInfoCards";

import TrendingNotes from "../components/subject/TrendingNotes";
import RelatedSubjects from "../components/subject/RelatedSubjects";
import FAQSection from "../components/subject/FAQSection";

import { useParams } from "react-router-dom";
import { subjectDetails } from "../data/subjectDetails";

import Breadcrumbs from "../components/subject/Breadcrumbs";

import SEO from "../components/seo/SEO";
import SubjectSEOContent from "../components/subject/SubjectSEOContent";
import WhatsappChannel from "../components/common/WhatsappChannel";

export default function SubjectPage() {

const [activeTab,setActiveTab]=useState("Notes");

const {subjectSlug}=useParams();

const data=
subjectDetails[subjectSlug]||
subjectDetails["database-management-system"];

const seoUrl=window.location.href;

return(

<div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

<SEO
title={`${data.title} Notes`}
description={data.description}
keywords={data.title}
url={seoUrl}
/>

<Navbar/>

<main
className="
max-w-7xl
mx-auto
px-4
sm:px-6
pt-28
pb-20
"
>

{/* MOBILE LAYOUT (UNCHANGED) */}

<div className="lg:hidden">

<div className="space-y-6">

<h1 className="text-3xl font-bold">

{data.title}

</h1>

<Breadcrumbs/>

<SubjectHero data={data}/>

<ResourceTabs
activeTab={activeTab}
setActiveTab={setActiveTab}
/>

<div>

{activeTab==="Notes" && <NotesList/>}

{activeTab==="PYQs" && <PYQList/>}

{activeTab==="Books" && <BooksList/>}

{activeTab==="Important Questions" &&
<ImportantQuestions/>
}

</div>

<SubjectStats data={data}/>

<SubjectSidebar/>

<RelatedSubjects/>

<TrendingNotes/>

<SubjectSEOContent data={data}/>

<FAQSection/>

</div>

</div>


{/* DESKTOP LAYOUT */}

<div className="hidden lg:grid lg:grid-cols-[1fr_280px] gap-6 items-start">

{/* LEFT */}

<div className="space-y-6 min-w-0">

<h1 className="text-3xl font-bold">

{data.title}

</h1>

<Breadcrumbs/>

<SubjectHero data={data}/>

<ResourceTabs
activeTab={activeTab}
setActiveTab={setActiveTab}
/>

<div>

{activeTab==="Notes" && <NotesList/>}

{activeTab==="PYQs" && <PYQList/>}

{activeTab==="Books" && <BooksList/>}

{activeTab==="Important Questions" &&
<ImportantQuestions/>
}

</div>

<SubjectStats data={data}/>

{/* immediately after notes */}

<RelatedSubjects/>



<SubjectSEOContent data={data}/>

<FAQSection/>

</div>


{/* RIGHT COLUMN */}

<div
className="
flex
flex-col
gap-6
sticky
top-28
"
>

{/* Sidebar moved DOWN */}

<SubjectSidebar/>

<SubjectInfoCards/>

</div>

</div>
<TrendingNotes/>

<WhatsappChannel/>

</main>

<Footer/>

</div>

);

}