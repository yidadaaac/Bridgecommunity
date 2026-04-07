import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Hero />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}
