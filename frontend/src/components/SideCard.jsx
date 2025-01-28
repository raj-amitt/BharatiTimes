const SideCard = () => (
    <div className="rounded-lg flex overflow-hidden bg-white group">
      <div className="flex flex-col justify-center gap-1 w-1/2">
        <p className="text-sm md:text-md text-gray-600">Author | 3 hours age</p>
        <h3 className="text-xl md:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur</h3>
        <p className="text-sm md:text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-sm md:text-md text-gray-600"><span className="text-red-700 font-medium">Category</span> | 8 min read</p>
      </div>
      <div className="w-1/2 relative overflow-hidden rounded-lg">
        <img src="../../tech.jpg" className="w-full object-cover h-full rounded-lg transform transition-transform duration-500 group-hover:scale-110" alt="" />
      </div>
    </div>
  );
  
  export default SideCard;
  