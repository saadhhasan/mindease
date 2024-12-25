import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const mentalHealthTips = [
    {
      title: "Practice Mindfulness",
      content: "Take a few minutes each day to practice mindfulness meditation.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Stay Active",
      content: "Regular exercise can help reduce stress and improve mood.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Connect with Others",
      content: "Maintain strong social connections with friends and family.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Mental Wellness</h1>
      
      <div className="mb-12">
        <Slider {...sliderSettings}>
          {mentalHealthTips.map((tip, index) => (
            <div key={index} className="px-4">
              <div className="relative h-96">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
                  <p>{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Understanding Mental Health</h2>
          <p>Mental health includes emotional, psychological, and social well-being. It affects how we think, feel, and act.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Self-Care Tips</h2>
          <ul className="list-disc list-inside">
            <li>Get enough sleep</li>
            <li>Eat a balanced diet</li>
            <li>Exercise regularly</li>
            <li>Practice relaxation techniques</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Seeking Help</h2>
          <p>It's okay to ask for help. Professional support is available and can make a significant difference in your mental well-being.</p>
        </div>
      </div>
    </div>
  );
}