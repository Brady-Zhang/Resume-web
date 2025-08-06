import ScrollArrow from '../ScrollArrow';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 relative">
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              About Me
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Full-stack developer with 1 year of experience building and maintaining 
              web applications using ASP.NET Core and React. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl">
                👋
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Hello, I'm Brady</h3>
              <p className="text-gray-300 leading-relaxed">
                Here will introduce personal information, skills, experience, and other content...
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Skills</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">C#, .NET Core, Entity Framework Core</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">React.js, Next.js, TypeScript, JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Microsoft Azure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">SQL Server, MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Git, Docker, Swagger</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Agile, CI/CD, SOLID Principles, Microservices</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <h4 className="text-xl font-semibold text-white">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:zhangdepeng3@gmail.com" className="text-gray-300 hover:text-blue-300 transition-colors">
                      zhangdepeng3@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:0412456185" className="text-gray-300 hover:text-blue-300 transition-colors">
                      0412 456 185
                    </a>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <a
                    href="/BRADY_ZHANG_Resume_4.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 font-semibold flex items-center justify-center"
                    download
                  >
                    Download Resume
                  </a>
                </div>
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