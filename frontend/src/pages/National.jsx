// import { Link } from "react-router-dom";

import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import SideCard from "../components/SideCard";
import FullCard from "../components/FullCard";

const National = () => {
  return (
    <div className="flex gap-4 !px-6 !py-10 bg-white ">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            NATIONAL NEWS
          </h2>
        </div>

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

        <section className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/5">
            <img src="../../ad1.jpg" alt="" />
          </div>
          <div className="md:w-11/20">
            <img src="../../ad3.jpg" alt="" />
          </div>
          <div className="md:w-1/4 flex flex-col gap-5">
            <img src="../../ad2.jpg" alt="" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          {/* Latest News */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Latest News</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <MidCard />
              <MidCard />
              <MidCard />
              <MidCard />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row md:items-start gap-10">

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
          {/* Sports News */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">You may also like</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <div className="hidden lg:flex">
                <SmallCard />
              </div>
              <div className="hidden lg:flex">
                <SmallCard />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default National;
