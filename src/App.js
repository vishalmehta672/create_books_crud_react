import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookByID = (id) => {
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deleteBook);
  };

  const editBookById = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  const createBook = (title) => {
    const createBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(createBook);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookByID} />
    </div>
  );
}

export default App;
