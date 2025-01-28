// import { Link } from "react-router-dom";

import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import SideCard from "../components/SideCard";
import FullCard from "../components/FullCard";
import AdSlider from "../components/AdSlider";

const National = () => {
  return (
    <div className="flex gap-4 !px-6 !py-10 bg-white ">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <h2 className="text-xl font-medium">NATIONAL NEWS</h2>
        <section className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="w-full md:w-3/5 flex flex-col gap-8 md:gap-5">
            <FullCard />
          </div>
          <div className="w-full md:w-2/5">
            <div className="flex flex-col gap-8 md:gap-5">
              <SideCard />
              <SideCard />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          {/* Latest News */}
          <div className="flex flex-col gap-5 md:w-3/4">
            <h2 className="text-xl font-medium">Latest News</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <MidCard />
              <MidCard />
              <div className="hidden md:block">
                <MidCard />
              </div>
            </div>
          </div>
          {/* Advertisement */}
          <div className="md:w-1/4 bg-gray-800 flex flex-col justify-between items-center !py-2 rounded-xl overflow-hidden">
            <h2 className="text-white text-center">Advertisement</h2>
            <AdSlider />
          </div>
        </section>

        <section className="flex flex-col md:flex-row md:items-center gap-10">
          {/* Top News */}
          <div className="w-full md:w-3/5">
            <BigCard />
          </div>
          {/* National News */}
          <div className="w-full md:w-2/5">
            <div className="flex flex-col gap-8 md:gap-5">
              <SideCard />
              <SideCard />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          {/* Sports News */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">You may also like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default National;
