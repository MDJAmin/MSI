import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular/Popular";
import Model from "./components/Model/Model";
import Tech from "./components/Tech/Tech";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Popular />
      <Model />
      <Tech />
      <Features />
      <Footer />
    </main>
  );
}
