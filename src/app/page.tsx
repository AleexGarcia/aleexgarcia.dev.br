import Header from "./components/Header";
import BentoGrid from "./components/sections/BentoGrid";
import About from "./components/sections/About";
import HowIBuild from "./components/sections/HowIBuild";
import Projects from "./components/sections/Projects";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[90px_1fr_auto] items-center justify-items-center min-h-screen">
      <Header/>
      <main className="flex flex-col row-start-2 w-full">
        <BentoGrid/>
        <About />
        <HowIBuild/>
        <Projects/>
        
      </main>
      <footer className="row-start-3 w-full">
        <Footer/>
      </footer>
    </div>
  );
}
