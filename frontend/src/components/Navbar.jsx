import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <nav className="bg-gray-300 flex flex-col lg:block items-end relative">
        {/* Mobile Header */}
        <div className="flex lg:hidden justify-between w-full">
          <div className="flex items-center !px-6 text-gray-900 text-sm">
            <p>{formattedDate}</p>
          </div>
          <div className="cursor-pointer !px-6 !py-2" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        {/* Main Navigation */}
        <ul
          className={`lg:flex justify-between !px-6 !py-4 lg:!py-2 text-md text-gray-700 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/national", label: "National" },
            { path: "/international", label: "International" },
            { path: "/science", label: "Science & Tech" },
            { path: "/business", label: "Business & Economics" },
            { path: "/education", label: "Education" },
            { path: "/health", label: "Health" },
            { path: "/aboutus", label: "About" },
            { path: "/contactus", label: "Contact" },
          ].map(({ path, label }) => (
            <li key={path} className="text-right !mb-2 lg:!mb-0">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-gray-900 font-bold" : "hover:text-gray-900 hover:font-medium"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* More items for small screens (No dropdown) */}
          <div className="md:hidden">
            {[
              { path: "/entertainment", label: "Entertainment" },
              { path: "/sports", label: "Sports" },
              { path: "/currentissue", label: "Current Issue" },
              { path: "/archive", label: "Archive" },
              { path: "/login", label: "Login" },
            ].map(({ path, label }) => (
              <li key={path} className="text-right !mb-2">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${isActive ? "text-gray-700 font-bold" : "hover:text-gray-900 hover:font-medium"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </div>

          {/* More Dropdown (Only for md and larger screens) */}
          <li
            className="relative text-right mb-2 lg:mb-0 cursor-pointer hidden lg:block"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button className="hover:text-gray-700 flex items-center">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu (Aligned to Right) */}
            <ul
              className={`absolute right-0 mt-2 w-48 bg-gray-300 text-gray-700 border border-gray-500 shadow-lg z-50 rounded-md transition-all ${
                isMoreOpen ? "block" : "hidden"
              }`}
            >
              {[
                { path: "/entertainment", label: "Entertainment" },
                { path: "/sports", label: "Sports" },
                { path: "/currentissue", label: "Current Issue" },
                { path: "/archive", label: "Archive" },
                { path: "/login", label: "Login" },
              ].map(({ path, label }) => (
                <li
                  key={path}
                  className=""
                >
                  <NavLink
                    to={path}
                    className="block !px-4 !py-2 hover:text-gray-900 hover:font-medium"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
