import React, { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form action="" className="book-edit" onSubmit={handleOnSubmit}>
      <label htmlFor="">Title</label>
      <input
        type="text"
        onChange={handleChange}
        value={title}
        className="input"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
