import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";

const BigCard = ({ article }) => {
  if (!article) return null;

  const {
    title,
    author,
    publishedTime,
    category,
    timeToRead,
    body,
    coverImage,
  } = article;

  const coverImageUrl = coverImage
    ? `http://localhost:1337${coverImage.url}`
    : "../../tech.jpg";

  const formattedPublishedTime = publishedTime
      ? formatDistanceToNowStrict(new Date(publishedTime), { addSuffix: true })
      : "Recently";

  return (
    <div className="rounded-lg flex flex-col overflow-hidden bg-white gap-y-4 group">
      <div className="flex flex-col justify-center gap-1">
        <p className="text-sm md:text-md text-gray-600">
          {author || "Unknown Author"} | {formattedPublishedTime}
        </p>
        <h3 className="text-xl md:text-2xl font-medium bigcard-title">{title}</h3>
        <p className="text-sm md:text-md text-gray-600 bigcard-para">
          {body}
        </p>
        <p className="text-sm md:text-md text-gray-600">
          <span className="text-red-700 font-medium">{category}</span> |{" "}
          {timeToRead} min read
        </p>
      </div>
      <div className="relative overflow-hidden rounded-lg">
        {
          <img
            src={coverImageUrl}
            className="w-full h-48 lg:h-60 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            alt={title || "News image"}
          />
        }
      </div>
    </div>
  );
};

BigCard.propTypes = {
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

export default BigCard;
