import { useState, useEffect } from "react";

const ContactUs = () => {
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCorrectAnswer(num1 + num2);
    setCaptchaQuestion(`${num1} + ${num2} =`);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswer = parseInt(captchaInput, 10);
    if (userAnswer === correctAnswer) {
      alert("Form submitted successfully!");
      generateCaptcha();
      setCaptchaInput("");
    } else {
      alert("Captcha incorrect. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-white !px-6 !py-10">
      <div className="bg-white !p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-medium !mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="">
              <input
                type="text"
                placeholder="Name"
                className="w-full !p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full !p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="">
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full !p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Location"
                className="w-full !p-2 border text-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Subject"
              className="w-full !p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div className="">
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full !p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-md text-gray-800 w-1/3 md:w-1/6">{captchaQuestion}</span>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Answer"
              className="w-full !p-2 text-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              maxLength={3}
            />
          </div>
          <button
            type="submit"
            className="w-full !p-2 text-md bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
