import ScrollArrow from '../ScrollArrow';
import Image from 'next/image';

export default function ProjectSection() {
  return (
    <section id="project" className="min-h-screen bg-gray-900 relative">
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Projects
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            My recent work and projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* REAMP Project */}
            <a 
              href="https://github.com/Brady-Zhang/REAMP-Frontend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 overflow-hidden group transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-700 overflow-hidden">
                <Image 
                  src="/1.png" 
                  alt="REAMP Project" 
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  Real Estate Platform
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  A comprehensive real estate management platform built with React, TypeScript, .Net and modern web technologies.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">React</span>
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">TypeScript</span>
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">.NET</span>
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">Sql Server</span>
                </div>
              </div>
            </a>

            {/* Meetly Omni Project */}
            <a 
              href="https://uat.meetlyomni.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 overflow-hidden group transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-700 overflow-hidden">
                <Image 
                  src="/2.png" 
                  alt="Meetly Omni Project" 
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  Meetly Omni
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Meetly Omni is a multifunctional platform designed for managing various events and facilitating interactive engagement.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">React</span>
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">Next.js</span>
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">.NET</span>
                  <span className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">PostgreSQL</span>
                </div>
              </div>
            </a>

            {/* Placeholder Project */}
            <div className="bg-gray-800 rounded-xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-gray-700 transform hover:scale-105">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Project 3</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                UNSW Disease Museum Management System coming soon...
              </p>
            </div>
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