const FullCard = () => (
    <div className="relative rounded-lg overflow-hidden bg-white text-white h-86">
      {/* Background Image */}
      <img
        src="../../tech.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Content */}
      <div className="absolute bottom-0 flex flex-col justify-center gap-4 !p-6">
        <p className="text-sm md:text-md">Author | 3 hours ago</p>
        <h3 className="text-xl md:text-3xl font-medium">
          Lorem ipsum dolor sit amet consectetur
        </h3>
        <p className="text-sm md:text-md">
          <span className="text-red-400 font-medium">Category</span> | 8 min read
        </p>
      </div>
    </div>
  );
  
  export default FullCard;
  