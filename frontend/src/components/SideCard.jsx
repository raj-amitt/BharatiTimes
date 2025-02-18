import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router-dom";

const SideCard = ({ article }) => {
  if (!article) return null;

  const { id, title, coverImage, author, publishedTime, category, timeToRead } =
    article;

  const formattedPublishedTime = publishedTime
    ? formatDistanceToNowStrict(new Date(publishedTime), { addSuffix: true })
    : "Recently";

  const coverImageUrl = coverImage
    ? `http://localhost:1337${coverImage.url}`
    : "../../tech.jpg";

  return (
    <Link to={`/article/${id}`} className="block">
      <div className="rounded-lg flex gap-3 overflow-hidden bg-white group">
        {/* Article Details */}
        <div className="flex flex-col justify-center gap-1 w-1/2">
          <p className="text-sm md:text-md text-gray-600">
            {author || "Unknown Author"} | {formattedPublishedTime}
          </p>
          <h3 className="text-xl md:text-xl font-medium sidecard-title">
            {title}
          </h3>
          <div className="flex flex-col lg:inline">
            <span className="text-red-700 font-medium text-sm md:text-md">
              {category || "General"}
            </span>
            <span className="text-gray-600 hidden lg:inline text-sm md:text-md">
              {" "}
              |{" "}
            </span>
            <span className="text-gray-600 text-sm md:text-md">
              {timeToRead
                ? `${timeToRead} min read`
                : "Reading time unavailable"}
            </span>
          </div>
        </div>

        {/* Article Image */}
        <div className="w-1/2 relative overflow-hidden rounded-lg">
          <img
            src={coverImageUrl}
            className="w-full object-cover h-full rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
};

SideCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
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

export default SideCard;
