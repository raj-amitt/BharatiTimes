import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

import AdSlider from "../components/AdSlider";
import LatestNews from "../components/LatestNews";
import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import SideCard from "../components/SideCard";
import FullCard from "../components/FullCard";
import BreakingSlider from "../components/BreakingSlider";

const Home = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/articles"
  );

  const filterArticlesByCategory = (category) => {
    return data.filter((article) => article.category === category);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="text-center !p-8">
        <p className="!mt-4">Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center !p-8 text-red-500">
        Error loading articles: {error}
      </div>
    );
  }

  return (
    <>
      <div className="!mt-4">
        <BreakingSlider articles={data} />
      </div>
      <div className="flex gap-4 !px-6 !py-10 bg-white">
        <main className="flex flex-col gap-8 md:gap-10">
          <section className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="w-full md:w-3/5">
              <AdSlider />
            </div>
            <div className="w-full md:w-2/5 flex flex-col gap-5">
              <LatestNews articles={data} />
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-10">
            {/* National News */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">National</h2>
                <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                  <Link to="/national" className="text-sm font-medium">
                    Show More
                  </Link>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
                {filterArticlesByCategory("National")
                  .slice(0, 4)
                  .map((article) => (
                    <MidCard key={article.id} article={article} />
                  ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row gap-10">
            {/* International News */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">International</h2>
                <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                  <Link to="/international" className="text-sm font-medium">
                    Show More
                  </Link>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-5">
                {filterArticlesByCategory("International")
                  .slice(0, 3)
                  .map((article) => (
                    <SmallCard key={article.id} article={article} />
                  ))}
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:hidden gap-5">
                {filterArticlesByCategory("International")
                  .slice(0, 2)
                  .map((article) => (
                    <SmallCard key={article.id} article={article} />
                  ))}
              </div>
            </div>
            {/* Technology News */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Technology</h2>
                <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                  <Link to="/science" className="text-sm font-medium">
                    Show More
                  </Link>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-5">
                {filterArticlesByCategory("Technology")
                  .slice(0, 3)
                  .map((article) => (
                    <SmallCard key={article.id} article={article} />
                  ))}
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:hidden gap-5">
                {filterArticlesByCategory("Technology")
                  .slice(0, 2)
                  .map((article) => (
                    <SmallCard key={article.id} article={article} />
                  ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row md:items-start gap-10">
            {/* Business News */}
            <div className="w-full lg:w-3/5 flex flex-col gap-8 md:gap-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Business</h2>
                <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                  <Link to="/business" className="text-sm font-medium">
                    Show More
                  </Link>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              {
                <FullCard
                  articles={filterArticlesByCategory("Business").slice(0, 1)}
                />
              }
            </div>
            {/* Education News */}
            <div className="w-full lg:w-2/5">
              <div className="flex flex-col gap-8 md:gap-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium">Education</h2>
                  <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                    <Link to="/education" className="text-sm font-medium">
                      Show More
                    </Link>
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
                  {filterArticlesByCategory("Education")
                    .slice(0, 2)
                    .map((article) => (
                      <SideCard key={article.id} article={article} />
                    ))}
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row gap-10">
            {/* Lifestyle News */}
            <div className="flex flex-col gap-5 lg:w-1/2">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Lifestyle</h2>
                <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                  <Link to="/health" className="text-sm font-medium">
                    Show More
                  </Link>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-5">
                {filterArticlesByCategory("Lifestyle")
                  .slice(0, 2)
                  .map((article) => (
                    <MidCard key={article.id} article={article} />
                  ))}
              </div>
            </div>
            {/* Entertainment News */}
            <div className="flex flex-col gap-5 lg:w-1/2">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Entertainment</h2>
                <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                  <Link to="/entertainment" className="text-sm font-medium">
                    Show More
                  </Link>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-5">
                {filterArticlesByCategory("Entertainment")
                  .slice(0, 2)
                  .map((article) => (
                    <MidCard key={article.id} article={article} />
                  ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-10">
            {/* Sports News */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Sports</h2>
                <div className="flex items-center gap-1 text-red-700 hover:text-gray-600">
                  <Link to="/sports" className="text-sm font-medium">
                    Show More
                  </Link>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-5">
                {filterArticlesByCategory("Sports")
                  .slice(0, 6)
                  .map((article) => (
                    <SmallCard key={article.id} article={article} />
                  ))}
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:hidden gap-5">
                {filterArticlesByCategory("Sports")
                  .slice(0, 4)
                  .map((article) => (
                    <SmallCard key={article.id} article={article} />
                  ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
