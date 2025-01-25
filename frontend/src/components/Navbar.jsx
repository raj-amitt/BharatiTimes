import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="bg-red-700 flex flex-col md:block items-end">
        <div className="flex md:hidden justify-between w-full">
          <div className="flex items-center !px-6 text-white text-sm">
            <p>{formattedDate}</p>
          </div>
          <div className="cursor-pointer !px-6 !py-2" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <ul
          className={`md:flex justify-between !px-6 !py-4 !md:py-2 text-red-100 ${
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
            { path: "/entertainment", label: "Entertainment" },
            { path: "/sports", label: "Sports" },
            { path: "/more", label: "More" },
          ].map(({ path, label }) => (
            <li key={path} className="text-right">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-white font-bold" : "hover:text-white"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
