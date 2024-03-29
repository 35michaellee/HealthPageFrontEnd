import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "../components/Carousel";
import "../css/Main.css"

export default function Main() {
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
    <div id="welcomPage">  
      <section style={{ backgroundColor: '#f9f9f9', padding: '40px' }}>
        <h2>Welcome to Our Wellness Community!</h2>
      <p>Hi I'm Michael, and I'm excited to share some essential information about wellness with you. In today's fast-paced world, it's easy to overlook our health, but prioritizing wellness is crucial for leading a fulfilling life.</p>
      <p>Two pillars of wellness that play a significant role in our overall health are exercise and diet. Regular exercise not only keeps our bodies strong and flexible but also has numerous benefits for mental health, including reducing stress and improving mood. Similarly, maintaining a balanced diet provides our bodies with the necessary nutrients to function optimally and supports our overall well-being.</p>
      <p>While there's plenty to learn about wellness, this community serves as an excellent starting point for your journey towards a healthier lifestyle. Here, you'll find valuable resources, insightful articles, and supportive members who are all passionate about wellness and fitness.</p>
      <p>So, whether you're looking to improve your fitness routine, learn more about nutrition, or simply connect with like-minded individuals, you've come to the right place. Join us in our quest for wellness, and let's embark on this journey together!</p>
      </section>
    

      <section style={{marginTop:"5rem", display: 'flex', justifyContent: 'space-between' }}> 
      <div className="mainDivs" id="tipsOnMain">
        <h2>Come See Our Top Tips for health</h2>
        <p>we have included some tips with linked articles for better health.Check it out </p>
      <Link className="link" to="/Tips">Go to Tips</Link>
      </div>
      <div className="mainDivs" id="groceryListOnMain">
        <h2>Would you like to build a grocerylist ?</h2>
        <p>we have included a standard gorcery list that our community has built.It is healthy short.Check it out </p>
      <Link className="link" to="/GroceryList">Go to Grocery List</Link>
      </div>
      <div className="mainDivs" id="ExcersizeOnMain">
        <h2>Would you like to build a workout?</h2>
        <p>We have included a standard seacrh for you to add to add it to your list! </p>
      <Link className="link" to="/Excersize">Go to Excersize List</Link>
      </div>
      </section>
      </div>
    </>
  );
}
