import { Link } from "react-router-dom";

import AdSlider from "../components/AdSlider";
import LatestNews from "../components/LatestNews";
import MidCard from "../components/MidCard";
import SmallCard from "../components/SmallCard";
import SideCard from "../components/SideCard";
import FullCard from "../components/FullCard";
import BreakingSlider from "../components/BreakingSlider";

const Home = () => (
  <>
    <div className="!mt-4">
      <BreakingSlider />
    </div>
    <div className="flex gap-4 !px-6 !py-10 bg-white">
      <main className="flex flex-col gap-8 md:gap-10">
        <section className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="w-full md:w-3/5">
            <AdSlider />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-5">
            <LatestNews />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          {/* National News */}
          <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">National News</h2>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <MidCard />
              <MidCard />
              <MidCard />
              <MidCard />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          {/* International News */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">International News</h2>
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              <SmallCard />
              <SmallCard />
              <div className="hidden lg:block">
                <SmallCard />
              </div>
            </div>
          </div>
          {/* Science & Tech News */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Science & Tech News</h2>
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              <SmallCard />
              <SmallCard />
              <div className="hidden lg:block">
                <SmallCard />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row md:items-start gap-10">
          {/* Business & Economics News */}
          <div className="w-full md:w-3/5 flex flex-col gap-8 md:gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Business News</h2>
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
            <FullCard />
          </div>
          {/* Education News */}
          <div className="w-full md:w-2/5">
            <div className="flex flex-col gap-8 md:gap-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Education News</h2>
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
              <SideCard />
              <SideCard />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          {/* Health News */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Health News</h2>
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
            <div className="grid grid-cols-2 gap-5">
              <MidCard />
              <MidCard />
            </div>
          </div>
          {/* Entertainment News */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Entertainment News</h2>
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
            <div className="grid grid-cols-2 gap-5">
              <MidCard />
              <MidCard />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10">
          {/* Sports News */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Sports News</h2>
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
  </>
);

export default Home;
