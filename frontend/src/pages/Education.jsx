import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

import AdSlider from "../components/AdSlider";
import LatestNews from "../components/LatestNews";
import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import SideCard from "../components/SideCard";
import FullCard from "../components/FullCard";

const Education = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/articles/category/Education"
  );

  const { loading: allLoading, error: allError, data: allArticles } = useFetch( 
    "http://localhost:1337/api/articles"
  );

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (allArticles) {
      const filteredArticles = allArticles.filter(article => article.category !== "Education");
      const shuffledArticles = [...filteredArticles].sort(() => 0.5 - Math.random());
  
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
    <div className="flex gap-4 !px-6 !py-10 bg-white">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            EDUCATION NEWS
          </h2>
        </div>

        <section className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="w-full md:w-3/5">
            <AdSlider />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-5">
            <LatestNews articles={data} />
          </div>
        </section>

        <section className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="w-full md:w-3/5">
            {data[0] && <BigCard article={data[0]} />}
          </div>
          <div className="w-full md:w-2/5">
            <div className="flex flex-col gap-8 md:gap-5">
              {data.slice(1, 3).map((article) => (
                <SideCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium">Latest News</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {data.slice(3, 7).map((article) => (
                <MidCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-start gap-10">
          <div className="w-full lg:w-3/5 flex flex-col gap-8 md:gap-5">
            {data.slice(7, 8).length > 0 && (
              <FullCard articles={data.slice(7, 8)} />
            )}
          </div>
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col md:flex-row lg:flex-col gap-8 md:gap-5">
              {data.slice(8, 10).map((article) => (
                <SideCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium">You may also like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5">
              {visibleCards.map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Education;
