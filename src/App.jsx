import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Popular from "./components/Popular/Popular";
import Model from "./components/Model/Model";

export default function App() {
  return (
    <Router>
      <main className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </main>
    </Router>
  );
}
