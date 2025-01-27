const BigCard = () => (
    <div className="rounded-lg  flex flex-col overflow-hidden bg-white gap-y-4">
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm md:text-md text-gray-600">Author | 3 hours age</p>
        <h3 className="text-xl md:text-3xl font-medium">Lorem ipsum dolor sit amet consectetur</h3>
        <p className="text-sm md:text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          facere consectetur quidem est molestiae repudiandae, adipisci magnam qui
          nisi eius, error ab, blanditiis illum incidunt.
        </p>
        <p className="text-sm md:text-md text-gray-600"><span className="text-red-700 font-medium">Category</span> | 8 min read</p>
      </div>
      <div className="">
        <img src="../../tech.jpg" className="w-full h-48 md:h-64 object-cover rounded-lg" alt="" />
      </div>
    </div>
  );
  
  export default BigCard;
  