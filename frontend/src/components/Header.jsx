import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <header className="block md:flex justify-center md:justify-between !p-6">
      <div className="hidden md:flex items-center w-1/5">
        <img className="w-48" src="../../logoo.png" alt="" />
      </div>
      <div className="flex justify-center w-full md:w-1/3">
        <img src="../../logo.png" alt="bharati-times-logo" loading="lazy" />
      </div>
      <div className="hidden md:flex justify-end items-center gap-4 w-1/5">
        <p className="text-right">{formattedDate}, {formattedTime}</p>
      </div>
    </header>
  );
};

export default Header;
