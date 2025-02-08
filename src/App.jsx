import {
  Navbar,
  Hero,
  Model,
  Tech,
  Features,
  Footer,
} from "./components";

export default function App() {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Model />
      <Tech />
      <Features />
      <Footer />
    </main>
  );
}
