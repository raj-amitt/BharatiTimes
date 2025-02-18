import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";

const MidCard = ({ article }) => {
  if (!article) return null;

  const { title, coverImage, author, publishedTime, category, timeToRead, body } = article;

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
          className="w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
      </div>

      {/* Article Details */}
      <div className="flex flex-col justify-center gap-1">
        <p className="text-sm md:text-md text-gray-600">
          {author || "Unknown Author"} | {formattedPublishedTime}
        </p>

        <h3 className="text-xl font-medium midcard-title">{title}</h3>

        <p className="text-sm md:text-md text-gray-600 midcard-para">
          {body}
        </p>

        <p className="text-sm md:text-md text-gray-600">
          <span className="text-red-700 font-medium">
            {category || "General"}
          </span>{" "}
          | {timeToRead ? `${timeToRead} min read` : ""}
        </p>
      </div>
    </div>
  );
};

MidCard.propTypes = {
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

export default MidCard;
