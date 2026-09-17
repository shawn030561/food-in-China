import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/ui/BackToTop";
import HomePage from "./pages/HomePage";
import RegionsPage from "./pages/RegionsPage";
import RecipesPage from "./pages/RecipesPage";
import CulturePage from "./pages/CulturePage";
import MessagePage from "./pages/MessagePage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/regions/:cuisineId" element={<RegionsPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
