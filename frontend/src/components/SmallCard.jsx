const SmallCard = () => (
    <div className="rounded-lg flex flex-col overflow-hidden bg-white gap-y-4">
      <div className="">
        <img src="../../tech.jpg" className="w-full h-32 object-cover rounded-lg" alt="" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm md:text-md text-gray-600">Author | 3 hours age</p>
        <h3 className="text-md md:text-xl font-medium">Lorem ipsum dolor sit amet consectetur</h3>
        <p className="text-sm md:text-md text-gray-600"><span className="text-red-700 font-medium">Category</span> | 8 min read</p>
      </div>
    </div>
  );
  
  export default SmallCard;
  