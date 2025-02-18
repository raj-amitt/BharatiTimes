import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";

const FullCard = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!articles || articles.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const article = articles[currentIndex];
  const { title, coverImage, author, publishedTime, category, timeToRead } = article;

  const formattedPublishedTime = publishedTime
    ? formatDistanceToNowStrict(new Date(publishedTime), { addSuffix: true })
    : "Recently";

  const coverImageUrl = coverImage
    ? `http://localhost:1337${coverImage.url}`
    : "../../tech.jpg";

  return (
    <div className="relative w-full">
      {/* Card */}
      <div className="relative rounded-lg overflow-hidden bg-white text-white h-88 group">
        {/* Background Image */}
        <img
          src={coverImageUrl}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Content */}
        <div className="absolute bottom-0 flex flex-col justify-center gap-4 !py-6 !px-14">
          <p className="text-sm md:text-md">
            {author || "Unknown Author"} |{" "}
            {formattedPublishedTime}
          </p>
          <h3 className="text-xl md:text-3xl font-medium">
            {title}
          </h3>
          <p className="text-sm md:text-md">
            <span className="text-red-400 font-medium">
              {category || "General"}
            </span>{" "}
            |{" "}
            {timeToRead
              ? `${timeToRead} min read`
              : "Reading time unavailable"}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full !px-4">
        <button
          className="absolute top-1/2 left-8 -translate-1/2 bg-gray-700 text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer z-10 hover:bg-gray-500"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-1 -translate-1/2 bg-gray-700 text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer z-10 hover:bg-gray-500"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

FullCard.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      coverImage: PropTypes.shape({ url: PropTypes.string }),
      author: PropTypes.string,
      publishedTime: PropTypes.string,
      category: PropTypes.string,
      timeToRead: PropTypes.number,
    })
  ),
};

export default FullCard;
