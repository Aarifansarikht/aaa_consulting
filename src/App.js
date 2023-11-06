import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ContactPage from "./pages/contactpage/ContactPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import OnlineRepuManage from "./pages/servicepages/OnlineReputationManagementPage/OnlineRepuManage";
import SearchEngineOptimization from "./pages/servicepages/SearchEngineOptimization/SearchEngineOptimization";
import DigitalMarketing from "./pages/servicepages/DigitalMarketing/DigitalMarketing";
import SocialMediaConsulting from "./pages/servicepages/SocialMediaConsulting/SocialMediaConsulting";
import SoftwareDevelopment from "./pages/servicepages/SoftwareDevelopment/SoftwareDevelopment";
import IntelligentMedicalDiagnosis from "./pages/servicepages/IntelligentMedicalDiagnosis/IntelligentMedicalDiagnosis";
import MobileApplicationDevelopment from "./pages/servicepages/MobileApplicationDevelopment/MobileApplicationDevelopment";
import WebsiteDevelopment from "./pages/servicepages/WebsiteDevelopment/WebsiteDevelopment";
import MarketResearch from "./pages/servicepages/MarketResearch/MarketResearch";
import CloudComputing from "./pages/servicepages/CloudComputing/CloudComputing";
import AIDataInsights from "./pages/servicepages/AIData&Insights/AIDataInsights";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" />
        <Route
          path="/Online-Reputation-Management"
          element={<OnlineRepuManage />}
        />
        <Route
          path="/Search-Engine-Optimization"
          element={<SearchEngineOptimization />}
        />
        <Route path="/Digital-Marketing" element={<DigitalMarketing />} />
        <Route
          path="/Social-Media-Consulting"
          element={<SocialMediaConsulting />}
        />
        <Route path="/Software-Development" element={<SoftwareDevelopment />} />
        <Route
          path="/Intelligent-Medical-Diagnosis"
          element={<IntelligentMedicalDiagnosis />}
        />
        <Route
          path="/Mobile-Application-Development"
          element={<MobileApplicationDevelopment />}
        />
        <Route path="/Website-Development" element={<WebsiteDevelopment />} />
        <Route path="/Market-Research" element={<MarketResearch />} />
        <Route path="/Cloud-Computing" element={<CloudComputing />} />
        <Route path="/AI-Data-and-Insights" element={<AIDataInsights />} />

        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
