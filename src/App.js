import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/service" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
}
