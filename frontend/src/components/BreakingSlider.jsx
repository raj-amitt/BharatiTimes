import { useState, useEffect } from 'react';

const BreakingSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const newsList = [
        'Breaking: New updates on weather forecast.',
        'Breaking: Major traffic in downtown area.',
        'Breaking: Local team wins the championship.',
        'Breaking: New tech product released today.',
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % newsList.length);
        }, 5000); // Auto slide every 5 seconds for slower speed
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="flex items-center bg-gray-300 w-full">
            {/* Fixed Box on the Left */}
            <div className="bg-red-600 !py-2 !px-6 text-md font-bold w-1/7 text-white">
                Breaking Now:
            </div>

            {/* Sliding News Container */}
            <div className="relative flex overflow-hidden ml-4 w-full text-gray-900">
                <div
                    className="flex transition-transform duration-[10000ms]" // Slow transition (10 seconds)
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {newsList.map((news, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                            <p className="text-md">{news}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BreakingSlider;
