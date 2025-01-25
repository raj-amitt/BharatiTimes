
import MidCard from "../components/MidCard"
import BigCard from "../components/BigCard";
import AdSlider from "../components/AdSlider";

const Home = () => (
  <>
    <div className="home-content">
      <main className="home-main">
        <section className="top-news">
          <BigCard />
        </section>
        <section className="latest-news">
          <h2 className="text-xl font-medium">Latest News</h2>
          <div className="grid grid-cols-4 gap-4">
            <MidCard />
            <MidCard />
            <MidCard />
            <MidCard />
          </div>
        </section>
      </main>
      <aside>
        <AdSlider />
      </aside>
    </div>
  </>
);

export default Home;
