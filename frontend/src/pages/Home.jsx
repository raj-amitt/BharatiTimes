import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import SideCard from "../components/SideCard";
// import AdSlider from "../components/AdSlider";

const Home = () => (
  <>
    <div className="flex gap-4 !p-6 bg-gray-100">
      <main className="flex flex-col gap-10">
        {/* Top News */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/5">
            <BigCard />
          </div>
          <div className="w-full md:w-2/5">
            <div className="flex flex-col gap-4">
              <SideCard />
              <SideCard />
            </div>
          </div>
        </section>

        {/* Advertisement */}
        {/* <section className="w-1/3">
          <AdSlider />
        </section> */}

        {/* Latest News */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Latest News</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <MidCard />
            <MidCard />
            <MidCard />
            <MidCard />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6">
          {/* National News */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">National News</h2>
            <div className="grid grid-cols-3 gap-6">
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
          {/* International News */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">International News</h2>
            <div className="grid grid-cols-3 gap-6">
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
);

export default Home;
