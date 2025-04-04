import React, { useState } from "react";
import type { JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home";
import Trees from "../pages/Trees";
import Hashing from "../pages/Hashing";
import LinkedLists from "../pages/LinkedLists";
import Benchmark from "../pages/Benchmark";

type Section = "Home" | "Trees" | "Hashing" | "Linkedlists" | "Benchmark";

const App: React.FC = () => {
  const [section, setSection] = useState<Section>("Home");

  // Mapeamento de seções para componentes
  const sectionComponents: Record<Section, JSX.Element> = {
    Home: <Home />,
    Trees: <Trees />,
    Hashing: <Hashing />,
    Linkedlists: <LinkedLists />,
    Benchmark: <Benchmark />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setSection={setSection} />

      <div className="flex-grow">
        {sectionComponents[section]}
      </div>

      <Footer />
    </div>
  );
};

export default App;
