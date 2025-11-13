import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import Navbar from "../../components/Navbar";
import DarkVeil from "../../components/DarkVeil";
import BlurText from "../../components/BlurText";
import TextType from "../../components/TextType";

function Events() {
    const navigate = useNavigate();
    const { user } = useClerk();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleSections, setVisibleSections] = useState(new Set());
    const sectionsRef = useRef([]);

    useEffect(() => {
        if (!user) {
            navigate("/");
        } else {
            fetchEvents();
        }
    }, [user, navigate]);

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

    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/events");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setEvents(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen font-alata bg-black">
           
           

            {/* Events List Sectin */}
            <section
                id="events-list"
                ref={(el) => (sectionsRef.current[0] = el)}
                className={`min-h-screen w-full bg-gradient-to-b from-black via-purple-900/20 to-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 transition-all duration-1000 ${
                    visibleSections.has('events-list') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
            >
                <div className="max-w-7xl mx-auto w-full pt-20 md:pt-24 lg:pt-28">
                    <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-14 lg:mb-16">
                        Upcoming Events
                    </h2>
                    
                    {loading ? (
                        <div className="text-center text-white text-xl">Loading events...</div>
                    ) : error ? (
                        <div className="text-center text-red-400 text-xl">Error: {error}</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
                            {events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-7 lg:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                                        visibleSections.has('events-list') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                    }`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <div className="text-4xl mb-4">🎉</div>
                                    <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-white mb-3 md:mb-4">{event.title}</h3>
                                    <p className="text-gray-300 text-base md:text-base lg:text-lg leading-relaxed mb-4">{event.description}</p>
                                    <div className="space-y-2">
                                        <p className="text-purple-400 font-medium">📅 {new Date(event.date).toLocaleDateString()}</p>
                                        <p className="text-purple-400 font-medium">📍 {event.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Categories Section */}
            <section
                id="categories"
                ref={(el) => (sectionsRef.current[1] = el)}
                className={`min-h-screen w-full bg-gradient-to-b from-black via-indigo-900/20 to-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 flex items-center transition-all duration-1000 ${
                    visibleSections.has('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
            >
                <div className="max-w-7xl mx-auto w-full">
                    <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-14 lg:mb-16">
                        Event Categories
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
                        {[
                            { icon: "🎓", title: "Academic", description: "Workshops, seminars, and educational events" },
                            { icon: "🎵", title: "Cultural", description: "Music, arts, and cultural celebrations" },
                            { icon: "⚽", title: "Sports", description: "Athletic competitions and fitness activities" }
                        ].map((category, index) => (
                            <div
                                key={index}
                                className={`text-center transform transition-all duration-500 hover:scale-110 ${
                                    visibleSections.has('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="text-6xl mb-6">{category.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                                <p className="text-gray-300 text-lg">{category.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Navbar />
        </div>
    );
}

export default Events;
