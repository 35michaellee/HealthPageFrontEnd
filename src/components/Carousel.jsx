import React from 'react';
import Slider from 'react-slick'; //thank youuuuuu
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import './Carousel.css'; 


//items will be from data base but for now they are static in the thing and api will be used on articles page . 
const Carousel = ({ items }) => {
  const settings = {
    dots: true, //This setting determines whether to show the navigation dots at the bottom of the carousel.
    infinite: true, //enables infinite looping of the carousel.
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // the carousel will automatically advance to the next slide at regular intervals without requiring user interaction. so set to false 
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => console.log('Button clicked')}>Click Me</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;