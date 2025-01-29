const SmallCard = () => (
  <div className="rounded-lg flex flex-col overflow-hidden bg-white gap-y-4 group">
    <div className="relative overflow-hidden rounded-lg">
      <img
        src="../../tech.jpg"
        className="w-full h-32 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
        alt=""
      />
    </div>
    <div className="flex flex-col justify-center gap-1">
      <p className="text-sm md:text-md text-gray-600">Author | 3 hours age</p>
      <h3 className="text-md md:text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur
      </h3>
      <div className="flex flex-col md:inline">
        <span className="text-red-700 font-medium text-sm md:text-md">Category</span>
        <span className="text-gray-600 hidden md:inline text-sm md:text-md"> | </span>
        <span className="text-gray-600 text-sm md:text-md">8 min read</span>
      </div>
    </div>
  </div>
);

export default SmallCard;
