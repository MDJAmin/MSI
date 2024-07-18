import {
  Navbar,
  Hero,
  Popular,
  Model,
  Tech,
  Features,
  Footer,
} from "./components";

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
