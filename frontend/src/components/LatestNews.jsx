import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const news = [
    {
      title: "Breaking: AI surpasses human intelligence",
      category: "Technology",
    },
    { title: "Stock markets see a sharp rise", category: "Finance" },
    { title: "Scientists discover an exoplanet", category: "Science" },
    { title: "Tech giants unveil next-gen AI chips", category: "Technology" },
    { title: "Breakthrough in renewable energy", category: "Energy" },
    { title: "Promising results for cancer treatment", category: "Health" },
    { title: "Climate change effects accelerating", category: "Environment" },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollNews = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollTop = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollNews, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden bg-gray-100 rounded-lg border">
      <div className="!px-4 !py-2 bg-white border-b">
        <h2 className="text-xl font-medium">Latest News</h2>
      </div>
      <div ref={scrollRef} className="h-full overflow-hidden">
        <div className="flex flex-col space-y-3 animate-scroll">
          {news.concat(news).map((item, i) => (
            <div key={i} className="flex flex-col !px-4 !py-2">
              <Link className="text-md md:text-lg text-blue-900 hover:text-blue-500 font-medium">
                {item.title}
              </Link>
              <span className="text-sm text-gray-600">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
