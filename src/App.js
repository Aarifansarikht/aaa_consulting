import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ContactPage from "./pages/contactpage/ContactPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
