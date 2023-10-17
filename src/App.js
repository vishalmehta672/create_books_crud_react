import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const deleteBookByID = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deleteBook);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const createBook = [...books, response.data];
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
