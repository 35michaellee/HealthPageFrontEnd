import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel";
import '../css/Tips.css'
import { Link } from 'react-router-dom';

export default function CarouselPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch carousel items from your backend API
    fetch('http://localhost:3000/health-tips')
      .then(response => response.json())
      .then(data => {
        // Once data is fetched, set it in state
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching carousel items:', error);
      });
  }, []); 

  return (
    <>
     <div className='tipsContainer'>
      <h1>Top Tips For Health</h1>
      <Carousel items={items} />
      </div>
        <Link to="/" className="back-to-home-link">Back to Home Page</Link>
    </>
  );
}