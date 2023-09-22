import React, { useState } from "react";

const TravelList = () => {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ]);
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} items={items} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};
function Logo() {
  return <h1>🌴 Travel-list 👜</h1>;
}

function Form({ setItems, items }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const item = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    handleAddItem(item);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item}></Item>
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already pack </em>
    </footer>
  );
}

export default TravelList;
