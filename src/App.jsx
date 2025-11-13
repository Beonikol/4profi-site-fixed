import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contacts from "./pages/Contacts.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";

const Footer = lazy(() => import("./components/Footer.jsx"));

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Глобальний відступ під sticky-хедер */}
      <main style={{ paddingTop: "var(--header-h, 56px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
