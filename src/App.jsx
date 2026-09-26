import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Chronicle from "./components/Chronicle.jsx";
import Arsenal from "./components/Arsenal.jsx";
import CodeOfConduct from "./components/CodeOfConduct.jsx";
import Forge from "./components/Forge.jsx";
import Soul from "./components/Soul.jsx";
import Raven from "./components/Raven.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Chronicle />
        <Arsenal />
        <CodeOfConduct />
        <Forge />
        <Soul />
        <Raven />
      </main>
      <Footer />
    </>
  );
}
