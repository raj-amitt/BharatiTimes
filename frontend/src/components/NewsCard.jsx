const NewsCard = () => (
  <div className="card">
    <div className="cover-image">
      <img src="../../tech.jpg" alt="" />
    </div>
    <div className="card-content">
      <p className="card-content-top">Author | 3 hours age</p>
      <h3 className="card-title">Lorem ipsum dolor sit amet consectetur</h3>
      <p className="card-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        facere consectetur quidem est molestiae repudiandae, adipisci magnam qui
        nisi eius, error ab, blanditiis illum incidunt.
      </p>
      <p className="card-content-bottom">Category | 8 min read</p>
    </div>
  </div>
);

export default NewsCard;
