import { Link } from "react-router-dom";

const Header = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="block md:flex justify-center md:justify-between !p-6">
      <div className="hidden md:flex items-center w-1/5">
        <p>{formattedDate}</p>
      </div>
      <div className="flex justify-center w-full md:w-1/3">
        <img src="../../logo.png" alt="bharati-times-logo" loading="lazy" />
      </div>
      <div className="hidden md:flex justify-end items-center gap-4 w-1/5">
        <Link to='/aboutus'>About</Link>
        <Link to='/contactus'>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
