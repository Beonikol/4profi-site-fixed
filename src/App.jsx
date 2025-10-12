import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contacts from "./pages/Contacts.jsx";

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
