import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [newItem, setNewItem] = useState('');
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setShoppingList([...shoppingList, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    const updatedList = shoppingList.filter((_, i) => i !== index);
    setShoppingList(updatedList);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Shopping List</h1>
      <div className="card">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem}>Add</button>
        <ul>
          {shoppingList.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>
          You have {shoppingList.length} items in your shopping list.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
