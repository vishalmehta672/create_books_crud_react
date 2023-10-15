import React from "react";
import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Title</label>
        <input
          className="input"
          type="text"
          onChange={handleOnChange}
          value={title}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
