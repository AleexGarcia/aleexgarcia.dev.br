import BentoGrid from "./components/BentoGrid";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[90px_1fr_auto] items-center justify-items-center min-h-screen">
      <Header/>
      <main className="flex flex-col row-start-2 w-full">
        <BentoGrid/>
        <Projects/>
      </main>
      <footer className="row-start-3 w-full">
        <Footer/>
      </footer>
    </div>
  );
}
