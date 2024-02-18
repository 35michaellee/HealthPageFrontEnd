import React, { useState } from 'react';
import '../css/GroceryList.css'; // Import the CSS file for styling
import {Link} from 'react-router-dom';

const GroceryListPage = () => {
  const [newItem, setNewItem] = useState('');
  const [selectedType, setSelectedType] = useState('Fruits');
  const [groceryItems, setGroceryItems] = useState([
    {
      type: 'Fruits',
      items: ['Apples', 'Bananas', 'Oranges', 'Berries', 'Grapes']
    },
    {
      type: 'Vegetables',
      items: ['Spinach', 'Broccoli', 'Carrots', 'Tomatoes', 'Bell Peppers']
    },
    {
      type: 'Proteins',
      items: ['Chicken Breast', 'Salmon', 'Tofu', 'Eggs', 'Greek Yogurt']
    },
    {
      type: 'Whole Grains',
      items: ['Quinoa', 'Brown Rice', 'Oats', 'Whole Wheat Bread', 'Barley']
    },
    {
      type: 'Healthy Fats',
      items: ['Avocado', 'Nuts (Almonds, Walnuts)', 'Olive Oil', 'Chia Seeds', 'Flaxseeds']
    }
  ]);

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItems = [...groceryItems];
    const categoryIndex = updatedItems.findIndex(category => category.type === selectedType);
    if (categoryIndex === -1 || selectedType === 'Other') {
      updatedItems.push({ type: 'Other', items: [newItem] });
    } else {
      updatedItems[categoryIndex].items.push(newItem);
    }
    setGroceryItems(updatedItems);
    setNewItem('');
  };

  const handleDownload = () => {
    const text = groceryItems.reduce((result, category) => {
      result += `${category.type}:\n`;
      category.items.forEach(item => {
        result += `- ${item}\n`;
      });
      result += '\n';
      return result;
    }, '');

    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'grocery_list.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
    <div className="grocery-list-container">
      <div className="grocery-list">
        <h2>Grocery List</h2>
        {groceryItems.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.type}</h3>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="add-item-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newItem}
            onChange={handleInputChange}
            placeholder="Add new item..."
          />
          <select value={selectedType} onChange={handleSelectChange}>
            {groceryItems.map((category, index) => (
              <option key={index} value={category.type}>{category.type}</option>
            ))}
            <option value="Other">Other</option>
          </select>
          <button type="submit">Add Item</button>
        </form>
        <button onClick={handleDownload} className="download-btn">Download Grocery List</button>
      </div>
    </div>
    <Link to="/" className="back-to-home-link">Back to Home Page</Link>
    </>
    
  );
};

export default GroceryListPage;