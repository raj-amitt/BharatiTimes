import { useState } from "react";

const FullCard = () => {
  const cards = [
    {
      image: "../../tech.jpg",
      author: "Author 1",
      timeAgo: "3 hours ago",
      title: "Lorem ipsum dolor sit amet consectetur",
      category: "Technology",
      readTime: "8 min read",
    },
    {
      image: "../../tech.jpg",
      author: "Author 2",
      timeAgo: "5 hours ago",
      title: "Exploring the wonders of nature",
      category: "Nature",
      readTime: "6 min read",
    },
    {
      image: "../../tech.jpg",
      author: "Author 3",
      timeAgo: "1 day ago",
      title: "The mysteries of the cosmos",
      category: "Science",
      readTime: "10 min read",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="relative w-full">
      {/* Card */}
      <div className="relative rounded-lg overflow-hidden bg-white text-white h-64 md:h-80 group">
        {/* Background Image */}
        <img
          src={currentCard.image}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          alt={currentCard.title}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Content */}
        <div className="absolute bottom-0 flex flex-col justify-center gap-4 !p-6">
          <p className="text-sm md:text-md">
            {currentCard.author} | {currentCard.timeAgo}
          </p>
          <h3 className="text-xl md:text-3xl font-medium">
            {currentCard.title}
          </h3>
          <p className="text-sm md:text-md">
            <span className="text-red-400 font-medium">
              {currentCard.category}
            </span>{" "}
            | {currentCard.readTime}
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
          className="absolute top-1/2 right-0 -translate-1/2 bg-gray-700 text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer z-10 hover:bg-gray-500"
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

export default FullCard;
