const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/05/SOTEN_dark-background-.jpeg?w=600"
          alt="blog image"
        />
      </div>
      <div className="texts">
        <h2>Japan’s biggest drone maker sets its sights on the US</h2>
        <p className="info">
          <a href="#" className="author">
            Brian Heater
          </a>
          <time>8:00 AM GMT-5•May 4, 2023</time>
        </p>
        <p className="summary">
          This week, ten-year-old drone company ACSL announced plans to enter
          the U.S. commercial drone market. The firm has already taken a sizable
          bite out of the market in its native Japan, with a certificat
        </p>
      </div>
    </div>
  );
};

export default Post;
