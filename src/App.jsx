import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Popular from "./components/Popular/Popular";
import Model from "./components/Model/Model"

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Popular />
      <Model/>
    </main>
  );
}
