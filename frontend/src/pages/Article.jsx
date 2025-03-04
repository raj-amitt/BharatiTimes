import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MainCard from "../components/MainCard";
import SideCard from "../components/SideCard";

const Article = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/articles/${id}`
  );

  const {
    loading: allLoading,
    error: allError,
    data: allArticles,
  } = useFetch("http://localhost:1337/api/articles");

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (allArticles) {
      const shuffledArticles = [...allArticles].sort(() => 0.5 - Math.random());

      const handleResize = () => {
        if (window.innerWidth < 1024) {
          setVisibleCards(shuffledArticles.slice(0, 4));
        } else {
          setVisibleCards(shuffledArticles.slice(0, 6));
        }
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [allArticles]);

  if (loading || allLoading) {
    return (
      <div className="text-center !p-8">
        <p className="!mt-4">Loading articles...</p>
      </div>
    );
  }

  if (error || allError) {
    return (
      <div className="text-center !p-8 text-red-500">
        Error loading articles: {error || allError}
      </div>
    );
  }

  return (
    <div className="!px-6 !py-10 flex flex-col lg:flex-row w-full gap-8 md:gap-10">
      <main className="w-full lg:w-2/3">
        <MainCard article={data} />
      </main>
      <aside className="w-full lg:w-1/3">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-medium">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
            {visibleCards.map((article) => (
              <SideCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Article;
