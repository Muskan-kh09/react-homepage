const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST WHERE HERE TO HELP YOU WITH OUR SHOES. YOUR
          FEET DESERVE THE BEST WHERE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/Images/amazon.jpg" alt="amazon-logo" height="50" />
            <img src="/Images/flipkart.jpg" alt="flipkart-logo" height="50" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="Images/nike_shoes.jpg" alt="nike-logo" height="200" />
      </div>
    </main>
  );
};

export default HeroSection;
