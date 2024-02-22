// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../css/GroceryList.css';
import { Link } from 'react-router-dom';

const GroceryListPage = () => {
  const [newItem, setNewItem] = useState('');
  const [selectedType, setSelectedType] = useState('Fruits');
  const [groceryItems, setGroceryItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchGroceryItems();
  }, []); // Empty dependency array ensures the effect runs ONLY ONCE when component mounts

  const fetchGroceryItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/groceries');
      if (!response.ok) {
        throw new Error('Failed to fetch grocery items');
      }
      const data = await response.json();
      setGroceryItems(data);
    } catch (error) {
      console.error('Error fetching grocery items:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItemObj = {
      name: newItem,
      category: selectedType
    };
    
    try {
      const response = await fetch('http://localhost:3000/groceries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItemObj)
      });
  
      if (!response.ok) {
        throw new Error('Failed to add new item');
      }
  
      const data = await response.json();
      setGroceryItems(prevItems => [...prevItems, data]);
      setNewItem('');
    } catch (error) {
      console.error('Error adding new item:', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/groceries/${itemId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      setGroceryItems(prevItems => prevItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  const handleReset = async () => {
    try {
      const response = await fetch('http://localhost:3000/groceries/reset', {
        method: 'POST'
      });
  
      if (!response.ok) {
        throw new Error('Failed to reset grocery list');
      }
  
      fetchGroceryItems();
    } catch (error) {
      console.error('Error resetting grocery list:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter grocery items based on search query
  const filteredItems = groceryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group grocery items by category
  const groupedItems = {};
  filteredItems.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });

  
  const handleDownload = () => {
    // Generate text content for the download
    let downloadContent = '';
    Object.entries(groupedItems).forEach(([category, items]) => {
      downloadContent += `${category}:\n`;
      items.forEach(item => {
        downloadContent += `- ${item.name}\n`;
      });
      downloadContent += '\n';
    });

    // Create a Blob with the text content
    const blob = new Blob([downloadContent], { type: 'text/plain' });

    // Create a temporary link element to trigger the download
    const element = document.createElement('a');
    element.href = URL.createObjectURL(blob);
    element.download = 'grocery_list.txt';
    document.body.appendChild(element);

    // Trigger the download
    element.click();

    // Remove the temporary link element
    document.body.removeChild(element);
  };


  return (
    <>
      <div className="grocery-list-container">
        <div className="grocery-list">
          <h2>Grocery List</h2>
          <h1>You may search this list and delete any items by clicking on their name</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search items..."
          />
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="category">
              <h3>{category}</h3>
              <ul>
                {items.map(item => (
                  <li key={item._id}>
                   
                    <button onClick={() => handleDelete(item._id)}> {item.name}</button>
                  </li>
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
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Dairy">Dairy</option>
              <option value="Grains">Grains</option>
              <option value="Protein">Protein</option>
              <option value="Others">Others</option>
            </select>
            <button type="submit">Add Item</button>
            <br></br>
            <button type="button" onClick={handleReset}>Reset</button>
            <br></br>
            <button onClick={handleDownload}>Download Grocery List</button>
          </form>
        </div>
      </div>
      <Link to="/" className="back-to-home-link">Back to Home Page</Link>
    </>
  );
};

export default GroceryListPage;