import ScrollArrow from '../ScrollArrow';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              About Me
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              About content coming soon
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl">
                👋
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Hello, I'm...</h3>
              <p className="text-gray-700 leading-relaxed">
                Here will introduce personal information, skills, experience, and other content...
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Skills & Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "JavaScript/TypeScript",
                    "React/Next.js", 
                    "Node.js",
                    "Python",
                    "Database Design",
                    "UI/UX Design"
                  ].map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                  Contact Me
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll up arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollArrow direction="up" targetId="project" />
      </div>
    </section>
  );
} 