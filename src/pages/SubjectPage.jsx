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

export default function SubjectPage() {
  const [activeTab, setActiveTab] = useState("Notes");

 const { subjectSlug } = useParams();

const data =
  subjectDetails[subjectSlug] ||
  subjectDetails["database-management-system"];

const seoTitle =
  `${data.title} Notes, PYQs, Books PDF Download | Auraa StudyHub`;

const seoDescription =
  `Download ${data.title} Notes, Previous Year Question Papers, Books, Important Questions and Study Material for ${data.branch} ${data.semester}.`;

const seoKeywords = `
${data.title},
${data.title} Notes,
${data.title} PYQ,
${data.title} Books PDF,
${data.branch},
${data.semester},
Engineering Notes,
Previous Year Question Papers,
Study Material
`;

const seoUrl = window.location.href;
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <SEO
  title={seoTitle}
  description={seoDescription}
  keywords={seoKeywords}
  url={seoUrl}
/>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* LEFT SIDEBAR + MAIN CONTENT */}

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">

          <SubjectSidebar />

          <div className="space-y-6">

            <h1 className="text-3xl font-bold">
  {data.title}
</h1>
          <Breadcrumbs />

            {/* HERO */}

            <SubjectHero data={data} />

            {/* TABS */}

            <ResourceTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* STATS */}

            <SubjectStats data={data} />

            {/* CONTENT + RIGHT INFO CARDS */}

            <div className="grid lg:grid-cols-[1fr_280px] gap-6">

              <div>

                {activeTab === "Notes" && <NotesList />}

                {activeTab === "PYQs" && <PYQList />}

                {activeTab === "Books" && <BooksList />}

                {activeTab === "Important Questions" && (
                  <ImportantQuestions />
                )}

              </div>

              <SubjectInfoCards />

            </div>

            {/* BELOW CONTENT */}

           <RelatedSubjects />
           
             <TrendingNotes />
             
             <SubjectSEOContent data={data} />
           

            <FAQSection />

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}