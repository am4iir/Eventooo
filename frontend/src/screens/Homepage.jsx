import { useEffect, useRef, useState } from "react";
import DarkVeil from "../components/DarkVeil";
import Navbar from "../components/Navbar";
import BlurText from "../components/BlurText";
import TextType from "../components/TextType";

function Homepage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full font-alata bg-black">
      {/* Hero Section */}
      <div id="hero" style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <DarkVeil />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <BlurText
            text="Discover. Connect."
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white text-center mb-3 sm:mb-4 font-alata"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <BlurText
            text="Experience Campus Life."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-6 sm:mb-8 font-alata"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <TextType
            text="Join events, meet new people, and make the most out of your university life."
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl font-alata px-4"
            typingSpeed={30}
            initialDelay={500}
            pauseDuration={1000}
            deletingSpeed={20}
            loop={false}
            showCursor={false}
          />
          
          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('features')}
            className="mt-12 sm:mt-16 animate-bounce cursor-pointer bg-transparent border-none"
            aria-label="Scroll down"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-white/70 hover:text-white transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`min-h-screen w-full bg-gradient-to-b from-black via-purple-900/20 to-black py-20 px-4 transition-all duration-1000 ${
          visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Why Choose Meetly?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: "🎯",
                title: "Discover Events",
                description: "Find exciting campus events tailored to your interests and schedule."
              },
              {
                icon: "🤝",
                title: "Connect",
                description: "Meet like-minded students and expand your social circle effortlessly."
              },
              {
                icon: "🎓",
                title: "Grow",
                description: "Enhance your university experience with diverse activities and networking."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`min-h-screen w-full bg-gradient-to-b from-black via-indigo-900/20 to-black py-20 px-4 flex items-center transition-all duration-1000 ${
          visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Join Our Community
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { number: "5000+", label: "Active Students" },
              { number: "500+", label: "Events Hosted" },
              { number: "50+", label: "Campus Organizations" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-500 hover:scale-110 ${
                  visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <div className="text-xl sm:text-2xl text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`min-h-screen w-full bg-gradient-to-b from-black via-purple-900/30 to-black py-20 px-4 flex items-center transition-all duration-1000 ${
          visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12">
            Don't miss out on the best campus experiences. Join Meetly today!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            Get Started Now
          </button>
        </div>
      </section>

      <Navbar />
    </div>
  );
}

export default Homepage;