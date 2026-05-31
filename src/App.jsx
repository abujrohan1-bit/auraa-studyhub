import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NoteViewer from "./pages/NoteViewer";
import NotFound from "./pages/NotFound";
import DisableActions from "./components/common/DisableActions";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

function App() {

return (

<BrowserRouter>

<DisableActions />

<ScrollToTop />

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/subject/:branch/:semester/:subjectSlug"
element={<SubjectPage />}
/>

<Route
path="/about"
element={<About />}
/>

<Route
path="/contact"
element={<Contact />}
/>

<Route
path="/privacy-policy"
element={<PrivacyPolicy />}
/>

<Route
path="/terms"
element={<Terms />}
/>

<Route
path="/disclaimer"
element={<Disclaimer />}
/>

<Route
path="/notes/:subject/:unit"
element={<NoteViewer />}
/>

<Route
path="*"
element={<NotFound />}
/>


</Routes>

</BrowserRouter>

);

}

export default App;