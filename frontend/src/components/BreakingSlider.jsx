import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BreakingSlider = ({ articles }) => {
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

  const sortedArticles = [...articles]
    .filter((article) => article.isBreakingNews)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="flex items-center bg-white border w-full overflow-hidden">
      {/* Fixed Box on the Left */}
      <div className="bg-red-600 !py-2 !pl-6 text-sm md:text-md font-bold w-7/20 sm:w-1/5 text-white">
        Breaking :
      </div>

      {/* Continuous Scrolling News */}
      <div
        ref={scrollRef}
        className="relative flex overflow-hidden w-13/20 sm:w-4/5 whitespace-nowrap"
      >
        <div className="flex !space-x-8">
          {sortedArticles.concat(sortedArticles).map((item, i) => (
            <div key={i} className="flex flex-col !px-4">
              <Link
                to={`/article/${item.id}`}
                className="text-sm md:text-md flex-shrink-0 inline-block hover:underline"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BreakingSlider.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      isBreakingNews: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default BreakingSlider;
