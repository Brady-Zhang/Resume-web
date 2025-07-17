import ScrollArrow from '../ScrollArrow';

export default function ProjectSection() {
  return (
    <section id="project" className="min-h-screen bg-gray-50 relative">
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Projects
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Project content coming soon
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Project {item}</h3>
                <p className="text-gray-600">
                  Here will showcase personal projects, portfolio, and other content...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Up and down scroll arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <ScrollArrow direction="up" targetId="home" />
        <ScrollArrow direction="down" targetId="about" />
      </div>
    </section>
  );
} 