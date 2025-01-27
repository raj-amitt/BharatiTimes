import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black">
      <div className="flex md:flex-col border-b-1 border-gray-500">
        <div className="bg-black text-white flex flex-col md:flex-row w-1/2 md:w-full justify-between gap-4 !p-6">
          <div className="md:w-1/3">
            <h1 className="text-xl md:text-3xl">
              Latest Headlines: Breaking News and Updates
            </h1>
          </div>
          <div className="flex flex-col gap-1 md:items-end text-xs md:text-sm">
            <p>ADDRESS</p>
            <p>A-4, Paschim Vihar,</p>
            <p>Opp. Paschim Vihar (East) Metro Station,</p>
            <p>Rohtak Road, New Delhi, Delhi 110063</p>
          </div>
        </div>

        <div className="bg-black text-xs md:text-sm text-gray-300 flex flex-col items-end md:grid md:grid-cols-5 w-1/2 md:w-full gap-2 md:gap-4 !p-6 md:border-y-1 border-gray-500">
          <Link to="/">Home</Link>
          <Link to="/national">National</Link>
          <Link to="/international">International</Link>
          <Link to="/science">Science & Tech</Link>
          <Link to="/business">Business & Economics</Link>
          <Link to="/education">Education</Link>
          <Link to="/health">Health</Link>
          <Link to="/entertainment">Entertainment</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/more">More</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/contactus">Contact</Link>
        </div>
      </div>

      <div>
        <img
          src="../../footer.jpg"
          alt="footer-img"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>

      <div className="text-white bg-black text-center !py-2">
        <p className="text-sm md:text-md">
          © {new Date().getFullYear()} Bharati Times. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
