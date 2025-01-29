import { useState, useEffect } from "react";

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
      <div className="hidden lg:flex items-center w-1/5">
        <img className="w-48" src="../../logoo.png" alt="" />
      </div>
      <div className="flex justify-center w-full md:w-1/3 lg:w-2/5">
        <img src="../../logo.png" alt="bharati-times-logo" loading="lazy" />
      </div>
      <div className="hidden md:flex md:flex-col justify-center items-end gap-1 md:w-1/3 lg:w-1/5">
        <p className="text-right">{formattedDate}</p>
        <p className="text-right">{formattedTime}</p>
      </div>
    </header>
  );
};

export default Header;
