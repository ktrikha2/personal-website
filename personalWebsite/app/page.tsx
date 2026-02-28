import { About, Experience, Projects, Coursework, Skills, Hobbies, Contact } from '@/components/sections';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main id="main-content" className="relative z-10 bg-white">
        <About />
        <Experience />
        <Projects />
        <Coursework />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}
