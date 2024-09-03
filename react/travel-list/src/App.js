import {useState} from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats />
      {/* <button onClick={()=> setItems({...items.push({id: 3, description:"description" , quantity:2})})}>dsadas</button> */}
    </div>
  );
}

function Logo() {
  return <h1>🏝️ FAR AWAY 💼</h1>;
}

function Form({setItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    const newItem = {id: Date.now(), description:description , quantity:quantity, packed:false};
    setItems(prevItems => [...prevItems, newItem]);
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you 😍 trip ? </h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>

    </form>
  );
}

function PackingList({items, setItems}) {
  return <div className="list">
      <ul>
        {items.map((item) => (<Item item={item} key={item.id} setItems={setItems} />))}
      </ul>
    </div>
}

function Item({item, setItems}) {
  function checkItem() {
    setItems(prevItems => prevItems.map(items => items.id === item.id ? {...items, packed : !item.packed} : items))
  }
  function removeItem() {
    setItems(prevItems => prevItems.filter(items => items.id !== item.id));
  }
  return (
    <li>
      <input type="checkbox" checked={item.packed ? true:false} onClick={checkItem}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={removeItem}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
