import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular/Popular";
import Model from "./components/Model/Model";
import Tech from "./components/Tech/Tech";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Popular />
      <Model />
      <Tech/>
    </main>
  );
}
