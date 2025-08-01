import VantaBackground from '../VantaBackground';
import ScrollArrow from '../ScrollArrow';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen relative">
      <VantaBackground className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to My World
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Personal Portfolio - Integrated with Vanta.js Animation
            </p>
            <div className="space-y-4">
              <p className="text-lg opacity-80">
                This is the Home section, scroll down to see more content
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll down arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ScrollArrow direction="down" targetId="project" />
        </div>
      </VantaBackground>
    </section>
  );
} 