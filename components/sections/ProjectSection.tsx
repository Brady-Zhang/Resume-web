import ScrollArrow from '../ScrollArrow';

export default function ProjectSection() {
  return (
    <section id="project" className="min-h-screen bg-gray-50 relative">
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Project
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            项目页面内容待完善
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">项目 {item}</h3>
                <p className="text-gray-600">
                  这里将展示个人项目、作品集等内容...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 上下滚动箭头 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <ScrollArrow direction="up" targetId="home" />
        <ScrollArrow direction="down" targetId="about" />
      </div>
    </section>
  );
} 