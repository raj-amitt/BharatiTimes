import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center gap-2 !p-6">
        <div className="flex flex-col md:flex-row gap-2 md:w-1/2 items-center md:items-start">
          <div>
            <p className="text-sm md:text-md">Address : </p>
          </div>
          <div>
            <p className="text-center md:text-left text-sm md:text-md">
              A-4, Paschim Vihar,
            </p>
            <p className="text-center md:text-left text-sm md:text-md">
              Opp. Paschim Vihar (East) Metro Station,
            </p>
            <p className="text-center md:text-left text-sm md:text-md">
              Rohtak Road, New Delhi, Delhi 110063
            </p>
          </div>
        </div>

        <div className="flex md:flex-col gap-2">
          <Link to="/aboutus" className="flex items-center gap-1 text-sm md:text-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            About
          </Link>
          <Link to="/contactus" className="flex items-center gap-1 text-sm md:text-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Contact
          </Link>
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
