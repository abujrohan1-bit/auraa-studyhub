import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NoteViewer from "./pages/NoteViewer";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
  path="/subject/:branch/:semester/:subjectSlug"
  element={<SubjectPage />}
/>

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
  path="/notes/:subject/:unit"
  element={<NoteViewer />}
/>

        <Route path="*" element={<NotFound />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;