import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MainCard from "../components/MainCard";
import SideCard from "../components/SideCard";

const Article = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    data
  } = useFetch(`http://localhost:1337/api/articles/${id}`);
  

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
    <div className="!px-6 !py-10">
        <main className="w-2/3">
            <MainCard article={data} />
        </main>
        <aside className="w-1/3">
            <SideCard />
        </aside>
    </div>
  );
};

export default Article;
