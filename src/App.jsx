import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Popular />
    </main>
  );
}
