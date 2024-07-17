import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Popular from "./components/Popular/Popular";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Popular />
    </main>
  );
}
