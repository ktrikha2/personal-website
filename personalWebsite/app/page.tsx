import { About, Experience, Projects, Coursework, Skills, Hobbies, Contact } from '@/components/sections';
import { Hero } from '@/components/Hero';
import { YearInReview } from '@/components/YearInReview';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main id="main-content" className="relative z-10 bg-neutral-950">
        <About />
        <Experience />
        <YearInReview />
        <Projects />
        <Coursework />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}
