import NewsCard from "../components/NewsCard";
import AdSlider from "../components/AdSlider";

const Home = () => (
  <>
    <div className="breaking-news">
      <span className="breaking-title">Breaking Now:</span>
      <div className="news-ticker">
        <div className="news-content">
          {[
            "Breaking news item 1: Important update on global markets.",
            "Breaking news item 2: Major development in science and technology.",
            "Breaking news item 3: Sports headlines of the day.",
          ].map((news, index) => (
            <p key={index}>{news}</p>
          ))}
        </div>
      </div>
    </div>
    <div className="home-content">
      <main>
        <section className="latest-news">
          <h2 className="section-title">Latest News</h2>
          <div className="card-container">
            <NewsCard />
            <NewsCard />
            <NewsCard />
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
