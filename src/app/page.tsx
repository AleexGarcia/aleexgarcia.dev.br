import Link from "next/link";
import BentoGrid from "./components/BentoGrid";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      <Header/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <BentoGrid/>
        <Projects/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Footer/>
      </footer>
    </div>
  );
}
