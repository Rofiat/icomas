import {React, useState} from 'react';

const NewPage = () => {
      // Sample list of items
      const items = [
        { id: 1, name: 'iPhone', price: 1100 },
        { id: 2, name: 'Laptop', price: 800 },
        { id: 3, name: 'Desktop', price: 50 },
        { id: 4, name: 'iPhone', price: 40 },
        { id: 5, name: 'Laptop', price: 10 },
        { id: 6, name: 'Desktop', price: 200 },
      ];

      // State to track the selected filter range
      const [selectedRange, setSelectedRange] = useState('all'); // Default: Show all items

      // Function to handle radio button change
      const handleRangeChange = (event) => {
        setSelectedRange(event.target.value);
      };

      // Filter items based on the selected range
      const filteredItems = items.filter((item) => {
        if (selectedRange === 'all') {
          return true; // Show all items
        } else if (selectedRange === 'under20') {
          return item.price < 20; // Show items with price < 20
        } else if (selectedRange === '20to40') {
          return item.price >= 20 && item.price <= 40; // Show items with price between 20 and 40
        } else if (selectedRange === 'over40') {
          return item.price > 40; // Show items with price > 40
        } else if (selectedRange === 'cheap') {
          return item.price < 1000; // Show items with price < 1000
        } else if (selectedRange === 'expensive') {
          return item.price >= 1000; // Show items with price >= 1000
        } else {
          return false;
        }
      });
      console.log(filteredItems);
      return (
        <div className='container'>
          <h2 className="title">React Js Filter by Range with Radio Button</h2>

          {/* Radio buttons for filter range */}
          <div className="radio-button">
            <label>
              <input
                type="radio"
                value="all"
                checked={selectedRange === 'all'}
                onChange={handleRangeChange}
                className="radio-input"
              />
              All Items
            </label>
          </div>
          <div className="radio-button">
            <label>
              <input
                type="radio"
                value="under20"
                checked={selectedRange === 'under20'}
                onChange={handleRangeChange}
                className="radio-input"
              />
              Price Under $20
            </label>
          </div>
          <div className="radio-button">
            <label>
              <input
                type="radio"
                value="20to40"
                checked={selectedRange === '20to40'}
                onChange={handleRangeChange}
                className="radio-input"
              />
              Price $20 - $40
            </label>
          </div>
          <div className="radio-button">
            <label>
              <input
                type="radio"
                value="over40"
                checked={selectedRange === 'over40'}
                onChange={handleRangeChange}
                className="radio-input"
              />
              Price Over $40
            </label>
          </div>
          <div className="radio-button">
            <label>
              <input
                type="radio"
                value="cheap"
                checked={selectedRange === 'cheap'}
                onChange={handleRangeChange}
                className="radio-input"
              />
              Cheap Items (Under $1000)
            </label>
          </div>
          <div className="radio-button">
            <label>
              <input
                type="radio"
                value="expensive"
                checked={selectedRange === 'expensive'}
                onChange={handleRangeChange}
                className="radio-input"
              />
              Expensive Items ( $1000 and Above)
            </label>
          </div>

          {/* Display filtered items */}
          <ul className="item-list">
            {filteredItems.map((item) => (
              <li key={item.id} className="item">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>

      );
    }

export default NewPage;
  