import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";

const MainCard = ({ article }) => {
  if (!article) return null;

  const {
    title,
    coverImage,
    author,
    publishedTime,
    category,
    timeToRead,
    body,
  } = article;

  const formattedPublishedTime = publishedTime
    ? formatDistanceToNowStrict(new Date(publishedTime), { addSuffix: true })
    : "Recently";

  const coverImageUrl = coverImage
    ? `http://localhost:1337${coverImage.url}`
    : "../../tech.jpg";

  return (
    <div className="rounded-lg flex flex-col overflow-hidden bg-white gap-y-4">
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm text-gray-600">
          {author || "Unknown Author"}| {formattedPublishedTime}
        </p>
        <p className="text-sm text-gray-600">
          <span className="text-red-700 font-medium">
            {category || "General"}
          </span>{" "}
          <span className="text-gray-600 hidden lg:inline text-sm md:text-md">
            {" "}
            |{" "}
          </span>
          <span className="text-gray-600 text-sm md:text-md">
            {timeToRead ? `${timeToRead} min read` : "Reading time unavailable"}
          </span>
        </p>
        <div className="">
          <img
            src={coverImageUrl}
            className="w-full h-128 object-cover rounded-lg"
            alt={title}
          />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{body}</p>
      </div>
    </div>
  );
};

MainCard.propTypes = {
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

export default MainCard;
