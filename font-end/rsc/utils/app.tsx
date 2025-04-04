import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Trees from "./pages/Trees";
import Hashing from "./pages/Hashing";
import LinkedLists from "./pages/LinkedLists";
import Benchmark from "./pages/Benchmark";

const App: React.FC = () => {
  const [section, setSection] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setSection={setSection} />

      <div className="flex-grow">
        {section === "home" && <Home />}
        {section === "trees" && <Trees />}
        {section === "hashing" && <Hashing />}
        {section === "linkedlists" && <LinkedLists />}
        {section === "benchmark" && <Benchmark />}
      </div>

      <Footer />
    </div>
  );
};

export default App;
