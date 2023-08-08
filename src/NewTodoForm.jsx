import { useState } from "react";
export function NewTodoForm({ onFormSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onFormSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label style={{
          fontSize: "2.75rem",
          textAlign: "center",
          marginBottom: "5px",
          fontWeight: "700"
        }} htmlFor="title">Todo App</label>
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
