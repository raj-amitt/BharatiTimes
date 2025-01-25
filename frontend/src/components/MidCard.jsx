const MidCard = () => (
  <div className="rounded-lg shadow-md flex flex-col overflow-hidden bg-gray-100">
    <div className="">
      <img src="../../tech.jpg" className="w-full h-48 object-cover" alt="" />
    </div>
    <div className="flex flex-col justify-center gap-2 !m-4">
      <p className="text-sm text-gray-600">Author | 3 hours age</p>
      <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur</h3>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        facere consectetur quidem est.
      </p>
      <p className="text-sm text-gray-600"><span className="text-red-700 font-medium">Category</span> | 8 min read</p>
    </div>
  </div>
);

export default MidCard;
