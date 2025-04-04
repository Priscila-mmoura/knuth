import React from "react";

interface NavbarProps {
  setSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSection }) => {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Algorithms Visualizer</h1>
      <div className="space-x-4">
        <button onClick={() => setSection("home")} className="hover:text-gray-400">Home</button>
        <button onClick={() => setSection("trees")} className="hover:text-gray-400">Árvores</button>
        <button onClick={() => setSection("hashing")} className="hover:text-gray-400">Hashing</button>
        <button onClick={() => setSection("linkedlists")} className="hover:text-gray-400">Listas Encadeadas</button>
        <button onClick={() => setSection("benchmark")} className="hover:text-gray-400">Benchmark</button>
      </div>
    </nav>
  );
};

export default Navbar;
