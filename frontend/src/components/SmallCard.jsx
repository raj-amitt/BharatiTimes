import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";

const SmallCard = ({ article }) => {
  if (!article) return null;

  const { title, coverImage, author, publishedTime, category, timeToRead } =
    article;

    const formattedPublishedTime = publishedTime
    ? formatDistanceToNowStrict(new Date(publishedTime), { addSuffix: true })
    : "Recently";

    const coverImageUrl = coverImage ? `http://localhost:1337${coverImage.url}` : "../../tech.jpg";

  return (
    <div className="rounded-lg flex flex-col overflow-hidden bg-white gap-y-4 group">
      {/* Article Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={coverImageUrl} 
          className="w-full h-32 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
      </div>

      {/* Article Details */}
      <div className="flex flex-col justify-center gap-1">
        <p className="text-sm md:text-md text-gray-600">
          {author || "Unknown Author"} | {formattedPublishedTime}
        </p>

        <h3 className="text-md md:text-xl font-medium smallcard-title">{title}</h3>

        <div className="flex flex-col md:inline">
          <span className="text-red-700 font-medium text-sm md:text-md">
            {category || "General"}
          </span>
          <span className="text-gray-600 hidden md:inline text-sm md:text-md">
            {" "}
            |{" "}
          </span>
          <span className="text-gray-600 text-sm md:text-md">
            {timeToRead ? `${timeToRead} min read` : "Reading time unavailable"}
          </span>
        </div>
      </div>
    </div>
  );
};

SmallCard.propTypes = {
  article: PropTypes.shape({
      title: PropTypes.string,
      coverImage: PropTypes.shape({
        url: PropTypes.string,
      }),
      author: PropTypes.string,
      publishedTime: PropTypes.string,
      category: PropTypes.string,
      timeToRead: PropTypes.number,
      body: PropTypes.string,
  }),
};

export default SmallCard;
