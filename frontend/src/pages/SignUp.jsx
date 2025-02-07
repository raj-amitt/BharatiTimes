const SignUp = () => {
    return (
      <div className="flex justify-center items-center bg-white !px-6 !py-10">
        <div className="bg-white shadow-lg rounded-lg !p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 !mb-6">Create an Account</h2>
  
          <form>
            {/* Full Name */}
            <div className="!mb-4">
              <label className="block text-gray-700 text-sm font-semibold !mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full !px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Email */}
            <div className="!mb-4">
              <label className="block text-gray-700 text-sm font-semibold !mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full !px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Password */}
            <div className="!mb-4">
              <label className="block text-gray-700 text-sm font-semibold !mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full !px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Confirm Password */}
            <div className="!mb-6">
              <label className="block text-gray-700 text-sm font-semibold !mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                className="w-full !px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Sign-Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold !py-2 !px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
  
          {/* Already have an account? */}
          <p className="text-sm text-gray-600 text-center !mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  