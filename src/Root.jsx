import React, { Suspense, lazy, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Loader } from "lucide-react";
import LandingPage from "./components/landing/LandingPage.jsx";
import "./Root.css";

const WorkspacePage = lazy(() => import("./pages/WorkspacePage.jsx"));

function App() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("invoice");

  const handleNavigate = () => {
    navigate("/documents");
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />

      <Route
        path="/documents"
        element={
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-neutral-50">
                <Loader size={28} className="animate-spin text-neutral-400" />
              </div>
            }
          >
            <WorkspacePage activeView={activeView} onSelect={setActiveView} />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
