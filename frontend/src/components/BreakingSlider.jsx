import { useEffect, useRef } from "react";

const BreakingSlider = () => {
  const newsList = [
    "New updates on weather forecast.",
    "Major traffic in downtown area.",
    "Local team wins the championship.",
    "New tech product released today.",
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollNews = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; 
        }
      }
    };

    const interval = setInterval(scrollNews, 30); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center bg-gray-300 w-full overflow-hidden">
      {/* Fixed Box on the Left */}
      <div className="bg-red-600 !py-2 !px-6 text-sm md:text-md font-bold w-2/5 md:w-1/5 text-white">
        Breaking Now:
      </div>

      {/* Continuous Scrolling News */}
      <div
        ref={scrollRef}
        className="relative flex overflow-hidden w-3/5 md:w-4/5 whitespace-nowrap"
      >
        <div className="flex !space-x-8">
          {newsList.concat(newsList).map((news, index) => (
            <div key={index} className="text-sm md:text-md flex-shrink-0">
              {news}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingSlider;
