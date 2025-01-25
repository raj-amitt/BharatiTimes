const SideCard = () => (
    <div className="rounded-lg shadow-md flex overflow-hidden bg-white">
      <div className="flex flex-col justify-center gap-2 w-1/2 !m-4">
        <p className="text-xs md:text-sm text-gray-600">Author | 3 hours age</p>
        <h3 className="text-md md:text-xl font-medium">Lorem ipsum dolor sit amet consectetur</h3>
        <p className="text-xs md:text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-xs md:text-sm text-gray-600"><span className="text-red-700 font-medium">Category</span> | 8 min read</p>
      </div>
      <div className="w-1/2">
        <img src="../../tech.jpg" className="w-full object-cover h-full" alt="" />
      </div>
    </div>
  );
  
  export default SideCard;
  